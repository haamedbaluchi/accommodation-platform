import { useMemo, useState } from 'react';
import { NotificationFilterKey, NotificationItem } from '@entities/notification';

interface UseNotificationFilterParams {
  items: NotificationItem[];
  initialFilter?: NotificationFilterKey;
}

interface UseNotificationFilterResult {
  activeFilter: NotificationFilterKey;
  setActiveFilter: (filter: NotificationFilterKey) => void;
  filteredItems: NotificationItem[];
}

export function useNotificationFilter({
  items,
  initialFilter = 'all',
}: UseNotificationFilterParams): UseNotificationFilterResult {
  const [activeFilter, setActiveFilter] = useState<NotificationFilterKey>(
    initialFilter,
  );

  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') return items;
    if (activeFilter === 'unread') return items.filter((item) => !item.isRead);
    return items.filter((item) => item.category === activeFilter);
  }, [items, activeFilter]);

  return { activeFilter, setActiveFilter, filteredItems };
}