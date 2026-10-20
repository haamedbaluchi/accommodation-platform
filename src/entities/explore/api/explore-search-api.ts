import { apiClient } from '@shared/api';
import type { ExploreOverviewResponse } from './explore-overview-api';

export const exploreSearchApi = {
  search: (q: string, limit = 4) =>
    apiClient<ExploreOverviewResponse>(
      `/api/v1/explore/search?q=${encodeURIComponent(q)}&limit=${limit}`,
    ),
};