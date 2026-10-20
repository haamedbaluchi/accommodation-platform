'use client';

import { cn } from '@shared/utils';
import React from 'react';

interface ProgressCardProps {
  current: number;
  total: number;
  title?: string;
  className?: string;
}

export function ProgressCard({
  current,
  total,
  title,
  className,
}: ProgressCardProps) {
  const percentage = Math.min(Math.round((current / total) * 100), 100);

  return (
    <div
      className={cn(
        'w-full rounded-3xl bg-active-item-background/50 pt-5 pb-3 px-6 shadow-sm',
        className,
      )}
    >
      <div className="flex items-center gap-2 mb-3">
        <p className="text-sm font-bold text-gray-800">
          {title ||
            `تا حالا ${current} تا از ${total} آرزوی سفرت رو تیک زدی! پیش به سوی ماجراجویی بعدی 🎒`}
        </p>
      </div>

      <div className="relative h-1.5 flex-1 rounded-full bg-white mb-2">
        <div
          className="absolute right-0 h-full rounded-full bg-[#1a73e8] transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className='flex justify-end'>
        <span className=" text-base font-bold text-primary tabular-nums">
          {current}/{total}
        </span>
      </div>
    </div>
  );
}
