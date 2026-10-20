import { LocationDetailsData } from '../model/types';
import { normalizeLocationDetails } from '../model/normalize-location-details';

import { LocationHero } from './location-hero/location-hero';
import { LocationMapView } from './location-map-view/location-map-view';
import { LocationOverview } from './location-overview/location-overview';
import { LocationVisitInfo } from './location-visitInfo/location-visit-info';

interface LocationDetailsProps {
  location?: LocationDetailsData;
}

export function LocationDetails({ location }: LocationDetailsProps) {
  const normalizedLocation = normalizeLocationDetails(location);

  return (
    <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 mb-6">
      <LocationHero
        admissionFee={normalizedLocation.admissionFee}
        category={normalizedLocation.category}
        commentsCount={normalizedLocation.commentsCount}
        images={normalizedLocation.images}
        openStatus={normalizedLocation.openStatus}
        rating={normalizedLocation.rating}
        shortAddress={normalizedLocation.shortAddress}
        suggestedVisitTime={normalizedLocation.suggestedVisitTime}
        title={normalizedLocation.title}
      />

      <LocationOverview locationSummary={normalizedLocation.locationSummary} />

      <LocationVisitInfo
        fullAddress={normalizedLocation.fullAddress}
        openingHours={normalizedLocation.openingHours}
        statusNow={normalizedLocation.statusNow}
        mapLink={normalizedLocation.mapLink}
      />

      <LocationMapView
        shortAddress={normalizedLocation.shortAddress}
        coordinates={normalizedLocation.coordinates}
      />
    </div>
  );
}
