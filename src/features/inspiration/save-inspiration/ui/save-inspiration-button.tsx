// features/inspiration/save-inspiration/ui/save-inspiration-button.tsx
import { PlusIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';
import { Button } from '@shared/ui';
import { useToggleFavorite } from '../model/use-toggle-favorite';

interface SaveInspirationButtonProps {
  inspirationId: string;
  isFavorited: boolean; // دیگه اختیاری نیست، همیشه از بکند میاد
}

export function SaveInspirationButton({ inspirationId, isFavorited }: SaveInspirationButtonProps) {
  const { toggleFavorite, isPending } = useToggleFavorite(inspirationId, isFavorited);

  return (
    <Button
      rounded="full"
      size="medium"
      variant="secondary"
      className="bg-black/35 px-5 py-2 text-sm backdrop-blur-md transition hover:bg-black/50 text-background"
      leftIcon={isFavorited ? <HeartSolid className="size-4 text-red-500" /> : <PlusIcon className="size-4" />}
      onClick={() => toggleFavorite()}
      disabled={isPending}
    >
      {isFavorited ? 'ذخیره شد' : 'افزودن به سفر من'}
    </Button>
  );
}