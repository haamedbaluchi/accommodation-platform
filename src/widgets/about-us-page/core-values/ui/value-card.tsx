import type { FC } from 'react';
import type { CoreValueItem } from '../model/types';
import { cn } from '@shared/lib';
import { HugeiconsIcon } from '@hugeicons/react';

interface ValueCardProps {
  readonly item: CoreValueItem;
  readonly index: number;
}

export const ValueCard: FC<ValueCardProps> = ({ item, index }) => {
  const {
    id,
    title,
    description,
    icon: Icon,
    cardClassName,
    iconClassName,
  } = item;
  const titleId = `core-value-title-${id}`;

  return (
    <article
      aria-labelledby={titleId}
      className={cn(
        'group relative flex flex-col gap-2 rounded-3xl border px-4 py-3 sm:px-7 sm:py-5',
        'transition-all duration-300 ease-out',
        'hover:-translate-y-1 hover:shadow-lg hover:shadow-black/4',
        cardClassName,
      )}
      style={{
        animationDelay: `${index * 80}ms`,
      }}
    >
      <div className="flex items-center gap-2">
      
          <HugeiconsIcon icon={Icon}
            className={cn('size-6', iconClassName)}
            strokeWidth={1.75}
            aria-hidden="true"
          />

        <h3
          id={titleId}
          className="text-xl font-bold leading-7 text-gray-800 sm:text-lg"
        >
          {title}
        </h3>
      </div>

      <p className="text-sm leading-7 text-text-foreground">{description}</p>
    </article>
  );
};

ValueCard.displayName = 'ValueCard';
