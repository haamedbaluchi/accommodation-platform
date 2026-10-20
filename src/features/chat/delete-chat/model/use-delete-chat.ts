import { chatCrudApi } from '@entities/chat';
import { useMutation } from '@tanstack/react-query';

export const useDeleteChat = () => {
  return useMutation({
    mutationKey: ['delete', 'chat'],
    mutationFn: chatCrudApi.deleteChat,
  });
};
