import { Divider, TextField } from '@shared/ui';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { EditIcon, LocationIcon } from '@shared/assets/icons';
import { CalendarDaysIcon } from '@heroicons/react/24/outline';
import { ClockIcon, HomeIcon } from '@heroicons/react/24/outline';


export function LocationEdit() {
  return (
    <div className="flex flex-col gap-2 px-4">
      <TextField
        label="نام مقصد"
        sizeInput="sm"
        hiddenLabel={false}
        placeholder="میدان نقش جهان"
        rightIcon={<HomeIcon className="w-4.5 h-4.5" />}
        leftIcon={<XMarkIcon className="w-4.5 h-4.5" />}
      />
      <TextField
        label="آدرس مقصد"
        sizeInput="sm"
        hiddenLabel={false}
        placeholder="اصفهان، خیابان استانداری، میدان نقش جهان"
        rightIcon={<LocationIcon className="w-4.5 h-4.5" />}
        leftIcon={<XMarkIcon className="w-4.5 h-4.5" />}
      />
      <Divider text="زمان شروع" className="my-1" />
      <div className="flex flex-col md:flex-row  items-center gap-2">
        <TextField
          label="در کدوم روز دوست داری از اینجا بازدید کنی؟"
          sizeInput="sm"
          hiddenLabel={false}
          placeholder="روز1اُم"
          leftIcon={<XMarkIcon className="w-4.5 h-4.5" />}
          rightIcon={<CalendarDaysIcon className="w-4.5 h-4.5" />}
        />
        <TextField
          label="در چه ساعتی دوست داری از اینجا بازدید کنی؟"
          sizeInput="sm"
          hiddenLabel={false}
          placeholder="9:00صبح"
          leftIcon={<XMarkIcon className="w-4.5 h-4.5" />}
          rightIcon={<ClockIcon className="w-4.5 h-4.5" />}
        />
      </div>
      <Divider text="زمان پایان" className="my-1" />
      <div className="flex flex-col md:flex-row  items-center gap-2">
        <TextField
          label="در کدوم روز دوست داری اینجا را ترک کنی؟"
          sizeInput="sm"
          hiddenLabel={false}
          placeholder="روز1اُم"
          leftIcon={<XMarkIcon className="w-4.5 h-4.5" />}
          rightIcon={<CalendarDaysIcon className="w-4.5 h-4.5" />}
        />
        <TextField
          label="در چه ساعتی دوست داری اینجا را ترک کنی؟"
          sizeInput="sm"
          hiddenLabel={false}
          placeholder="9:00صبح"
          leftIcon={<XMarkIcon className="w-4.5 h-4.5" />}
          rightIcon={<ClockIcon className="w-4.5 h-4.5" />}
        />
      </div>
    </div>
  );
}
