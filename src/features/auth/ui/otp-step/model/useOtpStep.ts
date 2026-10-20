'use client'
import {
  AuthFormType,
  getErrorMessage,
  isProfileIncomplete,
} from '@features/auth/lib';
import { delay } from '@shared/lib';
import { useFormContext } from 'react-hook-form';
import { fillProfileForm } from './fillProfileForm';
import { OTP_STATUS, OtpStatus } from './otp.types';
import { useCallback, useEffect, useState } from 'react';
import { useResendOtp, useVerifyOtp } from '@features/auth/api';
import { DEFAULT_AUTH_FORM_VALUES, useAuthStore } from '@features/auth/model';
import { useCounter } from '@shared/lib/hooks';

interface UseOtpStepParams {
  onBack: () => void;
  onAuthenticated: () => void;
  onProfileRequired: () => void;
}

export function useOtpStep({
  onBack,
  onAuthenticated,
  onProfileRequired,
}: UseOtpStepParams) {
  const form = useFormContext<AuthFormType>();
  const phoneNumber = form.watch('phone');
  const [isVerifying, setIsVerifying] = useState(false);
  const setUser = useAuthStore((state) => state.setUser);
  const [otpStatus, setOtpStatus] = useState<OtpStatus>(OTP_STATUS.DEFAULT);

  const { timeLeft, formatTime, handleStart, handleReset, isRunning } =
    useCounter(120);

  const { mutateAsync: verifyCode } = useVerifyOtp();
  const { mutateAsync: resendCode, isPending: isResendingCode } =
    useResendOtp();

  useEffect(() => {
    handleStart();
  }, [handleStart]);

   const handleVerify = useCallback(
     async (otp: string) => {
       setIsVerifying(true);
       setOtpStatus(OTP_STATUS.DEFAULT);

       form.clearErrors('otp');

       try {
         const response = await verifyCode({
           phoneNumber,
           otp,
         });

         setUser(response.user);

         setOtpStatus(OTP_STATUS.SUCCESS);

         return response.user;
       } catch (error) {
         setOtpStatus(OTP_STATUS.ERROR);

         form.setError('otp', {
           type: 'server',
           message: getErrorMessage(error, 'کد وارد شده صحیح نیست.'),
         });

         return null;
       } finally {
         setIsVerifying(false);
       }
     },
     [form, phoneNumber, verifyCode, setUser],
   );

  
  const handleOtpComplete = useCallback(
    async (otp: string) => {
      form.setValue('otp', otp, {
        shouldDirty: true,
        shouldValidate: true,
      });

      setOtpStatus(OTP_STATUS.DEFAULT);

      form.clearErrors('otp');

      const isValid = await form.trigger('otp');

      if (!isValid) {
        setOtpStatus(OTP_STATUS.ERROR);
        return;
      }

      const user = await handleVerify(otp);

      if (!user) return;

      await delay(500);

      if (isProfileIncomplete(user)) {
        fillProfileForm(form, user);
        onProfileRequired();
        return;
      }

      onAuthenticated();
    },
    [form, handleVerify, onAuthenticated, onProfileRequired],
  );

  const handleEditPhone = useCallback(() => {
    form.reset(DEFAULT_AUTH_FORM_VALUES);
    onBack();
  }, [form, onBack]);

  const handleResendCode = useCallback(async () => {
    try {
      setOtpStatus(OTP_STATUS.DEFAULT);
      form.clearErrors('otp');

      await resendCode({
        phoneNumber,
      });

      form.setValue('otp', '', {
        shouldDirty: true,
        shouldValidate: false,
      });

      handleReset();
      handleStart();
    } catch (error) {
      form.setError('otp', {
        type: 'server',
        message: getErrorMessage(error, 'ارسال مجدد کد با خطا مواجه شد.'),
      });
    }
  }, [form, resendCode, phoneNumber, handleReset, handleStart]);

  return {
    control: form.control,
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
  };
}
