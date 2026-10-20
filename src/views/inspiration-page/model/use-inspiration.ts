
'use client';

import { useQuery } from '@tanstack/react-query';
import { useDebounce } from '@shared/lib/hooks';
import {
  getInspirationsApi,
  InspirationsListPayload,
  InspirationsListResponse,
} from '@entities/travel-inspiration';
import {
  searchInspirationsApi,
  SearchInspirationsResponse,
} from '@entities/travel-inspiration/api/search-inspirations-api';

export const useInspiration = ({
  page = 1,
  limit = 30,
  search,
  sort = 'created_at',
  order = 'desc',
}: InspirationsListPayload) => {
  const debouncedSearch = useDebounce(search ?? '', 400);
  const isSearchMode = debouncedSearch.trim().length > 0;

  const query = useQuery<InspirationsListResponse | SearchInspirationsResponse, Error>({
    queryKey: isSearchMode
      ? ['inspirations-search', debouncedSearch]
      : ['inspirations', sort, order, limit, page],
    queryFn: () =>
      isSearchMode
        ? searchInspirationsApi({ q: debouncedSearch, limit: 10 })
        : getInspirationsApi({ page, limit, sort, order }),
    staleTime: 5000,
  });

  return {
    ispirations: query.data?.data ?? [],
    isLoading: query.isLoading,
    isSearchMode,
    error: query.error,
  };
};