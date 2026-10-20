import { SiteHeader } from '@widgets/layout/header';
import { socialLinks } from '@widgets/layout/footer';

import { BusinessHeroPartners } from './business-hero-partners';

export function BusinessHeroTopInfo() {
  return (
    <div className="flex flex-col gap-4 2xl:gap-3">
      <SiteHeader variant="light" />

      <div className="flex w-full justify-end px-4 md:justify-between">
        <div className="hidden gap-3 sm:flex">
          <div className="flex flex-col gap-2">
            <div className="flex h-auto w-auto flex-col items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/20">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-white transition hover:text-[#08A9D6]"
                >
                  <Icon className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>

          <div className="w-70 rounded-2xl border border-white/20 bg-white/10 p-4 py-2 text-white backdrop-blur-xl">
            <p className="text-sm font-semibold">
              چرا برندها بومو را انتخاب می‌کنند؟
            </p>

            <p className="mt-1 text-xs text-white/70">
              تبلیغ شما در لحظه تصمیم‌گیری دیده می‌شود و در مسیر سفر کاربران
              قرار می‌گیرد.
            </p>
          </div>
        </div>

        <BusinessHeroPartners />
      </div>
    </div>
  );
}
