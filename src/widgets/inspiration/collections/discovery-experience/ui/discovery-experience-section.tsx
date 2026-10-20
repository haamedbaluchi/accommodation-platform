import { DestinationExperience } from '@entities/travel-inspiration';
import { Button } from '@shared/ui';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { DiscoveryCardView } from './discovery-card-view';
import { DiscoveryCardSkeleton } from './discovery-card-skeleton';
import { DiscoveryEmptyState } from './discovery-empty-state';

interface DiscoveryExperienceSectionProps {
  destinations: DestinationExperience[];
  isLoading?: boolean;
}

const SKELETON_COUNT = 3;

export function DiscoveryExperienceSection({
  destinations,
  isLoading = false,
}: DiscoveryExperienceSectionProps) {
  return (
    <div className="px-7">
      <div className="flex items-center justify-between">
        <h3 className="text-text-main font-bold text-base sm:ext-lg lg:text-2xl pb-2">تجربه آدم‌های محلی</h3>
        {/* <Button
          size="medium"
          variant="link"
          rounded="full"
          className="text-text-foreground"
          leftIcon={<ChevronLeftIcon className="size-3.5" />}
        >
          مشاهده همه
        </Button> */}
      </div>

      <div className="flex gap-3 flex-wrap">
        {isLoading ? (
          Array.from({ length: SKELETON_COUNT }).map((_, index) => (
            <DiscoveryCardSkeleton key={index} />
          ))
        ) : destinations.length === 0 ? (
          <DiscoveryEmptyState />
        ) : (
          destinations.map((destination) => (
            <DiscoveryCardView destination={destination} key={destination.id} />
          ))
        )}
      </div>
    </div>
  );
}