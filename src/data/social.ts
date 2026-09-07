import type { Locale } from '@/lib/i18n';

export const phoneDisplay = '+351 919 996 263';
export const whatsappNumber = '351919996263';

export const contactEmail = 'justalimoeiro@gmail.com';

export const instagramUrl = 'https://www.instagram.com/justalimoeiro';
export const facebookUrl = 'https://www.facebook.com/profile.php?id=61589643395097';

// Placeholder example values: update with the real WiFi network and password,
// then regenerate public/images/wifi-qr.png with scripts/generate-wifi-qr.mjs.
export const wifiNetwork = 'PatioJustaLimoeiro';
export const wifiPassword = 'ExemploLimoeiro2024';

export const checkInTime = '16:00';
// Placeholder: confirm the real check-out time with the owners.
export const checkOutTime = '11:00';

export const whatsappMessage: Record<Locale, string> = {
  pt: 'Olá! Gostaria de saber mais sobre o Pátio Justa Limoeiro.',
  en: 'Hi! I would like to know more about Pátio Justa Limoeiro.',
  es: '¡Hola! Me gustaría saber más sobre Pátio Justa Limoeiro.',
};

export function whatsappUrl(locale: Locale): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage[locale])}`;
}
