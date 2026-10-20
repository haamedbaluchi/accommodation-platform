import { FilterButtons } from '@shared/ui';
import { FILTER_OPTIONS, ExploreFilter } from '../model/constants';
import { useMediaQuery } from '@shared/lib/hooks';

type FilterExploreProps = {
  activeFilter: ExploreFilter;
  onFilterChange: (filter: ExploreFilter) => void;
};

export function FilterExplore({
  activeFilter,
  onFilterChange,
}: FilterExploreProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <FilterButtons
      options={FILTER_OPTIONS}
      value={activeFilter}
      onChange={onFilterChange}
      ariaLabel="فیلتر سفر"
      singleLine={isMobile}
      buttonClassName="px-4 md:px-6 font-bold text-sm 2xl:text-base"
    />
  );
}
