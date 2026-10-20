import { RefObject, useEffect, useMemo } from 'react';

interface UseAutoScrollOptions {
  enabled?: boolean;
  behavior?: ScrollBehavior;
}

export function useAutoScroll(
  messages: Message[],
  bottomRef: RefObject<HTMLDivElement | null>,
  options?: UseAutoScrollOptions,
) {
  const enabled = options?.enabled ?? true;
  const behavior = options?.behavior ?? 'smooth';

  const scrollKey = useMemo(() => {
    const lastMessage = messages[messages.length - 1];
    if (!lastMessage) return 'empty';
    return [
      lastMessage.id,
      lastMessage.content?.length,
      lastMessage.isLoading,
      lastMessage.isError,
      messages.length,
    ].join(':');
  }, [messages]);

  useEffect(() => {
    if (!enabled) return;
    if (messages.length === 0) return;

    const timeoutId = setTimeout(() => {
      bottomRef.current?.scrollIntoView({
        behavior,
        block: 'nearest',
      });
    }, 50); 

    return () => clearTimeout(timeoutId);
  }, [scrollKey, enabled, behavior, bottomRef, messages.length]);
}