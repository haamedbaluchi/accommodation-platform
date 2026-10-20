import { CURVED_SEGMENT_TABS_CONFIG } from "../config/curvedSegmentTabs.config";

export type PathProps = {
  segmentCount: number;
  config?: Partial<typeof CURVED_SEGMENT_TABS_CONFIG>;
};

export function generateCurvedSegmentPath({
  segmentCount,
  config = {},
}: PathProps) {
  const cfg = { ...CURVED_SEGMENT_TABS_CONFIG, ...config };

  const N = segmentCount;
  const totalWidth = N * (cfg.buttonWidth);
  const {
    height,
    dipWidth,
    dipDepth,
    topSmoothness,
    bottomSmoothness,
    strokeWidth,
  } = cfg;

  const yMin = strokeWidth / 2;
  const yMax = height - strokeWidth / 2;
  const radius = (yMax - yMin) / 2;

  const topCpOffset = dipWidth * topSmoothness;
  const bottomCpOffset = dipWidth * bottomSmoothness;

  let path = `M ${radius + yMin} ${yMin}`;

  // Top edge with dips
  for (let i = 1; i < N; i++) {
    const cx = i * (cfg.buttonWidth);
    const startX = cx - dipWidth / 2;
    const endX = cx + dipWidth / 2;

    path += ` L ${startX} ${yMin}`;
    path += ` C ${startX + topCpOffset} ${yMin}, ${cx - bottomCpOffset} ${yMin + dipDepth}, ${cx} ${yMin + dipDepth}`;
    path += ` C ${cx + bottomCpOffset} ${yMin + dipDepth}, ${endX - topCpOffset} ${yMin}, ${endX} ${yMin}`;
  }

  // Right rounded corner
  path += ` L ${totalWidth - radius - yMin} ${yMin}`;
  path += ` A ${radius} ${radius} 0 0 1 ${totalWidth - yMin} ${height / 2}`;
  path += ` A ${radius} ${radius} 0 0 1 ${totalWidth - radius - yMin} ${yMax}`;

  // Bottom edge with dips
  for (let i = N - 1; i >= 1; i--) {
    const cx = i * (cfg.buttonWidth);
    const startX = cx + dipWidth / 2;
    const endX = cx - dipWidth / 2;

    path += ` L ${startX} ${yMax}`;
    path += ` C ${startX - topCpOffset} ${yMax}, ${cx + bottomCpOffset} ${yMax - dipDepth}, ${cx} ${yMax - dipDepth}`;
    path += ` C ${cx - bottomCpOffset} ${yMax - dipDepth}, ${endX + topCpOffset} ${yMax}, ${endX} ${yMax}`;
  }

  // Left rounded corner
  path += ` L ${radius + yMin} ${yMax}`;
  path += ` A ${radius} ${radius} 0 0 1 ${yMin} ${height / 2}`;
  path += ` A ${radius} ${radius} 0 0 1 ${radius + yMin} ${yMin}`;
  path += ` Z`;

  return path;
}