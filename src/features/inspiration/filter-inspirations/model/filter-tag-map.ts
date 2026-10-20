// filter-tag-map.ts
import { FILTER_VALUES, InspirationFilter } from './constants';

// فقط فیلترهایی که معادل تگ مشخصی در دیتای بک‌اند دارن مپ شدن.
// popular / couples / budget فعلاً تگ متناظر ندارن، پس روی "همه" فال‌بک می‌کنن.
export const FILTER_TAG_MAP: Partial<Record<InspirationFilter, string[]>> = {
  [FILTER_VALUES.CULTURAL]: ['فرهنگی', 'تاریخی', 'معماری', 'موزه', 'کلیسا', 'زرتشتی'],
  [FILTER_VALUES.NATURE]: ['طبیعت', 'کوهستان', 'جنگل', 'دریاچه', 'آبشار', 'کویری', 'ساحل'],
  [FILTER_VALUES.FOOD]: ['شکم‌گردی'],
  [FILTER_VALUES.FAMILY]: ['سفر خانوادگی'],
  [FILTER_VALUES.ROAD_TRIP]: ['جاده‌ای'],
};