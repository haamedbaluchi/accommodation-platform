import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import ctaBg from "/public/images/travel-bg.png";
import { cn } from "@shared/lib";

export interface TravelCtaProps {
  readonly image?: StaticImageData;
  readonly heading?: string;
  readonly buttonText?: string;
  readonly href?: string;
  readonly className?: string;
  readonly onButtonClick?: () => void;
}


const DEFAULTS = {
  heading: "سفر بعدی شما از همینجا شروع می‌شود",
  buttonText: "شروع سفر",
  href: "/chat-ai",
} as const;

export const TravelCta: FC<TravelCtaProps> = ({
  image = ctaBg,
  heading = DEFAULTS.heading,
  buttonText = DEFAULTS.buttonText,
  href = DEFAULTS.href,
  className,
  onButtonClick,
}) => {
  return (
    <section
      aria-label={heading}
      className={cn("w-full px-4 sm:px-6 lg:px-8 h-25 my-8 sm:my-11 md:my-18", className)}
    >
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-full h-full">
        {/* ── Background Image ── */}
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1280px"
          className="object-cover object-left"
          aria-hidden="true"
        />

        {/* ── Blue Overlay Gradient ── */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-l from-blue-600/70 via-blue-600/10 to-blue-600/5"
        />

        {/* ── Content ── */}
        <div className="relative h-full flex flex-col items-center gap-6 px-6 sm:flex-row sm:justify-start sm:gap-8 sm:px-10">
          <h2 className="text-center text-xl font-extrabold leading-tight text-white sm:text-right sm:text-2xl lg:text-3xl lg:leading-[1.3]">
            {heading}
          </h2>

          <Link
            href={href}
            onClick={onButtonClick}
            className={[
              "group inline-flex shrink-0 items-center gap-2 rounded-full px-8 py-3.5",
              "bg-amber-400 text-sm font-bold text-gray-900 sm:text-base",
              "transition-all duration-200 ease-out",
              "hover:bg-amber-300 hover:shadow-lg hover:shadow-amber-400/25",
              "active:scale-95",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600",
            ].join(" ")}
          >
            <span>{buttonText}</span>

            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:-translate-x-1"
            >
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

TravelCta.displayName = "TravelCta";