// features/chat-ai/revise-message/api/reviseMessage.ts
import { apiClient } from '@shared/api';
import type { ReviseMessageRequest, SendMessageResponse } from '@entities/chat';

export const reviseMessage = ({
  sessionId,
  feedback,
  parsedRequest,
  researchData,
  itineraryDraft,
}: ReviseMessageRequest) =>
  apiClient<SendMessageResponse>('/api/v1/revise', {
    method: 'POST',
    body: JSON.stringify({
      session_id: sessionId,
      feedback,
      parsed_request: parsedRequest,
      research_data: researchData,
      itinerary_draft: itineraryDraft,
    }),
  });