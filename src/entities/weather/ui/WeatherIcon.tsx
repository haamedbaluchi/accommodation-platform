import { HugeiconsIcon } from '@hugeicons/react';
import { cn } from '@shared/lib';

import { getWeatherCondition } from '../model/weather-codes';

interface WeatherIconProps {
  code: number;
  className?: string;
  size?: number;
}

export function WeatherIcon({
  code,
  className,
  size = 24,
  
}: WeatherIconProps) {
  const condition = getWeatherCondition(code);

  return (
    <HugeiconsIcon
      icon={condition.icon}
      size={size}
      className={cn(condition.color, className)}
      strokeWidth={2}
    />
  );
}