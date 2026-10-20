import { BusinessWhyHeader } from './internal/business-why-header';
import { BusinessWhyItems } from './internal/business-why-items'
import { BusinessWhyVisual } from './internal/business-why-visual';

export function BusinessWhyBoomro() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <BusinessWhyHeader />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-stretch">
          <BusinessWhyVisual />

          <BusinessWhyItems />
        </div>
      </div>
    </section>
  );
}