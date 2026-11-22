/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Article } from '../types';
import { oQueFazerEmBombinhasArticle } from './articles/bombinhas';
import { oQueFazerEmFlorianopolisArticle } from './articles/florianopolis';
import { oQueFazerEmBalnearioCamboriuArticle } from './articles/balnearioCamboriu';
import { oQueFazerEmItapemaArticle } from './articles/itapema';
import { oQueFazerEmGramadoArticle } from './articles/gramado';
import { comoFuncionaUmCruzeiroArticle } from './articles/cruzeiro';
import { comoComprarPassagensAereasBaratasArticle } from './articles/passagensAereas';
import { oQueFazerEmSantiagoArticle } from './articles/santiago';
import { pacotesDeViagemBaratosArticle } from './articles/pacotesViagem';
import { oQueFazerEmBuziosArticle } from './articles/buzios';
import { oQueFazerEmBuenosAiresArticle } from './articles/buenosAires';
import { comoCalcularCustosViagemArticle } from './articles/orcamentoViagem';

export const articlesData: Article[] = [
  oQueFazerEmBombinhasArticle,
  oQueFazerEmFlorianopolisArticle,
  oQueFazerEmBalnearioCamboriuArticle,
  oQueFazerEmItapemaArticle,
  oQueFazerEmGramadoArticle,
  comoFuncionaUmCruzeiroArticle,
  comoComprarPassagensAereasBaratasArticle,
  oQueFazerEmSantiagoArticle,
  pacotesDeViagemBaratosArticle,
  oQueFazerEmBuziosArticle,
  oQueFazerEmBuenosAiresArticle,
  comoCalcularCustosViagemArticle,
  {
    id: 'bombinhas-enseadas-secretas',
    slug: 'bombinhas-alem-do-obvio-enseadas-secretas',
    editorialStatus: 'legacy_review',
    category: 'praias',
    coverImage: '/images/bombinhas.jpg',
    featured: true,
    publishedAt: '2025-10-15',
    updatedAt: '2025-10-28',
    readTimeMinutes: 7,
    destinationSlug: 'bombinhas',
    author: {
      id: 'marcos-silva',
      name: 'Marcos Silveira',
      role: {
        pt: 'Editor de Costas & Ecoturismo',
        es: 'Editor de Costas y Ecoturismo',
        en: 'Coastal & Eco-Travel Editor',
      },
      avatar: '/images/author_marcos.jpg',
      bio: {
        pt: 'Jornalista náutico há 14 anos percorrendo o litoral catarinense.',
        es: 'Periodista náutico especializado en el litoral brasileño.',
        en: 'Nautical travel writer with 14 years documenting Santa Catarina’s shores.',
      },
    },
    title: {
      pt: 'Bombinhas Além do Óbvio: As Enseadas Secretas da Costa Esmeralda',
      es: 'Bombinhas Más Allá de lo Obvio: Las Calas Secretas de Costa Esmeralda',
      en: 'Beyond the Obvious: Secret Coves of Bombinhas & Costa Esmeralda',
    },
    subtitle: {
      pt: 'Longe das multidões de verão, a península catarinense resguarda refúgios de águas cristalinas acessíveis por trilhas aromáticas.',
      es: 'Lejos del bullicio estival, la península guarda refugios de ensueño entre aromas de Mata Atlántica.',
      en: 'Away from peak summer bustle, the peninsula reveals pristine coves tucked behind coastal rainforest trails.',
    },
    excerpt: {
      pt: 'Descubra como acessar praias quase desertas como Retiro dos Padres, Tainha e Cação, com dicas sobre marés e conservação marinha.',
      es: 'Descubre cómo acceder a playas recónditas como Retiro dos Padres, Tainha y Cação.',
      en: 'How to discover untamed seaside enclaves with local trail secrets and marine conservation etiquette.',
    },
    sections: [
      {
        title: {
          pt: 'O Silêncio da Praia da Tainha',
          es: 'El Silencio de Playa da Tainha',
          en: 'The Tranquility of Praia da Tainha',
        },
        content: {
          pt: [
            'No extremo sul da península de Bombinhas, a Praia da Tainha surge como uma surpresa após a subida de terra batida que contorna o Morro do Macaco. Com cerca de 200 metros de extensão, a enseada é protegida dos ventos fortes e cercada por pedras gigantes cobertas de bromélias.',
            'Aqui o tempo transcorre em outro ritmo. O mar raramente tem ondas, convidando a horas de flutuação contemplativa. Pela manhã, pequenos barcos de pescadores locais trazem robalos e tainhas frescas que abastecem os poucos quiosques familiares da orla.',
          ],
          es: [
            'En el extremo sur de Bombinhas, Playa da Tainha se presenta como un paraíso protegido de los vientos dominantes.',
            'Aquí el mar casi no tiene olas, ideal para nadar y relajarse con vistas directas a la Reserva de Arvoredo.',
          ],
          en: [
            'At the southern tip of the peninsula, Praia da Tainha reveals itself after a scenic winding ascent around Morro do Macaco.',
            'Sheltered from offshore currents, its emerald waters offer serene swimming beneath granite boulders crowned with wild orchids.',
          ],
        },
      },
      {
        title: {
          pt: 'Mergulho Consciente na Sepultura e Arvoredo',
          es: 'Snorkel y Conciencia en Sepultura y Arvoredo',
          en: 'Mindful Snorkeling at Sepultura & Arvoredo',
        },
        content: {
          pt: [
            'A Praia da Sepultura é célebre por sua transparência, mas poucos viajantes sabem que as primeiras horas do amanhecer revelam um espetáculo submarino sem paralelo. Tartarugas marinhas verdes costumam alimentar-se tranquilamente junto aos costões antes das 8h.',
            'Para preservar essa riqueza frágil, recomenda-se o uso de protetores solares biodegradáveis (sem oxibenzona) e nunca alimentar os peixes, mantendo o equilíbrio natural que faz de Bombinhas um patrimônio nacional.',
          ],
          es: [
            'Praia da Sepultura es famosa por su transparencia. En las primeras horas de la mañana, tortugas verdes se alimentan en paz en los arrecifes.',
            'Es fundamental emplear protector solar mineral biodegradable para proteger los corales y la fauna nativa.',
          ],
          en: [
            'Sepultura is renowned for its crystalline water clarity, yet few travelers realize early morning hours offer intimate marine encounters with green sea turtles grazing along the rocky shelf.',
            'Utilizing reef-safe, biodegradable sunscreen ensures this marine ecosystem continues to thrive for generations.',
          ],
        },
      },
    ],
  },
  {
    id: 'florianopolis-rota-das-ostras',
    slug: 'florianopolis-guia-rota-das-ostras-vilas-acorianas',
    editorialStatus: 'legacy_review',
    category: 'gastronomia',
    coverImage: '/images/florianopolis.jpg',
    featured: true,
    publishedAt: '2025-10-20',
    updatedAt: '2025-10-29',
    readTimeMinutes: 9,
    destinationSlug: 'florianopolis',
    author: {
      id: 'clarice-mendes',
      name: 'Clarice Mendes',
      role: {
        pt: 'Crítica de Viagem & Gastronomia',
        es: 'Crítica de Viajes y Gastronomía',
        en: 'Travel & Culinary Critic',
      },
      avatar: '/images/author_clarice.jpg',
      bio: {
        pt: 'Especialista em identidades culinárias tradicionais e enogastronomia brasileira.',
        es: 'Especialista en rutas gastronómicas e identidad culinaria de Brasil.',
        en: 'Focusing on authentic regional cuisines and coastal terroir across Brazil.',
      },
    },
    title: {
      pt: 'Florianópolis: A Rota das Ostras e o Encanto das Vilas Açorianas',
      es: 'Florianópolis: La Ruta de las Ostras y los Pueblos Coloniales',
      en: 'Florianópolis: The Oyster Trail & Azorean Colonial Havens',
    },
    subtitle: {
      pt: 'Uma jornada sensorial entre casarios coloridos do século XVIII, fazendas marinhas sustentáveis e o melhor pôr do sol do sul do país.',
      es: 'Un viaje sensorial entre casonas del siglo XVIII, granjas marinas y atardeceres dorados.',
      en: 'A sensory journey through 18th-century stone hamlets, sustainable aquaculture, and bayside dining.',
    },
    excerpt: {
      pt: 'Como a Ilha de Santa Catarina se transformou na capital nacional da ostra cultivada, preservando a herança açoriana em Santo Antônio de Lisboa e Ribeirão da Ilha.',
      es: 'Cómo Florianópolis se consolidó como capital marina de ostras preservando su patrimonio histórico.',
      en: 'How Santa Catarina Island became Brazil’s premier oyster capital while preserving Azorean coastal heritage.',
    },
    sections: [
      {
        title: {
          pt: 'Santo Antônio de Lisboa: História e Terroir Marinho',
          es: 'Santo Antônio de Lisboa: Historia y Terroir Marino',
          en: 'Santo Antônio de Lisboa: Historic Stone & Sea Terroir',
        },
        content: {
          pt: [
            'Caminhar pelas ruelas de pedra de Santo Antônio de Lisboa é como folhear um livro de história viva. As casas pintadas em tons ocres e azuis, as janelas guilhotina e a igreja de Nossa Senhora das Necessidades (concluída em 1756) mantêm o espírito da colonização açoriana.',
            'À beira da praia calma, decks de madeira avançam sobre as águas da baía norte. Ali, as ostras são colhidas diretamente das lanternas de cultivo localizadas a poucas centenas de metros e servidas in natura com limão-cravo, gratinadas com queijo colonial ou flambadas com cachaça artesanal.',
          ],
          es: [
            'Caminar por Santo Antônio de Lisboa es respirar la herencia portuguesa del siglo XVIII.',
            'Los decks sobre el agua sirven ostras recién recolectadas acompañadas de vinos blancos locales de altura.',
          ],
          en: [
            'Wandering the cobblestone alleys of Santo Antônio de Lisboa feels like stepping into a preserved 18th-century Portuguese maritime colony.',
            'Overwater wooden verandas serve fresh oysters cultivated in the clean bay waters just offshore, paired with crisp local sparkling wines.',
          ],
        },
      },
    ],
  },
  {
    id: 'buzios-fora-de-temporada',
    slug: 'buzios-fora-de-temporada-alma-poetica',
    editorialStatus: 'legacy_review',
    category: 'roteiros',
    coverImage: '/images/buzios.jpg',
    featured: true,
    publishedAt: '2025-10-10',
    updatedAt: '2025-10-25',
    readTimeMinutes: 6,
    destinationSlug: 'buzios',
    author: {
      id: 'marcos-silva',
      name: 'Marcos Silveira',
      role: {
        pt: 'Editor de Costas & Ecoturismo',
        es: 'Editor de Costas y Ecoturismo',
        en: 'Coastal & Eco-Travel Editor',
      },
      avatar: '/images/author_marcos.jpg',
      bio: {
        pt: 'Jornalista náutico há 14 anos percorrendo o litoral brasileiro.',
        es: 'Periodista náutico especializado en el litoral brasileño.',
        en: 'Nautical travel writer with 14 years documenting Brazilian coasts.',
      },
    },
    title: {
      pt: 'Búzios Fora de Temporada: Quando a Península Revela sua Alma Poética',
      es: 'Búzios Fuera de Temporada: Cuando la Península Revela su Poesía',
      en: 'Búzios Off-Season: When the Peninsula Reveals Its Poetic Soul',
    },
    subtitle: {
      pt: 'Entre maio e outubro, a antiga vila fluminense desacelera. É o momento de caminhar sem pressa pela Orla Bardot e desfrutar do silêncio de enseadas desertas.',
      es: 'De mayo a octubre la península desacelera, invitando a pasear en calma por la Orla Bardot.',
      en: 'From May to October, the famed peninsula slows its pace, offering tranquil shores and candlelit bistros.',
    },
    excerpt: {
      pt: 'Dicas de pousadas intimistas, bistrôs autorais e as melhores praias para visitar durante os meses de clima ameno e luz dourada.',
      es: 'Guía de posadas con encanto, bistrós y playas ideales para visitar con clima templado.',
      en: 'Curated boutique pousadas, quiet seaside walks, and tranquil coves bathed in autumn sunlight.',
    },
    sections: [
      {
        title: {
          pt: 'A Serenidade dos Ossos e da Azeda',
          es: 'La Serenidad de Ossos y Azeda',
          en: 'Serenity Between Ossos and Azeda Coves',
        },
        content: {
          pt: [
            'Sem o trânsito pesado do alto verão, Búzios resgata o charme descontraído que encantou viajantes do mundo inteiro. A caminhada que começa na Praia da Armação, passa pela secular Igreja de Sant’Anna e desce pelos degraus de madeira da Praia dos Ossos é uma das mais belas da costa sudeste.',
            'Nas águas calmas da Azedinha, o mar parece um lago translúcido. As pousadas boutique praticam tarifas até 40% menores do que no réveillon, com atendimento personalizado e café da manhã servido ao ar livre sem pressa.',
          ],
          es: [
            'Sin el tráfico del verano, Búzios recupera su espíritu bohemio y su calma original.',
            'Las tarifas hoteleras bajan notablemente y el mar mantiene su característico color turquesa.',
          ],
          en: [
            'Without the summer gridlock, Búzios reclaims the bohemian coastal poetry that first put it on the global map.',
            'Secluded stairs lead down to tranquil coves, while boutique properties offer peaceful verandas and intimate hospitality.',
          ],
        },
      },
    ],
  },
  {
    id: 'angra-guia-nautico',
    slug: 'angra-dos-reis-e-ilha-grande-guia-nautico-definitivo',
    editorialStatus: 'legacy_review',
    category: 'guias',
    coverImage: '/images/angra_dos_reis.jpg',
    featured: true,
    publishedAt: '2025-10-05',
    updatedAt: '2025-10-26',
    readTimeMinutes: 8,
    destinationSlug: 'angra-dos-reis',
    author: {
      id: 'clarice-mendes',
      name: 'Clarice Mendes',
      role: {
        pt: 'Crítica de Viagem & Gastronomia',
        es: 'Crítica de Viajes y Gastronomía',
        en: 'Travel & Culinary Critic',
      },
      avatar: '/images/author_clarice.jpg',
      bio: {
        pt: 'Especialista em identidades culinárias e roteiros náuticos pelo Brasil.',
        es: 'Especialista en viajes y navegación costera.',
        en: 'Specializing in nautical expeditions and coastal culture.',
      },
    },
    title: {
      pt: 'Navegando em Angra dos Reis e Ilha Grande: O Guia Náutico Definitivo',
      es: 'Navegando en Angra dos Reis e Ilha Grande: Guía Náutica',
      en: 'Sailing Angra dos Reis & Ilha Grande: The Essential Nautical Guide',
    },
    subtitle: {
      pt: 'Como planejar a travessia, escolher entre escunas coletivas, veleiros ou lanchas rápidas e mapear os ancoradouros mais deslumbrantes da baía da Ilha Grande.',
      es: 'Cómo planificar la travesía náutica, elegir embarcaciones y descubrir las mejores calas.',
      en: 'How to plan yacht or schooner charters and drop anchor in secluded rainforest lagoons.',
    },
    excerpt: {
      pt: 'Tudo o que você precisa saber para explorar o arquipélago com segurança, respeito à vida marinha e melhor custo-benefício.',
      es: 'Todo lo necesario para recorrer el archipiélago con seguridad y vistas inolvidables.',
      en: 'Everything needed to navigate Brazil’s emerald archipelago with local sea captains and eco-awareness.',
    },
    sections: [
      {
        title: {
          pt: 'Lagoa Azul x Lagoa Verde: Qual Priorizar no Roteiro?',
          es: 'Lagoa Azul vs Lagoa Verde: ¿Cuál Elegir?',
          en: 'Blue Lagoon vs Green Lagoon: Crafting Your Itinerary',
        },
        content: {
          pt: [
            'Embora ambas tenham nomes semelhantes, as duas lagoas oferecem experiências distintas. A Lagoa Azul, situada entre as ilhotas da Freguesia de Santana, tem fundo de areia clara que projeta reflexos celestes. Já a Lagoa Verde, próxima à Enseada do Bananal, é circundada por corais raros e costões rochosos densos em ouriços e estrelas-do-mar.',
            'Para evitar o fluxo intenso das escunas de turismo de massa, a recomendação editorial é contratar uma lancha privativa ou veleiro e chegar a esses pontos antes das 10h da manhã ou após as 15h30, quando a luz do sol rasante doura as montanhas da Serra da Bocaina.',
          ],
          es: [
            'Ambas ensenadas son joyas ecológicas de agua cristalina.',
            'Navegar en embarcaciones pequeñas permite llegar en horarios con poco público para disfrutar de la paz del mar.',
          ],
          en: [
            'While sharing idyllic reputations, both natural lagoons have distinct characters: Blue Lagoon boasts gleaming sand bars, while Green Lagoon is flanked by dramatic jungle shores.',
            'Arriving either before 10 AM or after 3:30 PM ensures secluded swims with calm mirror-like waters reflecting mist-covered peaks.',
          ],
        },
      },
    ],
  },
];
