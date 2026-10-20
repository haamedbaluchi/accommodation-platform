'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Loader } from '@shared/ui';

import { TabType } from '../model/types';
import { BookingsAsideHeader } from './bookings-aside-header';
import { useBookingsAside } from '../model/use-bookings-aside';
import { BookedFlights } from '@widgets/trip/bookings-lists';


const BookedHotels = dynamic(
  () =>
    import('@widgets/trip/bookings-lists').then((mod) => mod.BookedHotels),
  {
    ssr: false,
    loading: () => (
      <div className="h-162">
        <Loader size={8} />
      </div>
    ),
  },
);

export function BookingsAside({ onClose }: { onClose?: VoidFunction }) {
  const [activeTab, setActiveTab] = useState<TabType>('Flights');

  const { flights, hotels } = useBookingsAside();
  return (
    <div className="w-full h-auto p-4 2xl:p-7 overflow-y-auto custom-scrollbar">
      <BookingsAsideHeader
        activeTab={activeTab}
        changeTabs={setActiveTab}
        onClose={onClose}
      />

      {activeTab === 'Flights' && <BookedFlights flights={flights} />}
      {activeTab === 'Hotels' && <BookedHotels bookedHotels={hotels} />}
    </div>
  );
}
