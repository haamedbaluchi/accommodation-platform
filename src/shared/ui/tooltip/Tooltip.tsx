'use client';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cn } from '@shared/lib/index';
import React, { ReactNode } from 'react';

interface TooltipProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {
  children: ReactNode;
  content: string;
  showArrow?: boolean;
}

export function Tooltip({
  children,
  content,
  side = 'top',
  align = 'center',
  sideOffset = 7,
  showArrow = false,
  className,
  ...props
}: TooltipProps) {
  return (
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>

      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          sideOffset={sideOffset}
          side={side}
          align={align}
          className={cn(
            'z-10000 overflow-hidden rounded-md bg-gray-900 px-3 py-1.5 text-sm font-yekta text-white shadow-md',
            'duration-200 animate-in fade-in-0 zoom-in-95',
            'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
            'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
            'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
            className,
          )}
          {...props}
        >
          {content}
          {showArrow && <TooltipPrimitive.Arrow className="fill-text-main" />}
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
}
