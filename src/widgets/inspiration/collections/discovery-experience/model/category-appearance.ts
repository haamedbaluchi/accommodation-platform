
export type CategoryTone = 'green' | 'amber' | 'pink' | 'red' | 'blue' | 'slate';

const CATEGORY_TONE_MAP: Record<string, CategoryTone> = {
  'طبیعت‌گردی': 'green',
  'طبیعت و روستاگردی': 'green',
  'اقتصادی': 'amber',
  'مناسب سفر دونفره': 'pink',
  'مناسب سفر جاده‌ای': 'red',
  'مناسب سفر آرام': 'blue',
  'فرهنگی': 'slate',
  'شکم‌گردی': 'amber',
  'خانوادگی': 'blue',
  'محبوب‌ترین': 'red',
};

const TONE_CLASS_MAP: Record<CategoryTone, string> = {
  green: 'bg-green-50 text-green-700',
  amber: 'bg-amber-50 text-amber-700',
  pink: 'bg-pink-50 text-pink-700',
  red: 'bg-red-50 text-red-700',
  blue: 'bg-blue-50 text-blue-700',
  slate: 'bg-slate-100 text-slate-700',
};

export function getCategoryToneClass(category: string): string {
  const tone = CATEGORY_TONE_MAP[category] ?? 'slate';
  return TONE_CLASS_MAP[tone];
}