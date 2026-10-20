import Image from 'next/image';
import { TripCompanions } from '@entities/trip/model';

type TripCardAvatarsProps = {
  users: TripCompanions[];
};

export function TripCardAvatars({ users }: TripCardAvatarsProps) {
  if (!users.length) return null;

  const displayUsers = users.slice(0, 4);
  const extraCount = users.length - displayUsers.length;

  return (
    <div className="flex -space-x-3 space-x-reverse">
      {displayUsers.map((user, index) => (
        <div
          key={user.id}
          className="relative h-7 w-7 md:h-10 md:w-10"
          style={{
            zIndex: displayUsers.length - index,
          }}
        >
          <Image
            src={user.avatar}
            alt={user.name}
            fill
            className="rounded-full object-cover shadow-sm"
          />
        </div>
      ))}

      {extraCount > 0 && (
        <div className="relative flex h-7 w-7 md:h-10 md:w-10 items-center justify-center rounded-full border border-white bg-gray-200 text-[10px] md:text-xs font-bold text-gray-700 shadow-sm">
          +{extraCount}
        </div>
      )}
    </div>
  );
}
