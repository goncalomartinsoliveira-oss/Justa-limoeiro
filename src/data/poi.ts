import type { Locale } from '@/lib/i18n';

export type PoiCategory = 'nature' | 'culture' | 'gastronomy' | 'activities';

export interface PoiEntry {
  slug: string;
  category: PoiCategory;
  image: string;
  distance: Record<Locale, string>;
  name: Record<Locale, string>;
  description: Record<Locale, string>;
  confirmed: boolean;
}

export const poiPageText: Record<
  Locale,
  { eyebrow: string; title: string; intro: string; filterAll: string; comingSoonBadge: string }
> = {
  pt: {
    eyebrow: 'À Volta da Casa',
    title: 'Pontos de Interesse',
    intro:
      'Algumas sugestões para explorar a região de Santa Justa e Coruche durante a sua estadia. Esta lista está a ser preparada com os proprietários e continuará a crescer.',
    filterAll: 'Todos',
    comingSoonBadge: 'Brevemente',
  },
  en: {
    eyebrow: 'Around the House',
    title: 'Places to Visit',
    intro:
      'A few suggestions for exploring the Santa Justa and Coruche region during your stay. This list is being put together with the hosts and will keep growing.',
    filterAll: 'All',
    comingSoonBadge: 'Coming Soon',
  },
  es: {
    eyebrow: 'Alrededor de la Casa',
    title: 'Puntos de Interés',
    intro:
      'Algunas sugerencias para explorar la región de Santa Justa y Coruche durante su estancia. Esta lista se está preparando con los anfitriones y seguirá creciendo.',
    filterAll: 'Todos',
    comingSoonBadge: 'Próximamente',
  },
};

export const poiCategories: Record<PoiCategory, Record<Locale, string>> = {
  nature: { pt: 'Natureza & Água', en: 'Nature & Water', es: 'Naturaleza y Agua' },
  culture: { pt: 'Cultura & Património', en: 'Culture & Heritage', es: 'Cultura y Patrimonio' },
  gastronomy: { pt: 'Gastronomia', en: 'Food & Drink', es: 'Gastronomía' },
  activities: { pt: 'Atividades', en: 'Activities', es: 'Actividades' },
};

export const poiEntries: PoiEntry[] = [
  {
    slug: 'barragem-de-montargil',
    category: 'nature',
    image: '/images/placeholder-montargil.svg',
    confirmed: true,
    distance: { pt: '~15 min de carro', en: '~15 min by car', es: '~15 min en coche' },
    name: {
      pt: 'Barragem de Montargil',
      en: 'Montargil Dam',
      es: 'Presa de Montargil',
    },
    description: {
      pt: 'Uma das maiores albufeiras de Portugal continental, com praias fluviais, desportos náuticos, restaurantes à beira-água e paisagens que convidam a passar o dia inteiro por lá.',
      en: 'One of mainland Portugal’s largest reservoirs, with river beaches, water sports, waterfront restaurants and scenery that invites a full day out.',
      es: 'Uno de los mayores embalses de Portugal continental, con playas fluviales, deportes náuticos, restaurantes junto al agua y paisajes que invitan a pasar todo el día.',
    },
  },
  {
    slug: 'em-preparacao-natureza',
    category: 'nature',
    image: '/images/placeholder-poi.svg',
    confirmed: false,
    distance: { pt: 'A confirmar', en: 'To be confirmed', es: 'Por confirmar' },
    name: {
      pt: 'Mais sugestões brevemente',
      en: 'More suggestions coming soon',
      es: 'Más sugerencias próximamente',
    },
    description: {
      pt: 'Estamos a reunir com os proprietários os melhores trilhos e miradouros da região.',
      en: 'We are working with the hosts to gather the best trails and viewpoints in the region.',
      es: 'Estamos reuniendo con los anfitriones los mejores senderos y miradores de la región.',
    },
  },
  {
    slug: 'coruche-capital-da-cortica',
    category: 'culture',
    image: '/images/placeholder-cork.svg',
    confirmed: true,
    distance: { pt: 'A poucos minutos', en: 'A few minutes away', es: 'A pocos minutos' },
    name: {
      pt: 'Coruche, Capital Mundial da Cortiça',
      en: 'Coruche, World Capital of Cork',
      es: 'Coruche, Capital Mundial del Corcho',
    },
    description: {
      pt: 'Rodeado por extensos montados de sobreiro, o concelho de Coruche é amplamente reconhecido como a Capital Mundial da Cortiça, com paisagens naturais inspiradoras e um património cultural rico, a poucos minutos da casa.',
      en: 'Surrounded by vast cork-oak groves, the Coruche municipality is widely recognised as the World Capital of Cork, with inspiring natural landscapes and a rich cultural heritage, just minutes from the house.',
      es: 'Rodeado de extensos alcornocales, el municipio de Coruche es ampliamente reconocido como la Capital Mundial del Corcho, con paisajes naturales inspiradores y un rico patrimonio cultural, a pocos minutos de la casa.',
    },
  },
  {
    slug: 'em-preparacao-cultura',
    category: 'culture',
    image: '/images/placeholder-poi.svg',
    confirmed: false,
    distance: { pt: 'A confirmar', en: 'To be confirmed', es: 'Por confirmar' },
    name: {
      pt: 'Mais património local',
      en: 'More local heritage',
      es: 'Más patrimonio local',
    },
    description: {
      pt: 'Em breve: recomendações de museus, ermidas e outros locais históricos do concelho de Coruche.',
      en: 'Coming soon: museum, chapel and other historic site recommendations around the Coruche municipality.',
      es: 'Próximamente: recomendaciones de museos, ermitas y otros lugares históricos del municipio de Coruche.',
    },
  },
  {
    slug: 'em-preparacao-gastronomia',
    category: 'gastronomy',
    image: '/images/placeholder-poi.svg',
    confirmed: false,
    distance: { pt: 'A confirmar', en: 'To be confirmed', es: 'Por confirmar' },
    name: {
      pt: 'Sabores da região',
      en: 'Flavors of the region',
      es: 'Sabores de la región',
    },
    description: {
      pt: 'Em breve: os restaurantes e tascas preferidos dos proprietários perto de Santa Justa.',
      en: 'Coming soon: the hosts’ favorite restaurants and local eateries near Santa Justa.',
      es: 'Próximamente: los restaurantes y tabernas preferidos de los anfitriones cerca de Santa Justa.',
    },
  },
  {
    slug: 'em-preparacao-atividades',
    category: 'activities',
    image: '/images/placeholder-poi.svg',
    confirmed: false,
    distance: { pt: 'A confirmar', en: 'To be confirmed', es: 'Por confirmar' },
    name: {
      pt: 'Desportos aquáticos e passeios',
      en: 'Water sports and outings',
      es: 'Deportes acuáticos y excursiones',
    },
    description: {
      pt: 'Em breve: sugestões de atividades na Barragem de Montargil e arredores.',
      en: 'Coming soon: activity suggestions around the Montargil Dam and surroundings.',
      es: 'Próximamente: sugerencias de actividades en la Presa de Montargil y alrededores.',
    },
  },
];
