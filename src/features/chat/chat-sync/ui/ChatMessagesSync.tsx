// features/chat-ai/chat-sync/ui/ChatMessagesSync.tsx
'use client';

import { useEffect } from 'react';
import {
  useChatStore,
  unwrapAiResponse,
  buildAiDataFromResponse,
  type AssistantMessage,
} from '@entities/chat';
import type {
  ChatHistoryMessageDto,
  SendMessageResponse,
} from '@entities/chat';
import { useChatMessages } from '../api/useChatMessages';

interface ChatMessagesSyncProps {
  chatId: string | null;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function parseJsonSafely(value: unknown): unknown {
  if (typeof value !== 'string') return value;
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}

function getNestedRecord(
  source: Record<string, unknown>,
  key: string,
): Record<string, unknown> | null {
  const value = parseJsonSafely(source[key]);
  return isRecord(value) ? value : null;
}

function looksLikeAiPayload(value: Record<string, unknown>): boolean {
  return Boolean(
    isRecord(value.final_output) ||
      isRecord(value.finalOutput) ||
      typeof value.answer === 'string' ||
      typeof value.question === 'string' ||
      typeof value.status === 'string' ||
      isRecord(value.structured),
  );
}

/**
 * فقط مسئول «پیدا کردن» payload خام AI داخل شکل ناسازگار backend هست.
 * تبدیل payload به view-model دیگه اینجا انجام نمی‌شه — اون کار
 * entities/chat-ai/api/mapper#buildAiDataFromResponse هست (فیکس باگ
 * duplicate mapper).
 */
function extractAiPayload(
  message: Record<string, unknown>,
): Record<string, unknown> | null {
  const directCandidates: unknown[] = [
    message.aiData,
    message.ai_response,
    message.aiResponse,
    message.payload,
    message.data,
    message.meta,
    message.metadata,
    message.result,
    message.response,
    message.content,
    message,
  ];

  for (const candidate of directCandidates) {
    const parsed = parseJsonSafely(candidate);
    if (!isRecord(parsed)) continue;

    if (looksLikeAiPayload(parsed)) return parsed;

    const nestedKeys = ['payload', 'data', 'result', 'response', 'content'];
    for (const key of nestedKeys) {
      const nested = getNestedRecord(parsed, key);
      if (nested && looksLikeAiPayload(nested)) return nested;
    }
  }

  return null;
}

function extractTextFromParsedAssistantPayload(
  parsed: Record<string, unknown>,
): string {
  const finalOutput =
    (isRecord(parsed.final_output) ? parsed.final_output : null) ??
    (isRecord(parsed.finalOutput) ? parsed.finalOutput : null);

  const markdown = typeof finalOutput?.markdown === 'string' ? finalOutput.markdown.trim() : '';
  if (markdown) return markdown;

  const narrative = typeof finalOutput?.narrative === 'string' ? finalOutput.narrative.trim() : '';
  if (narrative) return narrative;

  const answer = typeof parsed.answer === 'string' ? parsed.answer.trim() : '';
  if (answer) return answer;

  const question = typeof parsed.question === 'string' ? parsed.question.trim() : '';
  if (question) return question;

  const messageText = typeof parsed.message === 'string' ? parsed.message.trim() : '';
  if (messageText) return messageText;

  return '';
}

function getMessageContent(
  message: ChatHistoryMessageDto,
  aiData?: AssistantMessage['aiData'],
): string {
  if (message.role === 'assistant') {
    const markdown = aiData?.finalOutput?.markdown?.trim();
    if (markdown) return markdown;

    const narrative = aiData?.finalOutput?.narrative?.trim();
    if (narrative) return narrative;

    const answer = aiData?.answer?.trim();
    if (answer) return answer;

    const question = aiData?.question?.trim();
    if (question) return question;
  }

  if (typeof message.content === 'string' && message.content.trim()) {
    const parsed = parseJsonSafely(message.content);

    if (message.role === 'assistant' && isRecord(parsed)) {
      return extractTextFromParsedAssistantPayload(parsed);
    }

    return message.content;
  }

  return '';
}

export function ChatMessagesSync({ chatId }: ChatMessagesSyncProps) {
  const mergeServerMessages = useChatStore((state) => state.mergeServerMessages);
  const { data } = useChatMessages(chatId ?? '');

  useEffect(() => {
    if (!chatId || !data?.data?.messages) return;

    const currentMessages = useChatStore.getState().chats[chatId] ?? [];
    const hasLoadingMessage = currentMessages.some((m) => m.isLoading);
    if (hasLoadingMessage) return;

    const normalizedMessages = data.data.messages
      .filter(
        (message) =>
          message.role === 'user' ||
          message.role === 'assistant' ||
          message.role === 'guest',
      )
      .map((message): AssistantMessage => {
        const rawPayload = extractAiPayload(message as unknown as Record<string, unknown>);

        const aiData = rawPayload
          ? buildAiDataFromResponse(
              unwrapAiResponse(rawPayload as SendMessageResponse),
              rawPayload.session_id as string | undefined,
            )
          : undefined;

        return {
          id: message.message_id,
          role: message.role === 'guest' ? 'user' : (message.role as 'user' | 'assistant'),
          content: getMessageContent(message, aiData),
          aiData,
          isLoading: false,
          isError: aiData?.status === 'error',
          errorText: undefined,
          isLocal: false,
          createdAt: message.created_at ? new Date(message.created_at).getTime() : Date.now(),
        };
      });

    mergeServerMessages(chatId, normalizedMessages);
  }, [chatId, data, mergeServerMessages]);

  return null;
}