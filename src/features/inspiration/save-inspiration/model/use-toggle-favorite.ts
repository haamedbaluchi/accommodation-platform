// features/inspiration/save-inspiration/model/use-toggle-favorite.ts
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  addInspirationToFavoriteApi,
  removeInspirationFromFavoriteApi,
  type InspirationDetailsResponse,
  type InspirationsListResponse,
} from '@entities/travel-inspiration';

export function useToggleFavorite(inspirationId: string, isFavorited: boolean) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () =>
      isFavorited
        ? removeInspirationFromFavoriteApi(inspirationId)
        : addInspirationToFavoriteApi(inspirationId),

    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ['inspiration-details', inspirationId] });
      await queryClient.cancelQueries({ queryKey: ['inspirations'] });

      const previousDetails = queryClient.getQueryData<InspirationDetailsResponse>([
        'inspiration-details',
        inspirationId,
      ]);
      const previousLists = queryClient.getQueriesData<InspirationsListResponse>({
        queryKey: ['inspirations'],
      });

      // آپدیت خوش‌بینانه‌ی جزییات
      if (previousDetails) {
        queryClient.setQueryData<InspirationDetailsResponse>(
          ['inspiration-details', inspirationId],
          {
            ...previousDetails,
            data: { ...previousDetails.data, is_favorited: !isFavorited },
          },
        );
      }

      // آپدیت خوش‌بینانه‌ی همه‌ی لیست‌های کش‌شده
      previousLists.forEach(([queryKey, listData]) => {
        if (!listData) return;

        queryClient.setQueryData<InspirationsListResponse>(queryKey, {
          ...listData,
          data: listData.data.map((item) =>
            String(item.id) === inspirationId
              ? { ...item, is_favorited: !isFavorited }
              : item,
          ),
        });
      });

      return { previousDetails, previousLists };
    },

    onError: (_err, _vars, context) => {
      // اگه ریکوئست خورد به مشکل، برگردون به حالت قبلی
      if (context?.previousDetails) {
        queryClient.setQueryData(['inspiration-details', inspirationId], context.previousDetails);
      }
      context?.previousLists?.forEach(([queryKey, listData]) => {
        queryClient.setQueryData(queryKey, listData);
      });
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['inspiration-details', inspirationId] });
      queryClient.invalidateQueries({ queryKey: ['inspirations'] });
    },
  });

  return { toggleFavorite: mutation.mutate, isPending: mutation.isPending };
}