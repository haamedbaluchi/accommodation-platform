import { ReactNode } from 'react';

import { Card } from '@shared/ui';
import { cn } from '@shared/lib';

type TripCardRootProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export function TripCardRoot({
  children,
  className,
  onClick,
  disabled,
}: TripCardRootProps) {
  return (
    <Card
      asChild
      className={cn(
        'aspect-4/3 sm:aspect-video w-full rounded-3xl overflow-hidden',
        className,
      )}
    >
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className="group relative h-full w-full text-right disabled:cursor-wait disabled:opacity-70"
      >
        {children}
      </button>
    </Card>
  );
}
