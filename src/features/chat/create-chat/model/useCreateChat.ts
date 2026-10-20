import { chatCrudApi } from '@entities/chat';
import type { CreateChatRequest, CreateChatResponse } from '@entities/chat';
import { ApiError } from '@shared/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export const useCreateChat = () => {
  const queryClient = useQueryClient();

  return useMutation<CreateChatResponse, ApiError, CreateChatRequest>({
    mutationKey: ['chat', 'createChat'],
    mutationFn: chatCrudApi.createChat,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['chat', 'list'] });
    },
    onError: (error) => {
      toast.error(error.message || 'خطا در ساخت گفتگو جدید');
    },
  });
};