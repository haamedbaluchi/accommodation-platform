interface LocationType {
  city: string;
  city_fa: string;
  airport: string;
  airport_fa: string;
  code: string;
}

interface PassengerType {
  name: string;
  seat: string;
}

interface BoardingInfoType {
  date: string;
  time: string;
  gate: string;
}

export interface FlightTicketType {
  readonly id: string | number;
  airline: string;
  airline_fa: string;
  logo: string;
  flightNumber: string;
  origin: LocationType;
  destination: LocationType;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  class: 'Economy' | 'Business' | 'First' | string; 
  class_fa: string;
  aircraft: string;
  stops: number;
  price: number;
  boardingInfo: BoardingInfoType;
  passenger: PassengerType;
}
