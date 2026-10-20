'use client';

import { useState } from 'react';
import { NotificationsIcons } from '@shared/assets/icons';
import { NotificationsDrawer } from '@widgets/notification/notifications-drawer';

export function SidebarNotifications() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NotificationsDrawer
      open={isOpen}
      onOpenChange={setIsOpen}
      trigger={
        <button
          type="button"
          aria-label="اعلان‌ها"
          className="bg-background hover:bg-accent transition-colors duration-150 p-2 rounded-md my-2 xl:my-2"
        >
          <NotificationsIcons
            className="h-5 w-5 xl:h-7 xl:w-7"
            aria-hidden="true"
          />
        </button>
      }
    />
  );
}
