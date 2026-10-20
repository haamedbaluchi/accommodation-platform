import { NotificationCard, NotificationGroup } from '@entities/notification';
import { Divider } from '@shared/ui';

interface NotificationGroupSectionProps {
  group: NotificationGroup;
  onRead?: (id: string) => void;
}

export function NotificationGroupSection({
  group,
  onRead,
}: NotificationGroupSectionProps) {
  return (
    <section>
      <Divider text={group.label} />
      <div className="flex flex-col gap-3">
        {group.items.map((item) => (
          <NotificationCard key={item.id} notification={item} onRead={onRead} />
        ))}
      </div>
    </section>
  );
}
