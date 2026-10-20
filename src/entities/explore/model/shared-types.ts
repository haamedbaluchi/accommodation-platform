export interface ExploreImageDTO {
  id?: number;
  url: string;
  alt: string;
  sort_order: number;
}

export interface ExploreListMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface ExploreListResponse<T> {
  success: boolean;
  message: string;
  data: T[];
  meta: ExploreListMeta;
}

export interface ExploreListParams {
  page?: number;
  limit?: number;
  city_id?: number | null;
  tag?: string | null;
  sort?: string;
  order?: 'asc' | 'desc';
}

export function buildExploreListQuery(params: ExploreListParams): string {
  const qs = new URLSearchParams();
  qs.set('page', String(params.page ?? 1));
  qs.set('limit', String(params.limit ?? 10));
  if (params.city_id) qs.set('city_id', String(params.city_id));
  if (params.tag) qs.set('tag', params.tag);
  qs.set('sort', params.sort ?? 'created_at');
  qs.set('order', params.order ?? 'desc');
  return qs.toString();
}