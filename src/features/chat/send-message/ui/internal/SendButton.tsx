import { Button, Tooltip } from '@shared/ui';
import { ArrowUpIcon, PauseIcon } from '@heroicons/react/24/outline';

interface SendButtonProps {
  isLoading?: boolean;
  isDisabled?: boolean;
  onCancel?: VoidFunction;
}

export function SendButton({
  isLoading,
  onCancel,
  isDisabled,
}: SendButtonProps) {
  return (
    <Tooltip content={isLoading ? 'توقف پاسخ' : 'ارسال پیام'}>
      <Button
        rounded="full"
        aria-label={isLoading ? 'توقف پاسخ' : 'ارسال پیام'}
        type={isLoading ? 'button' : 'submit'}
        onClick={isLoading ? onCancel : undefined}
        variant="secondary"
        disabled={isDisabled}
        size="icon"
        className="w-7 h-7 md:w-10 md:h-10 bg-[#00204D] disabled:bg-accent disabled:text-text-foreground text-white  hover:bg-[#00204D] active:bg-[#00204D]"
      >
        {isLoading ? (
          <PauseIcon className="w-4 h-4 lg:w-6 lg:h-6 " />
        ) : (
          <ArrowUpIcon className="w-4 h-4 lg:w-5 lg:h-5.5 " />
        )}
      </Button>
    </Tooltip>
  );
}
