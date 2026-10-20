import { Button, TextField } from '@shared/ui';
import { FilterIcon, SearchIcon } from '@shared/assets/icons';

export function SelectLocations({ province }: { province: string }) {
  return (
    <div className="flex flex-col px-4">
      <h4 className="my-4 font-bold text-base text-text-main">{province}</h4>
      <div className="flex items-center gap-2">
        <TextField
          label="جستوجوی مکان گردشگری"
          hiddenLabel={true}
          sizeInput="sm"
          placeholder="جستجو کنید..."
          className='bg-text-muted-foreground'
          rightIcon={<SearchIcon className="w-4.5 h-4.5" />}
        />
        <Button
          variant="outline"
          rounded="full"
          size="small"
          rightIcon={<FilterIcon className="w-3 h-3" />}
        >
          فیلتر
        </Button>
      </div>
    </div>
  );
}
