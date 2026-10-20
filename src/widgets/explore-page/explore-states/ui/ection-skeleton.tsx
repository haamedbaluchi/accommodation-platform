export function SectionSkeleton({ title }: { title?: string }) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="h-5 w-40 rounded-md bg-gray-200 animate-pulse" />
        <div className="h-4 w-16 rounded-md bg-gray-200 animate-pulse" />
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-2">
            <div className="h-[260px] w-full rounded-3xl bg-gray-200 animate-pulse" />
            <div className="h-4 w-3/4 rounded-md bg-gray-200 animate-pulse" />
            <div className="h-3 w-1/2 rounded-md bg-gray-200 animate-pulse" />
          </div>
        ))}
      </div>
    </section>
  );
}