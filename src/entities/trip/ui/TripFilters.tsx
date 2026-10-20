import { FilterButtons } from '@shared/ui';
import { TRIP_FILTER_OPTIONS, TripFilter } from '../model';

type TripFiltersProps = {
  activeFilter: TripFilter;
  onFilterChange: (filter: TripFilter) => void;
};

export function TripFilters({
  activeFilter,
  onFilterChange,
}: TripFiltersProps) {
  return (
    <FilterButtons
      value={activeFilter}
      options={TRIP_FILTER_OPTIONS}
      onChange={onFilterChange}
      ariaLabel="فیلتر سفرها"
      className="w-full"
      singleLine
      dir="rtl"
    />
  );
}
