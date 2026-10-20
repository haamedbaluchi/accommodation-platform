import Image from 'next/image';
import { cn } from '@shared/lib';
import { formatRelativeTime } from '../lib';
import { NotificationItem } from '../model/types';
import { NotificationIcon } from './NotificationIcon';

const BADGE_STYLES: Record<NotificationItem['category'], string> = {
  'trip-mate': 'bg-active-item-background text-primary',
  reminder: 'bg-backgroun-secondary text-[#BD6E00]',
  checklist: 'bg-success/10 text-success',
};

interface NotificationCardProps {
  notification: NotificationItem;
  onRead?: (id: string) => void;
}

export function NotificationCard({
  notification,
  onRead,
}: NotificationCardProps) {
  const {
    id,
    badgeLabel,
    message,
    actor,
    icon = 'none',
    createdAt,
    isRead,
    category,
  } = notification;

  return (
    <button
      type="button"
      onClick={() => onRead?.(id)}
      className={cn(
        'flex w-full items-start gap-3 rounded-xl px-3 py-3 text-right transition-colors hover:bg-gray-50',
        !isRead ?
          'relative before:content-[" "] before:w-1 before:h-full before:rounded-l-full before:absolute before:right-0 before:top-0 before:bg-amber-400':"",
      )}
    >
      {actor?.avatarUrl ? (
        <Image
          src={actor.avatarUrl}
          alt={actor.name}
          width={52}
          height={52}
          className="h-13 w-13 shrink-0 rounded-full object-cover"
        />
      ) : (
        <NotificationIcon icon={icon} />
      )}
      <div className="flex flex-1 flex-col items-start gap-1.5 font-yekta">
        <p className="text-sm md:text-base font-bold leading-6 text-text-main">
          {message}
        </p>
        <span className="text-xs md:text-sm font-medium text-text-foreground">
          {formatRelativeTime(createdAt)}
        </span>
      </div>
      <span
        className={cn(
          'rounded-md px-2 py-0.5 text-[11px] font-medium',
          BADGE_STYLES[category],
        )}
      >
        {badgeLabel}
      </span>
      {!isRead && (
        <span
          aria-label="نخوانده"
          className="mt-1 h-2 w-2 shrink-0 rounded-full bg-indigo-500"
        />
      )}
    </button>
  );
}
