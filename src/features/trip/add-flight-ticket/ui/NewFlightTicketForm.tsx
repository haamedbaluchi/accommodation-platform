import { CalendarDateRangeIcon, ClockIcon } from '@heroicons/react/24/outline';
import { BussIcon, PlaneIcon, SwapIcon, TrainIcon } from '@shared/assets/icons';
import { Button, Divider, TabBar, TextField } from '@shared/ui';
import React, { ReactNode } from 'react';

const tabs = [
  {
    id: 'Plane',
    label: 'پرواز',
    icon: <PlaneIcon className="w-4 h-4 md:w-6 md:h-6" />,
  },
  {
    id: 'Train',
    label: 'قطار',
    icon: <TrainIcon className="w-6 h-4 md:w-9 md:h-6" />,
  },
  {
    id: 'Buss',
    label: 'اتوبوس',
    icon: <BussIcon className="h-4 w-6 md:w-10.5 md:h-6" />,
  },
];

function FormItem({ children, text }: { children: ReactNode; text: string }) {
  return (
    <div>
      <Divider text={text} />
      {children}
    </div>
  );
}
export function NewFlightTicketForm() {
  return (
    <form role="form" id="new-flight-ticket-form" className="px-4">
      <FormItem text="انتخاب نوع وسیله نقلیه">
        <TabBar items={tabs} tabClassName='w-24 sm:w-40 md:w-50 shrink-0' className='max-w-3xl'/>
      </FormItem>
      <FormItem text="مبدا و مقصد">
        <div className="flex items-center gap-2">
          <TextField
            label="مبدا سفر"
            hiddenLabel={true}
            placeholder="از کجا؟"
            className="rounded-l-lg"
          />
          <Button
            rounded="md"
            size="icon"
            aria-label="جابه جا کردن مبدا و مقصد"
            className="w-7.5 h-7.5 sm:h-9 sm:w-9 md:h-11.25 md:w-11.25 bg-active-item-background shrink-0"
          >
            <SwapIcon className="w-4.5 h-4.5 md:w-6 md:h-6" />
          </Button>
          <TextField
            label="مقصد سفر"
            hiddenLabel={true}
            placeholder="به کجا؟"
            className="rounded-r-md"
          />
        </div>
      </FormItem>
      <FormItem text="تاریخ و ساعت">
        <div className="flex items-center gap-2 md:gap-5">
          <TextField
            label="تاریخ سفر"
            hiddenLabel={true}
            placeholder="تاریخ سفر"
            rightIcon={<CalendarDateRangeIcon className="w-4 h-4" />}
          />
          <TextField
            label="ساعت سفر"
            hiddenLabel={true}
            placeholder="ساعت سفر"
            rightIcon={<ClockIcon className="w-4 h-4" />}
          />
        </div>
      </FormItem>
      <FormItem text="اطلاعات تکمیلی">
        <div className='grid grid-col-1 md:grid-cols-2 gap-3'>
          <TextField
            label="شرکت مسافربری"
            placeholder="شرکت مسافربری"
            hiddenLabel={true}
          />
          <TextField
            label="شماره پرواز/قطار"
            placeholder="شماره پرواز/قطار"
            hiddenLabel={true}
          />
          <TextField
            label="شماره صندلی"
            placeholder="شماره صندلی"
            hiddenLabel={true}
          />
          <TextField
            label="نام مسافر"
            placeholder="نام مسافر"
            hiddenLabel={true}
          />
        </div>
      </FormItem>
    </form>
  );
}
