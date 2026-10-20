import { cn } from '@shared/lib';

export function Error404Header() {
  return (
    <>
      <h1
        className={cn(
          'font-extrabold leading-tight text-[#111111]',
          'text-base sm:text-xl lg:text-3xl 2xl:text-5xl',
        )}
      >
        اوه! انگار راه رو اشتباه اومدی
      </h1>

      <p
        className={cn(
          'mt-4 max-w-xl text-[#5F5F5F]',
          "leading-8 sm:leading-8 md:leading-9",
          'text-sm md:text-base lg:text-lg  2xl:text-xl',
        )}
      >
        به نظر می‌رسه چیزی که دنبالش بودی، به سفر دیگه‌ای رفته...
        <br className="hidden sm:block" />
        بیا برگردیم عقب
      </p>
    </>
  );
}
