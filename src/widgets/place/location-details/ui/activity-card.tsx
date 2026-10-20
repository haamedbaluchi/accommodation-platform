'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { Button, Chip } from '@shared/ui';
import {
  ClockIcon,
  LocationCategoryIcon,
  ArrowDown,
} from '@shared/assets/icons';
import { ItineraryItem } from '@entities/trip';

import { EditModal } from '@features/trip/edit-place/EditModal';
import DeletePlaceModal from '@features/trip/delete-place/DeletePlaceModal';

import { LocationDetails } from './location-details';
import { RouteInfo } from '@shared/ui/route-info';
interface ActivityCardProps {
  place: ItineraryItem;
}

export function ActivityCard({ place }: ActivityCardProps) {
  const [showDetails, setShowDetails] = useState(false);
  const timeLabel =
    place.startTime && place.endTime
      ? `${place.startTime} - ${place.endTime}`
      : place.startTime
        ? `شروع: ${place.startTime}`
        : place.endTime
          ? `پایان: ${place.endTime}`
          : place.visitDuration
            ? place.visitDuration
            : null;

  return (
    <div className="flex flex-col gap-1">
      <div className="cursor-grab active:cursor-grabbing flex items-center justify-between border border-border-foreground rounded-lg p-2 pl-4">
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 flex-1 min-w-0">
          <div className="relative w-13 h-13 lg:w-17.5 lg:h-17.5">
            <Image
              src={place.imageUrl || '/images/default_des.jpg'}
              alt={place.imageAlt || place.title}
              fill
              className="rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1 font-yekta flex-1 min-w-0">
            <h4 className="text-primary-active font-bold text-xs sm:text-sm md:text-base lg:text-lg truncate whitespace-nowrap overflow-hidden">
              {place.title}
            </h4>
            <div className="flex gap-2">
              {place.category ? (
                <Chip
                  text={place.category || 'مکان گردشگری'}
                  icon={
                    <LocationCategoryIcon className="w-3 h-3 lg:w-4 lg:h-4" />
                  }
                  className="py-0.5 h-8 px-2 text-[0.625rem] sm:text-xs font-medium bg-active-item-background text-primary-active border-0"
                />
              ) : null}
              {timeLabel ? (
                <Chip
                  text={timeLabel}
                  icon={<ClockIcon className="w-3 h-3 lg:w-4 lg:h-4" />}
                  className="py-0.5 h-8 px-2 text-[0.625rem] sm:text-xs text-[#995900] font-medium bg-backgroun-secondary border-0"
                />
              ) : null}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1 md:gap-2 shrink-0">
          {/* <EditModal /> */}
          {/* <DeletePlaceModal /> */}
          <Button
            rounded="full"
            size="icon"
            variant="secondary"
            aria-label="جزئیات مقصد"
            onClick={() => setShowDetails((prev) => !prev)}
          >
            <ArrowDown
              className={`w-4 h-4 md:w-5 md:h-5 transition-transform ${
                showDetails ? 'rotate-0' : '-rotate-90'
              }`}
            />
          </Button>
        </div>
      </div>
      <div className="my-1">
        {place.transitToNext && (
          <RouteInfo
            distanceKm={place.transitToNext.distance ?? '--'}
            durationMinutes={place.transitToNext.duration ?? '--'}
            distanceLabel="تا مقصد بعدی"
            durationLabel="تا مقصد بعدی"
            className="text-tertiary"
          />
        )}
      </div>

      {showDetails && (
        <div className="mt-0">
          <LocationDetails location={place} />
        </div>
      )}
    </div>
  );
}
