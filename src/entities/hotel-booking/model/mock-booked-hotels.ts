import { BookedHotel } from "../model/types";

export const mockBookedHotels: BookedHotel[] = [
  {
    id: "RES-847291",
    hotelName: "هتل مجلل درویشی مشهد",
    thumbnailUrl: "/images/hotels/hotel.png", 
    rating: 3,
    roomInfo: {
      title: "اتاق دو تخته دبل استاندارد",
      guestCount: 2,
      bedCount: 1,
    },
    checkIn: {
      date: "۱۴۰۳/۰۶/۱۲",
      time: "۱۴:۰۰",
    },
    checkOut: {
      date: "۱۴۰۳/۰۶/۱۵",
      time: "۱۲:۰۰",
    },
    reservationCode: "MHD-99482",
    price: 15500000,
  },
  {
    id: "RES-339102",
    hotelName: "هتل اسپیناس پالاس تهران",
    thumbnailUrl: "/images/hotels/hotel2.png",
    rating: 4,
    roomInfo: {
      title: "سوئیت رویال فمیلی",
      guestCount: 4,
      bedCount: 3,
    },
    checkIn: {
      date: "۱۴۰۳/۰۷/۰۱",
      time: "۱۵:۰۰",
    },
    checkOut: {
      date: "۱۴۰۳/۰۷/۰۵",
      time: "۱۲:۰۰",
    },
    reservationCode: "THR-11203",
    price: 48000000,
  },
  {
    id: "RES-550293",
    hotelName: "هتل پارس شیراز",
    thumbnailUrl: "/images/hotels/hotel3.jpg",
    rating: 5,
    roomInfo: {
      title: "اتاق یک تخته سینگل",
      guestCount: 1,
      bedCount: 1,
    },
    checkIn: {
      date: "۱۴۰۳/۰۸/۲۰",
      time: "۱۴:۰۰",
    },
    checkOut: {
      date: "۱۴۰۳/۰۸/۲۲",
      time: "۱۲:۰۰",
    },
    reservationCode: "SYZ-40021",
    price: 6200000,
  }
];
