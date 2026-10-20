
import { DateSelector } from '@features/trip/trip-form-fields/data-selector';
import { DestinationSelector } from '@features/trip/trip-form-fields/destination-selector';
import { Divider } from '@shared/ui';

export function DestinationAndDateStep() {
  return (
    <div className="flex flex-col gap-3 md:gap-8 mt-2 md:mt-5 mb-2 md:mb-4">
      <div>
        <Divider text="مقصد" className='my-1 md:my-2 px-4' />
        <DestinationSelector />
      </div>
      <div>
        <Divider text="زمان اقامت" className='my-1 md:my-2 px-4' />
        <DateSelector />
      </div>
    </div>
  );
}
