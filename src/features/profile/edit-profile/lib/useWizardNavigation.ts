'use client';

import { useFormContext } from 'react-hook-form';
import { PROFILE_STEPS,editProfileStore } from '../model';

export function useWizardNavigation() {
  const {
    trigger,
    formState: { isSubmitting },
  } = useFormContext();

  const { currentStep, nextStep, previousStep } = editProfileStore();

  const currentStepConfig = PROFILE_STEPS.find(
    (step) => step.id === currentStep,
  );

  const isFirstStep = currentStep === 1;

  const isLastStep = currentStep === PROFILE_STEPS.length;

  const validateCurrentStep = async () => {
    if (!currentStepConfig) return false;

    return trigger(currentStepConfig.fields as any);
  };

  const handleNext = async () => {
    const isValid = await validateCurrentStep();

    if (!isValid) return;

    nextStep();
  };

  return {
    isSubmitting,
    isFirstStep,
    isLastStep,
    handleNext,
    previousStep,
  };
}
