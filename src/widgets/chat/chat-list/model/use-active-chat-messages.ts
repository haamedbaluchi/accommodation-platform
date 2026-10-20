import { useChatStore } from "@entities/chat";


const EMPTY_MESSAGES: any[] = [];

export function useActiveChatMessages() {
  const activeChatId = useChatStore((state) => state.activeChatId);

  const messages = useChatStore((state) => {
    if (!activeChatId) return EMPTY_MESSAGES;
    return state.chats[activeChatId] ?? EMPTY_MESSAGES;
  });

  return {
    activeChatId,
    messages,
    hasMessages: messages.length > 0,
  };
}