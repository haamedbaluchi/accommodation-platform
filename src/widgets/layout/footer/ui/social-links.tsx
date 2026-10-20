import { socialLinks } from "../model/footer-links.data";

export function SocialLinks() {
  return (
    <div className="mt-10 flex items-center flex-row-reverse justify-center gap-8 text-[#333]">
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="transition hover:text-[#08A9D6]"
        >
          <Icon className="w-7 h-7" />
        </a>
      ))}
    </div>
  );
}