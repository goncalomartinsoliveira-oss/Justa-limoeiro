import type { Locale } from '@/lib/i18n';

export type GalleryCategory = 'pool' | 'garden' | 'interior' | 'outdoor';

export const galleryPageText: Record<
  Locale,
  { eyebrow: string; title: string; intro: string }
> = {
  pt: {
    eyebrow: 'Galeria',
    title: 'Um Retiro Ribatejano',
    intro: 'Uma casa branca no coração do Ribatejo, onde cada espaço convida a abrandar.',
  },
  en: {
    eyebrow: 'Gallery',
    title: 'A Ribatejo Retreat',
    intro: 'A whitewashed house in the heart of the Ribatejo, where every space invites you to slow down.',
  },
  es: {
    eyebrow: 'Galería',
    title: 'Un Refugio en el Ribatejo',
    intro: 'Una casa encalada en el corazón del Ribatejo, donde cada espacio invita a desacelerar.',
  },
};

export const galleryCategoryLabels: Record<GalleryCategory, Record<Locale, string>> = {
  pool: { pt: 'Piscina', en: 'Pool', es: 'Piscina' },
  garden: { pt: 'Jardim', en: 'Garden', es: 'Jardín' },
  interior: { pt: 'Interior', en: 'Interior', es: 'Interior' },
  outdoor: { pt: 'Exterior', en: 'Outdoor', es: 'Exterior' },
};

export const galleryCategoryContent: Record<
  GalleryCategory,
  Record<Locale, { tagline: string; paragraph: string; linkLabel: string }>
> = {
  pool: {
    pt: {
      tagline: 'Momentos de Frescura',
      paragraph:
        'A piscina é o convite perfeito para os dias mais quentes, seja um mergulho refrescante ou uns momentos de descanso à beira-água, na tranquilidade do pátio.',
      linkLabel: 'Ver Piscina',
    },
    en: {
      tagline: 'Moments of Freshness',
      paragraph:
        'The pool is the perfect invitation on warmer days, whether a refreshing dip or a few quiet moments by the water, in the calm of the courtyard.',
      linkLabel: 'View Pool',
    },
    es: {
      tagline: 'Momentos de Frescura',
      paragraph:
        'La piscina es la invitación perfecta en los días más calurosos, ya sea un chapuzón refrescante o unos momentos de calma junto al agua, en la tranquilidad del patio.',
      linkLabel: 'Ver Piscina',
    },
  },
  garden: {
    pt: {
      tagline: 'Um Refúgio Natural',
      paragraph:
        'No jardim, um limoeiro robusto e cheio de vida oferece sombra natural, aroma fresco e o convite irresistível a colher um limão acabado de amadurecer.',
      linkLabel: 'Ver Jardim',
    },
    en: {
      tagline: 'A Natural Refuge',
      paragraph:
        'In the garden, a vigorous, thriving lemon tree offers natural shade, a fresh scent, and the irresistible invitation to pick a lemon straight from the branch.',
      linkLabel: 'View Garden',
    },
    es: {
      tagline: 'Un Refugio Natural',
      paragraph:
        'En el jardín, un limonero vigoroso y lleno de vida ofrece sombra natural, un aroma fresco y la invitación irresistible a coger un limón recién madurado.',
      linkLabel: 'Ver Jardín',
    },
  },
  interior: {
    pt: {
      tagline: 'Conforto em Cada Detalhe',
      paragraph:
        'Um espaço acolhedor, luminoso e funcional, decorado com simplicidade e bom gosto, onde o conforto moderno se combina com o charme rural da região.',
      linkLabel: 'Ver Interior',
    },
    en: {
      tagline: 'Comfort in Every Detail',
      paragraph:
        'A welcoming, bright and functional space, decorated with simplicity and good taste, where modern comfort meets the rural charm of the region.',
      linkLabel: 'View Interior',
    },
    es: {
      tagline: 'Confort en Cada Detalle',
      paragraph:
        'Un espacio acogedor, luminoso y funcional, decorado con sencillez y buen gusto, donde el confort moderno se combina con el encanto rural de la región.',
      linkLabel: 'Ver Interior',
    },
  },
  outdoor: {
    pt: {
      tagline: 'Convívio ao Ar Livre',
      paragraph:
        'A churrasqueira está à disposição para refeições ao ar livre, perfeitas para convívios em família ou entre amigos, acompanhadas pela tranquilidade da paisagem ribatejana.',
      linkLabel: 'Ver Exterior',
    },
    en: {
      tagline: 'Gathering Outdoors',
      paragraph:
        'The barbecue is ready for meals in the open air, perfect for gatherings with family or friends, accompanied by the calm of the Ribatejo landscape.',
      linkLabel: 'View Outdoor',
    },
    es: {
      tagline: 'Encuentros al Aire Libre',
      paragraph:
        'La barbacoa está lista para comidas al aire libre, perfectas para reuniones en familia o entre amigos, acompañadas por la tranquilidad del paisaje ribatejano.',
      linkLabel: 'Ver Exterior',
    },
  },
};

