import { TabBar } from '@shared/ui';
import { TabItem } from '@shared/ui/tab-bar';
import { tripPanelTabs } from '../model/trip-panel-tabs';

type TripTabBarProps = {
  defaultActiveId?: string;
  onChange?: (item: TabItem) => void;
  className?: string;
  tabClassName?: string;
};

export function TripTabBar({
  defaultActiveId,
  onChange,
  className,
  tabClassName,
}: TripTabBarProps) {
  return (
    <TabBar
      items={tripPanelTabs}
      defaultActiveId={defaultActiveId}
      onChange={onChange}
      className={className}
      tabClassName={tabClassName}
    />
  );
}
