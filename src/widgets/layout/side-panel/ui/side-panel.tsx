import { cn } from '@shared/lib';
import React, { ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const contentVariant = cva(
  'flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar rounded-tr-4xl rounded-br-4xl',
  {
    variants: {
      variant: {
        primary: 'bg-text-muted-foreground',
        outline: 'bg-transparent shadow-aside',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

interface SidePanelProps
  extends React.ComponentPropsWithRef<'aside'>,
    VariantProps<typeof contentVariant> {
  header?: ReactNode;
  footer?: ReactNode;
  isOpen?: boolean;

  /**
   * Width of the panel when it is open.
   */
  width?: string;
}

export function SidePanel({
  header,
  footer,
  variant,
  children,
  isOpen = false,
  width = 'clamp(420px, 38vw, 740px)',
  className,
  style,
  ...props
}: SidePanelProps) {
  return (
    <aside
      className={cn(
        'relative my-auto shrink-0 overflow-hidden',
        'transition-[width] duration-300 ease-in-out',
        className,
      )}
      style={{
        ...style,
        width: isOpen ? width : '0px',
      }}
      {...props}
    >
      <div className="flex h-full w-full min-w-0 flex-col gap-4">
        {header && (
          <div className="shrink-0">
            {header}
          </div>
        )}

        <div className={cn(contentVariant({ variant }))}>
          {children}
        </div>

        {footer && (
          <div className="flex w-full shrink-0 justify-center">
            {footer}
          </div>
        )}
      </div>
    </aside>
  );
}