import React from 'react';
import { BaseTicket } from './base-ticket';
import { FlightTicketType } from '../model/types';

export function FlightTicket({ flightTicket }: { flightTicket: FlightTicketType }) {
  return (
    <BaseTicket>
      <BaseTicket.Image src={flightTicket.logo} alt={flightTicket.airline} />
      <BaseTicket.Divider />

      <BaseTicket.Content>
        <BaseTicket.Header
          airline={flightTicket.airline}
          flightNo={flightTicket.flightNumber}
        />

        <BaseTicket.Route
          originCode={flightTicket.origin.code}
          originCity={flightTicket.origin.city}
          destCode={flightTicket.destination.code}
          destCity={flightTicket.destination.city}
          duration={flightTicket.duration}
        />

        <BaseTicket.Footer>
          <BaseTicket.FooterItem
            label="Date"
            value={flightTicket.boardingInfo.date}
          />
          <BaseTicket.FooterItem
            label="Boarding"
            value={flightTicket.boardingInfo.time}
          />
          <BaseTicket.FooterItem
            label="Passenger"
            value={flightTicket.passenger.name}
          />
          <BaseTicket.FooterItem
            label="Seat"
            value={flightTicket.passenger.seat}
          />
        </BaseTicket.Footer>
      </BaseTicket.Content>
    </BaseTicket>
  );
}
