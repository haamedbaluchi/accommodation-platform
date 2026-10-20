import { EventDetailsData } from './types';

const fallbackEventData = {
  title: 'رویداد',
  categoryLabel: 'رویداد فرهنگی',
  dateDay: '—',
  dateMonth: '—',
  dateWeekday: '-',
  timeLabel: 'نامشخص',
  address: 'آدرس ثبت نشده',
  fullAddress: 'آدرس کامل ثبت نشده است.',
  organizers: [] as string[],
  artists: [] as EventDetailsData['artists'],
  ticketPrice: 'نامشخص',
  images: ['/images/default_event.jpg'],
  coverImage: '/images/default_event.jpg',
  description: 'توضیحاتی برای این رویداد ثبت نشده است.',
  coordinates: { lat: 35.6892, lng: 51.389 },
};

export function normalizeEventDetails(event?: EventDetailsData) {
  const images =
    event?.images && event.images.length > 0
      ? event.images
      : event?.coverImage
        ? [event.coverImage]
        : fallbackEventData.images;

  return {
    title: event?.title || fallbackEventData.title,
    categoryLabel: event?.categoryLabel || fallbackEventData.categoryLabel,

    dateDay: event?.dateDay || fallbackEventData.dateDay,
    dateMonth: event?.dateMonth || fallbackEventData.dateMonth,
    dateWeekday: event?.dateWeekday,
    timeLabel: event?.timeLabel || fallbackEventData.timeLabel,

    address: event?.address || fallbackEventData.address,
    fullAddress:
      event?.fullAddress || event?.address || fallbackEventData.fullAddress,
    mapLink: event?.mapLink,

    organizers:
      event?.organizers && event.organizers.length > 0
        ? event.organizers
        : fallbackEventData.organizers,

    artists:
      event?.artists && event.artists.length > 0
        ? event.artists
        : fallbackEventData.artists,

    ticketPrice: event?.ticketPrice || fallbackEventData.ticketPrice,

    images,
    coverImage: images[0],

    description: event?.description || fallbackEventData.description,

    coordinates: event?.coordinates || fallbackEventData.coordinates,
  };
}
