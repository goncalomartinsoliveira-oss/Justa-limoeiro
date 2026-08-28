import type { Locale } from '@/lib/i18n';

export interface GuideContent {
  eyebrow: string;
  title: string;
  intro: string;
  aboutHeading: string;
  addressLabel: string;
  checkInLabel: string;
  checkOutLabel: string;
  wifiLabel: string;
  wifiNetworkLabel: string;
  wifiPasswordLabel: string;
  wifiQrNote: string;
  contactsHeading: string;
  emergencyLabel: string;
  backToSite: string;
}

export const guide: Record<Locale, GuideContent> = {
  pt: {
    eyebrow: 'Guia do Hóspede',
    title: 'Bem-vindo(a) ao Pátio Justa Limoeiro',
    intro:
      'Este guia reúne o que precisa durante a sua estadia: informações sobre a casa, contactos úteis e sugestões para explorar a região.',
    aboutHeading: 'Sobre a Casa',
    addressLabel: 'Morada',
    checkInLabel: 'Check-in a partir das',
    checkOutLabel: 'Check-out até às',
    wifiLabel: 'WiFi',
    wifiNetworkLabel: 'Rede',
    wifiPasswordLabel: 'Palavra-passe',
    wifiQrNote: 'Ou leia o código para ligar automaticamente.',
    contactsHeading: 'Contactos Úteis',
    emergencyLabel: 'Emergência (Portugal)',
    backToSite: 'Ver o site completo',
  },
  en: {
    eyebrow: 'Guest Guide',
    title: 'Welcome to Pátio Justa Limoeiro',
    intro:
      'This guide brings together what you need during your stay: house information, useful contacts and suggestions for exploring the region.',
    aboutHeading: 'About the House',
    addressLabel: 'Address',
    checkInLabel: 'Check-in from',
    checkOutLabel: 'Check-out until',
    wifiLabel: 'WiFi',
    wifiNetworkLabel: 'Network',
    wifiPasswordLabel: 'Password',
    wifiQrNote: 'Or scan the code to connect automatically.',
    contactsHeading: 'Useful Contacts',
    emergencyLabel: 'Emergency (Portugal)',
    backToSite: 'Visit the full website',
  },
  es: {
    eyebrow: 'Guía del Huésped',
    title: 'Bienvenido a Pátio Justa Limoeiro',
    intro:
      'Esta guía reúne lo que necesita durante su estancia: información sobre la casa, contactos útiles y sugerencias para explorar la región.',
    aboutHeading: 'Sobre la Casa',
    addressLabel: 'Dirección',
    checkInLabel: 'Entrada a partir de las',
    checkOutLabel: 'Salida hasta las',
    wifiLabel: 'WiFi',
    wifiNetworkLabel: 'Red',
    wifiPasswordLabel: 'Contraseña',
    wifiQrNote: 'O escanee el código para conectarse automáticamente.',
    contactsHeading: 'Contactos Útiles',
    emergencyLabel: 'Emergencias (Portugal)',
    backToSite: 'Ver el sitio completo',
  },
};