export interface GalleryImage {
  src: string;
  alt: Record<Locale, string>;
}

export const galleryImages: Record<GalleryCategory, GalleryImage[]> = {
  pool: [
    { src: '/images/gallery/pool-1.svg', alt: { pt: 'Piscina exterior', en: 'Outdoor pool', es: 'Piscina exterior' } },
    { src: '/images/gallery/pool-2.svg', alt: { pt: 'Pátio junto à piscina', en: 'Poolside patio', es: 'Patio junto a la piscina' } },
    { src: '/images/gallery/pool-3.svg', alt: { pt: 'Espreguiçadeiras', en: 'Sun loungers', es: 'Tumbonas' } },
    { src: '/images/gallery/pool-4.svg', alt: { pt: 'Vista da piscina', en: 'Pool view', es: 'Vista de la piscina' } },
  ],
  garden: [
    { src: '/images/gallery/garden-1.svg', alt: { pt: 'O limoeiro', en: 'The lemon tree', es: 'El limonero' } },
    { src: '/images/gallery/garden-2.svg', alt: { pt: 'Jardim tropical', en: 'Tropical garden', es: 'Jardín tropical' } },
    { src: '/images/gallery/garden-3.svg', alt: { pt: 'Plantas do quintal', en: 'Backyard plants', es: 'Plantas del jardín' } },
    { src: '/images/gallery/garden-4.svg', alt: { pt: 'Caminho do jardim', en: 'Garden path', es: 'Camino del jardín' } },
  ],
  interior: [
    { src: '/images/gallery/interior-1.jpg', alt: { pt: 'Sala de estar', en: 'Living room', es: 'Sala de estar' } },
    { src: '/images/gallery/interior-2.jpg', alt: { pt: 'Zona de estar e televisão', en: 'Living area and TV', es: 'Zona de estar y televisión' } },
    { src: '/images/gallery/interior-3.jpg', alt: { pt: 'Cozinha', en: 'Kitchen', es: 'Cocina' } },
    { src: '/images/gallery/interior-4.jpg', alt: { pt: 'Quarto principal', en: 'Main bedroom', es: 'Dormitorio principal' } },
    { src: '/images/gallery/interior-5.jpg', alt: { pt: 'Segundo quarto', en: 'Second bedroom', es: 'Segundo dormitorio' } },
    { src: '/images/gallery/interior-6.jpg', alt: { pt: 'Casa de banho', en: 'Bathroom', es: 'Baño' } },
  ],
  outdoor: [
    { src: '/images/gallery/outdoor-1.svg', alt: { pt: 'Zona de churrasco', en: 'Barbecue area', es: 'Zona de barbacoa' } },
    { src: '/images/gallery/outdoor-2.svg', alt: { pt: 'Mesa exterior', en: 'Outdoor table', es: 'Mesa exterior' } },
    { src: '/images/gallery/outdoor-3.svg', alt: { pt: 'Zona coberta', en: 'Covered area', es: 'Zona cubierta' } },
    { src: '/images/gallery/outdoor-4.svg', alt: { pt: 'Entardecer no pátio', en: 'Evening on the patio', es: 'Atardecer en el patio' } },
  ],
};
