import { chatCrudApi } from '@entities/chat';
import { useQuery } from '@tanstack/react-query';

export function useChatMessages(chatId: string) {
  return useQuery({
    queryKey: ['chat', 'messages', chatId],
    queryFn: () => chatCrudApi.chatMessages({ chatId }),
    enabled: !!chatId,
    staleTime: 0,                  // ✅ همیشه stale — ولی فقط موقع invalidate refetch میشه
    refetchOnWindowFocus: false,   // ✅ focus → refetch نکن
    refetchOnMount: true,          // ✅ mount اول → fetch کن
  });
}