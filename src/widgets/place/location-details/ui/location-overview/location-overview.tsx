import { useState } from 'react';
import { CurvedSegmentTabs } from '@shared/ui';
import { PeapleComments } from './peaple-comments';
import { LocationSummary } from './location-summary';
import { AddressLocationInfo } from './address-location-info';

type TabsType = 'summary' | 'peapleComments' | 'addressInfo';
const TAB_ITEMS: { label: string; value: TabsType }[] = [
  { label: 'یه نگاه کلی', value: 'summary' },
  { label: 'بقیه چی میگن؟', value: 'peapleComments' },
  { label: 'کجاست دقیقاً؟', value: 'addressInfo' },
];
export function LocationOverview({
  locationSummary,
}: {
  locationSummary: string;
}) {
  const [activeTab, setActiveTab] = useState<TabsType>('summary');

  return (
    <section>
      <div className="flex flex-col gap-5 items-center">
        <CurvedSegmentTabs
          tabs={TAB_ITEMS}
          defaultValue={activeTab}
          onChange={(val) => setActiveTab(val)}
        />

        {activeTab === 'summary' && (
          <LocationSummary locationSummary={locationSummary} />
        )}
        {activeTab === 'peapleComments' && <PeapleComments />}
        {activeTab === 'addressInfo' && <AddressLocationInfo />}
      </div>
    </section>
  );
}
