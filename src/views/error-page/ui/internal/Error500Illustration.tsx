import { cn } from '@shared/lib';
import Image from 'next/image';

export function Error500Illustration() {
  return (
    <Image
      src="/images/error_500.png"
      alt="500 Error"
      width={500}
      height={370}
      priority
      // className="h-auto w-full max-w-70 sm:max-w-90 md:max-w-112.5 lg:max-w-118 2xl:max-w-130  object-contain"
      className={cn(
              'h-auto w-full max-w-65',
              'sm:max-w-85 md:max-w-107.5 2xl:max-w-125',
              'object-contain',
            )}
    />
  );
}
