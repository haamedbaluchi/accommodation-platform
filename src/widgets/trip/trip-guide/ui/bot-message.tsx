import  ChatBotAv  from '@shared/assets/icons/chat_bot_profile.svg?url';
import Image from 'next/image';

export function BotMessage({ text }: { text: string }) {
  return (
    <div className="flex items-end gap-2 self-end flex-row-reverse">
      <div className="relative w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12">
        <Image src={ChatBotAv} alt="بومرو پروفایل" fill />
      </div>

      <div
        className="bg-active-item-background text-slate-800 border border-border-active-item px-3 lg:px-4 py-1 md:py-2 lg:py-3 text-xs sm:text-xs md:text-sm lg:text-base font-normal rounded-full rounded-bl-sm max-w-[90%]"
        dir="rtl"
      >
        {text}
      </div>
    </div>
  );
}
