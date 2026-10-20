'use client';

import { Loader } from '@shared/ui';
import React from 'react';
import { ChatItem } from './chat-item';
import { useRouter, useSearchParams } from 'next/navigation';
import { useChatStore, Chat } from '@entities/chat';

interface ChatListProps {
  chatList?: Chat[];
  loading?: boolean;
  isError?: boolean;
  error?: any;
  onItemClick?: () => void;
}

export function ChatList({
  chatList = [],
  loading,
  isError,
  error,
  onItemClick,
}: ChatListProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const setActiveChatId = useChatStore((state) => state.setActiveChatId);
  const activeChatId: string | null = searchParams.get('id');

  const handleItemClick = (chatId: string) => {
    setActiveChatId(chatId);

    const params = new URLSearchParams(searchParams?.toString());
    params.delete('_rsc');
    params.set('id', chatId);
    router.push(`?${params.toString()}`);

    onItemClick?.();
  };

  const handleRemoveParam = (chatId: string) => {
    if (chatId === activeChatId) {
      const params = new URLSearchParams(searchParams.toString());

      params.delete('id');

      // console.log("test")
      router.replace(`?${params.toString()}`);
    }
    return
  };
  
  if (loading) {
    return (
      <div className="flex justify-center h-50">
        <Loader size={8} />
      </div>
    );
  }

  if (isError) {
    return (
      <span className="font-normal text-sm sm:text-base text-text-danger font-yekta">
        {error?.message ?? 'مشکلی در دریافت لیست گفتگوها :('}
      </span>
    );
  }

  return (
    <div className="flex flex-col gap-3 overflow-y-auto custom-scrollbar pl-3">
      {chatList.length <= 0 ? (
        <span className="text-sm sm:text-base font-normal text-text-secondary font-yekta">
          هنوز گفتگویی موجود نیست.
        </span>
      ) : (
        chatList.map((chat) => (
          <ChatItem
            chat={chat}
            key={chat.chat_id}
            onClick={handleItemClick}
            active={activeChatId === chat.chat_id}
            onDelete={() => handleRemoveParam(chat.chat_id)}
          />
        ))
      )}
    </div>
  );
}
