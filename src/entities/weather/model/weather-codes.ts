import {
  Cloud,
  CloudDrizzle,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  CloudSun,
  Snowflake,
  Sun,
} from '@hugeicons/core-free-icons';

import type { HugeiconsIconProps } from '@hugeicons/react';

export interface WeatherCondition {
  label: string;
  icon: HugeiconsIconProps['icon'];
  color: string;
  bgGradient: string;
}

export const WEATHER_CODES: Record<number, WeatherCondition> = {
  0: {
    label: 'آفتابی',
    icon: Sun,
    color: 'text-yellow-500',
    bgGradient: 'from-blue-400 to-blue-600',
  },

  1: {
    label: 'عمدتاً آفتابی',
    icon: CloudSun,
    color: 'text-yellow-400',
    bgGradient: 'from-blue-400 to-indigo-500',
  },

  2: {
    label: 'نیمه ابری',
    icon: CloudSun,
    color: 'text-gray-400',
    bgGradient: 'from-blue-300 to-blue-500',
  },

  3: {
    label: 'ابری',
    icon: Cloud,
    color: 'text-gray-500',
    bgGradient: 'from-slate-400 to-slate-600',
  },

  45: {
    label: 'مه',
    icon: CloudFog,
    color: 'text-gray-400',
    bgGradient: 'from-gray-300 to-gray-500',
  },

  48: {
    label: 'مه یخ‌زده',
    icon: CloudFog,
    color: 'text-blue-300',
    bgGradient: 'from-blue-200 to-blue-400',
  },

  51: {
    label: 'نم‌نم باران',
    icon: CloudDrizzle,
    color: 'text-blue-400',
    bgGradient: 'from-blue-400 to-blue-600',
  },

  53: {
    label: 'باران ملایم',
    icon: CloudRain,
    color: 'text-blue-500',
    bgGradient: 'from-blue-500 to-blue-700',
  },

  55: {
    label: 'باران شدید',
    icon: CloudRain,
    color: 'text-blue-600',
    bgGradient: 'from-blue-600 to-blue-800',
  },

  61: {
    label: 'بارش باران',
    icon: CloudRain,
    color: 'text-blue-500',
    bgGradient: 'from-slate-500 to-slate-700',
  },

  63: {
    label: 'باران متوسط',
    icon: CloudRain,
    color: 'text-blue-600',
    bgGradient: 'from-slate-600 to-slate-800',
  },

  65: {
    label: 'باران سنگین',
    icon: CloudRain,
    color: 'text-blue-700',
    bgGradient: 'from-gray-600 to-gray-800',
  },

  71: {
    label: 'برف خفیف',
    icon: CloudSnow,
    color: 'text-blue-200',
    bgGradient: 'from-blue-100 to-blue-300',
  },

  73: {
    label: 'بارش برف',
    icon: Snowflake,
    color: 'text-blue-300',
    bgGradient: 'from-blue-200 to-blue-400',
  },

  75: {
    label: 'برف سنگین',
    icon: Snowflake,
    color: 'text-white',
    bgGradient: 'from-blue-300 to-blue-500',
  },

  95: {
    label: 'رعد و برق',
    icon: CloudLightning,
    color: 'text-yellow-600',
    bgGradient: 'from-gray-700 to-gray-900',
  },

  96: {
    label: 'تگرگ',
    icon: CloudSnow,
    color: 'text-gray-300',
    bgGradient: 'from-gray-500 to-gray-700',
  },

  99: {
    label: 'رعد و برق و تگرگ',
    icon: CloudLightning,
    color: 'text-yellow-500',
    bgGradient: 'from-gray-600 to-gray-900',
  },
};

export function getWeatherCondition(code: number): WeatherCondition {
  return WEATHER_CODES[code] ?? WEATHER_CODES[0];
}
