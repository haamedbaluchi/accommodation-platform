import { apiClient } from '@shared/api';
import { Inspiration } from '../model/types';


export interface InspirationsListPayload {
    page?:number,
    limit?:number,
    search?:string
    sort ?:"created_at"|"title"|"city"
    order?:"desc"|"asc"
}

export interface InspirationsListResponse {
  success: boolean;
  message: string;
  data: Inspiration[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export const getInspirationsApi = (
  payload: InspirationsListPayload,
) =>
  apiClient<InspirationsListResponse,InspirationsListPayload>(
    "/api/v1/travel-inspirations",
    {
      method: "GET",
      params:payload
    },
  );
