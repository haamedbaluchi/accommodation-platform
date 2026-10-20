'use client';

import { useRef } from 'react';
import { MessageItem } from './message-item';
import { useAutoScroll } from '../model/use-auto-scroll';
import { AssistantMessage } from '@entities/chat';

interface MessageListProps {
  messages: AssistantMessage[];
  isAsideOpen?: boolean;
  onResend?: (messageId: string) => void;
}

export function MessageList({
  messages,
  isAsideOpen,
  onResend,
}: MessageListProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  const visibleMessages = messages.filter((message) => !message.hidden);

  useAutoScroll(visibleMessages, bottomRef, {
    enabled: true,
    behavior: 'smooth',
  });

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap- px-3 py-4 sm:px-4 lg:gap-5 lg:px-6 xl:max-w-5xl 2xl:max-w-7xl">
      {visibleMessages.map((message) => (
        <MessageItem
          key={message.id}
          message={message}
          isAsideOpen={isAsideOpen}
          onResend={onResend}
        />
      ))}

      <div ref={bottomRef} />
    </div>
  );
}
