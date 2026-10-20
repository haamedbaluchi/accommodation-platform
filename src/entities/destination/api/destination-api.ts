import {
  buildExploreListQuery,
  ExploreListParams,
  ExploreListResponse,
} from '@entities/explore/model/shared-types';
import { apiClient } from '@shared/api';
import { DestinationDTO } from '../model/type';

export const destinationApi = {
  list: (params: ExploreListParams = {}) =>
    apiClient<ExploreListResponse<DestinationDTO>>(
      `/api/v1/explore/destinations?${buildExploreListQuery(params)}`,
    ),
  details: (id: string | number) =>
    apiClient<DestinationDTO>(`/api/v1/explore/destinations/${id}`),
};