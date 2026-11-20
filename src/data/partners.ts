/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AffiliatePartner, PartnerOffer, TravellerProfile } from '../types';

export const travellerProfilesData: TravellerProfile[] = [
  {
    id: 'familias',
    slug: 'familias',
    title: {
      pt: 'Viagens em Família',
      es: 'Viajes en Familia',
      en: 'Family Journeys',
    },
    description: {
      pt: 'Praias de mar calmo como piscinas, pousadas com estrutura ampla, atividades seguras para crianças e acessibilidade descomplicada.',
      es: 'Playas calmas, posadas familiares con amplios jardines y actividades seguras para todas las edades.',
      en: 'Tranquil wave-free shores, spacious family-friendly lodgings, and secure activities for children.',
    },
    icon: 'Users',
    recommendedDestinations: ['bombinhas', 'itapema', 'porto-belo'],
  },
  {
    id: 'casais',
    slug: 'casais-romanticos',
    title: {
      pt: 'Casais & Lua de Mel',
      es: 'Parejas & Escapadas Románticas',
      en: 'Couples & Romantic Retreats',
    },
    description: {
      pt: 'Bistrôs intimistas à luz de velas, pousadas boutique com vista para enseadas secretas e pores do sol inesquecíveis.',
      es: 'Posadas boutique, cenas íntimas junto al mar y atardeceres de postal.',
      en: 'Candlelit coastal tables, boutique cliffside hideaways, and golden hour coastal walks.',
    },
    icon: 'Heart',
    recommendedDestinations: ['buzios', 'florianopolis', 'angra-dos-reis'],
  },
  {
    id: 'solo',
    slug: 'viajantes-solo',
    title: {
      pt: 'Viagens Solo & Imersão',
      es: 'Viajeros Solos & Desconexión',
      en: 'Solo Travelers & Slow Living',
    },
    description: {
      pt: 'Segurança, trilhas contemplativas, cafés acolhedores e facilidade para circular e se conectar com a comunidade local.',
      es: 'Seguridad, caminatas en la naturaleza, cafés literarios y facilidad de movilidad.',
      en: 'Safety, inspiring nature trails, friendly coastal cafés, and authentic local immersion.',
    },
    icon: 'Compass',
    recommendedDestinations: ['florianopolis', 'bombinhas', 'buzios'],
  },
  {
    id: 'aventura-natureza',
    slug: 'aventura-natureza',
    title: {
      pt: 'Ecoturismo & Vivências Náuticas',
      es: 'Ecoturismo & Deportes Náuticos',
      en: 'Eco-Adventures & Ocean Sports',
    },
    description: {
      pt: 'Mergulho autônomo, surf em praias agrestes, travessias de caiaque e expedições de veleiro em reservas biológicas.',
      es: 'Buceo, surf en playas desiertas y expediciones en velero por reservas marinas.',
      en: 'Scuba diving in protected reserves, wild surf breaks, sea kayaking, and sailing expeditions.',
    },
    icon: 'Waves',
    recommendedDestinations: ['bombinhas', 'angra-dos-reis', 'florianopolis'],
  },
];

export const affiliatePartnersData: AffiliatePartner[] = [
  {
    id: 'booking-stays',
    name: 'Booking.com',
    category: 'hospedagem',
    description: {
      pt: 'Seleção curada de pousadas boutique, hotéis de charme e casas de temporada no litoral catarinense e fluminense.',
      es: 'Selección de posadas boutique y alojamientos con encanto en el litoral de Brasil.',
      en: 'Curated boutique pousadas and seaside villas across Santa Catarina and Rio de Janeiro shores.',
    },
    websiteUrl: 'https://www.booking.com',
    affiliateUrl: 'https://www.booking.com/?aid=embarque_editorial',
    badgeText: {
      pt: 'Parceiro de Hospedagem',
      es: 'Socio de Alojamiento',
      en: 'Lodging Partner',
    },
    isSponsored: true,
  },
  {
    id: 'seguros-promo',
    name: 'Seguros Promo',
    category: 'seguro',
    description: {
      pt: 'Comparador de seguros de viagem com cobertura médica completa, cancelamento e proteção de bagagem.',
      es: 'Comparador de seguros de viaje con cobertura médica integral.',
      en: 'Travel insurance comparator with comprehensive medical and trip cancellation protection.',
    },
    websiteUrl: 'https://www.segurospromo.com.br',
    affiliateUrl: 'https://www.segurospromo.com.br/?p=embarque',
    badgeText: {
      pt: 'Seguro Viagem Recomendado',
      es: 'Seguro de Viaje Recomendado',
      en: 'Recommended Travel Insurance',
    },
    isSponsored: true,
  },
  {
    id: 'rentcars-brasil',
    name: 'Rentcars',
    category: 'veiculos',
    description: {
      pt: 'Aluguel de veículos para percorrer a Rota da Costa Esmeralda (SC) ou a Rio-Santos (RJ) com retirada nos principais aeroportos.',
      es: 'Alquiler de vehículos en los aeropuertos de Florianópolis, Navegantes y Río de Janeiro.',
      en: 'Car rental with pickup at Florianópolis, Navegantes, and Rio de Janeiro airports.',
    },
    websiteUrl: 'https://www.rentcars.com',
    affiliateUrl: 'https://www.rentcars.com/?aff=embarque_viagem',
    badgeText: {
      pt: 'Mobilidade Terrestre',
      es: 'Movilidad',
      en: 'Car Rental',
    },
    isSponsored: true,
  },
  {
    id: 'civitatis-expedicoes',
    name: 'Civitatis Brasil',
    category: 'passeios',
    description: {
      pt: 'Passeios de escuna em Angra dos Reis, mergulhos guiados em Bombinhas e tours históricos em Florianópolis com cancelamento grátis.',
      es: 'Excursiones en barco, bautismos de buceo y visitas culturales con cancelación gratuita.',
      en: 'Schooner cruises, guided reef dives, and cultural heritage tours with free cancellation.',
    },
    websiteUrl: 'https://www.civitatis.com',
    affiliateUrl: 'https://www.civitatis.com/br/?aid=embarque',
    badgeText: {
      pt: 'Passeios Náuticos & Culturais',
      es: 'Excursiones Náuticas',
      en: 'Nautical Tours & Excursions',
    },
    isSponsored: true,
  },
];

