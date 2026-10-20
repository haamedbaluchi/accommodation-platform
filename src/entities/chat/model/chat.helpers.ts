import type { ChatMessage } from './message.types';

export function normalizeContent(value?: string): string {
  return (value ?? '').trim();
}

export function getMessageTime(message: ChatMessage): number {
  return message.createdAt ?? Number.MAX_SAFE_INTEGER;
}

export function isSameLogicalMessage(
  localMessage: ChatMessage,
  serverMessage: ChatMessage,
): boolean {
  if (localMessage.role !== serverMessage.role) return false;

  const localContent = normalizeContent(localMessage.content);
  const serverContent = normalizeContent(serverMessage.content);

  if (!localContent || !serverContent) return false;

  return localContent === serverContent;
}

export function mergeMessages(
  localMessages: ChatMessage[],
  serverMessages: ChatMessage[],
): ChatMessage[] {
  const serverIds = new Set(serverMessages.map((m) => m.id));

  const serverMessagesWithLocalTime = serverMessages.map((serverMsg) => {
    const localEquivalent = localMessages.find(
      (local) =>
        !serverIds.has(local.id) && isSameLogicalMessage(local, serverMsg),
    );

    if (localEquivalent?.createdAt) {
      return { ...serverMsg, createdAt: localEquivalent.createdAt };
    }
    return serverMsg;
  });

  const preservedLocalMessages = localMessages.filter((localMessage) => {
    if (serverIds.has(localMessage.id)) return false;
    if (localMessage.isLoading === true) return true;
    if (localMessage.isError === true) return true;
    if (localMessage.hidden === true) return true;

    if (localMessage.isLocal === true) {
      const hasEquivalent = serverMessagesWithLocalTime.some((s) =>
        isSameLogicalMessage(localMessage, s),
      );
      return !hasEquivalent;
    }

    if (localMessage.role === 'assistant' && !localMessage.isLoading) {
      const hasEquivalent = serverMessagesWithLocalTime.some((s) =>
        isSameLogicalMessage(localMessage, s),
      );
      return !hasEquivalent;
    }

    return false;
  });

  const merged = [...serverMessagesWithLocalTime, ...preservedLocalMessages];

  return merged.sort((a, b) => {
    const timeDiff = getMessageTime(a) - getMessageTime(b);
    if (timeDiff !== 0) return timeDiff;
    if (a.role === 'user' && b.role === 'assistant') return -1;
    if (a.role === 'assistant' && b.role === 'user') return 1;
    return 0;
  });
}