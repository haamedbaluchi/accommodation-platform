import { apiClient } from '@shared/api';

export const removeInspirationFromFavoriteApi = (inspirationId: string) =>
  apiClient(`/api/v1/travel-inspirations/${inspirationId}/favorite`,{
    method:"DELETE"
  });
