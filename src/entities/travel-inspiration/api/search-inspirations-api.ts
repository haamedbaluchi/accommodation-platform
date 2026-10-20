import { apiClient } from '@shared/api';
import { Inspiration } from '../model/types';

export interface SearchInspirationsPayload {
  q: string;
  limit?: number;
}

export interface SearchInspirationsResponse {
  success: boolean;
  message: string;
  data: Inspiration[];
}

export const searchInspirationsApi = (payload: SearchInspirationsPayload) =>
  apiClient<SearchInspirationsResponse, SearchInspirationsPayload>(
    '/api/v1/travel-inspirations/search',
    {
      method: 'GET',
      params: payload,
    },
  );