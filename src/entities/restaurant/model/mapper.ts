import type { LocalFood } from '@widgets/explore-page/collections/local-food/model/types';
import type { LocationDetailsData } from '@widgets/place/location-details/model/types';
import type { RestaurantDTO } from './types';
import { RestaurantDetailsData } from '@widgets/explore-page/explore-item-detail/restaurant-details/model/types';
import { parseCoordinates } from '@shared/lib/geo-location';

export function mapRestaurantToLocalFood(dto: RestaurantDTO): LocalFood {
  return {
    id: String(dto.id),
    coverImage: dto.images?.[0]?.url ?? '/images/placeholder-food.jpg',
    badgeLabel: dto.food_types?.[0] ?? 'طعم محلی',
    title: dto.name,
    description: dto.short_description,
    location: `${dto.country} , ${dto.city_name}`,
    rating: dto.rating ?? 0,
    experienceCount: 0,
  };
}

export function mapRestaurantToDetails(
  dto: RestaurantDTO,
): RestaurantDetailsData {
  return {
    title: dto.name,
    foodTypes: dto.food_types,
    shortAddress: dto.city_name,
    fullAddress: dto.city_name,
    rating: dto.rating != null ? String(dto.rating) : undefined,
    images: dto.images?.map((img) => img.url),
    locationSummary: dto.general_description ?? dto.short_description,
    openStatus: dto.is_active,
    statusNow: dto.is_active,
    phone: dto.phone,
    website: dto.website,
    coordinates: parseCoordinates(dto.latitude, dto.longitude),
  };
}
