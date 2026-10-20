import { mapDetailsToItinerary } from '@entities/travel-inspiration';
import { JourneyExperienceSection } from './journey-experience/journey-experience-section';
import { ItinerarySection } from './itinerary/itinerary-section';
import type { InspirationDetails } from '@entities/travel-inspiration';

interface InspirationRouteContentProps {
  details: InspirationDetails;
  onViewStopDetails?: (placeUid: string) => void;
}

export function InspirationRouteContent({
  details,
  onViewStopDetails,
}: InspirationRouteContentProps) {
  return (
    <div>
      <JourneyExperienceSection description={details.route_experience} />
      <ItinerarySection
        days={mapDetailsToItinerary(details)}
        onViewStopDetails={onViewStopDetails}
      />
    </div>
  );
}