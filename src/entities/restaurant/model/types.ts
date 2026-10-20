import type { ExploreImageDTO } from '@entities/explore/model/shared-types';

export interface RestaurantDTO {
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
  food_types: string[];
  website?: string;
  phone?: string;
  open_days?: string;
  status?: string;
  is_active?: boolean;
  latitude?: number;
  longitude?: number;
}