export const partnerOffersData: PartnerOffer[] = [
  {
    id: 'offer-bombinhas-mergulho',
    partnerId: 'civitatis-expedicoes',
    partnerName: 'Civitatis Brasil',
    destinationSlug: 'bombinhas',
    highlight: true,
    title: {
      pt: 'Batismo de Mergulho Ecológico na Ilha do Arvoredo',
      es: 'Bautismo de Buceo Ecológico en Isla de Arvoredo',
      en: 'Ecological Discovery Scuba Dive at Arvoredo Reserve',
    },
    description: {
      pt: 'Equipamento completo, instrutor credenciado PADI e barco partindo de Bombinhas. Instrutores experientes e água com visibilidade média de 12 metros.',
      es: 'Equipo completo, guía PADI y navegación desde Bombinhas hacia el santuario marino.',
      en: 'Full gear provided, PADI-certified instructor, and boat charter to the protected marine reserve.',
    },
    priceNote: {
      pt: 'A partir de R$ 380 por pessoa com fotos submarinas inclusas',
      es: 'Desde R$ 380 por persona con fotografía acuática',
      en: 'From R$ 380 per diver including underwater photography',
    },
    affiliateUrl: 'https://www.civitatis.com/br/bombinhas/mergulho-arvoredo/?aid=embarque',
  },
  {
    id: 'offer-buzios-pousadas',
    partnerId: 'booking-stays',
    partnerName: 'Booking.com',
    destinationSlug: 'buzios',
    highlight: true,
    title: {
      pt: 'Pousadas de Charme com Vista para a Ferradura e Geribá',
      es: 'Posadas con Encanto frente al Mar en Búzios',
      en: 'Boutique Charme Pousadas Overlooking Ferradura Bay',
    },
    description: {
      pt: 'Descontos sazonais de até 25% para reservas antecipadas em propriedades boutique selecionadas com café da manhã artesanal.',
      es: 'Descuentos de hasta 25% en reservas anticipadas con desayuno artesanal.',
      en: 'Seasonal advantages up to 25% off on advance bookings at verified seaside boutique stays.',
    },
    priceNote: {
      pt: 'Diárias selecionadas a partir de R$ 340 para duas pessoas',
      es: 'Tarifas desde R$ 340 por noche para dos personas',
      en: 'Selected rates from R$ 340 / night for two guests',
    },
    affiliateUrl: 'https://www.booking.com/searchresults.pt-br.html?city=-632289&aid=embarque_editorial',
  },
  {
    id: 'offer-angra-lancha',
    partnerId: 'civitatis-expedicoes',
    partnerName: 'Civitatis Brasil',
    destinationSlug: 'angra-dos-reis',
    highlight: false,
    title: {
      pt: 'Passeio de Lancha pelas Ilhas Paradisíacas & Ilha Grande',
      es: 'Paseo en Lancha Rápida por Islas Paradisíacas de Angra',
      en: 'Speedboat Expedition across Angra Islands & Lagoa Azul',
    },
    description: {
      pt: 'Roteiro com paradas na Lagoa Azul, Ilha de Cataguases e Praia de Freguesia de Santana. Inclui máscara de snorkel e cooler térmico a bordo.',
      es: 'Recorrido con paradas en Lagoa Azul, Cataguases y playas paradisíacas.',
      en: 'Scenic route visiting Blue Lagoon, Cataguases Island, and secluded cove beaches with snorkel gear.',
    },
    priceNote: {
      pt: 'R$ 210 por pessoa em grupo reduzido',
      es: 'R$ 210 por persona en grupo reducido',
      en: 'R$ 210 per guest in small group format',
    },
    affiliateUrl: 'https://www.civitatis.com/br/angra-dos-reis/lancha-ilhas/?aid=embarque',
  },
];
