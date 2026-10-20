// 'use client';

// import { useQuery } from '@tanstack/react-query';
// import { useExploreToolbarStore } from './explore-toolbar-store';
// import { useDebounce } from '@shared/lib/hooks';
// import { exploreSearchApi } from '@entities/explore/api/explore-search-api';
// import { exploreOverviewApi } from '@entities/explore/api/explore-overview-api';
// import { mapDestinationToTrending } from '@entities/destination/model/mappers';
// import {
//   mockAccommodations,
//   mockLocalEvents,
//   mockLocalFoods,
//   mockTrendingDestinations,
// } from './mock-data';
// import { mapRestaurantToLocalFood } from '@entities/restaurant';
// import { mapAccommodationToUi } from '@entities/accommodation';
// import { mapEventToUi } from '@entities/event';

// export function useExploreListing() {
//   const search = useExploreToolbarStore((s) => s.search);
//   const debouncedSearch = useDebounce(search, 400);
//   const isSearchMode = debouncedSearch.trim().length > 0;

//   const { data, isLoading } = useQuery({
//     queryKey: isSearchMode
//       ? ['explore-search', debouncedSearch]
//       : ['explore-overview'],
//     queryFn: () =>
//       isSearchMode
//         ? exploreSearchApi.search(debouncedSearch, 4)
//         : exploreOverviewApi.get(),
//     staleTime: 60_000,
//   });

//   const destinations = data?.data.destinations ?? [];
//   const restaurants = data?.data.restaurants ?? [];
//   const accommodationsDto = data?.data.accommodations ?? [];
//   const events = data?.data.events ?? [];

//   // فقط وقتی سرچ فعال نیست، اگه بکند خالی برگردوند از mock استفاده می‌کنیم
//   // (توی حالت سرچ، آرایه‌ی خالی یعنی واقعاً نتیجه‌ای نیست، نباید mock نشون بدیم)
//   const fallback = !isSearchMode;

//   return {
//     isSearchMode,
//     isLoading,
//     trendingDestinations: destinations.length
//       ? destinations.map(mapDestinationToTrending)
//       : fallback
//         ? mockTrendingDestinations
//         : [],
//     localFoods: restaurants.length
//       ? restaurants.map(mapRestaurantToLocalFood)
//       : fallback
//         ? mockLocalFoods
//         : [],
//     accommodations: accommodationsDto.length
//       ? accommodationsDto.map(mapAccommodationToUi)
//       : fallback
//         ? mockAccommodations
//         : [],
//     localEvents: events.length
//       ? events.map(mapEventToUi)
//       : fallback
//         ? mockLocalEvents
//         : [],
//   };
// }
'use client';

import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useExploreToolbarStore } from './explore-toolbar-store';
import { useDebounce } from '@shared/lib/hooks';
import { iranProvincesWithGeo } from '@shared/constants';
import { exploreSearchApi } from '@entities/explore/api/explore-search-api';
import { exploreOverviewApi } from '@entities/explore/api/explore-overview-api';
import { mapDestinationToTrending } from '@entities/destination/model/mappers';

import { mapRestaurantToLocalFood } from '@entities/restaurant';
import { mapAccommodationToUi } from '@entities/accommodation';
import { mapEventToUi } from '@entities/event';

export function useExploreListing() {
  const search = useExploreToolbarStore((s) => s.search);
  const selectedProvinceId = useExploreToolbarStore(
    (s) => s.selectedProvinceId,
  );

  const selectedProvinceName = useMemo(
    () =>
      iranProvincesWithGeo.find((p) => p.id === selectedProvinceId)?.value ??
      '',
    [selectedProvinceId],
  );

  // اولویت با متنی که کاربر خودش تایپ کرده؛ اگه چیزی تایپ نشده بود
  // ولی از نقشه یا سلکت‌باکس یه استان انتخاب شده، همون به‌عنوان کوئری میره
  const effectiveQuery = search.trim() || selectedProvinceName;
  const debouncedSearch = useDebounce(effectiveQuery, 400);
  const isSearchMode = debouncedSearch.trim().length > 0;

  const { data, isLoading, isError } = useQuery({
    queryKey: isSearchMode
      ? ['explore-search', debouncedSearch]
      : ['explore-overview'],
    queryFn: () =>
      isSearchMode
        ? exploreSearchApi.search(debouncedSearch, 4)
        : exploreOverviewApi.get(),
    staleTime: 60_000,
  });

  const destinations = data?.data.destinations ?? [];
  const restaurants = data?.data.restaurants ?? [];
  const accommodationsDto = data?.data.accommodations ?? [];
  const events = data?.data.events ?? [];

  // فقط وقتی سرچ فعال نیست، اگه بکند خالی برگردوند از mock استفاده می‌کنیم
  // (توی حالت سرچ، آرایه‌ی خالی یعنی واقعاً نتیجه‌ای نیست، نباید mock نشون بدیم)
  const fallback = !isSearchMode;

  return {
    isSearchMode,
    isLoading,
    isError,
    trendingDestinations: destinations.length
      ? destinations.map(mapDestinationToTrending)
      : [],
    localFoods: restaurants.length
      ? restaurants.map(mapRestaurantToLocalFood)
      : [],
    accommodations: accommodationsDto.length
      ? accommodationsDto.map(mapAccommodationToUi)
      : [],
    localEvents: events.length ? events.map(mapEventToUi) : [],
  };
}
