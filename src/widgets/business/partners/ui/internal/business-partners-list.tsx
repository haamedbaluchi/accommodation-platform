import { businessPartners } from '../../model/businessPartners.data';
import { BusinessPartnerItem } from './business-partner-item';

export function BusinessPartnersList() {
  return (
    <div className="relative mt-16 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-white to-transparent" />

      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-white to-transparent" />

      <div className="-mx-28 grid grid-cols-5 items-start gap-10 sm:-mx-36 lg:-mx-44 lg:gap-16">
        {businessPartners.map((partner) => (
          <BusinessPartnerItem
            key={partner.title}
            partner={partner}
          />
        ))}
      </div>
    </div>
  );
}