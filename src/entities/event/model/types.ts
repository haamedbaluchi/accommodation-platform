import type { ExploreImageDTO } from '@entities/explore/model/shared-types';

export interface EventDTO {
  id: number;
  name: string;
  short_description: string;
  general_description?: string;
  tags: string[];
  rating: number;
  city_id: number;
  city_name?: string;
  country: string;
  images: ExploreImageDTO[];
  event_date: string;
  event_time: string;
  address?: string;
  organizers?: string[];
  is_active?: boolean;
  latitude?: number;
  longitude?: number;
}