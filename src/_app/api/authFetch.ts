import { useAuthStore } from "@features/auth";

const BASE_URL = '';

let isRefreshing = false;
let refreshPromise: Promise<any> | null = null;

async function refreshSession() {
  if (!isRefreshing) {
    isRefreshing = true;

    refreshPromise = fetch(`${BASE_URL}/api/v1/auth/refresh`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(async (res) => {
        const data = await res.json();

        if (!res.ok || !data?.success) {
          throw new Error('Refresh failed');
        }

        return data;
      })
      .finally(() => {
        isRefreshing = false;
      });
  }

  return refreshPromise;
}

export async function fetchWithRefresh(
  endpoint: string,
  options: RequestInit = {},
  retry = true,
): Promise<Response> {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    credentials: 'include',
  });

  if (response.status === 401 && retry) {
    try {
      await refreshSession();

      return fetchWithRefresh(endpoint, options, false);
    } catch {
      useAuthStore.getState().clearUser();

      throw {
        message: 'نشست شما منقضی شده است. لطفاً دوباره وارد شوید.',
        statusCode: 401,
        success: false,
      };
    }
  }

  return response;
}
