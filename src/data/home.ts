import type { Locale } from '@/lib/i18n';

export interface HomeContent {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  welcome: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  facts: { label: string }[];
  spaces: {
    eyebrow: string;
    title: string;
    items: { image: string; alt: string; caption: string }[];
  };
  amenities: {
    eyebrow: string;
    title: string;
    intro: string;
    items: string[];
  };
  location: {
    eyebrow: string;
    title: string;
    paragraph: string;
    address: string;
  };
  booking: {
    eyebrow: string;
    title: string;
    paragraph: string;
    bookingCta: string;
    bookingUrl: string;
    orDivider: string;
    formTitle: string;
    formNote: string;
    fields: {
      name: string;
      email: string;
      phone: string;
      checkIn: string;
      checkOut: string;
      guests: string;
      message: string;
      submit: string;
    };
  };
}

export const home: Record<Locale, HomeContent> = {
  pt: {
    hero: {
      eyebrow: 'Santa Justa, Coruche',
      title: 'Pátio Justa Limoeiro',
      subtitle:
        'Uma casa branca, um limoeiro no quintal e uma piscina só para si — o refúgio tranquilo do Ribatejo.',
      ctaPrimary: 'Reservar Agora',
      ctaSecondary: 'Conhecer a Casa',
    },
    welcome: {
      eyebrow: 'Bem-vindo',
      title: 'Uma casa com nome de família e sabor a limão',
      paragraphs: [
        'O Pátio Justa Limoeiro nasce em Santa Justa, uma pequena localidade do concelho de Coruche, no coração do Ribatejo. O nome conta a sua própria história: "Justa" da terra que a acolhe, "Limoeiro" da árvore centenária que ainda hoje dá sombra e fruto no quintal.',
        'É uma casa pensada para quem procura pausar — pátio interior, piscina exterior e um jardim tropical onde o limoeiro é protagonista. Todo o espaço é só seu durante a estadia, longe do ruído e perto do essencial.',
      ],
    },
    facts: [
      { label: 'Espaço 100% privado' },
      { label: '90 m² de área' },
      { label: 'Piscina exterior' },
      { label: 'WiFi grátis' },
    ],
    spaces: {
      eyebrow: 'Os Espaços',
      title: 'Cada canto pensado para o descanso',
      items: [
        { image: '/images/placeholder-pool.svg', alt: 'Piscina exterior com espreguiçadeiras', caption: 'Piscina & Pátio' },
        { image: '/images/placeholder-garden.svg', alt: 'Jardim tropical com o limoeiro', caption: 'Jardim & Limoeiro' },
        { image: '/images/placeholder-outdoor-kitchen.svg', alt: 'Zona exterior coberta com churrasco', caption: 'Zona Exterior Coberta' },
      ],
    },
    amenities: {
      eyebrow: 'Comodidades',
      title: 'Tudo o que precisa, nada a mais',
      intro:
        'Uma seleção simples e cuidada de comodidades para tornar a estadia confortável do início ao fim.',
      items: [
        'Piscina exterior privada',
        'Jardim com limoeiro e plantas tropicais',
        'Zona exterior coberta com churrasqueira',
        'WiFi gratuito em toda a casa',
        'Espaço totalmente privado durante a estadia',
        'Estacionamento gratuito',
      ],
    },
    location: {
      eyebrow: 'Localização',
      title: 'Santa Justa, no coração do Ribatejo',
      paragraph:
        'A casa fica em Santa Justa, no concelho de Coruche, a cerca de 15 minutos de carro da Barragem de Montargil — uma das maiores albufeiras de Portugal continental e ponto de partida para praias fluviais, desportos aquáticos e passeios pela natureza. Consulte a página de Pontos de Interesse para mais sugestões da região.',
      address: 'Rua do Faial, Santa Justa, Coruche',
    },
    booking: {
      eyebrow: 'Reservas',
      title: 'Vamos combinar a sua estadia',
      paragraph:
        'Pode reservar diretamente através do Booking.com ou contactar-nos para combinarmos os detalhes da sua estadia.',
      bookingCta: 'Ver Disponibilidade no Booking.com',
      bookingUrl: 'https://www.booking.com/hotel/pt/patio-justa-limoeiro.pt-pt.html',
      orDivider: 'ou contacte-nos diretamente',
      formTitle: 'Pedido de Reserva Direta',
      formNote:
        'Preencha o formulário e entraremos em contacto para confirmar a sua estadia. (Formulário de contacto — brevemente ligado ao envio automático de email.)',
      fields: {
        name: 'Nome',
        email: 'Email',
        phone: 'Telefone',
        checkIn: 'Data de Check-in',
        checkOut: 'Data de Check-out',
        guests: 'Número de Hóspedes',
        message: 'Mensagem (opcional)',
        submit: 'Enviar Pedido',
      },
    },
  },

  en: {
    hero: {
      eyebrow: 'Santa Justa, Coruche',
      title: 'Pátio Justa Limoeiro',
      subtitle:
        'A whitewashed house, a lemon tree in the garden, and a pool all to yourself — a quiet retreat in the Ribatejo countryside.',
      ctaPrimary: 'Book Now',
      ctaSecondary: 'Discover the House',
    },
    welcome: {
      eyebrow: 'Welcome',
      title: 'A house named after its land and its tree',
      paragraphs: [
        'Pátio Justa Limoeiro sits in Santa Justa, a small village in the Coruche municipality, in the heart of the Ribatejo region. Its name tells its own story: "Justa" from the land that holds it, "Limoeiro" from the century-old lemon tree that still gives shade and fruit in the backyard.',
        'It is a house built for slowing down — an inner courtyard, an outdoor pool, and a tropical garden where the lemon tree takes center stage. The whole space is yours alone during your stay, far from the noise and close to what matters.',
      ],
    },
    facts: [
      { label: '100% private space' },
      { label: '90 m² floor area' },
      { label: 'Outdoor pool' },
      { label: 'Free WiFi' },
    ],
    spaces: {
      eyebrow: 'The Spaces',
      title: 'Every corner made for resting',
      items: [
        { image: '/images/placeholder-pool.svg', alt: 'Outdoor pool with sun loungers', caption: 'Pool & Courtyard' },
        { image: '/images/placeholder-garden.svg', alt: 'Tropical garden with the lemon tree', caption: 'Garden & Lemon Tree' },
        { image: '/images/placeholder-outdoor-kitchen.svg', alt: 'Covered outdoor barbecue area', caption: 'Covered Outdoor Area' },
      ],
    },
    amenities: {
      eyebrow: 'Amenities',
      title: 'Everything you need, nothing more',
      intro:
        'A simple, carefully chosen selection of amenities to make your stay comfortable from start to finish.',
      items: [
        'Private outdoor pool',
        'Garden with lemon tree and tropical plants',
        'Covered outdoor area with barbecue',
        'Free WiFi throughout the house',
        'Fully private space during your stay',
        'Free parking',
      ],
    },
    location: {
      eyebrow: 'Location',
      title: 'Santa Justa, in the heart of the Ribatejo',
      paragraph:
        'The house is located in Santa Justa, in the Coruche municipality, about a 15-minute drive from the Montargil Dam — one of mainland Portugal’s largest reservoirs, and a gateway to river beaches, water sports and nature walks. Check the Places to Visit page for more suggestions around the region.',
      address: 'Rua do Faial, Santa Justa, Coruche, Portugal',
    },
    booking: {
      eyebrow: 'Booking',
      title: "Let's plan your stay",
      paragraph:
        'You can book directly through Booking.com, or reach out to us to arrange the details of your stay.',
      bookingCta: 'Check Availability on Booking.com',
      bookingUrl: 'https://www.booking.com/hotel/pt/patio-justa-limoeiro.en-gb.html',
      orDivider: 'or contact us directly',
      formTitle: 'Direct Booking Request',
      formNote:
        'Fill in the form and we will get back to you to confirm your stay. (Contact form — automatic email sending coming soon.)',
      fields: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        checkIn: 'Check-in Date',
        checkOut: 'Check-out Date',
        guests: 'Number of Guests',
        message: 'Message (optional)',
        submit: 'Send Request',
      },
    },
  },

  es: {
    hero: {
      eyebrow: 'Santa Justa, Coruche',
      title: 'Pátio Justa Limoeiro',
      subtitle:
        'Una casa encalada, un limonero en el jardín y una piscina solo para usted — un refugio tranquilo en el Ribatejo.',
      ctaPrimary: 'Reservar Ahora',
      ctaSecondary: 'Conocer la Casa',
    },
    welcome: {
      eyebrow: 'Bienvenido',
      title: 'Una casa con nombre de familia y sabor a limón',
      paragraphs: [
        'Pátio Justa Limoeiro se encuentra en Santa Justa, una pequeña localidad del municipio de Coruche, en el corazón del Ribatejo. Su nombre cuenta su propia historia: "Justa" por la tierra que la acoge, "Limoeiro" por el limonero centenario que todavía hoy da sombra y fruto en el jardín.',
        'Es una casa pensada para quienes buscan hacer una pausa — patio interior, piscina exterior y un jardín tropical donde el limonero es el protagonista. Todo el espacio es solo suyo durante su estancia, lejos del ruido y cerca de lo esencial.',
      ],
    },
    facts: [
      { label: 'Espacio 100% privado' },
      { label: '90 m² de superficie' },
      { label: 'Piscina exterior' },
      { label: 'WiFi gratis' },
    ],
    spaces: {
      eyebrow: 'Los Espacios',
      title: 'Cada rincón pensado para el descanso',
      items: [
        { image: '/images/placeholder-pool.svg', alt: 'Piscina exterior con tumbonas', caption: 'Piscina y Patio' },
        { image: '/images/placeholder-garden.svg', alt: 'Jardín tropical con el limonero', caption: 'Jardín y Limonero' },
        { image: '/images/placeholder-outdoor-kitchen.svg', alt: 'Zona exterior cubierta con barbacoa', caption: 'Zona Exterior Cubierta' },
      ],
    },
    amenities: {
      eyebrow: 'Comodidades',
      title: 'Todo lo que necesita, nada más',
      intro:
        'Una selección simple y cuidada de comodidades para hacer su estancia cómoda de principio a fin.',
      items: [
        'Piscina exterior privada',
        'Jardín con limonero y plantas tropicales',
        'Zona exterior cubierta con barbacoa',
        'WiFi gratis en toda la casa',
        'Espacio totalmente privado durante la estancia',
        'Aparcamiento gratuito',
      ],
    },
    location: {
      eyebrow: 'Ubicación',
      title: 'Santa Justa, en el corazón del Ribatejo',
      paragraph:
        'La casa está ubicada en Santa Justa, municipio de Coruche, a unos 15 minutos en coche de la Presa de Montargil — uno de los mayores embalses de Portugal continental y punto de partida hacia playas fluviales, deportes acuáticos y paseos por la naturaleza. Consulte la página de Puntos de Interés para más sugerencias de la región.',
      address: 'Rua do Faial, Santa Justa, Coruche, Portugal',
    },
    booking: {
      eyebrow: 'Reservas',
      title: 'Organicemos su estancia',
      paragraph:
        'Puede reservar directamente a través de Booking.com o contactarnos para acordar los detalles de su estancia.',
      bookingCta: 'Ver Disponibilidad en Booking.com',
      bookingUrl: 'https://www.booking.com/hotel/pt/patio-justa-limoeiro.es.html',
      orDivider: 'o contáctenos directamente',
      formTitle: 'Solicitud de Reserva Directa',
      formNote:
        'Complete el formulario y nos pondremos en contacto para confirmar su estancia. (Formulario de contacto — envío automático de email próximamente.)',
      fields: {
        name: 'Nombre',
        email: 'Email',
        phone: 'Teléfono',
        checkIn: 'Fecha de Entrada',
        checkOut: 'Fecha de Salida',
        guests: 'Número de Huéspedes',
        message: 'Mensaje (opcional)',
        submit: 'Enviar Solicitud',
      },
    },
  },
};
