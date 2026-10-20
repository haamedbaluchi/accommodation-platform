import { Card } from '@shared/ui/Card';
import { WeatherIcon } from '@entities/weather';
import { cn } from '@shared/lib';

import type { WeatherForecast } from '@entities/weather';

interface DailyForecastListProps {
  data: WeatherForecast[];
}

export function DailyForecastList({
  data,
}: DailyForecastListProps) {
  const getDayName = (date: string) => {
    return new Intl.DateTimeFormat(
      'fa-IR',
      {
        weekday: 'short',
      },
    ).format(new Date(date));
  };

  return (
    <div
      dir="rtl"
      className="w-full overflow-x-auto pb-4"
    >
      <div className="flex min-w-max gap-3">
        {data.map((day, index) => (
          <Card
            key={day.date}
            className={cn(
              'h-32 min-w-[80px] items-center justify-between border-none py-4 shadow-sm',
              index === 0
                ? 'bg-blue-50 ring-1 ring-blue-100'
                : 'bg-white',
            )}
          >
            <span className="text-sm font-bold text-gray-700">
              {getDayName(day.date)}
            </span>

            <WeatherIcon
              code={day.weather_code}
              size={32}
            />

            <div className="flex flex-col items-center text-xs font-medium">
              <span className="text-gray-800">
                {Math.round(
                  day.max_temperature,
                )}
                °
              </span>

              <span className="text-gray-400">
                {Math.round(
                  day.min_temperature,
                )}
                °
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}