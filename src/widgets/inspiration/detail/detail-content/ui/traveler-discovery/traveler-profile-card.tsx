import Image from 'next/image';
import { Chip } from '@shared/ui/Chip';
import { Traveler, TravelerSpecialtyTag } from '../../model/types';
import { buildFileUrl, cn } from '@shared/lib';

type TravelerProfileCardViewProps = {
  traveler: Traveler;
  followSlot?: React.ReactNode;
};

export function TravelerProfileCardView({
  traveler,
  followSlot,
}: TravelerProfileCardViewProps) {
  const avatarUrl = buildFileUrl(traveler.avatarUrl);

  return (
    <div className="rounded-3xl border border-border-foreground bg-background p-3 lg:p-5 xl:p-7">
      <div className="flex items-start justify-between gap-2 md:gap-4 xl:gap-6 ">
        <div className="relative shrink-0 overflow-hidden rounded-full size-12 md:size-16 xl:size-25">
          <Image
            src={avatarUrl ?? '/images/avatars/default_av.png'}
            alt={traveler.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-1 flex-1 overflow-hidden">
          <div className="flex items-start justify-between">
            <div className="flex flex-col items-start gap-0 md:gap-1">
              <h3 className="text-sm md:text-lg xl:text-2xl font-bold text-text-main">
                {traveler.name}
              </h3>
              <span
                className="text-xs md:text-sm xl:text-base font-semibold text-text-foreground"
                dir="ltr"
              >
                @{traveler.username}
              </span>
            </div>
            <span className="rounded-full bg-amber-50 px-2 lg:px-4 py-0.5 lg:py-1.5 text-[0.625rem] md:text-xs lg:text-sm font-medium text-tertiary  ">
              {traveler.statusBadge}
            </span>
          </div>

          <TravelerTags
            specialties={traveler.specialties}
            className="hidden md:flex"
          />
        </div>
      </div>

      <TravelerTags
        specialties={traveler.specialties}
        className="flex md:hidden px-2 pt-2"
      />

      <div className="mt-5 text-xs md:text-sm xl:text-base font-bold">
        <h4 className="flex items-center gap-1.5 text-sm md:text-base xl:text-lg text-text-main">
          {traveler.bioTitleIcon && <span>{traveler.bioTitleIcon}</span>}
          {traveler.bioTitle}
        </h4>
        <p className="font-medium leading-8 text-text-foreground">
          «{traveler.bioQuote}»
        </p>
      </div>

      {/* <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a
          href={traveler.profileHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-amber-400 py-3 text-sm font-medium text-amber-600 transition-colors hover:bg-amber-50"
        >
          مشاهده پروفایل
        </a>

        {followSlot}
      </div> */}
    </div>
  );
}

export function TravelerTags({
  specialties,
  className,
}: {
  specialties: TravelerSpecialtyTag[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        'w-full flex flex-nowrap overflow-x-auto overflow-y-hidden whitespace-nowrap no-scrollbar items-center gap-3',
        className,
      )}
    >
      <span className="text-sm lg:text-base font-normal text-text-foreground">
        تخصص سفر:
      </span>
      {specialties.map((tag) => (
        <Chip
          key={tag.id}
          className="bg-emerald-50 text-success/80 border-0 py-0.5 px-2 text-xs md:text-sm xl:text-sm shrink-0"
          variant="primary"
          text={`${tag.icon}${tag.label}`}
        />
      ))}
    </div>
  );
}
