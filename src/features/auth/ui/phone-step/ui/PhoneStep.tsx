import { PhoneStepView } from "./PhoneStepView";
import { usePhoneStep } from "../model/usePhoneStep";

interface PhoneStepProps {
  onSuccess: () => void;
}

export function PhoneStep({ onSuccess }: PhoneStepProps) {
  const { phoneRegister, phoneError, isPending, handleSubmitPhone } =
    usePhoneStep({ onSuccess });

  return (
    <PhoneStepView
      phoneRegister={phoneRegister}
      phoneError={phoneError}
      isPending={isPending}
      onSubmitPhone={handleSubmitPhone}
    />
  );
}
