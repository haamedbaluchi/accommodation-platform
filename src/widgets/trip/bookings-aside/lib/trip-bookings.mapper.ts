import { FlightTicket } from "@entities/trip/booked-flight";
import { BookedHotel } from "@entities/trip/booked-hotel";


function pickFirstString(...values: unknown[]): string | undefined {
  for (const value of values) {
    if (typeof value === 'string' && value.trim()) return value.trim();
    if (typeof value === 'number' && !Number.isNaN(value)) return String(value);
  }
  return undefined;
}

function pickFirstNumber(...values: unknown[]): number | undefined {
  for (const value of values) {
    if (typeof value === 'number' && !Number.isNaN(value)) return value;
    if (typeof value === 'string' && value.trim()) {
      const parsed = Number(value);
      if (!Number.isNaN(parsed)) return parsed;
    }
  }
  return undefined;
}

function normalizeResearchData(researchData: unknown): Record<string, any>[] {
  if (Array.isArray(researchData)) return researchData as Record<string, any>[];

  if (researchData && typeof researchData === 'object') {
    const data = researchData as Record<string, any>;

    const possibleArrays = [
      data.flights,
      data.flight_list,
      data.hotels,
      data.hotel_list,
      data.items,
      data.results,
      data.data,
    ];

    const merged = possibleArrays.flatMap((item) =>
      Array.isArray(item) ? item : [],
    );

    if (merged.length > 0) return merged;
  }

  return [];
}

function getFlightsArray(researchData: unknown): Record<string, any>[] {
  if (researchData && typeof researchData === 'object') {
    const data = researchData as Record<string, any>;

    const candidates = [
      data.flights,
      data.flight_list,
      data.booked_flights,
      data.air_flights,
      data.airlines,
    ];

    for (const candidate of candidates) {
      if (Array.isArray(candidate)) return candidate;
    }
  }

  return normalizeResearchData(researchData).filter(
    (item) =>
      item?.flightNumber ||
      item?.flight_number ||
      item?.airline ||
      item?.origin ||
      item?.destination,
  );
}

function getHotelsArray(researchData: unknown): Record<string, any>[] {
  if (researchData && typeof researchData === 'object') {
    const data = researchData as Record<string, any>;

    const candidates = [
      data.hotels,
      data.hotel_list,
      data.booked_hotels,
      data.stays,
      data.accommodations,
    ];

    for (const candidate of candidates) {
      if (Array.isArray(candidate)) return candidate;
    }
  }

  return normalizeResearchData(researchData).filter(
    (item) =>
      item?.hotelName ||
      item?.hotel_name ||
      item?.name ||
      item?.checkIn ||
      item?.checkOut,
  );
}

function formatDate(value: unknown): string {
  return pickFirstString(value) ?? '-';
}

