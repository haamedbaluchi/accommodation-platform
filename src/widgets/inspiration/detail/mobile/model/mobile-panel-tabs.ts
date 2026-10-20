export type InspirationMobileTab = 'overview' | 'route' | 'weather' | 'map';

export const INSPIRATION_MOBILE_TABS: { id: InspirationMobileTab; label: string; icon: string }[] = [
  { id: 'overview', label: 'در یک نگاه', icon: '🗺️' },
  { id: 'route', label: 'مسیر سفر', icon: '🚗' },
  { id: 'weather', label: 'آب‌وهوا', icon: '⛅' },
  { id: 'map', label: 'نقشه', icon: '📍' },
];