'use client';
import { useEffect, useState } from 'react';
import { cn } from '@shared/lib';
import { Chip } from '@shared/ui';
import { useRouter } from 'next/navigation';
import { PromptBar } from '@features/chat/send-message';
import { MoneyBagIcon, TripsIcon } from '@shared/assets/icons';
import { usePendingPromptStore } from '@entities/chat';

const SUGGESTION_CHIPS = [
  {
    text: 'برنامه سفر 5 روزه به اصفهان برای یک خانواده 3 نفره',
    icon: TripsIcon,
    className: 'text-white bg-black/20 lg:flex md:hidden flex',
  },
  {
    text: 'غذاهای محلی جنوب که حتماً باید امتحان کنم',
    icon: TripsIcon,
    className: 'text-white bg-black/20 lg:flex md:hidden flex',
  },
  {
    text: 'مقایسه هزینه‌های سفر به قشم در مقابل کیش',
    icon: MoneyBagIcon,
    className: 'text-white bg-black/20 2xl:flex md:hidden flex',
  },
];

export function HeroPrompt() {
  const enqueuePendingPrompt = usePendingPromptStore(
    (state) => state.enqueuePendingPrompt,
  );
  const router = useRouter();

  const [promptValue, setPromptValue] = useState('');
  const [chipsVisible, setChipsVisible] = useState(true);
  const [chipsMounted, setChipsMounted] = useState(true);

  const handleChipClick = (text: string) => {
    setPromptValue(text);
  };

  const handlePromptValueChange = (value: string) => {
    setChipsVisible(value.trim().length === 0);
  };

  useEffect(() => {
    if (!chipsVisible) {
      const timer = setTimeout(() => setChipsMounted(false), 300);
      return () => clearTimeout(timer);
    }
    setChipsMounted(true);
  }, [chipsVisible]);

  return (
    <div className="flex-1 flex flex-col gap-6 sm:gap-2 lg:gap-5 2xl:gap-8 max-w-130 lg:max-w-190 xl:max-w-240 2xl:max-w-304 h-auto rounded-2xl lg:rounded-5xl px-3 lg:px-6 2xl:px-10 pt-3 sm:pt-2 lg:pt-4 2xl:pt-7 pb-3 sm:pb-1 lg:pb-3 2xl:pb-8 bg-white/[0.03] backdrop-blur-sm font-yekta">
      <div className="flex flex-col gap-px lg:gap-2">
        <h1 className="text-background text-xl sm:text-base lg:text-2xl 2xl:text-4xl font-black">
          ایران؛ فراتر از یک مقصد
        </h1>
        <span className="font-bold text-xs sm:text-[0.625rem] lg:text-base 2xl:text-xl text-muted">
          راهنمای سفر اختصاصی که با سلیقه و بودجه شما، ایران را دوباره تعریف
          می‌کند.
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <PromptBar
          value={promptValue}
          onValueChange={handlePromptValueChange}
          onSubmitMessage={async (message) => {
            enqueuePendingPrompt(message ?? '', 'landing');
            router.push('/chat_ai');
          }}
        />

        {chipsMounted && (
          <div
            className={cn(
              'flex md:flex-row flex-col gap-2 items-start md:items-center transition-all duration-300 ease-out',
              chipsVisible
                ? 'opacity-100 translate-y-0 max-h-20'
                : 'opacity-0 -translate-y-2 max-h-0 overflow-hidden pointer-events-none',
            )}
          >
            {SUGGESTION_CHIPS.map(({ text, icon: Icon, className }) => (
              <Chip
                key={text}
                text={text}
                icon={<Icon className="w-4 h-4 **:stroke-background" />}
                className={cn(className, 'cursor-pointer')}
                onClick={() => handleChipClick(text)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}