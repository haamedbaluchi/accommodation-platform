import React from 'react';
import { MODAL_ITEMS, useModalStore } from '@_app/modal';
import { EmptyBookedList } from './empty-booked-flights';
import { FlightTicketType, MOCK_FLIGHT_TICKETS } from '@entities/flight-ticket';

interface BookedFlightsProps {
  flights: FlightTicketType[];
}

export function BookedFlights({
  flights = MOCK_FLIGHT_TICKETS,
}: BookedFlightsProps) {
  const openModal = useModalStore((state) => state.openModal);
  const handleReserveNewTicket = () => {
    openModal(MODAL_ITEMS.RESERVEFLIGHTTICKET);
  };
  return (
    <div className="w-full">
      {/* {flights.length === 0 ? ( */}
        <EmptyBookedList
          imageAlt="لیست بلیط های رزرو شده"
          title=" هنوز بلیطی رزرو نکرده‌اید! ✈️"
          description="به نظر می‌رسد هنوز پروازی برای آینده رزرو نکرده‌اید."
          btnTitle=" ثبت بلیط جدید"
          handleClick={handleReserveNewTicket}
        />
      {/* ) : (
        <>
          <div className="flex flex-col gap-5 mt-5">
            {flights.map((flight, index) => (
              <FlightTicket
                key={`${flight.id}+${flight.airline}`}
                flightTicket={flight}
              />
            ))}
          </div>
          <Button
            rounded="full"
            size="large"
            leftIcon={<PlusIcon className="w-4 h-4" />}
            className="mt-5 w-full"
            onClick={handleReserveNewTicket}
          >
            ثبت بلیط جدید
          </Button>
        </>
      )} */}
    </div>
  );
}
