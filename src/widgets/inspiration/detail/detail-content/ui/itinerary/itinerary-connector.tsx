import { ItineraryStopTransition } from '../../model/types';
import { RouteInfo } from '@shared/ui/route-info';

type ItineraryConnectorProps = {
  transition: ItineraryStopTransition;
};

export function ItineraryConnector({ transition }: ItineraryConnectorProps) {
  return (
    <div className='py-2'>
      <RouteInfo
        distanceKm={transition.distanceKm}
        durationMinutes={transition.durationMinutes}
        className=" text-amber-600"
      />
    </div>
  );
}
