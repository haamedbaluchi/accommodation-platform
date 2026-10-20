import { Button, Tooltip } from '@shared/ui';
import { SendButton } from './internal/SendButton';
import { ToolbarIconButton } from './internal/ToolbarIconButton';
import { MicIcon, MoreIcon, PlusIcon } from '@shared/assets/icons';

interface PromptToolbarProps {
  hasText: boolean;
  isLoading?: boolean;
  isPending?: boolean;
  onCancel?: () => void;
}

export function PromptToolbar({
  hasText,
  isLoading,
  isPending,
  onCancel,
}: PromptToolbarProps) {
  const isDisabled = isLoading ? false : !hasText || isPending;

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <SendButton
          onCancel={onCancel}
          isLoading={isLoading}
          isDisabled={isDisabled}
        />
        <ToolbarIconButton
          tooltip="ضبط صدا"
          icon={<MicIcon className="w-3 h-3 lg:w-5 lg:h-5" />}
        />
      </div>
      <div className="flex items-center gap-2">

        <ToolbarIconButton
          tooltip="افزودن فایل"
          icon={<PlusIcon className="w-3 h-3 lg:w-5 lg:h-5 text-gray-200" />}
        />

        <Tooltip content="ابزارها">
          <Button
            variant="ghost"
            size="x_large"
            rounded="full"
            disabled={true}
            className="px-1 lg:px-2 py-0 w-6 h-6 lg:w-auto lg:h-9 items-center text-text-main hover:text-text-main gap-0"
            rightIcon={<MoreIcon className="w-3 h-3 lg:w-4 lg:h-4" />}
          >
            <span className="hidden lg:flex">ابزارها</span>
          </Button>
        </Tooltip>
      </div>
    </div>
  );
}
