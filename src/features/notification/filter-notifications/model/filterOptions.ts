import { NotificationFilterKey } from '@entities/notification';

export interface NotificationFilterOption {
  value: NotificationFilterKey;
  label: string;
}

export const NOTIFICATION_FILTER_OPTIONS: NotificationFilterOption[] = [
  { value: 'all', label: 'همه' },
  { value: 'unread', label: 'نخوانده‌ها' },
  { value: 'reminder', label: 'یادآوری‌های سفر' },
];