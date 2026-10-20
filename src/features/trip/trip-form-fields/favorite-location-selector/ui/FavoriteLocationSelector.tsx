import { Chip } from '@shared/ui';
import { useFormContext } from 'react-hook-form';
import { FAVORITE_LOCATIONS } from '../model/favoriteLocation.data';

export function FavoriteLocationSelector() {
  const { watch, setValue, getValues } = useFormContext();
  const selectedLocations: string[] = watch('favoriteLocations') || [];
  const handleLocationToggle = (id: string) => {
    const currentLocations: string[] = getValues('favoriteLocations') || [];
    const newLocations = currentLocations.includes(id)
      ? currentLocations.filter((locId) => locId !== id)
      : [...currentLocations, id];

    setValue('favoriteLocations', newLocations, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  return (
    <div>
      <h4 className="font-semibold text-base text-text-main font-yekta">
        بیشتر دوست داری کجاها بری؟ 👀
      </h4>
      <div className="flex flex-wrap gap-3 mt-4">
        {FAVORITE_LOCATIONS.map((location) => (
          <Chip
            key={location.id}
            variant="primary"
            text={location.label}
            className={
              selectedLocations.includes(location.id)
                ? 'border-primary bg-active-item-background'
                : ''
            }
            onClick={() => handleLocationToggle(location.id)}
          />
        ))}
      </div>
    </div>
  );
}
