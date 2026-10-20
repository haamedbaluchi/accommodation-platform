import { apiClient } from '@shared/api';
import {
  SendOtpRequest,
  SendOtpResponse,
  ResendOtpRequest,
  ResendOtpResponse,
  VerifyOtpRequest,
  VerifyOtpResponse,
  CompleteProfileRequest,
  CompleteProfileResponse,
  UserProfileRes,
} from './auth.types';

export const authApi = {
  sendOtp: ({ phoneNumber }: SendOtpRequest) =>
    apiClient<SendOtpResponse>('/api/v1/auth', {
      method: 'POST',
      body: JSON.stringify({
        phone_number: phoneNumber,
      }),
    }),

  resendOtp: ({ phoneNumber }: ResendOtpRequest) =>
    apiClient<ResendOtpResponse>('/api/v1/auth/resend-otp', {
      method: 'POST',
      body: JSON.stringify({
        phone_number: phoneNumber,
      }),
    }),
  logout: () =>
    apiClient('/api/v1/auth/logout', {
      method: 'POST',
    }),

  verifyOtp: ({ phoneNumber, otp }: VerifyOtpRequest) =>
    apiClient<VerifyOtpResponse>('/api/v1/auth/verify-otp', {
      method: 'POST',
      body: JSON.stringify({
        phone_number: phoneNumber,
        otp,
      }),
    }),
  userProfile: () =>
    apiClient<UserProfileRes>(`/api/v1/auth/profile`, {
      // apiClient<UserProfileRes>(`/api/v1/health`, {
      method: 'GET',
    }),
  completeProfile: ({
    name,
    family_name,
    city,
    gender = '',
    avatar_url,
  }: CompleteProfileRequest) =>
    apiClient<CompleteProfileResponse>('/api/v1/auth/profile', {
      method: 'POST',
      body: JSON.stringify({
        name,
        family_name,
        city,
        gender,
        avatar_url,
      }),
    }),
};
