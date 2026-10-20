import { TabBar } from '@shared/ui';
import { TabItem } from '@shared/ui/tab-bar';
import { contextPanelTabs } from '../model/context-panel-tabs';

type ContextTabBarProps = {
  defaultActiveId?: string;
  onChange?: (item: TabItem) => void;
  className?: string;
  tabClassName?: string;
};

export function ContextTabBar({
  defaultActiveId,
  onChange,
  className="max-w-100",
  tabClassName,
}: ContextTabBarProps) {
  return (
    <TabBar
      items={contextPanelTabs}
      defaultActiveId={defaultActiveId}
      onChange={onChange}
      className={className}
      tabClassName={tabClassName}
    />
  );
}
