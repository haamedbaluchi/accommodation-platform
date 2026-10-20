import { DestinationExperience } from '@entities/travel-inspiration';
import { MapPinIcon } from '@heroicons/react/24/outline';
import {
  Card,
  CardMedia,
  CardImage,
  CardOverlay,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
  CardTag,
  CardBadgeList,
} from '@shared/ui/Card';
import { getCategoryToneClass } from '../model/category-appearance';
import Link from 'next/link';
import { buildFileUrl } from '@shared/lib';
import Image from 'next/image';

type DiscoveryCardViewProps = {
  destination: DestinationExperience;
  actionsSlot?: React.ReactNode;
};

export function DiscoveryCardView({
  destination,
  actionsSlot,
}: DiscoveryCardViewProps) {
  const avatarUrl = buildFileUrl(destination.author_image);

  return (
    <Card className="min-w-full max-w-full sm:min-w-[420px] sm:max-w-[852px] flex flex-col flex-1 rounded-none shadow-none">
      <CardMedia className="w-full h-[185px] rounded-3xl overflow-hidden flex flex-col sm:h-[260px]">
        <CardImage src={destination.coverImage} alt={destination.title} />
        <CardOverlay />

        <CardHeader className="justify-end">
          <CardBadgeList className="bg-black/0 backdrop-blur-none px-1 md:px-3 py-px md:py-1.5">
            <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-black">
              {destination.tags[1]}
            </span>
          </CardBadgeList>
          {actionsSlot}
        </CardHeader>
        <CardContent>
          <Link href={`/inspiration/collections/${destination.id}`}>
            <CardTitle className='text-sm md:text-base lg:text-2xl line-clamp-2'>{destination.title}</CardTitle>
            <CardDescription className='block max-w-100 truncate'>{destination.description}</CardDescription>
          </Link>
        </CardContent>
      </CardMedia>

      <CardFooter>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 text-xs sm:text-sm md:text-base font-medium text-slate-500">
            <MapPinIcon className="size-4.5" />
            {destination.location}
          </span>

          <CardTag className={getCategoryToneClass(destination.category)}>
            {destination.category}
          </CardTag>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src={avatarUrl ?? '/images/avatars/default_av.png'}
            alt={destination.author.name}
            width={28}
            height={28}
            className="size-7 rounded-full object-cover"
          />
          <span className="text-base font-medium text-slate-700">
            {destination.author.name}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}