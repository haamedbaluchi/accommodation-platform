import { Button } from '@shared/ui';
import { ArrowUpLeftIcon } from '@heroicons/react/24/outline';

export function AboutHeroMainContent() {
  return (
    <div className="flex flex-col items-center gap-4 px-6 text-center flex-1 justify-center">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-xs text-white sm:text-sm">از ایده تا بومو </p>
        <div className="h-1 w-6 rounded-full bg-white" />
      </div>

      <h1 className="text-center text-xl font-black leading-relaxed text-white sm:text-2xl 2xl:text-4xl">
          ما
        <span className="mx-2 inline-flex items-center rounded-full bg-white px-4 py-1">
          <span className="inline-block bg-[url('/images/business-hero.svg')] bg-cover bg-center bg-clip-text leading-none text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            بومو
          </span>
        </span>
        را ساختیم تا سفر،
        <br />
        از همان
        <span className="mx-2 inline-flex items-center rounded-full bg-white px-4 py-1">
          <span className="inline-block bg-[url('/images/business-hero.svg')] bg-cover bg-center bg-clip-text leading-none text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            لحظه تصمیم گیری
          </span>
        </span>
        راحت‌ شروع بشه{' '}
      </h1>

      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white sm:text-base">
        بومو یک همراه هوشمند سفر است؛ جایی که زمان، بودجه و سبک سفرت را می‌فهمد
        و کمک می‌کند مقصد، پرواز، اقامتگاه و برنامه‌ای را پیدا کنی که واقعاً به
        تو می‌خورد.
      </p>

      {/* <div className="mt-2 flex flex-col gap-4 sm:flex-row 2xl:mt-4">
        <Button
          type="submit"
          variant="secondary"
          size="medium"
          rounded="full"
          className="w-full lg:h-13.5 lg:px-5 lg:py-1 lg:gap-2.5 lg:font-normal lg:text-lg bg-white hover:white"
        >
          درخواست همکاری با بومو
        </Button>

        <Button
          variant="secondary"
          size="medium"
          rounded="full"
          className="lg:h-13.5 pl-0 lg:pr-5 lg:py-1 flex items-center gap-3 border border-white/20 bg-black/20 py-1.5 pl-1.5 pr-6 text-white backdrop-blur-md transition hover:bg-white/20"
        >
          <span>شروع یک سفر جدید</span>

          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-neutral-7">
            <ArrowUpLeftIcon className="h-4 w-4" />
          </span>
        </Button>
      </div> */}
    </div>
  );
}
