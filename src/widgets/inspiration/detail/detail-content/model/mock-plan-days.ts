import type { ItineraryDayType } from './types';

export const mockQeshmItinerary: ItineraryDayType[] = [
  {
    id: 'day-1',
    dayNumber: 1,
    dayLabel: 'روز اول',
    title: 'شروع کشف قشم',
    titleIcon: '🌴',
    description:
      'اولین روز را با شناخت فضای جزیره شروع کردیم؛ ترکیبی از تاریخ، بازار محلی و یک غروب آرام کنار خلیج فارس.',
    stops: [
      {
        id: 'stop-1-1',
        title: 'قلعه پرتغالی‌ها',
        titleIcon: '🏰',
        subtitle: 'قشم، نزدیک مرکز شهر | جاذبه تاریخی',
        travelerNote:
          'اگر می‌خواهید قشم واقعی را ببینید، چند دقیقه از مراکز خرید مدرن فاصله بگیرید و وارد بازار قدیمی شوید.',
        coverImage: '/images/locations/boomi.png',
        tags: [
          { id: 't1', label: 'حدود ۱ ساعت', icon: '⏱️' },
          { id: 't2', label: 'بهترین زمان: نزدیک غروب', icon: '🌇' },
          { id: 't3', label: 'مناسب عکاسی', icon: '📸' },
          { id: 't4', label: 'تاریخی', icon: '🏛️' },
        ],
        detailsHref: '/inspiration/stops/stop-1-1',
      },
      {
        id: 'stop-1-2',
        title: 'بازار قدیم قشم',
        titleIcon: '🛍️',
        subtitle: 'مرکز شهر قشم | فرهنگ محلی و خرید',
        travelerNote:
          'برای شروع سفر انتخاب خوبی بود. هم مسیرش راحت بود، هم اولین تصویر واقعی از تاریخ قشم را نشان می‌دهد.',
        coverImage: '/images/locations/isfahan.jpg',
        tags: [
          { id: 't5', label: '۱ تا ۲ ساعت', icon: '⏱️' },
          { id: 't6', label: 'عکاسی خیابانی', icon: '📷' },
          { id: 't7', label: 'تجربه محلی', icon: '🌴' },
          { id: 't8', label: 'خرید سوغات', icon: '🎁' },
        ],
        detailsHref: '/inspiration/stops/stop-1-2',
      },
    ],
    transitions: [{ distanceKm: 14.15, durationMinutes: 5 }],
  },
  {
    id: 'day-2',
    dayNumber: 2,
    dayLabel: 'روز دوم',
    title: 'طبیعت پنهان جزیره',
    titleIcon: '🌊',
    description:
      'روز دوم را به شگفتی‌های طبیعی قشم اختصاص دادیم؛ از دره ستارگان تا جنگل‌های حرا و سواحلی که کمتر دیده شده‌اند.',
    stops: [
      {
        id: 'stop-2-1',
        title: 'دره ستارگان',
        titleIcon: '⭐',
        subtitle: 'جنوب غربی قشم | پدیده طبیعی',
        travelerNote:
          'بهتر است نزدیک غروب بروید؛ نور کم‌رنگ، بافت صخره‌ها را دراماتیک‌تر نشان می‌دهد و عکس‌ها فوق‌العاده می‌شوند.',
        coverImage: '/images/locations/karaj.jpg',
        tags: [
          { id: 't9', label: 'حدود ۲ ساعت', icon: '⏱️' },
          { id: 't10', label: 'بهترین زمان: غروب', icon: '🌇' },
          { id: 't11', label: 'نیاز به راهنما', icon: '🧭' },
        ],
        detailsHref: '/inspiration/stops/stop-2-1',
      },
      {
        id: 'stop-2-2',
        title: 'جنگل‌های حرا',
        titleIcon: '🌿',
        subtitle: 'خلیج فارس، سواحل قشم | اکوسیستم منحصربه‌فرد',
        travelerNote:
          'قایق‌سواری داخل جنگل حرا تجربه‌ای متفاوت بود؛ سکوت و آب آرام حسی شبیه به کاوش در یک دنیای دیگر داشت.',
        coverImage: '/images/locations/mozafar.png',
        tags: [
          { id: 't12', label: '۳ ساعت', icon: '⏱️' },
          { id: 't13', label: 'قایق‌سواری', icon: '🚣' },
          { id: 't14', label: 'طبیعت‌گردی', icon: '🌱' },
        ],
        detailsHref: '/inspiration/stops/stop-2-2',
      },
      {
        id: 'stop-2-3',
        title: 'ساحل شرم',
        titleIcon: '🏖️',
        subtitle: 'شمال قشم | ساحل خلوت',
        travelerNote:
          'یکی از خلوت‌ترین سواحلی بود که دیده‌ایم؛ اگر دنبال آرامش هستید، غروب اینجا را از دست ندهید.',
        coverImage: '/images/locations/setaregan.png',
        tags: [
          { id: 't15', label: 'حدود ۱.۵ ساعت', icon: '⏱️' },
          { id: 't16', label: 'ساحل خلوت', icon: '🏝️' },
          { id: 't17', label: 'مناسب استراحت', icon: '🧘' },
        ],
        detailsHref: '/inspiration/stops/stop-2-3',
      },
    ],
    transitions: [
      { distanceKm: 22.4, durationMinutes: 25 },
      { distanceKm: 18.7, durationMinutes: 20 },
    ],
  },
  {
    id: 'day-3',
    dayNumber: 3,
    dayLabel: 'روز سوم',
    title: 'خداحافظی با جزیره',
    titleIcon: '⛵',
    description:
      'آخرین روز سفر را با یک تجربه محلی اصیل و یک ناهار دریایی کنار ساحل به پایان رساندیم.',
    stops: [
      {
        id: 'stop-3-1',
        title: 'روستای صنایع‌دستی لافت',
        titleIcon: '🏺',
        subtitle: 'شرق قشم | صنایع‌دستی و معماری بومی',
        travelerNote:
          'صحبت با اهالی روستا و دیدن بادگیرهای قدیمی، تصویر کامل‌تری از فرهنگ جزیره به من داد.',
        coverImage: '/images/locations/shamdoni.jpg',
        tags: [
          { id: 't18', label: 'حدود ۲ ساعت', icon: '⏱️' },
          { id: 't19', label: 'صنایع‌دستی', icon: '🧵' },
          { id: 't20', label: 'معماری بومی', icon: '🏘️' },
        ],
        detailsHref: '/inspiration/stops/stop-3-1',
      },
      {
        id: 'stop-3-2',
        title: 'ناهار دریایی در اسکله',
        titleIcon: '🐟',
        subtitle: 'بندر قشم | غذای محلی',
        travelerNote:
          'ماهی تازه‌ی کبابی کنار اسکله بهترین پایان ممکن برای این سفر بود؛ حتماً امتحان کنید.',
        coverImage: '/images/locations/location_4.jpg',
        tags: [
          { id: 't21', label: 'حدود ۱ ساعت', icon: '⏱️' },
          { id: 't22', label: 'غذای دریایی', icon: '🍤' },
          { id: 't23', label: 'شکم‌گردی', icon: '🍽️' },
        ],
        detailsHref: '/inspiration/stops/stop-3-2',
      },
    ],
    transitions: [{ distanceKm: 9.8, durationMinutes: 12 }],
  },
];