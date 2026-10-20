import type { ShowcaseFeature } from './types';

export const SHOWCASE_FEATURES: readonly ShowcaseFeature[] = [
  { id: 'budget-plan', label: 'برنامه سفر متناسب با بودجه و زمان' },
  { id: 'smart-search', label: 'صرفه‌جویی در جست‌وجو و مقایسه' },
  { id: 'better-decision', label: 'تصمیم‌گیری سریع‌تر و مطمئن‌تر' },
] as const;

export const SHOWCASE_COPY = {
  heading: 'سفر خوب، نباید با هزار تا تب باز شروع بشه!',
  description:
    'بومو از همان لحظه‌های شلوغ قبل از سفر کنار شماست؛ وقتی میان مقصدها، پروازها، اقامتگاه‌ها و بودجه سردرگم می‌شوید. بومو شرایط و سبک سفرتان را می‌شناسد، گزینه‌ها را مقایسه می‌کند و شما را سریع‌تر به یک انتخاب روشن می‌رساند.',
} as const;
