
export interface EditProfilePayload {
  name: string;
  family_name: string;
  city: string;

  username?: string;
  social_media_link?: string;
  about?: string;

  avatar?: File;
  cover?: File;
}
