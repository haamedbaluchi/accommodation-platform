// import type { ReactNode } from 'react';

// export interface AccommodationImage {
//   src: string;
//   alt?: string;
// }

// export interface AccommodationAmenity {
//   id: string;
//   label: string;
//   icon?: ReactNode;
//   value?: string | number;
// }

// export interface AccommodationPrice {
//   amount: number;
//   formatted: string;
//   currency: 'تومان' | 'ریال';
//   period: string;
//   discountPercent?: number;
// }

// export interface AccommodationLinks {
//   details: string;
//   reserve?: string;
// }

// export interface AccommodationCardProps {
//   id: string;
//   title: string;
//   location: string;
//   propertyType?: string;
//   score?: number;
//   reviewCount?: number;
//   description: string;
//   recommendationReason?: string;
//   images: AccommodationImage[];
//   amenities: AccommodationAmenity[];
//   price?: AccommodationPrice;
//   // price?:string
//   links: AccommodationLinks;
//   badge?: string;
// }
import type { ReactNode } from 'react';

export interface AccommodationImage {
  src: string;
  alt?: string;
}

export interface AccommodationAmenity {
  id: string;
  label: string;
  icon?: ReactNode;
  value?: string | number;
}

export interface AccommodationCardProps {
  id: string;
  title: string;
  location: string;

  propertyType?: string;

  score?: number;
  scoreLabel?: string;
  reviewCount?: number;

  description: string;
  recommendationReason?: string;

  images: AccommodationImage[];
  amenities: AccommodationAmenity[];

  price?: string;
  pricePeriod?: string;

  detailsHref?: string;
  reserveHref?: string;

  badge?: string;
}
