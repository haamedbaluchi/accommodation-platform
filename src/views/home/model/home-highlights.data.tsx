import { Button } from '@shared/ui';
import { type ReactNode } from 'react';
import { ContentHighlightAnimationsType } from '@shared/ui';
import { TravelTimeline } from '@widgets/home/travel-timeline';

type HomeFeatureSectionItem = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  className?: string;
  reverse?: boolean;
  animationType?: ContentHighlightAnimationsType;
  children?: ReactNode;
};

export const HOME_FEATURE_SECTIONS: HomeFeatureSectionItem[] = [
  {
    id: 'trip-builder',
    title: 'از ایده تا چمدون بستن، فقط چند کلیک فاصله داری!',
    description: 'سفر بعدیت رو فقط در ۳ قدم بساز',
    imageSrc: '/images/landing_page/optimized/landing_1.webp',
    imageAlt: 'ساخت برنامه سفر در بومرو',
    className: 'gap-10.5',
    imageWidth: 666,
    imageHeight: 660,
    animationType: 'fadeUp',
    children: <TravelTimeline />,
  },
  {
    id: 'boomro-ideas',
    title: 'ایده‌های بومویی 💡',
    description:
      'نمی‌دونی سفر بعدیت رو چطور برنامه‌ریزی کنی؟ برنامه‌های سفر پرطرفدار بقیه کاربران بومو رو ببین، جاهای جذابش رو گلچین کن و با یک کلیک، اون رو برای خودت شخصی‌سازی کن.',
    imageSrc: '/images/landing_page/optimized/landing_2.webp',
    imageAlt: 'ایده‌های سفر بومرو',
    className: 'gap-13',
    imageWidth: 736,
    imageHeight: 528,
    reverse: true,
    animationType: 'fadeRight',
  },
  {
    id: 'personalized-suggestions',
    title: 'پیشنهادهای مخصوصِ خودت! 🎯',
    description:
      'بر اساس سلیقه، بودجه و همسفرهات، بهترین اقامتگاه‌ها، رستوران‌ها و جاهای دیدنی رو بهت پیشنهاد می‌دیم. عکس‌ها، نقشه و نظرات بقیه رو ببین و هر کدوم که به دلت نشست رو با یک کلیک به برنامه سفرت اضافه کن.',
    imageSrc: '/images/landing_page/optimized/landing_3.webp',
    imageAlt: 'پیشنهادهای شخصی‌سازی‌شده سفر',
    imageWidth: 767,
    imageHeight: 448,
    className: 'gap-5',
    animationType: 'scaleUp',
  },
  {
    id: 'travel-documents',
    title: 'همه مدارک و بلیت‌ها، یک‌جا تو جیبت!',
    description:
      'بلیت قطار و هواپیما، واچر اقامتگاه و رسید رستوران‌ها رو اینجا آپلود کن. حتی می‌تونی ایمیل یا پیامک رزروت رو برای بومو فوروارد کنی تا سیستم ما خودش همه‌چیز رو تو دسته‌بندی‌های مرتب (پرواز، اقامتگاه، گشت‌وگذار) برات بچینه و تو سفر همیشه در دسترس باشن.',
    imageSrc: '/images/landing_page/optimized/landing_4.webp',
    imageAlt: 'مدیریت مدارک و بلیت‌های سفر',
    className: 'gap-21',
    imageWidth: 704,
    imageHeight: 617,
    reverse: true,
    animationType: 'fadeLeft',
  },
  {
    id: 'travel-style-test',
    title: 'سفرِ ایده‌آلت چه شکلیه؟ ✨',
    description:
      'تو این تست کوتاه ۳ دقیقه‌ای شرکت کن تا استایل سفرت رو بشناسیم. بعدش بومو دقیقاً همون جاهایی رو بهت پیشنهاد می‌ده که با سلیقه‌ات جوره!',
    imageSrc: '/images/landing_page/optimized/landing_5.webp',
    imageAlt: 'تست سلیقه سفر',
    className: 'gap-21',
    imageWidth: 704,
    imageHeight: 617,
    animationType: 'scaleUp',
    // children: (
    //   <Button rounded="full" size="medium" className="max-w-39">
    //     سلیقه‌ام رو بسنج!
    //   </Button>
    // ),
  },
];
