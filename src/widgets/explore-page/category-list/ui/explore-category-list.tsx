'use client';

import { useEffect, useRef } from 'react';
import { Button, Loader } from '@shared/ui';
import { HugeiconsIcon } from '@hugeicons/react';
import { Back } from '@hugeicons/core-free-icons';
import { useRouter } from 'next/navigation';

interface ExploreCategoryListProps<T> {
  title: string;
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  isLoading: boolean;
  isFetchingNextPage: boolean;
  hasNextPage?: boolean;
  fetchNextPage: () => void;
}

export function ExploreCategoryList<T extends { id: string | number }>({
  title,
  items,
  renderItem,
  isLoading,
  isFetchingNextPage,
  hasNextPage,
  fetchNextPage,
}: ExploreCategoryListProps<T>) {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { rootMargin: '200px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <section className="px-7 py-6">
      <div className="flex items-center justify-between mb-2">
        <h2 className="mb-4 text-lg font-bold text-text-main font-yekta">
          {title}
        </h2>
        <Button
          variant={'ghost'}
          rounded={'full'}
          size={'medium'}
          leftIcon={<HugeiconsIcon icon={Back} onClick={() => router.back()} />}
        >
          بازگشت
        </Button>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-10">
          <Loader size={7} />
        </div>
      ) : items.length === 0 ? (
        <p className="text-sm text-text-foreground font-yekta py-10 text-center">
          موردی پیدا نشد.
        </p>
      ) : (
        <div
          //  className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          className="grid
          grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))]
          gap-4"
        >
          {items.map((item) => (
            <div key={item.id}>{renderItem(item)}</div>
          ))}
        </div>
      )}

      <div ref={sentinelRef} className="h-1" />

      {isFetchingNextPage && (
        <div className="flex justify-center py-6">
          <Loader size={5} />
        </div>
      )}
    </section>
  );
}
