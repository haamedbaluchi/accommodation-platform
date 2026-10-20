import { whyBoomroItems } from '../../model/business-why.data';
import { BusinessWhyItem } from './business-why-item';

export function BusinessWhyItems() {
  return (
    <div className="flex flex-col gap-4">
      {whyBoomroItems.map((item) => (
        <BusinessWhyItem key={item.number} item={item} />
      ))}
    </div>
  );
}
