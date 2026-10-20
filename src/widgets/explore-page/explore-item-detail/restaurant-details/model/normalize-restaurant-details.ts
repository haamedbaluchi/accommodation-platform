import { RestaurantDetailsData } from './types';

const fallbackRestaurantData = {
  title: 'رستوران',
  foodTypes: ['غذای محلی'],
  rating: '—',
  commentsCount: '—',
  shortAddress: 'آدرس ثبت نشده',
  suggestedVisitTime: 'نامشخص',
  openStatus: true,
  statusNow: true,
  openingHours: 'ساعات کاری ثبت نشده است.',
  priceRange: 'نامشخص',
  images: ['/images/default_food.jpg'],
  locationSummary: 'توضیحاتی برای این رستوران ثبت نشده است.',
  fullAddress: 'آدرس کامل ثبت نشده است.',
  coordinates: { lat: 35.6892, lng: 51.389 },
};

export function normalizeRestaurantDetails(restaurant?: RestaurantDetailsData) {
  return {
    title: restaurant?.title || fallbackRestaurantData.title,

    foodTypes:
      restaurant?.foodTypes && restaurant.foodTypes.length > 0
        ? restaurant.foodTypes
        : fallbackRestaurantData.foodTypes,

    rating: restaurant?.rating || fallbackRestaurantData.rating,

    commentsCount: restaurant?.commentsCount || fallbackRestaurantData.commentsCount,

    shortAddress: restaurant?.shortAddress || fallbackRestaurantData.shortAddress,

    suggestedVisitTime:
      restaurant?.suggestedVisitTime || fallbackRestaurantData.suggestedVisitTime,

    openStatus: restaurant?.openStatus ?? fallbackRestaurantData.openStatus,

    statusNow: restaurant?.statusNow ?? fallbackRestaurantData.statusNow,

    openingHours: restaurant?.openingHours || fallbackRestaurantData.openingHours,

    priceRange: restaurant?.priceRange || fallbackRestaurantData.priceRange,

    phone: restaurant?.phone,
    website: restaurant?.website,
    mapLink: restaurant?.mapLink,

    images:
      restaurant?.images && restaurant.images.length > 0
        ? restaurant.images
        : fallbackRestaurantData.images,

    locationSummary: restaurant?.locationSummary || fallbackRestaurantData.locationSummary,

    fullAddress: restaurant?.fullAddress || fallbackRestaurantData.fullAddress,

    coordinates: restaurant?.coordinates || fallbackRestaurantData.coordinates,
  };
}