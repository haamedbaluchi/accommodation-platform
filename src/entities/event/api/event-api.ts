import {
  buildExploreListQuery,
  ExploreListParams,
  ExploreListResponse,
} from '@entities/explore/model/shared-types';
import type { EventDTO } from '../model/types';
import { apiClient } from '@shared/api';

export const eventApi = {
  list: (params: ExploreListParams = {}) =>
    apiClient<ExploreListResponse<EventDTO>>(
      `/api/v1/explore/events?${buildExploreListQuery(params)}`,
    ),
  details: (id: string | number) => apiClient<EventDTO>(`/api/v1/explore/events/${id}`),
};