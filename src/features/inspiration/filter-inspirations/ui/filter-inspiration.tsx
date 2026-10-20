import { FilterButtons } from '@shared/ui';
import { FILTER_OPTIONS, InspirationFilter } from '../model/constants';
import { useMediaQuery } from '@shared/lib/hooks';

type FilterInpirationProps = {
  activeFilter: InspirationFilter;
  onFilterChange: (filter: InspirationFilter) => void;
};

export function FilterInpiration({
  activeFilter,
  onFilterChange,
}: FilterInpirationProps) {
  return (
    <div className='overflow-hidden shrink-0'>
      <FilterButtons
        options={FILTER_OPTIONS}
        value={activeFilter}
        onChange={onFilterChange}
        ariaLabel="فیلتر سفر"
        singleLine
        buttonClassName="px-4 md:px-6 font-bold text-sm 2xl:text-base"
      />
    </div>
  );
}
