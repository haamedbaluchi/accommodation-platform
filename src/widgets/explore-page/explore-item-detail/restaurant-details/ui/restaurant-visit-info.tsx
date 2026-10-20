import { LocationFullAddress } from '@widgets/place/location-details/ui/location-visitInfo/location-full-address';
import { LocationOpeningHours } from '@widgets/place/location-details/ui/location-visitInfo/location-opening-hours';
import { RestaurantContactInfo } from './restaurant-contact-info';

interface RestaurantVisitInfoProps {
  fullAddress: string;
  statusNow: boolean;
  openingHours: string;
  mapLink?: string;
  phone?: string;
  website?: string;
}

export function RestaurantVisitInfo({
  fullAddress,
  statusNow,
  openingHours,
  mapLink,
  phone,
  website,
}: RestaurantVisitInfoProps) {
  return (
    <section className="py-8 px-2 sm:px-4 md:px-6 border-y border-text-muted-foreground flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <LocationFullAddress fullAddress={fullAddress} mapLink={mapLink} />
        <LocationOpeningHours statusNow={statusNow} openingHours={openingHours} />
      </div>

      <RestaurantContactInfo phone={phone} website={website} />
    </section>
  );
}