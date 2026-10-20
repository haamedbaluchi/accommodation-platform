import { HeroBackground } from './hero-background';
import { HeroTopbar } from '@widgets/home/hero-topbar';
import { HeroScrollIndicator } from './hero-scroll-indicator';
import { PartnersShowcase } from '@widgets/home/partners-showcase';
import { HeroPrompt } from '@widgets/home/hero-prompt';


export function HomeHero() {
  return (
    <section className="relative flex min-h-dvh w-full flex-col overflow-hidden">
      <HeroBackground />
      <div className="z-10 flex h-[70vh] w-full flex-col justify-between px-4 py-3 pb-16 sm:py-2 lg:px-8 lg:py-5 lg:pb-5">
        <HeroTopbar />
        <div className="flex justify-center">
          <HeroPrompt />
        </div>
      </div>
        <PartnersShowcase />
      <HeroScrollIndicator />
    </section>
  );
}
