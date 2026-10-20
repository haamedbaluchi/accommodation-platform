import { BusinessGrowthHeader } from './business-growth-header';
import { BusinessGrowthSteps } from './business-growth-steps';

export function BusinessGrowth() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <BusinessGrowthHeader />

        <BusinessGrowthSteps />
      </div>
    </section>
  );
}