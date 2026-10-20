import type { Chat } from '../../../model/chat.types';

export interface CreateChatResponse {
  success: boolean;
  message: string;
  chat_data: Chat;
}