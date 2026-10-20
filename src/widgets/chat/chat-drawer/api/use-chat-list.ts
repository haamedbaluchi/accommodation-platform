import { chatCrudApi } from '@entities/chat';
import { useQuery } from '@tanstack/react-query';

export const useChatList = () => {
  return useQuery({
    queryKey: ['chat', 'list'],
    queryFn: chatCrudApi.chatList,
  });
};
