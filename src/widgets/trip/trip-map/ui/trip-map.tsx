'use client';
import dynamic from 'next/dynamic';

import { Loader } from '@shared/ui';

import TripMapHeader from './trip-map-header';
import { useTripMap } from '../model/use-trip-map';
import { usePanelStore } from '@widgets/trip/trip-panel/model/panel.store';


const Map = dynamic(() => import('@shared/ui/map').then((mod) => mod.Map), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <Loader size={8} />
    </div>
  ),
});

type TripMapProps = {
  onBack?: VoidFunction;
  onClose?: VoidFunction;
};

export default function TripMap({ onBack, onClose }: TripMapProps) {

  const closeAside = usePanelStore((state) => state.setAsideStatus);

  const { mapPoints, coords, setCoords } = useTripMap();

  const handleClose = () => {
    if (onClose) {
      onClose();
      return;
    }

    closeAside(false);
  };

  return (
    <div className="relative h-full w-full">
      <TripMapHeader onBack={onBack!} onClose={handleClose} />
      <Map
        lat={coords.lat}
        lng={coords.lng}
        points={mapPoints}
        onChange={setCoords}
        className='w-full h-full'
      />
    </div>
  );
}
