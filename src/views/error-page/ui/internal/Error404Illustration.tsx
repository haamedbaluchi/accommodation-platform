import { cn } from '@shared/lib';
import Image from 'next/image';

export function Error404Illustration() {
  return (
    <Image
      src="/images/error_404.png"
      alt="404 Error"
      width={500}
      height={370}
      priority
      className={cn(
        'h-auto w-full max-w-65',
        'sm:max-w-85 md:max-w-107.5 lg:max-w-112 2xl:max-w-125',
        'object-contain',
      )}
    />
  );
}
