import { chatApi } from '@features/chat/api';
import { SendMessageRequest, SendMessageResponse } from '@features/chat/chat-ai';
import { ApiError } from '@shared/api';

import { useMutation } from '@tanstack/react-query';

export const useSendMessage = () => {
  return useMutation<SendMessageResponse, ApiError, SendMessageRequest>({
    mutationKey: ['chat', 'sendMessage'],
    mutationFn: chatApi.sendMessage,
  });
};