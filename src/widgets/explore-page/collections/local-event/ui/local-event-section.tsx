
import { GridSection } from '@shared/ui/layout-section';
import type { LocalEvent } from '../model/types';

import { LocalEventCard } from './local-event-card';

type LocalEventSectionProps = {
  events: LocalEvent[];
};

export function LocalEventSection({
  events,
}: LocalEventSectionProps) {
  return (
    <GridSection
      title="این روزها کجا چه خبره؟"
      icon={<span>🎭</span>}
      seeAllHref="/explore/local-events"
      items={events}
      renderItem={(event) => (
        <LocalEventCard event={event} />
      )}
    />
  );
}