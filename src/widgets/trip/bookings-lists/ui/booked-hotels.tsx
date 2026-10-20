
import { MODAL_ITEMS, useModalStore } from '@_app/modal';
import { EmptyBookedList } from './empty-booked-flights';
import { BookedHotel, mockBookedHotels } from '@entities/hotel-booking';

export function BookedHotels({
  bookedHotels = mockBookedHotels,
}: {
  bookedHotels: BookedHotel[];
}) {
  const openModal = useModalStore((state) => state.openModal);
  const handleBookingHotel = () => {
    openModal(MODAL_ITEMS.RESERVEHOTEL);
  };
  return (
    <div>
      {/* {bookedHotels.length === 0 ? ( */}
        <EmptyBookedList
          imageAlt="لیست هتل های رزرو شده"
          title="لیست رزروهات هنوز خالیه"
          description="برای شروع ماجراجویی بعدی خود، یک هتل رزرو کنید. اگه جایی رزرو کردی بهمون بگو"
          btnTitle="ثبت اقامتگاه جدید"
          handleClick={handleBookingHotel}
        />
      {/* ) : ( */}
        {/* <div className="w-full">
          <div className="flex flex-col gap-5 my-5">
            {bookedHotels.map((hotel) => (
              <HotelBookingCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
          <Button
            rounded="full"
            size="large"
            className="w-full"
            leftIcon={<PlusIcon className="w-4 h-4" />}
            onClick={handleBookingHotel}
          >
            ثبت اقامتگاه جدید
          </Button>
        </div>
      )} */}
    </div>
  );
}
