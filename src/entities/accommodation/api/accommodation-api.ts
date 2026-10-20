import {
  buildExploreListQuery,
  ExploreListParams,
  ExploreListResponse,
} from '@entities/explore/model/shared-types';
import { AccommodationDTO } from '../model/types';
import { apiClient } from '@shared/api';

export const accommodationApi = {
  list: (params: ExploreListParams = {}) =>
    apiClient<ExploreListResponse<AccommodationDTO>>(
      `/api/v1/explore/accommodations?${buildExploreListQuery(params)}`,
    ),
  details: (id: string | number) =>
    apiClient<AccommodationDTO>(`/api/v1/explore/accommodations/${id}`),
};