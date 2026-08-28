'use client';

import { useState } from 'react';
import Link from 'next/link';
import { localePath, type Locale } from '@/lib/i18n';
import { nav } from '@/data/nav';

interface MobileMenuProps {
  locale: Locale;
  currentPage: 'home' | 'explore' | 'contact';
}

export default function MobileMenu({ locale, currentPage }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const t = nav[locale];

  return (
    <div className="mobile-menu">
      <button
        type="button"
        className="mobile-menu__toggle"
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      {open && (
        <nav
          id="mobile-menu-panel"
          className="mobile-menu__panel"
          aria-label="Mobile navigation"
        >
          <Link
            href={localePath(locale, '/')}
            className={currentPage === 'home' ? 'is-active' : ''}
            onClick={() => setOpen(false)}
          >
            {t.home}
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
      )}
    </div>
  );
}
