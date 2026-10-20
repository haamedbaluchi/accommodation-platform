import type { LocalFood } from '../model/types';

import { MapPin, Star } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

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

type LocalFoodCardViewProps = {
  food: LocalFood;
  actionsSlot?: React.ReactNode;
};

export function LocalFoodCardView({
  food,
  actionsSlot,
}: LocalFoodCardViewProps) {
  return (
    <Card className="flex w-full min-w-0 flex-col rounded-none shadow-none">
      <CardMedia className="flex h-[205px] w-full flex-col overflow-hidden rounded-3xl">
        <CardImage src={food.coverImage} alt={food.title} />

        <CardOverlay className="flex-col justify-between to-black/10">
          <CardHeader className="p-3">
            <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-black">
              {food.badgeLabel}
            </span>

            {actionsSlot}
          </CardHeader>

          <CardContent className="p-3">
            <CardTitle className="text-xl">{food.title}</CardTitle>

            <CardDescription className="mt-1 line-clamp-1 text-xs">
              {food.description}
            </CardDescription>
          </CardContent>
        </CardOverlay>
      </CardMedia>

      <CardFooter className="flex flex-col items-start gap-2 py-2 px-0">
        <span className="flex items-center gap-1 text-sm text-text-foreground font-medium">
          <HugeiconsIcon icon={MapPin} className="size-4.5 shrink-0" />

          <span className="line-clamp-1">{food.location}</span>
        </span>

        <div className="flex w-full items-center gap-2 justify-between">
          <span className="text-sm font-medium text-text-foreground">
            {food.experienceCount}+ تجربه ثبت شده
          </span>
          <span className="flex items-center gap-1 text-sm font-medium text-amber-500 bg-success/10 px-2 py-0.5 rounded-full">
            <span className="text-success">{food.rating}</span>
            <HugeiconsIcon icon={Star} className="size-3.5 fill-amber-400" />
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}
