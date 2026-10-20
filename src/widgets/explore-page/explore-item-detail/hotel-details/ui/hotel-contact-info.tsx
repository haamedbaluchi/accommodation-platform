import { PhoneIcon } from '@heroicons/react/24/outline';
import { GlobeIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { TelephoneIcon, WebsiteIcon } from '@shared/assets/icons';
import { Button } from '@shared/ui';

export function HotelContactInfo({
  phone,
  website,
}: {
  phone?: string;
  website?: string;
}) {
  if (!phone && !website) return null;

  return (
    <div className="flex items-start justify-between">
      <div className="flex items-start gap-2">
        <TelephoneIcon className="w-7 h-7" />
        <div className="flex flex-col font-yekta gap-0.5">
          <h4 className="font-bold text-sm sm:text-base text-text-main">
            تماس
          </h4>
          {phone && (
            <a
              href={`tel:${phone}`}
              className="font-medium text-xs sm:text-sm md:text-base text-text-main"
            >
              {phone}
            </a>
          )}
        </div>
      </div>

      {website && (
        <div className="flex items-start gap-2">
          <WebsiteIcon className="w-7 h-7" />
          <div className="flex flex-col font-yekta gap-0.5">
            <h4 className="font-bold text-sm sm:text-base text-text-main">
              سایت
            </h4>

            <Button
              variant="ghost"
              rounded="full"
              size="medium"
              className="mt-1 self-start"
              leftIcon={<HugeiconsIcon icon={GlobeIcon} className="w-5 h-5" />}
              onClick={() => window.open(website, '_blank')}
            >
              مشاهده
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
