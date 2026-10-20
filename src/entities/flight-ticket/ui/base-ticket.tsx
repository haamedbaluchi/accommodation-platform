import React, { ReactNode } from 'react';
import Image from 'next/image';
import { cn } from '@shared/lib';
import { AirPlaneIcon } from '@shared/assets/icons';

function TicketRoot({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      dir="ltr"
      className={cn(
        'flex w-full max-w-3xl bg-background rounded-3xl border border-border-foreground overflow-hidden relative font-yekta',
        className,
      )}
    >
      {children}
    </div>
  );
}

function TicketImage({ src, alt = 'Flight' }: { src: string; alt?: string }) {
  return (
    <div className="w-1/3 flex items-center justify-center p-6 relative bg-white">
      <div className="relative w-full h-13">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain drop-shadow-md"
        />
      </div>
    </div>
  );
}

function TicketDivider() {
  return (
    <div className="relative flex flex-col justify-between items-center w-0 border-l-2 border-dashed border-gray-200">
      <div className="z-10 absolute -top-7 -left-5.5 w-10 h-12 bg-white rounded-full border border-border-foreground" />
      <div className="absolute -bottom-7 -left-5.5 w-10 h-12 bg-white rounded-full border border-border-foreground" />
    </div>
  );
}

function TicketContent({ children }: { children: ReactNode }) {
  return <div className="w-2/3 flex flex-col bg-white">{children}</div>;
}

function TicketHeader({
  airline,
  flightNo,
}: {
  airline: ReactNode;
  flightNo: ReactNode;
}) {
  return (
    <div className="flex justify-between items-start pt-3 pl-5 md:pl-8 pr-3 md:pr-5 pb-1 md:pb-2">
      <div className="text-primary-active font-black text-sm sm:text-base md:text-lg font-yekta">
        {airline}
      </div>
      <div className="text-right">
        <span className="text-text-foreground text-[0.55rem] sm:text-[0.625rem] font-bold block">
          Flight No
        </span>
        <span className="font-bold text-text-main text-xs sm:text-sm md:text-base">{flightNo}</span>
      </div>
    </div>
  );
}

interface RouteProps {
  originCode: string;
  originCity: string;
  destCode: string;
  destCity: string;
  duration: string;
}
function TicketRoute({
  originCode,
  originCity,
  destCode,
  destCity,
  duration,
}: RouteProps) {
  return (
    <div className="flex items-start justify-between pl-5 md:pl-8 pr-3 md:pr-5 mb-2 md:mb-0">
      <div className="text-left w-12 sm:w-15 md:w-20">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-text-main tracking-tight">
          {originCode}
        </h2>
        <span className="text-text-foreground font-bold text-[0.625rem] sm:text-xs md:text-sm block">
          {originCity}
        </span>
      </div>

      <div className="flex-1 h-full flex flex-col items-center justify-center px-1 gap-1 sm:gap-2  md:gap-3">
        <div className="w-full flex items-center relative">
          <span className="shrink-0 inline-flex w-1.5 h-1.5 rounded-full bg-text-secondary"></span>

          <div className="h-0.5 w-full border-t-2 border-dashed border-bs-text-secondary"></div>
          <AirPlaneIcon className="w-5 h-5 sm:w-7 sm:h-7 absolute left-[50%] translate-x-[-50%]" />
          <div className="h-0.5 w-full border-t-2 border-dashed border-bs-text-secondary"></div>
          <span className="shrink-0 inline-flex w-1.5 h-1.5 rounded-full bg-text-secondary"></span>
        </div>
        <div className="mt-1 bg-accent px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[0.55rem] sm:text-[0.625rem] text-text-main font-bold font-sans">
          {duration}
        </div>
      </div>

      <div className="text-right w-12 sm:w-15 md:w-20">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-black text-text-main tracking-tight">
          {destCode}
        </h2>
        <span className="text-text-foreground font-bold text-[0.625rem] sm:text-xs md:text-sm block">
          {destCity}
        </span>
      </div>
    </div>
  );
}

function TicketFooter({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mt-auto bg-[#e6effc] flex justify-between px-6 py-1 rounded-br-3xl ${className}`}
    >
      {children}
    </div>
  );
}

function TicketFooterItem({
  label,
  value,
}: {
  label: string;
  value: ReactNode;
}) {
  return (
    <div className="flex flex-col justify-center h-full font-yekta">
      <span className="mt-0.5 text-text-foreground block text-[0.55rem] sm:text-[0.625rem] md:text-xs font-bold">
        {label}
      </span>
      <span className="font-extrabold text-text-main text-[0.55rem] sm:text-[0.625rem] md:text-xs">{value}</span>
    </div>
  );
}

export const BaseTicket = Object.assign(TicketRoot, {
  Image: TicketImage,
  Divider: TicketDivider,
  Content: TicketContent,
  Header: TicketHeader,
  Route: TicketRoute,
  Footer: TicketFooter,
  FooterItem: TicketFooterItem,
});
