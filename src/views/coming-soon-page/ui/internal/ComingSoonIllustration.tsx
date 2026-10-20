import Image from "next/image";

export function ComingSoonIllustration() {
  return (
    <div className="relative h-[220px] w-[320px] sm:h-[300px] sm:w-[440px] md:h-[380px] md:w-[560px] lg:h-[300px] lg:w-[450px]  2xl:h-[500px] 2xl:w-[700px]">
      <Image
        src="/images/illustration-background.svg"
        alt=""
        fill
        priority
        className="object-contain"
      />

      <div className="absolute inset-6 sm:inset-8 md:inset-10 z-10">
        <Image
          src="/images/illustration.svg"
          alt="Coming soon"
          fill
          priority
          className="object-contain"
        />
      </div>
    </div>
  );
}








