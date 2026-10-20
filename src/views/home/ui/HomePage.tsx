import { HomeHero } from '@widgets/home/home-hero';
import { HomePageContent } from './HomePageContent';
import { Footer } from '@widgets/layout/footer';

export function HomePage() {
  return (
    <div className="min-h-screen w-full custom-scrollbar">
      <HomeHero />
      <HomePageContent />
      <Footer />
    </div>
  );
}
