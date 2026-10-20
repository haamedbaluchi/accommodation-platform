import type { Accommodation } from '@widgets/explore-page/collections/accommodation-card/model/types';
import type { LocationDetailsData } from '@widgets/place/location-details/model/types';
import type { AccommodationDTO } from './types';
import { HotelDetailsData } from '@widgets/explore-page/explore-item-detail/hotel-details/model/types';
import { parseCoordinates } from '@shared/lib/geo-location';

export function mapAccommodationToUi(dto: AccommodationDTO): Accommodation {
  return {
    id: String(dto.id),
    coverImage: dto.images?.[0]?.url ?? '/images/placeholder-accommodation.jpg',
    badgeLabel: dto.tags?.[0] ?? 'اقامتگاه',
    title: dto.name,
    location: dto.city_name ?? dto.country,
    tags: (dto.tags ?? [])
      .slice(0, 2)
      .map((tag, i) => ({ id: `${dto.id}-${i}`, label: tag })),
    rating: dto.rating ?? 0,
    experienceCount: 0,
  };
}

export function mapAccommodationToDetails(
  dto: AccommodationDTO,
): HotelDetailsData {
  return {
    title: dto.name,
    badgeLabel: dto.tags?.[0],
    shortAddress: dto.city_name,
    fullAddress: dto.city_name,
    exactAddress: dto.exact_address,
    rating: dto.rating != null ? String(dto.rating) : undefined,
    images: dto.images?.map((img) => img.url),
    locationSummary: dto.general_description ?? dto.short_description,
    amenities: (dto.tags ?? []).map((tag, i) => ({
      id: `${dto.id}-${i}`,
      label: tag,
    })),
    phone: dto.phone,
    website: dto.website,
    coordinates: parseCoordinates(dto.latitude, dto.longitude),
  };
}
