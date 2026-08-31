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
  facts: { icon: 'private' | 'area' | 'pool' | 'wifi' | 'bedrooms' | 'guests'; label: string }[];
  spaces: {
    eyebrow: string;
    title: string;
    items: { image: string; alt: string; caption: string; description: string }[];
  };
  rooms: {
    eyebrow: string;
    title: string;
    intro: string;
    items: string[];
  };
  interior: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  perfectFor: {
    eyebrow: string;
    title: string;
    items: { icon: 'weekend' | 'family' | 'friends'; label: string }[];
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
      subtitle: 'Um espaço para toda a família ou grupo de amigos, no refúgio tranquilo do Ribatejo.',
      ctaPrimary: 'Reservar Agora',
      ctaSecondary: 'Conhecer a Casa',
    },
    welcome: {
      eyebrow: 'Bem-vindo',
      title: 'Uma casa com nome de família e sabor a limão',
      paragraphs: [
        'O Pátio Justa Limoeiro nasce em Santa Justa, uma pequena localidade do concelho de Coruche, no coração do Ribatejo. O nome conta a sua própria história: "Justa" da terra que o acolhe, "Limoeiro" da árvore que ainda hoje dá sombra e fruto no quintal.',
        'Situada no coração do Ribatejo, junto ao rio Sorraia, a casa oferece serenidade e um contacto genuíno com as tradições rurais da região, ideal para férias em família, encontros entre amigos ou celebrações em grupo.',
        'Já Coruche, amplamente conhecida como a Capital Mundial da Cortiça, envolve a casa em paisagens de montados inspiradoras, enquanto a pitoresca aldeia de Santa Justa, a poucos minutos, mantém viva a simplicidade e a autenticidade da vida no campo.',
      ],
    },
    facts: [
      { icon: 'bedrooms', label: '3 quartos' },
      { icon: 'guests', label: 'Até 8 hóspedes' },
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
          image: '/images/spaces-pool.jpg',
          alt: 'Piscina exterior com espreguiçadeiras',
          caption: 'Piscina & Pátio',
          description:
            'A piscina é o convite perfeito para os dias mais quentes, seja um mergulho refrescante ou uns momentos de descanso à beira-água, na tranquilidade do pátio.',
        },
        {
          image: '/images/spaces-garden.jpg',
          alt: 'Jardim tropical com o limoeiro',
          caption: 'Jardim & Limoeiro',
          description:
            'No jardim, um limoeiro robusto e cheio de vida oferece sombra natural, aroma fresco e o convite irresistível a colher um limão acabado de amadurecer.',
        },
        {
          image: '/images/spaces-outdoor-kitchen.jpg',
          alt: 'Zona exterior coberta com churrasco',
          caption: 'Zona Exterior Coberta',
          description:
            'A churrasqueira está à disposição para refeições ao ar livre, perfeitas para convívios em família ou entre amigos, acompanhadas pela tranquilidade da paisagem ribatejana.',
        },
      ],
    },
    rooms: {
      eyebrow: 'Quartos & Camas',
      title: 'Espaço para toda a gente',
      intro: 'A casa tem 3 quartos e capacidade para até 8 hóspedes.',
      items: ['2 camas individuais', '2 camas de casal', '2 sofás-cama'],
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
        { icon: 'friends', label: 'Encontros entre amigos' },
      ],
    },
    amenities: {
      eyebrow: 'Comodidades',
      title: 'Tudo o que precisa, nada a mais',
      intro: 'Uma lista simples com tudo o que torna a estadia mais confortável.',
      items: [
        'Piscina exterior privada',
        'Jardim com limoeiro',
        'Zona exterior coberta com churrasqueira',
        'WiFi gratuito em toda a casa',
        'Espaço totalmente privado durante a estadia',
      ],
    },
    location: {
      eyebrow: 'Localização',
      title: 'Santa Justa, no coração do Ribatejo',
      paragraph:
        'A casa fica em Santa Justa, no concelho de Coruche, a cerca de 15 minutos de carro da Barragem de Montargil, uma das maiores albufeiras de Portugal continental e ponto de partida para praias fluviais, desportos aquáticos e passeios pela natureza. Consulte a página de Pontos de Interesse para mais sugestões da região.',
      address: 'Santa Justa, Coruche',
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
      subtitle: 'Room for the whole family or a group of friends, in a quiet retreat in the Ribatejo countryside.',
      ctaPrimary: 'Book Now',
      ctaSecondary: 'Discover the House',
    },
    welcome: {
      eyebrow: 'Welcome',
      title: 'A house named after its land and its tree',
      paragraphs: [
        'Pátio Justa Limoeiro takes its name from Santa Justa, a small village in the Coruche municipality, in the heart of the Ribatejo region. Its name tells its own story: "Justa" from the land that holds it, "Limoeiro" from the tree that still gives shade and fruit in the backyard.',
        'Set in the heart of the Ribatejo, close to the Sorraia river, the house offers serenity and a genuine connection to the region\'s rural traditions, ideal for family holidays, gatherings with friends or group celebrations.',
        'Coruche itself, widely known as the World Capital of Cork, surrounds the house with inspiring cork-oak landscapes, while the picturesque village of Santa Justa, just minutes away, keeps the simplicity and authenticity of country life alive.',
      ],
    },
    facts: [
      { icon: 'bedrooms', label: '3 bedrooms' },
      { icon: 'guests', label: 'Up to 8 guests' },
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
          image: '/images/spaces-pool.jpg',
          alt: 'Outdoor pool with sun loungers',
          caption: 'Pool & Courtyard',
          description:
            'The pool is the perfect invitation on warmer days, whether a refreshing dip or a few quiet moments by the water, in the calm of the courtyard.',
        },
        {
          image: '/images/spaces-garden.jpg',
          alt: 'Tropical garden with the lemon tree',
          caption: 'Garden & Lemon Tree',
          description:
            'In the garden, a vigorous, thriving lemon tree offers natural shade, a fresh scent, and the irresistible invitation to pick a lemon straight from the branch.',
        },
        {
          image: '/images/spaces-outdoor-kitchen.jpg',
          alt: 'Covered outdoor barbecue area',
          caption: 'Covered Outdoor Area',
          description:
            'The barbecue is ready for meals in the open air, perfect for gatherings with family or friends, accompanied by the calm of the Ribatejo landscape.',
        },
      ],
    },
    rooms: {
      eyebrow: 'Rooms & Beds',
      title: 'Space for everyone',
      intro: 'The house has 3 bedrooms and space for up to 8 guests.',
      items: ['2 single beds', '2 double beds', '2 sofa beds'],
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
        { icon: 'friends', label: 'Gatherings with friends' },
      ],
    },
    amenities: {
      eyebrow: 'Amenities',
      title: 'Everything you need, nothing more',
      intro: 'A simple list of everything that makes your stay more comfortable.',
      items: [
        'Private outdoor pool',
        'Garden with lemon tree',
        'Covered outdoor area with barbecue',
        'Free WiFi throughout the house',
        'Fully private space during your stay',
      ],
    },
    location: {
      eyebrow: 'Location',
      title: 'Santa Justa, in the heart of the Ribatejo',
      paragraph:
        'The house is located in Santa Justa, in the Coruche municipality, about a 15-minute drive from the Montargil Dam, one of mainland Portugal’s largest reservoirs and a gateway to river beaches, water sports and nature walks. Check the Places to Visit page for more suggestions around the region.',
      address: 'Santa Justa, Coruche, Portugal',
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
      subtitle: 'Espacio para toda la familia o un grupo de amigos, en un refugio tranquilo en el Ribatejo.',
      ctaPrimary: 'Reservar Ahora',
      ctaSecondary: 'Conocer la Casa',
    },
    welcome: {
      eyebrow: 'Bienvenido',
      title: 'Una casa con nombre de familia y sabor a limón',
      paragraphs: [
        'Pátio Justa Limoeiro toma su nombre de Santa Justa, una pequeña localidad del municipio de Coruche, en el corazón del Ribatejo. Su nombre cuenta su propia historia: "Justa" por la tierra que la acoge, "Limoeiro" por el árbol que todavía hoy da sombra y fruto en el jardín.',
        'Situada en el corazón del Ribatejo, junto al río Sorraia, la casa ofrece serenidad y un contacto genuino con las tradiciones rurales de la región, ideal para vacaciones en familia, encuentros entre amigos o celebraciones en grupo.',
        'El propio municipio de Coruche, ampliamente conocido como la Capital Mundial del Corcho, rodea la casa de paisajes de alcornocales, mientras que el pintoresco pueblo de Santa Justa, a pocos minutos, mantiene viva la sencillez y autenticidad de la vida en el campo.',
      ],
    },
    facts: [
      { icon: 'bedrooms', label: '3 habitaciones' },
      { icon: 'guests', label: 'Hasta 8 huéspedes' },
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
          image: '/images/spaces-pool.jpg',
          alt: 'Piscina exterior con tumbonas',
          caption: 'Piscina y Patio',
          description:
            'La piscina es la invitación perfecta en los días más calurosos, ya sea un chapuzón refrescante o unos momentos de calma junto al agua, en la tranquilidad del patio.',
        },
        {
          image: '/images/spaces-garden.jpg',
          alt: 'Jardín tropical con el limonero',
          caption: 'Jardín y Limonero',
          description:
            'En el jardín, un limonero vigoroso y lleno de vida ofrece sombra natural, un aroma fresco y la invitación irresistible a coger un limón recién madurado.',
        },
        {
          image: '/images/spaces-outdoor-kitchen.jpg',
          alt: 'Zona exterior cubierta con barbacoa',
          caption: 'Zona Exterior Cubierta',
          description:
            'La barbacoa está lista para comidas al aire libre, perfectas para reuniones en familia o entre amigos, acompañadas por la tranquilidad del paisaje ribatejano.',
        },
      ],
    },
    rooms: {
      eyebrow: 'Habitaciones y Camas',
      title: 'Espacio para todos',
      intro: 'La casa tiene 3 habitaciones y capacidad para hasta 8 huéspedes.',
      items: ['2 camas individuales', '2 camas de matrimonio', '2 sofás cama'],
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
        { icon: 'friends', label: 'Encuentros entre amigos' },
      ],
    },
    amenities: {
      eyebrow: 'Comodidades',
      title: 'Todo lo que necesita, nada más',
      intro: 'Una lista sencilla con todo lo que hace la estancia más cómoda.',
      items: [
        'Piscina exterior privada',
        'Jardín con limonero',
        'Zona exterior cubierta con barbacoa',
        'WiFi gratis en toda la casa',
        'Espacio totalmente privado durante la estancia',
      ],
    },
    location: {
      eyebrow: 'Ubicación',
      title: 'Santa Justa, en el corazón del Ribatejo',
      paragraph:
        'La casa está ubicada en Santa Justa, municipio de Coruche, a unos 15 minutos en coche de la Presa de Montargil, uno de los mayores embalses de Portugal continental y punto de partida hacia playas fluviales, deportes acuáticos y paseos por la naturaleza. Consulte la página de Puntos de Interés para más sugerencias de la región.',
      address: 'Santa Justa, Coruche, Portugal',
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
