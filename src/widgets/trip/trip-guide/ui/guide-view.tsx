import { GuideHeader } from './guide-header';
import { Divider } from '@shared/ui';
import GuideSection from './guide-section';

export function GuideView() {
  return (
    <div className="max-w-100 md:max-w-100 lg:max-w-139 xl:max-w-145 2xl:max-w-2xl h-auto p-2 sm:p-3 md:p-5 lg:p-7 overflow-y-auto custom-scrollbar">
      <GuideHeader />
      <Divider className="my-2 md:my-3 lg:my-4" />
      <GuideSection />
    </div>
  );
}
