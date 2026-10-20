import type { LocalEvent } from '../model/types';

import { Clock, MapPin } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { Chip } from '@shared/ui';

import {
  Card,
  CardMedia,
  CardImage,
  CardOverlay,
  CardHeader,
  CardFooter,
  CardContent,
  CardTitle,
  CardDescription,
} from '@shared/ui/Card';

type LocalEventCardViewProps = {
  event: LocalEvent;
  actionsSlot?: React.ReactNode;
};

export function LocalEventCardView({
  event,
  actionsSlot,
}: LocalEventCardViewProps) {
  return (
    <Card className="flex w-full min-w-0 flex-col rounded-none shadow-none">
      <CardMedia className="flex h-[205px] w-full flex-col overflow-hidden rounded-3xl">
        <CardImage src={event.coverImage} alt={event.title} />
        <CardOverlay className="flex-col justify-between">
          <CardHeader className="p-3">
            <div className="flex flex-col items-center rounded-2xl bg-[#000000] p-2 backdrop-blur-sm text-xl font-bold">
              <span className="leading-none">{event.dateDay}</span>

              <span className="text-xs text-gray-300">{event.dateMonth}</span>
            </div>

            {actionsSlot}
          </CardHeader>
          <CardContent className="p-3">
            <CardTitle className="text-xl">{event.title}</CardTitle>

            <CardDescription className="mt-1 line-clamp-1 text-xs">
              <span className="mt-1 flex items-center gap-1 text-xs text-gray-200">
                <HugeiconsIcon icon={MapPin} className="size-3.5" />

                {event.location}
              </span>
            </CardDescription>
          </CardContent>
        </CardOverlay>
      </CardMedia>

      <CardFooter className="flex flex-col items-start bg-transparent py-3 px-0 text-white">
        <div className="mt-1 flex items-center gap-2">
          <Chip
            className="text-sm border-0 rounded-full px-4 py-0.75"
            variant={'primary'}
          >
            {event.timeLabel}
            <HugeiconsIcon
              icon={Clock}
              className="size-4.5 text-error fill-error/10"
            />
          </Chip>
          <Chip
            className="text-sm rounded-full px-4 py-0.75 border-0"
            variant={'primary'}
          >
            {event.tagIcon && <span>{event.tagIcon}</span>}

            {event.tagLabel}
          </Chip>
        </div>
      </CardFooter>
    </Card>
  );
}
