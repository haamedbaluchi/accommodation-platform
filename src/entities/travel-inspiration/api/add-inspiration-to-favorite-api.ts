import { apiClient } from '@shared/api';

export const addInspirationToFavoriteApi = (inspirationId: string) =>
  apiClient(`/api/v1/travel-inspirations/${inspirationId}/favorite`,{
    method:"POST"
  });
