'use client';

import { MODAL_ITEMS, useModalStore } from '@_app/modal';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { MenuIcon } from '@shared/assets/icons';
import { Button } from '@shared/ui';

type NavDrawerButtonProps = {
  variant?: 'icon' | 'text';
};

export function NavDrawerButton({
  variant = 'icon',
}: NavDrawerButtonProps) {
  const openModal = useModalStore((state) => state.openModal);

  if (variant === 'text') {
    return (
      <Button
        rounded="full"
        variant="ghost"
        size="medium"
        aria-label="منو"
        className="text-sm sm:text-lg font-bold"
        rightIcon={<Bars3Icon className="w-4 h-4" />}
        onClick={() => openModal(MODAL_ITEMS.DRAWERMAIN)}
      >
        بومو
      </Button>
    );
  }

  return (
    <Button
      rounded="full"
      variant="ghost"
      size="icon"
      aria-label="منو"
      className="hover:bg-accent/40"
      onClick={() => openModal(MODAL_ITEMS.DRAWERMAIN)}
    >
      <MenuIcon className="w-5 h-5 sm:w-4 sm:h-4 lg:w-6 lg:h-6" />
    </Button>
  );
}