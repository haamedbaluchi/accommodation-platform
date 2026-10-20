'use client';

import { useOpenTripChat } from '../model/useOpenTripChat';
import { Trip, buildTripImage ,TripCard} from '@entities/trip';


type OpenTripCardProps = {
  trip: Trip;
};

export function OpenTripCard({ trip }: OpenTripCardProps) {
  const { openTripChat, isOpening } = useOpenTripChat();

  return (
    <TripCard
      disabled={isOpening}
      onClick={() => openTripChat(trip.trip_id)}
      className="h-50 sm:h-65 md:h-auto"
    >
      <TripCard.Background
        src={buildTripImage(trip.image_url)}
        alt={trip.image_alt ?? trip.title}
      />

      <TripCard.Content>
        <TripCard.Info
          title={trip.title}
          duration={trip.duration}
          location={trip.location}
        />

        <TripCard.Avatars users={trip.companions} />
      </TripCard.Content>
    </TripCard>
  );
}
