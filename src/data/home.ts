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
  facts: { icon: 'private' | 'area' | 'pool' | 'wifi'; label: string }[];
  spaces: {
    eyebrow: string;
    title: string;
    items: { image: string; alt: string; caption: string; description: string }[];
  };
  interior: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  perfectFor: {
    eyebrow: string;
    title: string;
    items: { icon: 'weekend' | 'family' | 'romantic'; label: string }[];
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
  socialProof: {
    eyebrow: string;
    title: string;
    text: string;
    cta: string;
  };
  booking: {
    eyebrow: string;
    title: string;
    paragraph: string;
    bookingCta: string;
    bookingUrl: string;
    directTitle: string;
    directParagraph: string;
    directCta: string;
  };
}

export const home: Record<Locale, HomeContent> = {
  pt: {
    hero: {
      eyebrow: 'Santa Justa, Coruche',
      title: 'Pátio Justa Limoeiro',
      subtitle:
        'Uma casa branca, um limoeiro no quintal e uma piscina só para si, no refúgio tranquilo do Ribatejo.',
      ctaPrimary: 'Reservar Agora',
      ctaSecondary: 'Conhecer a Casa',
    },
    welcome: {
      eyebrow: 'Bem-vindo',
      title: 'Uma casa com nome de família e sabor a limão',
      paragraphs: [
        'O Pátio Justa Limoeiro nasce em Santa Justa, uma pequena localidade do concelho de Coruche, no coração do Ribatejo. O nome conta a sua própria história: "Justa" da terra que o acolhe, "Limoeiro" da árvore que ainda hoje dá sombra e fruto no quintal.',
        'Situada no coração do Ribatejo, entre lezírias férteis e a proximidade do rio Tejo, a casa oferece serenidade e um contacto genuíno com as tradições rurais da região, um refúgio pensado para pausas de fim de semana, férias em família ou escapadinhas a dois.',
        'Já Coruche, amplamente conhecida como a Capital Mundial da Cortiça, envolve a casa em paisagens de montados inspiradoras, enquanto a pitoresca aldeia de Santa Justa, a poucos minutos, mantém viva a simplicidade e a autenticidade da vida no campo.',
      ],
    },
    facts: [
      { icon: 'private', label: 'Espaço 100% privado' },
      { icon: 'area', label: '90 m² de área' },
      { icon: 'pool', label: 'Piscina exterior' },
      { icon: 'wifi', label: 'WiFi grátis' },
    ],
    spaces: {
      eyebrow: 'Os Espaços',
      title: 'Cada canto pensado para o descanso',
      items: [
        {
          image: '/images/placeholder-pool.svg',
          alt: 'Piscina exterior com espreguiçadeiras',
          caption: 'Piscina & Pátio',
          description:
            'A piscina é o convite perfeito para os dias mais quentes, seja um mergulho refrescante ou uns momentos de descanso à beira-água, na tranquilidade do pátio.',
        },
        {
          image: '/images/placeholder-garden.svg',
          alt: 'Jardim tropical com o limoeiro',
          caption: 'Jardim & Limoeiro',
          description:
            'No jardim, um limoeiro robusto e cheio de vida oferece sombra natural, aroma fresco e o convite irresistível a colher um limão acabado de amadurecer.',
        },
        {
          image: '/images/placeholder-outdoor-kitchen.svg',
          alt: 'Zona exterior coberta com churrasco',
          caption: 'Zona Exterior Coberta',
          description:
            'A churrasqueira está à disposição para refeições ao ar livre, perfeitas para convívios em família ou entre amigos, acompanhadas pela tranquilidade da paisagem ribatejana.',
        },
      ],
    },
    interior: {
      eyebrow: 'Conforto Interior',
      title: 'Um espaço com toque familiar',
      paragraphs: [
        'No interior, a casa oferece um espaço acolhedor, luminoso e funcional, decorado com simplicidade e bom gosto.',
        'Cada área foi pensada para combinar o conforto moderno com o charme rural da região, garantindo uma experiência agradável em qualquer época do ano.',
      ],
    },
    perfectFor: {
      eyebrow: 'Ideal Para',
      title: 'Feita para diferentes tipos de estadia',
      items: [
        { icon: 'weekend', label: 'Pausas de fim de semana' },
        { icon: 'family', label: 'Férias em família' },
        { icon: 'romantic', label: 'Escapadinhas a dois' },
      ],
    },
    amenities: {
      eyebrow: 'Comodidades',
      title: 'Tudo o que precisa, nada a mais',
      intro: 'Uma lista simples com tudo o que torna a estadia mais confortável.',
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
        'A casa fica em Santa Justa, no concelho de Coruche, a cerca de 15 minutos de carro da Barragem de Montargil, uma das maiores albufeiras de Portugal continental e ponto de partida para praias fluviais, desportos aquáticos e passeios pela natureza. Consulte a página de Pontos de Interesse para mais sugestões da região.',
      address: 'Rua do Faial, Santa Justa, Coruche',
    },
    socialProof: {
      eyebrow: 'Avaliações',
      title: 'Avaliação Excecional no Booking.com',
      text: 'Os hóspedes que já ficaram no Pátio Justa Limoeiro partilham a sua experiência no Booking.com.',
      cta: 'Ver Avaliações no Booking.com',
    },
    booking: {
      eyebrow: 'Reservas',
      title: 'Vamos combinar a sua estadia',
      paragraph:
        'Pode reservar diretamente através do Booking.com ou contactar-nos para combinarmos os detalhes da sua estadia.',
      bookingCta: 'Ver Disponibilidade no Booking.com',
      bookingUrl: 'https://www.booking.com/hotel/pt/patio-justa-limoeiro-santa-justa.pt-pt.html',
      directTitle: 'Prefere reservar diretamente?',
      directParagraph:
        'Preencha o nosso formulário de contacto e entraremos em contacto para confirmar a sua estadia.',
      directCta: 'Ir para Contactos',
    },
  },

  en: {
    hero: {
      eyebrow: 'Santa Justa, Coruche',
      title: 'Pátio Justa Limoeiro',
      subtitle:
        'A whitewashed house, a lemon tree in the garden, and a pool all to yourself, in a quiet retreat in the Ribatejo countryside.',
      ctaPrimary: 'Book Now',
      ctaSecondary: 'Discover the House',
    },
    welcome: {
      eyebrow: 'Welcome',
      title: 'A house named after its land and its tree',
      paragraphs: [
        'Pátio Justa Limoeiro takes its name from Santa Justa, a small village in the Coruche municipality, in the heart of the Ribatejo region. Its name tells its own story: "Justa" from the land that holds it, "Limoeiro" from the tree that still gives shade and fruit in the backyard.',
        'Set in the heart of the Ribatejo, among fertile lezíria plains and close to the Tagus river, the house offers serenity and a genuine connection to the region\'s rural traditions, a retreat built for weekend breaks, family holidays or romantic getaways.',
        'Coruche itself, widely known as the World Capital of Cork, surrounds the house with inspiring cork-oak landscapes, while the picturesque village of Santa Justa, just minutes away, keeps the simplicity and authenticity of country life alive.',
      ],
    },
    facts: [
      { icon: 'private', label: '100% private space' },
      { icon: 'area', label: '90 m² floor area' },
      { icon: 'pool', label: 'Outdoor pool' },
      { icon: 'wifi', label: 'Free WiFi' },
    ],
    spaces: {
      eyebrow: 'The Spaces',
      title: 'Every corner made for resting',
      items: [
        {
          image: '/images/placeholder-pool.svg',
          alt: 'Outdoor pool with sun loungers',
          caption: 'Pool & Courtyard',
          description:
            'The pool is the perfect invitation on warmer days, whether a refreshing dip or a few quiet moments by the water, in the calm of the courtyard.',
        },
        {
          image: '/images/placeholder-garden.svg',
          alt: 'Tropical garden with the lemon tree',
          caption: 'Garden & Lemon Tree',
          description:
            'In the garden, a vigorous, thriving lemon tree offers natural shade, a fresh scent, and the irresistible invitation to pick a lemon straight from the branch.',
        },
        {
          image: '/images/placeholder-outdoor-kitchen.svg',
          alt: 'Covered outdoor barbecue area',
          caption: 'Covered Outdoor Area',
          description:
            'The barbecue is ready for meals in the open air, perfect for gatherings with family or friends, accompanied by the calm of the Ribatejo landscape.',
        },
      ],
    },
    interior: {
      eyebrow: 'Interior Comfort',
      title: 'A space with a homely touch',
      paragraphs: [
        'Inside, the house offers a welcoming, bright and functional space, decorated with simplicity and good taste.',
        'Every area was designed to combine modern comfort with the rural charm of the region, for a pleasant experience at any time of year.',
      ],
    },
    perfectFor: {
      eyebrow: 'Perfect For',
      title: 'Suited to different kinds of stays',
      items: [
        { icon: 'weekend', label: 'Weekend breaks' },
        { icon: 'family', label: 'Family holidays' },
        { icon: 'romantic', label: 'Romantic getaways' },
      ],
    },
    amenities: {
      eyebrow: 'Amenities',
      title: 'Everything you need, nothing more',
      intro: 'A simple list of everything that makes your stay more comfortable.',
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
        'The house is located in Santa Justa, in the Coruche municipality, about a 15-minute drive from the Montargil Dam, one of mainland Portugal’s largest reservoirs and a gateway to river beaches, water sports and nature walks. Check the Places to Visit page for more suggestions around the region.',
      address: 'Rua do Faial, Santa Justa, Coruche, Portugal',
    },
    socialProof: {
      eyebrow: 'Reviews',
      title: 'Exceptional Rating on Booking.com',
      text: 'Guests who have stayed at Pátio Justa Limoeiro share their experience on Booking.com.',
      cta: 'Read Reviews on Booking.com',
    },
    booking: {
      eyebrow: 'Booking',
      title: "Let's plan your stay",
      paragraph:
        'You can book directly through Booking.com, or reach out to us to arrange the details of your stay.',
      bookingCta: 'Check Availability on Booking.com',
      bookingUrl: 'https://www.booking.com/hotel/pt/patio-justa-limoeiro-santa-justa.en-gb.html',
      directTitle: 'Prefer to book directly?',
      directParagraph:
        'Fill in our contact form and we will get back to you to confirm your stay.',
      directCta: 'Go to Contact',
    },
  },

  es: {
    hero: {
      eyebrow: 'Santa Justa, Coruche',
      title: 'Pátio Justa Limoeiro',
      subtitle:
        'Una casa encalada, un limonero en el jardín y una piscina solo para usted, en un refugio tranquilo en el Ribatejo.',
      ctaPrimary: 'Reservar Ahora',
      ctaSecondary: 'Conocer la Casa',
    },
    welcome: {
      eyebrow: 'Bienvenido',
      title: 'Una casa con nombre de familia y sabor a limón',
      paragraphs: [
        'Pátio Justa Limoeiro toma su nombre de Santa Justa, una pequeña localidad del municipio de Coruche, en el corazón del Ribatejo. Su nombre cuenta su propia historia: "Justa" por la tierra que la acoge, "Limoeiro" por el árbol que todavía hoy da sombra y fruto en el jardín.',
        'Situada en el corazón del Ribatejo, entre fértiles llanuras de "lezíria" y cerca del río Tajo, la casa ofrece serenidad y un contacto genuino con las tradiciones rurales de la región, un refugio pensado para escapadas de fin de semana, vacaciones en familia o momentos románticos en pareja.',
        'El propio municipio de Coruche, ampliamente conocido como la Capital Mundial del Corcho, rodea la casa de paisajes de alcornocales, mientras que el pintoresco pueblo de Santa Justa, a pocos minutos, mantiene viva la sencillez y autenticidad de la vida en el campo.',
      ],
    },
    facts: [
      { icon: 'private', label: 'Espacio 100% privado' },
      { icon: 'area', label: '90 m² de superficie' },
      { icon: 'pool', label: 'Piscina exterior' },
      { icon: 'wifi', label: 'WiFi gratis' },
    ],
    spaces: {
      eyebrow: 'Los Espacios',
      title: 'Cada rincón pensado para el descanso',
      items: [
        {
          image: '/images/placeholder-pool.svg',
          alt: 'Piscina exterior con tumbonas',
          caption: 'Piscina y Patio',
          description:
            'La piscina es la invitación perfecta en los días más calurosos, ya sea un chapuzón refrescante o unos momentos de calma junto al agua, en la tranquilidad del patio.',
        },
        {
          image: '/images/placeholder-garden.svg',
          alt: 'Jardín tropical con el limonero',
          caption: 'Jardín y Limonero',
          description:
            'En el jardín, un limonero vigoroso y lleno de vida ofrece sombra natural, un aroma fresco y la invitación irresistible a coger un limón recién madurado.',
        },
        {
          image: '/images/placeholder-outdoor-kitchen.svg',
          alt: 'Zona exterior cubierta con barbacoa',
          caption: 'Zona Exterior Cubierta',
          description:
            'La barbacoa está lista para comidas al aire libre, perfectas para reuniones en familia o entre amigos, acompañadas por la tranquilidad del paisaje ribatejano.',
        },
      ],
    },
    interior: {
      eyebrow: 'Confort Interior',
      title: 'Un espacio con toque familiar',
      paragraphs: [
        'En el interior, la casa ofrece un espacio acogedor, luminoso y funcional, decorado con sencillez y buen gusto.',
        'Cada zona fue pensada para combinar el confort moderno con el encanto rural de la región, garantizando una experiencia agradable en cualquier época del año.',
      ],
    },
    perfectFor: {
      eyebrow: 'Ideal Para',
      title: 'Pensada para distintos tipos de estancia',
      items: [
        { icon: 'weekend', label: 'Escapadas de fin de semana' },
        { icon: 'family', label: 'Vacaciones en familia' },
        { icon: 'romantic', label: 'Escapadas en pareja' },
      ],
    },
    amenities: {
      eyebrow: 'Comodidades',
      title: 'Todo lo que necesita, nada más',
      intro: 'Una lista sencilla con todo lo que hace la estancia más cómoda.',
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
        'La casa está ubicada en Santa Justa, municipio de Coruche, a unos 15 minutos en coche de la Presa de Montargil, uno de los mayores embalses de Portugal continental y punto de partida hacia playas fluviales, deportes acuáticos y paseos por la naturaleza. Consulte la página de Puntos de Interés para más sugerencias de la región.',
      address: 'Rua do Faial, Santa Justa, Coruche, Portugal',
    },
    socialProof: {
      eyebrow: 'Opiniones',
      title: 'Valoración Excepcional en Booking.com',
      text: 'Los huéspedes que ya se han alojado en Pátio Justa Limoeiro comparten su experiencia en Booking.com.',
      cta: 'Ver Opiniones en Booking.com',
    },
    booking: {
      eyebrow: 'Reservas',
      title: 'Organicemos su estancia',
      paragraph:
        'Puede reservar directamente a través de Booking.com o contactarnos para acordar los detalles de su estancia.',
      bookingCta: 'Ver Disponibilidad en Booking.com',
      bookingUrl: 'https://www.booking.com/hotel/pt/patio-justa-limoeiro-santa-justa.es.html',
      directTitle: '¿Prefiere reservar directamente?',
      directParagraph:
        'Complete nuestro formulario de contacto y nos pondremos en contacto para confirmar su estancia.',
      directCta: 'Ir a Contacto',
    },
  },
};
