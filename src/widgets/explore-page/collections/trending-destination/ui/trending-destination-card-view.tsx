import { TrendingDestination } from '@entities/destination';

import { Calendar } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { Chip } from '@shared/ui';

import {
  Card,
  CardMedia,
  CardImage,
  CardOverlay,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@shared/ui/Card';

type TrendingDestinationCardViewProps = {
  destination: TrendingDestination;
  actionsSlot?: React.ReactNode;
};

export function TrendingDestinationCardView({
  destination,
  actionsSlot,
}: TrendingDestinationCardViewProps) {
  return (
    <Card className="flex w-full min-w-0 flex-col rounded-none shadow-none">
      {/* Image */}
      <CardMedia className="flex h-[205px] w-full flex-col overflow-hidden rounded-3xl">
        <CardImage src={destination.coverImage} alt={destination.title} />

        <CardOverlay className="flex-col justify-between">
          <CardHeader className="p-3">
            <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-black">
              {destination.category}
            </span>
            {actionsSlot}
          </CardHeader>

          <CardContent className="p-3">
            <CardTitle className="text-xl">{destination.title}</CardTitle>

            <CardDescription className="mt-1 line-clamp-1 text-xs">
              {destination.description}
            </CardDescription>
          </CardContent>
        </CardOverlay>
      </CardMedia>

      {/* Content */}
      <CardFooter className="flex flex-col items-start gap-3 py-3 px-0">
        {/* Best time */}
        <div className="flex items-center gap-2">
          <Chip
            text={`بهترین زمان :${destination.bestTimeToVisit}`}
            variant="primary"
            className="border-0 text-xs lg:text-sm xl:text-sm" 
          />
          <Chip
            text={`پیشنهاد سفر :${destination.suggestedVisitTime}`}
            variant="primary"
            className="border-0 text-xs lg:text-sm xl:text-sm"
          />
        </div>

        {/* Saved by */}
        <div className="flex w-full items-center gap-2">
          <div className="flex shrink-0 -space-x-2 space-x-reverse">
            {destination.savedByAvatars.slice(0, 3).map((avatar, index) => (
              <img
                key={index}
                src={avatar}
                alt=""
                className="size-6 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>

          {destination.savedByCount > 0 && (
            <span className="line-clamp-1 text-xs text-text-foreground">
              {destination.savedByCount}+ نفر این پلن را ذخیره کرده‌اند
            </span>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
