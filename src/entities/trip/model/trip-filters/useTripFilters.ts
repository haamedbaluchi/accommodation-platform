import { Trip } from '../trip.type';
import { useMemo, useState } from 'react';
import { TripFilter } from './filters.type';

type UseTripsFiltersParams = {
  trips: Trip[];
};

export function useTripFilters({ trips }: UseTripsFiltersParams) {
  const [activeFilter, setActiveFilter] = useState<TripFilter>('همه');

  const filteredTrips = useMemo(() => {
    switch (activeFilter) {
      case 'همه':
        return trips;

      case 'در جریان':
        return trips.filter((trip) => trip.status === 'ongoing');

      case 'پیش رو':
        return trips.filter((trip) => trip.status === 'upcoming');

      case 'گذشته':
        return trips.filter((trip) => trip.status === 'done');

      case 'شخصی':
        return trips.filter((trip) => trip.trip_type === 'personal');

      case 'گروهی':
        return trips.filter((trip) => trip.trip_type === 'in-group');

      default:
        return trips;
    }
  }, [activeFilter, trips]);

  return {
    activeFilter,
    setActiveFilter,
    filteredTrips,
  };
}
