import { HugeiconsIcon } from '@hugeicons/react';

import {
  CloudRain,
  Droplets,
  Wind,
} from '@hugeicons/core-free-icons';

import { Card } from '@shared/ui/Card';

import {
  getWeatherCondition,
  WeatherIcon,
  type WeatherForecast,
} from '@entities/weather';

interface CurrentWeatherProps {
  data: WeatherForecast;
  locationName: string;
}

export function CurrentWeatherCard({
  data,
  locationName,
}: CurrentWeatherProps) {
  const condition = getWeatherCondition(
    data.weather_code,
  );

  const formattedDate = new Intl.DateTimeFormat(
    'fa-IR',
    {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    },
  ).format(new Date(data.date));

  return (
    <Card
      dir="rtl"
      className="flex w-full flex-row items-center justify-between border border-gray-100 bg-gray-50 p-6 shadow-sm"
    >
      <div className="flex flex-col gap-4">
        <span className="w-fit rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-600">
          {locationName} • امروز
        </span>

        <h2 className="font-bold text-lg text-gray-800">
          {formattedDate}
        </h2>

        <div className="mt-2 flex flex-col gap-2 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <HugeiconsIcon
              icon={CloudRain}
              size={16}
              className="text-blue-400"
            />

            <span>
              احتمال بارش:{' '}
              {data.precipitation_probability}%
            </span>
          </div>

          <div className="flex items-center gap-2">
            <HugeiconsIcon
              icon={Droplets}
              size={16}
              className="text-blue-400"
            />

            <span>
              رطوبت: {data.humidity}%
            </span>
          </div>

          <div className="flex items-center gap-2">
            <HugeiconsIcon
              icon={Wind}
              size={16}
              className="text-gray-400"
            />

            <span>
              باد: {data.wind_speed} کیلومتر بر ساعت
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex items-start text-5xl font-bold text-gray-800">
          {Math.round(data.max_temperature)}

          <span className="mr-1 mt-2 text-2xl">
            °C
          </span>
        </div>

        <span className="text-sm font-medium text-gray-500">
          {condition.label}
        </span>

        <div className="rounded-full bg-white p-3 shadow-sm">
          <WeatherIcon
            code={data.weather_code}
            size={48}
          />
        </div>
      </div>
    </Card>
  );
}