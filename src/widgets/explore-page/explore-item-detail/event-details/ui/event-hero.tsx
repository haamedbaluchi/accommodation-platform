import Image from 'next/image';
import { ClockIcon } from '@shared/assets/icons';
import { CalendarIcon, X } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { Button } from '@shared/ui';

interface EventHeroProps {
  coverImage: string;
  dateDay: string;
  dateMonth: string;
  dateWeekday: string;
  timeLabel: string;
  title: string;
  onClose: VoidFunction|undefined;
  categoryLabel: string;
}

export function EventHero({
  coverImage,
  dateDay,
  dateMonth,
  dateWeekday,
  timeLabel,
  title,
  onClose,
  categoryLabel,
}: EventHeroProps) {
  return (
    <section className="pb-5 border-b border-dashed border-text-muted-foreground">
      <div className="relative w-full h-60 sm:h-72 md:h-80 rounded-t-2xl md:rounded-tr-2xl overflow-hidden">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 740px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <Button
          variant={'outline'}
          rounded={'full'}
          size={'icon'}
          aria-label="بستن جزییات"
          onClick={()=>onClose?.()}
          className="absolute top-3 right-3.5 bg-transparent border-white text-white hover:text-white hover:border-white "
        >
          <HugeiconsIcon icon={X} />
        </Button>
        <div className="absolute bottom-14 right-4 left-4 flex flex-col gap-2.5 text-white font-yekta">
          <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-200">
            <div className="flex flex-col items-center rounded-2xl p-2 text-2xl font-bold text-white">
              <span className="leading-none">{dateDay}</span>

              <span className="text-base">{dateMonth}</span>
            </div>

            <div>
              <span className="text-xl font-bold text-white">
                {dateWeekday},{dateDay}
                {dateMonth}
              </span>
              <span className="text-2xl font-bold text-white flex items-center gap-1">
                {timeLabel}
              </span>
            </div>
          </div>

          <h2 className="text-lg sm:text-xl md:text-3xl font-bold">{title}</h2>
        </div>

        <div className="absolute bottom-4 right-4">
          <span className="rounded-full bg-black/80 backdrop-blur-2xl px-3 py-1 text-sm font-medium text-white font-yekta">
            {categoryLabel}
          </span>
        </div>
      </div>
    </section>
  );
}
// <HugeiconsIcon icon={CalendarIcon} className="w-4 h-4" />
