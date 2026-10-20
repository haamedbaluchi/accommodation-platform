import { TripItinerary } from "../types";

export const mockTripItinerary: TripItinerary = {
  tripId: "trip-tehran-1405",
  totalDays: 2,
  days: [
    {
      id: "day-1",
      dayNumber: 1,
      title: "روز اول: گشت و گذار در شمیرانات",
      date: "1405/02/04",
      activities: [
        {
          id: "act-1-1",
          title: "مجموعه فرهنگی تاریخی سعدآباد",
          category: "مکان تاریخی",
          visitDuration: "۳ ساعت",
          startTime: "09:00",
          endTime: "12:00",
          transitToNext: {
            distance: "۲.۵ کیلومتر",
            duration: "۱۰ دقیقه",
            mode: "car"
          }
        },
        {
          id: "act-1-2",
          title: "بازار تجریش و امامزاده صالح",
          category: "جاذبه فرهنگی / بازار",
          visitDuration: "۲ ساعت",
          startTime: "12:15",
          endTime: "14:15",
          transitToNext: {
            distance: "۵۰۰ متر",
            duration: "۶ دقیقه",
            mode: "walk"
          }
        },
        {
          id: "act-1-3",
          title: "رستوران روحی (تجریش)",
          category: "رستوران",
          visitDuration: "۱.۵ ساعت",
          startTime: "14:30",
          endTime: "16:00"
          // آیتم آخر روز مسیر بعدی (transitToNext) ندارد
        }
      ]
    },
    {
      id: "day-2",
      dayNumber: 2,
      title: "روز دوم: نمادهای مدرن تهران",
      date: "1405/02/05",
      activities: [
        {
          id: "act-2-1",
          title: "پل طبیعت و پارک آب و آتش",
          category: "فضای باز / گردشگری",
          visitDuration: "۲.۵ ساعت",
          startTime: "10:00",
          endTime: "12:30",
          transitToNext: {
            distance: "۸ کیلومتر",
            duration: "۱۵ دقیقه",
            mode: "car"
          }
        },
        {
          id: "act-2-2",
          title: "برج میلاد",
          category: "جاذبه تفریحی",
          visitDuration: "۳ ساعت",
          startTime: "13:00",
          endTime: "16:00"
        }
      ]
    }
  ]
};
