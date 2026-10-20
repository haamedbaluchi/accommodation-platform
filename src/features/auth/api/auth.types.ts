export type ApiError = {
  message: string;
  statusCode?: number;
};

export type User = {
  id: number;
  name: string;
  family_name:string
  city: string;
  gender?: string;
  avatar_url?: string;
  avatar_alt?: string;
};

export type BaseResponse = {
  success: boolean;
  message: string;
};

export type SendOtpRequest = {
  phoneNumber: string;
};

export type SendOtpResponse = BaseResponse & {
  data?: {
    otp_sent?: boolean;
    expires_in?: number;
  };
};

export type ResendOtpRequest = {
  phoneNumber: string;
};

export type ResendOtpResponse = BaseResponse;

export type VerifyOtpRequest = {
  phoneNumber: string;
  otp: string;
};

export type VerifyOtpResponse = BaseResponse & {
  user: User;
  otp_expires_at?: string;
  otp_remaining_seconds?: number;
};

export type CompleteProfileRequest = {
  name: string;
  city: string;
  family_name:string
  gender?: string;
  avatar_url: string;
};

export type CompleteProfileResponse = BaseResponse & {
  user: User;
  otp_expires_at?: string;
  otp_remaining_seconds?: number;
};

export interface UserProfileRes {
  success: boolean;
  message: string;
  user:User
  otp_expires_at: string;
  otp_remaining_seconds:number;
}
