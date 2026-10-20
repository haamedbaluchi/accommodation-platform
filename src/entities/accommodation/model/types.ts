import type { ExploreImageDTO } from '@entities/explore/model/shared-types';

export interface AccommodationDTO {
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
  exact_address?: string;
  phone?: string;
  website?: string;
  is_active?: boolean;
  latitude?: number;
  longitude?: number;
}