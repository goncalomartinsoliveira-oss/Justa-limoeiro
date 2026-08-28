import type { Locale } from '@/lib/i18n';

export interface NavDict {
  siteName: string;
  tagline: string;
  home: string;
  explore: string;
  contact: string;
  bookNow: string;
  footerRights: string;
  footerLocation: string;
  footerExploreMore: string;
}

export const nav: Record<Locale, NavDict> = {
  pt: {
    siteName: 'Pátio Justa Limoeiro',
    tagline: 'Alojamento Local · Santa Justa, Coruche',
    home: 'Início',
    explore: 'Pontos de Interesse',
    contact: 'Contactos',
    bookNow: 'Reservar',
    footerRights: 'Todos os direitos reservados.',
    footerLocation: 'Santa Justa, Coruche, Portugal',
    footerExploreMore: 'Descobrir a região',
  },
  en: {
    siteName: 'Pátio Justa Limoeiro',
    tagline: 'Local Guesthouse · Santa Justa, Coruche',
    home: 'Home',
    explore: 'Places to Visit',
    contact: 'Contact',
    bookNow: 'Book Now',
    footerRights: 'All rights reserved.',
    footerLocation: 'Santa Justa, Coruche, Portugal',
    footerExploreMore: 'Explore the region',
  },
  es: {
    siteName: 'Pátio Justa Limoeiro',
    tagline: 'Alojamiento Local · Santa Justa, Coruche',
    home: 'Inicio',
    explore: 'Puntos de Interés',
    contact: 'Contacto',
    bookNow: 'Reservar',
    footerRights: 'Todos los derechos reservados.',
    footerLocation: 'Santa Justa, Coruche, Portugal',
    footerExploreMore: 'Descubrir la región',
  },
};
