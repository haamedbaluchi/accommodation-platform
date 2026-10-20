'use client';

import { useEffect } from 'react';
import { cn } from '@shared/lib';
import { TextArea } from '@shared/ui';
import { PromptToolbar } from './PromptToolbar';
import { usePromptBar } from '../model/usePromptBar';
import { FormInputType } from '../model/prompt.type';

interface PromptBarProps {
  onSubmitMessage: FormInputType;
  isLoading?: boolean;
  isPending?: boolean;
  onCancel?: () => void;
  className?: string;
  value?: string; // متن بیرونی (مثلا از کلیک روی چیپ)
  onValueChange?: (value: string) => void; // اطلاع‌رسانی مقدار فعلی به بیرون
}

export function PromptBar({
  onSubmitMessage,
  isLoading,
  isPending,
  onCancel,
  className,
  value,
  onValueChange,
}: PromptBarProps) {
  const {
    inputValue,
    setInputValue,
    formRef,
    textAreaRef,
    handleSubmit,
    handleEnterKey,
  } = usePromptBar(onSubmitMessage);

  // وقتی مقدار بیرونی تغییر کرد (کلیک چیپ)، توی تکست‌اریا بنویسش
  useEffect(() => {
    if (value !== undefined && value !== inputValue) {
      setInputValue(value);
      textAreaRef.current?.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  // هر بار مقدار داخلی عوض شد (چه با کلیک چیپ، چه تایپ مستقیم)، به بیرون خبر بده
  useEffect(() => {
    onValueChange?.(inputValue);
  }, [inputValue, onValueChange]);

  return (
    <form
      onSubmit={handleSubmit}
      ref={formRef}
       className={cn(
        'max-w-130 lg:max-w-180 xl:max-w-230 w-full rounded-2xl sm:rounded-3xl lg:rounded-4xl pb-1 pt-1 lg:pb-7 lg:pt-3 px-2 lg:px-8 md:px-4 border border-border-foreground shadow-sm bg-background',
        '2xl:max-w-328 2xl:pb-6 2xl:pt-3',
        className,
      )}
    >
      <div className="flex-1 flex gap-2.5 items-end mb-0.5 lg:mb-2 xl:mb-5">
        <TextArea
          ref={textAreaRef}
          label="سوال از هوش مصنوعی"
          hiddenLabel={true}
          size="auto"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleEnterKey}
          rows={1}
          className="max-h-20 sm:max-h-14 lg:max-h-20 xl:max-h-40 border-0 px-2 pt-1 lg:pt-3 pb-0.5 lg:pb-2 text-xs md:text-sm xl:text-lg font-medium"
          placeholder="با ۵ میلیون تومن کجا می‌تونم یه سفر ۳ روزه برم؟"
        />
      </div>

      <PromptToolbar
        hasText={inputValue.trim().length > 0}
        isLoading={isLoading}
        isPending={isPending}
        onCancel={onCancel}
      />
    </form>
  );
}