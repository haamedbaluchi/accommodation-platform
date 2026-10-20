import { Chip } from '@shared/ui';
import { ItineraryStopTag } from '../../model/types';
import { cn } from '@shared/lib';

export function ItineraryTags({
  tags,
  className,
}: {
  tags: ItineraryStopTag[];
  className?: string;
}) {
  return (
    <div className={cn("flex gap-2 flex-nowrap overflow-x-auto overflow-y-hidden whitespace-nowrap no-scrollbar",className)}>
      {tags.map((tag) => (
        <Chip
          key={tag.id}
          text={`${tag.label}`}
          className="text-xs lg:text-xs xl:text-xs py-0.5 px-2 border-0 font-medium"
          variant="primary"
        />
      ))}
    </div>
  );
}
