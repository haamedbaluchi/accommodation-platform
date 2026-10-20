import { UserIcon } from '@heroicons/react/24/outline';
import { Button } from '@shared/ui';

interface GuestActionsProps {
  variant: 'light' | 'blue';
  openAuthModal: () => void;
}

export function GuestActions({ variant, openAuthModal }: GuestActionsProps) {
  return (
    <Button
      size="small"
      rounded="full"
      variant="outline"
      rightIcon={<UserIcon className="w-4 h-4" />}
      onClick={openAuthModal}
      className={
        variant === 'light'
          ? 'border-white text-white bg-transparent'
          : 'border-blue-tint-8 text-blue-tint-8'
      }
    >
      ورود
    </Button>
  );
}
