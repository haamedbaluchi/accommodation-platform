import Image from "next/image";

export function BrandLogo() {
  return (
    <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 z-50">
      <Image
        src="/images/logos/white.svg"
        alt="لوگوی وبسایت"
        width={50}
        height={50}
        className="w-20 h-10 sm:w-36 sm:h-36 lg:w-48 md:h-13"
      />
    </div>
  );
}