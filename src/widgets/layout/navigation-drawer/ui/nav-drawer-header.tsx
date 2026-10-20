import { XCircleIcon } from '@heroicons/react/24/outline';
import { Button } from '@shared/ui';
import Image from 'next/image';

export function NavDrawerHeader({
  onClose,
}: {
  onClose: (isOpen: boolean) => void;
}) {
  return (
    <div className="px-2 pb-6 pt-5 flex items-center justify-between">
      <Image
        src="/images/logos/black.svg"
        alt="بومرو لوگو"
        width={120}
        height={40}
        style={{ height: '40px', width: 'auto' ,paddingRight:"5px"}}
      />
      <Button
        variant="ghost"
        rounded="full"
        size="icon"
        aria-label="بستن منو"
        className="flex sm:hidden h-12 w-12"
        onClick={() => onClose(false)}
      >
        <XCircleIcon className="w-7 h-7 text-text-main" />
      </Button>
    </div>
  );
}
