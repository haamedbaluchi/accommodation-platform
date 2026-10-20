import { LoginIcon } from '@shared/assets/icons';
import { cn } from '@shared/lib';

interface GuestContentProps {
  onLogin?: () => void;
  onStartHosting?: () => void;
}

export function GuestContent({
  onLogin,
  onStartHosting,
}: GuestContentProps) {
  return (
    <div className="px-4 py-4">
      <div className="flex flex-col gap-3">
        <button
          type="button"
          onClick={onLogin}
          className={cn(
            'flex h-11 w-full items-center justify-center gap-2 rounded-full',
            'border border-neutral-300 bg-white text-sm font-medium text-neutral-700',
            'transition hover:border-neutral-400 hover:bg-neutral-50',
          )}
        >
          <LoginIcon className="size-4" />
          ورود
        </button>

        <button
          type="button"
          onClick={onStartHosting}
          className={cn(
            'flex h-11 w-full items-center justify-center gap-2 rounded-full',
            'bg-neutral-900 text-sm font-medium text-white',
            'transition hover:bg-neutral-800',
          )}
        >
          همین حالا شروع کن
        </button>
      </div>
    </div>
  );
}