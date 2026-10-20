'use client';

import { RouteWeatherCard } from './route-weather-cards';

import { CurrentWeatherCard } from './current-weather-card';

import { DailyForecastList } from './daily-forecast-list';

import type { RouteWeatherResponse } from '@entities/weather';

interface WeatherContentProps {
  data: RouteWeatherResponse;

  originLocationName: string;
  destinationLocationName: string;
}

export function WeatherContent({
  data,
  originLocationName,
  destinationLocationName,
}: WeatherContentProps) {
  const todayDestination = data.destination[0];

  if (!todayDestination) {
    return null;
  }

  return (
    <div dir="rtl" className="flex w-full flex-col gap-6 px-7 py-7">
      <RouteWeatherCard
        origin={data.origin}
        destination={todayDestination}
        originLocationName={originLocationName}
        destinationLocationName={destinationLocationName}
      />
      <CurrentWeatherCard
        data={todayDestination}
        locationName={destinationLocationName}
      />

      <DailyForecastList data={data.destination} />
    </div>
  );
}
