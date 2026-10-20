import { CityDto } from '@entities/destination';
import { apiClient, ApiError } from '@shared/api';
import { useQuery, type UseQueryOptions } from '@tanstack/react-query';

export type GetCitiesParams = {
  skip?: number;
  limit?: number;
  search?: string | null;
};

export type GetCitiesResponse = {
  success: boolean;
  message: string;
  data: CityDto[];
};

export type CitiesQueryKey = readonly [
  'locations',
  'cities',
  {
    skip: number;
    limit: number;
    search: string | null;
  },
];

export const citiesQueryKeys = {
  all: ['locations', 'cities'] as const,

  list: (params: Required<GetCitiesParams>): CitiesQueryKey =>
    ['locations', 'cities', params] as const,
};
const DEFAULT_CITIES_PARAMS = {
  skip: 0,
  limit: 100,
  search: null,
} satisfies Required<GetCitiesParams>;
function normalizeCitiesParams(
  params?: GetCitiesParams,
): Required<GetCitiesParams> {
  return {
    skip: params?.skip ?? DEFAULT_CITIES_PARAMS.skip,
    limit: params?.limit ?? DEFAULT_CITIES_PARAMS.limit,
    search: params?.search ?? DEFAULT_CITIES_PARAMS.search,
  };
}

function createCitiesEndpoint(params: Required<GetCitiesParams>) {
  const searchParams = new URLSearchParams({
    skip: String(params.skip),
    limit: String(params.limit),
  });

  if (params.search) {
    searchParams.append('search', params.search);
  }

  return `/api/v1/locations/cities?${searchParams.toString()}`;
}
async function getCities(
  params: Required<GetCitiesParams>,
  signal?: AbortSignal,
): Promise<CityDto[]> {
  const response = await apiClient<GetCitiesResponse>(
    createCitiesEndpoint(params),
    {
      method: 'GET',
      signal,
    },
  );

  return response.data;
}
type UseGetCitiesOptions = Omit<
  UseQueryOptions<CityDto[], ApiError, CityDto[], CitiesQueryKey>,
  'queryKey' | 'queryFn'
>;

export function useGetCities(
  params?: GetCitiesParams,
  options?: UseGetCitiesOptions,
) {
  const normalizedParams = normalizeCitiesParams(params);

  return useQuery<CityDto[], ApiError, CityDto[], CitiesQueryKey>({
    queryKey: citiesQueryKeys.list(normalizedParams),

    queryFn: ({ signal }) => getCities(normalizedParams, signal),
    placeholderData: (previousData) => previousData,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: 1000 * 60 * 5,

    ...options,
  });
}
