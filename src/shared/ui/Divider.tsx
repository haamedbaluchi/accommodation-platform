import { cn } from '@shared/lib';

export function Divider({
  text,
  className,
}: {
  text?: string;
  className?: string;
}) {
  return (
    <div className={cn('flex items-center gap-2 md:gap-4 my-2', className)}>
      {text && (
        <span className="text-text-secondary text-xs md:text-base font-bold">{text}</span>
      )}
      <div className="flex-1 h-px bg-border-foreground"></div>
    </div>
  );
}
