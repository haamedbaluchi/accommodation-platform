import Image from 'next/image';
import { Button, Chip } from '@shared/ui';
import { ChevronLeftIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { ItineraryTags } from './itinerary-tags';
import { cn } from '@shared/lib';
import { ItineraryStop } from '@entities/travel-inspiration';

type ItineraryCardProps = {
  stop: ItineraryStop;
  onViewDetails?: () => void;
};

export function ItineraryCard({ stop, onViewDetails }: ItineraryCardProps) {
  return (
    <div className="overflow-hidden rounded-lg md:rounded-3xl border border-border-foreground bg-background">
      <div className="flex gap-3 p-2 pl-4 flex-row-reverse">
        <div className="flex flex-1 flex-col gap-3">
          <div>
            <h3 className="flex items-center gap-2 text-sm md:text-base lg:text-xl font-bold text-text-main">
              {stop.titleIcon && <span>{stop.titleIcon}</span>}
              {stop.title}
            </h3>
            <p className="text-[0.625rem] md:text-xs text-text-foreground">{stop.subtitle}</p>
          </div>
          <TravelerNote
            travelerNote={stop.travelerNote}
            className="hidden lg:flex flex-col"
          />
          <ItineraryTags tags={stop.tags} className="hidden xl:flex" />
        </div>

        <div className="relative  shrink-0 overflow-hidden rounded-md md:rounded-2xl size-12 md:size-25 lg:size-40 xl:size-50">
         {stop.coverImage && (
          <Image
          src={stop.coverImage}
          alt={stop.title}
          fill
          className="object-cover hover:scale-103 transition-transform"
          />
        )}
        </div>
      </div>

      <TravelerNote
        travelerNote={stop.travelerNote}
        className="flex lg:hidden mx-2 mb-3 flex-col"
      />

      <ItineraryTags tags={stop.tags} className="flex xl:hidden px-3" />

      <div className="pt-3 pb-3 md:pb-4 px-2 w-full">
        <Button
          onClick={onViewDetails}
          rounded="full"
          size="medium"
          className="w-full"
        >
          مشاهده جزییات
          <ChevronLeftIcon className="size-4" />
        </Button>
      </div>
    </div>
  );
}

export function TravelerNote({
  travelerNote,
  className,
}: {
  travelerNote: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'rounded-2xl bg-text-muted-foreground py-1 px-2 xl:px-5',
        className,
      )}
    >
      <p className="flex items-center gap-1.5 text-sm md:text-base font-semibold text-text-main">
        <SparklesIcon className="size-4 text-amber-500" />
        تجربه این مسافر:
      </p>
      <p className="mt-1 text-xs md:text-sm font-semibold leading-7 text-text-foreground line-clamp-2 md:line-clamp-3">
        {travelerNote}
      </p>
    </div>
  );
}
