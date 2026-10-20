import Image from 'next/image';

export function HeaderLogo() {
  return (
     <div className=" hidden sm:flex absolute left-[50%] z-50 translate-x-[-50%]">
      <Image
        src="/images/logos/white.svg"
        alt="لوگوی وبسایت"
        width={50}
        height={10}
        sizes="(min-width: 1024px) 50px, 30px"
        className="w-20 h-9 sm:w-36 sm:h-11 lg:w-48 lg:h-13"
      />
    </div>
  
  );
}
