import React, { ReactNode } from 'react';
import { Divider, TextField } from '@shared/ui';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';

function FormItem({ text, children }: { text: string; children: ReactNode }) {
  return (
    <div>
      <Divider text={text} />
      {children}
    </div>
  );
}

export function BookingHotelForm() {
  return (
    <form role="form" id="booking-hotel-form">
      <div className="px-4">
        <FormItem text="اطلاعات اقامتگاه">
          <div className="flex items-center gap-5">
            <TextField
              label="هتل یا اقامتگاه"
              hiddenLabel={true}
              placeholder="هتل یا اقامتگاه"
            />
            <TextField
              label="نام یا نوع اتاق"
              hiddenLabel={true}
              placeholder="نام یا نوع اتاق"
            />
          </div>
        </FormItem>

        <FormItem text="اطلاعات تکمیلی">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <TextField
                label="تاریخ ورود"
                hiddenLabel={true}
                placeholder="تاریخ ورود"
                rightIcon={<CalendarDaysIcon className="w-4 h-4" />}
                className="rounded-l-lg"
              />
              <TextField
                label="تاریخ خروج"
                hiddenLabel={true}
                placeholder="تاریخ خروج"
                className="rounded-r-lg"
                rightIcon={<CalendarDaysIcon className="w-4 h-4" />}
              />
            </div>
            <TextField
              label="شماره رزرو"
              hiddenLabel={true}
              placeholder="شماره رزرو"
            />
          </div>
        </FormItem>
      </div>
    </form>
  );
}
