import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

type GridSectionProps<T extends { id: string }> = {
  title: string;
  icon?: React.ReactNode;
  seeAllHref: string;
  items: T[];
  renderItem: (item: T) => React.ReactNode;
};

export function GridSection<T extends { id: string }>({
  title,
  icon,
  seeAllHref,
  items,
  renderItem,
}: GridSectionProps<T>) {
  return (
    <section className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon && <span className="text-2xl">{icon}</span>}

          <h3 className="text-text-main text-base sm:text-lg lg:text-2xl font-bold">
            {title}
          </h3>
        </div>

        <Link
          href={seeAllHref}
          className="flex items-center gap-1 text-xs sm:text-sm text-slate-500 transition-colors hover:text-slate-700"
        >
          مشاهده همه
          <ChevronLeftIcon className="size-4" />
        </Link>
      </div>

      {/* Grid */}
      <div
        className="
          grid
          grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))]
          gap-4
        "
      >
        {items.map((item) => (
          <div key={item.id} className="min-w-0">
            {renderItem(item)}
          </div>
        ))}
      </div>
    </section>
  );
}