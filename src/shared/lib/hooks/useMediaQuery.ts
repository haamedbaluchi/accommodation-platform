'use client';

import { useSyncExternalStore } from 'react';

export function useMediaQuery(
  query: string,
  defaultSSR: boolean = false,
): boolean {
  return useSyncExternalStore(
    (onStoreChange) => {
      const media = window.matchMedia(query);
      const handleChange = () => onStoreChange();
      media.addEventListener('change', handleChange);
      return () => media.removeEventListener('change', handleChange);
    },
    () => window.matchMedia(query).matches,
    () => defaultSSR, // 👈 مقدار پیش‌فرض برای SSR
  );
}
