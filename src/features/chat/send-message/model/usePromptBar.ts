import { toast } from 'sonner';
import { useIsMobile } from '@shared/hooks';
import { FormInputType } from './prompt.type';
import { useEffect, useRef, useState } from 'react';

export const usePromptBar = (onSubmitMessage: FormInputType) => {
  const [inputValue, setInputValue] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const isMobile = useIsMobile(767);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputValue.trim()) {
      toast.warning('لطفا متن یا فایل را وارد کنید');
      return;
    }

    try {
      setInputValue('');
      await onSubmitMessage(inputValue);
    } catch (_error) {}
  };

  const handleEnterKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (!isMobile && e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      formRef.current?.requestSubmit();
    }
  };

  return {
    inputValue,
    setInputValue,
    formRef,
    textAreaRef,
    handleSubmit,
    handleEnterKey,
  };
};
