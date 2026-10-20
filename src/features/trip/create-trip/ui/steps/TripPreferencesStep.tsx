import { FavoriteLocationSelector } from '@features/trip/trip-form-fields/favorite-location-selector';
import { TripTypeSelector } from '@features/trip/trip-form-fields/trip-type-selector';
import { Divider } from '@shared/ui';


export function TripPreferencesStep() {
  return (
    <div className="flex flex-col gap-3 md:gap-8 mt-2 md:mt-5 mb-2 md:mb-4 px-4">
      <div>
        <Divider text="ریتم و سرعت سفر" className='my-1 md:my-2'/>
        <TripTypeSelector />
      </div>
      <div>
        <Divider text="علایق و سلیقه" className='my-1 md:my-2'/>
        <FavoriteLocationSelector />
      </div>
    </div>
  );
}
