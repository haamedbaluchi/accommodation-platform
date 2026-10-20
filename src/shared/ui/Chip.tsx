import { cn } from '@shared/lib';
import { forwardRef, ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const chipVariant = cva(
  'inline-flex w-auto items-center justify-center gap-2 font-yekta border text-text-main font-bold text-[0.625rem] lg:text-xs xl:text-base',
  {
    variants: {
      variant: {
        default:
          'rounded-4xl py-1 px-2 xl:py-2 xl:px-4 border-border-foreground font-normal',

        primary:
          'rounded-lg bg-text-muted-foreground border-border-foreground py-2 px-1 xl:px-3',

        success:
          'rounded-full border-success-light bg-success-extra-light px-4 py-2 text-sm font-bold text-success-light lg:text-sm xl:text-sm',
      },
      size: {
        default: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

interface ChipProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof chipVariant> {
  text?: string;
  icon?: ReactNode;
}

const Chip = forwardRef<HTMLElement, ChipProps>(
  (
    {
      variant = 'default',
      size,
      text,
      icon,
      onClick,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const isClickable = !!onClick;
    const Comp = onClick ? 'button' : 'div';
    return (
      <Comp
        ref={ref as any}
        type={isClickable ? 'button' : undefined}
        onClick={onClick}
        className={cn(
          chipVariant({ variant, size, className }),
          isClickable &&
            'cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed',
        )}
        {...props}
      >
        {icon && (
          <div
            // className="lg:flex hidden"
            aria-hidden="true"
          >
            {icon}
          </div>
        )}
        {text && <span>{text}</span>}

        {children}
      </Comp>
    );
  },
);

Chip.displayName = 'Chip';
export { Chip };
