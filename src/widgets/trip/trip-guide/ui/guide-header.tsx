'use client';
import { CancelIcon } from '@shared/assets/icons';
import { Button, Tooltip } from '@shared/ui';

import { usePanelStore } from '@widgets/trip/trip-panel/model/panel.store';

export function GuideHeader() {
  const closeAside = usePanelStore((state) => state.setAsideStatus);
  return (
    <div className="w-full">
      <div className="flex items-center justify-between font-yekta">
        <h4 className="font-bold text-sm md:text-base lg:text-lg xl:text-2xl text-text-main">
          چطور از بومرو سوال بپرسم؟
        </h4>
        <Tooltip content="بستن">
          <Button
            size="icon"
            rounded="full"
            variant="ghost"
            aria-label="بستن سایدبار"
            onClick={() => closeAside(false)}
          >
            <CancelIcon className="w-4 h-4 md:w-6 md:h-6" />
          </Button>
        </Tooltip>
      </div>
      <p className="font-normal text-xs lg:text-base xl:text-lg font-yekta text-text-foreground mt-1">
        هر چیزی درباره سفر تو ذهنت هست، مثل حرف زدن با یه دوست از بومرو بپرس.
      </p>
    </div>
  );
}
