import { AppShowcase } from '@widgets/about-us-page/app-showcase';
import { CoreValues } from '@widgets/about-us-page/core-values';
import { AboutUsHero } from '@widgets/about-us-page/hero/about-us-hero';
import { OriginStory } from '@widgets/about-us-page/origin-story';
import { TeamShowcase } from '@widgets/about-us-page/team-showcase';
import { TestimonialsSection } from '@widgets/about-us-page/testimonial';
import { TravelCta } from '@widgets/about-us-page/travel-cta';
import { Footer } from '@widgets/layout/footer';

export function AboutUsPage() {
  return (
    <div className="w-full h-dvh ">
      <AboutUsHero />
      <AppShowcase />
      <CoreValues />
      <OriginStory />
      <TeamShowcase />
      <TestimonialsSection />
      <TravelCta />

      <Footer />
    </div>
  );
}
