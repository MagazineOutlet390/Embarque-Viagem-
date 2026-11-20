/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Destination } from '../types';

export const destinationsData: Destination[] = [
  {
    id: 'bombinhas',
    slug: 'bombinhas',
    name: 'Bombinhas',
    state: 'SC',
    region: 'Costa Esmeralda',
    country: 'Brasil',
    featured: true,
    priorityRegion: 'santa_catarina',
    heroImage: '/images/bombinhas.jpg',
    gallery: [
      '/images/bombinhas.jpg',
      '/images/florianopolis.jpg',
    ],
    tagline: {
      pt: 'A capital brasileira do mergulho ecológico e suas 39 praias de águas translúcidas.',
      es: 'La capital del buceo ecológico con 39 playas de aguas translúcidas y arena fina.',
      en: 'The ecological diving capital of Brazil with 39 crystalline sheltered bays.',
    },
    description: {
      pt: 'Localizada em uma península recortada por costões rochosos e colinas da Mata Atlântica, Bombinhas oferece uma das maiores biodiversidades marinhas do país através da Reserva Biológica Marinha do Arvoredo. É o refúgio perfeito para quem busca praias calmas para famílias, como Sepultura e Bombas, ou ondas consistentes em Quatro Ilhas e Mariscal.',
      es: 'Ubicada en una península bordeada de selva tropical atlántica, Bombinhas destaca por la Reserva Marina de Arvoredo y bahías de ensueño como Sepultura, ideales para snorkel y tranquilidad familiar, además de playas oceánicas como Mariscal.',
      en: 'Set along an Atlantic forest peninsula, Bombinhas is famed for its crystalline waters, protected marine reserves, and a seamless blend of tranquil family coves like Sepultura with wild open surf beaches like Mariscal.',
    },
    bestTimeToVisit: {
      pt: 'Novembro a abril: águas mornas, sol pleno e maior visibilidade marinha. Março e abril são os meses ideais para tranquilidade e preços mais amenos.',
      es: 'Noviembre a abril: aguas cálidas y excelente visibilidad marina. Marzo y abril ofrecen el clima perfecto con menor afluencia.',
      en: 'November through April: balmy waters, clear skies, and prime marine clarity. March and April provide fewer crowds with summer temperatures.',
    },
    howToGetThere: {
      pt: 'A 68 km do Aeroporto de Navegantes (NVG) e 82 km do Aeroporto de Florianópolis (FLN). Acesso via BR-101 e SC-412.',
      es: 'A 68 km del Aeropuerto de Navegantes (NVG) y 82 km de Florianópolis (FLN). Acceso pavimentado por BR-101 y SC-412.',
      en: '68 km from Navegantes Airport (NVG) and 82 km from Florianópolis International (FLN), accessible via highway BR-101.',
    },
    highlights: [
      {
        title: {
          pt: 'Praia da Sepultura e Piscinas Naturais',
          es: 'Playa de la Sepultura y Piscinas Naturales',
          en: 'Sepultura Beach & Tidal Pools',
        },
        description: {
          pt: 'Piscina natural de águas verdes com dezenas de espécies de peixes visíveis a olho nu.',
          es: 'Acuario natural de aguas calmas repleto de vida marina para snorkel.',
          en: 'A natural calm lagoon brimming with marine life, perfect for snorkeling.',
        },
        category: 'beach',
      },
      {
        title: {
          pt: 'Mergulho na Reserva do Arvoredo',
          es: 'Buceo en la Reserva de Arvoredo',
          en: 'Scuba Diving at Arvoredo Marine Reserve',
        },
        description: {
          pt: 'Um dos santuários ecológicos mais celebrados do Atlântico Sul, com rica fauna submarina.',
          es: 'Uno de los santuarios marinos más protegidos de Sudamérica.',
          en: 'One of the most biologically diverse marine sanctuaries in the South Atlantic.',
        },
        category: 'nature',
      },
      {
        title: {
          pt: 'Trilha do Morro do Macaco',
          es: 'Sendero del Cerro del Mono',
          en: 'Morro do Macaco Panoramic Trail',
        },
        description: {
          pt: 'Subida de 35 minutos com visão em 360 graus de toda a península e ilhas costeiras.',
          es: 'Caminata de 35 minutos con vistas panorámicas de 360 grados de la península.',
          en: 'A 35-minute hike offering commanding 360-degree vistas over the archipelago.',
        },
        category: 'adventure',
      },
    ],
    costProfile: {
      dailyAverageBRL: 420,
      tier: 'moderado',
      lodgingRangeBRL: [250, 850],
      diningRangeBRL: [110, 240],
      transportDailyBRL: 50,
      toursDailyBRL: 120,
    },
  },
  {
    id: 'florianopolis',
    slug: 'florianopolis',
    name: 'Florianópolis',
    state: 'SC',
    region: 'Ilha de Santa Catarina',
    country: 'Brasil',
    featured: true,
    priorityRegion: 'santa_catarina',
    heroImage: '/images/florianopolis.jpg',
    gallery: [
      '/images/florianopolis.jpg',
      '/images/bombinhas.jpg',
    ],
    tagline: {
      pt: 'A Ilha da Magia: harmonia entre vilas açorianas históricas, dunas e alta gastronomia de frutos do mar.',
      es: 'La Isla de la Magia: pueblos coloniales, dunas doradas y la mejor gastronomía marina.',
      en: 'The Magic Island: Azorean seaside villages, wild sand dunes, and oyster gastronomy.',
    },
    description: {
      pt: 'Capital catarinense com mais de 40 praias, lagoas preservadas e fortes setecentistas. Florianópolis une o charme rústico de Santo Antônio de Lisboa e Ribeirão da Ilha com a vibração contemporânea de Jurerê e Lagoa da Conceição. É também a capital nacional da ostra cultivada.',
      es: 'Capital de Santa Catarina con más de 40 playas y lagunas costeras. Combina la herencia colonial de sus villas históricas con la gastronomía de ostras de clase mundial y playas abiertas como Campeche y Joaquina.',
      en: 'Blessed with over 40 distinct beaches, colonial Portuguese outposts, and freshwater lagoons, Florianópolis effortlessly connects historic Azorean fishing enclaves with world-class oyster farming and vibrant coastal bistros.',
    },
    bestTimeToVisit: {
      pt: 'Dezembro a abril para praias e esportes náuticos. Maio a agosto para contemplar as vilas açorianas e saborear a safra fresca da tainha.',
      es: 'Diciembre a abril para playa y sol. De mayo a agosto para disfrutar de la tranquilidad, el senderismo y la gastronomía local.',
      en: 'December through April for balmy beach days. May to August for tranquil village exploration, coastal hikes, and seasonal fresh fish.',
    },
    howToGetThere: {
      pt: 'Aeroporto Internacional Hercílio Luz (FLN), eleito o melhor do Brasil, com voos diretos de SP, RJ, Buenos Aires, Santiago e Montevidéu.',
      es: 'Aeropuerto Internacional Hercílio Luz (FLN), con vuelos directos desde Buenos Aires, Santiago, San Pablo y Río de Janeiro.',
      en: 'Hercílio Luz International Airport (FLN), recognized as Brazil’s finest airport, with direct flights from across the Americas.',
    },
    highlights: [
      {
        title: {
          pt: 'Pôr do Sol em Santo Antônio de Lisboa',
          es: 'Atardecer en Santo Antônio de Lisboa',
          en: 'Golden Hour at Santo Antônio de Lisboa',
        },
        description: {
          pt: 'Vila fundada no século XVII com arquitetura açoriana e bistrôs debruçados sobre a baía norte.',
          es: 'Encantador pueblo del siglo XVII con casas de piedra y bistrós frente al agua.',
          en: 'Historic 17th-century village with cobblestone lanes and waterside oyster terraces.',
        },
        category: 'culture',
      },
      {
        title: {
          pt: 'Ilha do Campeche',
          es: 'Isla de Campeche',
          en: 'Campeche Island Caribbean Waters',
        },
        description: {
          pt: 'Monumento arqueológico com inscrições rupestres milenares e mar com tonalidade caribenha.',
          es: 'Patrimonio arqueológico con senderos guiados y aguas de color turquesa caribeño.',
          en: 'A protected archaeological treasure surrounded by translucent turquoise waters.',
        },
        category: 'nature',
      },
      {
        title: {
          pt: 'Dunas e Praia da Joaquina',
          es: 'Dunas y Playa de Joaquina',
          en: 'Joaquina Dunes & World Surfing Reserve',
        },
        description: {
          pt: 'Meca do surf internacional com dunas douradas perfeitas para sandboard ao entardecer.',
          es: 'Meca del surf continental con imponentes dunas de arena dorada.',
          en: 'Iconic surfing bay flanked by sweeping natural dunes overlooking the Atlantic.',
        },
        category: 'beach',
      },
    ],
    costProfile: {
      dailyAverageBRL: 490,
      tier: 'alto_padrao',
      lodgingRangeBRL: [280, 1200],
      diningRangeBRL: [120, 320],
      transportDailyBRL: 65,
      toursDailyBRL: 140,
    },
  },
  {
    id: 'itapema',
    slug: 'itapema',
    name: 'Itapema',
    state: 'SC',
    region: 'Costa Esmeralda',
    country: 'Brasil',
    featured: true,
    priorityRegion: 'santa_catarina',
    heroImage: '/images/itapema.jpg',
    gallery: ['/images/itapema.jpg', '/images/bombinhas.jpg'],
    tagline: {
      pt: 'Orlas arborizadas, gastronomia marítima sofisticada e o refúgio tranquilo da Meia Praia.',
      es: 'Paseos arbolados, gastronomía refinada y el descanso frente al mar en Meia Praia.',
      en: 'Verdant coastal promenades, refined seafood bistros, and serene shores.',
    },
    description: {
      pt: 'Terceiro destino mais procurado de Santa Catarina, Itapema impressiona pelo planejamento de sua orla, calçadões repletos de vida e águas amenas. Com praias agrestes preservadas como Ilhota e o Mirante do Encanto, a cidade proporciona um equilíbrio raro entre infraestrutura de ponta e natureza exuberante.',
      es: 'Con su paseo costero arbolado de Meia Praia y bahías naturales como Praia da Ilhota, Itapema combina excelente infraestructura hotelera con playas tranquilas y aguas cálidas.',
      en: 'Famed for its wide, manicured promenade along Meia Praia and untouched coves like Ilhota, Itapema offers upscale coastal living with calm waters and prime dining.',
    },
    bestTimeToVisit: {
      pt: 'Dezembro a março para curtir a orla e eventos náuticos. Abril e maio para dias ensolarados com ritmo relaxante.',
      es: 'De diciembre a marzo para clima estival. Abril y mayo para disfrutar con tranquilidad absoluta.',
      en: 'December through March for vibrant seaside strolls. April and May for peaceful sunny escapes.',
    },
    howToGetThere: {
      pt: 'A 45 km de Navegantes e 65 km de Florianópolis, às margens diretas da BR-101.',
      es: 'A 45 km del Aeropuerto de Navegantes y 65 km de Florianópolis sobre la autopista BR-101.',
      en: '45 km from Navegantes Airport and 65 km from Florianópolis along the coastal highway BR-101.',
    },
    highlights: [
      {
        title: {
          pt: 'Mirante do Encanto no Morro do Cabeço',
          es: 'Mirador del Encanto',
          en: 'Mirante do Encanto Lookout',
        },
        description: {
          pt: 'Torre de 26 metros a 156 metros de altitude sobre a orla e a enseada.',
          es: 'Mirador panorámico a 156 metros de altura con vistas a toda la bahía.',
          en: 'A scenic observation tower perched 156 meters high over the bay.',
        },
        category: 'nature',
      },
      {
        title: {
          pt: 'Praia da Ilhota e Gastronomia Típica',
          es: 'Playa de Ilhota y Restaurantes',
          en: 'Ilhota Beach & Coastal Dining',
        },
        description: {
          pt: 'Mar aberto com restaurantes especializados em rodízios e ensopados de frutos do mar.',
          es: 'Ensenada agreste famosa por sus restaurantes de mariscos frescos.',
          en: 'A scenic open cove celebrated for traditional seafood stews and oceanfront bistros.',
        },
        category: 'gastronomy',
      },
    ],
    costProfile: {
      dailyAverageBRL: 380,
      tier: 'moderado',
      lodgingRangeBRL: [220, 750],
      diningRangeBRL: [95, 220],
      transportDailyBRL: 40,
      toursDailyBRL: 90,
    },
  },
  {
    id: 'porto-belo',
    slug: 'porto-belo',
    name: 'Porto Belo',
    state: 'SC',
    region: 'Costa Esmeralda',
    country: 'Brasil',
    featured: true,
    priorityRegion: 'santa_catarina',
    heroImage: '/images/porto_belo.jpg',
    gallery: ['/images/porto_belo.jpg', '/images/bombinhas.jpg'],
    tagline: {
      pt: 'Águas mansas, tradição naval e a mítica Ilha de Porto Belo.',
      es: 'Aguas tranquilas, tradición pesquera y la idílica Isla de Porto Belo.',
      en: 'Calm emerald bays, nautical heritage, and the scenic Porto Belo Island.',
    },
    description: {
      pt: 'Porto Belo é o berço náutico da Costa Esmeralda. Suas águas calmas funcionam como um ancoradouro natural para escunas e veleiros. A Ilha de Porto Belo é o cartão-postal da cidade, com trilhas ecológicas, inscrições rupestres e mar sem ondas, ideal para stand-up paddle e canoagem.',
      es: 'Cuna náutica de la Costa Esmeralda de Santa Catarina. Sus aguas mansas la convierten en puerto de escala para cruceros y veleros, con la fascinante Isla de Porto Belo frente a su costa.',
      en: 'The nautical sanctuary of Costa Esmeralda. With calm sheltered waters protected from ocean swells, it is a haven for traditional schooners and island-hopping.',
    },
    bestTimeToVisit: {
      pt: 'Novembro a abril: época em que as escunas realizam passeios diários regulares.',
      es: 'Noviembre a abril: temporada de paseos náuticos diarios y cruceros.',
      en: 'November through April: prime season for calm boat charters and island trails.',
    },
    howToGetThere: {
      pt: 'A 60 km do Aeroporto de Navegantes, logo antes da entrada da península de Bombinhas.',
      es: 'A 60 km de Navegantes, con acesso directo por la autopista BR-101.',
      en: '60 km south of Navegantes Airport, situated at the entrance of the Bombinhas peninsula.',
    },
    highlights: [
      {
        title: {
          pt: 'Ilha de Porto Belo',
          es: 'Isla de Porto Belo',
          en: 'Porto Belo Island Day Trip',
        },
        description: {
          pt: 'Ilha particular aberta à visitação com águas caribenhas e trilhas sinalizadas.',
          es: 'Isla protegida con aguas turquesas, museo al aire libre y deportes acuáticos.',
          en: 'A private eco-reserve island accessible by boat, featuring glass-clear shallow water.',
        },
        category: 'nature',
      },
      {
        title: {
          pt: 'Praia do Araçá e Cultura Caiçara',
          es: 'Playa de Araçá y Tradición Marinera',
          en: 'Araçá Traditional Fishing Haven',
        },
        description: {
          pt: 'Comunidade tradicional com barcos coloridos e gastronomia açoriana autêntica.',
          es: 'Aldea de pescadores artesana con embarcaciones tradicionales de madera.',
          en: 'Authentic artisanal fishing village with colorful wooden skiffs and local kitchens.',
        },
        category: 'culture',
      },
    ],
    costProfile: {
      dailyAverageBRL: 350,
      tier: 'moderado',
      lodgingRangeBRL: [190, 680],
      diningRangeBRL: [90, 190],
      transportDailyBRL: 35,
      toursDailyBRL: 100,
    },
  },
  {
    id: 'balneario-camboriu',
    slug: 'balneario-camboriu',
    name: 'Balneário Camboriú',
    state: 'SC',
    region: 'Litoral Norte',
    country: 'Brasil',
    featured: true,
    priorityRegion: 'santa_catarina',
    heroImage: '/images/balneario_camboriu.jpg',
    gallery: ['/images/balneario_camboriu.jpg', '/images/florianopolis.jpg'],
    tagline: {
      pt: 'Cosmopolita, vibrante e repleta de contrastes entre arranha-céus e praias agrestes preservadas.',
      es: 'Moderna, cosmopolita y llena de contrastes entre rascacielos y playas agrestes vírgenes.',
      en: 'A vibrant coastal metropolis flanked by towering architecture and pristine wild beaches.',
    },
    description: {
      pt: 'Conhecida por sua arquitetura arrojada e infraestrutura urbana de alto luxo, Balneário Camboriú também guarda um lado secreto de rara beleza: a rodovia Interpraias, que conecta seis praias agrestes intocadas como Estaleiro, Estaleirinho e Taquaras, emolduradas pela Mata Atlântica.',
      es: 'Famosa por su perfil moderno y su gastronomía de primer orden, Balneário Camboriú alberga también la ruta Interpraias, con playas vírgenes y reservas naturales como Estaleirinho y Taquaras.',
      en: 'Renowned for its sleek waterfront architecture and high-end dining, Balneário Camboriú also harbors a peaceful soul along the scenic Interpraias road connecting untouched wilderness coves.',
    },
    bestTimeToVisit: {
      pt: 'Todo o ano para vida urbana e gastronomia. Dezembro a abril para curtir o mar nas Praias Agrestes.',
      es: 'Todo el año para entretenimiento y gastronomía. De diciembre a abril para las playas agrestes.',
      en: 'Year-round for urban buzz and culinary excellence. December to April for sun-drenched coves.',
    },
    howToGetThere: {
      pt: 'Apenas 32 km do Aeroporto de Navegantes (NVG) e 80 km de Florianópolis.',
      es: 'A solo 32 km de Navegantes (NVG) y 80 km de Florianópolis.',
      en: 'Only 32 km from Navegantes Airport (NVG) and 80 km north of Florianópolis.',
    },
    highlights: [
      {
        title: {
          pt: 'Rodovia Interpraias e Taquaras',
          es: 'Ruta Interpraias y Taquaras',
          en: 'Interpraias Scenic Highway',
        },
        description: {
          pt: 'Roteiro cênico entre colinas verdes que leva a enseadas preservadas e pousadas boutique.',
          es: 'Ruta panorámica que conecta calas de arena gruesa y aguas transparentes.',
          en: 'A scenic coastline highway leading to preserved Atlantic forest beaches.',
        },
        category: 'nature',
      },
      {
        title: {
          pt: 'Parque Unipraias e Teleférico',
          es: 'Parque Unipraias y Teleférico',
          en: 'Unipraias Cable Car & Forest Reserve',
        },
        description: {
          pt: 'Bondinhos aéreos que ligam a praia Central à preservada Praia de Laranjeiras.',
          es: 'Teleférico que atraviesa la montaña hacia la playa protegida de Laranjeiras.',
          en: 'An aerial cableway connecting the central waterfront over the rainforest crest.',
        },
        category: 'adventure',
      },
    ],
    costProfile: {
      dailyAverageBRL: 520,
      tier: 'alto_padrao',
      lodgingRangeBRL: [300, 1400],
      diningRangeBRL: [130, 350],
      transportDailyBRL: 60,
      toursDailyBRL: 150,
    },
  },
  {
    id: 'buzios',
    slug: 'buzios',
    name: 'Armação dos Búzios',
    state: 'RJ',
    region: 'Região dos Lagos',
    country: 'Brasil',
    featured: true,
    priorityRegion: 'rio_de_janeiro',
    heroImage: '/images/buzios.jpg',
    gallery: [
      '/images/buzios.jpg',
      '/images/angra_dos_reis.jpg',
    ],
    tagline: {
      pt: 'O charme colonial da península fluminense, com mais de 20 enseadas e pores do sol dourados.',
      es: 'El encanto colonial de la península carioca, con más de 20 calas y atardeceres mágicos.',
      en: 'Colonial coastal charm, boutique pousadas, and over 20 distinct seaside coves.',
    },
    description: {
      pt: 'Antiga vila de pescadores que conquistou o mundo a partir dos anos 1960, Búzios une sofisticação despretensiosa, calçamentos de pedra pé-de-moleque na Rua das Pedras e praias com personalidades únicas: da tranquilidade da Ferradura e Azeda à imponência das ondas de Geribá.',
      es: 'Antiguo pueblo pesquero que enamoró a Brigitte Bardot. Búzios combina posadas de autor, callejuelas adoquinadas en la Rua das Pedras y playas variadas que van desde bahías de aguas mansas hasta costas de surf como Geribá.',
      en: 'A historic fishing haven turned cosmopolitan peninsula, Búzios charms with cobblestone waterfront lanes, bougainvillea blossoms, and over 20 beaches ranging from serene sheltered lagoons to vibrant surf breaks.',
    },
    bestTimeToVisit: {
      pt: 'Março a junho e setembro a novembro: clima seco, dias ensolarados e a atmosfera autêntica da vila sem filas.',
      es: 'Marzo a junio y septiembre a noviembre: clima templado, pocas lluvias y tranquilidad idónea.',
      en: 'March through June and September through November: sunny skies, pleasant temperatures, and uncrowded lanes.',
    },
    howToGetThere: {
      pt: 'A 170 km da cidade do Rio de Janeiro (Aeroportos GIG e SDU), com traslado regular ou carro pela Via Lagos (RJ-124).',
      es: 'A 170 km de la ciudad de Río de Janeiro (GIG y SDU) por autopista moderna y traslados diarios.',
      en: '170 km east of Rio de Janeiro (GIG & SDU airports), easily reached via rental car or private transfers.',
    },
    highlights: [
      {
        title: {
          pt: 'Orla Bardot e Rua das Pedras ao Entardecer',
          es: 'Orla Bardot y Rua das Pedras',
          en: 'Sunset along Orla Bardot & Rua das Pedras',
        },
        description: {
          pt: 'Passeio beira-mar ladeado por bistrôs, esculturas e barcos de madeira balançando na maré.',
          es: 'Paseo costero con bistrós de autor y los tradicionales barcos pesqueros.',
          en: 'Scenic coastal walkway flanked by candlelit terraces and wooden fishing boats.',
        },
        category: 'culture',
      },
      {
        title: {
          pt: 'Praia da Azeda e Azedinha',
          es: 'Playas Azeda y Azedinha',
          en: 'Azeda & Azedinha Hidden Coves',
        },
        description: {
          pt: 'Enseadas de águas calmas e verde-esmeralda acessíveis por trilha a partir dos Ossos.',
          es: 'Calas de aguas color esmeralda bordeadas de vegetación nativa.',
          en: 'Secluded emerald coves protected within an environmental preserve.',
        },
        category: 'beach',
      },
      {
        title: {
          pt: 'Pôr do Sol no Porto da Barra',
          es: 'Atardecer en Porto da Barra',
          en: 'Porto da Barra Sunset Pier',
        },
        description: {
          pt: 'Complexo gastronômico em Manguinhos com o mais famoso poente da península.',
          es: 'Polo gastronómico con mesas sobre la arena y el mejor atardecer peninsular.',
          en: 'Refined oceanfront pier featuring contemporary art galleries and dining terraces.',
        },
        category: 'gastronomy',
      },
    ],
    costProfile: {
      dailyAverageBRL: 540,
      tier: 'alto_padrao',
      lodgingRangeBRL: [320, 1500],
      diningRangeBRL: [140, 360],
      transportDailyBRL: 60,
      toursDailyBRL: 160,
    },
  },
  {
    id: 'angra-dos-reis',
    slug: 'angra-dos-reis',
    name: 'Angra dos Reis & Ilha Grande',
    state: 'RJ',
    region: 'Costa Verde',
    country: 'Brasil',
    featured: true,
    priorityRegion: 'rio_de_janeiro',
    heroImage: '/images/angra_dos_reis.jpg',
    gallery: [
      '/images/angra_dos_reis.jpg',
      '/images/buzios.jpg',
    ],
    tagline: {
      pt: 'Um arquipélago de 365 ilhas com montanhas tropicais encontrando o mar cor de esmeralda.',
      es: 'Un archipiélago de 365 islas donde la selva tropical se sumerge en aguas esmeralda.',
      en: 'An archipelago of 365 islands where lush coastal mountains plunge into emerald waters.',
    },
    description: {
      pt: 'Na Costa Verde fluminense, a imponência da Serra do Mar mergulha diretamente no oceano, criando enseadas mansas, ilhas paradisíacas e cachoeiras que desaguam na areia. A Ilha Grande é a joia máxima da região: sem circulação de carros, com mais de 100 praias preservadas como Lopes Mendes e a Lagoa Azul.',
      es: 'En la Costa Verde carioca, las montañas selváticas se encuentran con el mar, creando uno de los paisajes más impresionantes de Sudamérica. Destaca Ilha Grande, una reserva sin automóviles con playas legendarias como Lopes Mendes y Lagoa Azul.',
      en: 'Where the Atlantic rainforest canopy kisses pristine sheltered seas. Home to 365 islands and over two thousand beaches, highlighted by Ilha Grande—a car-free sanctuary featuring the famed Lopes Mendes beach and crystal lagoons.',
    },
    bestTimeToVisit: {
      pt: 'Abril a outubro: menor índice de chuvas da serra, mar calmo e temperaturas amenas.',
      es: 'Abril a octubre: clima más seco, menor nubosidad y mar ideal para navegar.',
      en: 'April through October: clearer days, minimized mountain precipitation, and tranquil sailing.',
    },
    howToGetThere: {
      pt: 'A 150 km do Rio de Janeiro e 380 km de São Paulo via BR-101 (Rio-Santos). Barcas e lanchas rápidas partem do cais de Angra ou Conceição de Jacareí.',
      es: 'A 150 km de Río de Janeiro por la autopista panorámica Rio-Santos. Lanchas rápidas cruzan a diario hacia Ilha Grande.',
      en: '150 km southwest of Rio de Janeiro via highway BR-101. Regular fast ferries connect to Ilha Grande from the harbor.',
    },
    highlights: [
      {
        title: {
          pt: 'Lagoa Azul e Lagoa Verde',
          es: 'Lagoa Azul y Lagoa Verde',
          en: 'Blue Lagoon & Green Lagoon Marine Coves',
        },
        description: {
          pt: 'Piscinas marinhas transparentes ladeadas por pedras e cardumes dóceis de sargentinhos.',
          es: 'Acuarios naturales de poca profundidad ideales para nadar entre bancos de peces.',
          en: 'Sheltered natural pools framed by granite rocks and friendly schools of damselfish.',
        },
        category: 'beach',
      },
      {
        title: {
          pt: 'Praia de Lopes Mendes',
          es: 'Playa de Lopes Mendes',
          en: 'Lopes Mendes Wild Ocean Beach',
        },
        description: {
          pt: 'Eleita repetidamente entre as praias oceânicas mais belas do mundo, com areia fina e som de veludo.',
          es: 'Considerada una de las playas desiertas más hermosas del mundo, con 3 km de arena blanca.',
          en: 'Regularly ranked among the planet’s finest wild ocean shores, with pristine silica sand.',
        },
        category: 'nature',
      },
      {
        title: {
          pt: 'Passeio de Escuna ou Veleiro Privativo',
          es: 'Navegación en Velero o Escuna',
          en: 'Private Schooner or Sailboat Charter',
        },
        description: {
          pt: 'A melhor maneira de explorar enseadas secretas e ilhotas acessíveis apenas por mar.',
          es: 'La experiencia definitiva para descubrir calas vírgenes y playas exclusivas.',
          en: 'The definitive coastal journey, exploring secluded coves inaccessible by road.',
        },
        category: 'adventure',
      },
    ],
    costProfile: {
      dailyAverageBRL: 460,
      tier: 'alto_padrao',
      lodgingRangeBRL: [260, 1100],
      diningRangeBRL: [110, 280],
      transportDailyBRL: 70,
      toursDailyBRL: 160,
    },
  },
];
