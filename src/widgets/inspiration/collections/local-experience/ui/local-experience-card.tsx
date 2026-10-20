import {
    MapPinIcon,
    StarIcon,
} from '@heroicons/react/24/outline';
import { Chip } from '@shared/ui';
import {
    CardMedia,
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardImage,
    CardOverlay,
    CardTitle,
} from '@shared/ui/Card';
import { LocalExperience } from '@entities/travel-inspiration';

type LocalExperienceCardViewProps = {
  experience: LocalExperience;
  actionsSlot?: React.ReactNode;
};

export function LocalExperienceCardView({
  experience,
  actionsSlot,
}: LocalExperienceCardViewProps) {
  return (
    <Card className="min-w-[420px] max-w-[852px] flex flex-col flex-1 rounded-none shadow-none">
      <CardMedia className="w-full h-[260px] rounded-3xl overflow-hidden flex flex-col">
        <CardImage src={experience.coverImage} alt={experience.title} />
        <CardOverlay />

        <CardHeader className="justify-end">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-black">
            {experience.badgeLabel}
          </span>
          {actionsSlot}
        </CardHeader>

        <CardContent className="gap-1 flex-1">
          <CardTitle className="text-xl">{experience.title}</CardTitle>
          <span className="text-xs text-gray-200 flex gap-1">
            <MapPinIcon className="size-3.5" />

            {experience.location}
          </span>
        </CardContent>
      </CardMedia>

      <CardFooter className="px-0 py-3">
        <div className="flex items-center gap-4 text-xs text-slate-500">
          <Chip
            text={`👥 ظرفیت : ${experience.capacityCount} نفر`}
            variant={'primary'}
            className="rounded-full border-0 px-5 py-0.75 text-sm"
          />
          <Chip
            text={`⏳ ${experience.durationHours} ساعت`}
            variant={'primary'}
            className="rounded-full border-0 px-5 py-0.75 text-sm"
          />
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <img
              src={'https://i.pravatar.cc/64?img=47'}
              alt=""
              className="size-7 rounded-full object-cover"
            />
            <span className="text-base font-medium text-slate-700">
              توسط: {experience.host.name}
            </span>
          </div>
          <span className="flex items-center gap-1 bg-success/8 text-success/80 rounded-full px-2 font-medium text-sm">
            {experience.rating}
            <StarIcon className="size-3.5 fill-yellow-400 text-yellow-400" />
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}
