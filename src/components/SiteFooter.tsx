import Link from 'next/link';
import { localePath, type Locale } from '@/lib/i18n';
import { nav } from '@/data/nav';
import SocialLinks from './SocialLinks';

interface SiteFooterProps {
  locale: Locale;
}

export default function SiteFooter({ locale }: SiteFooterProps) {
  const t = nav[locale];
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <img src="/images/logo-full.png" alt={t.siteName} className="site-footer__logo" />
          <span className="site-footer__location">{t.footerLocation}</span>
        </div>

        <nav className="site-footer__nav" aria-label="Footer navigation">
          <Link href={localePath(locale, '/')}>{t.home}</Link>
          <Link href={localePath(locale, '/gallery')}>{t.gallery}</Link>
          <Link href={localePath(locale, '/explore')}>{t.footerExploreMore}</Link>
          <Link href={localePath(locale, '/contact')}>{t.contact}</Link>
        </nav>

        <SocialLinks locale={locale} className="site-footer__social" />

        <p className="site-footer__rights">
          © {year} {t.siteName}. {t.footerRights}
        </p>
      </div>
    </footer>
  );
}
