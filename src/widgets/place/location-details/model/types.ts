export type LocationCoordinates = {
  lat: number;
  lng: number;
};

export type LocationDetailsData = {
  title?: string;
  category?: string;

  rating?: string;
  commentsCount?: string;

  shortAddress?: string;
  fullAddress?: string;

  suggestedVisitTime?: string;
  visitDuration?: string;

  openStatus?: boolean;
  statusNow?: boolean;

  admissionFee?: string;
  mapLink?: string;

  images?: string[];
  imageUrl?: string | null;

  locationSummary?: string;
  openingHours?: string;

  coordinates?: LocationCoordinates;
};

