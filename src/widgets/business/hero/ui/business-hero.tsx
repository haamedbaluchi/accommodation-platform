import { BusinessHeroBackground } from './internal/business-hero-background';
import { BusinessHeroTopInfo } from './internal/business-hero-top-info';
import { BusinessHeroMainContent } from './internal/business-hero-main-content';
import { BusinessHeroBenefits } from './internal/business-hero-benefits';

export function BusinessHero() {
  return (
    <section className="relative flex min-h-dvh w-full flex-col overflow-hidden">
      <BusinessHeroBackground />

      <div className="z-10 flex h-dvh w-full flex-col justify-between px-4 py-3 pb-10 sm:h-[90vh] sm:py-2 lg:px-8 lg:py-5">
        <BusinessHeroTopInfo />
        <BusinessHeroMainContent />
        <BusinessHeroBenefits />
      </div>
    </section>
  );
}
