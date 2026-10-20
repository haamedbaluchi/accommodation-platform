import type { LocationDetailsData } from '@widgets/place/location-details/model/types';
import { DestinationDTO, TrendingDestination } from './type';
import { parseCoordinates } from '@shared/lib/geo-location';

export function mapDestinationToTrending(
  dto: DestinationDTO,
): TrendingDestination {
  return {
    id: String(dto.id),
    coverImage: dto.images?.[0]?.url ?? '/images/placeholder-destination.jpg',
    category: dto.tags?.[0] ?? 'مقصد گردشگری',
    title: dto.name,
    description: dto.short_description,
    bestTimeToVisit: dto.best_season ?? '-',
    suggestedVisitTime: dto.suggested_visit_duration ?? '',
    savedByCount: 0,
    savedByAvatars: [],
    tags: dto.tags,
  };
}

export function mapDestinationToDetails(
  dto: DestinationDTO,
): LocationDetailsData {
  return {
    title: dto.name,
    category: dto.tags?.[0],
    rating: dto.rating != null ? String(dto.rating) : undefined,
    shortAddress: dto.city_name,
    fullAddress: dto.city_name,
    suggestedVisitTime: dto.suggested_visit_duration,

    openStatus: dto.is_active,
    statusNow: dto.is_active,
    images: dto.images?.map((img) => img.url),
    locationSummary: dto.general_description ?? dto.short_description,
    coordinates: parseCoordinates(dto.latitude, dto.longitude),
  };
}
