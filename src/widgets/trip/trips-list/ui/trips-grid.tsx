import { Trip } from '@entities/trip';
import { OpenTripCard } from '@features/trip/open-trip-chat';


type TripsGridProps = {
  trips: Trip[];
};

export function TripsGrid({
  trips,
}: TripsGridProps) {
  if (!trips.length) {
    return (
      <div className="flex min-h-60 items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-gray-50">
        <p className="text-sm text-gray-500">
          سفری برای نمایش وجود ندارد.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
      {trips.map((trip) => (
        <OpenTripCard
          key={trip.trip_id}
          trip={trip}
        />
      ))}
    </div>
  );
}