export interface TabItem {
  id: string | number;
  label: string;
  href?: string;
  icon: React.ReactNode;
  activeIcon?: React.ReactNode;
}

export interface TabBarProps {
  items: TabItem[];
  defaultActiveId?: string | number;
  onChange?: (item: TabItem) => void;
  className?: string;
  tabClassName?: string;
}