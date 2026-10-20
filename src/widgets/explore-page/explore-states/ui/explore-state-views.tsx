import { Button } from '@shared/ui';

export function ExploreErrorState({ onRetry }: { onRetry?: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-20 text-center font-yekta">
      <span className="text-3xl">⚠️</span>
      <p className="text-sm sm:text-base text-text-main font-bold">
        مشکلی توی بارگذاری اطلاعات پیش اومد.
      </p>
      <p className="text-xs sm:text-sm text-text-foreground">
        لطفاً دوباره تلاش کن یا اتصال اینترنتت رو بررسی کن.
      </p>
      {onRetry && (
        <Button variant="outline" rounded="full" size="medium" onClick={onRetry}>
          تلاش دوباره
        </Button>
      )}
    </div>
  );
}

export function ExploreEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-20 text-center font-yekta">
      <span className="text-3xl">🧭</span>
      <p className="text-sm sm:text-base text-text-main font-bold">
        چیزی پیدا نشد.
      </p>
      <p className="text-xs sm:text-sm text-text-foreground">
        سرچ یا فیلتر دیگه‌ای رو امتحان کن.
      </p>
    </div>
  );
}