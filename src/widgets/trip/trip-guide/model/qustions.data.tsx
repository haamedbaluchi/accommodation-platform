import Image from 'next/image';

import TravelIcon from '@shared/assets/icons/travel.svg?url';
import PlaceIcon from '@shared/assets/icons/place_location.svg?url';
import PlanningIcon from '@shared/assets/icons/planning.svg?url';
import MoneyBagIcon from '@shared/assets/icons/money_bag.svg?url';
import HambergerIcon from '@shared/assets/icons/hamberger.svg?url';

export const questions = [
  {
    value: 'برنامه‌ریزی سفرهای گروهی',
    icon: (
      <div className="relative h-4 w-4 lg:h-6 lg:w-6">
        <Image src={TravelIcon} alt="سفر" fill />
      </div>
    ),
  },
  {
    value: 'پیدا کردن مقصد مناسب',
    icon: (
      <div className="relative h-4 w-4 lg:h-6 lg:w-6">
        <Image src={PlaceIcon} alt="مقصد" fill />
      </div>
    ),
  },
  {
    value: 'ساختن برنامه سفر روزبه‌روز',
    icon: (
      <div className="relative h-4 w-4 lg:h-6 lg:w-6">
        <Image src={PlanningIcon} alt="برنامه" fill />
      </div>
    ),
  },
  {
    value: 'کمک به برآورد هزینه سفر',
    icon: (
      <div className="relative h-4 w-4 lg:h-6 lg:w-6">
        <Image src={MoneyBagIcon} alt="هزینه" fill />
      </div>
    ),
  },
  {
    value: 'پیشنهاد جاهای دیدنی، کافه و رستوران',
    icon: (
      <div className="relative h-4 w-4 lg:h-6 lg:w-6">
        <Image src={HambergerIcon} alt="پیشنهاد" fill />
      </div>
    ),
  },
];
