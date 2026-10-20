'use client';

import { cn } from '@shared/lib';
import { ReactNode, useEffect, useRef } from 'react';

interface NewTripCoachmarkProps {
  children: ReactNode;
  className?:string
}

export function NewTripCoachmark({ children ,className=""}: NewTripCoachmarkProps) {
  const tooltipRef = useRef<HTMLDivElement>(null);

  const showTooltip = () => {
    if (!tooltipRef.current) return;

    tooltipRef.current.classList.remove('opacity-0', 'translate-x-2');

    tooltipRef.current.classList.add('opacity-100', 'translate-x-0');

    setTimeout(() => {
      tooltipRef.current?.classList.remove('opacity-100', 'translate-x-0');

      tooltipRef.current?.classList.add('opacity-0', 'translate-x-2');
    }, 3500);
  };

  useEffect(() => {
    const firstTimer = setTimeout(showTooltip, 3000);

    const interval = setInterval(showTooltip, 15000);

    return () => {
      clearTimeout(firstTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={cn("relative inline-flex items-center",className)}>
      <div className="absolute inset-0 rounded-full bg-orange-400/20 animate-ping pointer-events-none" />

      {children}
      <div
        ref={tooltipRef}
        className="absolute left-full top-1/2 ml-3 -translate-y-1/2 translate-x-2 opacity-0 transition-all duration-500 pointer-events-none z-50"
      >
        <div
          className="relative flex items-center gap-2 rounded-full border px-3 py-1.5 whitespace-nowrap shadow-lg backdrop-blur-sm"
          style={{
            background: '#F4F8FF',
            borderColor: '#B8D5FF',
            color: '#00419B',
            boxShadow: '0 8px 20px rgba(0,93,224,.12)',
          }}
        >
          <div
            className="absolute top-1/2 -left-[4px] -translate-y-1/2 h-3 w-3 rotate-45 border-l border-b"
            style={{
              background: '#F4F8FF',
              borderColor: '#B8D5FF',
            }}
          />

          {/* Pulse Dot */}
          <span className="relative flex h-2.5 w-2.5">
            <span
              className="absolute inline-flex h-full w-full rounded-full animate-ping"
              style={{
                background: '#005DE0',
                opacity: 0.45,
              }}
            />

            <span
              className="relative inline-flex h-2.5 w-2.5 rounded-full"
              style={{
                background: '#005DE0',
              }}
            />
          </span>

          <span className="text-xs font-semibold">
            سفر جدید
          </span>
        </div>
      </div>
    </div>
  );
}