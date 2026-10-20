import { AboutHeroBackground } from './internal/about-hero-background';
import { AboutHeroMainContent } from './internal/about-hero-main-content';
import { SiteHeader } from '@widgets/layout/header';

export function AboutUsHero() {
  return (
    <section className="relative flex min-h-dvh w-full flex-col overflow-hidden">
      <AboutHeroBackground />

      <div className="z-10 flex h-dvh w-full flex-col px-4 py-3 pb-10 sm:h-[90vh] sm:py-2 lg:px-8 lg:py-5">
        <SiteHeader variant="light" />
        <AboutHeroMainContent />
      </div>
    </section>
  );
}
