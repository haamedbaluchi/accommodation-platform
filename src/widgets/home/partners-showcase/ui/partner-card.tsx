import Link from 'next/link';
import Image from 'next/image';
import { PartnerType } from '../model/partners.data';

export function PartnerCard({ partner }: { partner: PartnerType }) {
  if (!partner.isMain) {
    return (
      <span className="font-bold select-none text-gray-300">
        {partner.text}
      </span>
    );
  }

  const content = (
    <div className="min-w-45 md:min-w-60 rounded-2xl bg-blue-50/60 p-4 md:p-5 flex flex-col items-center transition hover:scale-105 cursor-pointer">
      {partner.logoUrl && (
        <div className="relative mb-2 w-25 h-6.25 md:w-35 md:h-9.5">
          <Image
            src={partner.logoUrl}
            alt={partner.text}
            fill
            className="object-contain"
          />
        </div>
      )}

      <p className="text-[0.625rem] md:text-xs text-gray-500 font-medium">
        {partner.subText}
      </p>
    </div>
  );

  if (!partner.url) return content;

  return (
    <Link
      href={partner.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </Link>
  );
}