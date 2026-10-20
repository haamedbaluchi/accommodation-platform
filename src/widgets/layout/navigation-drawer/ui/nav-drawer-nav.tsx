'use client';

import React from 'react';
import { MenuItem } from '../model/nav-drawer-items.data';
import { NavDrawerNavItem } from './nav-drawer-nav-item';

interface NavDrawerNavProps {
  items: MenuItem[];
  onItemClick?: () => void;
}

export function NavDrawerNav({
  items,
  onItemClick,
}: NavDrawerNavProps) {
  return (
    <div className="flex-1 px-4">
      <nav className="flex flex-col gap-1 xs:gap-2">
        {items.map((item, index) => {
          const hasDividerBefore = index === 3||index===4;

          return (
            <React.Fragment key={item.id}>
              {hasDividerBefore && (
                <div className="my-1 2xl:my-2 h-px w-full bg-neutral-100" />
              )}

              <NavDrawerNavItem
                item={item}
                onClick={onItemClick}
              />
            </React.Fragment>
          );
        })}
      </nav>
    </div>
  );
}