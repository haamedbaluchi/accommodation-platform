// widgets/place/location-details/ui/location-details-skeleton.tsx
export function LocationDetailsSkeleton() {
  return (
    <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 p-7 animate-pulse">
      {/* Basic info */}
      <div className="flex flex-col gap-2">
        <div className="h-5 w-40 rounded bg-slate-200" />
        <div className="flex items-center gap-3">
          <div className="h-4 w-16 rounded bg-slate-200" />
          <div className="h-4 w-20 rounded bg-slate-200" />
          <div className="h-4 w-24 rounded bg-slate-200" />
        </div>
        <div className="h-4 w-28 rounded bg-slate-200" />
      </div>

      {/* Gallery */}
      <div className="h-40 xs:h-60.5 w-full rounded-2xl bg-slate-200" />

      {/* Key info chips */}
      <div className="flex items-center gap-2 flex-wrap">
        <div className="h-8 w-32 rounded-full bg-slate-200" />
        <div className="h-8 w-28 rounded-full bg-slate-200" />
        <div className="h-8 w-24 rounded-full bg-slate-200" />
      </div>

      {/* Overview tabs + text */}
      <div className="flex flex-col gap-3 items-center">
        <div className="h-9 w-full max-w-xs rounded-full bg-slate-200" />
        <div className="h-4 w-full rounded bg-slate-200" />
        <div className="h-4 w-full rounded bg-slate-200" />
        <div className="h-4 w-3/4 rounded bg-slate-200" />
      </div>

      {/* Map */}
      <div className="h-75 sm:h-100 md:h-138 w-full rounded-2xl bg-slate-200" />
    </div>
  );
}