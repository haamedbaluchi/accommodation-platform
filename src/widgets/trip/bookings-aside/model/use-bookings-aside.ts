// import { useMemo } from 'react';

// import {
//   mapResearchDataToBookedFlights,
//   mapResearchDataToBookedHotels,
// } from '../lib/trip-bookings.mapper';
// import { useActiveAiMessage } from '@entities/chat';


// export const useBookingsAside = () => {
//   const aiMessage = useActiveAiMessage();

//   const flights = useMemo(() => {
//     return mapResearchDataToBookedFlights(aiMessage?.aiData?.researchData);
//   }, [aiMessage?.aiData?.researchData]);

//   const hotels = useMemo(() => {
//     return mapResearchDataToBookedHotels(aiMessage?.aiData?.researchData);
//   }, [aiMessage?.aiData?.researchData]);

//   return {
//     flights,
//     hotels,
//   };
// };
import { useMemo } from 'react';
import {
  mapResearchDataToBookedFlights,
  mapResearchDataToBookedHotels,
} from '../lib/trip-bookings.mapper';
import { useActiveAiMessage } from '@entities/chat';

export const useBookingsAside = () => {
  const aiMessage = useActiveAiMessage();

  const flights = useMemo(() => {
    return mapResearchDataToBookedFlights(aiMessage?.aiData?.researchData);
  }, [aiMessage?.aiData?.researchData]);

  const hotels = useMemo(() => {
    return mapResearchDataToBookedHotels(aiMessage?.aiData?.researchData);
  }, [aiMessage?.aiData?.researchData]);

  return { flights, hotels };
};