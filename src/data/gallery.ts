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
    { src: '/images/gallery/pool-1.jpg', alt: { pt: 'Vista aérea da piscina', en: 'Aerial view of the pool', es: 'Vista aérea de la piscina' } },
    { src: '/images/gallery/pool-2.jpg', alt: { pt: 'Piscina ao nível da água', en: 'Pool at water level', es: 'Piscina a nivel del agua' } },
    { src: '/images/gallery/pool-3.jpg', alt: { pt: 'Recanto junto à piscina', en: 'Poolside corner', es: 'Rincón junto a la piscina' } },
    { src: '/images/gallery/pool-4.jpg', alt: { pt: 'Piscina e zona coberta', en: 'Pool and covered area', es: 'Piscina y zona cubierta' } },
  ],
  garden: [
    { src: '/images/gallery/garden-1.jpg', alt: { pt: 'O limoeiro e a rede', en: 'The lemon tree and the hammock', es: 'El limonero y la hamaca' } },
    { src: '/images/gallery/garden-2.jpg', alt: { pt: 'Zona de estar à sombra', en: 'Shaded lounge area', es: 'Zona de estar a la sombra' } },
    { src: '/images/gallery/garden-3.jpg', alt: { pt: 'Detalhe do jardim', en: 'Garden detail', es: 'Detalle del jardín' } },
    { src: '/images/gallery/garden-4.jpg', alt: { pt: 'Pormenor do limoeiro', en: 'Lemon tree detail', es: 'Detalle del limonero' } },
    { src: '/images/gallery/garden-5.jpg', alt: { pt: 'Espreguiçadeiras no jardim', en: 'Sun loungers in the garden', es: 'Tumbonas en el jardín' } },
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
    { src: '/images/gallery/outdoor-1.jpg', alt: { pt: 'Cantinho do churrasco', en: 'The barbecue corner', es: 'Rincón de la barbacoa' } },
    { src: '/images/gallery/outdoor-2.jpg', alt: { pt: 'Pátio coberto ao anoitecer', en: 'Covered patio at dusk', es: 'Patio cubierto al anochecer' } },
    { src: '/images/gallery/outdoor-3.jpg', alt: { pt: 'Entrada com o nome da casa', en: 'Entrance with the house name', es: 'Entrada con el nombre de la casa' } },
    { src: '/images/gallery/outdoor-4.jpg', alt: { pt: 'O quintal ao anoitecer', en: 'The backyard at dusk', es: 'El jardín trasero al anochecer' } },
    { src: '/images/gallery/outdoor-5.jpg', alt: { pt: 'Matraquilhos na zona coberta', en: 'Foosball table in the covered area', es: 'Futbolín en la zona cubierta' } },
  ],
};
