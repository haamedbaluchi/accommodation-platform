'use client';

import { Sidebar } from '@widgets/layout/sidebar';
import { useInfiniteExploreList } from '@widgets/explore-page/category-list/model/use-infinite-list';
import { ExploreCategoryList } from '@widgets/explore-page/category-list/ui/explore-category-list';
import { ExploreHeader } from '@widgets/explore-page/explore-header';
import { destinationApi } from '@entities/destination/api/destination-api';
import { mapDestinationToTrending } from '@entities/destination/model/mappers';
import { TrendingDestinationCard } from '@widgets/explore-page/collections/trending-destination/ui/trending-destination-card';

export default function DetinationsListPage() {
  const { items, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useInfiniteExploreList({
      queryKey: 'destinations-list',
      fetcher: destinationApi.list,
    });

  return (
    <div className="flex flex-col sm:flex-row h-dvh w-full">
      <Sidebar />
      <div className="flex-1 overflow-hidden overflow-y-auto">
        <ExploreHeader />

        <ExploreCategoryList
          title="اقامتگاه‌هایی که بخشی از سفرند"
          items={items.map(mapDestinationToTrending)}
          renderItem={(destination) => (
            <TrendingDestinationCard destination={destination} />
          )}
          isLoading={isLoading}
          isFetchingNextPage={isFetchingNextPage}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
        />
      </div>
    </div>
  );
}
