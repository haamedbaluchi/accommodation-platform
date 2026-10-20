import { useExplorePanelStore } from '@views/explore-page/model/explore-panel-store';
import { LocalEvent } from '../model/types';
import { LocalEventCardView } from './local-event-card-view';

export function LocalEventCard({ event }: { event: LocalEvent }) {
  const selectedItem = useExplorePanelStore((s) => s.selectedItem);
  const openDetails = useExplorePanelStore((s) => s.openDetails);
  const closeDetails = useExplorePanelStore((s) => s.closeDetails);

  const isSelected =
    selectedItem?.type === 'event' && selectedItem.id === event.id;

  return (
    <div
      onClick={() =>
        isSelected ? closeDetails() : openDetails(event.id, 'event')
      }
      className="cursor-pointer"
    >
      <LocalEventCardView
        event={event}
        //   actionsSlot={
        //     <div className="flex gap-2">
        //       <FavoriteButton itemId={event.id} />
        //       <AddToPlanButton itemId={event.id} />
        //     </div>
        //   }
      />
    </div>
  );
}
