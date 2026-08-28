import Link from 'next/link';
import { locales, localeNames, localePath, type Locale } from '@/lib/i18n';
import { nav } from '@/data/nav';
import MobileMenu from './MobileMenu';

interface SiteHeaderProps {
  locale: Locale;
  currentPage: 'home' | 'explore' | 'contact';
}

const pageToPath: Record<SiteHeaderProps['currentPage'], string> = {
  home: '/',
  explore: '/explore',
  contact: '/contact',
};

export default function SiteHeader({ locale, currentPage }: SiteHeaderProps) {
  const t = nav[locale];
  const path = pageToPath[currentPage];

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href={localePath(locale, '/')} className="site-header__brand">
          {t.siteName}
        </Link>

        <nav className="site-header__nav" aria-label="Main navigation">
          <Link
            href={localePath(locale, '/')}
            className={currentPage === 'home' ? 'is-active' : ''}
          >
            {t.home}
          </Link>
          <Link
            href={localePath(locale, '/explore')}
            className={currentPage === 'explore' ? 'is-active' : ''}
          >
            {t.explore}
          </Link>
          <Link
            href={localePath(locale, '/contact')}
            className={currentPage === 'contact' ? 'is-active' : ''}
          >
            {t.contact}
          </Link>
        </nav>

        <div className="site-header__actions">
          <div className="site-header__langs" aria-label="Language switcher">
            {locales.map((l, i) => (
              <span key={l}>
                {i > 0 && <span className="site-header__lang-sep">/</span>}
                <Link
                  href={localePath(l, path)}
                  className={l === locale ? 'is-active' : ''}
                >
                  {localeNames[l]}
                </Link>
              </span>
            ))}
          </div>
          <Link href={`${localePath(locale, '/')}#booking`} className="btn btn-primary btn--small">
            {t.bookNow}
          </Link>
          <MobileMenu locale={locale} currentPage={currentPage} />
        </div>
      </div>
    </header>
  );
}
