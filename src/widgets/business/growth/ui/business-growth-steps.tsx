import { businessGrowthSteps } from '../model/business-growth.data';
import { BusinessGrowthStep } from './business-growth-step';

export function BusinessGrowthSteps() {
  return (
    <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-12">
      {businessGrowthSteps.map((step) => (
        <BusinessGrowthStep key={step.number} step={step} />
      ))}
    </div>
  );
}