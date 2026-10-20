import { cn } from '@shared/lib/index';
import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap font-yekta transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-ring disabled:pointer-events-none disabled:text-disabled-foreground disabled:opacity-90 cursor-pointer has([svg]:size-4)',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground hover:text-primary-foreground hover:bg-primary-hover active:text-primary-foreground active:bg-primary-active disabled:bg-disabled disabled:text-primary-foreground',

        secondary:
          'bg-text-muted-foreground hover:bg-secondary text-text-main active:bg-secondary-hover disabled:opacity-30',

        tertiary:
          'bg-background-secondary text-tertiary hover:bg-border-tertiary hover:text-tertiary-hover active:text-tertiary-active',

        outline:
          'border border-primary bg-background text-primary hover:bg-primary/10 hover:text-primary-hover active:text-primary-active active:bg-primary/20 hover:border-primary-hover disabled:border-disabled-foreground active:border-primary-active',

        outlineSecondary:
          'bg-transparent text-tertiary border border-tertiary/50 hover:bg-background-secondary/20 hover:text-tertiary-hover active:bg-backgroun-secondary/35 active:text-tertiary-active',

        ghost:
          'hover:bg-accent text-primary hover:text-primary-hover active:text-primary-active',

        error:
          'bg-error text-primary-foreground hover:bg-error-hover active:bg-error-active disabled:bg-disabled disabled:text-primary-foreground',

        outlineError:
          'border border-error bg-background text-error hover:bg-error/5 hover:text-error-hover active:text-error-active active:bg-error/10 hover:border-error-hover disabled:border-disabled-foreground active:border-error-active',

        link: 'underline-offset-4 hover:underline',

        unstyled: '',
      },
      size: {
        x_small: 'h-8 px-3 py-1 gap-1.5 font-normal text-xs',
        small:
          'h-7 lg:h-9 px-1 lg:px-3 py-0 lg:py-1 gap-0.5 lg:gap-2 font-normal text-[0.625rem] lg:text-xs',
        medium:
          'h-8 sm:h-9 md:h-10 px-2 md:px-3 py-1 gap-2 font-medium text-xs md:text-sm ',
        large:
          'h-8 md:h-9.5 2xl:h-11.25 px-2 md:px-3 2xl:px-4 py-1.75 xl:py-2 gap-1 xl:gap-2 font-medium text-xs xl:text-sm',
        x_large:
          'h-10 px-3 pt-1.75 2xl:h-12.5 2xl:px-4 2xl:py-2 gap-2.5 font-medium text-sm xl:text-base',
        xx_large: 'h-13.75 px-5 py-1 gap-2.5 font-normal text-lg',
        icon: 'h-6 w-6 lg:h-9 lg:w-9',
        "icon-sm":"h-7.5 w-7.5 [&>svg]:size-4"
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'small',
      rounded: 'sm',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      rounded,
      type = 'button',
      rightIcon,
      leftIcon,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        {...props}
      >
        {rightIcon && <span className="flex items-center">{rightIcon}</span>}
        {children}
        {leftIcon && <span className="flex items-center">{leftIcon}</span>}
      </button>
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
