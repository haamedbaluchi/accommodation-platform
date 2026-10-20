import { LocationFullAddress } from './location-full-address';
import { LocationOpeningHours } from './location-opening-hours';
interface LocationVisitInfoProps {
  fullAddress: string;
  statusNow: boolean;
  openingHours: string;
    mapLink?: string;

}
export function LocationVisitInfo({
  fullAddress,
  statusNow,
  openingHours,
  mapLink
}: LocationVisitInfoProps) {
  return (
    <section className="py-8 px-2 sm:px-4 md:px-6 border-y border-text-muted-foreground">
      <div className="flex items-center justify-between">
        <LocationFullAddress fullAddress={fullAddress}   mapLink={mapLink}
/>
        <LocationOpeningHours
          statusNow={statusNow}
          openingHours={openingHours}
        />
      </div>
    </section>
  );
}
