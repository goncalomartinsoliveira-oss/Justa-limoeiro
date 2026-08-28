'use client';

import { usePathname } from 'next/navigation';
import { locales, defaultLocale, type Locale } from '@/lib/i18n';
import { whatsappUrl } from '@/data/social';
import { IconWhatsApp } from './icons';

export default function WhatsAppButton() {
  const pathname = usePathname();
  const segment = pathname.split('/')[1];
  const locale = (locales.find((l) => l === segment) ?? defaultLocale) as Locale;

  return (
    <a
      href={whatsappUrl(locale)}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="WhatsApp"
    >
      <IconWhatsApp />
    </a>
  );
}
