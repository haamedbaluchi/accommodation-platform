'use client';

import { Sidebar } from '@widgets/layout/sidebar';
import { useInfiniteExploreList } from '@widgets/explore-page/category-list/model/use-infinite-list';
import { ExploreCategoryList } from '@widgets/explore-page/category-list/ui/explore-category-list';
import { ExploreHeader } from '@widgets/explore-page/explore-header';
import { mapRestaurantToLocalFood, restaurantApi } from '@entities/restaurant';
import { LocalFoodCard } from '@widgets/explore-page/collections/local-food/ui/local-food-card';
import { useEffect } from 'react';
import { useCategoryPanelStore } from '@widgets/explore-page/category-list/model/category-panel-store';
import { CategoryDetailsPanel } from '@widgets/explore-page/category-list/ui/category-details-panel';
import { CategoryMobileDetailsSheet } from '@widgets/explore-page/category-list/ui/category-mobile-details-sheet';
import { useMediaQuery } from '@shared/lib/hooks';

export default function RestaurantListPage() {
  const isMobile = useMediaQuery('(max-width: 639px)');

  const { items, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useInfiniteExploreList({
      queryKey: 'restaurant-list',
      fetcher: restaurantApi.list,
    });

  const openDetails = useCategoryPanelStore((s) => s.openDetails);
  const closeDetails = useCategoryPanelStore((s) => s.closeDetails);

  useEffect(() => () => closeDetails(), [closeDetails]);
  if (isMobile === null) {
    return <div className="h-dvh w-full" />;
  }
  const list = (
    <ExploreCategoryList
      title="رستوران هایی که بخشی از سفرند"
      items={items.map(mapRestaurantToLocalFood)}
      renderItem={(restaurant) => (
        <div
          onClick={() => openDetails(restaurant.id)}
          className="cursor-pointer"
        >
          <LocalFoodCard food={restaurant} />
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
        <CategoryMobileDetailsSheet itemType="restaurant" />
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
          <CategoryDetailsPanel itemType="restaurant" />
        </div>
      </div>
    </div>
  );
}
