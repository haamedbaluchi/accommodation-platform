import Image from 'next/image';
import { WhyBoomroItem } from '../../model/types';

interface BusinessWhyItemProps {
  item: WhyBoomroItem;
}

export function BusinessWhyItem({ item }: BusinessWhyItemProps) {
  const { number, title, description, icon: Icon } = item;

  return (
    <div className="flex flex-1 items-center justify-between gap-5 rounded-3xl border border-neutral-200 bg-white p-5 text-right shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-6">
      <div className="flex flex-1 items-start justify-start gap-3">
        <div>
          <div className="flex items-center justify-start gap-2">
            <span className="text-2xl font-black text-blue-tint-8 lg:text-4xl">
              {number}
            </span>

            <h3 className="text-base font-bold text-neutral-9 lg:text-xl">
              {title}
            </h3>
          </div>

          <p className="text-sm leading-7 text-neutral-8">{description}</p>
        </div>
      </div>

      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl sm:h-16 sm:w-16">
        <Image
          src={Icon}
          alt={title}
          width={48}
          height={48}
          className="h-12 w-12 object-contain"
        />
      </div>
    </div>
  );
}
