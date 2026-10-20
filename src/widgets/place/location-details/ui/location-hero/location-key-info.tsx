import {
  HourGlassIcon,
  MoneyBagIcon,
  OpenStatusIcon,
} from '@shared/assets/icons';
import { Chip } from '@shared/ui';

function keyInfo(keyInfo: string) {
  return (
    <span className="text-xs sm:text-sm md:text-base font-bold text-primary font-yekta">
      {keyInfo}
    </span>
  );
}

interface LocationKeyInfoProps {
  suggestedVisitTime: string;
  openStatus: boolean;
  admissionFee: string;
}
export function LocationKeyInfo({
  suggestedVisitTime,
  openStatus,
  admissionFee,
}: LocationKeyInfoProps) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <Chip
        text="زمان پیشنهادی بازدید : "
        icon={<HourGlassIcon className="w-6 h-6" />}
      >
        {keyInfo(suggestedVisitTime)}
      </Chip>
      <Chip text="وضعیت الان : " icon={<OpenStatusIcon className="w-6 h-6" />}>
        {keyInfo(openStatus ? 'باز است' : 'بسته است')}
      </Chip>
      <Chip text="هزینه ورودی :" icon={<MoneyBagIcon className="w-6 h-6" />}>
        {keyInfo(admissionFee)}
      </Chip>
    </div>
  );
}
