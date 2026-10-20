'use client';

import { teamMembers } from '../model/configs';
import { TeamCard } from './time-card';
import "./time-showcase.style.css"


export function TeamShowcase() {
  return (
    <section
      dir="rtl"
      className="w-full overflow-hidden bg-white py-16 md:py-20"
    >
      {/* Header */}
      <div className="mx-auto mb-12 max-w-3xl px-6 text-center md:mb-16">
        <h2 className="text-3xl font-extrabold tracking-tight text-neutral-800 md:text-4xl">
          تیم پشت بومو
        </h2>

        <p className="mt-5 text-sm leading-8 text-neutral-500 md:text-base">
          بومو با ترکیب نگاه سفر، تکنولوژی و تجربه کاربر ساخته می‌شود؛
          توسط تیمی که می‌خواهد برنامه‌ریزی سفر را ساده‌تر و انسانی‌تر کند.
        </p>
      </div>

      {/* Slider */}
      <div className="relative w-full overflow-hidden">
        <div className="team-marquee flex w-max">
          {/* First set */}
          <div className="flex shrink-0 gap-8 pl-8 md:gap-10 md:pl-10">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>

          {/* Duplicate set */}
          <div className="flex shrink-0 gap-8 pl-8 md:gap-10 md:pl-10">
            {teamMembers.map((member) => (
              <TeamCard key={`duplicate-${member.id}`} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

