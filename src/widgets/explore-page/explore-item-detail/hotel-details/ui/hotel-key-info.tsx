import { MoneyBagIcon, ClockIcon } from '@shared/assets/icons';
import { Chip } from '@shared/ui';

function keyInfo(value: string) {
  return (
    <span className="text-xs sm:text-sm md:text-base font-bold text-primary font-yekta">
      {value}
    </span>
  );
}

interface HotelKeyInfoProps {
  pricePerNight: string;
  checkInTime: string;
  checkOutTime: string;
}

export function HotelKeyInfo({ pricePerNight, checkInTime, checkOutTime }: HotelKeyInfoProps) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <Chip text="قیمت هر شب :" icon={<MoneyBagIcon className="w-6 h-6" />}>
        {keyInfo(pricePerNight)}
      </Chip>
      <Chip text="ورود :" icon={<ClockIcon className="w-6 h-6" />}>
        {keyInfo(checkInTime)}
      </Chip>
      <Chip text="خروج :" icon={<ClockIcon className="w-6 h-6" />}>
        {keyInfo(checkOutTime)}
      </Chip>
    </div>
  );
}