import { useEffect, useState } from 'react';
import {
  NotificationItem,
  NotificationFilterKey,
  fetchNotifications,
} from '@entities/notification';
import { useMarkAsRead } from '@features/notification/mark-as-read';
import { useNotificationFilter } from '@features/notification/filter-notifications';

interface UseNotificationsDrawerResult {
  isLoading: boolean;
  error: string | null;
  activeFilter: NotificationFilterKey;
  setActiveFilter: (filter: NotificationFilterKey) => void;
  filteredItems: NotificationItem[];
  unreadCount: number;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
}

export function useNotificationsDrawer(): UseNotificationsDrawerResult {
  const [items, setItems] = useState<NotificationItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    fetchNotifications()
      .then((data) => {
        if (isMounted) setItems(data);
      })
      .catch(() => {
        if (isMounted) setError('دریافت اعلان‌ها با خطا مواجه شد.');
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const { unreadCount, markAsRead, markAllAsRead } = useMarkAsRead({
    items,
    onItemsChange: setItems,
  });

  const { activeFilter, setActiveFilter, filteredItems } =
    useNotificationFilter({
      items,
    });

  return {
    isLoading,
    error,
    activeFilter,
    setActiveFilter,
    filteredItems,
    unreadCount,
    markAsRead,
    markAllAsRead,
  };
}
