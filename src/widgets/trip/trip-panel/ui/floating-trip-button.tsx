'use client';

import { EllipsisVerticalIcon } from '@heroicons/react/24/solid';
import { usePanelStore } from '../model/panel.store';

export function FloatingTripButton() {
  const isAsideOpen = usePanelStore((s) => s.isAsideOpen);

  const setAsideStatus = usePanelStore((s) => s.setAsideStatus);

  return (
    <button
      onClick={() => setAsideStatus(!isAsideOpen)}
      className="absolute left-0 -top-17 z-30 hidden md:flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-xl
      "
    >
      <span className="absolute left-1 top-1 flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-60" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-red-600" />
      </span>

      <EllipsisVerticalIcon className="h-7 w-7" />
    </button>
  );
}
