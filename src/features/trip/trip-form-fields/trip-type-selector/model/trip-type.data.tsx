import { ReactNode } from 'react';
import {
  FastPacedIcon,
  BalancedPacedIcon,
  RelaxedPacedIcon,
} from '@shared/assets/icons';

export interface TripType {
  id: 'Fast' | 'Balanced' | 'Relaxed';
  title: string;
  description: string;
  icon: ReactNode;
}

export interface FavoriteLocation {
  id: string;
  label: string;
  icon?: ReactNode;
}

export const TRIP_TYPES: TripType[] = [
  {
    id: 'Fast',
    title: 'فشرده و پرماجرا',
    description: 'می‌خوام از ثانیه‌ها استفاده کنم و همه‌جا رو ببینم!',
    icon: <FastPacedIcon className="w-full h-full" />,
  },
  {
    id: 'Balanced',
    title: 'متعادل و منطقی',
    description: 'نه خیلی فشرده باشه، نه خیلی خلوت و بی‌کار.',
    icon: <BalancedPacedIcon className="w-full h-full" />,
  },
  {
    id: 'Relaxed',
    title: 'ریلکس و آروم',
    description: 'روزی یکی دو جا کافیه، می‌خوام استراحت کنم.',
    icon: <RelaxedPacedIcon className="w-full h-full" />,
  },
];
