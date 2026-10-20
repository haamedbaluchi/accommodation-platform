import type { Chat } from '../../../model/chat.types';

export interface ChatListResponse {
  success: boolean;
  message: string;
  data: Chat[];
}