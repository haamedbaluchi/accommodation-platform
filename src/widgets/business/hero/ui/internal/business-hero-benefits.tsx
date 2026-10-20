import { Chip } from '@shared/ui';
import { businessHeroChips } from '../../model/businessHero.data';

export function BusinessHeroBenefits() {
  return (
    <div className="hidden w-full sm:block">
      <div className="mr-auto flex max-w-xs flex-col gap-3 lg:max-w-sm">
        <p className="text-sm text-white/80">
          مزیت همکاری با بومو برای برند شما:
        </p>

        <div className="flex flex-wrap gap-2">
          {businessHeroChips.map((text) => (
            <Chip
              key={text}
              className="border border-white/20 bg-white/10 px-3 py-1.5 text-xs leading-none text-white backdrop-blur-md"
            >
              {text}
            </Chip>
          ))}
        </div>
      </div>
    </div>
  );
}
