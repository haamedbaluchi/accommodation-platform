import { apiClient } from '@shared/api';
import {
  ChatListResponse,
  ChatMessagesResponse,
  CreateChatResponse,
} from './contract/responses';
import { CreateChatRequest } from './contract/requests';

export const chatCrudApi = {
  chatList: () => apiClient<ChatListResponse>('/api/v1/chats/history'),

  chatMessages: ({ chatId }: { chatId: string }) =>
    apiClient<ChatMessagesResponse>(`/api/v1/chats/${chatId}/history`),

  createChat: ({ title, trip_id }: CreateChatRequest) =>
    apiClient<CreateChatResponse>('/api/v1/chats/new', {
      method: 'POST',
      body: JSON.stringify({ title, trip_id }),
    }),

  deleteChat: ({ chatId }: { chatId: string }) =>
    apiClient(`/api/v1/chats/${chatId}`, {
      method: 'DELETE',
    }),
};
