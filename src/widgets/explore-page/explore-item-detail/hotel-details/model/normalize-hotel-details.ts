import { HotelDetailsData } from './types';

const fallbackHotelData = {
  title: 'اقامتگاه',
  badgeLabel: 'اقامتگاه',
  rating: '—',
  commentsCount: '—',
  shortAddress: 'آدرس ثبت نشده',
  fullAddress: 'آدرس کامل ثبت نشده است.',
  exactAddress: 'آدرس دقیق ثبت نشده است.',
  amenities: [] as HotelDetailsData['amenities'],
  pricePerNight: 'نامشخص',
  checkInTime: 'نامشخص',
  checkOutTime: 'نامشخص',
  images: ['/images/default_accommodation.jpg'],
  locationSummary: 'توضیحاتی برای این اقامتگاه ثبت نشده است.',
  coordinates: { lat: 35.6892, lng: 51.389 },
};

export function normalizeHotelDetails(hotel?: HotelDetailsData) {
  return {
    title: hotel?.title || fallbackHotelData.title,
    badgeLabel: hotel?.badgeLabel || fallbackHotelData.badgeLabel,

    rating: hotel?.rating || fallbackHotelData.rating,
    commentsCount: hotel?.commentsCount || fallbackHotelData.commentsCount,

    shortAddress: hotel?.shortAddress || fallbackHotelData.shortAddress,
    fullAddress: hotel?.fullAddress || fallbackHotelData.fullAddress,
    exactAddress: hotel?.exactAddress || hotel?.fullAddress || fallbackHotelData.exactAddress,

    amenities: hotel?.amenities && hotel.amenities.length > 0 ? hotel.amenities : fallbackHotelData.amenities,

    pricePerNight: hotel?.pricePerNight || fallbackHotelData.pricePerNight,
    checkInTime: hotel?.checkInTime || fallbackHotelData.checkInTime,
    checkOutTime: hotel?.checkOutTime || fallbackHotelData.checkOutTime,

    phone: hotel?.phone,
    website: hotel?.website,
    mapLink: hotel?.mapLink,

    images: hotel?.images && hotel.images.length > 0 ? hotel.images : fallbackHotelData.images,

    locationSummary: hotel?.locationSummary || fallbackHotelData.locationSummary,

    coordinates: hotel?.coordinates || fallbackHotelData.coordinates,
  };
}