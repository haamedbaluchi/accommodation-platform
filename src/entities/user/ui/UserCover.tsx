import Image from 'next/image';

export function UserCover() {
  return (
    <Image
      src="/images/profile_bg.jpg"
      alt="تجربه سفر"
      width={1400}
      height={180}
      className="w-full h-38 xs:h-45 2xl:h-55 rounded-3xl object-cover"
    />
  );
}
