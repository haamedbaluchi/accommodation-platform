'use client';
import { DestinationCard } from './DestinationCard';
import React, { useId, useState } from 'react';
import { DestinationType } from '@entities/destination';
import { SelectedDestinationCard } from './SelectedDestinationCard';
import { destinationTypeItems } from '../model/destination-type.data';
import { Button, Switch, TextField, Tooltip, Loader } from '@shared/ui';
import { useFormContext, useFieldArray, Controller } from 'react-hook-form';
import { CloseSectionIcon, PlusIcon, SearchIcon } from '@shared/assets/icons';
import { useDebounce } from '@shared/lib/hooks';
import { useGetCities } from '@entities/city';


export function DestinationSelector() {
  const baseId = useId();
  const { control, getValues } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'destinations',
  });
  const [addMoreDes, setAddMoreDes] = useState<boolean>(false);
  const [search, setSearch] = useState('');

  const debouncedSearch = useDebounce(search, 500);
  const {
    data: cities = [],
    isPending,
    isFetching,
  } = useGetCities({
    skip: 0,
    limit: 8,
    search: debouncedSearch || null,
  });

  if (isPending) {
    return (
      <div className="w-full h-84">
        <Loader size={8} />
      </div>
    );
  }

  return (
    <div className="flex flex-col my-0 md:my-1 px-4">
      <div className="flex flex-col gap-3">
        {fields.map((destination, index) => (
          <SelectedDestinationCard
            key={`${baseId}-${destination.id}`}
            index={index}
            destination={destination as unknown as DestinationType}
            destinationTypeItems={destinationTypeItems}
            onRemove={() => remove(index)}
          />
        ))}
      </div>
      {(addMoreDes || fields.length === 0) && (
        <div className="w-full flex flex-col gap-2 mt-2 sm:mt-4">
          <div className="flex items-center gap-2">
            <TextField
              label="جستو جوی بین مقصد ها"
              hiddenLabel={true}
              className="h-8 sm:h-9"
              sizeInput="sm"
              placeholder="جستو جو کنید..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              rightIcon={<SearchIcon className="w-3 h-3 sm:w-4 sm:h-4" />}
            />
            <Tooltip content="بستن جستوجو">
              <Button
                variant="outline"
                size="icon"
                rounded="full"
                className="w-8 h-8 sm:h-10 sm:w-10 border-border shrink-0"
                aria-label="بستن بخش جستجو"
                onClick={() => setAddMoreDes((s) => !s)}
              >
                <CloseSectionIcon className="w-5 h-5" />
              </Button>
            </Tooltip>
          </div>
          <div className="flex gap-3.5 sm:gap-4.5 md:gap-5.25 max-w-full no-scrollbar overflow-x-auto">
            {cities.map((place) => (
              <DestinationCard
                key={place.city_id}
                destination={place}
                onAdd={() => {
                  append({
                    ...place,
                    city_id: place.city_id,
                    visitType: 'بازدید',
                  });
                  console.log(getValues('destinations'));
                }}
              />
            ))}

            {isFetching && (
              <div className="flex items-center px-4">
                <Loader size={5} />
              </div>
            )}
          </div>
        </div>
      )}
      <div className="flex items-center justify-between mt-3 md:mt-5">
        {!addMoreDes && getValues('destinations').length > 0 && (
          <Button
            variant="secondary"
            rounded="full"
            size="large"
            onClick={() => setAddMoreDes((s) => !s)}
            leftIcon={<PlusIcon className="w-3.5 h-3.5 md:w-4.5 md:h-4.5" />}
          >
            افزودن مقصد جدید
          </Button>
        )}

        <Controller
          name="isRoadTrip"
          control={control}
          render={({ field: { value, onChange } }) => (
            <Switch
              label="انتخاب نوع سفر جاده ای"
              rightText="برنامه سفر جاده ای؟"
              size="lg"
              checked={value}
              onCheckedChange={(checked) => onChange(checked)}
            />
          )}
        />
      </div>
    </div>
  );
}
