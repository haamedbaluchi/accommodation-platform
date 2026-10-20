import {
  generateCurvedSegmentPath,
  PathProps,
} from '../lib/generateCurvedSegmentPath';
import { CURVED_SEGMENT_TABS_CONFIG } from '../config/curvedSegmentTabs.config';

type Props = PathProps & {
  className?: string;
  fill?: string;
  stroke?: string;
};

export function CurvedSegmentPath({
  segmentCount,
  config,
  className,
  fill = '#ffffff',
  stroke = '#cbcbcb',
}: Props) {
  const cfg = { ...CURVED_SEGMENT_TABS_CONFIG, ...config };
  const totalWidth = segmentCount * cfg.buttonWidth;
  const path = generateCurvedSegmentPath({ segmentCount, config });

  return (
    <svg
      className={`absolute inset-0 pointer-events-none drop-shadow-sm ${className ?? ''}`}
      width={totalWidth}
      height={cfg.height}
      viewBox={`0 0 ${totalWidth} ${cfg.height}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={path}
        fill={fill}
        stroke={stroke}
        strokeWidth={cfg.strokeWidth}
      />
    </svg>
  );
}
