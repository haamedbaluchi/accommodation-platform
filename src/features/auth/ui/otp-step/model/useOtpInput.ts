import { useEffect, useMemo, useRef } from 'react';
import { toEnglishDigits } from '@features/auth/lib';
import type { ClipboardEvent, KeyboardEvent } from 'react';

interface UseOtpInputParams {
  length: number;
  value: string;
  onChange: (value: string) => void;
  onComplete: (otp: string) => void;
}

export const useOtpInput = ({
  length,
  value,
  onChange,
  onComplete,
}: UseOtpInputParams) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const otp = useMemo(() => {
    return Array.from({ length }, (_, index) => value[index] || '');
  }, [length, value]);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const updateOtp = (nextOtp: string[]) => {
    const nextValue = nextOtp.join('');

    onChange(nextValue);

    if (nextOtp.every((digit) => digit !== '')) {
      onComplete(nextValue);
    }
  };

  const handleChange = (index: number, inputValue: string) => {
    const normalizedValue = toEnglishDigits(inputValue);

    if (!/^\d*$/.test(normalizedValue)) return;

    const nextOtp = [...otp];
    nextOtp[index] = normalizedValue.slice(-1);

    updateOtp(nextOtp);

    if (normalizedValue && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    event: KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === 'Backspace') {
      if (!otp[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
        return;
      }

      const nextOtp = [...otp];
      nextOtp[index] = '';
      updateOtp(nextOtp);
      return;
    }

    if (event.key === 'ArrowLeft') {
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      } else {
        inputRefs.current[length - 1]?.focus();
      }

      return;
    }

    if (event.key === 'ArrowRight') {
      if (index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      } else {
        inputRefs.current[0]?.focus();
      }
    }
  };

  const handlePaste = (event: ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();

    const pastedData = toEnglishDigits(
      event.clipboardData.getData('text/plain'),
    ).slice(0, length);

    if (!/^\d+$/.test(pastedData)) return;

    const nextOtp = Array(length).fill('');

    pastedData.split('').forEach((char, index) => {
      if (index < length) {
        nextOtp[index] = char;
      }
    });

    updateOtp(nextOtp);

    const nextIndex = Math.min(pastedData.length, length - 1);
    inputRefs.current[nextIndex]?.focus();
  };

  return {
    handleChange,
    handleKeyDown,
    handlePaste,
    otp,
    inputRefs,
  };
};
