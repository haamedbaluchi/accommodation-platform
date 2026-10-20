import type { KeyboardEvent, ReactNode } from 'react';

export type FilterOption<T extends string> = {
  value: T;
  label: ReactNode;
  disabled?: boolean;
};

export interface FilterButtonsProps<T extends string> {
  value: T;

  options: readonly FilterOption<T>[];
  onChange: (value: T) => void;

  className?: string;
  buttonClassName?: string;

  activeButtonClassName?: string;
  inactiveButtonClassName?: string;

  ariaLabel?: string;
  dir?: 'rtl' | 'ltr';

  singleLine?: boolean;
}
export interface UseKeyboardNavigationParams<T extends string> {
  options: readonly FilterOption<T>[];
  onChange: (value: T) => void;
  dir: 'rtl' | 'ltr';
}

export interface RadioButtonProps<T extends string> {
  option: FilterOption<T>;
  index: number;
  isActive: boolean;
  onSelect: (value: T) => void;
  onKeyDown: (
    event: KeyboardEvent<HTMLButtonElement>,
    option: FilterOption<T>,
  ) => void;
  setButtonRef: (index: number) => (element: HTMLButtonElement | null) => void;
  buttonClassName?: string;
  activeButtonClassName?: string;
  inactiveButtonClassName?: string;
}
