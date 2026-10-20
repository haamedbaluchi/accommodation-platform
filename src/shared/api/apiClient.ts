import { fetchWithRefresh } from "@_app/api";

interface ApiClientOptions<TParams = Record<string, unknown>>
  extends RequestInit {
  params?: TParams;
}

export async function apiClient<T, TParams = Record<string, unknown>>(
  endpoint: string,
  options: ApiClientOptions<TParams> = {},
): Promise<T> {
  const { params, ...fetchOptions } = options;

  const searchParams = new URLSearchParams();

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        searchParams.append(key, String(value));
      }
    });
  }

  const url = searchParams.toString()
    ? `${endpoint}?${searchParams.toString()}`
    : endpoint;

  const response = await fetchWithRefresh(url, {
    ...fetchOptions,
    headers: {
      "Content-Type": "application/json",
      ...fetchOptions.headers,
    },
  });

  const text = await response.text();

  let data: any = null;

  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = null;
  }

  if (!response.ok) {
    throw Object.assign(
      new Error(data?.message || data?.detail || "خطایی رخ داده است."),
      {
        detail: data?.detail,
        statusCode: response.status,
        success: data?.success,
      },
    );
  }

  return data as T;
}