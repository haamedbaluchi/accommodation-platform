export type Tab<T extends string = string> = {
  label: string;
  value: T;
  disabled?: boolean;
};

export interface CurvedSegmentTabsProps<T extends string> {
  tabs: readonly Tab<T>[];
  dir?: 'rtl' | 'ltr';
  orientation?: 'horizontal' | 'vertical';
  onChange?: (value: T) => void;
  defaultValue?: T;
  className?:string
}