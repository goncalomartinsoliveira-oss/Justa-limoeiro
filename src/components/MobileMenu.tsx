'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { locales, localeNames, localePath, type Locale } from '@/lib/i18n';
import { nav } from '@/data/nav';

interface MobileMenuProps {
  locale: Locale;
  currentPage: 'home' | 'gallery' | 'explore' | 'contact';
  light?: boolean;
}

const pageToPath: Record<MobileMenuProps['currentPage'], string> = {
  home: '/',
  gallery: '/gallery',
  explore: '/explore',
  contact: '/contact',
};

export default function MobileMenu({ locale, currentPage, light }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const t = nav[locale];
  const path = pageToPath[currentPage];

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <div className="mobile-menu">
      {!open && (
        <button
          type="button"
          className={`mobile-menu__toggle${light ? ' mobile-menu__toggle--light' : ''}`}
          aria-expanded={false}
          aria-controls="mobile-menu-panel"
          aria-label="Abrir menu"
          onClick={() => setOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>
      )}

      {open &&
        createPortal(
          <div id="mobile-menu-panel" className="mobile-menu__overlay">
            <button
              type="button"
              className="mobile-menu__close"
              aria-expanded={true}
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
            >
              <span />
              <span />
            </button>

            <nav className="mobile-menu__links" aria-label="Mobile navigation">
              <Link
                href={localePath(locale, '/')}
                className={currentPage === 'home' ? 'is-active' : ''}
                onClick={() => setOpen(false)}
              >
                {t.home}
              </Link>
              <Link
                href={localePath(locale, '/gallery')}
                className={currentPage === 'gallery' ? 'is-active' : ''}
                onClick={() => setOpen(false)}
              >
                {t.gallery}
              </Link>
              <Link
                href={localePath(locale, '/explore')}
                className={currentPage === 'explore' ? 'is-active' : ''}
                onClick={() => setOpen(false)}
              >
                {t.explore}
              </Link>
              <Link
                href={localePath(locale, '/contact')}
                className={currentPage === 'contact' ? 'is-active' : ''}
                onClick={() => setOpen(false)}
              >
                {t.contact}
              </Link>
            </nav>

            <div className="mobile-menu__footer">
              <div className="mobile-menu__langs" aria-label="Language switcher">
                {locales.map((l, i) => (
                  <span key={l}>
                    {i > 0 && <span className="site-header__lang-sep">/</span>}
                    <Link
                      href={localePath(l, path)}
                      className={l === locale ? 'is-active' : ''}
                      onClick={() => setOpen(false)}
                    >
                      {localeNames[l]}
                    </Link>
                  </span>
                ))}
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
