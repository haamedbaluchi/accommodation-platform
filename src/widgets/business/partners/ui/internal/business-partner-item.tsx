import Image from 'next/image';
import { BusinessPartner } from '../../model/types';

interface BusinessPartnerItemProps {
  partner: BusinessPartner;
}

export function BusinessPartnerItem({
  partner,
}: BusinessPartnerItemProps) {
  return (
    <div className="flex min-w-0 flex-col items-center text-center">
      <div className="flex h-14 items-center justify-center">
        {partner.isPlaceholder ? (
          <span className="text-2xl font-black uppercase text-neutral-300 sm:text-3xl">
            {partner.title}
          </span>
        ) : (
          <div className="flex items-center gap-3 opacity-40 grayscale">
            <span className="text-xl font-black text-neutral-6 sm:text-2xl">
              {partner.title}
            </span>

            {partner.logo && (
              <Image
                src={partner.logo}
                alt={partner.title}
                width={44}
                height={44}
                className="h-10 w-10 object-contain"
              />
            )}
          </div>
        )}
      </div>

      <p className="mt-4 text-xs leading-6 text-neutral-5 sm:text-sm">
        {partner.description}
      </p>
    </div>
  );
}