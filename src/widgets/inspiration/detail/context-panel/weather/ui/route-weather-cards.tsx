'use client';

import {
  Card,
  CardHeader,
  CardContent,
  CardBadgeList,
  CardFooter,
} from '@shared/ui/Card';

import { cn } from '@shared/lib';

import {
  getWeatherCondition,
  WeatherIcon,
  type WeatherForecast,
} from '@entities/weather';
import { getWeatherBackground } from '@entities/weather/lib/get-weather-background';
import Image from 'next/image';

interface RouteWeatherCardProps {
  origin: WeatherForecast;
  destination: WeatherForecast;

  originLocationName: string;
  destinationLocationName: string;
}

interface WeatherLocationCardProps {
  data: WeatherForecast;
  type: 'origin' | 'destination';
  locationName: string;
}

function WeatherLocationCard({
  data,
  type,
  locationName,
}: WeatherLocationCardProps) {
  const condition = getWeatherCondition(data.weather_code);

  const backgroundImage = getWeatherBackground(
    data.weather_code,
    data.wind_speed,
  );

  return (
    <Card
      className="relative min-h-42 md:h-38.5 min-w-0 w-full md:w-[250px] flex-1 overflow-hidden border-none px-4 py-3"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/15" />

      {/* Gradient */}
      <div
        className={cn(
          'absolute inset-0',
          'bg-linear-to-t',
          'from-black/75 via-black/20 to-transparent',
        )}
      />

      <CardHeader className="relative z-10 p-0">
        <div
          className={cn(
            'w-full flex items-center justify-between gap-1',
            type === 'origin' ? 'text-white' : 'text-text-main',
          )}
        >
          <div className={cn('flex items-center gap-2 text-sm font-bold')}>
            <div className="w-6 h-6 bg-white text-transparent flex items-center justify-center rounded-full">
              <WeatherIcon code={data.weather_code} size={18} />
            </div>
            <span>{type === 'origin' ? 'موقعیت فعلی' : 'مقصد سفر'}</span>
          </div>

          <div className="flex items-center gap-1 text-base font-bold ">
            <span>{locationName}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="mt-2 relative z-10 flex flex-row items-end justify-between p-0">
        <div
          className={cn(
            'flex flex-col items-end gap-2',
            type === 'origin' ? 'text-white' : 'text-text-main',
          )}
        >
          <div className="flex items-center gap-2 text-4xl font-bold">
            {Math.round(data.max_temperature)}
            °C
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="space-y-1.75 text-xs font-bold">
            <div className="bg-[#F3FDFA] text-success rounded-sm px-2">
              {Math.round(data.min_temperature)}°
            </div>

            <div className="bg-[#FFF2F2] text-error rounded-sm px-2">
              {Math.round(data.max_temperature)}°
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-0 bg-transparent">
        <CardBadgeList className="bg-black/20 text-xs font-bold text-white w-fit">
          {condition.label}
        </CardBadgeList>
      </CardFooter>
    </Card>
  );
}

export function RouteWeatherCard({
  origin,
  destination,
  originLocationName,
  destinationLocationName,
}: RouteWeatherCardProps) {
  return (
    <div dir="rtl" className="flex flex-col md:flex-row w-full items-center gap-4 md:gap-2.5">
      <WeatherLocationCard
        data={origin}
        type="origin"
        locationName={originLocationName}
      />

      <div className="flex shrink-0 pb-2 px-3 border-b border-dashed">
        <Image
          src="/images/travel-car.png"
          width={36}
          height={36}
          alt="ماشین سفر"
        />
      </div>

      <WeatherLocationCard
        data={destination}
        type="destination"
        locationName={destinationLocationName}
      />
    </div>
  );
}
