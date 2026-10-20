import Image from 'next/image';
import { Button } from '@shared/ui';
import { PlusIcon } from '@heroicons/react/24/solid';

export function EmptyBookedList({
  imageAlt,
  title,
  description,
  btnTitle,
  handleClick,
}: {
  imageAlt: string;
  title: string;
  description: string;
  btnTitle: string;
  handleClick: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-100 md:130 xl:h-150">
      <div className="relative w-50 h-40 md:w-80 md:h-55 lg:w-40 lg:h-35 xl:w-100 xl:h-87.5">
        <Image src="/images/empty_flights.png" alt={imageAlt} fill />
      </div>
      <div className="font-yekta text-center space-y-2 md:space-y-3">
        <h4 className="font-black md:font-bold text-base md:text-lg lg:text-xl text-text-main">{title}</h4>
        <p className="font-medium text-xs sm:text-sm md:text-base lg:text-xl text-text-foreground">
          {description}
        </p>
      </div>

      <Button
        rounded="full"
        size="large"
        leftIcon={<PlusIcon className="w-4 h-4" />}
        className="mt-6 mx-auto"
        onClick={handleClick}
      >
        {btnTitle}
      </Button>
    </div>
  );
}
