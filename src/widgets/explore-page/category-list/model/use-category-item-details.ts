'use client';

import { useQuery } from '@tanstack/react-query';
import { exploreDetailFetchers } from '@entities/explore/model/detail-fetchers';
import type { ExploreItemType } from '@entities/explore/model/detail-fetchers';

export function useCategoryItemDetails(itemType: ExploreItemType, itemId: string | null) {
  const { data, isLoading } = useQuery({
    queryKey: ['explore-item-details', itemType, itemId],
    queryFn: () => exploreDetailFetchers[itemType](itemId!),
    enabled: !!itemId,
  });

  return { details: data, isLoading: !!itemId && isLoading };
}