import { Chat } from '@entities/chat';
import { DeleteChatButton } from '@features/chat/delete-chat';
import { cn, dateFormatter } from '@shared/lib';
import Image from 'next/image';
import React from 'react';

export function ChatItem({
  chat,
  onClick,
  active,
  onDelete,
}: {
  chat: Chat;
  onClick: (chatId: string) => void;
  active: boolean;
  onDelete: VoidFunction;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={(e) =>
        (e.key === 'Enter' || e.key === ' ') && onClick(chat.chat_id)
      }
      onClick={() => onClick(chat.chat_id)}
      className={cn(
        'flex gap-2 items-center pr-2 py-1 rounded-md cursor-pointer transition-colors group',
        active ? 'bg-accent' : 'hover:bg-accent/50',
      )}
    >
      <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-md overflow-hidden shrink-0">
        <Image
          src="/images/default_chat.jpg"
          alt={chat?.image_alt ?? chat?.title}
          fill
          sizes="40px"
        />
      </div>

      <span className="flex flex-col items-start font-yekta min-w-0 flex-1">
        <span className="text-sm md:text-base font-bold text-text-main truncate w-full">
          {chat.title}
        </span>
        {chat.updated_at && (
          <span className="font-normal text-[0.625rem] sm:text-xs text-text-foreground">
            {dateFormatter(chat.updated_at)}
          </span>
        )}
      </span>

      <div className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200">
        <DeleteChatButton chatId={chat.chat_id} onDelete={onDelete} />
      </div>
    </div>
  );
}
