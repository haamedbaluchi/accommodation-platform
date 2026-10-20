
import { Footer } from '@widgets/layout/footer';
import { BusinessDemo } from '@widgets/business/demo';
import { BusinessHero } from '@widgets/business/hero';
import { BusinessGrowth } from '@widgets/business/growth';
import { BusinessPartners } from '@widgets/business/partners';
import { BusinessWhyBoomro } from '@widgets/business/why-boomro';


export function BusinessPage() {
  return (
    <>
      <BusinessHero />
      <BusinessWhyBoomro />
      <BusinessPartners />
      <BusinessGrowth />
      <BusinessDemo />
      <Footer />
    </>
  );
}
