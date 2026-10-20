import { UserProfile } from "../model/user.types";

type ProfileInfoProps = {
  profile?: UserProfile;
};

export function UserInfo({ profile }: ProfileInfoProps) {
  return (
    <div className="xs:space-y-1">
      <div className="flex items-center gap-2 pl-12">
        <h1 className="text-xs xs:text-sm sm:text-lg 2xl:text-2xl font-black text-text-main">
          {profile?.name ?? "کاربر بومرو"} {profile?.family_name}
        </h1>
      </div>
      <p className="text-[0.625rem] xs:text-xs sm:text-base lg:text-lg 2xl:text-xl font-semibold text-text-foreground">
        {profile?.email ?? 'example@gmail.com'}
      </p>
    </div>
  );
}
