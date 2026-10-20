
export function NotificationListSkeleton() {
  return (
    <div className="flex flex-col gap-3 px-3 py-2">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex animate-pulse items-start gap-3">
          <div className="flex-1 space-y-2">
            <div className="h-4 w-16 rounded bg-gray-100" />
            <div className="h-4 w-full rounded bg-gray-100" />
            <div className="h-3 w-10 rounded bg-gray-100" />
          </div>
          <div className="h-10 w-10 shrink-0 rounded-full bg-gray-100" />
        </div>
      ))}
    </div>
  );
}

export function NotificationEmptyState() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-2 px-6 py-16 text-center">
      <span className="text-3xl">🔔</span>
      <p className="text-sm font-medium text-gray-600">اعلانی برای نمایش نیست</p>
      <p className="text-xs text-gray-400">با شروع فعالیت در سفرهات، اعلان‌های جدید اینجا نشون داده می‌شن.</p>
    </div>
  );
}

export function NotificationErrorState({ message }: { message: string }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-2 px-6 py-16 text-center">
      <span className="text-3xl">⚠️</span>
      <p className="text-sm font-medium text-gray-600">{message}</p>
    </div>
  );
}