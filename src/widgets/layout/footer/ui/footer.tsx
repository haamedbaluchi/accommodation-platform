import { SocialLinks } from './social-links';
import { FooterBrand } from './footer-brand';
import { FooterColumn } from './footer-column';
import { NewsletterForm } from './news-letter-form';
import { FooterCopyright } from './footer-copyright';
import { productLinks, supportLinks } from '../model/footer-links.data';
export function Footer() {
  return (
    <footer dir="rtl" className="w-full bg-text-muted-foreground font-yekta">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-12">
        <FooterBrand />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 px-12">
          <FooterColumn title="محصول و امکانات" links={productLinks} />

          <FooterColumn
            title="پشتیبانی و همراهی"
            links={supportLinks}
            className="flex flex-col items-center "
          />

          <NewsletterForm />
        </div>

        <SocialLinks />

        <FooterCopyright />
      </div>
    </footer>
  );
}
