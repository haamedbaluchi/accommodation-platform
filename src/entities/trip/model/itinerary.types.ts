export interface RouteSegment {
  distance?: string;
  duration?: string;
  mode?: 'car' | 'walk' | 'public_transit';
}

export interface ItineraryItem {
  id: string;

  title: string;

  imageUrl?: string | null;
  imageAlt?: string | null;
  images?: string[];

  category?: string;

  startTime?: string;
  endTime?: string;
  visitDuration?: string;

  transitToNext?: RouteSegment;

  rating?: string;
  commentsCount?: string;

  shortAddress?: string;
  fullAddress?: string;

  suggestedVisitTime?: string;

  admissionFee?: string;

  locationSummary?: string;

  openingHours?: string;

  statusNow?: boolean;
  openStatus?: boolean;

  coordinates?: Coordinates;


  estimatedCost?: number;

  notes?: string;

  isAttraction?: boolean;
}
export interface TripPlan {
  days: DailyItinerary[];
}

export type TripItinerary = {
  tripId: string;
  totalDays: number;
  days: DailyItinerary[];
};


// types.ts
export interface RouteSegment {
  distance?: string;
  duration?: string;
  mode?: 'car' | 'walk' | 'public_transit';
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface ItineraryItem {
  id: string;
  title: string;

  imageUrl?: string | null;
  imageAlt?: string | null;
  images?: string[];

  category?: string;

  startTime?: string;
  endTime?: string;
  visitDuration?: string;

  transitToNext?: RouteSegment;

  rating?: string;
  commentsCount?: string;

  shortAddress?: string;
  fullAddress?: string;

  suggestedVisitTime?: string;
  admissionFee?: string;

  locationSummary?: string;
  openingHours?: string;

  statusNow?: boolean;
  openStatus?: boolean;

  coordinates?: Coordinates;
  mapLink?: string;

  estimatedCost?: number;
  notes?: string;

  isAttraction?: boolean;
}

export type DailyItinerary = {
  id: string;
  dayNumber: number;
  title?: string;
  date?: string | Date;
  activities?: ItineraryItem[];
  dailyCost?: number;
};

export interface TripPlan {
  days: DailyItinerary[];
  totalDays: number;
}
