import type { Locale } from '@/lib/i18n';
import { instagramUrl, whatsappUrl } from '@/data/social';
import { IconInstagram, IconWhatsApp } from './icons';

interface SocialLinksProps {
  locale: Locale;
  className?: string;
}

export default function SocialLinks({ locale, className }: SocialLinksProps) {
  return (
    <div className={`social-links${className ? ` ${className}` : ''}`}>
      <a href={whatsappUrl(locale)} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <IconWhatsApp />
      </a>
      <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <IconInstagram />
      </a>
    </div>
  );
}