function mapFlight(item: Record<string, any>, index: number): FlightTicket {
  return {
    id: pickFirstString(item.id, item.flight_id, `flight-${index}`) ?? `flight-${index}`,
    airline: pickFirstString(item.airline, item.airline_name, item.carrier) ?? 'Unknown Airline',
    airline_fa: pickFirstString(item.airline_fa, item.airline_persian, item.airline, item.carrier) ?? 'ایرلاین نامشخص',
    logo: pickFirstString(item.logo, item.logo_url, item.image, '/images/airplane.svg') ?? '/images/airplane.svg',
    flightNumber: pickFirstString(item.flightNumber, item.flight_number, item.number) ?? '-',
    origin: {
      city: pickFirstString(item.origin?.city, item.from?.city, item.origin_city) ?? '-',
      city_fa: pickFirstString(item.origin?.city_fa, item.from?.city_fa, item.origin_city_fa, item.origin?.city) ?? '-',
      airport: pickFirstString(item.origin?.airport, item.from?.airport, item.origin_airport) ?? '-',
      airport_fa: pickFirstString(item.origin?.airport_fa, item.from?.airport_fa, item.origin_airport_fa) ?? '-',
      code: pickFirstString(item.origin?.code, item.from?.code, item.origin_code) ?? '---',
    },
    destination: {
      city: pickFirstString(item.destination?.city, item.to?.city, item.destination_city) ?? '-',
      city_fa: pickFirstString(item.destination?.city_fa, item.to?.city_fa, item.destination_city_fa, item.destination?.city) ?? '-',
      airport: pickFirstString(item.destination?.airport, item.to?.airport, item.destination_airport) ?? '-',
      airport_fa: pickFirstString(item.destination?.airport_fa, item.to?.airport_fa, item.destination_airport_fa) ?? '-',
      code: pickFirstString(item.destination?.code, item.to?.code, item.destination_code) ?? '---',
    },
    departureTime: pickFirstString(item.departureTime, item.departure_time, item.departure) ?? '-',
    arrivalTime: pickFirstString(item.arrivalTime, item.arrival_time, item.arrival) ?? '-',
    duration: pickFirstString(item.duration, item.flight_duration) ?? '-',
    class: pickFirstString(item.class, item.cabin_class) ?? 'Economy',
    class_fa: pickFirstString(item.class_fa, item.cabin_class_fa) ?? 'اکونومی',
    aircraft: pickFirstString(item.aircraft, item.aircraft_type) ?? '-',
    stops: pickFirstNumber(item.stops, item.stop_count) ?? 0,
    price: pickFirstNumber(item.price, item.amount) ?? 0,
    boardingInfo: {
      date: formatDate(item.boardingInfo?.date ?? item.date ?? item.departure_date),
      time: pickFirstString(item.boardingInfo?.time, item.boarding_time, item.departureTime, item.departure_time) ?? '-',
      gate: pickFirstString(item.boardingInfo?.gate, item.gate) ?? '-',
    },
    passenger: {
      name: pickFirstString(item.passenger?.name, item.passenger_name, item.traveler_name) ?? '-',
      seat: pickFirstString(item.passenger?.seat, item.seat) ?? '-',
    },
  };
}

function mapHotel(item: Record<string, any>, index: number): BookedHotel {
  return {
    id: pickFirstString(item.id, item.reservation_id, `hotel-${index}`) ?? `hotel-${index}`,
    hotelName: pickFirstString(item.hotelName, item.hotel_name, item.name) ?? 'هتل نامشخص',
    thumbnailUrl:
      pickFirstString(
        item.thumbnailUrl,
        item.thumbnail_url,
        item.image,
        item.image_url,
        item.photos?.[0],
        '/images/hotels/hotel.png',
      ) ?? '/images/hotels/hotel.png',
    rating: pickFirstNumber(item.rating, item.star_rating, item.stars) ?? 0,
    roomInfo: {
      title: pickFirstString(item.roomInfo?.title, item.room_title, item.room_type) ?? '-',
      guestCount: pickFirstNumber(item.roomInfo?.guestCount, item.guest_count, item.guests) ?? 1,
      bedCount: pickFirstNumber(item.roomInfo?.bedCount, item.bed_count, item.beds) ?? 1,
    },
    checkIn: {
      date: formatDate(item.checkIn?.date ?? item.check_in_date ?? item.checkin),
      time: pickFirstString(item.checkIn?.time, item.check_in_time) ?? '-',
    },
    checkOut: {
      date: formatDate(item.checkOut?.date ?? item.check_out_date ?? item.checkout),
      time: pickFirstString(item.checkOut?.time, item.check_out_time) ?? '-',
    },
    reservationCode:
      pickFirstString(item.reservationCode, item.reservation_code, item.booking_code) ?? '-',
    price: pickFirstNumber(item.price, item.amount) ?? 0,
  };
}

export function mapResearchDataToBookedFlights(
  researchData: unknown,
): FlightTicket[] {
  return getFlightsArray(researchData).map(mapFlight);
}

export function mapResearchDataToBookedHotels(
  researchData: unknown,
): BookedHotel[] {
  return getHotelsArray(researchData).map(mapHotel);
}
