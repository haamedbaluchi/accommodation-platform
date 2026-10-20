import { AuthFormType } from '@features/auth/lib';
import { useAuthFlow } from '@features/auth/model';
import type { UseFormReturn } from 'react-hook-form';
import { AuthStepRenderer } from './AuthStepRenderer';

interface AuthFlowProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  form: UseFormReturn<AuthFormType>;
}

export function AuthFlow({ open, setOpen, form }: AuthFlowProps) {
  const flow = useAuthFlow({ open, form });

  return (
    <AuthStepRenderer
      step={flow.step}
      setOpen={setOpen}
      goToPhoneStep={flow.goToPhoneStep}
      goToOtpStep={flow.goToOtpStep}
      goToProfileStep={flow.goToProfileStep}
    />
  );
}
