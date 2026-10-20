import { cn } from '@shared/lib';
import React, { forwardRef, ReactNode } from 'react';
import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu';

export interface DropdownItemType {
  readonly id: string | number;
  label: ReactNode;
  disabled?: boolean;
  icon?: ReactNode;
  onClick?: () => void;
  destructive?: boolean;
  className?: string;
}

interface DropdownMenuProps
  extends React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Content> {
  trigger?: ReactNode;
  items: DropdownItemType[];
  direction?: 'rtl' | 'ltr';
  itemClassName?: string;
  iconClassName?: string;
  header?: ReactNode;
  footer?: ReactNode;
}

const DropdownMenu = forwardRef<
  React.ElementRef<typeof DropdownPrimitive.Content>,
  DropdownMenuProps
>(
  (
    {
      items,
      align = 'center',
      side = 'top',
      sideOffset = 5,
      trigger,
      direction = 'rtl',
      className,
      itemClassName,
      iconClassName,
      header,
      footer,
      ...props
    },
    ref,
  ) => {
    return (
      <DropdownPrimitive.Root dir={direction}>
        {trigger && (
          <DropdownPrimitive.Trigger asChild>
            {trigger}
          </DropdownPrimitive.Trigger>
        )}

        <DropdownPrimitive.Portal>
          <DropdownPrimitive.Content
            ref={ref}
            align={align}
            side={side}
            sideOffset={sideOffset}
            className={cn(
              'z-50 min-w-40 overflow-hidden rounded-md bg-background px-2 py-2 font-yekta text-text-primary shadow-[0px_0px_16px_0px_#10182814]',
              'flex flex-col gap-1',
              'data-[state=open]:animate-in data-[state=closed]:animate-out',
              'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
              'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
              className,
            )}
            {...props}
          >
            {header}

            {items.map((item) => (
              <DropdownPrimitive.Item
                key={item.id}
                disabled={item.disabled}
                onClick={item.onClick}
                className={cn(
                  'relative flex cursor-pointer select-none items-center gap-2 rounded-sm px-1 py-0.5 text-sm font-normal outline-none transition-colors',
                  'focus:bg-accent',
                  'data-disabled:pointer-events-none data-disabled:opacity-50',
                  item.destructive && 'text-text-danger focus:bg-error/10',
                  itemClassName,
                  item.className,
                )}
              >
                {item.icon && (
                  <span className={cn('flex items-center', iconClassName)}>
                    {item.icon}
                  </span>
                )}

                {item.label}
              </DropdownPrimitive.Item>
            ))}

            {footer}
          </DropdownPrimitive.Content>
        </DropdownPrimitive.Portal>
      </DropdownPrimitive.Root>
    );
  },
);

DropdownMenu.displayName = 'DropdownMenu';

export { DropdownMenu };
