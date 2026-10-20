'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useChatStore } from '@entities/chat';
import { useChatList } from '@widgets/chat/chat-drawer';


export function ActiveChatSync() {
  const searchParams = useSearchParams();
  const setActiveChatId = useChatStore((state) => state.setActiveChatId);
  const setChatSessionId = useChatStore((state) => state.setChatSessionId);
  const currentActiveChatId = useChatStore((state) => state.activeChatId);

  const { data: chatListData } = useChatList();

  const chatId = searchParams?.get('id');

  useEffect(() => {
    if (chatId === currentActiveChatId) return;
    setActiveChatId(chatId);
  }, [chatId, currentActiveChatId, setActiveChatId]);

  useEffect(() => {
    if (!chatId || !chatListData?.data) return;

    const existingSession = useChatStore.getState().chatSessions[chatId];
    if (existingSession) return;

    const chat = chatListData.data.find((c) => c.chat_id === chatId);
    if (!chat?.session_id) return;

    setChatSessionId(chatId, chat.session_id);
  }, [chatId, chatListData, setChatSessionId]);

  return null;
}