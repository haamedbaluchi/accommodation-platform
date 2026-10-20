import { DetailsHeaderActions } from '@shared/ui/details-header-actions';
import { LocationDetails } from '@widgets/place/location-details';
import { EventDetailsData } from '../../event-details/model/types';
interface DestinationDetailsProps {
  destination?: EventDetailsData;
  onClose?: () => void;
}

export function DestinationDetails({
  destination,
  onClose,
}: DestinationDetailsProps) {
  return (
    <div className="p-7 space-y-5">
      <DetailsHeaderActions onClose={onClose} />
      <LocationDetails location={destination} />
    </div>
  );
}
