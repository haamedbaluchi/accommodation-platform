import { Button } from '@shared/ui';

interface OtpResendSectionProps {
  isRunning: boolean;
  timeLeft: number;
  formatTime: (seconds: number) => string;
  isDisabled: boolean;
  onResend: () => void;
}

export function OtpResendSection({
  isRunning,
  timeLeft,
  formatTime,
  isDisabled,
  onResend,
}: OtpResendSectionProps) {
  return (
    <div className="mt-10 flex h-10 w-86 items-center">
      {isRunning ? (
        <span className="w-full self-center text-center font-yekta text-sm font-medium text-text-secondary md:text-base">
          <span className="text-primary">{formatTime(timeLeft)}</span> ثانیه تا
          ارسال مجدد کد
        </span>
      ) : (
        <Button
          type="button"
          rounded="full"
          size="medium"
          className="flex-1"
          disabled={isDisabled}
          onClick={onResend}
        >
          ارسال مجدد کد
        </Button>
      )}
    </div>
  );
}
