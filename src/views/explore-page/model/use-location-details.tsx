'use client';

import { useQuery } from '@tanstack/react-query';
import { ExploreItemType } from './explore-panel-store';
import { exploreDetailFetchers } from '@entities/explore';



export function useLocationDetails(selectedItem: { id: string; type: ExploreItemType } | null) {
  const { data, isLoading,isError } = useQuery({
    queryKey: ['explore-item-details', selectedItem?.type, selectedItem?.id],
    queryFn: () => exploreDetailFetchers[selectedItem!.type](selectedItem!.id),
    enabled: !!selectedItem,
  });

  return { details: data, isLoading: !!selectedItem && isLoading ,isError };
}