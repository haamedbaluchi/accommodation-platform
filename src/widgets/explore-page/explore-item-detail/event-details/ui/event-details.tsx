import { LocationSummary } from '@widgets/place/location-details/ui/location-overview/location-summary';
import { LocationFullAddress } from '@widgets/place/location-details/ui/location-visitInfo/location-full-address';
import { LocationMapView } from '@widgets/place/location-details/ui/location-map-view/location-map-view';

import { EventDetailsData } from '../model/types';
import { normalizeEventDetails } from '../model/normalize-event-details';
import { EventHero } from './event-hero';
import { EventArtists } from './event-artists';
import { DetailsTabsSection } from '@shared/ui/details-tabs-section';
import { DetailsHeaderActions } from '@shared/ui/details-header-actions';
import { Button } from '@shared/ui';
import { HugeiconsIcon } from '@hugeicons/react';
import { X } from '@hugeicons/core-free-icons';

type EventTab = 'summary' | 'artists' | 'addressInfo';

interface EventDetailsProps {
  event?: EventDetailsData;
  onClose?: () => void;
}

export function EventDetails({ event, onClose }: EventDetailsProps) {
  const data = normalizeEventDetails(event);

  return (
    <div className="flex flex-col gap-4 sm:gap-5 md:gap-4 mb-3 md:mb-6">
      <EventHero
        coverImage={data.coverImage}
        dateDay={data.dateDay}
        dateMonth={data.dateMonth}
        dateWeekday={data.dateWeekday ?? ''}
        timeLabel={data.timeLabel}
        title={data.title}
        onClose={onClose}
        categoryLabel={data.categoryLabel}
      />

      <DetailsTabsSection<EventTab>
        className="px-3 sm:px-7"
        tabsClassName="items-start"
        defaultValue="summary"
        tabs={[
          {
            label: 'یه نگاه کلی',
            value: 'summary',
            content: <LocationSummary locationSummary={data.description} />,
          },
          {
            label: 'هنرمندان',
            value: 'artists',
            content: <EventArtists artists={data?.artists ??[]} />,
          },
          {
            label: 'کجاست دقیقاً؟',
            value: 'addressInfo',
            content: (
              <LocationFullAddress
                fullAddress={data.fullAddress}
                mapLink={data.mapLink}
              />
            ),
          },
        ]}
      />

      <LocationMapView
        shortAddress={data.address}
        coordinates={data.coordinates}
      />
    </div>
  );
}
