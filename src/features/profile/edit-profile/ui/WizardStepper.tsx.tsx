'use client';

import { cn } from '@shared/lib';
import { editProfileStore, PROFILE_STEPS } from '../model';

export function WizardStepper() {
  const currentStep = editProfileStore((s) => s.currentStep);

  return (
    <div className="flex gap-3 mb-8">
      {PROFILE_STEPS.map((step) => (
        <div
          key={step.id}
          className={cn(
            'px-4 py-2 rounded-full border',
            currentStep === step.id ? 'bg-primary text-white' : '',
          )}
        >
          {step.title}
        </div>
      ))}
    </div>
  );
}
