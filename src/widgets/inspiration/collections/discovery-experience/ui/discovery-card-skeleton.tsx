export function DiscoveryCardSkeleton() {
  return (
    <div className="min-w-[420px] max-w-[852px] flex flex-col flex-1 animate-pulse">
      <div className="w-full h-[260px] rounded-3xl overflow-hidden bg-slate-200" />

      <div className="flex flex-col gap-3 pt-3">
        <div className="flex items-center justify-between">
          <div className="h-4 w-24 rounded-full bg-slate-200" />
          <div className="h-5 w-20 rounded-full bg-slate-200" />
        </div>

        <div className="flex items-center gap-2">
          <div className="size-7 rounded-full bg-slate-200" />
          <div className="h-4 w-28 rounded bg-slate-200" />
        </div>
      </div>
    </div>
  );
}