import {
  TravelPaceType,
  TravelStatus,
  TravelTripType,
} from '@shared/types/trip';



export interface TripCompanionDto {
  id?: number | string;
  name?: string | null;
  avatar_url?: string | null;
}

export interface TravelTripDto {
  trip_id: number;
  title: string;
  destination_summary: string | null;
  image_url: string | null;
  image_alt: string | null;
  budget_range: string;
  status: TravelStatus;
  trip_type: TravelTripType;
  pace_type: TravelPaceType;
  is_road_trip: boolean;
  total_days: number;
  traveler_count: number;
  start_date: string;
  end_date: string;
  created_at: string;
  companions: TripCompanionDto[];
}

export interface TravelTripsResponse {
  success: boolean;
  message: string;
  data: TravelTripDto[];
}

export interface ChatByTripResponse {
  success: boolean;
  message?: string;
  chat_data?: {
    chat_id: string;
    session_id: string;
  };
  chat_id?: string;
  session_id?: string;
}
