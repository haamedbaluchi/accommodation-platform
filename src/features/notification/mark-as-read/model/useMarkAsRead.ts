import { useCallback, useMemo } from 'react';
import { NotificationItem } from '@entities/notification';

interface UseMarkAsReadParams {
  items: NotificationItem[];
  onItemsChange: (items: NotificationItem[]) => void;
}

interface UseMarkAsReadResult {
  unreadCount: number;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
}

export function useMarkAsRead({
  items,
  onItemsChange,
}: UseMarkAsReadParams): UseMarkAsReadResult {
  const markAsRead = useCallback(
    (id: string) => {
      onItemsChange(
        items.map((item) => (item.id === id ? { ...item, isRead: true } : item)),
      );
    },
    [items, onItemsChange],
  );

  const markAllAsRead = useCallback(() => {
    onItemsChange(items.map((item) => ({ ...item, isRead: true })));
  }, [items, onItemsChange]);

  const unreadCount = useMemo(
    () => items.filter((item) => !item.isRead).length,
    [items],
  );

  return { unreadCount, markAsRead, markAllAsRead };
}