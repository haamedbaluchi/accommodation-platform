import React, { forwardRef, ReactNode, useId } from 'react';
import * as SelectBoxPrimitive from '@radix-ui/react-select';
import { cva, VariantProps } from 'class-variance-authority';
import { ArrowDown } from '@shared/assets/icons';
import { cn } from '@shared/lib';

const selectBoxTriggerVariant = cva(
  'flex justify-between items-center gap-1 rounded-full px-2 py-1 md:py-2 md:px-3 disabled:bg-background-disabled font-yekta font-normal text-xs sm:text-sm md:text-base',
  {
    variants: {
      variant: {
        outline:
          'text-text-secondary border border-border hover:border-border-primary data-[state=open]:border-border-secondary-active disabled:border-border-foreground',
        ghost:
          'text-text-main bg-background-disabled hover:bg-accent/80 data-[state=open]:bg-accent disabled:opacity-30',
      },
      size: {
        small: 'h-7 sm:h-8 md:h-9',
        medium: 'h-10 md:h-11.25',
      },
    },
    defaultVariants: {
      variant: 'outline',
      size: 'medium',
    },
  },
);

const selectBoxContentVariant = cva(
  'bg-background z-50 w-[var(--radix-select-trigger-width)] min-w-42.25 max-h-72 overflow-y-auto custom-scrollbar rounded-md py-3 px-2 flex gap-2 shadow-[0px_0px_16px_0px_#10182814]',
  {
    variants: {
      size: {
        small: '',
        medium: '',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  },
);

const selectBoxItemVariant = cva(
  'mx-1 px-3 transition-colors ease-in-out text-text-tertiary focus:bg-accent focus:outline-0 data-[state=checked]:bg-active-item-background data-[state=checked]:text-primary-active font-normal font-yekta rounded-md flex items-center gap-2 justify-end cursor-pointer',
  {
    variants: {
      size: {
        small: 'text-sm h-7.5',
        medium: 'text-base h-8.5',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  },
);

const typographySizes = {
  label: {
    small: 'text-sm',
    medium: 'text-base',
  },
  helper: {
    small: 'text-[0.625rem]',
    medium: 'text-xs',
  },
};

export interface SelectBoxItemType {
  readonly id: string | number;
  value: string;
  icon?: ReactNode;
  destructive?: boolean;
  disabled?: boolean;
}

interface SelectBoxProps
  extends React.ComponentPropsWithoutRef<typeof SelectBoxPrimitive.Content>,
    VariantProps<typeof selectBoxTriggerVariant> {
  value?: string;
  name?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  label: string;
  rightIcon?: ReactNode;
  placeholder?: string;
  hiddenLabel?: boolean;
  status?: 'default' | 'success' | 'error';
  triggerClassName?: string;
  required?: boolean;
  disabled?: boolean;
  errorMessage?: string;
  items: SelectBoxItemType[];
  helperText?: string;
}

const SelectBox = forwardRef<
  React.ElementRef<typeof SelectBoxPrimitive.Content>,
  SelectBoxProps
>(
  (
    {
      label,
      rightIcon,
      placeholder,
      errorMessage,
      sideOffset = 6,
      hiddenLabel = true,
      required = false,
      status = 'default',
      items,
      helperText,
      id,
      size,
      variant,
      value,
      defaultValue,
      onValueChange,
      name,
      disabled = false,
      className,
      triggerClassName,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const selectBoxId = id ?? generatedId;
    const describedby =
      cn(
        errorMessage ? `${selectBoxId}-error` : undefined,
        helperText ? `${selectBoxId}-hint` : undefined,
      ) || undefined;
    return (
      <div className="relative flex flex-col w-full font-yekta">
        <div className={cn(hiddenLabel ? 'sr-only' : 'flex gap-0.5 mr-1')}>
          <label
            htmlFor={selectBoxId}
            className={cn(
              'text-text-foreground font-medium',
              typographySizes.label[size ?? 'medium'],
              disabled && 'text-text-muted',
            )}
          >
            {label}
          </label>
          {required && <span aria-hidden="true">*</span>}
        </div>
        <SelectBoxPrimitive.Root
          name={name}
          disabled={disabled}
          value={value}
          onValueChange={onValueChange}
          defaultValue={defaultValue}
        >
          <SelectBoxPrimitive.Trigger
            id={selectBoxId}
            aria-describedby={describedby}
            className={cn(
              'group w-full',
              selectBoxTriggerVariant({ size, variant }),
              triggerClassName,
            )}
          >
            <SelectBoxPrimitive.Icon>
              <ArrowDown className="w-3.5 h-3.5 md:w-5 md:h-5 group-data-[state=open]:rotate-180 transition-transform" />
            </SelectBoxPrimitive.Icon>
            <div className="flex gap-2">
              <SelectBoxPrimitive.Value
                className=""
                placeholder={placeholder}
              />

              {rightIcon && (
                <SelectBoxPrimitive.Icon>{rightIcon}</SelectBoxPrimitive.Icon>
              )}
            </div>
          </SelectBoxPrimitive.Trigger>

          <SelectBoxPrimitive.Portal>
            <SelectBoxPrimitive.Content
              ref={ref}
              position="popper"
              sideOffset={sideOffset}
              className={cn(selectBoxContentVariant({ size }),className)}
              {...props}
            >
              <SelectBoxPrimitive.Viewport>
                {items.map((item: SelectBoxItemType) => (
                  <SelectBoxPrimitive.Item
                    className={cn(selectBoxItemVariant({ size }))}
                    key={item.id}
                    value={item.value}
                  >
                    <SelectBoxPrimitive.ItemText className="select-none">
                      {item.value}
                    </SelectBoxPrimitive.ItemText>
                    {item.icon && (
                      <span className="flex items-center">{item.icon}</span>
                    )}
                  </SelectBoxPrimitive.Item>
                ))}
              </SelectBoxPrimitive.Viewport>
            </SelectBoxPrimitive.Content>
          </SelectBoxPrimitive.Portal>
        </SelectBoxPrimitive.Root>

        {helperText && !disabled && (
          <p
            className={cn(
              'text-text-foreground mt-1.5 mr-1 font-normal font-yekta',
              typographySizes.helper[size ?? 'medium'],
              disabled && 'text-text-muted select-none',
              status === 'success' && 'text-text-success',
            )}
            id={`${selectBoxId}-hint`}
          >
            {helperText}
          </p>
        )}

        {errorMessage && !disabled && (
          <p
            id={`${selectBoxId}-error`}
            role="alert"
            className={cn(
              'text-text-danger mt-1.5 mr-1 font-normal font-yekta',
              typographySizes.helper[size ?? 'medium'],
              disabled && 'text-text-muted select-none',
            )}
          >
            {errorMessage}
          </p>
        )}
      </div>
    );
  },
);

SelectBox.displayName = 'SelectBox';
export { SelectBox };
