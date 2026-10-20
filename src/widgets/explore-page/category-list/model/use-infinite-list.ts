'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import type { ExploreListParams, ExploreListResponse } from '@entities/explore/model/shared-types';

interface UseInfiniteExploreListParams<TDto> {
  queryKey: string;
  fetcher: (params: ExploreListParams) => Promise<ExploreListResponse<TDto>>;
  provinceId?: number | null;
  tag?: string | null;
  pageSize?: number;
}

export function useInfiniteExploreList<TDto>({
  queryKey,
  fetcher,
  provinceId,
  tag,
  pageSize = 12,
}: UseInfiniteExploreListParams<TDto>) {
  const query = useInfiniteQuery({
    queryKey: [queryKey, provinceId, tag],
    queryFn: ({ pageParam = 1 }) =>
      fetcher({ page: pageParam, limit: pageSize, city_id: provinceId, tag }),
    getNextPageParam: (lastPage) =>
      lastPage.meta.page < lastPage.meta.totalPages ? lastPage.meta.page + 1 : undefined,
    initialPageParam: 1,
  });

  const items = query.data?.pages.flatMap((page) => page.data) ?? [];

  return { ...query, items };
}