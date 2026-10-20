'use client';

import { cn } from '@shared/lib';
import { MessageBubble } from './message-bubble';
import { MessageActions } from './message-actions';
import { AssistantMessage } from '@entities/chat';

interface MessageItemProps {
  message: AssistantMessage;
  isAsideOpen?: boolean;
  onResend?: (messageId: string) => void;
}

export function MessageItem({
  message,
  isAsideOpen,
  onResend,
}: MessageItemProps) {
  const isUser = message.role === 'user';

  return (
    <div className="group flex w-full justify-start">
      <div
        className={cn(
          isUser
            ? 'flex max-w-[88%] flex-col items-start gap-1 sm:max-w-[78%] md:max-w-[72%] '
            : 'flex w-full flex-col items-start gap-1',
          isUser && isAsideOpen
            ? 'md:max-w-[95%] lg:max-w-[85%] xl:max-w-[72%]'
            : '',
        )}
      >
        <MessageBubble message={message} isUser={isUser} />

        {!message.isLoading && (
          <MessageActions
            content={message.content}
            isUser={isUser}
            isError={message.isError}
            errorText={message.errorText}
            onResend={() => onResend?.(message.id)}
          />
        )}
      </div>
    </div>
  );
}





