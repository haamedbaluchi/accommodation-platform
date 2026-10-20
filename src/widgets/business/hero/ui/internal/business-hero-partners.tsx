import Image from 'next/image';
import { partnerLogos } from '../../model/businessHero.data';

export function BusinessHeroPartners() {
  return (
    <div className="flex items-center gap-4">
      <p className="text-sm leading-relaxed text-white">
        همراه برندهای فعال در <br />
        سفر، اقامت و گردشگری
      </p>

      <div className="h-10 w-px bg-white/40" />

      <div className="flex items-center -space-x-3">
        {partnerLogos.map((logo) => (
          <div
            key={logo.alt}
            className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#36515D] bg-white shadow xl:h-10 xl:w-10"
          >
            <Image
              width={32}
              height={32}
              alt={logo.alt}
              src={logo.src}
              className="h-4 w-4 xl:h-6 xl:w-6"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
