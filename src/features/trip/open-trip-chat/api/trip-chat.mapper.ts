import { tripApi } from "@features/trip/api";

export interface OpenTripChatResult {
  chatId: string;
  sessionId: string;
}

export function mapTripChatResponse(
  response: Awaited<ReturnType<typeof tripApi.getChatByTrip>>,
): OpenTripChatResult {
  const chatId =
    response.chat_data?.chat_id ??
    response.chat_id;

  const sessionId =
    response.chat_data?.session_id ??
    response.session_id;

  if (!chatId || !sessionId) {
    throw new Error('INVALID_CHAT_RESPONSE');
  }

  return {
    chatId,
    sessionId,
  };
}