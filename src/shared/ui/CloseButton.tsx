'use client';


import { cn } from '@shared/lib';
import { Button } from '@shared/ui';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface CloseButtonProps {
  onClick?: () => void;
  className?: string;
}

export function CloseButton({
  onClick,
  className,
}: CloseButtonProps) {
  return (
    <Button
      variant="ghost"
      rounded="full"
      size="icon"
      aria-label="بستن"
      onClick={onClick}
      className={cn(
        'h-10 w-10 text-text-main',
        className,
      )}
    >
      <XMarkIcon className="h-6 w-6" />
    </Button>
  );
}