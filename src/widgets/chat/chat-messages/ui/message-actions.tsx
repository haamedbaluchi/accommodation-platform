'use client';

import { toast } from 'sonner';
import { Button, Tooltip } from '@shared/ui';
import { CopyIcon } from '@shared/assets/icons';
import { cn, copyToClipboard } from '@shared/lib';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

interface MessageActionsProps {
  content?: string;
  isUser: boolean;
  isError?: boolean;
  errorText?: string;
  onResend?: () => void;
}

export function MessageActions({
  content,
  isUser,
  isError,
  errorText,
  onResend,
}: MessageActionsProps) {
  if (!content) return null;

  return (
    <div className={cn("w-full flex items-center justify-start gap-2 opacity-100",isUser?"pr-0":"pr-6")}>
      <Tooltip content="کپی">
        <Button
          variant="ghost"
          size="icon"
          rounded="full"
          aria-label="کپی کردن پیام"
          className="h-8 w-8 text-muted-foreground hover:text-foreground"
          onClick={async () => {
            const success = await copyToClipboard(content);

            if (success) {
              toast.info('متن مورد نظر کپی شد.');
            } else {
              toast.error('کپی کردن متن انجام نشد.');
            }
          }}
        >
          <CopyIcon className="h-4 w-4" />
        </Button>
      </Tooltip>

      {isUser && isError && (
        <>
        <Tooltip content="ارسال مجدد">

          <Button
            variant="ghost"
            size="icon"
            rounded="full"
            type="button"
            aria-label="ارسال مجدد"
            onClick={onResend}
          >
           <ArrowPathIcon className="w-4 h-4 text-text-foreground"/>
          </Button>
            </Tooltip>

          <span className="text-xs text-text-danger font-yekta">
            {errorText ?? 'خطا در ارسال'}
          </span>
        </>
      )}
    </div>
  );
}
