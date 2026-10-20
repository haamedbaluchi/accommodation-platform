'use client';

import { SidebarItem } from './sidebar-item';
import { usePathname } from 'next/navigation';
import { SidebarNotifications } from './sidebar-notifications';
import { sidebarNavItems } from '../model/sidebar-nav.config';

export function SidebarNavigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="ناوبری اصلی">
      <ul className="flex flex-col gap-2 xl:gap-4">
        {sidebarNavItems.map((item) => (
          <SidebarItem
            item={item}
            key={item.id}
            isActive={pathname === item.href}
          />
        ))}

        <li className="mx-auto">
          <SidebarNotifications />
        </li>
      </ul>
    </nav>
  );
}
