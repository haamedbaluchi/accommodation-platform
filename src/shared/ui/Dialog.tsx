import { Button } from './Button';
import { cn } from '@shared/lib';
import { CancelIcon } from '@shared/assets/icons';
import React, { forwardRef, ReactNode } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cva, type VariantProps } from 'class-variance-authority';

const dialogVariant = cva(
  'rounded-2xl sm:rounded-md border border-border bg-background max-h-[80vh]',
  {
    variants: {
      size: {
        small: 'max-w-[60%] lg:max-w-75',
        medium: 'max-w-[90%] lg:max-w-120 ',
        large: 'max-w-[90%] lg:max-w-187.5 ',
        x_large: 'max-w-[90%] lg:max-w-5xl ',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  },
);

interface DialogProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof dialogVariant> {
  title?: string;
  type?: 'default' | 'delete';
  description?: string;
  isOpen?: boolean;
  onClose?: (isOpen: boolean) => void;
  trigger?: ReactNode;
  footer?: ReactNode;
}

const typeStyles = {
  description: {
    default: 'text-xs text-text-foreground font-normal',
    delete: 'text-sm text-text-main font-medium',
  },
};

const Dialog = forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DialogProps
>(
  (
    {
      type = 'default',
      size = 'medium',
      isOpen,
      onClose,
      title,
      description,
      trigger,
      footer,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <DialogPrimitive.Root open={isOpen} onOpenChange={onClose} >
        {trigger && (
          <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>
        )}
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-95" />
          {/* <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
          /> */}
          <DialogPrimitive.Content
            ref={ref}
            className={cn(
              'fixed left-[50%] top-[50%] z-50 w-full translate-x-[-50%] translate-y-[-50%]',
              'duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
              dialogVariant({ size, className }),
            )}
            onInteractOutside={(e) => {
              const target = e.target as HTMLElement;

              if (target.closest('aside') || target.closest('#sidebar')) {
                e.preventDefault();
              }
            }}
            {...props}
          >
            <div className="flex items-start justify-end px-4 pt-4">
              {(title || description) && (
                <div
                  className={cn(
                    'flex flex-col flex-1 font-yekta',
                    type === 'delete' && 'gap-2',
                  )}
                >
                  {title && (
                    <DialogPrimitive.Title className="font-bold text-base text-text-main">
                      {title}
                    </DialogPrimitive.Title>
                  )}

                  {description && (
                    <DialogPrimitive.Description
                      className={typeStyles.description[type ?? 'default']}
                    >
                      {description}
                    </DialogPrimitive.Description>
                  )}
                </div>
              )}
              <DialogPrimitive.Close asChild>
                {/* <Tooltip content="بستن"> */}
                <Button
                  rounded="full"
                  variant="ghost"
                  size="icon"
                  className="w-6 h-6 shrink-0"
                  aria-label="بستن مدال"
                >
                  <CancelIcon className="w-4 h-4" />
                </Button>
                {/* </Tooltip> */}
              </DialogPrimitive.Close>
            </div>
            {(title || description) && (
              <div className="w-full h-px bg-text-muted-foreground my-4" />
            )}

            <div className="custom-scrollbar overflow-y-auto max-h-[calc(80vh-200px)] px-1">
              {children}
            </div>

            {footer && type !== 'delete' && (
              <div className="w-full h-px bg-text-muted-foreground my-4" />
            )}
            {footer && (
              <div className="flex items-center justify-end gap-4 px-4 pb-4">
                {footer}
              </div>
            )}
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    );
  },
);

Dialog.displayName = 'Dialog';
export { Dialog };
