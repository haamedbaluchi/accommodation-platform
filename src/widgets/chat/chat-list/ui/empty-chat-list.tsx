import Image from 'next/image';
import React from 'react';

export function EmptyChatList() {
  return (
    <div className="h-[80%] flex flex-col items-center justify-center font-yekta">
      <div className="relative w-48 h-48 md:w-54 md:h-54 xl:w-64 xl:h-64 2xl:w-87.5 2xl:h-87.5">
        <Image
          src={'/images/chat_empty.svg'}
          alt="ai picture"
          fill
          className="object-contain"
        />
      </div>
      <h4 className="text-text-main font-black text-sm md:text-base lg:text-lg xl:text-2xl 2xl:text-4xl ">
        امروز کجا می‌خوای بری؟
      </h4>
      <p className="text-text-foreground font-normal text-sm lg:text-base 2xl:text-2xl text-center mt-1">
        من اینجام تا برای برنامه‌ریزی سفرت کمکت کنم.
        <br className='flex lg:hidden 2xl:flex'/>
        هر سؤال و ایده‌ای درباره سفر داری، بپرس.
      </p>
    </div>
  );
}
