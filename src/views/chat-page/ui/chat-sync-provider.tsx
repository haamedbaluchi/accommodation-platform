'use client';

import {
  ActiveChatSync,
  ChatMessagesSync,
  PendingPromptSync,
} from '@features/chat/chat-sync';
import { PendingTripSubmitSync } from '@features/trip/create-trip';
import { useActiveChatMessages } from '@widgets/chat/chat-list';

import { ReactNode } from 'react';

interface ChatSyncProviderProps {
  children: ReactNode;
}

export default function ChatSyncProvider({ children }: ChatSyncProviderProps) {
  const { activeChatId } = useActiveChatMessages();

  return (
    <>
      <ActiveChatSync />
      <ChatMessagesSync chatId={activeChatId} />
      <PendingPromptSync />
      <PendingTripSubmitSync />
      {children}
    </>
  );
}
