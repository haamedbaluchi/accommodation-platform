import { useExplorePanelStore } from '@views/explore-page/model/explore-panel-store';
import { Accommodation } from '../model/types';
import { AccommodationCardView } from './accommodation-card-view';

export function AccommodationCard({
  accommodation,
}: {
  accommodation: Accommodation;
}) {
  const selectedItem = useExplorePanelStore((s) => s.selectedItem);
  const openDetails = useExplorePanelStore((s) => s.openDetails);
  const closeDetails = useExplorePanelStore((s) => s.closeDetails);

  const isSelected = selectedItem?.type === 'accommodation' && selectedItem.id === accommodation.id;

  return (
    <div
      onClick={() =>
        isSelected ? closeDetails() : openDetails(accommodation.id, 'accommodation')
      }
      className="cursor-pointer"
    >
      <AccommodationCardView
        accommodation={accommodation}
        //   actionsSlot={
        //     <div className="flex gap-2">
        //       <FavoriteButton itemId={accommodation.id} />
        //       <AddToPlanButton itemId={accommodation.id} />
        //     </div>
        //   }
      />
    </div>
  );
}
