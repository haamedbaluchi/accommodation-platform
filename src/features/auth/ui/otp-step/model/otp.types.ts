export const OTP_STATUS = {
  DEFAULT: 'default',
  SUCCESS: 'success',
  ERROR: 'error',
} as const;

export type OtpStatus =
  (typeof OTP_STATUS)[keyof typeof OTP_STATUS];