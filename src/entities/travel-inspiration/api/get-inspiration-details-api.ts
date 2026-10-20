import { apiClient } from '@shared/api';
import { InspirationDetails } from '../model/types';

export interface InspirationDetailsResponse {
  success: boolean;
  message: string;
  data: InspirationDetails;
}

export const getInspirationDetailsApi = (inspirationId: string) =>
  apiClient<InspirationDetailsResponse>(
    `/api/v1/travel-inspirations/${inspirationId}`,
  );
