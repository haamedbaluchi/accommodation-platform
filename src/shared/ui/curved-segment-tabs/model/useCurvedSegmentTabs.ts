import { CurvedSegmentTabsProps } from './curved.segment.type';
import { KeyboardEvent, useMemo, useRef, useState } from 'react';

export function useCurvedSegmentTabs<T extends string>(
  initialIndex: number,
  {
    tabs,
    dir = 'rtl',
    orientation = 'horizontal',
    onChange,
  }: CurvedSegmentTabsProps<T>,
) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const enabledTabs = useMemo(
    () => tabs.filter(tab => !tab.disabled),
    [tabs],
  );

  const focusTab = (index: number) => {
    requestAnimationFrame(() => {
      buttonRefs.current[index]?.focus();
    });
  };

  const selectTab = (index: number) => {
    if (tabs[index]?.disabled) return;

    setActiveIndex(index);
    onChange?.(tabs[index]!.value);
    focusTab(index);
  };

  const getEnabledIndex = (index: number) => {
    return enabledTabs.findIndex(tab => tab.value === tabs[index]?.value);
  };

  const handleKeyDown = (
    e: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (tabs[index]?.disabled) return;

    const enabledIndex = getEnabledIndex(index);

    if (enabledIndex === -1) return;

    const last = enabledTabs.length - 1;

    let nextEnabledIndex: number | null = null;

    const nextKey =
      orientation === 'horizontal'
        ? dir === 'rtl'
          ? 'ArrowLeft'
          : 'ArrowRight'
        : 'ArrowDown';

    const prevKey =
      orientation === 'horizontal'
        ? dir === 'rtl'
          ? 'ArrowRight'
          : 'ArrowLeft'
        : 'ArrowUp';

    switch (e.key) {
      case nextKey:
        e.preventDefault();
        nextEnabledIndex = enabledIndex === last ? 0 : enabledIndex + 1;
        break;

      case prevKey:
        e.preventDefault();
        nextEnabledIndex = enabledIndex === 0 ? last : enabledIndex - 1;
        break;

      case 'Home':
        e.preventDefault();
        nextEnabledIndex = 0;
        break;

      case 'End':
        e.preventDefault();
        nextEnabledIndex = last;
        break;
    }

    if (nextEnabledIndex == null) return;

    const nextTab = enabledTabs[nextEnabledIndex];

    const nextIndex = tabs.findIndex(
      tab => tab.value === nextTab.value,
    );

    selectTab(nextIndex);
  };

  const setButtonRef =
    (index: number) => (el: HTMLButtonElement | null) => {
      buttonRefs.current[index] = el;
    };

  return {
    activeIndex,
    selectTab,
    handleKeyDown,
    setButtonRef,
  };
}