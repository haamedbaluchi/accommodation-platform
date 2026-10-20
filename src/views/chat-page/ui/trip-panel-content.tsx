'use client';

import TripAside from '@widgets/trip/trip-plan';

import { ActivityCard } from '@widgets/place/location-details';

import { BookingsAside, TripMap } from '../lib/dynamic-imports';

type TripPanelContentProps = {
  activeTabId: string;
  onClose?: VoidFunction;
};

export function TripPanelContent({
  activeTabId,
  onClose,
}: TripPanelContentProps) {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="custom-scrollbar min-h-0 flex-1 overflow-x-hidden overflow-y-auto">
        {activeTabId === 'guide_tab' && (
          <TripAside
            onClose={onClose}
            renderActivity={(activity) => <ActivityCard place={activity} />}
          />
        )}

        {activeTabId === 'booked_tab' && <BookingsAside onClose={onClose} />}

        {activeTabId === 'map_tab' && <TripMap onClose={onClose} />}
      </div>
    </div>
  );
}
