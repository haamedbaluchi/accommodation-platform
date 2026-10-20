import { StarIcon } from '@heroicons/react/24/outline';
import { CheckInIcon, CheckOutIcon } from '@shared/assets/icons';
import { cn } from '@shared/lib';
import Image from 'next/image';
import { ReactNode } from 'react';

function BaseHotelCard({ children }: { children: ReactNode }) {
  return (
    <div className="border border-border-foreground pt-3 pr-3 pb-4 pl-4 rounded-3xl">
      {children}
    </div>
  );
}

function HotelThumbnail({
  src,
  alt,
  className="day",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className="w-25 lg:w-30 flex items-center justify-center relative rounded-xl overflow-hidden">
      <div className={cn('relative w-full h-25 lg:h-30', className)}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>
    </div>
  );
}

function HotelInfoContent({
  children,
  className="",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('w-full flex flex-col gap-1', className)}>
      {children}
    </div>
  );
}

function HotelTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between font-yekta font-bold">
      <h3 className="text-sm sm:text-base lg:text-xl text-text-main truncate">{title}</h3>
      <span className="text-[0.625rem] sm:text-xs text-success bg-success/10 px-2 py-1 rounded-full">
        رزرو قطعی
      </span>
    </div>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="relative inline w-15 sm:w-20 text-text-secondary " dir="rtl">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((index) => (
          <StarIcon key={index * 45} className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
        ))}
      </div>
      <div
        className="absolute top-0 left-0 h-full flex overflow-hidden text-yellow-400"
        style={{ width: `${rating * 20}%` }}
      >
        {[1, 2, 3, 4, 5].map((index) => (
          <StarIcon
            key={index}
            className="w-3 h-3 sm:w-4 sm:h-4 fill-current shrink-0"
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  );
}

function RoomDetails({ content }: { content: string }) {
  return (
    <p className="text-start font-medium text-[0.625rem] sm:text-xs text-text-foreground font-yekta">
      {content}
    </p>
  );
}

function StayTimelineContent({
  checkInDate,
  checkOutDate,
}: {
  checkInDate: string;
  checkOutDate: string;
}) {
  return (
    <div className="w-full flex items-center justify-between gap-1 sm:gap-3 lg:gap-5 font-yekta mt-1">
      <div className="flex items-center gap-1">
        <CheckInIcon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 flex items-center" />
        <div className=" w-full font-bold font-yekta">
          <span className="block text-text-foreground text-[0.625rem] sm:text-xs">تاریخ ورود</span>
          <span className="block text-text-main text-xs sm:text-sm">{checkInDate}</span>
        </div>
      </div>

      <div className="flex-1 flex items-center">
        <span className="inline-flex w-1.5 h-1.5 rounded-full bg-text-secondary"></span>
        <div className="w-full block border-t border-dashed border-text-secondary"></div>
        <span className="inline-flex w-1.5 h-1.5 rounded-full bg-text-secondary"></span>
      </div>

      <div className="flex items-center gap-1">
        <CheckOutIcon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 flex items-center" />
        <div className="font-bold font-yekta">
          <span className="block text-text-foreground text-[0.625rem] sm:text-xs">تاریخ خروج</span>
          <span className="block text-text-main text-xs sm:text-sm">{checkOutDate}</span>
        </div>
      </div>
    </div>
  );
}

function CardActions({ children }: { children: ReactNode }) {
  return <div className="w-full flex items-center gap-1">{children}</div>;
}

export const BookedCard = Object.assign(BaseHotelCard, {
  HotelInfo: HotelInfoContent,
  Thumbnail: HotelThumbnail,
  Title: HotelTitle,
  Rating: StarRating,
  Details: RoomDetails,
  StayTimeline: StayTimelineContent,
  Actions: CardActions,
});
