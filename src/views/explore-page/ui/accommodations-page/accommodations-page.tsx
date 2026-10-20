'use client';

import { useEffect } from 'react';
import { useMediaQuery } from '@shared/lib/hooks';
import { Sidebar } from '@widgets/layout/sidebar';
import { ExploreHeader } from '@widgets/explore-page/explore-header';
import { CategoryDetailsPanel } from '@widgets/explore-page/category-list/ui/category-details-panel';
import { useCategoryPanelStore } from '@widgets/explore-page/category-list/model/category-panel-store';
import { accommodationApi } from '@entities/accommodation/api/accommodation-api';
import { useInfiniteExploreList } from '@widgets/explore-page/category-list/model/use-infinite-list';
import { ExploreCategoryList } from '@widgets/explore-page/category-list/ui/explore-category-list';
import { mapAccommodationToUi } from '@entities/accommodation';
import { AccommodationCard } from '@widgets/explore-page/collections/accommodation-card/ui/accommodation-card';
import { CategoryMobileDetailsSheet } from '@widgets/explore-page/category-list/ui/category-mobile-details-sheet';

export default function AccommodationsPage() {
  const isMobile = useMediaQuery('(max-width: 639px)');

  const { items, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useInfiniteExploreList({
      queryKey: 'accommodations-list',
      fetcher: accommodationApi.list,
    });

  const openDetails = useCategoryPanelStore((s) => s.openDetails);
  const closeDetails = useCategoryPanelStore((s) => s.closeDetails);

  useEffect(() => () => closeDetails(), [closeDetails]);

  if (isMobile === null) {
    return <div className="h-dvh w-full" />;
  }

  const list = (
    <ExploreCategoryList
      title="اقامتگاه‌هایی که بخشی از سفرند"
      items={items.map(mapAccommodationToUi)}
      renderItem={(accommodation) => (
        <div onClick={() => openDetails(accommodation.id)} className="cursor-pointer">
          <AccommodationCard accommodation={accommodation} />
        </div>
      )}
      isLoading={isLoading}
      isFetchingNextPage={isFetchingNextPage}
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
    />
  );

  if (isMobile) {
    return (
      <div className="h-dvh w-full overflow-y-auto bg-background">
        {list}
        <CategoryMobileDetailsSheet itemType="accommodation" />
      </div>
    );
  }

  return (
    <div className="flex h-dvh w-full">
      <Sidebar />
      <div className="flex-1 flex flex-col ">
        <ExploreHeader />
        <div className="relative flex flex-1 min-h-0 w-full flex-row overflow-hidden">
          <div className="flex-1 min-h-0 overflow-y-auto">{list}</div>
          <CategoryDetailsPanel itemType="accommodation" />
        </div>
      </div>
    </div>
  );
}