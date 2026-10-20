'use client';

import React, { useEffect } from 'react';
import { Stepper } from '@shared/ui/stepper';
import { TRIP_STEPS } from '../model/stepConfiguration';

interface TripBuilderFormProps {
  currentStep: number;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

export function TripBuilderForm({
  currentStep,
  onSubmit,
}: TripBuilderFormProps) {
  const StepComponent = TRIP_STEPS[currentStep].component;
  useEffect(() => {
    console.log('🟢 TripBuilderForm MOUNTED');
    return () => console.log('🔴 TripBuilderForm UNMOUNTED');
  }, []);
  return (
    <form id="trip-builder-form" onSubmit={onSubmit}>
      <Stepper steps={TRIP_STEPS} currentStep={currentStep} />

      {TRIP_STEPS.map((step, index) => (
        <div key={step.id} className={index === currentStep ? '' : 'hidden'}>
          <step.component />
        </div>
      ))}
    </form>
  );
}
