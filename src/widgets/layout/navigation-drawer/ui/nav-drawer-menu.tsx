'use client';

import { cn } from '@shared/lib';
import { Drawer } from '@shared/ui';
import { useRouter } from 'next/navigation';
import { MODAL_ITEMS, useModalStore } from '@_app/modal';
import { NavDrawerHeader } from './nav-drawer-header';
import { NavDrawerNav } from './nav-drawer-nav';
import { NavDrawerFooter } from './nav-drawer-footer';
import { menuItems } from '../model/nav-drawer-items.data';
import { DrawerUserSection } from './user-section/drawer-user-section';

interface NavDrawerMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function NavDrawerMenu({ open, setOpen }: NavDrawerMenuProps) {
  const router = useRouter();
  const { openModal } = useModalStore();

  const handleLogin = () => {
    setOpen?.(false);

    setTimeout(() => {
      openModal(MODAL_ITEMS.AUTH);
    }, 200);
  };

  const handleStartChat = () => {
    setOpen?.(false);

    router.push('/chat_ai');
  };

  return (
    <Drawer
      side="right"
      description="منوی دسترسی به صفحات سایت"
      open={open}
      onOpenChange={(isOpen: boolean) => setOpen(isOpen)}
      title="منوی بومرو"
      className={cn(
        'w-full xs:w-[320px] max-w-full xs:max-w-[calc(100vw-24px)] xs:rounded-l-[28px]',
        'border-l border-violet-200/70',
        'p-0 overflow-hidden',
      )}
    >
      <div
        dir="rtl"
        className="flex h-full min-h-dvh overflow-y-auto custom-scrollbar flex-col bg-white text-neutral-900"
      >
        <NavDrawerHeader onClose={setOpen} />

        <NavDrawerNav items={menuItems} onItemClick={() => setOpen?.(false)} />
        <DrawerUserSection
          onLogin={handleLogin}
          onStartHosting={handleStartChat}
        />

        <NavDrawerFooter />
      </div>
    </Drawer>
  );
}
