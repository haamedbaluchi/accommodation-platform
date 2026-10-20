import {
  buildExploreListQuery,
  ExploreListParams,
  ExploreListResponse,
} from '@entities/explore/model/shared-types';
import type { RestaurantDTO } from '../model/types';
import { apiClient } from '@shared/api';

export const restaurantApi = {
  list: (params: ExploreListParams = {}) =>
    apiClient<ExploreListResponse<RestaurantDTO>>(
      `/api/v1/explore/restaurants?${buildExploreListQuery(params)}`,
    ),
  details: (id: string | number) =>
    apiClient<RestaurantDTO>(`/api/v1/explore/restaurants/${id}`),
};