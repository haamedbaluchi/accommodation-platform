// features/chat-ai/send-message/model/useSendChatMessage.ts
'use client';

import { useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'sonner';
import { generateId } from '@shared/lib';
import { MODAL_ITEMS, useModalStore } from '@_app/modal';
import { useAuthStore } from '@features/auth';
// import { useCreateChat } from '@features/chat-ai/create-chat/model/useCreateChat';
import { chatCrudApi } from '@entities/chat';
import {
  useChatStore,
  usePendingPromptStore,
  unwrapAiResponse,
  buildAiDataFromResponse,
  getAssistantContent,
  type ChatMessage,
} from '@entities/chat';
// import { sendMessageStream } from '../api/sendMessageStream';
import { useChatSendingStore } from './useChatSendingStore';
import { sendMessageStream } from '../api/sendMessageStream';

import { useCreateChat } from '@features/chat/create-chat/model/useCreateChat';

export function useSendChatMessage() {

  const activeChatId = useChatStore((state) => state.activeChatId);
  const setActiveChatId = useChatStore((state) => state.setActiveChatId);
  const setChatSessionId = useChatStore((state) => state.setChatSessionId);
  const getChatSessionId = useChatStore((state) => state.getChatSessionId);
  const addMessage = useChatStore((state) => state.addMessage);
  const updateMessage = useChatStore((state) => state.updateMessage);

  const createChatMutation = useCreateChat();
  const userId = useAuthStore((state) => state.user?.id ?? null);
  const router = useRouter();
  const searchParams = useSearchParams();

  const isSending = useChatSendingStore((s) => s.isSending);
  const startSending = useChatSendingStore((s) => s.startSending);
  const stopSending = useChatSendingStore((s) => s.stopSending);
  const cancelSending = useChatSendingStore((s) => s.cancelSending);

  const currentAssistantMessageRef = useRef<{
    chatId: string;
    messageId: string;
  } | null>(null);

  const sendChatMessage = async (content: string) => {
    const trimmedContent = content.trim();
    if (!trimmedContent) return;

    if (!userId) {
      usePendingPromptStore
        .getState()
        .enqueuePendingPrompt(trimmedContent, 'chat');
      useModalStore.getState().openModal(MODAL_ITEMS.AUTH);
      return;
    }

    const abortController = startSending();

    try {
      let chatId = activeChatId;
      // FIX: به‌جای خوندن دستی از useChatStore.getState()، از اکشن خود استور استفاده می‌شه
      let sessionId: string | undefined = chatId ? getChatSessionId(chatId) : undefined;

      if (!chatId) {
        const newChat = await createChatMutation.mutateAsync({
          title: trimmedContent.slice(0, 30),
        });

        chatId = newChat.chat_data.chat_id;
        sessionId = newChat.chat_data.session_id;

        // FIX: setActiveChatId/setChatSessionId زوستند sync هستن؛
        // بلافاصله بعدشون chatId/sessionId معتبرن. تاخیر ۵۰ms مصنوعی
        // فقط برای sync شدن URL بود و نباید جلوی ارسال پیام رو بگیره،
        // پس router.replace به‌صورت fire-and-forget انجام می‌شه.
        setActiveChatId(chatId);
        setChatSessionId(chatId, sessionId);

        const params = new URLSearchParams(searchParams?.toString());
        params.delete('_rsc');
        params.set('id', chatId);
        router.replace(`?${params.toString()}`);
      }

      const userMessageId = generateId();
      const assistantMessageId = generateId();

      currentAssistantMessageRef.current = {
        chatId,
        messageId: assistantMessageId,
      };

      const existingMessages = useChatStore.getState().chats[chatId] ?? [];
      const lastServerMessage = [...existingMessages]
        .reverse()
        .find((m) => !m.isLocal);
      const baseTime = lastServerMessage?.createdAt
        ? lastServerMessage.createdAt + 1000
        : Date.now();

      addMessage(chatId, {
        id: userMessageId,
        role: 'user',
        content: trimmedContent,
        isLoading: false,
        isError: false,
        isLocal: true,
        createdAt: baseTime,
      });

      addMessage(chatId, {
        id: assistantMessageId,
        role: 'assistant',
        content: '',
        streamLabel: 'در حال آماده‌سازی پاسخ...',
        isLoading: true,
        isError: false,
        isLocal: true,
        createdAt: baseTime + 1,
      });

      let streamedText = '';

      try {
        const rawResponse = await sendMessageStream({
          sessionId,
          userId: String(userId),
          content: trimmedContent,
          signal: abortController.signal,
          onEvent: (event) => {
            if (event.type === 'state') {
              updateMessage(chatId!, assistantMessageId, {
                streamLabel: event.label,
                isLoading: true,
              });
              return;
            }

            if (event.type === 'token') {
              streamedText += event.text;
              updateMessage(chatId!, assistantMessageId, {
                content: streamedText,
                streamLabel: undefined,
                isLoading: true,
              });
              return;
            }

            if (event.type === 'error') {
              updateMessage(chatId!, assistantMessageId, {
                content: event.message || 'خطا در دریافت پاسخ هوش مصنوعی',
                streamLabel: undefined,
                isLoading: false,
                isError: true,
                errorText: event.message || 'خطا در دریافت پاسخ هوش مصنوعی',
              });
            }
          },
        });

        const response = unwrapAiResponse(rawResponse);

        if (response.session_id) {
          setChatSessionId(chatId!, response.session_id);
        }

        const assistantContent =
          streamedText.trim() || getAssistantContent(response);

        updateMessage(chatId!, assistantMessageId, {
          content: assistantContent,
          streamLabel: undefined,
          isLoading: false,
          isError: response.status === 'error',
          isLocal: false,
          aiData: buildAiDataFromResponse(response, sessionId),
        });

        if (response.status === 'error') {
          toast.error(response.message || 'خطا در پردازش پاسخ هوش مصنوعی');
        }
      } catch (err) {
        const isAbort = err instanceof DOMException && err.name === 'AbortError';

        if (isAbort) {
          updateMessage(chatId!, assistantMessageId, {
            streamLabel: undefined,
            isLoading: false,
            content: streamedText.trim() || 'پاسخ توسط شما متوقف شد.',
          });
        } else {
          console.error('sendChatMessage stream error:', err);
          updateMessage(chatId!, assistantMessageId, {
            content: 'خطا در دریافت پاسخ هوش مصنوعی',
            streamLabel: undefined,
            isLoading: false,
            isError: true,
            errorText: 'خطا در دریافت پاسخ هوش مصنوعی',
          });
          toast.error('خطا در دریافت پاسخ هوش مصنوعی');
        }
      }
    } finally {
      stopSending();
      currentAssistantMessageRef.current = null;
    }
  };

  const resendMessage = async (messageId: string) => {
    if (!activeChatId) return;
    const messages = useChatStore.getState().chats[activeChatId] ?? [];
    const target = messages.find((m) => m.id === messageId);
    if (!target?.content) return;
    await sendChatMessage(target.content);
  };

  return {
    sendChatMessage,
    resendMessage,
    cancelSending,
    isPending: createChatMutation.isPending,
    isSending,
  };
}