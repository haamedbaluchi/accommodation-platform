import dynamic from 'next/dynamic';
import { Loader } from '@shared/ui';

const dynamicLoading = () => (
  <div className="h-200">
    <Loader size={8} />
  </div>
);

export const BookingsAside = dynamic(
  () => import('@widgets/trip/bookings-aside').then((mod) => mod.BookingsAside),
  {
    ssr: false,
    loading: dynamicLoading,
  },
);

export const TripMap = dynamic(() => import('@widgets/trip/trip-map'), {
  ssr: false,
  loading: dynamicLoading,
});
