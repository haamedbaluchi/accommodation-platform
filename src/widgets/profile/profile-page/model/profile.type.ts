
export enum ProfileWizardStep {
  PERSONAL_INFO = 1,
  TRAVEL_INFO = 2,
  SOCIAL_MEDIA = 3,
  AVATAR = 4,
}
export interface ProfileFormValues {
  firstName: string;
  lastName: string;
  username: string;
  travelOrigin: string;
  socialLink: string;
  bio: string;

  instagram: string;
  telegram: string;

  avatar?: File | null;
  cover?: File | null;
}

export type ProfileStat = {
  id: string;
  label: string;
  value: string;
};
