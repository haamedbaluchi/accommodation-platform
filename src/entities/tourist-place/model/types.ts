// entities/tourist-place/model/types.ts
export interface TouristPlaceSearchResult {
  place_id: number;
  uid: string;
  name: string;
  city: string;
  province: string;
  country: string;
  category: string;
  user_rating: number;
}

// entities/tourist-place/model/types.ts
export interface OpeningHours {
  raw: string;
  source?: string;
  weekday_text?: string[];
}
export interface TouristPlacePoi {
  name: string;
  city: string;
  province: string;
  address: string | null;
  lat: number;
  lng: number;
  category: string | null;
  tags: string[];
  summary: string;
  description: string;
  best_time: string | null;
  how_to_get_there: string | null;
  entry_fee_irr: number | null;
  duration_hours: number | null;
  opening_hours: OpeningHours | string | null; // هم رشته هم آبجکت ممکنه بیاد
  rating: number | null;
  ratings_total: number;
  images: string[];
  ai_summary: string;
  ai_description: string;
}

export interface TouristPlaceCard {
  uid: string;
  name: string;
  summary: string;
  city: string;
  province: string;
  location: { lat: number; lng: number };
  image_url: string;
  image_is_placeholder: boolean;
  tags: string[];
}

export interface TouristPlaceAiDetails {
  status: string;
  uid: string;
  poi: TouristPlacePoi;
  card: TouristPlaceCard;
  ai_generated: boolean;
  reviews: unknown[];
}

export interface TouristPlaceAiDetailsResponse {
  success: boolean;
  message: string;
  data: TouristPlaceAiDetails;
}