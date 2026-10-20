
'use client';

import { motion } from 'framer-motion';
import { PartnerCard } from './partner-card';
import { PARTNERS_DATA } from '../model/partners.data';
import "./partners-showcase.style.css"
export function PartnersShowcase() {
  return (
    <section className="w-full overflow-hidden bg-white py-5 text-center md:py-10">
      <h2 className="mb-8 text-lg font-black text-gray-900 md:text-2xl">
        همراه مطمئن سفر شما
      </h2>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="partners-showcase flex w-max flex-row-reverse items-center"
        >
          {/* First set */}
          <div className="flex shrink-0 items-center gap-6 md:gap-12">
            {PARTNERS_DATA.map((partner) => (
              <PartnerCard
                key={partner.id}
                partner={partner}
              />
            ))}
          </div>

          {/* Duplicate set */}
          <div className="flex shrink-0 items-center gap-6 md:gap-12">
            {PARTNERS_DATA.map((partner) => (
              <PartnerCard
                key={`duplicate-${partner.id}`}
                partner={partner}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}