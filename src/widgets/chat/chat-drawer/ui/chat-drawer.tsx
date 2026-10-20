'use client';

import { Button, Divider, Drawer } from '@shared/ui';
import { ArrowDown, MenuIcon } from '@shared/assets/icons';

import { useState } from 'react';
import { useChatList } from '../api/use-chat-list';
import { ChatDrawerHeader } from './chat-drawer-header';
import { ChatList } from './chat-list';

import { usePanelStore } from '@widgets/trip/trip-panel/model/panel.store';

export function ChatDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading, isError, error } = useChatList();

  
  const setAsideStatus = usePanelStore((state) => state.setAsideStatus);
  
  const closeDrawer = () => {
    setAsideStatus(false);
    setIsOpen(false);
  };

  return (
    <Drawer
      title="لیست گفتگوها"
      description="لیست گفتگوها"
      side="right"
      open={isOpen}
      onOpenChange={setIsOpen}
      onOpenAutoFocus={(event) => event.preventDefault()}
      className="
        flex h-full w-70 flex-col
        rounded-l-4xl pt-5 pr-5 pb-7
        shadow-[-8px_10px_16px_0px_#00000012]
        [direction:ltr]
        md:right-12 md:top-13 md:w-79
        lg:top-15
        xl:right-[56.5px]
      "
      trigger={[
        <button
          key="desktop-chat-drawer-trigger"
          type="button"
          aria-label="باز کردن لیست گفتگوها"
          className="w-7 lg:w-9 h-9 lg:h-12 hidden md:flex items-center justify-center rounded-l-full absolute top-17 lg:top-20 right-12.5 xl:right-14.5 bg-text-muted-foreground hover:bg-accent cursor-pointer text-text-main"
        >
          <ArrowDown className="w-5 h-5 rotate-90" />
        </button>,

        <Button
          key="mobile-chat-drawer-trigger"
          variant="ghost"
          size="icon"
          rounded="full"
          aria-label="باز کردن لیست گفتگوها"
          className="flex md:hidden"
        >
          <MenuIcon className="w-5 h-5 **:stroke-text-foreground" />
        </Button>,
      ]}
    >
      <div className="flex h-full w-full flex-col [direction:rtl] ">
        <ChatDrawerHeader onClose={closeDrawer} />

        <ChatList
          chatList={data?.data ?? []}
          loading={isLoading}
          isError={isError}
          error={error}
          onItemClick={closeDrawer}
        />
      </div>
    </Drawer>
  );
}
