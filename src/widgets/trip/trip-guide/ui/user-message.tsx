import Ellips from '@shared/assets/icons/Ellipse 2.svg?url';
import Image from 'next/image';

export function UserMessage({ text }: { text: string }) {
  return (
    <div className="flex items-end gap-2 self-start" dir="ltr">
      <div
        className="bg-backgroun-secondary text-slate-800 border border-border-tertiary px-3 lg:px-4 py-1 md:py-2 lg:py-3 text-xs md:text-sm lg:text-base rounded-full rounded-br-sm max-w-[90%]"
        dir="rtl"
      >
        {text}
      </div>
      <div className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12">
        <Image src={Ellips} alt="پروفایل کاربر" fill />
      </div>
    </div>
  );
}
