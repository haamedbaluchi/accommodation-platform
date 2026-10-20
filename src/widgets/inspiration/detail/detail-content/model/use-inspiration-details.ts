import { getInspirationDetailsApi, InspirationDetailsResponse } from '@entities/travel-inspiration';
import { useQuery } from '@tanstack/react-query';

export const useInspirationDetails = (inspirationId: string) => {
  const query = useQuery<InspirationDetailsResponse,Error>({
    queryKey: ['inspiration-details', inspirationId],
    queryFn: () => getInspirationDetailsApi(inspirationId),
    enabled: Boolean(inspirationId),
  });

  return {
    details: query.data?.data,
    isLoading: query.isLoading,
    error: query.error,
  };
};