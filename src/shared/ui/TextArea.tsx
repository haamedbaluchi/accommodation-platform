'use client'
import { cn } from '@shared/lib';
import { cva, VariantProps } from 'class-variance-authority';
import {
  forwardRef,
  useEffect,
  useId,
  useRef,
} from 'react';

const textAreaVariant = cva(
  'border border-border custom-scrollbar text-text-main caret-text-foreground rounded-md px-4 py-3 resize-none font-yekta [direction:rtl] w-full hover:border-border-primary focus:outline-none focus-visible:border-border-primary-active placeholder:text-text-foreground disabled:bg-background-disabled disabled:border-disabled disabled:text-text-muted disabled:placeholder:text-text-muted transition-colors',
  {
    variants: {
      size: {
        small: 'h-39 max-h-39 font-normal text-sm',
        medium: 'h-42 max-h-42 font-normal text-sm sm:text-base',
        auto: 'min-h-9 font-normal text-sm',
      },
      status: {
        default: '',
        error: 'border-error focus:border-red-500 text-red-900',
        success: 'border-success',
      },
    },
    defaultVariants: {
      size: 'medium',
      status: 'default',
    },
  },
);

const typographySizes = {
  label: {
    small: 'font-normal text-sm',
    medium: 'font-medium text-base',
  },
  helper: {
    small: 'text-xs',
    medium: 'text-sm',
  },
};

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textAreaVariant> {
  label: string;
  labelClassName?: string;
  hiddenLabel?: boolean;
  helperText?: string;
  errorMessage?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      hiddenLabel = false,
      helperText,
      className,
      labelClassName = '',
      size = 'medium',
      status,
      id,
      errorMessage,
      ...props
    },
    ref,
  ) => {
    const currentStatus = errorMessage ? 'error' : status;
    const generatedId = useId();
    const textAreaId = id || generatedId;

    const innerRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
      const textarea = innerRef.current;

      if (!textarea || size !== 'auto') return;

      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }, [props.value, size]);

    const describedBy =
      errorMessage || helperText
        ? cn(
            currentStatus === 'error'
              ? `${textAreaId}-error`
              : undefined,
            helperText ? `${textAreaId}-hint` : undefined,
          )
        : undefined;

    return (
      <div className="flex flex-col w-full font-yekta">
        <div
          className={cn(
            hiddenLabel ? 'sr-only' : 'flex gap-0.5 mb-0.5 mr-1',
          )}
        >
          <label
            htmlFor={`${textAreaId}-textArea`}
            className={cn(
              'text-text-foreground transition-colors',
              typographySizes.label[size ?? 'medium'],
              props.disabled && 'text-text-muted',
              labelClassName,
            )}
          >
            {label}
          </label>

          {props.required && (
            <span
              aria-hidden="true"
              className="text-text-danger"
            >
              *
            </span>
          )}
        </div>

        <textarea
          id={`${textAreaId}-textArea`}
          aria-describedby={describedBy}
          aria-invalid={currentStatus === 'error'}
          aria-required={props.required}
          className={cn(
            textAreaVariant({
              size,
              status: currentStatus,
              className,
            }),
            'overflow-y-auto overflow-x-hidden',
          )}
          onInput={(e) => {
            if (size === 'auto') {
              e.currentTarget.style.height = 'auto';
              e.currentTarget.style.height =
                `${e.currentTarget.scrollHeight}px`;
            }

            props.onInput?.(e);
          }}
          {...props}
          ref={(node) => {
            innerRef.current = node;

            if (typeof ref === 'function') {
              ref(node);
            } else if (ref) {
              ref.current = node;
            }
          }}
        />

        {helperText && !props.disabled && (
          <p
            id={`${textAreaId}-hint`}
            className={cn(
              'text-text-foreground font-medium mt-1 mr-1',
              typographySizes.helper[size ?? 'small'],
              props.disabled && 'text-text-muted select-none',
              status === 'success' && 'text-text-success',
            )}
          >
            {helperText}
          </p>
        )}

        {errorMessage && !props.disabled && (
          <p
            id={`${textAreaId}-error`}
            role="alert"
            className={cn(
              'text-text-danger font-medium text-xs mt-1 mr-1',
              typographySizes.helper[size ?? 'small'],
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

TextArea.displayName = 'TextArea';

export { TextArea };