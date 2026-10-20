import { NotificationItem } from '../model/types';

function minutesAgo(min: number) {
  return new Date(Date.now() - min * 60_000).toISOString();
}
function daysAgo(d: number) {
  return new Date(Date.now() - d * 86_400_000).toISOString();
}

const MOCK_NOTIFICATIONS: NotificationItem[] = [
  // {
  //   id: 'n1',
  //   category: 'trip-mate',
  //   badgeLabel: 'همسفر',
  //   message: 'سارا یه پیشنهاد جدید برای برنامه سفر شیراز ثبت کرد: رستوران هفت‌خوان.',
  //   actor: { id: 'u1', name: 'سارا', avatarUrl: 'https://i.pravatar.cc/64?img=47' },
  //   createdAt: minutesAgo(10),
  //   isRead: false,
  // },
  // {
  //   id: 'n2',
  //   category: 'reminder',
  //   badgeLabel: 'یادآوری‌های سفر',
  //   message: 'پرواز به اصفهان فردا ساعت ۰۸:۳۰ صبح انجام میشه. مدارکت رو آماده کن!',
  //   icon: 'plane',
  //   createdAt: minutesAgo(10),
  //   isRead: false,
  // },
  // {
  //   id: 'n3',
  //   category: 'checklist',
  //   badgeLabel: 'چک‌لیست',
  //   message: 'ایول! میدان نقش جهان تیک خورد و به لیست خاطرات اضافه شد.',
  //   icon: 'checklist',
  //   createdAt: daysAgo(1),
  //   isRead: true,
  // },
  // {
  //   id: 'n4',
  //   category: 'reminder',
  //   badgeLabel: 'یادآوری‌های سفر',
  //   message: 'رزرو اقامتگاه بوم‌گردی ماهور برای تاریخ ۱۵ اردیبهشت قطعی شد.',
  //   icon: 'building',
  //   createdAt: daysAgo(1),
  //   isRead: true,
  // },
  // {
  //   id: 'n5',
  //   category: 'trip-mate',
  //   badgeLabel: 'همسفر',
  //   message: 'علی وظیفه‌ی رزرو بلیط قطار رو به عهده گرفت.',
  //   actor: { id: 'u2', name: 'علی', avatarUrl: 'https://i.pravatar.cc/64?img=12' },
  //   createdAt: daysAgo(3),
  //   isRead: true,
  // },
];

export async function fetchNotifications(): Promise<NotificationItem[]> {
  return Promise.resolve(MOCK_NOTIFICATIONS);
}