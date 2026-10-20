import { ReactNode } from 'react';
import { Button, Drawer, FilterButtons } from '@shared/ui';
import { ValidationIcon } from '@shared/assets/icons';
import { groupNotificationsByDate } from '@entities/notification';
import { NOTIFICATION_FILTER_OPTIONS } from '@features/notification/filter-notifications';
import { useNotificationsDrawer } from '../model/use-notifications-drawer';
import { NotificationGroupSection } from './notification-group-section';
import {
  NotificationEmptyState,
  NotificationErrorState,
  NotificationListSkeleton,
} from './notification-states';

interface NotificationsDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  trigger?: ReactNode;
}

export function NotificationsDrawer({
  open,
  onOpenChange,
  trigger,
}: NotificationsDrawerProps) {
  const {
    isLoading,
    error,
    activeFilter,
    setActiveFilter,
    filteredItems,
    unreadCount,
    markAsRead,
    markAllAsRead,
  } = useNotificationsDrawer();

  // const groups = [];
  const groups = groupNotificationsByDate(filteredItems);

  return (
    <Drawer
      side="left"
      open={open}
      onOpenChange={onOpenChange}
      trigger={trigger}
      title="اعلان‌ها"
      description="فهرست اعلان‌های مربوط به سفرهای شما"
      className="flex w-full bottom-0 max-w-md flex-col sm:max-w-[40rem] right-0 md:right-12 xl:right-[3.512rem] md:top-[3.5rem] lg:top-[3.67rem] 2xl:top-[4.5rem] rounded-l-3xl"
    >
      <header className="flex items-center justify-between px-4 pt-5 pb-3">
        <div className="flex items-start gap-2 font-yekta">
          <h2 className="text-base lg:text-xl font-bold text-text-main">
            اعلان‌ها
          </h2>
          {unreadCount > 0 && (
            <span className="rounded-full bg-[#00204D] px-2.5 py-0.5 text-[11px] font-medium text-white">
              {unreadCount}
            </span>
          )}
        </div>
        {unreadCount > 0 && (
          <Button
            onClick={markAllAsRead}
            size="medium"
            variant="ghost"
            rounded="full"
            className="text-text-foreground"
            leftIcon={<ValidationIcon className="w-3.5 h-3.5" />}
          >
            دیدم همه رو
          </Button>
        )}
      </header>

      <div className="px-4 pb-2">
        <FilterButtons
          value={activeFilter}
          options={NOTIFICATION_FILTER_OPTIONS}
          onChange={setActiveFilter}
          ariaLabel="فیلتر اعلان‌ها"
          className="py-1 px-1"
          buttonClassName="text-sm md:text-base font-bold px-6 py-1 border focus-visible:outline-primary focus-visible:outline-offset-2"
          inactiveButtonClassName="text-text-main bg-text-muted-foreground border-border-foreground"
          activeButtonClassName="bg-border-active-item text-primary-active border-primary-focus"
          singleLine
        />
      </div>

      <div className="flex flex-1 flex-col gap-5 overflow-y-auto custom-scrollbar px-2 py-3">
        {isLoading && <NotificationListSkeleton />}
        {!isLoading && error && <NotificationErrorState message={error} />}
        {!isLoading && !error && groups.length === 0 && (
          <NotificationEmptyState />
        )}
        {!isLoading &&
          !error &&
          groups.map((group) => (
            <NotificationGroupSection
              key={group.label}
              group={group}
              onRead={markAsRead}
            />
          ))}
      </div>
    </Drawer>
  );
}
