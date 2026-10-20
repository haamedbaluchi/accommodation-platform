import { create } from 'zustand';
import { PROFILE_STEPS } from './edit.profile.steps.config';

const FIRST_STEP = 1;
const LAST_STEP = PROFILE_STEPS.length;

type EditProfileWizardStore = {
  currentStep: number;

  nextStep: () => void;
  previousStep: () => void;
  goToStep: (step: number) => void;
  reset: () => void;
};

export const editProfileStore = create<EditProfileWizardStore>(
  (set) => ({
    currentStep: FIRST_STEP,

    nextStep: () =>
      set((state) => ({
        currentStep: Math.min(state.currentStep + 1, LAST_STEP),
      })),

    previousStep: () =>
      set((state) => ({
        currentStep: Math.max(state.currentStep - 1, FIRST_STEP),
      })),

    goToStep: (step) =>
      set({
        currentStep: Math.min(Math.max(step, FIRST_STEP), LAST_STEP),
      }),

    reset: () =>
      set({
        currentStep: FIRST_STEP,
      }),
  }),
);