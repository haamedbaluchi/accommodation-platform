'use client';

import { cn } from '@shared/lib';
import React, {
  forwardRef,
  ReactNode,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { Button } from './Button';

const selectTriggerVariant = cva(
  'relative border border-border text-neutral-9 rounded-full px-3 py-2 [direction:rtl] w-full hover:border-blue-primary focus:outline-none focus-visible:border-border-primary-active disabled:bg-background-disabled disabled:border-disabled disabled:text-neutral-7 transition-colors bg-white text-right',
  {
    variants: {
      sizeInput: {
        sm: 'h-9 font-normal text-sm',
        md: 'h-8 md:h-9 lg:h-11.25 font-normal text-sm md:text-base',
        lg: 'h-14 font-normal text-lg',
      },
      status: {
        default: '',
        error: 'border-error focus:border-red-500 text-error',
        success: 'border-success',
      },
      placeholderState: {
        default: '',
        placeholder: 'text-neutral-7',
      },
    },
    defaultVariants: {
      sizeInput: 'md',
      status: 'default',
      placeholderState: 'default',
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

export type SelectOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

interface SelectFieldProps
  extends Omit<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      'value' | 'onChange'
    >,
    VariantProps<typeof selectTriggerVariant> {
  label: string;
  options: SelectOption[];
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  required?: boolean;
  name?: string;
  errorMessage?: string;
  helperText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  hiddenLabel?: boolean;
  labelClassName?: string;
  onValueChange?: (value: string) => void;
}

const SelectField = forwardRef<HTMLButtonElement, SelectFieldProps>(
  (
    {
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
      options,
      placeholder = 'انتخاب کنید',
      value,
      defaultValue = '',
      name,
      disabled,
      required,
      onValueChange,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const selectId = id || generatedId;
    const wrapperRef = useRef<HTMLDivElement>(null);

    const [isOpen, setIsOpen] = useState(false);
    const [internalValue, setInternalValue] = useState(defaultValue);

    const selectedValue = value ?? internalValue;
    const selectedOption = options.find(
      (option) => option.value === selectedValue,
    );

    const currentStatus = errorMessage ? 'error' : status;

    const describedBy =
      errorMessage || helperText
        ? cn(
            errorMessage ? `${selectId}-error` : undefined,
            helperText ? `${selectId}-hint` : undefined,
          )
        : undefined;

    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (
          wrapperRef.current &&
          !wrapperRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      }

      document.addEventListener('mousedown', handleClickOutside);
      return () =>
        document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (option: SelectOption) => {
      if (option.disabled) return;

      setInternalValue(option.value);
      onValueChange?.(option.value);
      setIsOpen(false);
    };

    return (
      <div ref={wrapperRef} className="relative flex w-full flex-col">
        <div className={cn(hiddenLabel ? 'sr-only' : 'mr-1 flex gap-0.5')}>
          <label
            htmlFor={selectId}
            className={cn(
              'text-neutral-7',
              typographySizes.label[sizeInput ?? 'md'],
              disabled && 'text-neutral-7',
              labelClassName,
            )}
          >
            {label}
          </label>

          {required && <span aria-hidden="true">*</span>}
        </div>

        <div className="relative mt-1 w-full">
          <Button
            ref={ref}
            id={selectId}
            type="button"
            variant="unstyled"
            size={undefined}
            rounded={undefined}
            disabled={disabled}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            aria-describedby={describedBy}
            aria-invalid={currentStatus === 'error'}
            onClick={() => setIsOpen((prev) => !prev)}
            className={cn(
              selectTriggerVariant({
                sizeInput,
                status: currentStatus,
                placeholderState: selectedOption ? 'default' : 'placeholder',
              }),
              'justify-start!',
              rightIcon && 'pr-8',
              'pl-9',
              leftIcon && 'pl-8',
              className,
            )}
            {...props}
          >
            {rightIcon && (
              <span
                className={cn(
                  'pointer-events-none absolute right-3 top-1/2 flex -translate-y-1/2 items-start justify-start',
                  disabled ? 'text-neutral-7' : 'text-blue-primary',
                )}
              >
                {rightIcon}
              </span>
            )}

            <span className="block truncate">
              {selectedOption ? selectedOption.label : placeholder}
            </span>

            <span
              className={cn(
                'pointer-events-none absolute left-3 top-1/2 flex -translate-y-1/2 items-start justify-start transition-transform',
                isOpen && 'rotate-180',
                disabled ? 'text-neutral-6' : 'text-neutral-7',
              )}
            >
              {leftIcon || <ChevronDownIcon className="h-4 w-4" />}
            </span>
          </Button>

          {name && (
            <input
              type="hidden"
              name={name}
              value={selectedValue}
              required={required}
            />
          )}

          {isOpen && (
            <div className="absolute left-0 right-0 z-50 mt-2 rounded-2xl border border-border bg-white p-2 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
              <ul
                role="listbox"
                aria-labelledby={selectId}
                className="max-h-60 space-y-1 overflow-auto"
              >
                {options.map((option) => {
                  const isSelected = option.value === selectedValue;

                  return (
                    <li
                      key={option.value}
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => handleSelect(option)}
                      className={cn(
                        'cursor-pointer rounded-lg px-4 py-2 text-right text-sm transition-colors text-neutral-8',
                        'hover:bg-[#E8F1FF] hover:text-blue-primary',
                        isSelected && 'bg-[#DCEBFF] text-blue-primary',
                        option.disabled &&
                          'pointer-events-none cursor-not-allowed text-neutral-7 opacity-50',
                      )}
                    >
                      {option.label}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>

        {helperText && !disabled && (
          <p
            id={`${selectId}-hint`}
            className={cn(
              'mr-1 mt-1.5 text-neutral-7',
              typographySizes.helper[sizeInput ?? 'md'],
              status === 'success' && 'text-success',
            )}
          >
            {helperText}
          </p>
        )}

        {errorMessage && !disabled && (
          <p
            id={`${selectId}-error`}
            role="alert"
            className={cn(
              'mr-1 mt-1.5 text-error',
              typographySizes.helper[sizeInput ?? 'md'],
            )}
          >
            {errorMessage}
          </p>
        )}
      </div>
    );
  },
);

SelectField.displayName = 'SelectField';

export { SelectField };
