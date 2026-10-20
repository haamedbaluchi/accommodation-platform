import { cn } from '@shared/lib';
export function ComingSoonHeader() {
  return (
    <>
      <h1 className="mb-2 lg:mb-4 text-2xl font-extrabold leading-tight text-text-main sm:text-lg lg:text-2xl 2xl:text-4xl">
        اینجا فعلاً خالیه، ولی نه برای همیشه!
      </h1>

      <p
        className={cn(
          'max-w-md sm:max-w-3xl lg:max-w-5xl text-text-foreground',
          'leading-8 sm:leading-9 md:leading-10 ',
          'text-sm  md:text-base lg:text-xl 2xl:text-2xl',
        )}
      >
        این بخش از بومرو فعلا در حال ساخته شدنه, منتظر ویژگی ها و آپدیت های خفن
        از تیم بومرو باش.
      </p>
    </>
  );
}
