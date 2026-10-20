import { Button, TextField } from '@shared/ui';
import { CancelIcon} from '@shared/assets/icons';
import { PlusIcon } from '@heroicons/react/24/solid';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { Dispatch, RefObject, SetStateAction, KeyboardEvent } from 'react';

interface FormContactSelectProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  inputRef: RefObject<HTMLInputElement>;
  onAdd: () => void;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export function FormContactSelect({
  onAdd,
  value,
  setValue,
  inputRef,
  onKeyDown,
}: FormContactSelectProps) {
  return (
    <div className="flex items-center gap-2"> 
      <TextField
        label="اطلاعات دوستات"
        hiddenLabel={true}
        value={value}
        ref={inputRef}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={onKeyDown} 
        sizeInput="md"
        rightIcon={<UserCircleIcon className="w-4 h-4 md:w-5 md:h-5" />}
        leftIcon={<CancelIcon className="w-3.5 h-3.5 md:w-5 md:h-5" />}
        placeholder="شماره دوستات"
        className='h-7.5 md:h-9.5 text-xs ms:text-sm md:text-base'
      />
      <Button
        size="large"
        variant="secondary"
        onClick={onAdd} 
        rounded="full"
        className="active:bg-active-item-background active:text-primary-active"
        leftIcon={<PlusIcon className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5" />}
      >
        افزودن
      </Button>
    </div>
  );
}
