export type HotelAmenity = {
  id: string;
  label: string;
  icon?: string;
};

export type HotelDetailsData = {
  title?: string;
  badgeLabel?: string;

  rating?: string;
  commentsCount?: string;

  shortAddress?: string;
  fullAddress?: string;
  exactAddress?: string;

  amenities?: HotelAmenity[];

  pricePerNight?: string;
  checkInTime?: string;
  checkOutTime?: string;

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