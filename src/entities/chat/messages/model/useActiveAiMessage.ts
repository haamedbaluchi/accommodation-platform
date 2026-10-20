import { useMemo } from 'react';
import { useChatStore } from '../../model/chat.store';

export function useActiveAiMessage() {
  const activeChatId = useChatStore((state) => state.activeChatId);
  const chats = useChatStore((state) => state.chats);

  return useMemo(() => {
    if (!activeChatId) return null;

    const messages = chats[activeChatId] ?? [];

    for (let index = messages.length - 1; index >= 0; index -= 1) {
      const message = messages[index];

      if (
        message.role === 'assistant' &&
        (message.aiData?.structured || message.aiData?.finalOutput?.structured)
      ) {
        return message;
      }
    }

    return null;
  }, [activeChatId, chats]);
}