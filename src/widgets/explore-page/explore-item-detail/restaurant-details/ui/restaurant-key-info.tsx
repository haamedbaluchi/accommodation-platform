import { HourGlassIcon, MoneyBagIcon, OpenStatusIcon } from '@shared/assets/icons';
import { Chip } from '@shared/ui';

function keyInfo(value: string) {
  return (
    <span className="text-xs sm:text-sm md:text-base font-bold text-primary font-yekta">
      {value}
    </span>
  );
}

interface RestaurantKeyInfoProps {
  suggestedVisitTime: string;
  openStatus: boolean;
  priceRange: string;
}

export function RestaurantKeyInfo({
  suggestedVisitTime,
  openStatus,
  priceRange,
}: RestaurantKeyInfoProps) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <Chip text="زمان پیشنهادی بازدید : " icon={<HourGlassIcon className="w-6 h-6" />}>
        {keyInfo(suggestedVisitTime)}
      </Chip>
      <Chip text="وضعیت الان : " icon={<OpenStatusIcon className="w-6 h-6" />}>
        {keyInfo(openStatus ? 'باز است' : 'بسته است')}
      </Chip>
      <Chip text="سطح قیمت :" icon={<MoneyBagIcon className="w-6 h-6" />}>
        {keyInfo(priceRange)}
      </Chip>
    </div>
  );
}