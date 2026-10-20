export interface Inspiration {
  id: number;
  title: string;
  travel_description: string;
  city_name: string;
  image_url: string;
  image_alt: string;
  tags: string[];
  author_name: string;
  author_image: string;
  is_favorited: boolean; // اضافه شد
  created_at: string;
}

export interface InspirationDetails {
  id: number;
  author: InspirationAuthor;
  city_id: number;
  city_name: string;
  title: string;
  travel_description: string;
  image_url: string;
  image_alt: string;
  why_chosen: string;
  route_experience: string;
  tags: string[];
  days: InspirationDay[];
  is_favorited: boolean; // اضافه شد
  created_at: string;
  updated_at: string;
  know_before_travel: string;
  food_experience: string;

  weather: string;
  images: Array<{
    id: string;
    url: string;
    alt: string;
    sort_order: number;
  }>;
}

export interface InspirationAuthor {
  id: number;
  name: string;
  family_name: string;
  avatar_url: string;
}

export interface InspirationDay {
  id: number;
  day: number;
  title: string;
  description: string;
  places: InspirationPlace[];
}

export interface InspirationPlace {
  id: number;
  tourist_place_id: number;
  place_name: string;
  comment: string;
  tags: string[];
  author_comments: AuthorComment[];
  card: InspirationPlaceCard;
}

export interface AuthorComment {
  id: number;
  content: string;
  created_at: string;
}

export interface InspirationPlaceCard {
  uid: string;
  name: string;
  summary: string;
  image_url: string;
  tags: string[];
  latitude: number;
  longitude: number;
}

export type LocalExperience = {
  id: string;
  coverImage: string;
  title: string;
  location: string;
  badgeLabel: string; // "تجربه محلی" | "تجربه خاص"
  capacityCount: number;
  durationHours: number;
  rating: number;
  host: { name: string; avatarUrl: string };
};

// entities/travel-inspiration/model/types.ts
export type DestinationExperience = {
  id: string;
  coverImage: string;
  title: string;
  description: string;
  durationDays: number;
  spotsCount: number;
  category: string;
  location: string;
  author: { name: string };
  author_image:string,
  isFavorited: boolean; // اضافه شد
  tags:string[]
};

//////////////

import type { ReactNode } from 'react';

export interface InspirationAuthor {
  name: string;
  avatar?: string;
}

// entities/travel-inspiration/model/types.ts
export interface InspirationHeroData {
  title: string;
  coverImage: string;
  author: InspirationAuthor;
  location: string;
  duration: string;
  updatedAt: string;
  saveCount?: number;
  isFavorited: boolean; // اضافه شد
}
export interface InspirationWhySectionData {
  title?: string;
  description: string;
  tags?: string[];
}

export interface InspirationRecommendation {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface InspirationExperience {
  title: string;
  icon: ReactNode;
}

export interface InspirationBestTimeSectionData {
  description: string;
}

export type ItineraryStopTag = {
  id: string;
  label: string;
  icon?: string;
};

export type ItineraryStop = {
  id: string;
  placeUid: string;
  title: string;
  titleIcon?: string;
  subtitle: string;
  travelerNote: string;
  coverImage: string;
  tags: ItineraryStopTag[];
  detailsHref: string;
};

export type ItineraryStopTransition = {
  distanceKm: number;
  durationMinutes: number;
};

export type ItineraryDayType = {
  id: string;
  dayNumber: number;
  dayLabel: string; // "روز اول"
  title: string; // "شروع کشف قشم"
  titleIcon?: string; // "🌴"
  description: string;
  stops: ItineraryStop[];
  transitions: ItineraryStopTransition[]; // طول = stops.length - 1
};

// entities/inspiration/traveler/model/types.ts
export type TravelerSpecialtyTag = {
  id: string;
  label: string;
  icon?: string;
};

export type Traveler = {
  id: string;
  name: string;
  username: string;
  avatarUrl: string;
  statusBadge: string; // "جهانگرد تازه‌کار"
  specialties: TravelerSpecialtyTag[];
  bioTitle: string; // "کشف‌کننده حال‌وهوای جنوب ایران"
  bioTitleIcon?: string;
  bioQuote: string;
  profileHref: string;
};
