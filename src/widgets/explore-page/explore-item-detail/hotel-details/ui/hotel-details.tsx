import { LocationSummary } from '@widgets/place/location-details/ui/location-overview/location-summary';
import { PeapleComments } from '@widgets/place/location-details/ui/location-overview/peaple-comments';
import { LocationFullAddress } from '@widgets/place/location-details/ui/location-visitInfo/location-full-address';
import { LocationMapView } from '@widgets/place/location-details/ui/location-map-view/location-map-view';

import { HotelDetailsData } from '../model/types';
import { normalizeHotelDetails } from '../model/normalize-hotel-details';
import { HotelHero } from './hotel-hero';
import { HotelAmenities } from './hotel-amenities';
import { DetailsTabsSection } from '@shared/ui/details-tabs-section';
import { DetailsHeaderActions } from '@shared/ui/details-header-actions';
import { HotelVisitInfo } from './hotel-visit-info';

type HotelTab = 'summary' | 'amenities' | 'peapleComments' | 'addressInfo';

interface HotelDetailsProps {
  hotel?: HotelDetailsData;
  onClose?: () => void;
}

export function HotelDetails({ hotel, onClose }: HotelDetailsProps) {
  const data = normalizeHotelDetails(hotel);

  return (
    <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 mb-6 p-3 md:p-5 lg:p-7">
      <DetailsHeaderActions onClose={onClose} />
      <HotelHero
        title={data.title}
        badgeLabel={data.badgeLabel}
        rating={data.rating}
        commentsCount={data.commentsCount}
        shortAddress={data.shortAddress}
        images={data.images}
        pricePerNight={data.pricePerNight}
        checkInTime={data.checkInTime}
        checkOutTime={data.checkOutTime}
      />
      <DetailsTabsSection<HotelTab>
        defaultValue="summary"
        tabs={[
          {
            label: 'یه نگاه کلی',
            value: 'summary',
            content: <LocationSummary locationSummary={data.locationSummary} />,
          },
          {
            label: 'بقیه چی میگن؟',
            value: 'peapleComments',
            content: <PeapleComments />,
          },
          {
            label: 'کجاست دقیقاً؟',
            value: 'addressInfo',
            content: (
              <LocationFullAddress
                fullAddress={data.exactAddress}
                mapLink={data.mapLink}
              />
            ),
          },
        ]}
      />
      <HotelAmenities amenities={data.amenities} />

      <HotelVisitInfo
        fullAddress={data.fullAddress}
        statusNow={true}
        openingHours={`هر روز، ۲۴ ساعته بازه`}
        mapLink={data.mapLink}
        phone={data.phone}
        website={data.website}
      />
      <LocationMapView
        shortAddress={data.shortAddress}
        coordinates={data.coordinates}
      />
    </div>
  );
}
