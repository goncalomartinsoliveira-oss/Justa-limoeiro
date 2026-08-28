import type { Locale } from '@/lib/i18n';

export const phoneDisplay = '+351 919 996 263';
export const whatsappNumber = '351919996263';

// Placeholder: not the real address yet, swap when the owners confirm one.
export const contactEmail = 'geral@patiojustalimoeiro.pt';

// Placeholder: update once the owners send the real Instagram link.
export const instagramUrl = 'https://instagram.com/patiojustalimoeiro';

export const whatsappMessage: Record<Locale, string> = {
  pt: 'Olá! Gostaria de saber mais sobre o Pátio Justa Limoeiro.',
  en: 'Hi! I would like to know more about Pátio Justa Limoeiro.',
  es: '¡Hola! Me gustaría saber más sobre Pátio Justa Limoeiro.',
};

export function whatsappUrl(locale: Locale): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage[locale])}`;
}
