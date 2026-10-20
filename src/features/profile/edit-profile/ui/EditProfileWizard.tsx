'use client';

import { useEditProfile } from '../api';
import { FormProvider } from 'react-hook-form';
import { UserProfile } from '@entities/profile';
import { WizardFooter } from './WizardFooter';
import {
  EditProfileFormValues,
  editProfileStore,
  useProfileWizardForm,
} from '../model';
import { PersonalInfoStep } from './steps/PersonalInfoStep';

type EditProfileWizardProps = {
  user?: UserProfile;
};
export function EditProfileWizard({ user }: EditProfileWizardProps) {
  const form = useProfileWizardForm(user);
  const currentStep = editProfileStore((s) => s.currentStep);
  const { mutateAsync, isPending } = useEditProfile();
  const onSubmit = form.handleSubmit(async (data: EditProfileFormValues) => {
    await mutateAsync(data);
  });

  return (
    <FormProvider {...form}>
      <form className="flex flex-col flex-1 justify-between">
        {currentStep === 1 && <PersonalInfoStep />}

        <WizardFooter onSubmit={onSubmit} isLoading={isPending} />
      </form>
    </FormProvider>
  );
}
