import { Trip } from '@entities/trip';
import { getTripFallbackImage } from '../lib/getTripFallbackImage';
import { TravelTripDto } from '@features/trip/api';

const DEFAULT_USER_AVATAR = '/images/avatars/default-avatar.png';

export function mapTripDtoToTrip(trip: TravelTripDto): Trip {
  return {
    trip_id: trip.trip_id,
    title: trip.title || 'سفر بدون عنوان',
    location: trip.destination_summary || 'مقصد مشخص نشده',
    destination_summary: trip.destination_summary || '',
    duration: `${trip.total_days} روز`,
    image_url: trip.image_url || getTripFallbackImage(trip.trip_id),
    image_alt: trip.image_alt || trip.title || 'تصویر سفر',
    companions: (trip.companions || []).map((companion, index) => ({
      id: String(companion.id ?? index),
      name: companion.name || 'همسفر',
      avatar: companion.avatar_url || DEFAULT_USER_AVATAR,
    })),
    status: trip.status,
    trip_type: trip.trip_type,
    pace_type: trip.pace_type,
    budget_range: trip?.budget_range ?? undefined,
    is_road_trip: trip.is_road_trip,
    start_date: trip.start_date,
    end_date: trip.end_date,
    traveler_count: trip.traveler_count,
    total_days: trip.total_days,
    created_at: trip.created_at,
  };
}
