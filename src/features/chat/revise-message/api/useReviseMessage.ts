// features/chat-ai/revise-message/api/useReviseMessage.ts
import { ApiError } from '@shared/api';
import { useMutation } from '@tanstack/react-query';
import type { ReviseMessageRequest, SendMessageResponse } from '@entities/chat';
import { reviseMessage } from './reviseMessage';

export const useReviseMessage = () => {
  return useMutation<SendMessageResponse, ApiError, ReviseMessageRequest>({
    mutationKey: ['chat', 'reviseMessage'],
    mutationFn: reviseMessage,
  });
};