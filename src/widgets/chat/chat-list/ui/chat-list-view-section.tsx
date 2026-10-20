'use client';

import { useIsFetching } from '@tanstack/react-query';
import { EmptyChatList } from './empty-chat-list';
import { useSendChatMessage } from '@features/chat/send-message/model/useSendChatMessage';
import { useActiveChatMessages } from '../model/use-active-chat-messages';
import { ChatMessagesLoader, MessageList } from '@widgets/chat/chat-messages';
import { usePanelStore } from '@widgets/trip/trip-panel/model/panel.store';

export function ChatListViewSection() {
  const isAsideOpen = usePanelStore((state) => state.isAsideOpen);
  const { activeChatId, messages } = useActiveChatMessages();
  const { resendMessage } = useSendChatMessage();

  const isMessagesFetching =
    useIsFetching({
      queryKey: ['chat', 'messages', activeChatId],
    }) > 0;

  if (isMessagesFetching && messages.length === 0) {
    return (
      <div className="min-h-0 flex-1 overflow-y-auto custom-scrollbar">
        <ChatMessagesLoader />
      </div>
    );
  }

  if (!activeChatId || messages.length === 0) {
    return (
      <div className="min-h-0 flex-1 overflow-y-auto custom-scrollbar">
        <EmptyChatList />
      </div>
    );
  }

  return (
    <div className="min-h-0 flex-1 overflow-y-auto no-scrollbar sm:custom-scrollbar">
      <MessageList
        messages={messages}
        isAsideOpen={isAsideOpen}
        onResend={resendMessage}
      />
    </div>
  );
}
