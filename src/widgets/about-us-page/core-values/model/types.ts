import { HugeiconsIconProps } from "@hugeicons/react";

export interface CoreValueItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly icon: HugeiconsIconProps['icon'];  
  readonly cardClassName: string;
  readonly iconClassName: string;
}


export interface CoreValuesProps {
  readonly items?: readonly CoreValueItem[];
  readonly className?: string;
  readonly heading?: string;
  readonly subtitle?: string;
}
