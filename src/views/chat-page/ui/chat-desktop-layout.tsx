import { Sidebar } from '@widgets/layout/sidebar';
import { ChatDrawer } from '@widgets/chat/chat-drawer';
import { DesktopTripPanel } from './desktop-trip-panel';
import { ChatHeaderDesktop } from '@widgets/chat/chat-header';
import { ChatListViewSection } from '@widgets/chat/chat-list';
import { PromptBarSection } from '@widgets/chat/prompt-bar-section';

export function ChatDesktopLayout() {
  return (
    // <div className="hidden h-dvh w-full flex-col md:flex md:flex-row">
<div className="hidden h-dvh w-full min-w-0 overflow-x-hidden md:flex md:flex-row">
    <Sidebar />

      <div className="flex h-full min-w-0 flex-1 flex-col">
        <ChatHeaderDesktop />

        <div className="flex min-h-0 flex-1">
          <div className="mx-auto flex min-h-0 min-w-0 flex-1 flex-col px-4 lg:px-7">
            <ChatListViewSection />

            <div className="self-center flex w-full max-w-130 justify-center lg:max-w-180 xl:max-w-230 2xl:max-w-300 pb-4">
              <PromptBarSection />
            </div>
          </div>

          <DesktopTripPanel />
        </div>
      </div>

      <ChatDrawer />
    </div>
  );
}
