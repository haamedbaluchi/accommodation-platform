'use client';
import { useState } from 'react';
import { DateRange } from 'react-day-picker';
import { useFormContext } from 'react-hook-form';
import { CustomDayPicker } from './CustomDayPicker';
import { CounterSection } from '@shared/ui/counter';
import { Button, CurvedSegmentTabs } from '@shared/ui';

const dateTypes = [
  { label: 'تاریخ مشخص', value: 'range' },
  { label: 'زمان منعطف', value: 'number' },
];

export function DateSelector() {
  const [activeType, setActiveType] = useState<string>('range');

  const { watch, setValue } = useFormContext();

  const startDateStr = watch('startDate');
  const endDateStr = watch('endDate');
  const totalDays = watch('totalDays') || 1; 

  const currentRange: DateRange | undefined = {
    from: startDateStr ? new Date(startDateStr) : undefined,
    to: endDateStr ? new Date(endDateStr) : undefined,
  };

  const handleRangeChange = (range: DateRange | undefined) => {
    
    setValue('startDate', range?.from ? range.from.toISOString() : undefined, {
      shouldValidate: true,
    });
    setValue('endDate', range?.to ? range.to.toISOString() : undefined, {
      shouldValidate: true,
    });

    if (range?.from) {
      setValue('totalDays', 0);
    }
  };

  const handleCountChange = (count: number) => {
    setValue('totalDays', count, { shouldValidate: true });
    setValue('startDate', undefined);
    setValue('endDate', undefined);
  };

  return (
    <div className="py-1 flex flex-col items-center min-w-0 gap-5 ">
      <CurvedSegmentTabs tabs={dateTypes} onChange={setActiveType} />

      <section>
        {activeType === 'number' ? (
          <CounterSection
            counterTitle={'چند روز اقامت دارید؟'}
            count={totalDays}
            changeCount={handleCountChange}
          />
        ) : (
          <CustomDayPicker
            range={currentRange}
            changeRange={handleRangeChange as any}
          />
        )}
      </section>

      {activeType === 'range' && (
        <Button
          variant="tertiary"
          onClick={() => handleRangeChange(undefined)}
          rounded="full"
          size="small"
        >
          پاک کردن تاریخ
        </Button>
      )}
    </div>
  );
}
