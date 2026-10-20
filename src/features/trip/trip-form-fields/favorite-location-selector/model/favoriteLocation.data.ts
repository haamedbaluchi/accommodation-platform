import { ReactNode } from 'react';

type favoriteLocation =
  | 'historical'
  | 'pilgrimage'
  | 'nightlife'
  | 'exciting'
  | 'museum'
  | 'restaurant'
  | 'shopping'
  | 'nature';

export interface FavoriteLocation {
  id: favoriteLocation;
  label: string;
  icon?: ReactNode; 
}
export const FAVORITE_LOCATIONS: FavoriteLocation[] = [
  { id: 'historical', label: 'جاهای تاریخی 🏛️' },
  { id: 'pilgrimage', label: 'جاهای زیارتی 🕌' },
  { id: 'nightlife', label: 'شب‌گردی 🌙' },
  { id: 'exciting', label: 'تفریحات هیجانی 🎢' },
  { id: 'museum', label: 'موزه‌گردی 🖼️' },
  { id: 'restaurant', label: 'کافه و رستوران 🍔' },
  { id: 'shopping', label: 'خرید و پاساژگردی 🛍️' },
  { id: 'nature', label: 'طبیعت و پارک 🌲' },
];
