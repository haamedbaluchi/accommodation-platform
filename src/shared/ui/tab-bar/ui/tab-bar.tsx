'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

import { cn } from '@shared/lib';

import { TabBarProps, TabItem } from '../model/types';

export function TabBar({
  items,
  defaultActiveId,
  onChange,
  className = '',
  tabClassName = '',
}: TabBarProps) {
  const pathname = usePathname();

  const [activeId, setActiveId] = useState<string | number | undefined>(
    defaultActiveId || undefined,
  );

  const handleTabClick = (item: TabItem) => {
    if (!item.href) {
      setActiveId(item.id);
    }

    onChange?.(item);
  };

  const renderContent = (item: TabItem, isActive: boolean) => (
    <>
      <span
        className={cn(
          'text-[0.6rem] sm:text-xs md:text-base lg:text-xl',
          isActive ? '**:stroke-primary-active' : '',
        )}
      >
        {isActive && item.activeIcon ? item.activeIcon : item.icon}
      </span>
      <span>{item.label}</span>
    </>
  );

  return (
    <div
      className={cn(
        'flex items-center justify-between w-full max-w-md mx-auto max-h-auto p-1 md:p-1.5 lg:p-3 bg-background border border-border-foreground rounded-full shadow',
        className,
      )}
    >
      {items.map((item) => {
        const isActive = item.href
          ? pathname === item.href
          : activeId === item.id;

        const itemStyle = isActive
          ? 'bg-active-item-background text-primary-active'
          : 'bg-transparent text-text-main hover:bg-text-muted-foreground';

        const commonClassName = cn(
          'flex items-center justify-center gap-2 px-2 py-0.5 xs:px-4 xs:py-1 md:px-6 md:py-2 rounded-full font-yekta transition-all duration-300 ease-in-out font-bold text-[0.6rem] xs:text-xs md:text-base lg:text-xl cursor-pointer',
          itemStyle,
          tabClassName,
        );

        if (item.href) {
          return (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => handleTabClick(item)}
              className={commonClassName}
            >
              {renderContent(item, isActive)}
            </Link>
          );
        }

        return (
          <button
            key={item.id}
            onClick={() => handleTabClick(item)}
            type="button"
            className={commonClassName}
          >
            {renderContent(item, isActive)}
          </button>
        );
      })}
    </div>
  );
}
