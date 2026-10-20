import type { Traveler } from './types';

export const mockTraveler: Traveler = {
  id: 'trv-001',
  name: 'سارا احمدی',
  username: 'sara_ahmadii',
  avatarUrl: '/images/inspiration/travelers/sara-ahmadi.jpg',
  statusBadge: 'جهانگرد تازه‌کار',
  specialties: [
    { id: 'sp1', label: 'سفر جاده‌ای', icon: '🚗' },
    { id: 'sp2', label: 'جزیره‌ها', icon: '🏝️' },
    { id: 'sp3', label: 'طبیعت‌گردی', icon: '🌿' },
  ],
  bioTitle: 'کشف‌کننده حال‌وهوای جنوب ایران',
  bioTitleIcon: '🌴',
  bioQuote:
    'جنوب برای من فقط یک مقصد نیست؛ ترکیبی از فرهنگ، غذا، طبیعت و آدم‌هایی است که هر سفر را متفاوت می‌کنند. اینجا تجربه‌های واقعی سفرهام رو ثبت می‌کنم.',
  profileHref: '/inspiration/travelers/trv-001',
};