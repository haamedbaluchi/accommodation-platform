import { cn } from '@shared/lib';
import { useState } from 'react';
import { Button } from '@shared/ui';

export function LocationSummary({
  locationSummary,
}: {
  locationSummary: string;
}) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const lineStyle = isExpanded ? 'line-clamp-none' : 'line-clamp-7';

  return (
    <div>
      <p
        className={cn(
          'text-sm sm:text-base font-medium text-text-main font-yekta leading-7.5',
          lineStyle,
        )}
      >
        {locationSummary}
      </p>

      <Button
        variant="outline"
        rounded="full"
        size="medium"
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-2.5"
      >
        {isExpanded ? 'خواندن کمتر' : 'خواندن بیشتر'}
      </Button>
    </div>
  );
}
