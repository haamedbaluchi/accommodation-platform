import { ProfileStepView } from "./ProfileStepView";
import { useProfileStep } from "../model/useProfileStep";

interface ProfileStepProps {
  onSuccess: () => void;
}

export function ProfileStep({ onSuccess }: ProfileStepProps) {
  const state = useProfileStep({ onSuccess });

  return <ProfileStepView {...state} />;
}
