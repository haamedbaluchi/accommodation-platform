import { BusinessDemoHeader } from './business-demo-header';
import { BusinessDemoForm } from '@features/business/demo-form';

export function BusinessDemo() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <BusinessDemoHeader />

          <BusinessDemoForm />
        </div>
      </div>
    </section>
  );
}
