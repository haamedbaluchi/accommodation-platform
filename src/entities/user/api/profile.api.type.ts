import { UserProfile } from "../model/user.types";

export interface UserProfileResponse {
  success: boolean;
  message: string;
  user: UserProfile;
  otp_expires_at: string;
  otp_remaining_seconds: number;
}
