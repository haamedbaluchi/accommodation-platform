import Image from 'next/image';
import { DestinationType } from '@entities/destination';
import { Controller, useFormContext } from 'react-hook-form';
const FALLBACK_DESTINATION_IMAGE = '/images/masjed_shakh.svg';
import { DeleteIcon, LocationIcon } from '@shared/assets/icons';
import { Button, SelectBox, SelectBoxItemType } from '@shared/ui';

export function SelectedDestinationCard({
  destination,
  destinationTypeItems,
  onRemove,
  index,
}: {
  destination: DestinationType;
  destinationTypeItems: SelectBoxItemType[];
  onRemove: () => void;
  index: number;
}) {
  const { control } = useFormContext();

  const backendBaseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const imageUrl = destination?.image?.image_url
    ? `${backendBaseUrl}${destination.image.image_url}`
    : FALLBACK_DESTINATION_IMAGE;

  const imageAlt =
    destination?.image?.image_alt || destination?.city_name || 'destination';
  return (
    <div className="rounded-lg border border-border-foreground p-2 pl-2 md:pl-4 flex items-center justify-between">
      <div className="flex items-center gap-2 md:gap-3">
        <div className="relative w-10 h-10 md:w-12.5 md:h-12.5">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="rounded-md object-cover"
          />
        </div>

        <div className="flex flex-col">
          <h5 className="font-bold text-base md:text-xl font-yekta text-text-main">
            {destination.city_name}
          </h5>

          <div className="flex items-center gap-1 text-text-main">
            <LocationIcon
              aria-hidden="true"
              className="w-3 h-3 md:w-4 md:h-4"
            />

            <span className="font-yekta font-normal text-[0.625rem] md:text-xs">
              استان {destination.province}، {destination.country}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1 md:gap-3">
        <Controller
          name={`destinations.${index}.visitType`}
          control={control}
          render={({ field: { value, onChange } }) => (
            <SelectBox
              items={destinationTypeItems}
              label="انتخاب نوع مقصد"
              placeholder="مقصد"
              variant="ghost"
              size="small"
              value={value}
              onValueChange={onChange}
            />
          )}
        />

        <Button
          variant="ghost"
          rounded="full"
          size="icon"
          className="shrink-0"
          aria-label="حذف مقصد"
          onClick={onRemove}
        >
          <DeleteIcon className="w-4 h-4 md:w-5 md:h-5" />
        </Button>
      </div>
    </div>
  );
}
