import {
  TravelPaceType,
  TravelStatus,
  TravelTripType,
} from '@shared/types/trip';

export interface TripCompanions {
  id: string;
  name: string;
  avatar: string;
}
export interface Trip {
  trip_id: number;
  title: string;
  location: string;
  destination_summary?: string;
  duration: string;
  image_url: string;
  image_alt?: string;
  companions: TripCompanions[];
  status: TravelStatus;
  budget_range: string;
  trip_type: TravelTripType;
  pace_type: TravelPaceType;
  is_road_trip: boolean;
  start_date: string;
  end_date: string;
  traveler_count: number;
  total_days: number;
  created_at: string;
}

      
  
   