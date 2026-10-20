import { Button } from '@shared/ui';
import { PlaceIcon, RoutingIcon } from '@shared/assets/icons';

export function LocationFullAddress({
  fullAddress,
  mapLink,
}: {
  fullAddress: string;
  mapLink?: string;
}) {
  const handleNavigate = () => {
    if (!mapLink) return;

    window.open(mapLink, '_blank');
  };

  return (
    <div className="flex items-start gap-2">
      <PlaceIcon className="w-7 h-7" />
      <div className="flex flex-col font-yekta">
        <h4 className="font-bold text-sm sm:text-base text-text-main">
          کجاست؟
        </h4>
        <p className="font-medium text-xs sm:text-sm md:text-base text-text-main">
          {fullAddress}
        </p>
        <Button
          variant="ghost"
          rounded="full"
          size="medium"
          className="mt-1 self-start"
          leftIcon={<RoutingIcon className="w-5 h-5" />}
          onClick={handleNavigate}
        >
          مسیریابی
        </Button>
      </div>
    </div>
  );
}
