export type RestaurantDetailsData = {
  title?: string;
  foodTypes?: string[];

  rating?: string;
  commentsCount?: string;

  shortAddress?: string;
  fullAddress?: string;

  suggestedVisitTime?: string;

  openStatus?: boolean;
  statusNow?: boolean;
  openingHours?: string;

  priceRange?: string;
  phone?: string;
  website?: string;
  mapLink?: string;

  images?: string[];

  locationSummary?: string;

  coordinates?: {
    lat: number;
    lng: number;
  };
};