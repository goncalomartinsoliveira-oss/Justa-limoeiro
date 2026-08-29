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
    slug: 'rio-sorraia',
    category: 'nature',
    image: '/images/placeholder-sorraia.svg',
    confirmed: true,
    distance: { pt: 'Junto à casa', en: 'Right by the house', es: 'Junto a la casa' },
    name: {
      pt: 'Rio Sorraia em Santa Justa',
      en: 'Sorraia River in Santa Justa',
      es: 'Río Sorraia en Santa Justa',
    },
    description: {
      pt: 'A casa fica junto às margens do Sorraia, um dos melhores troços do rio para a pesca desportiva e também um bom ponto de partida para um passeio de canoa ao fim da tarde.',
      en: 'The house sits right on the banks of the Sorraia, one of the best stretches of the river for sport fishing and a great starting point for a canoe trip in the late afternoon.',
      es: 'La casa está junto a las orillas del Sorraia, uno de los mejores tramos del río para la pesca deportiva y también un buen punto de partida para un paseo en canoa al final de la tarde.',
    },
  },
  {
    slug: 'trilhos-pedestres-coruche',
    category: 'nature',
    image: '/images/placeholder-trilhos.svg',
    confirmed: true,
    distance: { pt: '~20 min de carro', en: '~20 min by car', es: '~20 min en coche' },
    name: {
      pt: 'Trilhos Pedestres de Coruche',
      en: 'Coruche Walking Trails',
      es: 'Senderos de Coruche',
    },
    description: {
      pt: 'O concelho tem uma rede de percursos pedestres assinalados entre montados de sobreiro e as margens do Sorraia, incluindo o PR1 da Cegonha e o PR2 do Cavalo e da Coruja.',
      en: 'The municipality has a signposted network of walking trails through cork-oak groves and along the Sorraia, including the PR1 Cegonha trail and the PR2 Cavalo e Coruja trail.',
      es: 'El municipio cuenta con una red de senderos señalizados entre alcornocales y las orillas del Sorraia, incluyendo el PR1 de la Cegonha y el PR2 del Cavalo e da Coruja.',
    },
  },
  {
    slug: 'coruche-capital-da-cortica',
    category: 'culture',
    image: '/images/placeholder-cork.svg',
    confirmed: true,
    distance: { pt: '~20 min de carro', en: '~20 min by car', es: '~20 min en coche' },
    name: {
      pt: 'Coruche, Capital Mundial da Cortiça',
      en: 'Coruche, World Capital of Cork',
      es: 'Coruche, Capital Mundial del Corcho',
    },
    description: {
      pt: 'Rodeado por extensos montados de sobreiro, o concelho de Coruche é amplamente reconhecido como a Capital Mundial da Cortiça, com paisagens naturais inspiradoras e um património cultural rico.',
      en: 'Surrounded by vast cork-oak groves, the Coruche municipality is widely recognised as the World Capital of Cork, with inspiring natural landscapes and a rich cultural heritage.',
      es: 'Rodeado de extensos alcornocales, el municipio de Coruche es ampliamente reconocido como la Capital Mundial del Corcho, con paisajes naturales inspiradores y un rico patrimonio cultural.',
    },
  },
  {
    slug: 'santuario-nossa-senhora-do-castelo',
    category: 'culture',
    image: '/images/placeholder-santuario.svg',
    confirmed: true,
    distance: { pt: '~20 min de carro', en: '~20 min by car', es: '~20 min en coche' },
    name: {
      pt: 'Santuário de Nossa Senhora do Castelo',
      en: 'Sanctuary of Our Lady of the Castle',
      es: 'Santuario de Nuestra Señora del Castillo',
    },
    description: {
      pt: 'Erguido sobre as ruínas do antigo castelo de Coruche, este santuário oferece uma vista panorâmica sobre a vila e o rio Sorraia, e é um dos pontos mais altos e simbólicos da região.',
      en: 'Built on the ruins of Coruche’s old castle, this sanctuary offers a panoramic view over the town and the Sorraia river, and is one of the highest and most symbolic spots in the region.',
      es: 'Construido sobre las ruinas del antiguo castillo de Coruche, este santuario ofrece una vista panorámica sobre la villa y el río Sorraia, y es uno de los puntos más altos y simbólicos de la región.',
    },
  },
  {
    slug: 'centro-historico-coruche',
    category: 'culture',
    image: '/images/placeholder-centro-historico.svg',
    confirmed: true,
    distance: { pt: '~20 min de carro', en: '~20 min by car', es: '~20 min en coche' },
    name: {
      pt: 'Centro Histórico de Coruche',
      en: 'Coruche Historic Center',
      es: 'Centro Histórico de Coruche',
    },
    description: {
      pt: 'A vila guarda memórias de várias épocas, da Ponte da Coroa, de origem romana, ao Aqueduto medieval de Monte da Barca, passando por igrejas do século XVII e o Museu Municipal.',
      en: 'The town holds memories from several eras, from the Roman-origin Corôa Bridge to the medieval Monte da Barca Aqueduct, along with 17th-century churches and the Municipal Museum.',
      es: 'La villa conserva memorias de varias épocas, desde el Puente da Coroa, de origen romano, hasta el Acueducto medieval de Monte da Barca, además de iglesias del siglo XVII y el Museo Municipal.',
    },
  },
  {
    slug: 'sabores-do-ribatejo',
    category: 'gastronomy',
    image: '/images/placeholder-gastronomia.svg',
    confirmed: true,
    distance: { pt: '~20 min de carro', en: '~20 min by car', es: '~20 min en coche' },
    name: {
      pt: 'Sabores do Ribatejo',
      en: 'Flavours of the Ribatejo',
      es: 'Sabores del Ribatejo',
    },
    description: {
      pt: 'Sopa de feijão-frade, ensopado de borrego, sável frito com açorda de ovas e arroz doce são alguns dos pratos que se encontram nos restaurantes de Coruche, como o Farnel, o Páteo Sorraia ou a Ponte da Coroa.',
      en: 'Black-eyed pea soup, lamb stew, fried shad with roe açorda and rice pudding are some of the dishes found in Coruche’s restaurants, such as O Farnel, Páteo Sorraia or Ponte da Coroa.',
      es: 'Sopa de judías de careta, estofado de cordero, sável frito con açorda de huevas y arroz con leche son algunos de los platos que se encuentran en los restaurantes de Coruche, como O Farnel, Páteo Sorraia o Ponte da Coroa.',
    },
  },
  {
    slug: 'coruche-a-mesa',
    category: 'gastronomy',
    image: '/images/placeholder-coruche-a-mesa.svg',
    confirmed: true,
    distance: {
      pt: 'Evento sazonal, início de março',
      en: 'Seasonal event, early March',
      es: 'Evento estacional, principios de marzo',
    },
    name: {
      pt: 'Jornadas de Gastronomia Coruche à Mesa',
      en: 'Coruche à Mesa Food Festival',
      es: 'Jornadas Coruche à Mesa',
    },
    description: {
      pt: 'Todos os anos, no início de março, cerca de uma dúzia de restaurantes do concelho junta-se nestas jornadas dedicadas à cozinha tradicional do Ribatejo. Vale a pena verificar as datas antes da viagem.',
      en: 'Every year in early March, about a dozen restaurants across the municipality take part in this food festival dedicated to traditional Ribatejo cuisine. Worth checking the dates before your trip.',
      es: 'Cada año, a principios de marzo, una docena de restaurantes del municipio se reúnen en estas jornadas gastronómicas dedicadas a la cocina tradicional del Ribatejo. Vale la pena comprobar las fechas antes del viaje.',
    },
  },
  {
    slug: 'passeios-de-balao',
    category: 'activities',
    image: '/images/placeholder-balao.svg',
    confirmed: true,
    distance: { pt: '~15 a 20 min de carro', en: '~15 to 20 min by car', es: '~15 a 20 min en coche' },
    name: {
      pt: 'Passeios de Balão de Ar Quente',
      en: 'Hot Air Balloon Rides',
      es: 'Paseos en Globo Aerostático',
    },
    description: {
      pt: 'A paisagem de montados e lezírias do Ribatejo vê-se de outra forma a bordo de um balão de ar quente, com voos ao nascer do sol organizados por operadores da região.',
      en: 'The cork-oak groves and river plains of the Ribatejo look different from above, aboard a hot air balloon, with sunrise flights organised by operators in the region.',
      es: 'El paisaje de alcornocales y llanuras del Ribatejo se ve de otra forma a bordo de un globo aerostático, con vuelos al amanecer organizados por operadores de la región.',
    },
  },
  {
    slug: 'terra-das-abelhas',
    category: 'activities',
    image: '/images/placeholder-abelhas.svg',
    confirmed: true,
    distance: { pt: '~15 min de carro', en: '~15 min by car', es: '~15 min en coche' },
    name: {
      pt: 'Terra das Abelhas',
      en: 'Terra das Abelhas',
      es: 'Terra das Abelhas',
    },
    description: {
      pt: 'Um projeto de turismo apícola em Coruche, com visitas ao apiário, provas de mel e passeios interpretativos pensados para famílias e para quem quer conhecer de perto o mundo das abelhas.',
      en: 'A beekeeping tourism project in Coruche, with apiary visits, honey tastings and guided walks designed for families and anyone curious about the world of bees.',
      es: 'Un proyecto de turismo apícola en Coruche, con visitas al apiario, catas de miel y paseos interpretativos pensados para familias y para quien quiera conocer de cerca el mundo de las abejas.',
    },
  },
];
