import { Button } from '@shared/ui';

type ProfileErrorProps = {
  onRetry: () => void;
};

export function ProfileError({
  onRetry,
}: ProfileErrorProps) {
  return (
    <main className="flex h-full flex-1 items-center justify-center px-6 text-center">
      <div className="max-w-sm space-y-4">
        <h2 className="text-lg font-bold text-text-main">
          دریافت اطلاعات پروفایل انجام نشد
        </h2>

        <p className="text-sm text-text-secondary">
          مشکلی در دریافت اطلاعات پیش آمده. لطفاً دوباره تلاش کنید.
        </p>

        <Button
          rounded="full"
          size="medium"
          onClick={onRetry}
        >
          تلاش دوباره
        </Button>
      </div>
    </main>
  );
}