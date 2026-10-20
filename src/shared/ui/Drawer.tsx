import { cn } from '@shared/lib';
import React, { forwardRef, ReactNode } from 'react';
import * as DrawerPrimitive from '@radix-ui/react-dialog';

const sideStyles = {
  right: 'right-0 top-0 h-full  slide-in-from-right slide-out-to-right',
  left: 'left-0 top-0 h-full  slide-in-from-left slide-out-to-left',
  bottom:
    'bottom-0 left-1/2 -translate-x-[50%] h-1/2 slide-in-from-bottom slide-out-to-bottom',
  top: 'top-0 left-0 h-1/2 slide-in-from-top slide-out-to-top',
} as const;

export type SideStyles = keyof typeof sideStyles;

interface DrawerProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> {
  side: SideStyles;
  title: string;
  description: string;
  trigger?: ReactNode;
  open?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
}

const Drawer = forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  DrawerProps
>(
  (
    {
      open,
      onOpenChange,
      title,
      description,
      trigger,
      side = 'right',
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <DrawerPrimitive.Root open={open} onOpenChange={onOpenChange}>
        {/* {trigger && (
          <DrawerPrimitive.Trigger asChild>{trigger}</DrawerPrimitive.Trigger>
        )} */}
        {trigger &&
          React.Children.map(trigger, (child) => (
            <DrawerPrimitive.Trigger asChild>{child}</DrawerPrimitive.Trigger>
          ))}

        <DrawerPrimitive.Portal>
          <DrawerPrimitive.Overlay className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity data-[state=open]:animate-in data-[state=closed]:animate-out" />
          {/* <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
          /> */}
          <DrawerPrimitive.Content
            ref={ref}
            className={cn(
              'z-50 fixed bg-white shadow-lg transition',
              'data-[state=open]:animate-in data-[state=closed]:animate-out',
              sideStyles[side],
              className,
            )}
            {...props}
          >
            <DrawerPrimitive.Title className="sr-only">
              {title}
            </DrawerPrimitive.Title>
            <DrawerPrimitive.Description className="sr-only">
              {description}
            </DrawerPrimitive.Description>
            {children}
          </DrawerPrimitive.Content>
        </DrawerPrimitive.Portal>
      </DrawerPrimitive.Root>
    );
  },
);

Drawer.displayName = 'Drawer';
export { Drawer };
