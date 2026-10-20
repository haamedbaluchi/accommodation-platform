import Link from 'next/link';
import { cn } from '@shared/lib';
import { ElementType } from 'react';
import { Tooltip } from '@shared/ui';

interface SidebarItemProps {
  readonly id: number | string;
  href: string;
  label: string;
  icon: ElementType;
}

export function SidebarItem({
  item,
  isActive,
}: {
  item: SidebarItemProps;
  isActive: boolean;
}) {
  const Icon = item.icon;
  return (
    <li
      className={cn(
        'flex justify-center',
        isActive
          ? 'relative after:content-[" "] after:w-1 after:rounded-tr-sm after:rounded-br-sm after:h-6 after:absolute after:left-0 after:top-2.25 after:xl:top-3 after:bg-neutral-7'
          : '',
      )}
    >
      <Tooltip content={item.label} side="left">
        <Link
          className="bg-background  hover:bg-accent transition-colors duration-150 p-2 rounded-md"
          href={item.href}
          aria-current={isActive ? 'page' : undefined}
        >
          <Icon className="w-5 h-5 xl:w-7 xl:h-7" />
        </Link>
      </Tooltip>
    </li>
  );
}
