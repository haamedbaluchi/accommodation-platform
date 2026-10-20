import { ItineraryStop } from '@entities/travel-inspiration';
import type { ReactNode } from 'react';

export interface InspirationAuthor {
  name: string;
  avatar?: string;
}

export interface InspirationHeroData {
  title: string;
  coverImage: string;
  author: InspirationAuthor;
  location: string;
  duration: string;
  updatedAt: string;
  saveCount?: number;
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

// export type ItineraryStop = {
//   id: string;
//   title: string;
//   titleIcon?: string;
//   subtitle: string;
//   travelerNote: string;
//   coverImage: string;
//   tags: ItineraryStopTag[];
//   detailsHref: string;
// };

export type ItineraryStopTransition = {
  distanceKm: number;
  durationMinutes: number;
};

export type ItineraryDayType = {
  id: string;
  dayNumber: number;
  dayLabel: string;      // "روز اول"
  title: string;         // "شروع کشف قشم"
  titleIcon?: string;    // "🌴"
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
  statusBadge: string;       // "جهانگرد تازه‌کار"
  specialties: TravelerSpecialtyTag[];
  bioTitle: string;          // "کشف‌کننده حال‌وهوای جنوب ایران"
  bioTitleIcon?: string;
  bioQuote: string;
  profileHref: string;
};