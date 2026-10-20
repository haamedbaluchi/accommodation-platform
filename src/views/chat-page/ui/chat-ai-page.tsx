import { ChatDesktopLayout } from "./chat-desktop-layout";
import { ChatMobileLayout } from "./chat-mobile-layout";
import  ChatSyncProvider  from "./chat-sync-provider";

export default function ChatAiPage() {
  return (
    <ChatSyncProvider>
      <ChatDesktopLayout />
      <ChatMobileLayout />
    </ChatSyncProvider>
  );
}