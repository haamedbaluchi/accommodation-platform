import { cn } from '@shared/lib';
import { ReactNode } from 'react';
import { ClockIcon, MapPinIcon } from '@heroicons/react/24/outline';

export type RouteInfoData = {
  distanceKm: number | string;
  durationMinutes: number | string;
};

export type RouteInfoProps = RouteInfoData & {
  distanceLabel?: string;
  durationLabel?: string;
  locale?: string;
  className?: string;
  DistanceIcon?: ReactNode;
  DurationIcon?: ReactNode;
};

export function RouteInfo({
  distanceKm,
  durationMinutes,
  distanceLabel = 'کیلومتر تا مقصد بعدی',
  durationLabel = 'دقیقه تا مقصد بعدی',
  locale = 'fa-IR',
  className,
  DistanceIcon = <MapPinIcon className="size-4" />,
  DurationIcon = <ClockIcon className="size-4" />,
}: RouteInfoProps) {
  return (
    <div
      className={cn(
        'font-yekta flex flex-col gap-1 text-xs md:text-sm font-medium border-r border-dashed mr-7 px-3 border-border',
        className,
      )}
    >
      <span className="flex items-center gap-1.5 text-primary-active">
        {DistanceIcon}
        {distanceKm.toLocaleString(locale)} {distanceLabel}
      </span>

      <span className="flex items-center gap-1.5">
        {DurationIcon}
        {durationMinutes.toLocaleString(locale)} {durationLabel}
      </span>
    </div>
  );
}
