import Image from "next/image";

export function FooterBrand() {
  return (
    <div className="mb-6 flex items-center gap-2">
      <Image
        src="/images/logos/boomro-logo-dark.svg"
        alt="بومو"
        width={60}
        height={60}
        className="object-contain"
      />

      <div className="text-right">
        <h3 className="text-xl font-extrabold text-text-main">بومو</h3>

        <p className="text-xs font-semibold text-text-main">
          بومو، همسفر هوشمند تو برای ساختن بهترین خاطره‌ها
        </p>
      </div>
    </div>
  );
}