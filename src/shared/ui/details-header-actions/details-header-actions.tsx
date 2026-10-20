import { HugeiconsIcon } from '@hugeicons/react';
import { Button } from '../Button';
import { Favorite, Plus, X } from '@hugeicons/core-free-icons';

// shared/ui/details-header-actions/details-header-actions.tsx
export function DetailsHeaderActions({ onClose }: { onClose?: () => void }) {
  return (
    <div className="flex items-center justify-between">
      {onClose && (
        <Button
          variant={'ghost'}
          rounded={'full'}
          size={'icon'}
          aria-label="بستن جزییات"
          onClick={() => onClose?.()}
          // className="absolute top-3 right-3.5 bg-transparent border-white text-white hover:text-white hover:border-white "
        >
          <HugeiconsIcon icon={X} />
        </Button>
      )}
      <div className='flex gap-3'>
        {/* <Button variant={"ghost"} >اشتراک‌گذاری</Button> */}
        <Button
          variant={'outline'}
          className="border-border text-text-foreground"
          rounded={'full'}
          leftIcon={<HugeiconsIcon icon={Favorite} className='size-3.5'/>}
        >
          پسندیدن
        </Button>
        <Button
          variant={'outline'}
          className="border-border text-text-foreground"
          rounded={'full'}
          leftIcon={<HugeiconsIcon icon={Plus}  className='size-3.5'/>}
        >
          ذخیره کردن
        </Button>
      </div>
    </div>
  );
}
