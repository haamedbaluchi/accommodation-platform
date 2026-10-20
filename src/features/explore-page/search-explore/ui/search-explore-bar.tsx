'use client';

import { Button, SelectBox, TextField } from '@shared/ui';
import { SearchIcon } from '@shared/assets/icons';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { ALL_IRAN_VALUE, iranProvincesWithGeo } from '@shared/constants';
import { useExploreToolbarStore } from '@views/explore-page/model/explore-toolbar-store';

export function SearchExploreBar() {
  const search = useExploreToolbarStore((s) => s.search);
  const setSearch = useExploreToolbarStore((s) => s.setSearch);
  const selectedProvinceId = useExploreToolbarStore((s) => s.selectedProvinceId);
  const setSelectedProvinceId = useExploreToolbarStore((s) => s.setSelectedProvinceId);

  const selectedProvince = iranProvincesWithGeo.find((p) => p.id === selectedProvinceId);

  const items = [
    { id: ALL_IRAN_VALUE, value: 'همه ایران' },
    ...iranProvincesWithGeo.map((p) => ({ id: p.id, value: p.value })),
  ];

  return (
    <div className="flex-1 h-11 relative bg-text-muted-foreground rounded-full px-2">
      <TextField
        label="جستوجو بین سفرها"
        hiddenLabel
        rightIcon={<SearchIcon className="size-4.5" />}
        placeholder="مقصد، تجربه یا سبک سفر را جستجو کن..."
        sizeInput="md"
        className="bg-text-muted-foreground border-0 h-11 max-w-4/5"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="absolute left-3 top-0">
        <SelectBox
          label="انتخاب استان"
          items={items}
          value={selectedProvince ? selectedProvince.value : 'همه ایران'}
          onValueChange={(value) => {
            if (value === 'همه ایران') {
              setSelectedProvinceId(null);
              return;
            }

            const province = iranProvincesWithGeo.find((p) => p.value === value);
            setSelectedProvinceId(province?.id ?? null);
          }}
          placeholder="همه ایران"
          rightIcon={<MapPinIcon className="size-4.5" />}
          triggerClassName="w-auto h-11 py-1 bg-text-muted-foreground text-text-main border-none gap-3"
        />
      </div>
    </div>
  );
}