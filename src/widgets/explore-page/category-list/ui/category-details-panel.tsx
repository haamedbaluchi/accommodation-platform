'use client';

import { SidePanel } from '@widgets/layout/side-panel';
import { useCategoryPanelStore } from '../model/category-panel-store';
import { useCategoryItemDetails } from '../model/use-category-item-details';
import type { ExploreItemType } from '@entities/explore/model/detail-fetchers';
import { RestaurantDetails } from '@widgets/explore-page/explore-item-detail/restaurant-details';
import { HotelDetails } from '@widgets/explore-page/explore-item-detail/hotel-details';
import { EventDetails } from '@widgets/explore-page/explore-item-detail/event-details';

export function CategoryDetailsPanel({
  itemType,
}: {
  itemType: ExploreItemType;
}) {
  const selectedItemId = useCategoryPanelStore((s) => s.selectedItemId);
  const closeDetails = useCategoryPanelStore((s) => s.closeDetails);

  const { details, isLoading } = useCategoryItemDetails(
    itemType,
    selectedItemId,
  );

  return (
    <SidePanel
      isOpen={!!selectedItemId}
      variant="outline"
      className="mt-7 mb-11 pr-1 py-1 hidden md:block "
    >
      {selectedItemId && !isLoading && (
        <>
          {/* {itemType === 'destination' && (
            <DestinationDetails destination={details} onClose={closeDetails} />
            )} */}
          {itemType === 'restaurant' && (
            <RestaurantDetails restaurant={details} onClose={closeDetails} />
          )}
          {itemType === 'accommodation' && (
            <HotelDetails hotel={details} onClose={closeDetails} />
          )}
          {itemType === 'event' && (
            <EventDetails event={details} onClose={closeDetails} />
          )}
        </>
      )}
    </SidePanel>
  );
}
