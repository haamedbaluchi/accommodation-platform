import { Chip } from '@shared/ui';
import { GirlIcon, PlusIcon, TickIcon } from '@shared/assets/icons';

export function ContactsChip({ contacts }: { contacts: string[] }) {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      {contacts.map((contact) => (
        <Chip
          key={contact}
          variant="primary"
          text={contact}
        >
          <TickIcon className="w-3 h-3" />
        </Chip>
      ))}
    </div>
  );
}
