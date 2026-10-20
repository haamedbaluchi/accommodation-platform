import { getTouristPlaceAiDetailsApi, mapTouristPlaceToLocationDetails } from '@entities/tourist-place';
import { useQuery } from '@tanstack/react-query';

export function useTouristPlaceDetails(uid: string | null) {
  const query = useQuery({
    queryKey: ['tourist-place-ai-details', uid],
    queryFn: () => getTouristPlaceAiDetailsApi(uid!),
    enabled: Boolean(uid),
  });

  return {
    place: query.data ? mapTouristPlaceToLocationDetails(query.data.data) : undefined,
    isLoading: query.isLoading,
    error: query.error,
  };
}