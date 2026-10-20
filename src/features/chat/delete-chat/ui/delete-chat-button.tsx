import { LoaderCircle, Trash } from '@hugeicons/core-free-icons';
import { HugeiconsIcon, IconSvgElement } from '@hugeicons/react';
import { Button } from '@shared/ui';
import { useDeleteChat } from '../model/use-delete-chat';
import { cn } from '@shared/lib';
import { toast } from 'sonner';
import { useQueryClient } from '@tanstack/react-query';

export function DeleteChatButton({
  chatId,
  onDelete,
}: {
  chatId: string;
  onDelete?: VoidFunction;
}) {
  const { mutate, isPending } = useDeleteChat();
  const queryClient = useQueryClient();
  const icon: IconSvgElement = isPending ? LoaderCircle : Trash;

  return (
    <Button
      variant="ghost"
      rounded="full"
      size="icon-sm"
      aria-label="حذف چت"
      disabled={isPending}
      className="text-error/70 hover:text-error hover:bg-error/5 z-10" 
      onClick={(e) => {
        e.stopPropagation(); 
        mutate(
          { chatId },
          {
            onSuccess: () => {
              queryClient.invalidateQueries({ queryKey: ['chat', 'list'] });
              onDelete?.(); 
            },
            onError: () => toast.error('مشکلی در حذف گفتوگو رخ داد!'),
          },
        );
      }}
    >
      <HugeiconsIcon
        icon={icon}
        aria-hidden="true"
        className={cn(isPending && 'animate-spin')}
      />
    </Button>
  );
}
