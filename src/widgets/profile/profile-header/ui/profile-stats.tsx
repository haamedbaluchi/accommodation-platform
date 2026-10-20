import { Chip } from '@shared/ui';
import { ProfileStat } from '@widgets/profile/profile-page';


type ProfileStatsProps = {
  stats: ProfileStat[];
};

export function ProfileStats({
  stats,
}: ProfileStatsProps) {
  return (
    <div className="mt-4 sm:mt-2 xl:mt-4 space-x-1 sm:space-x-3 xl:space-x-5">
      {stats.map((stat) => (
        <Chip
          key={stat.id}
          variant="primary"
          text={`${stat.value} ${stat.label}`}
          className="border-none rounded-full px-2.5 lg:px-4 font-bold text-xs lg:text-sm 2xl:text-xl"
        />
      ))}
    </div>
  );
}