import React, { ReactNode } from 'react';

interface LabelSectionProps {
  label: string;
  description: string;
  icon: ReactNode;
}

export function LabelSection({ label, description, icon }: LabelSectionProps) {
  return (
    <div className="flex gap-2.5">
      {icon && <span>{icon}</span>}
      <div className="flex flex-col gap-9">
        <div className="flex flex-col font-yekta">
          <h4 className="text-sm md:text-base lg:text-lg xl:text-xl text-text-main font-bold">{label}</h4>
          <span className="font-normal text-[0.625rem] md:text-xs lg:text-sm xl:text-base text-text-foreground">
            {description}
          </span>
        </div>
      </div>
    </div>
  );
}
