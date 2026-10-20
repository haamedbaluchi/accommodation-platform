import { cn } from '@shared/lib';

export function Error500Header() {
  return (
    <>
      <h1
        className={cn(
          'font-extrabold leading-tight text-[#111111]',
          'text-base md:text-xl lg:text-3xl 2xl:text-5xl',
        )}
      >
        اوه! انگار یه چیزی توی سیستم گیر کرده
      </h1>

      <p
        className={cn(
          'mt-2 lg:mt-4 max-w-xl lg:max-w-2xl text-[#5F5F5F] leading-8 sm:leading-8  md:leading-9',
          'text-sm md:text-base lg:text-lg 2xl:text-xl',
        )}
      >
        تیم فنی بومرو متوجه مشکل شده و دارن سریع رفعش می‌کنن،
        <br className="hidden sm:block" />
        یه چند لحظه به ما فرصت بده
      </p>
    </>
  );
}
