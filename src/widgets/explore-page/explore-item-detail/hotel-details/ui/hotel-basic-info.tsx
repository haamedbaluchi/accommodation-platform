import { StarIcon } from '@heroicons/react/24/solid';
import { CommentIcon, LocationIcon } from '@shared/assets/icons';

interface HotelBasicInfoProps {
  title: string;
  badgeLabel: string;
  rating: string;
  shortAddress: string;
  commentsCount: string;
}

export function HotelBasicInfo({
  title,
  badgeLabel,
  rating,
  shortAddress,
  commentsCount,
}: HotelBasicInfoProps) {
  return (
    <div>
      <h2 className="font-bold text-base sm:text-lg md:text-xl font-yekta text-primary-active">
        {title}
      </h2>

      <div className="flex items-center gap-3 my-1">
        <div className="flex items-center gap-1 text-text-main font-yekta">
          <StarIcon className="w-3 h-3" />
          <span className="text-xs md:text-sm font-bold">{rating}</span>
        </div>

        <div className="flex items-center gap-1 text-text-main text-xs sm:text-sm md:text-base font-yekta border-x px-3 border-text-accent/50">
          <CommentIcon className="w-3 h-3 md:w-4 md:h-4" />
          <span>{commentsCount}نظر</span>
        </div>

        <div className="flex items-center gap-1 text-text-main font-yekta text-xs sm:text-sm md:text-base">
          <LocationIcon className="w-3 h-3 md:w-4 md:h-4" />
          <span>{shortAddress}</span>
        </div>
      </div>

      <span className="rounded-full bg-text-muted-foreground px-3 py-1 text-xs font-medium text-text-main font-yekta">
        {badgeLabel}
      </span>
    </div>
  );
}