import { OtpStepView } from "./OtpStepView";
import { useOtpStep } from "../model/useOtpStep";

interface OtpStepProps {
  onBack: () => void;
  onAuthenticated: () => void;
  onProfileRequired: () => void;
}

export function OtpStep(props: OtpStepProps) {
  const state = useOtpStep(props);

  return <OtpStepView {...state} />;
}
