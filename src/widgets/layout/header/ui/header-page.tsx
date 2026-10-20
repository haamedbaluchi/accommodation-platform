import { cn } from '@shared/lib';
import type { ReactNode } from 'react';

interface HeaderPageProps {
  leading?: ReactNode;
  middle?: ReactNode;
  trailing?: ReactNode;
  className?: string;
}

export function HeaderPage({
  leading,
  middle,
  trailing,
  className = '',
}: HeaderPageProps) {
  return (
    <header
      className={cn(
        'z-45 bg-background w-full h-12 md:h-14 lg:h-15 2xl:h-18.25 px-4 lg:px-7 py-4 flex items-center justify-between shadow-header',
        className,
      )}
    >
      {leading && <div className="shrink-0">{leading}</div>}
      {middle && <div className="mx-2"> {middle}</div>}
      {trailing && (
        <div className="shrink-0 flex items-center gap-2">{trailing}</div>
      )}
    </header>
  );
}
