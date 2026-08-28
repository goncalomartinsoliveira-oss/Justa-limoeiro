import type { Locale } from '@/lib/i18n';

export interface GuideContent {
  eyebrow: string;
  title: string;
  intro: string;
  aboutHeading: string;
  addressLabel: string;
  wifiLabel: string;
  wifiNote: string;
  amenitiesHeading: string;
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
    wifiLabel: 'WiFi',
    wifiNote: 'Peça a rede e a palavra-passe aos anfitriões.',
    amenitiesHeading: 'Comodidades',
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
    wifiLabel: 'WiFi',
    wifiNote: 'Ask the hosts for the network name and password.',
    amenitiesHeading: 'Amenities',
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
    wifiLabel: 'WiFi',
    wifiNote: 'Pida la red y la contraseña a los anfitriones.',
    amenitiesHeading: 'Comodidades',
    contactsHeading: 'Contactos Útiles',
    emergencyLabel: 'Emergencias (Portugal)',
    backToSite: 'Ver el sitio completo',
  },
};
