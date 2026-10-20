import { useFormContext } from 'react-hook-form';
import { TRIP_TYPES } from '../model/trip-type.data';
import { SelectableCard } from '@shared/ui/selectable-card';


export function TripTypeSelector() {
  const { watch, setValue } = useFormContext();
  const selectedTripType = watch('tripType');
  const handleTripTypeSelect = (id: string) => {
    setValue('tripType', id, { shouldValidate: true, shouldDirty: true });
  };

  return (
    <div
      className="flex flex-wrap flex-col sm:flex-row gap-4 mt-4"
      role="radiogroup"
      aria-labelledby="trip-pace-label"
    >
      <span id="trip-pace-label" className="sr-only">
        ریتم و سرعت سفر
      </span>
      {TRIP_TYPES.map((type) => (
        <SelectableCard
          key={type.id}
          option={type}
          isSelected={selectedTripType === type.id}
          onClick={() => handleTripTypeSelect(type.id)}
        />
      ))}
    </div>
  );
}
