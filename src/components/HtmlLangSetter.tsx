'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { locales, defaultLocale } from '@/lib/i18n';

export default function HtmlLangSetter() {
  const pathname = usePathname();

  useEffect(() => {
    const segment = pathname.split('/')[1];
    const matched = locales.find((l) => l === segment);
    document.documentElement.lang = matched ?? defaultLocale;
  }, [pathname]);

  return null;
}
