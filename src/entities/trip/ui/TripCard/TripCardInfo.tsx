import { CardTitle } from '@shared/ui';
import { LocationIcon } from '@shared/assets/icons';

type TripCardInfoProps = {
  title: string;
  location: string;
  duration: string;
};

export function TripCardInfo({ title, location, duration }: TripCardInfoProps) {
  return (
    <div className="flex flex-col gap-1">
      <CardTitle className="text-base sm:text-lg md:text-xl font-bold">
        {title}
      </CardTitle>

      <div className="flex items-center gap-1.5 text-[0.625rem] sm:text-xs md:text-sm text-gray-200">
        <LocationIcon className="w-4 h-4 **:stroke-gray-300" />

        <span>{duration}</span>

        <span className="h-1 w-1 rounded-full bg-gray-400 opacity-50" />

        <span>{location}</span>
      </div>
    </div>
  );
}
