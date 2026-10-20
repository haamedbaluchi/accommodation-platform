import { Button } from '@shared/ui';
import { mockLocalExperiences } from '../model/mock-data';
import { LocalExperienceCardView } from './local-experience-card';
import { ArrowDownLeftIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';

export function LocalExperienceSection() {
  return (
    <div className="px-7">
      <div className="flex items-center justify-between">
        <h3 className="text-text-main font-bold text-2xl pb-2">
          تجربه آدم‌های محلی
        </h3>
        <Button
          size="medium"
          variant="link"
          rounded="full"
          className="text-text-foreground"
          leftIcon={<ChevronLeftIcon className="size-3.5" />}
        >
          مشاهده همه
        </Button>
      </div>
      <div className="flex gap-3 flex-wrap ">
        {mockLocalExperiences.map((experience) => (
          <LocalExperienceCardView
            experience={experience}
            key={experience.id}
          />
        ))}
      </div>
    </div>
  );
}
