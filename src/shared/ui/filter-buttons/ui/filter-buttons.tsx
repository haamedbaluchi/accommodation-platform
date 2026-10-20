'use client';

import { cn } from '@shared/lib';
import { RadioButton } from './radio-button';
import { FilterButtonsProps } from '../model/types';
import { useKeyboardNavigation } from '../model/use-keyboard-navigation';
export function FilterButtons<T extends string>({
  value,
  options,
  onChange,
  className,
  buttonClassName,
  activeButtonClassName = 'bg-active-item-background text-primary-active border border-border-active-item',
  inactiveButtonClassName = 'bg-gray-100 text-gray-600 hover:bg-gray-200',
  ariaLabel = 'فیلترها',
  dir = 'rtl',
  singleLine = false,
}: FilterButtonsProps<T>) {
  const { setButtonRef, handleKeyDown } = useKeyboardNavigation({
    options,
    onChange,
    dir,
  });

  return (
    <div
      role="radiogroup"
      aria-label={ariaLabel}
      dir={dir}
      className={cn(
        'flex items-center gap-2 font-yekta',
        singleLine
          ? 'flex-nowrap overflow-x-auto overflow-y-hidden whitespace-nowrap no-scrollbar'
          : 'flex-wrap',
        className,
      )}
    >
      {options.map((option, index) => {
        const isActive = value === option.value;

        return (
          <RadioButton
            key={option.value}
            option={option}
            index={index}
            isActive={isActive}
            onSelect={onChange}
            onKeyDown={handleKeyDown}
            setButtonRef={setButtonRef}
            buttonClassName={cn(
              singleLine && 'shrink-0 whitespace-nowrap',
              buttonClassName,
            )}
            activeButtonClassName={activeButtonClassName}
            inactiveButtonClassName={inactiveButtonClassName}
          />
        );
      })}
    </div>
  );
}