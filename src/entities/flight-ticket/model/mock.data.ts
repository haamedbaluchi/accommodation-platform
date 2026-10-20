import { FlightTicketType } from "./types";

export const MOCK_FLIGHT_TICKETS: FlightTicketType[] = [
  {
    id: "FL-1001",
    airline: "Mahan Air",
    airline_fa: "هواپیمایی ماهان",
    logo: "/images/airplane.svg",
    flightNumber: "W5 1089",
    origin: {
      city: "Tehran",
      city_fa: "تهران",
      airport: "Mehrabad International Airport",
      airport_fa: "فرودگاه بین‌المللی مهرآباد",
      code: "THR"
    },
    destination: {
      city: "Mashhad",
      city_fa: "مشهد",
      airport: "Shahid Hasheminejad International Airport",
      airport_fa: "فرودگاه بین‌المللی شهید هاشمی‌نژاد",
      code: "MHD"
    },
    departureTime: "08:30",
    arrivalTime: "10:00",
    duration: "01:30",
    class: "Economy",
    class_fa: "اکونومی",
    aircraft: "Airbus A310",
    stops: 0,
    price: 2500000,
    boardingInfo: {
      date: "2026-05-10",
      time: "07:45",
      gate: "14"
    },
    passenger: {
      name: "علی رضایی",
      seat: "12A"
    }
  },
  {
    id: "FL-1002",
    airline: "Qatar Airways",
    airline_fa: "هواپیمایی قطر",
    logo: "/images/airplane.svg",
    flightNumber: "QR 491",
    origin: {
      city: "Tehran",
      city_fa: "تهران",
      airport: "Imam Khomeini International Airport",
      airport_fa: "فرودگاه بین‌المللی امام خمینی",
      code: "IKA"
    },
    destination: {
      city: "Doha",
      city_fa: "دوحه",
      airport: "Hamad International Airport",
      airport_fa: "فرودگاه بین‌المللی حمد",
      code: "DOH"
    },
    departureTime: "22:45",
    arrivalTime: "00:20",
    duration: "02:05",
    class: "Business",
    class_fa: "بیزینس",
    aircraft: "Boeing 777-300ER",
    stops: 0,
    price: 18500000,
    boardingInfo: {
      date: "2026-05-15",
      time: "21:50",
      gate: "B3"
    },
    passenger: {
      name: "سارا احمدی",
      seat: "2F"
    }
  },
  {
    id: "FL-1003",
    airline: "Iran Air",
    airline_fa: "ایران ایر",
    logo: "/images/train.svg",
    flightNumber: "IR 721",
    origin: {
      city: "Shiraz",
      city_fa: "شیراز",
      airport: "Shahid Dastgheib International Airport",
      airport_fa: "فرودگاه بین‌المللی شهید دستغیب",
      code: "SYZ"
    },
    destination: {
      city: "Istanbul",
      city_fa: "استانبول",
      airport: "Istanbul Airport",
      airport_fa: "فرودگاه استانبول",
      code: "IST"
    },
    departureTime: "14:15",
    arrivalTime: "17:30",
    duration: "03:45",
    class: "Economy",
    class_fa: "اکونومی",
    aircraft: "Airbus A320",
    stops: 1,
    price: 12000000,
    boardingInfo: {
      date: "2026-05-20",
      time: "13:30",
      gate: "5"
    },
    passenger: {
      name: "محمد کریمی",
      seat: "24C"
    }
  }
];
