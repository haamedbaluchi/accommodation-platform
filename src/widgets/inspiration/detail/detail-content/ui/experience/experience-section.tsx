import { InspirationExperience } from '../../model/types';

interface ExperienceSectionProps {
  experiences: InspirationExperience[];
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section className="border-b border-gray-200 py-5">
      <h2 className="mb-4 text-sm lg:text-xl font-black text-text-main">
        چیزهایی که در این سفر تجربه می‌کنی
      </h2>

      <div className="flex items-center justify-between flex-wrap gap-3 lg:gap-1">
        {experiences.map((experience) => (
          <article
            key={experience.title}
            className="flex items-center gap-1 text-center"
          >
            <div className="text-3xl lg:text-4xl">{experience.icon}</div>

            <span className="text-[13px] lg:text-sm font-bold text-gray-700">
              {experience.title}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
