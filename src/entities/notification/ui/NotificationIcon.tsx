import Image from 'next/image';
import { cn } from '@shared/lib';
import {type NotificationIcon } from '../model/types';

const ICON_IMAGES: Record<
  Exclude<NotificationIcon, 'none'>,
  { src: string; alt: string }
> = {
  plane: {
    src: '/images/airplane_notif.png',
    alt: 'Airplane Notification',
  },
  checklist: {
    src: '/images/buket_list_notif.png',
    alt: 'Checklist Notification',
  },
  building: {
    src: '/images/hotel_notif.png',
    alt: 'Hotel Notification',
  },
};

interface NotificationIconProps {
  icon: NotificationIcon;
  className?: string;
}

export function NotificationIcon({
  icon,
  className="",
}: NotificationIconProps) {
  if (icon === 'none') return null;

  const { src, alt } = ICON_IMAGES[icon];

  return (
    <div
      className={cn(
        'flex shrink-0 items-center justify-center',
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={48}
        height={48}
        className="h-12 w-12 object-contain"
      />
    </div>
  );
}