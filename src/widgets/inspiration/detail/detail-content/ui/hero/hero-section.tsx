import Image from 'next/image';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { SaveInspirationButton } from '@features/inspiration/save-inspiration';
import { InspirationHeroData } from '@entities/travel-inspiration';
import { buildFileUrl } from '@shared/lib';
interface HeroSectionProps {
  data: InspirationHeroData;
  inspirationId: string;
}

export function HeroSection({ data, inspirationId }: HeroSectionProps) {
    const avatarUrl = buildFileUrl(data.author.avatar_url);
  
  return (
    <section className="relative min-h-[330px] overflow-hidden rounded-b-[28px]">
      {/* <Image
        src={`${data.coverImage}`}
        alt={data.title}
        fill
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      /> */}
      <Image
        src={data.coverImage}
        alt={data.title}
        fill
        unoptimized
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[330px] flex-col justify-end p-6 text-white md:px-7 py-4">
        {/* Actions */}
        <div className="absolute left-6 right-6 top-6 flex items-center justify-end">
          {/* <button
            type="button"
            className="rounded-full bg-black/35 px-5 py-2 text-sm backdrop-blur-md transition hover:bg-black/50"
          >
            ♡ ذخیره
          </button> */}
          <SaveInspirationButton
            inspirationId={inspirationId}
            isFavorited={data.isFavorited}
          />{' '}
        </div>

        {/* Main Info */}
        <div className="space-y-5">
          <h1 className="text-2xl font-black leading-10 md:text-3xl">
            {data.title}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-3">
            {data.author.avatar ? (
              <Image
                src={avatarUrl??'/images/avatars/default_av.png'}
                alt={data.author.name}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
              />
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                👤
              </div>
            )}

            <span className="font-bold">{data.author.name}</span>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-2 text-sm font-semibold">
            <div className="flex items-center">
              <MapPinIcon className="size-5" />
              <span> {data.location}</span>
              <span className="w-px h-3 inline-flex bg-background mx-2"></span>
              <span>{data.duration}</span>
            </div>

            <span>آخرین بروزرسانی: {data.updatedAt}</span>
          </div>
          {/* Customize */}
          {/* <button
            type="button"
            className="w-full rounded-full bg-white py-3 text-sm font-bold text-gray-800 transition hover:bg-gray-100"
          >
            ✈️ شخصی‌سازی این سفر
          </button> */}
        </div>
      </div>
    </section>
  );
}
