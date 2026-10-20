import Image from 'next/image';
import type { ReactNode } from 'react';
import { TouristDestination } from '../model/type';

export interface DestinationCardProps {
    
  destination: TouristDestination;

  actionsSlot?: ReactNode;

  badgeSlot?: ReactNode;

  footerSlot?: ReactNode;

  className?: string;

  showDescription?: boolean;

  onClick?: () => void;
}

export function DestinationCard({
  destination,
  actionsSlot,
  badgeSlot,
  footerSlot,
  className = '',
  showDescription = true,
  onClick,
}: DestinationCardProps) {
  const isInteractive = Boolean(onClick);

  return (
    <article
      className={[
        'group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm',
        'transition-shadow duration-200',
        isInteractive && 'cursor-pointer hover:shadow-md',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      onClick={onClick}
      role={isInteractive ? 'button' : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      onKeyDown={(event) => {
        if (!onClick) return;

        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onClick();
        }
      }}
    >
      {/* Cover */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={destination.image.image_url ?? ''}
          alt={destination.image.image_alt ?? destination.city_name}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Top content */}
        {(badgeSlot || actionsSlot) && (
          <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between gap-2 p-3">
            <div>{badgeSlot}</div>

            {actionsSlot && (
              <div onClick={(event) => event.stopPropagation()}>
                {actionsSlot}
              </div>
            )}
          </div>
        )}

        {/* Destination information */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-3 text-white">
          {destination.category && (
            <span className="mb-2 inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-black backdrop-blur-sm">
              {destination?.category}
            </span>
          )}

          <h3 className="text-xl font-bold leading-tight">
            {destination.title}
          </h3>

          {destination.description && showDescription && (
            <p className="mt-1 line-clamp-2 text-xs leading-5 text-gray-200">
              {destination.description}
            </p>
          )}
        </div>
      </div>

      {/* Footer */}
      {footerSlot && <div className="bg-white p-3">{footerSlot}</div>}
    </article>
  );
}
