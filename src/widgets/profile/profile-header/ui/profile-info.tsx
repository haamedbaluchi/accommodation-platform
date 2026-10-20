import { UserProfile } from "@widgets/profile/profile-page";

type ProfileInfoProps = {
  profile: UserProfile;
};

export function ProfileInfo({
  profile,
}: ProfileInfoProps) {
  return (
    <div className="space-y-1 sm:space-y-2">
      <div className="flex items-center gap-2 pl-12">
        <h1 className="text-xl sm:text-lg lg:text-2xl 2xl:text-4xl font-black text-text-main">
          {profile.name} {profile.family_name}
        </h1>
      </div>

      <p className="text-sm lg:text-base 2xl:text-lg font-normal text-text-secondary">
        {profile.city}
      </p>

      <p className="text-sm sm:text-base lg:text-lg 2xl:text-xl font-semibold text-text-foreground">
        {profile.email ?? 'example@gmail.com'}
      </p>
    </div>
  );
}