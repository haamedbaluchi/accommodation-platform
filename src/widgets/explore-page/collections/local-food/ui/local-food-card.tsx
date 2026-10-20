// widgets/explore/local-food-card/ui/LocalFoodCard.tsx

import { useExplorePanelStore } from '@views/explore-page/model/explore-panel-store';
import { LocalFood } from '../model/types';
import { LocalFoodCardView } from './local-food-card-view';

export function LocalFoodCard({ food }: { food: LocalFood }) {
  const selectedItem = useExplorePanelStore((s) => s.selectedItem);
  const openDetails = useExplorePanelStore((s) => s.openDetails);
  const closeDetails = useExplorePanelStore((s) => s.closeDetails);

  const isSelected =
    selectedItem?.type === 'restaurant' && selectedItem.id === food.id;

  return (
    <div
      onClick={() =>
        isSelected ? closeDetails() : openDetails(food.id, 'restaurant')
      }
      className="cursor-pointer"
    >
      <LocalFoodCardView
        food={food}
        //   actionsSlot={
        //     <div className="flex gap-2">
        //       <FavoriteButton itemId={food.id} />
        //       <AddToPlanButton itemId={food.id} />
        //     </div>
        //   }
      />
    </div>
  );
}
