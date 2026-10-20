import { UserProfile } from '@entities/user';
import type { ProfileStat } from './profile.type';

export const userProfile: UserProfile = {
  id: 'fake-user',
  name: 'آرمان',
  family_name: 'رضایی',
  username: '@arman.rezaei',
  about:
    'عاشق سفر، تجربه‌های تازه و پیدا کردن اقامتگاه‌های خاص. اینجا برنامه سفرها و علاقه‌مندی‌هایم را مدیریت می‌کنم.',
  avatar_url: '/images/profile/avatar.jpg',
};

export const profileStats: ProfileStat[] = [
  {
    id: 'my_friends',
    label: 'همراهان من',
    value: '',
  },
  {
    id: 'my_favorites',
    label: 'مسافران محبوب',
    value: '',
  },
  {
    id: 'my_trips',
    label: 'سفرهای من',
    value: '',
  },
];
