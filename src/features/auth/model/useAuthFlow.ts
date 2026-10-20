'use client'
import type { UseFormReturn } from 'react-hook-form';
import { AuthStep } from './auth.types';
import { AuthFormType } from '../lib/auth.schema';
import { useEffect, useState } from 'react';
import { AUTH_STEPS, DEFAULT_AUTH_FORM_VALUES } from './auth.constants';

interface UseAuthFlowParams {
  open: boolean;
  form: UseFormReturn<AuthFormType>;
}

export function useAuthFlow({ open, form }: UseAuthFlowParams) {
  const [step, setStep] = useState<AuthStep>(AUTH_STEPS.PHONE);

  useEffect(() => {
    if (!open) {
      setStep(AUTH_STEPS.PHONE);
      form.reset(DEFAULT_AUTH_FORM_VALUES);
    }
  }, [open, form]);

  const goToPhoneStep = () => setStep(AUTH_STEPS.PHONE);
  const goToOtpStep = () => setStep(AUTH_STEPS.OTP);
  const goToProfileStep = () => setStep(AUTH_STEPS.PROFILE);

  return {
    step,
    setStep,
    goToPhoneStep,
    goToOtpStep,
    goToProfileStep,
  };
}
