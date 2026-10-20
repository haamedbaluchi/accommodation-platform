import Image from 'next/image';
import { TasteProfileDrawer } from '../tasteProfileDrawer/TasteProfileDrawer';

export default function EmptyList() {
  return (
    <div className="h-full flex flex-col justify-center items-center gap-6">
      <div className="relative w-48 h-48 md:w-80 md:h-74 xl:w-120 xl:h-90 2xl:w-142.5 2xl:h-142.5">
        <Image
          src={'/images/empty_fav_locations.jpg'}
          alt="ai picture"
          fill
          className="object-contain"
        />
      </div>{' '}
      <div className="space-y-2 text-center font-yekta">
        <h2 className="font-bold text-text-main text-lg lg:text-3xl 2xl:text-4xl">
          چمدون علاقه‌مندی‌هات هنوز خالیه!
        </h2>
        <p className="text-text-foreground font-medium text-xs md:text-base lg:text-xl">
          جاهایی که دوست داری بری رو اینجا ذخیره کن تا برای سفر بعدیت کلی ایده
          داشته باشی.
        </p>
      </div>
      <TasteProfileDrawer />
    </div>
  );
}
 