import { cn } from '@shared/lib';
import { ClockIcon } from '@shared/assets/icons';

export function LocationOpeningHours({
  statusNow,
  openingHours,
}: {
  statusNow: boolean;
  openingHours: string;
}) {
  return (
    <div className="flex items-start gap-2">
      <ClockIcon className="w-7 h-7" />
      <div className="flex flex-col font-yekta gap-0.5">
        <h4 className="font-bold text-sm sm:text-base text-text-main">کی بازه؟</h4>
        <span
          className={cn(
            'font-medium text-xs sm:text-sm md:text-base',
            statusNow ? 'text-success' : 'text-error',
          )}
        >
          {statusNow ? 'بازه ' : 'بستس '}الان
        </span>
        <p className="font-medium text-xs sm:text-sm md:text-base text-text-main">{openingHours}</p>
      </div>
    </div>
  );
}
