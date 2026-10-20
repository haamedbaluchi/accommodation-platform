import { FooterLink } from './footerItems';

export function FooterColumn({
  title,
  links,
  className = 'flex flex-col items-center text-center md:items-start md:text-right',
}: {
  title: string;
  links: FooterLink[];
  className?: string;
}) {
  return (
    <div className={className}>
      <div>
        <h4 className="mb-3 text-lg font-black text-text-main">{title}</h4>

        <ul className="space-y-2 text-sm font-bold text-text-foreground">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="transition hover:text-primary">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
