import Image from 'next/image';
import { ProfileAvatar } from '../../model/profile.type';
import { PROFILE_AVATARS } from '../../model/profile.constants';

interface ProfileAvatarSelectorProps {
  selectedAvatar: ProfileAvatar;
  onSelect: (avatar: ProfileAvatar) => void;
}

export function ProfileAvatarSelector({
  selectedAvatar,
  onSelect,
}: ProfileAvatarSelectorProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative mb-3">
        <div className="h-20 w-20 overflow-hidden rounded-full border-2 border-white bg-yellow-100 shadow-sm ring-2 ring-gray-50">
          <Image
            src={selectedAvatar.preview}
            alt="آواتار انتخابی"
            width={80}
            height={80}
            className="h-full w-full object-cover"
          />
        </div>

        <button
          type="button"
          className="absolute -bottom-2 right-1/4 translate-x-1/2 rounded-full border border-gray-100 bg-white p-1.5 text-blue-500 shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
            />
          </svg>
        </button>
      </div>

      <div className="mx-auto flex w-auto justify-center gap-2 overflow-x-auto rounded-full bg-gray-50/80 px-3 py-2">
        {PROFILE_AVATARS.map((avatar, index) => (
          <Image
            key={avatar.value}
            src={avatar.preview}
            alt={`آواتار ${index + 1}`}
            onClick={() => onSelect(avatar)}
            className={`h-10 w-10 cursor-pointer rounded-full transition-all ${
              selectedAvatar.value === avatar.value
                ? 'scale-110 ring-2 ring-blue-500'
                : 'opacity-80 hover:opacity-100'
            }`}
            width={48}
            height={48}
          />
        ))}
      </div>
    </div>
  );
}
