import { FormEvent, useRef, useState, KeyboardEvent } from 'react';
import { toast } from 'sonner';
import { useFormContext } from 'react-hook-form';

export const useTravelersSelectorLogic = () => {
  const { watch, setValue } = useFormContext();
  
  const count = watch('travelerCount') || 1;
  const friends = watch('friends') || [];
  const [inputValue, setInputValue] = useState<string>(''); 
  const inputRef = useRef<HTMLInputElement>(null);

  const changeCount = (newCount: number) => {
    setValue('travelerCount', newCount, { shouldValidate: true, shouldDirty: true });
  };

  const handleAddFriend = () => {
    const trimmedValue = inputValue.trim();
    if (!trimmedValue) {
      toast.warning('چیزی وارد نکردی هنوز :(');
      return;
    }
    if (friends.includes(trimmedValue)) {
      toast.warning(`${trimmedValue} رو قبلا واردش کردی `);
      return;
    }
    
    setValue('friends', [...friends, trimmedValue], { shouldValidate: true, shouldDirty: true });
    setInputValue('');
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault(); 
      handleAddFriend();
    }
  };

  return {
    count,
    changeCount,
    inputValue,
    setInputValue,
    friends,
    inputRef,
    handleAddFriend,
    handleKeyDown,
  };
};
