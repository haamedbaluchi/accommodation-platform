import type { KeyboardEvent } from 'react';
import { useMemo, useRef } from 'react';
import {
  FilterOption,
  UseKeyboardNavigationParams,
} from './types';

export function useKeyboardNavigation<T extends string>({
  options,
  onChange,
  dir,
}: UseKeyboardNavigationParams<T>) {
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const enabledOptions = useMemo(
    () => options.filter((option) => !option.disabled),
    [options],
  );

  const focusOption = (optionValue: T) => {
    const optionIndex = options.findIndex(
      (option) => option.value === optionValue,
    );

    if (optionIndex === -1) return;

    requestAnimationFrame(() => {
      buttonRefs.current[optionIndex]?.focus();
    });
  };

  const selectOption = (optionValue: T) => {
    onChange(optionValue);
    focusOption(optionValue);
  };

  const getEnabledOptionIndex = (optionValue: T) => {
    return enabledOptions.findIndex((option) => option.value === optionValue);
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    option: FilterOption<T>,
  ) => {
    if (option.disabled || enabledOptions.length === 0) return;

    const currentEnabledIndex = getEnabledOptionIndex(option.value);

    if (currentEnabledIndex === -1) return;

    const lastEnabledIndex = enabledOptions.length - 1;
    let nextEnabledIndex: number | null = null;

    const isNextKey =
      event.key === 'ArrowDown' ||
      (dir === 'ltr' ? event.key === 'ArrowRight' : event.key === 'ArrowLeft');

    const isPreviousKey =
      event.key === 'ArrowUp' ||
      (dir === 'ltr' ? event.key === 'ArrowLeft' : event.key === 'ArrowRight');

    if (isNextKey) {
      event.preventDefault();
      nextEnabledIndex =
        currentEnabledIndex === lastEnabledIndex ? 0 : currentEnabledIndex + 1;
    }

    if (isPreviousKey) {
      event.preventDefault();
      nextEnabledIndex =
        currentEnabledIndex === 0 ? lastEnabledIndex : currentEnabledIndex - 1;
    }

    if (event.key === 'Home') {
      event.preventDefault();
      nextEnabledIndex = 0;
    }

    if (event.key === 'End') {
      event.preventDefault();
      nextEnabledIndex = lastEnabledIndex;
    }

    if (nextEnabledIndex === null) return;

    const nextOption = enabledOptions[nextEnabledIndex];

    if (!nextOption) return;

    selectOption(nextOption.value);
  };

  const setButtonRef = (index: number) => {
    return (element: HTMLButtonElement | null) => {
      buttonRefs.current[index] = element;
    };
  };

  return {
    setButtonRef,
    handleKeyDown,
  };
}
