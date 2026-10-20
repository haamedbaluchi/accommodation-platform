import React from 'react';
import {
  BuildingOffice2Icon,
  TruckIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import {
  HomeModernIcon,
  SparklesIcon,
  FireIcon,
} from '@heroicons/react/24/solid';
import { AccommodationCard } from './accommodation-card';

export function Accommodation() {
  return (
    <AccommodationCard
      id="abbasi-isfahan"
      title="هتل عباسی اصفهان"
      location="اصفهان، خیابان چهارباغ عباسی، میدان انقلاب"
      score={4.8}
      scoreLabel="امتیاز عالی"
      description="هتل پنج ستاره عباسی اصفهان با ترکیبی کم‌نظیر از معماری ایرانی اصیل و امکانات رفاهی مدرن، تجربه‌ای متفاوت از اقامت را برای مهمانان فراهم می‌کند. این اقامتگاه برای سفرهای خانوادگی، کاری و اقامت‌های چندروزه گزینه‌ای بسیار مناسب است و به بسیاری از جاذبه‌های اصلی شهر دسترسی خوبی دارد."
      images={[
        { src: '/images/hotel-1.jpg', alt: 'نمای اصلی هتل عباسی' },
        { src: '/images/hotel-2.jpg', alt: 'لابی هتل عباسی' },
        { src: '/images/hotel-3.jpg', alt: 'اتاق هتل عباسی' },
        { src: '/images/hotel-4.jpg', alt: 'رستوران هتل عباسی' },
      ]}
      amenities={[
        {
          id: 'pool',
          label: 'استخر',
          icon: <SparklesIcon className="size-[22px]" />,
        },
        {
          id: 'bath',
          label: 'حمام',
          icon: <HomeModernIcon className="size-[22px]" />,
        },
        {
          id: 'lunch',
          label: 'ناهار',
          icon: <FireIcon className="size-[22px]" />,
        },
        {
          id: 'parking',
          label: 'پارکینگ',
          icon: <TruckIcon className="size-[22px]" />,
        },
        {
          id: 'room',
          label: '۴ نفره',
          icon: <BuildingOffice2Icon className="size-[22px]" />,
        },
        {
          id: 'family',
          label: 'خانوادگی',
          icon: <UserGroupIcon className="size-[22px]" />,
        },
      ]}
      detailsHref="/accommodations/abbasi-isfahan"
      reserveHref="/reserve/abbasi-isfahan"
    />
  );
}
