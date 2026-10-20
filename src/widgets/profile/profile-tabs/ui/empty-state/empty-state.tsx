import Image from 'next/image';
import { ReactNode } from 'react';

type EmptyStateProps = {
  title: string;
  description: string;
  imageUrl: string;
  action: ReactNode;
};

export function EmptyState({
  title,
  description,
  imageUrl,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center overflow-y-auto px-3 pt-2.5 pb-9 text-center sm:pt-5 lg:pt-9 2xl:pt-12">
      <div className="relative mb-5 h-13.5 w-16 sm:h-30 sm:w-35 2xl:h-36 2xl:w-41">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-contain"
        />
      </div>

      <h3 className="text-sm font-black text-text-main sm:text-base lg:text-lg 2xl:text-2xl">
        {title}
      </h3>

      <p className="mt-2 max-w-120 text-xs leading-7 text-text-foreground sm:text-sm lg:text-base 2xl:text-xl">
        {description}
      </p>

      <div className="mt-6">
        {action}
      </div>
    </div>
  );
}