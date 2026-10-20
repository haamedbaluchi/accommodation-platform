'use client';

import React from 'react';
import { cn } from '@shared/lib';
import { DropdownItemType } from '@shared/ui';

interface ProfileMenuItemProps {
  item: DropdownItemType;
  onClick?: () => void;
}

export function ProfileDrawerItem({ item, onClick }: ProfileMenuItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'flex h-12 w-full shrink-0 items-center gap-2 rounded-2xl px-4 text-right text-sm font-medium text-text-main transition-colors',
        'sm:h-14 sm:text-base md:text-lg',
        'hover:bg-accent',
        item.destructive ? 'text-red-500' : '',
        item.className ?? '',
      )}
    >
      {item.icon}

      <span>{item.label}</span>
    </button>
  );
}
