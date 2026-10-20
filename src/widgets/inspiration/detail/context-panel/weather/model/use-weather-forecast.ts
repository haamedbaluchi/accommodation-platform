// widgets/inspiration/detail/context-panel/weather/model/use-weather-forecast.ts
'use client';

import { useQuery } from '@tanstack/react-query';
import { weatherApi } from '@entities/weather/api/weather.api';
import type {
  RouteWeatherResponse,
  WeatherCoordinates,
} from '@entities/weather';

interface UseWeatherForecastParams {
  origin: WeatherCoordinates;
  destination: WeatherCoordinates;
  enabled?: boolean;
}

export function useWeatherForecast({
  origin,
  destination,
  enabled = true,
}: UseWeatherForecastParams) {
  const query = useQuery<RouteWeatherResponse, Error>({
    queryKey: ['weather-forecast', origin, destination],
    queryFn: () =>
      weatherApi.getForecast({
        date: new Date().toISOString().slice(0, 10),
        origin,
        destination,
      }),
    enabled:
      enabled &&
      origin?.latitude != null &&
      origin?.longitude != null &&
      destination?.latitude != null &&
      destination?.longitude != null,
  });

  return { data: query.data, isLoading: query.isLoading, error: query.error };
}
