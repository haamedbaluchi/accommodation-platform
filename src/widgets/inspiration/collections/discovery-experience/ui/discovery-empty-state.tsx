import { SparklesIcon } from '@heroicons/react/24/outline';

interface DiscoveryEmptyStateProps {
  title?: string;
  description?: string;
}

export function DiscoveryEmptyState({
  title = 'هنوز تجربه‌ای ثبت نشده',
  description = 'به محض اینکه سفرهای الهام‌بخش جدیدی اضافه بشن، همین‌جا نشونت می‌دیم.',
}: DiscoveryEmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 w-full py-16 text-center">
      <div className="flex items-center justify-center size-14 rounded-full bg-slate-100">
        <SparklesIcon className="size-6 text-slate-400" />
      </div>
      <h4 className="text-text-main font-bold text-base">{title}</h4>
      <p className="text-text-foreground text-sm font-medium max-w-[280px]">{description}</p>
    </div>
  );
}