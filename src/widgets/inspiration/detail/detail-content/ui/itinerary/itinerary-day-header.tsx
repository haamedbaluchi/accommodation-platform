'use client';

import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { MoreIcon } from '@shared/assets/icons';
import { cn } from '@shared/lib';
import { Button } from '@shared/ui';

type ItineraryDayHeaderProps = {
  dayLabel: string;
  title: string;
  titleIcon?: string;
  description: string;
  isOpen: boolean;
  onToggle: () => void;
  onOpenMenu?: () => void;
};

export function ItineraryDayHeader({
  dayLabel,
  title,
  titleIcon,
  description,
  isOpen,
  onToggle,
  onOpenMenu,
}: ItineraryDayHeaderProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <Button
          onClick={onToggle}
          variant="ghost"
          size="medium"
          rightIcon={
            <ChevronDownIcon
              className={cn(
                'size-5 text-text-main transition-transform',
                isOpen && 'rotate-180',
              )}
            />
          }
          className="text-text-main"
        >
          <span className="font-bold pr-1">{dayLabel}</span>
          {titleIcon} {title}
        </Button>

        <Button
          onClick={onOpenMenu}
          variant="ghost"
          size="icon"
          rounded="full"
          className="p-1.5 hover:bg-slate-100"
        >
          <MoreIcon className="size-5" />
        </Button>
      </div>

      {isOpen && (
        <p className="text-sm font-medium leading-7 text-text-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
