import { SearchIcon } from '@shared/assets/icons';
import { TextField } from '@shared/ui';
import { ChangeEvent } from 'react';

interface InspirationSearchBarProps {
  value: string;
  changeValue: (e:ChangeEvent<HTMLInputElement>)=>void;
}

export function InspirationSearchBar({ value, changeValue }:InspirationSearchBarProps) {
  return (
    <TextField
      label="جستوجو بین سفرها"
      hiddenLabel={true}
      rightIcon={<SearchIcon className="w-4 h-4" />}
      placeholder="مقصد، تجربه یا سبک سفر را جستجو کن..."
      sizeInput="md"
      className='bg-text-muted-foreground border-0' 
      value={value}
      onChange={changeValue}
    />
  );
}
