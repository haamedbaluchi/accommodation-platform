import { LocationDetailsData } from './types';
const fallbackLocationData = {
  title: 'مقصد سفر',
  category: 'مکان گردشگری',
  rating: '—',
  commentsCount: '—',
  shortAddress: 'آدرس ثبت نشده',
  suggestedVisitTime: 'زمان پیشنهادی ثبت نشده',
  openStatus: true,
  admissionFee: 'نامشخص',
  images: ['/images/default_des.jpg'],
  locationSummary: 'توضیحاتی برای این مکان ثبت نشده است.',
  fullAddress: 'آدرس کامل ثبت نشده است.',
  openingHours: 'ساعات کاری ثبت نشده است.',
  statusNow: true,
  coordinates: {
    lat: 35.6892,
    lng: 51.389,
  },
};
export function normalizeLocationDetails(location?: LocationDetailsData) {
  const images =
    location?.images && location.images.length > 0
      ? location.images
      : location?.imageUrl
        ? [location.imageUrl]
        : fallbackLocationData.images;

  return {
    title: location?.title || fallbackLocationData.title,

    category: location?.category || fallbackLocationData.category,

    rating: location?.rating || fallbackLocationData.rating,

    commentsCount:
      location?.commentsCount || fallbackLocationData.commentsCount,
    mapLink: location?.mapLink,
    shortAddress: location?.shortAddress || fallbackLocationData.shortAddress,

    suggestedVisitTime:
      location?.suggestedVisitTime ||
      location?.visitDuration ||
      fallbackLocationData.suggestedVisitTime,

    openStatus: location?.openStatus ?? fallbackLocationData.openStatus,

    admissionFee: location?.admissionFee || fallbackLocationData.admissionFee,

    images,

    locationSummary:
      location?.locationSummary || fallbackLocationData.locationSummary,

    fullAddress: location?.fullAddress || fallbackLocationData.fullAddress,

    openingHours: location?.openingHours || fallbackLocationData.openingHours,

    statusNow: location?.statusNow ?? fallbackLocationData.statusNow,

    coordinates: location?.coordinates || fallbackLocationData.coordinates,
  };
}
