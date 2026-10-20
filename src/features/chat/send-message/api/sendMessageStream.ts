// features/chat-ai/send-message/api/sendMessageStream.ts
import { streamClient } from '@shared/api';
import {
  
  type SendMessageResponse,
  type SendStreamMessageRequest,
} from '@entities/chat';

export async function sendMessageStream({
  sessionId,
  userId,
  content,
  onEvent,
  signal,
}: SendStreamMessageRequest): Promise<SendMessageResponse> {
  const response = await streamClient('/api/v1/chat/stream', {
    method: 'POST',
    headers: {
      Accept: 'text/event-stream',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      session_id: sessionId,
      user_id: userId,
      message: content,
    }),
    signal,
  });

  if (!response.ok) {
    throw new Error(`Stream request failed with status ${response.status}`);
  }

  return (await readSseStream(response, onEvent)) as SendMessageResponse;
}

export function sendMessage({
  sessionId,
  userId,
  content,
}: {
  sessionId?: string;
  userId: string;
  content: string;
}) {
  return apiClient<SendMessageResponse>('/api/v1/chat', {
    method: 'POST',
    body: JSON.stringify({
      session_id: sessionId,
      user_id: userId,
      message: content,
    }),
  });
}

import { apiClient } from '@shared/api';
import { readSseStream } from '@entities/chat/api';

