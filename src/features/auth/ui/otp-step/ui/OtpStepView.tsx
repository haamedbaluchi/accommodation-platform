'use client';

import { OtpHeader } from './OtpHeader';
import { Controller } from 'react-hook-form';
import type { Control } from 'react-hook-form';
import { OtpInputs } from './internal/OtpInputs';
import { AuthFormType } from '@features/auth/lib';
import { OtpErrorMessage } from './internal/OtpErrorMessage';
import { OtpResendSection } from './internal/OtpResendSection';

interface OtpStepViewProps {
  control: Control<AuthFormType>;
  phoneNumber: string;
  otpStatus: 'default' | 'success' | 'error';
  isVerifying: boolean;
  isResendingCode: boolean;
  isRunning: boolean;
  timeLeft: number;
  formatTime: (seconds: number) => string;
  handleOtpComplete: (otp: string) => void;
  handleEditPhone: () => void;
  handleResendCode: () => void;
}

export function OtpStepView({
  control,
  phoneNumber,
  otpStatus,
  isVerifying,
  isResendingCode,
  isRunning,
  timeLeft,
  formatTime,
  handleOtpComplete,
  handleEditPhone,
  handleResendCode,
}: OtpStepViewProps) {
  return (
    <div className="custom-scrollbar flex h-156 max-h-full flex-col items-center overflow-y-auto rounded-t-3xl bg-background pt-12">
      <OtpHeader phoneNumber={phoneNumber} onEditPhone={handleEditPhone} />

      <Controller
        name="otp"
        control={control}
        render={({ field, fieldState }) => (
          <>
            <OtpInputs
              status={fieldState.error ? 'error' : otpStatus}
              length={6}
              value={field.value || ''}
              onChange={field.onChange}
              onComplete={handleOtpComplete}
            />
            <OtpErrorMessage message={fieldState.error?.message} />
          </>
        )}
      />

      <OtpResendSection
        isRunning={isRunning}
        timeLeft={timeLeft}
        formatTime={formatTime}
        isDisabled={isVerifying || isResendingCode}
        onResend={handleResendCode}
      />
    </div>
  );
}
