'use client';

import { Drawer, TabBar } from '@shared/ui';
import { navLinks } from '@shared/constants';

import { ChatHeaderMobile } from '@widgets/chat/chat-header';
import { PromptBarSection } from '@widgets/chat/prompt-bar-section';
import { TripTabBar } from '@widgets/trip/trip-panel';
import {
  ChatListViewSection,
  useActiveChatMessages,
} from '@widgets/chat/chat-list';
import { useTripDrawer } from '../model/useTripDrawer';
import { TripPanelContent } from './trip-panel-content';

export function ChatMobileLayout() {
  const { hasMessages } = useActiveChatMessages();
  const { isOpen, activeTabId, setIsOpen, openWithTab } = useTripDrawer();

  return (
    <div className="flex h-dvh w-full flex-col overflow-hidden md:hidden">
      <ChatHeaderMobile />

      {hasMessages && (
        <div className="mx-auto shrink-0 py-2">
          <TripTabBar
            tabClassName="w-25"
            onChange={(item) => openWithTab(item.id as string)}
          />
        </div>
      )}

      <div className="flex min-h-0 flex-1 flex-col">
        <ChatListViewSection />

        <div className="self-center flex w-full max-w-130 justify-center px-6 lg:max-w-180 xl:max-w-230 2xl:max-w-300 pb-2">
          <PromptBarSection />
        </div>
      </div>

      <div className="mx-2.5 mb-2 flex shrink-0 md:hidden">
        <TabBar
          items={navLinks}
          tabClassName="flex flex-col gap-1 w-18 xs:w-27"
        />
      </div>

      <Drawer
        open={isOpen}
        description="گفتگو های کاربر"
        onOpenChange={setIsOpen}
        side="bottom"
        title="برنامه سفر"
        className="h-[80dvh] w-full overflow-hidden rounded-t-3xl border-t bg-background shadow-[0_-18px_45px_rgba(0,0,0,0.1)] md:hidden"
      >
        <div className="flex h-full min-h-0 flex-col">
          <div className="min-h-0 flex-1">
            <TripPanelContent
              activeTabId={activeTabId}
              onClose={() => setIsOpen(false)}
            />
          </div>
        </div>
      </Drawer>
    </div>
  );
}
