import { AUTH_STEPS } from './auth.constants';

export type AuthStep =
  (typeof AUTH_STEPS)[keyof typeof AUTH_STEPS];