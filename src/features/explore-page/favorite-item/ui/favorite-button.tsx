// features/explore/favorite-item/ui/FavoriteButton.tsx
'use client';

import { cn } from '@shared/lib';
import { useFavoriteItemStore } from '../model/use-favorite-item.store';
import { HeartFreeIcons } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

type FavoriteButtonProps = {
  itemId: string;
};

export function FavoriteButton({ itemId }: FavoriteButtonProps) {
  const isFavorite = useFavoriteItemStore((s) => s.isFavorite(itemId));
  const toggle = useFavoriteItemStore((s) => s.toggleFavorite);

  return (
    <button
      type="button"
      onClick={() => toggle(itemId)}
      className="flex size-9 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm"
    >
      <HugeiconsIcon
        icon={HeartFreeIcons}
        className={cn(
          'size-4',
          isFavorite ? 'fill-red-500 text-red-500' : 'text-white',
        )}
      />
    </button>
  );
}
