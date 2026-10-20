
export interface ChatHistoryMessageDto {
  message_id: string;
  role: 'user' | 'assistant' | 'guest' | 'system';
  content?: string;
  created_at?: string;
  [key: string]: unknown;
}

export interface ChatMessagesResponse {
  success: boolean;
  message: string;
  data: {
    chat_id: string;
    title: string;
    messages: ChatHistoryMessageDto[];
  };
}