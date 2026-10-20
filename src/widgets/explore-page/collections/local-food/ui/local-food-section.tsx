
import { GridSection } from '@shared/ui/layout-section';
import type { LocalFood } from '../model/types';

import { LocalFoodCard } from './local-food-card';

type LocalFoodSectionProps = {
  foods: LocalFood[];
};

export function LocalFoodSection({
  foods,
}: LocalFoodSectionProps) {
  return (
    <GridSection
      title="طعم‌هایی که فقط همانجا پیدا می‌کنی"
      icon={<span>🍽️</span>}
      seeAllHref="/explore/local-foods"
      items={foods}
      renderItem={(food) => (
        <LocalFoodCard food={food} />
      )}
    />
  );
}