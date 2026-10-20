import { Button } from '@shared/ui';
import { ArrowUpLeftIcon } from '@heroicons/react/24/outline';

export function BusinessHeroMainContent() {
  return (
    <div className="flex flex-col items-center gap-4 px-6 text-center">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-xs text-white/80 sm:text-sm">
          شبکه هوشمند همکاری بومو
        </p>
        <div className="h-1 w-6 rounded-full bg-white" />
      </div>

      <h1 className="text-center text-xl font-black leading-relaxed text-white sm:text-2xl 2xl:text-4xl">
        <span className="mx-2 inline-flex items-center rounded-full bg-white px-4 py-2">
          <span className="inline-block bg-[url('/images/business-hero.svg')] bg-cover bg-center bg-clip-text leading-none text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            برند شما
          </span>
        </span>
        در لحظه تصمیم‌گیری <br />
        مسافر
        <span className="mx-2 inline-flex items-center rounded-full bg-white px-4 py-2">
          <span className="inline-block bg-[url('/images/business-hero.svg')] bg-cover bg-center bg-clip-text leading-none text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            دیده
          </span>
        </span>
        می‌شود
      </h1>

      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
        بومو کاربران را از ایده سفر تا ساخت برنامه کامل همراهی می‌کند. با
        پیوستن به شبکه همکاری بومو، خدمات، محتوا و تجربه‌های سفر شما در
        نقطه‌های دیده شدن مسافر آماده انتخاب است.
      </p>
{/* 
      <div className="mt-2 flex flex-col gap-4 sm:flex-row 2xl:mt-4">
        <Button
          type="submit"
          variant="primary"
          size="medium"
          rounded="full"
          className="w-full lg:h-13.75 lg:px-5 lg:py-1 lg:gap-2.5 lg:font-normal lg:text-lg"
        >
          مشاهده مدل‌های همکاری
        </Button>

        <Button
          variant="secondary"
          size="x_large"
          rounded="full"
          className="flex items-center gap-3 border border-white/20 bg-black/20 py-1.5 pl-1.5 pr-6 text-white backdrop-blur-md transition hover:bg-white/20"
        >
          <span>درخواست همکاری با بومو</span>

          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-neutral-7">
            <ArrowUpLeftIcon className="h-4 w-4" />
          </span>
        </Button>
      </div> */}
    </div>
  );
}
