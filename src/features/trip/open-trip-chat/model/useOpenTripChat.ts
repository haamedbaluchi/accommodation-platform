'use client';

import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useOpenTripChatMutation } from '../api/useOpenTripChat';
import { useChatStore } from '@entities/chat';

export function useOpenTripChat() {
  const router = useRouter();

  const { mutateAsync, isPending } =
    useOpenTripChatMutation();

  const setActiveChatId = useChatStore(
    (state) => state.setActiveChatId,
  );

  const setChatSessionId = useChatStore(
    (state) => state.setChatSessionId,
  );

  const openTripChat = async (tripId: number) => {
    try {
      const { chatId, sessionId } =
        await mutateAsync(tripId);

      setActiveChatId(chatId);

      setChatSessionId(chatId, sessionId);

      router.push(`/chat_ai?id=${chatId}`);
    } catch {
      toast.error('باز کردن چت سفر با خطا مواجه شد.');
    }
  };

  return {
    openTripChat,
    isOpening: isPending,
  };
}