'use client';

import Link from 'next/link';
import { cn } from '@shared/lib';
import { usePathname } from 'next/navigation';
import { MenuItem } from '../model/nav-drawer-items.data';

interface NavDrawerNavItemProps {
  item: MenuItem;
  onClick?: () => void;
}

export function NavDrawerNavItem({
  item,
  onClick,
}: NavDrawerNavItemProps) {
  const pathname = usePathname();

  const active =
    item.href === '/'
      ? pathname === '/'
      : pathname.startsWith(item.href);

  if (item.disabled) {
    return (
      <div
        className={cn(
          'group flex h-10 sx:h-12 w-full items-center gap-2 rounded-2xl px-4',
          'cursor-not-allowed opacity-40',
          'text-neutral-500',
        )}
      >
        <span className="flex items-center justify-center">
          {item.icon}
        </span>

        <span className="text-sm xs:text-base md:text-lg xl:text-xl font-medium leading-none">
          {item.label}
        </span>
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={cn(
        'group flex h-10 sx:h-12 w-full items-center gap-2 rounded-3xl px-4',
        'text-right transition-all duration-200',
        active
          ? 'bg-[#EAF2FF] text-[#2563A6]'
          : 'bg-transparent text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900',
      )}
    >
      <span
        className={cn(
          'flex items-center justify-center transition-colors',
          active
            ? '**:stroke-[#2563A6] text-[#2563A6]'
            : 'text-neutral-500 group-hover:text-neutral-700',
        )}
      >
        {item.icon}
      </span>

      <span className="text-sm xs:text-base md:text-lg xl:text-xl font-medium leading-none">
        {item.label}
      </span>
    </Link>
  );
}