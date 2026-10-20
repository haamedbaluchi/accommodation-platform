import { BusinessPartnersHeader } from './internal/business-partners-header';
import { BusinessPartnersList } from './internal/business-partners-list';

export function BusinessPartners() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <BusinessPartnersHeader />

        <BusinessPartnersList />
      </div>
    </section>
  );
}
