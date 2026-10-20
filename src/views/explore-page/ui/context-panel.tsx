
'use client';

import { SidePanel } from '@widgets/layout/side-panel';
import { LocationDetails } from '@widgets/place/location-details';
import { ExploreMap } from '@widgets/explore-page/explore-map';
import { useExplorePanelStore } from '../model/explore-panel-store';
import { useLocationDetails } from '../model/use-location-details';
import { EventDetails } from '@widgets/explore-page/explore-item-detail/event-details';
import { HotelDetails } from '@widgets/explore-page/explore-item-detail/hotel-details';
import { RestaurantDetails } from '@widgets/explore-page/explore-item-detail/restaurant-details';
import { DestinationDetails } from '@widgets/explore-page/explore-item-detail/destination-details';

export function ContextPanel() {
  const mode = useExplorePanelStore((s) => s.mode);
  const selectedItem = useExplorePanelStore((s) => s.selectedItem);
  const closeDetails = useExplorePanelStore((s) => s.closeDetails);

  const { details, isLoading } = useLocationDetails(selectedItem);

  return (
    <SidePanel
      isOpen={mode !== 'closed'}
      variant="outline"
      // width="clamp(640px, 42vw, 740px)"
      className="mt-7 mb-11 pr-1 pb-1 hidden md:block z-10 pt-1"
    >
      {mode === 'map' && <ExploreMap />}

      {mode === 'details' &&
        !isLoading &&
        selectedItem?.type === 'destination' && (
          <DestinationDetails destination={details} onClose={closeDetails}/>
        )}
      {mode === 'details' &&
        !isLoading &&
        selectedItem?.type === 'restaurant' && (
          <RestaurantDetails restaurant={details} onClose={closeDetails} />
        )}
      {mode === 'details' &&
        !isLoading &&
        selectedItem?.type === 'accommodation' && (
          <HotelDetails hotel={details} onClose={closeDetails} />
        )}
      {mode === 'details' && !isLoading && selectedItem?.type === 'event' && (
        <EventDetails event={details} onClose={closeDetails} />
      )}
    </SidePanel>
  );
}
