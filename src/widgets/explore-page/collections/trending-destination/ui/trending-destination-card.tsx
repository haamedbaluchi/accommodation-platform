'use client';

import { TrendingDestination } from '@entities/destination';
import { TrendingDestinationCardView } from './trending-destination-card-view';
import { useExplorePanelStore } from '@views/explore-page/model/explore-panel-store';

export function TrendingDestinationCard({ destination }: { destination: TrendingDestination }) {
  const selectedItem = useExplorePanelStore((s) => s.selectedItem);
  const openDetails = useExplorePanelStore((s) => s.openDetails);
  const closeDetails = useExplorePanelStore((s) => s.closeDetails);

  const isSelected = selectedItem?.type === 'destination' && selectedItem.id === destination.id;

  return (
    <div
      onClick={() => (isSelected ? closeDetails() : openDetails(destination.id, 'destination'))}
      className="cursor-pointer"
    >
      <TrendingDestinationCardView destination={destination} />
    </div>
  );
}