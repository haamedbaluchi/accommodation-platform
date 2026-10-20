import React from 'react';
import { BookedCard } from './booked-card';
import { BookedHotel } from '../model/types';
import { Button, Divider } from '@shared/ui';
import { MapIcon, PhoneIcon } from '@heroicons/react/24/outline';

export function HotelBookingCard({ hotel }: { hotel: BookedHotel }) {
  return (
    <BookedCard>
      <div className="flex items-center gap-3 lg:gap-5">
        <BookedCard.Thumbnail src={hotel.thumbnailUrl} alt={hotel.hotelName} />
        <div className="flex-1 w-full">
          <BookedCard.HotelInfo>
            <BookedCard.Title title={hotel.hotelName} />
            <BookedCard.Rating rating={hotel.rating} />
            <BookedCard.Details
              content={`${hotel.roomInfo.title}. ${hotel.roomInfo.guestCount}نفر`}
            />
          </BookedCard.HotelInfo>
          <BookedCard.StayTimeline
            checkInDate={hotel.checkIn.date}
            checkOutDate={hotel.checkOut.date}
          />
        </div>
      </div>
      <Divider className="my-3 bg-text-muted-foreground" />
      <BookedCard.Actions>
        <Button
          variant="outlineSecondary"
          rounded="full"
          size="medium"
          className="flex-1"
          leftIcon={<MapIcon className="w-4 h-4" />}
        >
          مسیریابی
        </Button>
        <Button
          rounded="full"
          size="medium"
          className="flex-1 bg-active-item-background/80 text-primary hover:text-primary-active hover:bg-active-item-background active:text-primary-hover active:bg-active-item-background/70"
          leftIcon={<PhoneIcon className="w-5 h-5" />}
        >
          تماس با اقامتگاه
        </Button>
      </BookedCard.Actions>
    </BookedCard>
  );
}
