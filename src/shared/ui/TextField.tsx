import { cn } from '@shared/lib';
import React, { forwardRef, useId } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const inputVariant = cva(
  'border border-border text-text-main caret-text-foreground rounded-full px-3 py-2 font-yekta [direction:rtl] w-full hover:border-border-primary focus:outline-none focus-visible:border-border-primary-active placeholder:text-text-foreground disabled:bg-background-disabled disabled:placeholder:text-text-muted disabled:border-disabled disabled:text-text-muted-foreground transition-colors',
  {
    variants: {
      sizeInput: {
        sm: 'h-9 font-normal text-sm',
        md: 'h-8 md:h-9 lg:h-11.25 font-normal text-sm md:text-base',
        lg: 'h-14 font-normal text-lg',
      },
      status: {
        default: '',
        error: 'border-error focus:border-red-500 text-red-900',
        success: 'border-success',
      },
    },
    defaultVariants: {
      sizeInput: 'md',
      status: 'default',
    },
  },
);

const typographySizes = {
  label: {
    sm: 'font-normal text-sm',
    md: 'font-medium text-base',
    lg: 'font-medium text-lg',
  },
  helper: {
    sm: 'font-normal text-[0.625rem]',
    md: 'font-normal text-xs',
    lg: 'font-medium text-xs',
  },
};

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariant> {
  errorMessage?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  hiddenLabel?: boolean;
  label: string;
  labelClassName?: string;
}

const TextField = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = 'text',
      className,
      sizeInput = 'md',
      helperText,
      status = 'default',
      label,
      labelClassName = '',
      hiddenLabel = false,
      leftIcon,
      rightIcon,
      id,
      errorMessage,
      ...props
    },
    ref,
  ) => {
    const currentStatus = errorMessage ? 'error' : status;
    const generatedId = useId();
    const inputId = id || generatedId;
    const describedBy =
      errorMessage || helperText
        ? cn(
            errorMessage ? `${inputId}-error` : undefined,
            helperText ? `${inputId}-hint` : undefined,
          )
        : undefined;
    return (
      <div className="relative flex flex-col w-full font-yekta">
        <div className={cn(hiddenLabel ? 'sr-only' : 'flex gap-0.5 mr-1 mb-1')}>
          <label
            htmlFor={inputId}
            className={cn(
              'text-text-foreground',
              typographySizes.label[sizeInput ?? 'md'],
              props.disabled && 'text-text-muted',
              labelClassName,
            )}
          >
            {label}
          </label>
          {props.required && <span aria-hidden="true">*</span>}
        </div>

        <div className="relative inline-flex items-center w-full">
          {rightIcon && (
            <span
              className={cn(
                'absolute right-3 flex justify-center items-center pointer-events-none',
                props.disabled ? 'text-text-muted' : 'text-text-main',
              )}
            >
              {rightIcon}
            </span>
          )}

          <input
            type={type}
            ref={ref}
            id={inputId}
            aria-required={props.required}
            className={cn(
              inputVariant({ sizeInput, status: currentStatus }),
              rightIcon && 'pr-8',
              leftIcon && 'pl-8',
              className,
            )}
            aria-describedby={describedBy}
            aria-invalid={currentStatus === 'error'}
            {...props}
          />

          {leftIcon && (
            <span
              className={cn(
                'absolute left-3 flex justify-center items-center pointer-events-none',
                props.disabled ? 'text-text-muted' : 'text-text-main',
              )}
            >
              {leftIcon}
            </span>
          )}
        </div>

        {helperText && !props.disabled && (
          <p
            className={cn(
              'text-text-foreground mt-1.5 mr-1',
              typographySizes.helper[sizeInput ?? 'md'],
              props.disabled && 'text-text-muted select-none',
              status === 'success' && 'text-text-success',
            )}
            id={`${inputId}-hint`}
          >
            {helperText}
          </p>
        )}

        {errorMessage && !props.disabled && (
          <p
            id={`${inputId}-error`}
            role="alert"
            className={cn(
              'text-text-danger mt-1.5 mr-1',
              typographySizes.helper[sizeInput ?? 'md'],
              props.disabled && 'text-text-muted select-none',
            )}
          >
            {errorMessage}
          </p>
        )}
      </div>
    );
  },
);

TextField.displayName = 'TextField';

export { TextField };
