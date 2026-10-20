import { useMutation } from '@tanstack/react-query';
import type { ApiError } from '@shared/api';
import type { SendMessageRequest, SendMessageResponse } from '@entities/chat';
import { sendMessage } from './sendMessageStream';

export const useSendMessage = () => {
  return useMutation<SendMessageResponse, ApiError, SendMessageRequest>({
    mutationKey: ['chat', 'sendMessage'],
    mutationFn: sendMessage,
  });
};