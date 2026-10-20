'use client';

import { useState } from 'react';
import { ItineraryStopTransition } from '../../model/types';
import { ItineraryCard } from './itinerary-card';
import { ItineraryConnector } from './itinerary-connector';
import { ItineraryDayHeader } from './itinerary-day-header';
import { ItineraryStop } from '@entities/travel-inspiration';


type ItineraryDayProps = {
  dayLabel: string;
  title: string;
  titleIcon?: string;
  description: string;
  stops: ItineraryStop[];
  transitions: ItineraryStopTransition[]; // طول باید stops.length - 1 باشه
  onViewStopDetails?: (stopId: string) => void;
};

export function ItineraryDay({
  dayLabel,
  title,
  titleIcon,
  description,
  stops,
  transitions,
  onViewStopDetails,
}: ItineraryDayProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="flex flex-col gap-4">
      <ItineraryDayHeader
        dayLabel={dayLabel}
        title={title}
        titleIcon={titleIcon}
        description={description}
        isOpen={isOpen}
        onToggle={() => setIsOpen((prev) => !prev)}
      />

      {isOpen && (
        <div className="flex flex-col gap-2">
          {stops.map((stop, index) => (
            <div key={stop.id}>
              <ItineraryCard
                stop={stop}
                onViewDetails={() => onViewStopDetails?.(stop.placeUid)}
              />
              {transitions[index] && (
                <ItineraryConnector transition={transitions[index]} />
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}