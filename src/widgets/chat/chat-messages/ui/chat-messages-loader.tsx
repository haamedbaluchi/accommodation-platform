import { Loader } from '@shared/ui';

export function ChatMessagesLoader() {
  return (
    <div className="flex h-full min-h-75 items-center justify-center">
      <Loader size={8} />
    </div>
  );
}
