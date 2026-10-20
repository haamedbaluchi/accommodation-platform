import React, { forwardRef, useId } from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@shared/lib';

const switchRootVariant = cva(
  'peer group inline-flex rounded-full cursor-pointer transition-colors items-center focus-visible:outline-0 focus-visible:ring-2 ring-ring focus-visible:ring-offset-2 disabled:opacity-25 data-[state=checked]:bg-primary data-[state=unchecked]:bg-foreground ',
  {
    variants: {
      size: {
        sm: 'w-7 h-4',
        md: 'w-8 h-5',
        lg: 'w-7 md:w-9 h-4 md:h-5.5',
        xl: 'w-10 h-6',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

const switchThumbVariant = cva(
  'block bg-white rounded-full pointer-events-none transition-transform duration-300 data-[state=unchecked]:-translate-x-0.75',
  {
    variants: {
      size: {
        sm: 'w-3 h-3 data-[state=checked]:-translate-x-3.25',
        md: 'w-3.5 h-3.5 data-[state=checked]:-translate-x-3.75',
        lg: 'w-3 h-3 md:w-4 md:h-4 data-[state=checked]:-translate-x-3.5 md:data-[state=checked]:-translate-x-4.25',
        xl: 'w-4.5 h-4.5 data-[state=checked]:-translate-x-4.75',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>,
    VariantProps<typeof switchRootVariant> {
  label: string;
  rightText?: string;
  leftText?: string;
  description?: string;
  errorMessage?: string;
  loading?: boolean;
}

const typographySizes = {
  fontSize: {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xs sm:text-sm md:text-lg',
    xl: 'text-xl',
  },
};
const typographyDefaultStyle = 'font-medium text-text-foreground';

const Switch = forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(
  (
    {
      label,
      rightText,
      leftText,
      description,
      errorMessage,
      size,
      loading,
      id,
      className,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const switchId = id ?? generatedId;
    const describedby =
      errorMessage || description
        ? cn(
            errorMessage ? `${switchId}-error` : undefined,
            description ? `${switchId}-hint` : undefined,
          )
        : undefined;
    return (
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 font-yekta">
          {rightText && (
            <label
              htmlFor={switchId}
              className={cn(
                typographyDefaultStyle,
                typographySizes.fontSize[size ?? 'md'],
              )}
            >
              {rightText}
            </label>
          )}
          <SwitchPrimitive.Root
            id={switchId}
            ref={ref}
            aria-invalid={!!errorMessage}
            aria-disabled={props.disabled || loading}
            disabled={props.disabled || loading}
            aria-describedby={describedby}
            className={cn(switchRootVariant({ size, className }))}
            {...props}
          >
            <SwitchPrimitive.Thumb
              className={cn(switchThumbVariant({ size }))}
            />
          </SwitchPrimitive.Root>

          {leftText && (
            <label
              htmlFor={switchId}
              className={cn(
                typographyDefaultStyle,
                typographySizes.fontSize[size ?? 'md'],
              )}
            >
              {leftText}
            </label>
          )}
        </div>
        {(label || description || errorMessage) && (
          <div className="flex flex-col gap-1">
            {label && (
              <label htmlFor={switchId} className="sr-only">
                {label}
              </label>
            )}
            {description && !errorMessage && (
              <p id={`${switchId}-hint`} className="text-xs text-text-muted">
                {description}
              </p>
            )}
            {errorMessage && (
              <p
                id={`${switchId}-error`}
                className="text-xs text-text-danger font-medium"
              >
                {errorMessage}
              </p>
            )}
          </div>
        )}
      </div>
    );
  },
);

Switch.displayName = 'Switch';
export { Switch };
