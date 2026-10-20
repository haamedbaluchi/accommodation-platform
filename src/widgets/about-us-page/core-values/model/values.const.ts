import {
  Award02Icon,
  Flowchart02Icon,
  Tap01Icon,
  UserListIcon,
} from '@hugeicons/core-free-icons';
import type { CoreValueItem } from './types';

export const CORE_VALUES: readonly CoreValueItem[] = [
  {
    id: 'real-personalization',
    title: 'شخصی‌سازی واقعی',
    description:
      'بومو پیشنهادها را براساس بودجه، زمان و سبک سفر هر کاربر می‌چیند.',
    icon: UserListIcon,
    cardClassName: 'bg-slate-50/90 border-slate-200/60',
    iconClassName: 'text-text-main',
  },

  {
    id: 'easier-selection',
    title: 'انتخاب ساده‌تر',
    description:
      'کمک می‌کنیم کاربر بین مقصدها، پروازها و اقامتگاه‌های مختلف کمتر سردرگم شود.',
    icon: Tap01Icon,
    cardClassName: 'bg-violet-50/80 border-violet-100/60',
    iconClassName: 'text-text-main',
  },
  {
    id: 'decision-transparency',
    title: 'شفافیت در تصمیم‌گیری',
    description:
      'هزینه، زمان و گزینه‌های سفر باید واضح باشند تا انتخاب راحت‌تر شود.',
    icon: Flowchart02Icon,
    cardClassName: 'bg-teal-50/80 border-teal-100/60',
    iconClassName: 'text-text-main',
  },

  {
    id: 'better-travel-experience',
    title: 'تجربه بهتر سفر',
    description:
      'هدف بومو فقط رزرو نیست؛ می‌خواهیم کل مسیر سفر بهتر و روان‌تر شروع شود.',
    icon: Award02Icon,
    cardClassName: 'bg-amber-50/80 border-amber-100/60',
    iconClassName: 'text-text-main',
  },
] as const;

export const WIDGET_COPY = {
  heading: 'ارزش‌هایی که بومو باهاش ساخته شده',
  subtitle:
    'ما بومو را فقط برای پیشنهاد دادن مقصد نساختیم؛ هدفمان این است که برنامه‌ریزی سفر، ساده‌تر، شخصی‌تر و نزدیک‌تر به سبک زندگی هر آدم باشد.',
} as const;
