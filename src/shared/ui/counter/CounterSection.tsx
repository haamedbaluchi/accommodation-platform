import { Button } from '@shared/ui';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid';

interface CounterProps {
  counterTitle: string;
  count: number;
  changeCount: (newCount: number) => void; 
}

export function CounterSection({
  counterTitle,
  count,
  changeCount,
}: CounterProps) {
  return (
    <div className="space-y-2 sm:space-y-3 md:space-y-4">
      <h4 className="text-center font-bold text-base sm:text-lg md:text-xl text-text-main">
        {counterTitle}
      </h4>
      <div className="flex justify-center gap-4">
        <Button
          aria-label="افزایش روز"
          rounded="md"
          size="icon"
          onClick={() => changeCount(count + 1)} 
          className="w-5.5 h-5.5 sm:w-6 sm:h-6 bg-success hover:bg-success-hover active:bg-success-active"
        >
          <PlusIcon className="w-3 h-3 text-white" />
        </Button>
        <span className="font-bold  text-base sm:text-lg md:text-xl text-text-main font-yekta">
          {count}
        </span>
        <Button
          aria-label="کاهش روز"
          rounded="md"
          size="icon"
          disabled={count === 1}
          onClick={() => changeCount(count - 1)} 
          className="w-5.5 h-5.5 sm:w-6 sm:h-6 bg-error hover:bg-error-hover active:bg-error-active disabled:text-text-foreground"
        >
          <MinusIcon className="w-4 h-4 text-white" />
        </Button>
      </div>
    </div>
  );
}
