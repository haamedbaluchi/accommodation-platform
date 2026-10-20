'use client';

import { useTravelTrips } from '@features/trip/api';
import { TripsGrid } from './trips-grid';
import { TripsListError } from './trips-list-error';
import { TripsListLoading } from './trips-list-loading';
import { TripFilters, useTripFilters } from '@entities/trip';


export function TripsList() {
  const { data: trips = [], isLoading, error } = useTravelTrips();
  const { activeFilter, setActiveFilter, filteredTrips } = useTripFilters({
    trips,
  });

  if (isLoading) return <TripsListLoading />;
  if (error) return <TripsListError />;

  return (
    <main className="flex-1 w-full max-w-7xl mx-auto p-4 sm:p-6 font-yekta">
      <section className="mb-4 sm:mb-8 flex flex-col items-start justify-between gap-2.5 sm:gap-4">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
          سفرهای شما
        </h1>

        <TripFilters
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
      </section>

      <TripsGrid trips={filteredTrips} />
    </main>
  );
}
