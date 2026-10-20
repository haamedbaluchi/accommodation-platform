'use client';

import EmptyList from './EmptyList';
import { ProgressCard } from './ProgressCard';
import { Button, FilterButtons, FilterOption, TextField } from '@shared/ui';
import { TravelLogCard } from './TravelLogCard';
import { useCallback, useMemo, useState } from 'react';
import { useFavoritesStore } from '../store/useFavoritesStore';
import { FilterBlueIcon, SearchIcon } from '@shared/assets/icons';

type FavoriteFilter = 'all' | 'wishlist' | 'memories';

const filterOptions: FilterOption<FavoriteFilter>[] = [
  { value: 'all', label: 'همه' },
  { value: 'wishlist', label: 'لیست آرزوها 🎯' },
  { value: 'memories', label: 'دفترچه خاطرات ✈️' },
];

export function FavoritesPage() {
  const trips = useFavoritesStore((state) => state.trips);

  const [activeFilter, setActiveFilter] = useState<FavoriteFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleChangeFilter = useCallback((filter: FavoriteFilter) => {
    setActiveFilter(filter);
  }, []);

  const filteredTrips = useMemo(() => {
    return trips.filter((trip) => {
      const matchesSearch =
        trip.title.includes(searchQuery) || trip.location.includes(searchQuery);

      const matchesFilter =
        activeFilter === 'all' ||
        (activeFilter === 'wishlist' && !trip.isVisited) ||
        (activeFilter === 'memories' && trip.isVisited);

      return matchesSearch && matchesFilter;
    });
  }, [trips, activeFilter, searchQuery]);

  const isEmpty = trips.length === 0;
  const visitedCount = trips.filter((t) => t.isVisited).length;

  return (
    <main>
      {isEmpty ? (
        <EmptyList />
      ) : (
        <section className="p-7 flex flex-col gap-4">
          <div className="flex flex-col items-start justify-between gap-4">
            <h1 className="text-2xl font-bold text-text-main font-yekta">
              سفرهای شما
            </h1>

            <FilterButtons
              value={activeFilter}
              onChange={handleChangeFilter}
              options={filterOptions}
            />
          </div>

          <ProgressCard total={trips.length} current={visitedCount} />

          <div className="w-full space-y-4">
            <div className="flex items-center gap-2">
              <TextField
                placeholder="جستجو کنید..."
                label="جست و جوی سفر"
                hiddenLabel={true}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                rightIcon={<SearchIcon className="w-4 h-4" />}
                className="bg-text-muted-foreground border-0"
              />
              <Button
                variant="outline"
                rounded="full"
                size="large"
                className="w-22 h-9 lg:h-11.25"
                rightIcon={<FilterBlueIcon className="w-4.5 h-4.5" />}
              >
                فیلتر
              </Button>
            </div>

            {filteredTrips.length === 0 ? (
              <p className="text-center text-text-muted-foreground py-8 font-yekta">
                هیچ سفری با این مشخصات یافت نشد.
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTrips.map((trip) => (
                  <TravelLogCard key={trip.id} {...trip} />
                ))}
              </div>
            )}
          </div>
        </section>
      )}
    </main>
  );
}
