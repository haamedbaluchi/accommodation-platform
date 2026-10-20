'use client';

import { cn } from '@shared/lib';
import { Button } from '@shared/ui';
import { NewTripIcon } from './NewTripIcon';
import { PlusIcon } from '@heroicons/react/24/solid';

interface NewTripButtonProps {
  variant?: 'icon' | 'button';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export function NewTripButton({
  variant = 'button',
  onClick,
  className="",
  disabled,
}: NewTripButtonProps) {
  if (variant === 'button') {
    return (
      <Button
        type="button"
        rounded="full"
        size="large"
        rightIcon={<PlusIcon className="w-3 h-3 xl:w-4.5 xl:h-4.5" />}
        className={cn('hidden md:flex', className)}
        onClick={onClick}
        disabled={disabled}
      >
        ایجاد سفر جدید
      </Button>
    );
  }

  return (
    <Button
      type="button"
      variant="ghost"
      rounded="full"
      size="icon"
      aria-label="ایجاد سفر جدید"
      className={cn(
        'h-7 w-7 hover:bg-transparent hover:scale-105 transition-transform',
        className,
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <NewTripIcon className="w-7 h-7" />
    </Button>
  );
}