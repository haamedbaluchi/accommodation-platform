import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

type HorizontalSectionProps<T extends { id: string }> = {
  title: string;
  icon?: React.ReactNode;
  seeAllHref: string;
  items: T[];
  renderItem: (item: T) => React.ReactNode;
};

export function HorizontalSection<T extends { id: string }>({
  title,
  icon,
  seeAllHref,
  items,
  renderItem,
}: HorizontalSectionProps<T>) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className='text-2xl'>{icon}</span>
          <h3 className="text-text-main font-bold text-2xl">{title}</h3>
        </div>
        <Link
          href={seeAllHref}
          className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-700"
        >
          مشاهده همه
          <ChevronLeftIcon className="size-4" />
        </Link>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {items.map((item) => (
          <div key={item.id} className="min-w-[280px] shrink-0">
            {renderItem(item)}
          </div>
        ))}
      </div>
    </section>
  );
}
