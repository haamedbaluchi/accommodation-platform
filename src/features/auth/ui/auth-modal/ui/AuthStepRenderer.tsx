import { OtpStep } from "../../otp-step";
import { PhoneStep } from "../../phone-step";
import { ProfileStep } from "../../profile-step";
import { AuthStep,AUTH_STEPS } from "@features/auth/model";

interface AuthStepRendererProps {
  step: AuthStep;
  setOpen: (open: boolean) => void;
  goToPhoneStep: () => void;
  goToOtpStep: () => void;
  goToProfileStep: () => void;
}

export function AuthStepRenderer({
  step,
  setOpen,
  goToPhoneStep,
  goToOtpStep,
  goToProfileStep,
}: AuthStepRendererProps) {
  switch (step) {
    case AUTH_STEPS.PHONE:
      return <PhoneStep onSuccess={goToOtpStep} />;

    case AUTH_STEPS.OTP:
      return (
        <OtpStep
          onBack={goToPhoneStep}
          onProfileRequired={goToProfileStep}
          onAuthenticated={() => setOpen(false)}
        />
      );

    case AUTH_STEPS.PROFILE:
      return <ProfileStep onSuccess={() => setOpen(false)} />;

    default:
      return null;
  }
}
