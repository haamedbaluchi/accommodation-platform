export type StayDateTime = {
  date: string;
  time: string;
};

export type RoomDetails = {
  title: string; 
  guestCount: number; 
  bedCount: number; 
};

export type BookedHotel = {
  id: string;
  hotelName: string;
  thumbnailUrl: string;
  rating: number; 
  roomInfo: RoomDetails;
  checkIn: StayDateTime;
  checkOut: StayDateTime;
  reservationCode: string; 
  price: number;
};
