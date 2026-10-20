import dynamic from 'next/dynamic';
import { Loader } from '@shared/ui';
import { LocationIcon } from '@shared/assets/icons';

const Map = dynamic(() => import('@shared/ui/map').then((mod) => mod.Map), {
  ssr: false,
  loading: () => (
    <div className="w-full h-75 sm:h-100 md:h-138">
      <Loader size={7} />
    </div>
  ),
});

interface LocationMapViewProps {
  shortAddress: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export function LocationMapView({
  shortAddress,
  coordinates,
}: LocationMapViewProps) {
  return (
    <section className="mt-4 sm:mt-6 md:mt-8 px-4 md:px-7">
      <h5 className="font-bold text-base text-text-main">کجاست؟</h5>

      <div className="flex items-center gap-1">
        <LocationIcon className="w-4 h-4 md:w-5 md:h-5" />

        <p className="font-normal text-sm md:text-base text-text-foreground">
          {shortAddress}
        </p>
      </div>

      <div className="w-full h-75 sm:h-100 md:h-138 mt-3 rounded-xl overflow-hidden">
        <Map
          lat={coordinates.lat}
          lng={coordinates.lng}
          readonly
          className="w-full h-full"
        />
      </div>
    </section>
  );
}
