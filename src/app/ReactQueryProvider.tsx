'use client';

import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import {
  ReactNode,
  useState,
} from 'react';

import {
  MODAL_ITEMS,
  useModalStore,
} from '@_app/modal';

import {
  ApiError,
} from '@shared/api';

function isApiError(
  error: unknown,
): error is ApiError {
  return (
    typeof error === 'object' &&
    error !== null &&
    'statusCode' in error &&
    typeof error.statusCode === 'number'
  );
}

function handleUnauthorized(error: unknown) {
  if (!isApiError(error)) {
    return;
  }

  if (error.statusCode === 401) {
    const {
      isOpen,
      type,
      openModal,
    } = useModalStore.getState();

    if (
      !isOpen ||
      type !== MODAL_ITEMS.AUTH
    ) {
      openModal(MODAL_ITEMS.AUTH);
    }
  }
}

export default function ReactQueryProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: handleUnauthorized,
        }),

        mutationCache: new MutationCache({
          onError: handleUnauthorized,
        }),

        defaultOptions: {
          queries: {
            throwOnError: (error) =>
              isApiError(error) &&
              error.statusCode >= 500,

            retry: (
              failureCount,
              error,
            ) => {
              if (
                isApiError(error) &&
                (
                  error.statusCode === 401 ||
                  error.statusCode >= 500
                )
              ) {
                return false;
              }

              return failureCount < 2;
            },

            refetchOnWindowFocus: false,
          },

          mutations: {
            retry: false,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}