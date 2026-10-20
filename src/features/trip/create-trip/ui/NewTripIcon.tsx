import { cn } from '@shared/lib';
import { SVGProps } from 'react';

interface NewTripIconProps extends SVGProps<SVGSVGElement> {}

export function NewTripIcon({
  className="",
  ...props
}: NewTripIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 120"
      className={cn('w-5.25 h-8', className)}
      {...props}
    >
      <g style={{ transformOrigin: '40px 90px' }}>
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0;0;0;0;0;0;0;0;0;0;0;0;-11;11;-8;8;-5;5;-3;3;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0"
          dur="4s"
          repeatCount="indefinite"
          additive="sum"
        />

        <rect x="29" y="1" width="4" height="22" rx="2" fill="#CC4A00" />
        <rect x="47" y="1" width="4" height="22" rx="2" fill="#CC4A00" />
        <rect x="27" y="1" width="26" height="5" rx="2.5" fill="#CC4A00" />

        <rect x="30" y="22" width="5" height="6" rx="1.5" fill="#AA3D00" />
        <rect x="45" y="22" width="5" height="6" rx="1.5" fill="#AA3D00" />

        <rect x="10" y="26" width="60" height="78" rx="8" fill="#FF6B35" />
        <rect
          x="10"
          y="26"
          width="60"
          height="78"
          rx="8"
          fill="none"
          stroke="#CC4A00"
          strokeWidth="2.5"
        />

        <rect x="10" y="62" width="60" height="5" fill="#CC4A00" />

        <rect x="33" y="58" width="14" height="13" rx="3" fill="#AA3D00" />
        <rect x="36" y="60" width="8" height="9" rx="2" fill="#FF8C5A" />
        <circle cx="40" cy="65" r="2" fill="#AA3D00" />

        <line
          x1="10"
          y1="42"
          x2="70"
          y2="42"
          stroke="#CC4A00"
          strokeWidth="1"
          opacity="0.5"
        />
        <line
          x1="10"
          y1="54"
          x2="70"
          y2="54"
          stroke="#CC4A00"
          strokeWidth="1"
          opacity="0.5"
        />
        <line
          x1="10"
          y1="75"
          x2="70"
          y2="75"
          stroke="#CC4A00"
          strokeWidth="1"
          opacity="0.5"
        />
        <line
          x1="10"
          y1="87"
          x2="70"
          y2="87"
          stroke="#CC4A00"
          strokeWidth="1"
          opacity="0.5"
        />

        <rect x="10" y="99" width="60" height="5" rx="2" fill="#AA3D00" />

        <ellipse cx="22" cy="108" rx="7" ry="5" fill="#222" />
        <ellipse cx="22" cy="108" rx="4" ry="3" fill="#444" />
        <circle cx="22" cy="108" r="1.5" fill="#666" />

        <ellipse cx="58" cy="108" rx="7" ry="5" fill="#222" />
        <ellipse cx="58" cy="108" rx="4" ry="3" fill="#444" />
        <circle cx="58" cy="108" r="1.5" fill="#666" />

        <circle
          cx="67"
          cy="92"
          r="16"
          fill="#1a6fdb"
          stroke="white"
          strokeWidth="2.5"
        />

        <line
          x1="67"
          y1="80"
          x2="67"
          y2="104"
          stroke="white"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        <line
          x1="55"
          y1="92"
          x2="79"
          y2="92"
          stroke="white"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}