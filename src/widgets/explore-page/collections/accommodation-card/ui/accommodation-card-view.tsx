import { HugeiconsIcon } from '@hugeicons/react';
import { MapPin, Star } from '@hugeicons/core-free-icons';

import type { Accommodation } from '../model/types';

import {
  Card,
  CardMedia,
  CardImage,
  CardOverlay,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from '@shared/ui/Card';
import { Chip } from '@shared/ui';

type AccommodationCardViewProps = {
  accommodation: Accommodation;
  actionsSlot?: React.ReactNode;
};

export function AccommodationCardView({
  accommodation,
  actionsSlot,
}: AccommodationCardViewProps) {
  console.table(accommodation)
  return (
    <Card className="flex w-full min-w-0 flex-col rounded-none shadow-none">
      <CardMedia className="flex h-[205px] w-full flex-col overflow-hidden rounded-3xl">
        <CardImage
          src={accommodation.coverImage}
          alt={accommodation.title}
        />

        <CardOverlay className="flex-col justify-between to-black/10">
          <CardHeader className="p-3">
            <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-black">
              {accommodation.badgeLabel}
            </span>

            {actionsSlot}
          </CardHeader>

          <CardContent className="p-3">
            <CardTitle className="text-xl">
              {accommodation.title}
            </CardTitle>

            <span className="mt-1 flex items-center gap-1 text-xs text-gray-200">
              <HugeiconsIcon
                icon={MapPin}
                className="size-3.5"
              />

              {accommodation.location}
            </span>
          </CardContent>
        </CardOverlay>
      </CardMedia>

      <CardFooter className="flex flex-col items-start gap-3 py-3 px-0">
        <div className="flex gap-1.5">
          {accommodation.tags.map((tag) => (
            <Chip 
              variant="primary"
              key={tag.id}
              className="text-xs xl:text-sm text-text-foreground border-0 rounded-full py-0.5"
            >
              {tag.icon && <span>{tag.icon}</span>}
              {tag.label}
            </Chip>
          ))}
        </div>

        
        
        <div className="flex w-full items-center gap-2 justify-between">
          <span className="text-sm font-medium text-text-foreground">
            {accommodation.experienceCount}+ تجربه ثبت شده
          </span>
          <span className="flex items-center gap-1 text-sm font-medium text-amber-500 bg-success/10 px-2 py-0.5 rounded-full">
            <span className="text-success">{accommodation.rating}</span>
            <HugeiconsIcon icon={Star} className="size-3.5 fill-amber-400" />
          </span>
        </div>
       
      </CardFooter>
    </Card>
  );
}