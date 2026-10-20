import { fetchWithRefresh } from "@_app/api";

export async function streamClient(
  endpoint: string,
  options: RequestInit = {},
): Promise<Response> {
  const response = await fetchWithRefresh(endpoint, {
    ...options,
  });

  if (!response.ok) {
    throw new Error(
      `Stream request failed with status ${response.status}`,
    );
  }

  return response;
}