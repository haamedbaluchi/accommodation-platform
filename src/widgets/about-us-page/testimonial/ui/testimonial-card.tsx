import Image from "next/image";


import type { Testimonial } from "../model/types";
import { cn } from "@shared/lib";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  const { quote, authorName, authorRole, avatarUrl, avatarRingClassName, isTeaser } = testimonial;

  return (
    <article
      className={cn(
        "rounded-[28px] bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)]",
        isTeaser && "pointer-events-none select-none opacity-40",
        className,
      )}
    >
      <p className="text-[15px] leading-7 text-slate-600">{quote}</p>

      {authorName ? (
        <footer className="mt-6 flex items-center gap-3">
          {avatarUrl ? (
            <span
              className={cn(
                "relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-offset-2 ring-offset-white",
                avatarRingClassName ?? "ring-slate-200",
              )}
            >
              <Image src={avatarUrl} alt={authorName} fill sizes="44px" className="object-cover" />
            </span>
          ) : null}

          <div>
            <p className="text-sm font-bold text-[#151823]">{authorName}</p>
            {authorRole ? <p className="text-xs text-slate-400">{authorRole}</p> : null}
          </div>
        </footer>
      ) : null}
    </article>
  );
}