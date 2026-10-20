import React, { Dispatch, SetStateAction } from 'react';
import { format } from 'date-fns-jalali';
import { DateRange, DayPicker } from '@daypicker/react';
import { faIR } from '@daypicker/persian';
import { newDate } from 'date-fns-jalali';

import '@daypicker/react/style.css';


interface DayPickerProps {
  range: DateRange;
  changeRange: Dispatch<SetStateAction<DateRange>>;
}

export function CustomDayPicker({ range, changeRange }: DayPickerProps) {
  const today = new Date();
  const jalaliDateStr = format(today, 'yyyy/MM/dd') 
  return (
    <DayPicker
      mode="range"
      selected={range}
      onSelect={changeRange}
      numberOfMonths={2}
      dir="rtl"
      locale={faIR} 
      defaultMonth={jalaliDateStr} 
      disabled={{ before: jalaliDateStr}}
      classNames={{
        months:
          'relative flex flex-col xs:flex-row space-y-4 sm:space-x-3 sm:space-y-0',
        month: 'space-y-0 text-text-foreground',
        caption: 'flex justify-center pt-1 items-center !static',
        caption_label:
          'w-full flex items-center justify-center text-sm font-semibold text-text-main',
        nav: 'absolute w-full flex flex-row-reverse justify-between',
        nav_button_previous:
          'flex items-center justify-center p-1 cursor-pointer hover:bg-gray-100 rounded-md transition-colors',
        nav_button_next:
          'flex items-center justify-center p-1 cursor-pointer hover:bg-gray-100 rounded-md transition-colors',
        table: 'border-collapse space-y-1',
        head_row: '',
        head_cell:
          'text-gray-500 rounded-md font-medium text-[11px] uppercase tracking-wider text-center',
        row: '',
        cell: 'text-center p-0 relative',
        day_button:
          'w-[30px] h-[30px] flex items-center justify-center p-0 m-0 font-normal text-sm font-yekta text-gray-700 rounded-md transition-colors ' +
          'hover:bg-gray-100 ' +
          'aria-selected:bg-black aria-selected:text-white aria-selected:hover:bg-gray-800 aria-selected:font-bold',
        day: 'rounded-md',
        day_selected: '',
        day_today: 'bg-gray-100 font-bold',
        day_outside: 'text-gray-300 opacity-50',
        day_range_middle:
          'aria-selected:!bg-gray-100 aria-selected:!text-gray-900',
      }}
    />
  );
}

  