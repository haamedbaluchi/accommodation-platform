// widgets/inspiration/detail/context-panel/weather/model/use-route-weather.ts
'use client';

import { useQuery } from '@tanstack/react-query';
import { getCityGeoApi } from '@entities/weather/api/get-city-geo-api';
import { weatherApi } from '@entities/weather/api/weather.api';

export function useRouteWeather(originCityName?: string, destinationCityName?: string) {
  const originGeoQuery = useQuery({
    queryKey: ['city-geo', originCityName],
    queryFn: () => getCityGeoApi(originCityName!),
    enabled: Boolean(originCityName),
    staleTime: Infinity, // مختصات شهر عوض نمیشه
  });

  const destinationGeoQuery = useQuery({
    queryKey: ['city-geo', destinationCityName],
    queryFn: () => getCityGeoApi(destinationCityName!),
    enabled: Boolean(destinationCityName),
    staleTime: Infinity,
  });

  const origin = originGeoQuery.data?.data.geo_location;
  const destination = destinationGeoQuery.data?.data.geo_location;

  const forecastQuery = useQuery({
    queryKey: ['weather-forecast', origin, destination],
    queryFn: () =>
      weatherApi.getForecast({
        date: new Date().toISOString().slice(0, 10),
        origin: origin!,
        destination: destination!,
      }),
    enabled: Boolean(origin && destination),
  });

  return {
    data: forecastQuery.data,
    isLoading:
      originGeoQuery.isLoading ||
      destinationGeoQuery.isLoading ||
      (Boolean(origin && destination) && forecastQuery.isLoading),
    error: originGeoQuery.error || destinationGeoQuery.error || forecastQuery.error,
  };
}