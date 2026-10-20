import Image from 'next/image';

export function HeroBackground() {
  return (
    <>
      <div className="absolute inset-x-0 top-0 h-[70vh] sm:hidden">
        <Image
          src="/images/bg-home.svg"
          alt="تصویر صفحه اصلی موبایل"
          className="-z-10 object-cover object-center"
          fill
          quality={100}
          priority
        />
      </div>
      {/* Desktop Background */}
      <div className="absolute inset-x-0 top-0 hidden h-[70vh] sm:block">
        <Image
          src="/images/bg-home.svg"
          alt="تصویر صفحه اصلی"
          className="-z-10 object-cover object-top"
          fill
          quality={100}
          priority
        />
      </div>
    </>
  );
}
