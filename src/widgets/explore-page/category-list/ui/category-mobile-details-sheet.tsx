'use client';

import { useCategoryPanelStore } from '../model/category-panel-store';
import { useCategoryItemDetails } from '../model/use-category-item-details';
import type { ExploreItemType } from '@entities/explore/model/detail-fetchers';
import { RestaurantDetails } from '@widgets/explore-page/explore-item-detail/restaurant-details';
import { HotelDetails } from '@widgets/explore-page/explore-item-detail/hotel-details';
import { EventDetails } from '@widgets/explore-page/explore-item-detail/event-details';
import { DestinationDetails } from '@widgets/explore-page/explore-item-detail/destination-details';
import { ErrorBoundary } from '@shared/ui/error-boundary';

export function CategoryMobileDetailsSheet({ itemType }: { itemType: ExploreItemType }) {
  const selectedItemId = useCategoryPanelStore((s) => s.selectedItemId);
  const closeDetails = useCategoryPanelStore((s) => s.closeDetails);

  const { details, isLoading } = useCategoryItemDetails(itemType, selectedItemId);

  if (!selectedItemId) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-background px-4 pb-10 pt-6">
      <button
        onClick={closeDetails}
        className="mb-2 text-sm font-bold text-text-main font-yekta"
      >
        ← بازگشت
      </button>

      {!isLoading && (
        <ErrorBoundary
          fallback={
            <div className="flex h-[70dvh] flex-col items-center justify-center gap-2 text-center font-yekta">
              <span className="text-3xl">⚠️</span>
              <p className="text-sm text-text-main font-bold">این مورد در دسترس نیست.</p>
            </div>
          }
        >
          {/* {itemType === 'destination' && <DestinationDetails destination={details} onClose={closeDetails} />} */}
          {itemType === 'restaurant' && <RestaurantDetails restaurant={details} onClose={closeDetails} />}
          {itemType === 'accommodation' && <HotelDetails hotel={details} onClose={closeDetails} />}
          {itemType === 'event' && <EventDetails event={details} onClose={closeDetails} />}
        </ErrorBoundary>
      )}
    </div>
  );
}