import { AuthFormType } from "../lib/auth.schema";

export const AUTH_STEPS = {
  PHONE: 'phone',
  OTP: 'otp',
  PROFILE: 'profile',
} as const;

export const DEFAULT_AUTH_FORM_VALUES: AuthFormType = {
  phone: '',
  otp: '',
  name: '',
  lastName: '',
  city: '',
  gender: '',
  avatar_url: '/static/avatars/man1.png',
};
