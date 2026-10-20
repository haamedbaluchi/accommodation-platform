// entities/tourist-place/api/get-tourist-place-ai-details-api.ts
import { apiClient } from '@shared/api';
import type { TouristPlaceAiDetailsResponse } from '../model/types';

export const getTouristPlaceAiDetailsApi = (uid: string) =>
  apiClient<TouristPlaceAiDetailsResponse>(
    `/api/v1/locations/tourist-places/${uid}/ai-details`,
  );