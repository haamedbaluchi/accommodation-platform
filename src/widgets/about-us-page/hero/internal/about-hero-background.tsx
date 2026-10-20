'use client'
import Image from 'next/image';

export function AboutHeroBackground() {
  return (
    <>
      <div className="absolute inset-x-0 top-0 h-full sm:hidden">
        <Image
          src="/images/backgrounds/about-us-bg.png"
          alt="تصویر بیزینس موبایل"
          className="-z-10 object-cover object-center"
          fill
          quality={100}
          priority
        />
      </div>

      <div className="absolute inset-x-0 top-0 hidden h-[90vh] w-full overflow-hidden rounded-b-[80px] sm:block">
        <div className='w-full h-full bg-black/50 relative z-10' ></div>
        <Image
          src="/images/backgrounds/about-us-bg.png"
          alt="تصویر بیزینس"
          fill
          quality={100}
          priority
          className="object-cover object-top scale-105"
        />
      </div>
    </>
  );
}