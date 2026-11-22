/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Article } from '../../types';
import { WESLEY_VIEIRA } from '../authors';

/**
 * Artigo 12/15 — Como Calcular os Custos de uma Viagem e Organizar seu Orçamento
 * Estrutura preparada para futura inclusão direta da propriedade `videoEmbed`
 * com vídeo institucional próprio do canal Embarque Viagem, sem espaços vazios no layout atual.
 */
export const comoCalcularCustosViagemArticle: Article = {
  id: 'como-calcular-custos-de-uma-viagem',
  slug: 'como-calcular-custos-de-uma-viagem',
  slugs: {
    pt: 'como-calcular-custos-de-uma-viagem',
    es: 'como-calcular-el-costo-de-un-viaje',
    en: 'how-to-calculate-travel-costs',
  },
  editorialStatus: 'verified',
  showNewsletterInvite: true,
  category: 'dicas',
  coverImage: '/images/blog/como-calcular-custos-de-uma-viagem-capa.webp',
  coverImageAlt: {
    pt: 'Mapa-múndi antigo aberto sobre mesa com peças de madeira formando a frase I love to travel, evocando o planejamento financeiro de viagens',
    es: 'Mapamundi antiguo extendido sobre una mesa con fichas de madera que forman la frase I love to travel, ilustrando la planificación de viajes',
    en: 'Vintage world map spread across a table with wooden letter tiles spelling I love to travel, illustrating trip budget planning',
  },
  coverImageCaption: {
    pt: 'Organizar o orçamento completo antes de emitir passagens ou fechar reservas permite enxergar todas as camadas reais de custo de uma viagem — Acervo Pexels (ID 14131702).',
    es: 'Organizar el presupuesto completo antes de emitir pasajes o confirmar hoteles permite ver todas las capas reales de gasto de un viaje — Colección Pexels (ID 14131702).',
    en: 'Mapping out a complete trip budget before booking flights or hotels brings every real layer of travel spending into view — Pexels Archive (ID 14131702).',
  },
  featured: false,
  publishedAt: '2026-11-21',
  updatedAt: '2026-11-21',
  readTimeMinutes: 22,
  availableLanguages: ['pt', 'es', 'en'],
  author: WESLEY_VIEIRA,
  reviewer: WESLEY_VIEIRA,
  publisherName: 'Embarque',
  seo: {
    primaryKeyword: 'como calcular os custos de uma viagem',
    title: {
      pt: 'Como Calcular os Custos de uma Viagem | Embarque',
      es: 'Cómo Calcular el Costo de un Viaje | Embarque',
      en: 'How to Calculate Travel Costs & Budget | Embarque',
    },
    description: {
      pt: 'Aprenda como calcular os custos de uma viagem passo a passo, dividir gastos por pessoa, montar sua planilha, prever imprevistos e economizar no orçamento.',
      es: 'Aprende cómo calcular el costo de un viaje paso a paso, dividir gastos por persona, armar una planilla de presupuesto, prever imprevistos y ahorrar.',
      en: 'Learn how to calculate travel costs step by step, split shared vs. individual expenses per person, build a trip budget spreadsheet, and prepare for surprises.',
    },
  },
  transparencyNote: {
    pt: 'Transparência editorial: este guia prático foi elaborado com apoio de ferramentas digitais e checagem factual em 21 de novembro de 2026 em fontes oficiais brasileiras — Banco Central do Brasil (Lei Cambial nº 14.286/2021 e orientações sobre câmbio e papel-moeda), Receita Federal (regras vigentes do IOF unificado em 3,5% pelo Decreto nº 12.499/2025 e declaração e-DBV), Polícia Federal (taxas oficiais de emissão de passaporte), Ministério das Relações Exteriores / Portal Consular (recomendações de seguro-viagem e limites da assistência consular), ANAC (Resolução nº 400/2016) e Senacon / Consumidor.gov.br (direitos de informação e transparência de tarifas) — sob revisão humana de Wesley Vieira. Os valores do exemplo numérico da Seção 12 são explicitamente hipotéticos para fins didáticos.',
    es: 'Transparencia editorial: esta guía práctica fue elaborada con apoyo de herramientas digitales y verificación factual el 21 de noviembre de 2026 en fuentes oficiales — Banco Central de Brasil (Ley Cambiaria 14.286/2021), Receita Federal (IOF vigente del 3,5 % conforme Decreto 12.499/2025 y declaración e-DBV), Policía Federal (tasas de pasaporte), Ministerio de Relaciones Exteriores / Portal Consular (asistencia y seguro de viaje), ANAC (Resolución 400/2016) y Senacon / Consumidor.gov.br — bajo revisión humana de Wesley Vieira. Las cifras del ejemplo de la Sección 12 son explícitamente hipotéticas con fines didácticos.',
    en: 'Editorial transparency: this planning guide was developed with digital research tools and fact-checked on November 21, 2026 against official public sources—Central Bank of Brazil (Foreign Exchange Law 14.286/2021), Federal Revenue Service (Decree 12.499/2025 3.5% IOF rule and e-DBV cash declaration rules), Brazilian Federal Police (passport fee schedule), Ministry of Foreign Affairs / Consular Portal (travel medical insurance guidance), ANAC (Resolution 400/2016 air passenger rules), and Senacon / Consumidor.gov.br—human-reviewed by Wesley Vieira. All figures in the Section 12 worked example are explicitly hypothetical for illustration.',
  },
  title: {
    pt: 'Como Calcular os Custos de uma Viagem e Organizar seu Orçamento',
    es: 'Cómo Calcular el Costo de un Viaje y Organizar tu Presupuesto',
    en: 'How to Calculate Travel Costs and Organize Your Trip Budget',
  },
  subtitle: {
    pt: 'Método passo a passo para estimar despesas reais, separar gastos individuais e compartilhados, montar uma planilha prática, calcular custos internacionais e manter uma reserva para imprevistos.',
    es: 'Método paso a paso para estimar gastos reales, separar costos individuales y compartidos, armar una planilla práctica, calcular viajes internacionales y reservar margen para imprevistos.',
    en: 'Step-by-step method to estimate true trip expenses, separate individual from shared costs, structure a practical budget sheet, plan international exchange fees, and build a contingency cushion.',
  },
  excerpt: {
    pt: 'Descubra como calcular os custos de uma viagem sem esquecer taxas, alimentação, deslocamentos e imprevistos: fórmulas claras, planilha modelo, exemplo hipotético conferido e checklist completo.',
    es: 'Descubre cómo calcular el costo total de un viaje sin olvidar tasas, comidas, traslados ni imprevistos: fórmulas claras, tabla modelo, ejemplo práctico verificado y checklist final.',
    en: 'Learn how to calculate true travel costs without overlooking taxes, meals, transit, or surprises: clear formulas, a structured budget table, a verified sample calculation, and a pre-booking checklist.',
  },
  sections: [
    {
      id: 'introducao-orcamento-viagem',
      title: {
        pt: 'Por que o orçamento da viagem começa muito antes do check-in',
        es: 'Por qué el presupuesto real de un viaje empieza mucho antes del check-in',
        en: 'Why true trip budgeting starts well before check-in',
      },
      content: {
        pt: [
          'A cena é familiar para quem já planejou férias ou uma escapada de feriado: você pesquisa passagens aéreas, encontra um valor atrativo, escolhe o hotel que cabe na parcela e acredita que o custo da viagem está resolvido. Porém, ao chegar ao destino — ou na fatura do mês seguinte — percebe que transfer do aeroporto, bagagem despachada, cafés, transporte local, ingressos, taxas de hospedagem e pequenas compras somaram uma quantia equivalente ou até superior ao valor inicial das reservas.',
          'O custo real de uma viagem vai muito além do preço da passagem ou da diária do hotel. Quando essas duas linhas consomem quase todo o limite financeiro disponível antes mesmo do embarque, o viajante passa a improvisar no destino: corta passeios importantes, depende do limite do cartão de crédito para despesas cotidianas ou volta com dívidas que não estavam previstas.',
          'Este guia apresenta um método direto e replicável para calcular os custos de uma viagem nacional ou internacional antes de fechar compras, organizar cada categoria em uma estrutura simples, dividir corretamente os gastos por pessoa e acompanhar os desembolsos durante o roteiro sem perder a leveza da experiência.',
        ],
        es: [
          'La escena resulta muy conocida para cualquiera que haya organizado vacaciones: buscas vuelos, encuentras una tarifa atractiva, reservas un hotel que encaja en tu cuota mensual y das por cerrado el gasto del viaje. Sin embargo, al llegar al destino —o al recibir el resumen bancario del mes siguiente— descubres que traslados al aeropuerto, equipaje adicional, comidas diarias, transporte urbano, entradas, impuestos locales y compras imprevistas terminaron sumando tanto como la reserva principal.',
          'El costo real de viajar supera ampliamente el valor del pasaje y del alojamiento. Cuando esos dos rubros consumen casi todo el presupuesto disponible antes de salir de casa, el viajero queda sin margen para imprevistos, recorta actividades que deseaba vivir o recurre al financiamiento costoso durante el recorrido.',
          'En esta guía encontrarás un método claro y replicable para calcular los costos de un viaje nacional o internacional antes de pagar reservas, ordenar cada rubro en una planilla práctica, dividir correctamente el gasto por persona y controlar tu dinero en destino sin comprometer la experiencia.',
        ],
        en: [
          'The pattern is familiar to almost every traveler: you search flights, spot an appealing airfare, pick a hotel within your target nightly rate, and assume the trip budget is settled. Then, once you land—or when the next billing cycle closes—airport transfers, checked bag fees, daily meals, rideshares, attraction tickets, resort or city taxes, and small purchases quietly rival the cost of the original bookings.',
          'A trip’s real price tag goes far beyond airfare and lodging. When those two upfront bookings absorb nearly all available cash before departure, travelers end up cutting memorable experiences on site, leaning on credit limits for everyday spending, or returning home with unplanned debt.',
          'This guide walks through a practical, repeatable method to calculate travel costs before committing money—whether for a domestic getaway or an international journey—separate personal from shared expenses, build a clean tracking table, and stay on budget while enjoying the trip.',
        ],
      },
    },
    {
      id: 'por-que-calcular-custo-total',
      title: {
        pt: 'Por que calcular o custo total antes de viajar?',
        es: '¿Por qué calcular el costo total antes de viajar?',
        en: 'Why calculate total trip cost before booking?',
      },
      content: {
        pt: [
          'Calcular o custo total antes de emitir passagens ou confirmar diárias muda a qualidade das decisões. Em vez de reagir a promoções isoladas, o viajante passa a enxergar quatro conceitos financeiros distintos que costumam ser misturados no planejamento informal:',
          '1. Preço anunciado de uma viagem: é o número de vitrine exibido em anúncios de companhias aéreas, hotéis ou pacotes, geralmente sem bagagem despachada, sem alimentação completa, sem traslados e, em alguns casos, sem taxas locais ou encargos financeiros.',
          '2. Custo efetivo da viagem: é a soma integral do que será desembolsado para ir, permanecer, se alimentar, circular, visitar atrações, contratar proteção e voltar — incluindo impostos, IOF em compras internacionais, juros de parcelamento (se houver) e pequenas taxas acessórias.',
          '3. Dinheiro necessário para realizar a viagem: representa a liquidez exigida no momento certo (entrada paga antes do embarque mais saldo disponível durante os dias fora de casa), sem confundir limite de cartão de crédito com recurso financeiro real.',
          '4. Reserva financeira para imprevistos: é uma margem separada do orçamento planejado, destinada exclusivamente a atrasos, alterações climáticas, remarcações, emergências médicas não cobertas de imediato ou variações cambiais.',
          'Despesas que parecem pequenas isoladamente — dois cafés por dia, deslocamentos curtos por aplicativo, garrafas de água, estacionamento diário ou cobrança por assento marcado — multiplicam-se pelo número de dias e de viajantes. Quando o cálculo começa antes das reservas, ainda há tempo para ajustar duração da estadia, escolher uma localização mais estratégica ou trocar o meio de transporte sem multas de cancelamento.',
        ],
        es: [
          'Calcular el costo completo antes de comprar boletos o confirmar reservas transforma por completo la toma de decisiones. En lugar de guiarte por anuncios sueltos, empiezas a distinguir cuatro conceptos financieros clave que suelen confundirse:',
          '1. Precio anunciado: la cifra de portada publicada por aerolíneas, hoteles o agencias, que con frecuencia excluye equipaje despachado, traslados, comidas, seguros y tasas locales.',
          '2. Costo efectivo del viaje: la suma real de todo lo necesario para salir, alojarse, comer, moverse, visitar atracciones, proteger el viaje y regresar, incluyendo impuestos, recargos cambiarios y eventuales costos financieros.',
          '3. Liquidez necesaria para viajar: el dinero efectivamente disponible según el calendario de pagos —pagos previos a la salida más saldo real en destino—, evitando confundir el límite disponible de la tarjeta de crédito con ahorro propio.',
          '4. Reserva para imprevistos: un colchón financiero separado del gasto previsto, destinado a contingencias como demoras, cancelaciones, cambios climáticos, emergencias o fluctuaciones del tipo de cambio.',
          'Gastos que parecen menores de forma aislada —cafés diarios, traslados cortos en aplicaciones, botellas de agua, peajes o selección de asientos— se multiplican rápidamente por los días de estadía y por el número de personas. Hacer cuentas antes de reservar te da margen para ajustar fechas, elegir un barrio mejor conectado o comparar alternativas sin pagar penalidades.',
        ],
        en: [
          'Working out total trip cost before buying tickets or locking in non-refundable rooms changes every decision you make. Instead of reacting to isolated deals, you clearly separate four distinct financial numbers that casual planners often blur together:',
          '1. Advertised headline price: the teaser figure shown on search banners or booking cards, which frequently leaves out checked bags, transfers, meals, local taxes, and payment fees.',
          '2. Effective trip cost: the true sum required to depart, sleep, eat, get around, visit attractions, stay insured, and return home—including taxes, foreign exchange charges, and any financing costs.',
          '3. Required cash flow: the actual liquid money needed on schedule (pre-trip deposits plus accessible funds during travel), without mistaking an open credit card limit for available savings.',
          '4. Contingency buffer: a separate safety cushion held outside planned spending to absorb delays, itinerary disruptions, weather shifts, minor medical needs, or exchange-rate movement.',
          'Small recurring expenses—two coffees a day, short rideshares, bottled water, parking, or seat selection—compound quickly across days and travelers. Calculating everything ahead of booking preserves flexibility to shorten or shift dates, pick a more walkable neighborhood, or compare travel modes before cancellation fees apply.',
        ],
      },
    },
    {
      id: 'principais-gastos-de-viagem',
      title: {
        pt: 'Quais são os principais gastos de uma viagem?',
        es: '¿Cuáles son los principales gastos de un viaje?',
        en: 'What are the main travel expense categories?',
      },
      content: {
        pt: [
          'Dividir o orçamento em nove grandes grupos impede que despesas invisíveis fiquem fora da conta. Nem todas as categorias se aplicam a todas as viagens — uma viagem rodoviária dentro do mesmo estado dispensa passaporte e eSIM internacional, por exemplo —, mas passar os olhos por cada bloco funciona como um filtro contra esquecimentos.',
        ],
        es: [
          'Organizar el presupuesto en nueve grandes bloques evita que los gastos silenciosos queden fuera de la cuenta. No todas las categorías aplican a cada viaje —una escapada por carretera dentro de tu país no requerirá pasaporte ni eSIM internacional—, pero revisar la lista completa funciona como filtro preventivo.',
        ],
        en: [
          'Breaking a trip into nine core categories prevents hidden costs from slipping through the cracks. Not every line item applies to every journey—a regional road trip won’t require passport renewals or an international eSIM—but scanning all nine blocks works as a reliable safeguard before you book.',
        ],
      },
      subsections: {
        pt: [
          {
            title: '1. Transporte até o destino',
            paragraphs: [
              'Inclui passagens aéreas (considerando tarifas com ou sem bagagem despachada e marcação de assento), passagens rodoviárias, combustível, pedágios, estacionamento de longa duração e o transfer entre aeroporto, rodoviária e hospedagem — tanto na ida quanto na volta.',
              'Se você pretende viajar de carro, experimente nossa [Calculadora de Rota](/calculadora-rota) para consultar distâncias e planejar seus deslocamentos, estimando combustível, pedágios e divisão por passageiro antes de pegar a estrada.',
            ],
          },
          {
            title: '2. Hospedagem',
            paragraphs: [
              'Abrange diárias de hotel, pousada ou apartamento por temporada, além de cobranças que frequentemente aparecem apenas na etapa final ou no check-in: taxa de limpeza em aluguéis, taxas municipais ou de turismo, estacionamento cobrado à parte e eventual suplemento por café da manhã não incluído.',
            ],
          },
          {
            title: '3. Alimentação',
            paragraphs: [
              'Reúne café da manhã (quando não está na diária), almoço, jantar, lanches rápidos entre passeios, bebidas, cafés, sobremesas e compras em supermercados ou padarias — incluindo os gastos em aeroportos e paradas de estrada durante o trajeto.',
            ],
          },
          {
            title: '4. Transporte durante a viagem',
            paragraphs: [
              'Engloba metrô, ônibus urbanos, cartões recarregáveis de transporte público, táxis, corridas por aplicativo, aluguel de carro no destino, combustível rodado localmente, pedágios de passeios e estacionamentos próximos a praias ou centros históricos.',
            ],
          },
          {
            title: '5. Passeios e entretenimento',
            paragraphs: [
              'Compreende ingressos para parques, museus, mirantes, espetáculos, passeios guiados, travessias de barco, aluguel de equipamentos e experiências turísticas contratadas previamente ou na hora.',
            ],
          },
          {
            title: '6. Documentação e proteção',
            paragraphs: [
              'Inclui emissão ou renovação de passaporte (no Brasil, a taxa padrão da Polícia Federal para passaporte comum é de R$ 257,25 via GRU), vistos consulares ou autorizações eletrônicas quando exigidos, seguro-viagem nacional ou internacional, vacinas ou certificados sanitários obrigatórios e eventuais taxas de cartório ou envio.',
            ],
          },
          {
            title: '7. Conectividade',
            paragraphs: [
              'Reúne compra de chip físico internacional, contratação de plano eSIM de dados, pacotes temporários de roaming internacional da sua operadora ou eventuais taxas para manter acesso à internet móvel em deslocamentos.',
            ],
          },
          {
            title: '8. Compras e despesas pessoais',
            paragraphs: [
              'Inclui lembranças, roupas adequadas ao clima do destino (como casacos ou calçados específicos que você não possui), itens de farmácia e higiene pessoal, protetor solar e compras eventuais fora da rotina.',
            ],
          },
          {
            title: '9. Despesas extras',
            paragraphs: [
              'Cobre cobranças imprevistas como excesso ou despacho adicional de bagagem, taxas por alteração ou remarcação de reserva, gorjetas em serviços onde são esperadas, lavanderia em viagens longas e gastos decorrentes de atrasos climáticos ou operacionais.',
            ],
          },
        ],
        es: [
          {
            title: '1. Transporte hasta el destino',
            paragraphs: [
              'Incluye boletos aéreos (con o sin equipaje facturado y elección de asiento), pasajes terrestres en autobús o tren, combustible, peajes, estacionamiento prolongado y los traslados entre aeropuerto o terminal y el alojamiento, tanto a la ida como al regreso.',
              'Si planeas viajar por carretera, prueba nuestra [Calculadora de Ruta](/es/calculadora-ruta) para consultar distancias y planificar tus desplazamientos con estimación de combustible, peajes y costo por pasajero.',
            ],
          },
          {
            title: '2. Alojamiento',
            paragraphs: [
              'Comprende noches de hotel, posada o apartamento temporal, sumando cargos que a menudo aparecen recién al finalizar la reserva o durante el check-in: tarifa de limpieza, impuestos turísticos municipales, estacionamiento privado y desayunos no incluidos.',
            ],
          },
          {
            title: '3. Alimentación',
            paragraphs: [
              'Reúne desayuno (cuando no viene incluido), almuerzo, cena, meriendas entre recorridos, bebidas, cafés, postres y compras en supermercados, sin olvidar las comidas en aeropuertos o paradas de ruta.',
            ],
          },
          {
            title: '4. Transporte dentro del destino',
            paragraphs: [
              'Abarca metro, autobuses urbanos, tarjetas recargables de transporte público, taxis, aplicaciones de movilidad, alquiler de automóvil, combustible local, peajes en excursiones y estacionamientos en zonas céntricas o turísticas.',
            ],
          },
          {
            title: '5. Paseos y entretenimiento',
            paragraphs: [
              'Agrupa entradas a museos, parques nacionales o temáticos, miradores, espectáculos, excursiones guiadas, paseos en embarcación, alquiler de equipos y actividades culturales.',
            ],
          },
          {
            title: '6. Documentación y protección',
            paragraphs: [
              'Contempla emisión o renovación de pasaporte, visas o autorizaciones electrónicas de ingreso cuando correspondan, póliza de seguro de viaje o asistencia médica internacional, vacunas o certificados sanitarios exigidos y tasas administrativas.',
            ],
          },
          {
            title: '7. Conectividad',
            paragraphs: [
              'Incluye compra de tarjeta SIM local, contratación de eSIM internacional, paquetes temporales de roaming con tu operador y cualquier gasto necesario para contar con datos móviles estables.',
            ],
          },
          {
            title: '8. Compras y gastos personales',
            paragraphs: [
              'Comprende recuerdos, vestimenta o calzado específico para el clima del destino, productos de farmacia, higiene, protector solar y compras personales eventuales.',
            ],
          },
          {
            title: '9. Gastos adicionales',
            paragraphs: [
              'Cubre cargos no previstos como exceso de equipaje, penalidades por cambios de fecha, propinas habituales, lavandería en estadías largas y gastos derivados de demoras climáticas o de conexión.',
            ],
          },
        ],
        en: [
          {
            title: '1. Getting to your destination',
            paragraphs: [
              'Includes flights (accounting for checked luggage and seat fees), intercity buses or trains, fuel, highway tolls, long-term airport parking, and ground transfers between airports or stations and your lodging on both arrival and departure.',
              'If you are planning a road trip, try our [Route Calculator](/en/route-calculator) to check distances and map out driving costs, including fuel consumption, tolls, and cost split per passenger.',
            ],
          },
          {
            title: '2. Accommodations',
            paragraphs: [
              'Covers hotel, inn, or short-term rental nightly rates along with charges that often surface late in checkout or at check-in: cleaning fees, municipal or resort fees, on-site parking, and breakfast surcharges when not included.',
            ],
          },
          {
            title: '3. Food and drinks',
            paragraphs: [
              'Encompasses breakfast (if excluded from lodging), lunch, dinner, snacks between activities, coffee stops, beverages, desserts, grocery runs, and higher-priced meals in airports or highway rest stops.',
            ],
          },
          {
            title: '4. Local transportation',
            paragraphs: [
              'Includes metro and city buses, reloadable transit cards, taxis, rideshare trips, rental cars at the destination, local fuel, day-trip tolls, and paid parking near beaches or city centers.',
            ],
          },
          {
            title: '5. Tours and entertainment',
            paragraphs: [
              'Covers tickets for museums, parks, observation decks, live shows, guided tours, boat excursions, equipment rentals, and pre-booked or walk-up experiences.',
            ],
          },
          {
            title: '6. Documentation and travel protection',
            paragraphs: [
              'Covers passport issuance or renewal, visas or electronic travel authorizations where required, domestic or international travel medical insurance, mandatory vaccinations or health certificates, and administrative processing fees.',
            ],
          },
          {
            title: '7. Connectivity',
            paragraphs: [
              'Accounts for local physical SIM cards, international data eSIM plans, temporary carrier roaming passes, or any fee required to keep reliable mobile data while moving around.',
            ],
          },
          {
            title: '8. Shopping and personal expenses',
            paragraphs: [
              'Includes souvenirs, climate-specific clothing or footwear you need to buy beforehand, pharmacy items, sunscreen, toiletries, and discretionary retail purchases.',
            ],
          },
          {
            title: '9. Unexpected and extra expenses',
            paragraphs: [
              'Buffers unanticipated costs such as overweight baggage fees, booking modification charges, customary service tips, laundry on longer trips, and out-of-pocket expenses caused by travel delays.',
            ],
          },
        ],
      },
      toolCallout: {
        view: 'route-calculator',
        kicker: {
          pt: 'Ferramenta de deslocamento',
          es: 'Herramienta de trayecto',
          en: 'Road Trip Tool',
        },
        title: {
          pt: 'Calculadora de Rota e Combustível',
          es: 'Calculadora de Ruta y Combustible',
          en: 'Route & Fuel Calculator',
        },
        description: {
          pt: 'Vai viajar de carro? Calcule distância total, tempo de estrada, consumo de combustível, estimativa de pedágios e o custo dividido entre os passageiros.',
          es: '¿Viajas en auto? Calcula distancia total, tiempo en ruta, gasto de combustible, estimación de peajes y división del costo por pasajero.',
          en: 'Planning to drive? Estimate total distance, travel time, fuel cost, tolls, and per-passenger split before hitting the road.',
        },
        ctaLabel: {
          pt: 'Abrir Calculadora de Rota',
          es: 'Abrir Calculadora de Ruta',
          en: 'Open Route Calculator',
        },
      },
      image: {
        src: '/images/blog/orcamento-viagem-janela-aviao.webp',
        orientation: 'portrait',
        alt: 'Mão de viajante apoiada junto à janela oval de um avião comercial sobre nuvens iluminadas pelo sol',
        caption: 'Passagens e deslocamentos costumam inaugurar a planilha de viagem, mas bagagem despachada e traslados terrestres precisam entrar na mesma conta — Acervo Pexels (ID 32309990).',
        altByLang: {
          pt: 'Mão de viajante apoiada junto à janela oval de um avião comercial sobre nuvens iluminadas pelo sol',
          es: 'Mano de un viajero junto a la ventanilla ovalada de un avión comercial sobre nubes iluminadas por el sol',
          en: 'Traveler’s hand resting against an oval commercial airplane window above sunlit clouds',
        },
        captionByLang: {
          pt: 'Transporte aéreo ou rodoviário costuma ser o primeiro item cotado, mas bagagem, pedágios e traslados até a hospedagem alteram significativamente o total — Acervo Pexels (ID 32309990).',
          es: 'El transporte aéreo o terrestre suele ser el primer rubro cotizado, pero el equipaje, los peajes y los traslados al hotel modifican de forma importante la cuenta final — Colección Pexels (ID 32309990).',
          en: 'Flights or ground transport are usually priced first, yet luggage fees, tolls, and airport transfers significantly reshape the true door-to-door total — Pexels Archive (ID 32309990).',
        },
      },
    },
    {
      id: 'como-calcular-passo-a-passo',
      title: {
        pt: 'Como calcular o custo de uma viagem passo a passo',
        es: 'Cómo calcular el costo de un viaje paso a passo: método completo',
        en: 'How to calculate the cost of a trip step by step',
      },
      content: {
        pt: [
          'Para sair das estimativas vagas e chegar a um número confiável antes de assumir compromissos financeiros, siga as dez etapas abaixo na ordem sugerida. O segredo está em fechar o escopo básico primeiro e só então preencher preços pesquisados para as datas reais.',
          'Fórmula consolidada do orçamento completo:',
          'Custo total estimado = transporte + hospedagem + alimentação + deslocamentos locais + passeios + documentação e proteção + conectividade + despesas pessoais + reserva para imprevistos.',
          'Para colocar esse planejamento em prática, utilize também nossa [Calculadora de Orçamento de Viagem](/calculadora-orcamento), que ajuda a organizar e estimar os custos da sua próxima viagem.',
          'Importante sobre a divisão por participante: nunca pegue o valor total bruto e divida cegamente pelo número de viajantes antes de separar o que é individual (como cada bilhete aéreo) do que é compartilhado (como uma diária de apartamento dividida entre o casal ou grupo). Essa separação será detalhada na próxima seção.',
        ],
        es: [
          'Para dejar atrás los cálculos aproximados y obtener una cifra confiable antes de pagar reservas, aplica las diez etapas siguientes en orden. La clave está en definir primero el alcance del viaje y luego completar cada rubro con cotizaciones reales para tus fechas.',
          'Fórmula consolidada del presupuesto completo:',
          'Costo total estimado = transporte + alojamiento + alimentación + transporte local + paseos + documentación y protección + conectividad + gastos personales + reserva para imprevistos.',
          'Para llevar este cálculo a la práctica, utiliza también nuestra [Calculadora de Presupuesto de Viaje](/es/calculadora-presupuesto), que te ayuda a organizar y estimar los costos de tu próximo viaje.',
          'Regla clave antes de dividir por persona: no tomes el total global para dividirlo automáticamente entre todos los participantes sin separar antes qué gastos son individuales (como cada boleto aéreo) y cuáles son compartidos (como una habitación o un auto alquilado). Verás cómo hacerlo con exactitud en la siguiente sección.',
        ],
        en: [
          'To move from rough guesses to a dependable trip budget before committing cash, walk through these ten steps in order. Locking down the trip scope first and plugging in real quotes for your target dates prevents wishful underestimating.',
          'Consolidated full-budget formula:',
          'Estimated total cost = transportation + lodging + food + local transit + tours & activities + documentation & protection + connectivity + personal expenses + contingency buffer.',
          'To put this framework into practice right away, use our [Trip Budget Calculator](/en/budget-calculator) to organize and estimate expenses for your next getaway.',
          'One crucial rule before splitting costs: never divide the grand total blindly by the number of travelers until you separate individual expenses (such as each flight ticket) from shared expenses (such as a shared hotel room or rental car). The next section shows how to compute that cleanly.',
        ],
      },
      subsections: {
        pt: [
          {
            title: 'Etapa 1: Definir destino e duração',
            paragraphs: [
              'Estabeleça o local da viagem, a quantidade exata de dias de roteiro e o número de noites de hospedagem. Lembre-se de que uma viagem de 5 dias normalmente exige 4 diárias de hospedagem, salvo voos noturnos que demandem check-in antecipado ou late check-out.',
            ],
          },
          {
            title: 'Etapa 2: Definir o número de viajantes',
            paragraphs: [
              'Confirme quantos adultos e crianças participarão, pois idade e composição do grupo definem quantidade de quartos, tarifas infantis ou gratuidades em transportes e atrativos.',
            ],
          },
          {
            title: 'Etapa 3: Estimar transporte de ida e volta',
            paragraphs: [
              'Cotar passagens aéreas ou rodoviárias com taxas de embarque e bagagem incluídas — ou calcular combustível, pedágios e estacionamento — para todo o trajeto porta a porta, somando o traslado até o hotel.',
            ],
          },
          {
            title: 'Etapa 4: Calcular hospedagem por noites e quartos',
            paragraphs: [
              'Multiplique o valor final da diária (já com impostos, taxa de limpeza ou café da manhã) pelo número de noites e pela quantidade real de quartos necessários.',
            ],
          },
          {
            title: 'Etapa 5: Estabelecer previsão diária de alimentação',
            paragraphs: [
              'Defina quantas refeições serão pagas fora da hospedagem em cada dia e estime um valor coerente com o estilo do grupo (refeições rápidas, supermercado ou restaurantes tradicionais).',
            ],
          },
          {
            title: 'Etapa 6: Estimar transporte local',
            paragraphs: [
              'Projete o gasto diário com metrô, ônibus, aplicativos de mobilidade ou locação de veículo conforme a distância entre o bairro de hospedagem e as principais áreas de interesse.',
            ],
          },
          {
            title: 'Etapa 7: Listar atrações e passeios pagos',
            paragraphs: [
              'Pesquise nos sites oficiais o preço atualizado dos ingressos, passeios guiados e parques que são prioridade no roteiro, diferenciando atividades pagas de atrações gratuitas.',
            ],
          },
          {
            title: 'Etapa 8: Incluir documentação, seguro e conectividade',
            paragraphs: [
              'Some taxas de emissão ou renovação de documentos, vistos, seguro-viagem adequado ao perfil da viagem e plano de chip ou eSIM para os dias fora.',
            ],
          },
          {
            title: 'Etapa 9: Incluir despesas pessoais e compras',
            paragraphs: [
              'Estabeleça um teto explícito para compras, lembranças, farmácia e itens pessoais para que esses gastos não invadam a verba das refeições e passeios.',
            ],
          },
          {
            title: 'Etapa 10: Reservar margem financeira para imprevistos',
            paragraphs: [
              'Adicione uma reserva de segurança calculada à parte e mantenha esse valor intocado durante o planejamento regular para cobrir eventualidades reais.',
            ],
          },
        ],
        es: [
          {
            title: 'Etapa 1: Definir destino y duración',
            paragraphs: [
              'Fija el destino, la cantidad exacta de días de actividad y el número de noches de alojamiento. Recuerda que un itinerario de 5 días suele requerir 4 noches de hotel, salvo horarios de llegada muy temprana o salida nocturna.',
            ],
          },
          {
            title: 'Etapa 2: Definir la cantidad de viajeros',
            paragraphs: [
              'Confirma cuántos adultos y menores viajan, ya que esa composición define la cantidad de habitaciones, tarifas reducidas o gratuidad en museos y transporte.',
            ],
          },
          {
            title: 'Etapa 3: Estimar el transporte de ida y regreso',
            paragraphs: [
              'Cotiza pasajes aéreos o terrestres con impuestos y equipaje incluidos —o estima combustible y peajes en ruta— sumando los traslados desde y hacia aeropuertos o terminales.',
            ],
          },
          {
            title: 'Etapa 4: Calcular el alojamiento por noches y habitaciones',
            paragraphs: [
              'Multiplica la tarifa final por noche (incluyendo tasas locales, limpieza o desayuno) por la cantidad exacta de noches y habitaciones requeridas.',
            ],
          },
          {
            title: 'Etapa 5: Fijar una previsión diaria de alimentación',
            paragraphs: [
              'Estima cuántas comidas diarias se pagarán fuera del hotel y asigna un monto acorde al perfil del grupo (opciones rápidas, compras en mercado o restaurantes).',
            ],
          },
          {
            title: 'Etapa 6: Estimar el transporte local',
            paragraphs: [
              'Proyecta desplazamientos en transporte público, aplicaciones o auto alquilado considerando la distancia real entre la zona de alojamiento y los atractivos principales.',
            ],
          },
          {
            title: 'Etapa 7: Listar excursiones y entradas pagas',
            paragraphs: [
              'Consulta los valores vigentes directamente en las webs oficiales de museos, parques y tours prioritarios, equilibrando actividades pagas con recorridos gratuitos.',
            ],
          },
          {
            title: 'Etapa 8: Sumar documentación, seguro y conectividad',
            paragraphs: [
              'Incorpora pasaportes, visas, seguros de asistencia al viajero acordes al destino y paquetes de chip o eSIM para disponer de datos móviles.',
            ],
          },
          {
            title: 'Etapa 9: Incluir gastos personales y compras',
            paragraphs: [
              'Asigna un tope claro para recuerdos, ropa puntual o farmacia para evitar que las compras desplacen el dinero previsto para comidas o paseos.',
            ],
          },
          {
            title: 'Etapa 10: Separar un margen para imprevistos',
            paragraphs: [
              'Reserva una partida adicional independiente del gasto cotidiano para absorber emergencias, retrasos o diferencias de tarifa sin desajustar el viaje.',
            ],
          },
        ],
        en: [
          {
            title: 'Step 1: Set destination and exact trip length',
            paragraphs: [
              'Lock in where you are going, total active travel days, and total lodging nights. Keep in mind a 5-day trip normally requires 4 nights of accommodation unless early-morning arrivals or red-eye departures call for extra room access.',
            ],
          },
          {
            title: 'Step 2: Confirm party size and traveler mix',
            paragraphs: [
              'Verify how many adults and children are traveling, as ages and party structure determine room counts, child ticket discounts, and baggage needs.',
            ],
          },
          {
            title: 'Step 3: Estimate round-trip main transportation',
            paragraphs: [
              'Price flights or ground tickets inclusive of taxes, seat fees, and luggage—or calculate road-trip fuel, tolls, and parking—plus airport or station transfers at both ends.',
            ],
          },
          {
            title: 'Step 4: Calculate lodging by nights and rooms',
            paragraphs: [
              'Multiply the true all-in nightly rate (including taxes, resort/cleaning fees, and any paid breakfast) by total nights and required room count.',
            ],
          },
          {
            title: 'Step 5: Build a daily food and drink allowance',
            paragraphs: [
              'Count how many meals per day will be bought out and assign realistic daily estimates matching your group’s dining style (groceries, casual cafes, or sit-down dining).',
            ],
          },
          {
            title: 'Step 6: Estimate local transit on site',
            paragraphs: [
              'Project daily metro passes, buses, rideshares, or rental car costs based on how far your neighborhood sits from the sights you plan to visit.',
            ],
          },
          {
            title: 'Step 7: List paid tours, attractions, and tickets',
            paragraphs: [
              'Verify current ticket prices on official venue websites for priority museums, parks, shows, and guided excursions, balancing paid tickets with free sights.',
            ],
          },
          {
            title: 'Step 8: Add documents, insurance, and connectivity',
            paragraphs: [
              'Include passport fees, visa or electronic entry authorizations, trip medical insurance, required vaccinations, and SIM or eSIM data plans.',
            ],
          },
          {
            title: 'Step 9: Budget for shopping and personal extras',
            paragraphs: [
              'Set an explicit ceiling for souvenirs, pharmacy needs, and discretionary purchases so unplanned shopping doesn’t squeeze meal or tour funds.',
            ],
          },
          {
            title: 'Step 10: Add a dedicated contingency buffer',
            paragraphs: [
              'Set aside an emergency margin separate from planned categories to absorb unexpected delays, medical co-pays, or rate swings cleanly.',
            ],
          },
        ],
      },
      toolCallout: {
        view: 'calculator',
        kicker: {
          pt: 'Simulador interativo',
          es: 'Simulador interactivo',
          en: 'Interactive Planner',
        },
        title: {
          pt: 'Calculadora de Orçamento de Viagem',
          es: 'Calculadora de Presupuesto de Viaje',
          en: 'Trip Budget Calculator',
        },
        description: {
          pt: 'Simule hospedagem, alimentação, passeios, transporte e margem de segurança por viajante e por dia para organizar seu planejamento financeiro.',
          es: 'Simula alojamiento, comidas, excursiones, transporte y margen de reserva por viajero y por día para estructurar tu presupuesto.',
          en: 'Simulate lodging, dining, activities, transportation, and a safety buffer per traveler and per day to organize your trip finances.',
        },
        ctaLabel: {
          pt: 'Usar Calculadora de Orçamento',
          es: 'Usar Calculadora de Presupuesto',
          en: 'Open Budget Calculator',
        },
      },
    },
    {
      id: 'orcamento-por-pessoa',
      title: {
        pt: 'Como calcular o orçamento por pessoa',
        es: 'Cómo calcular el presupuesto por persona',
        en: 'How to calculate your travel budget per person',
      },
      content: {
        pt: [
          'Um dos equívocos mais frequentes em viagens em casal, família ou grupo de amigos é achar que todos os itens se dividem da mesma forma — ou que o custo de duas pessoas viajando juntas é exatamente o dobro do custo de um viajante solo. Na prática, existem duas naturezas diferentes de despesa:',
          'Despesas individuais: variam proporcionalmente ao número de participantes. Exemplos típicos são passagens aéreas individuais, seguro-viagem nominal, emissão de passaporte ou visto, ingressos individuais e alimentação consumida por cada pessoa.',
          'Despesas compartilhadas: permanecem iguais (ou crescem pouco) quando divididas por duas ou mais pessoas no mesmo quarto ou veículo. Exemplos clássicos incluem a diária de um quarto duplo de hotel ou apartamento de temporada, o aluguel de um carro, combustível e pedágios de uma viagem rodoviária, taxa de limpeza da hospedagem e corridas compartilhadas por aplicativo.',
          'Fórmula correta para calcular o valor individual:',
          'Custo por pessoa = despesas individuais + (despesas compartilhadas ÷ número de participantes).',
          'Ao aplicar a fórmula em grupos maiores ou famílias, ajuste o cálculo para particularidades reais: crianças pequenas podem ter desconto ou isenção em ingressos e hospedagem na mesma cama, enquanto participantes com perfis distintos podem pedir quartos individuais, escolher pratos ou bebidas em faixas de preço diferentes ou fazer passeios opcionais apenas em parte do grupo. Deixar os critérios de divisão combinados antes da viagem evita desconfortos e acertos confusos no retorno.',
        ],
        es: [
          'Uno de los errores más comunes en viajes en pareja, familia o grupo es asumir que todos los gastos se reparten igual o que viajar de a dos cuesta exactamente el doble que viajar solo. En la práctica conviven dos tipos distintos de erogación:',
          'Gastos individuales: crecen de forma proporcional por cada viajero. Ejemplos habituales son boletos aéreos personales, seguro de viaje nominal, trámites de pasaporte o visa, entradas individuales y consumos propios de comida o compras.',
          'Gastos compartidos: se mantienen fijos o varían poco al repartirse entre quienes comparten habitación o vehículo, como una habitación doble o departamento temporal, el alquiler de un automóvil, el combustible y los peajes en carretera, la tarifa de limpieza o traslados compartidos en taxi.',
          'Fórmula correcta por participante:',
          'Costo por persona = gastos individuales + (gastos compartidos ÷ número de participantes).',
          'En viajes familiares o grupales conviene ajustar el reparto a situaciones reales: menores con tarifa reducida en alojamiento o parques, acompañantes que opten por habitación privada, diferencias claras en consumos de restaurantes o bebidas, y excursiones opcionales a las que no asista todo el grupo. Acordar previamente qué se divide en partes iguales y qué paga cada uno evita tensiones innecesarias durante el recorrido.',
        ],
        en: [
          'A frequent mistake when planning trips for couples, families, or friend groups is assuming every line item splits identically—or that two travelers simply cost twice as much as one solo traveler. In reality, trip expenses fall into two distinct buckets:',
          'Individual expenses: costs that scale one-for-one with each traveler. Typical examples include plane tickets, individual travel insurance policies, passport or visa fees, individual attraction tickets, and personal meals or shopping.',
          'Shared expenses: costs that remain flat—or rise minimally—when split across two or more people sharing a room or vehicle, such as a double hotel room or vacation rental nightly rate, a rental car, road-trip fuel and tolls, accommodation cleaning fees, and shared rideshares.',
          'Accurate per-person formula:',
          'Cost per person = individual expenses + (shared expenses ÷ number of travelers sharing).',
          'When applying this formula to families or larger groups, adjust for real-world differences: young children may qualify for reduced admission or free stays in existing bedding, one friend might pay more for a single-occupancy room, dining or alcohol habits may differ widely, and optional tours may involve only part of the group. Agreeing on cost-splitting rules upfront keeps group finances transparent and friction-free.',
        ],
      },
      image: {
        src: '/images/blog/orcamento-viagem-viajante-mala.webp',
        orientation: 'portrait',
        alt: 'Viajante sorridente acenando no convés de uma embarcação segurando uma mala de mão marrom',
        caption: 'Separar custos individuais (como bilhetes e bagagem própria) de despesas compartilhadas (como hospedagem e deslocamentos em grupo) revela o custo real por viajante — Acervo Pexels (ID 18060443).',
        altByLang: {
          pt: 'Viajante sorridente acenando no convés de uma embarcação segurando uma mala de mão marrom',
          es: 'Viajero sonriente saludando desde la cubierta de una embarcación con una maleta marrón en la mano',
          en: 'Smiling traveler waving from a boat deck while carrying a brown suitcase and backpack',
        },
        captionByLang: {
          pt: 'Cada viajante traz despesas individuais (passagem, bagagem, seguro), enquanto quarto, carro e traslados mudam bastante de peso quando divididos — Acervo Pexels (ID 18060443).',
          es: 'Cada viajero aporta gastos individuales (boletos, seguro, comidas), mientras la habitación y el transporte compartido reducen el costo unitario al dividirse — Colección Pexels (ID 18060443).',
          en: 'Every traveler adds individual expenses like tickets and insurance, whereas shared rooms and group transit lower the per-person figure significantly — Pexels Archive (ID 18060443).',
        },
      },
    },
    {
      id: 'estimar-gastos-diarios',
      title: {
        pt: 'Como estimar os gastos diários sem inventar médias genéricas',
        es: 'Cómo estimar los gastos diarios sin recurrir a promedios genéricos',
        en: 'How to estimate daily on-trip expenses accurately',
      },
      content: {
        pt: [
          'Depois de somar transporte principal, hospedagem e documentação, o próximo desafio é estimar quanto dinheiro será gasto por dia no destino. Esse cálculo diário precisa contemplar cinco frentes variáveis: alimentação, transporte local, passeios, compras e pequenas despesas pessoais.',
          'Embora seja prático multiplicar uma previsão diária pelo número total de dias da viagem, dois ajustes tornam a estimativa muito mais realista:',
          '1. Dias de chegada e retorno funcionam diferente: o primeiro e o último dia quase sempre concentram traslados de ida e volta até o aeroporto ou rodoviária e refeições em trânsito, mas normalmente têm menos passeios pagos. Por outro lado, dias inteiros de programação em parques ou centros turísticos exigem ingressos, transporte interno e refeições fora do hotel.',
          '2. Pesquise o custo real do destino, nunca uma média genérica: não existe um valor diário único que sirva igualmente para uma cidade pequena do interior, um polo turístico serrano, uma capital litorânea ou uma metrópole estrangeira. Em vez de copiar médias genéricas de internet, faça três checagens simples antes de viajar: abra cardápios online de 3 ou 4 restaurantes reais da região onde vai se hospedar (próximos ao hotel e em áreas turísticas), simule duas corridas de aplicativo entre seu bairro e os pontos principais, e consulte o valor oficial dos ingressos nos sites das atrações que pretende visitar.',
          'Com essas três referências reais, você constrói uma diária ajustada ao seu próprio padrão de consumo e evita tanto superestimar a viagem a ponto de desistir quanto subestimar preços locais e ficar sem fôlego no meio do roteiro.',
        ],
        es: [
          'Una vez sumados transporte principal, alojamiento y documentación, el siguiente paso consiste en proyectar el gasto diario en destino. Esa previsión cotidiana debe reunir cinco rubros variables: comidas, movilidad urbana, paseos, compras y gastos personales.',
          'Si bien multiplicar un monto diario por los días de estadía resulta práctico, dos ajustes mejoran de inmediato la precisión:',
          '1. Los días de llegada y regreso tienen otra dinámica: el primer y el último día suelen concentrar traslados desde y hacia el aeropuerto o terminal y comidas en tránsito, con menos entradas pagas. En cambio, las jornadas completas de turismo reúnen boletos, traslados internos y todas las comidas fuera del alojamiento.',
          '2. Investiga precios reales del destino y evita promedios universales: ningún presupuesto diario sirve por igual para un pueblo tranquilo, un centro de montaña, un balneario de temporada o una gran capital internacional. Antes de viajar, realiza tres verificaciones rápidas: consulta cartas reales con precios publicados de 3 o 4 restaurantes en la zona elegida, simula un par de recorridos entre tu alojamiento y los puntos clave en transporte público o aplicaciones, y verifica las tarifas oficiales vigentes de museos o excursiones.',
          'Con esas referencias concretas obtienes una estimación diaria ajustada a tu estilo real de consumo, evitando tanto inflar el presupuesto sin motivo como quedarte corto a mitad del viaje.',
        ],
        en: [
          'Once major transportation, accommodations, and paperwork are totaled, the next step is projecting daily spending on the ground across five variable areas: food and drinks, local transit, activities, shopping, and personal incidentals.',
          'While multiplying a daily allowance by trip length is a useful baseline, two refinements keep the estimate accurate:',
          '1. Arrival and departure days spend differently: travel days typically pack in airport transfers and transit meals while skipping full-day paid tours, whereas full sightseeing days bundle attraction admission, local rides, and multiple meals out.',
          '2. Price the actual destination rather than generic rules of thumb: no single daily dollar figure applies equally to a small coastal town, a mountain resort, a domestic city break, and a major foreign capital. Instead of relying on vague averages, do three quick checks: look up real online menus from three or four restaurants in your planned neighborhood, check local transit pass rates or sample rideshare fares between your lodging and main sights, and verify official admission prices for priority museums or parks.',
          'Anchoring your daily allowance to real local menus, transit fares, and ticket prices gives you a number tailored to your habits—never padded arbitrarily and never dangerously low.',
        ],
      },
      image: {
        src: '/images/blog/orcamento-viagem-cafe-da-manha.webp',
        orientation: 'portrait',
        alt: 'Mesa farta de café da manhã para duas pessoas com omeletes, pães, frutas frescas, sucos e café em hospedagem',
        caption: 'Verificar se o café da manhã está incluído na diária da hospedagem e consultar cardápios locais reais muda bastante a projeção diária de alimentação — Acervo Pexels (ID 36782826).',
        altByLang: {
          pt: 'Mesa farta de café da manhã para duas pessoas com omeletes, pães, frutas frescas, sucos e café em hospedagem',
          es: 'Mesa completa de desayuno para dos personas con tortillas, panes, fruta fresca, jugos y café en un alojamiento',
          en: 'Generous hotel breakfast table for two featuring omelets, pastries, fresh fruit, juices, coffee, and tea',
        },
        captionByLang: {
          pt: 'Confirmar se o café da manhã já integra a tarifa da hospedagem reduz o gasto diário fora do hotel, especialmente em viagens com mais de uma pessoa — Acervo Pexels (ID 36782826).',
          es: 'Confirmar si el desayuno viene incluido en la tarifa del hotel modifica directamente el cálculo diario de comidas al viajar acompañado — Colección Pexels (ID 36782826).',
          en: 'Checking whether breakfast is included in your nightly room rate directly lowers daily out-of-pocket food spending, especially for couples and families — Pexels Archive (ID 36782826).',
        },
      },
    },
    {
      id: 'orcamento-viagem-internacional',
      title: {
        pt: 'Como calcular o orçamento de uma viagem internacional',
        es: 'Cómo calcular el presupuesto de un viaje internacional',
        en: 'How to calculate an international trip budget',
      },
      content: {
        pt: [
          'Quando o roteiro cruza fronteiras, calcular o orçamento deixa de ser apenas uma soma na moeda local: entram na conta conversão cambial, impostos financeiros, tarifas bancárias, escolha dos meios de pagamento, conectividade, seguro-viagem e exigências documentais.',
          'Conversão e variação cambial: nunca trate a cotação vista no dia do planejamento como um número fixo até a viagem. Entre o planejamento e o retorno, o câmbio oscila; por isso, vale simular seu orçamento com uma margem conservadora acima da cotação comercial do momento — especialmente para despesas que só serão pagas durante a viagem.',
          'IOF, spread cambial e tarifas bancárias (regras vigentes no Brasil): nas operações internacionais contratadas a partir do Brasil — incluindo compras no cartão de crédito internacional, débito internacional, cartões pré-pagos multimoedas, compra de moeda em espécie e remessas para conta própria no exterior — aplica-se a alíquota unificada do IOF de 3,5% definida pelo Decreto nº 12.499/2025. Além do imposto federal, instituições financeiras e casas de câmbio praticam o spread cambial (diferença entre a taxa de referência comercial e a taxa cobrada do cliente), que varia conforme o banco ou conta global. Sempre confira o Custo Efetivo Total (CET) antes de converter.',
          'Dinheiro em espécie e regras alfandegárias: carregar uma quantia moderada em espécie ajuda em pequenos comércios, gorjetas e emergências, mas não é necessário — nem recomendável — concentrar todo o orçamento em papel-moeda. Pelas regras do Banco Central do Brasil e da Receita Federal (Lei nº 14.286/2021), não há limite máximo proibido de transporte, porém quem entra ou sai do Brasil portando valores em espécie acima do equivalente a US$ 10.000 precisa obrigatoriamente declarar o montante por meio da e-DBV (Declaração Eletrônica de Bens de Viajantes) e manter os comprovantes de aquisição legal.',
          'Cartões internacionais e contas multimoedas: combinar um cartão de débito ou conta global pré-carregada com um cartão de crédito de reserva reduz o risco de bloqueios ou perda e facilita travar parte do orçamento antes do embarque. Confira também eventuais tarifas de saque em caixas eletrônicos (ATMs) no exterior.',
          'Seguro-viagem, conectividade e documentos: o Ministério das Relações Exteriores (Portal Consular) reforça que o governo brasileiro não custeia atendimentos médicos ou repatriações no exterior e que diversos países não oferecem saúde gratuita a estrangeiros — além de exigir seguro obrigatório em regiões como o Espaço Schengen (cobertura médica mínima de 30 mil euros). Inclua também o custo de chip ou eSIM internacional, passaporte válido (com eventual visto ou autorização prévia) e certificados sanitários quando exigidos pelo destino.',
        ],
        es: [
          'Cuando el viaje cruza fronteras, presupuestar implica ir más allá de sumar precios en moneda local: entran en juego el tipo de cambio, impuestos financieros, comisiones bancarias, medios de pago, conectividad, seguro médico y requisitos migratorios.',
          'Conversión y variación cambiaria: no asumas que la cotización del día en que empiezas a planificar se mantendrá sin cambios hasta la fecha de viaje. Para gastos que se abonarán en destino, conviene trabajar con una estimación prudente que contemple un margen por eventuales variaciones.',
          'Impuestos, spread cambiario y comisiones bancarias: según tu país de residencia y medio de pago, las compras con tarjeta, recargas en cuentas multimoneda o compra de divisas en efectivo pueden sumar impuestos locales (por ejemplo, en Brasil rige una alícuota unificada de IOF del 3,5 % conforme al Decreto 12.499/2025 para pagos y cambios internacionales) además del spread cambiario o comisión aplicada por el emisor. Compara siempre el tipo de cambio efectivo final y no solo la cotización de referencia.',
          'Efectivo y controles aduaneros: llevar algo de dinero en billetes sigue siendo útil para propinas o comercios pequeños, mientras conviene respaldar la mayor parte en tarjetas o cuentas internacionales. Recuerda respetar los topes legales de declaración aduanera de tu país al viajar con efectivo (en Brasil y diversos países existe obligatoriedad de declaración electrónica al superar el equivalente a US$ 10.000, conservando recibos de compra oficial).',
          'Conectividad, seguro de viaje y documentación: en el exterior los costos hospitalarios suelen ser muy elevados y los consulados nacionales no cubren gastos médicos ni traslados sanitarios; además, bloques como el Espacio Schengen exigen póliza médica obligatoria (mínimo 30.000 euros). Incorpora desde el inicio chip físico o eSIM internacional, pasaporte con vigencia suficiente, visas o autorizaciones electrónicas previas y vacunas exigidas.',
        ],
        en: [
          'Once a trip crosses borders, budgeting requires accounting for more than sticker prices in foreign currency: exchange-rate movement, cross-border card fees, tax rules, payment methods, connectivity, travel medical coverage, and entry requirements all shape the final bill.',
          'Exchange rates and currency swings: never treat today’s spot exchange rate as locked in for future on-trip expenses. For costs you will pay on arrival, model your budget with a conservative exchange cushion above current commercial rates so modest currency moves don’t derail your plan.',
          'Foreign transaction fees, taxes, and spread: every international payment method carries an effective cost made up of government taxes where applicable (for Brazilian travelers, for instance, Decree 12.499/2025 sets a unified 3.5% IOF tax on foreign credit/debit cards, global prepaid accounts, and currency purchases) plus the bank or broker’s FX spread. Compare the all-in rate including spread and ATM withdrawal fees rather than relying on mid-market headlines.',
          'Cash vs. international cards: carrying a modest amount of local cash handles tips, transit kiosks, or small vendors, while holding most funds in no-foreign-fee cards or multi-currency accounts improves security and helps lock in exchange rates ahead of departure. Always comply with customs cash-declaration thresholds—typically required above US$10,000 (or equivalent) across Brazil and most international borders.',
          'Travel insurance, connectivity, and entry paperwork: medical care abroad can be prohibitively expensive for visitors, embassies do not pay medical or repatriation bills, and regions such as Europe’s Schengen Area mandate minimum emergency medical coverage (€30,000). Be sure to budget upfront for travel medical insurance, an international eSIM or local SIM, passport validity/renewals, visas or electronic travel authorizations, and any required health certificates.',
        ],
      },
      image: {
        src: '/images/blog/orcamento-viagem-internacional-globo-aviao.webp',
        orientation: 'landscape',
        alt: 'Mão segurando miniatura de avião comercial sobrevoando um globo terrestre colorido',
        caption: 'Viagens internacionais exigem incluir variação cambial, spread bancário, impostos aplicáveis ao meio de pagamento, documentação e seguro-viagem no orçamento — Acervo Pexels (ID 7412002).',
        altByLang: {
          pt: 'Mão segurando miniatura de avião comercial sobrevoando um globo terrestre colorido',
          es: 'Mano sosteniendo un avión comercial en miniatura sobre un globo terráqueo',
          en: 'Hand holding a miniature commercial airplane over a world globe',
        },
        captionByLang: {
          pt: 'Em roteiros no exterior, custos como IOF, spread cambial, visto, seguro-viagem e eSIM precisam entrar no orçamento antes da compra das passagens — Acervo Pexels (ID 7412002).',
          es: 'En viajes internacionales, los impuestos cambiarios, seguros médicos, visados y planes eSIM deben incorporarse al presupuesto antes de emitir boletos — Colección Pexels (ID 7412002).',
          en: 'On international trips, foreign transaction fees, FX spreads, visas, medical insurance, and eSIM data belong in your budget before booking airfare — Pexels Archive (ID 7412002).',
        },
      },
    },
    {
      id: 'como-economizar-sem-prejudicar',
      title: {
        pt: 'Como economizar sem prejudicar a viagem',
        es: 'Cómo ahorrar sin perjudicar la experiencia del viaje',
        en: 'How to save money without hurting the trip experience',
      },
      content: {
        pt: [
          'Economizar de forma inteligente não significa escolher automaticamente a opção mais barata em cada item. Uma diária de hotel muito distante das áreas que você quer visitar, por exemplo, pode exigir corridas diárias caras de aplicativo ou longos deslocamentos que consomem dinheiro e horas preciosas do roteiro. O foco deve estar sempre no melhor custo total e na qualidade do tempo no destino.',
          '1. Compare datas e horários de transporte: sair em dias intermediários da semana ou fora dos horários de pico costuma abrir tarifas menores tanto em voos quanto em hospedagens — veja detalhes práticos no guia sobre [como comprar passagens aéreas mais baratas](/blog/como-comprar-passagens-aereas-baratas).',
          '2. Avalie aeroportos alternativos quando forem convenientes: verificar aeroportos próximos pode baixar o preço da passagem, desde que o custo e o tempo do traslado terrestre até a cidade final não anulem a diferença.',
          '3. Reserve hospedagem considerando localização e deslocamentos: coloque no mesmo cálculo o valor da diária mais o gasto estimado de transporte entre o hotel e os pontos de interesse.',
          '4. Compare o custo total da hospedagem, não apenas a diária: some taxas de limpeza, turismo, estacionamento e café da manhã ao comparar hotel, pousada e apartamento.',
          '5. Alterne restaurantes e refeições mais econômicas: combine experiências gastronômicas pontuais em restaurantes escolhidos com cafés da manhã bem aproveitados, mercados locais ou refeições rápidas em dias corridos.',
          '6. Identifique atrações gratuitas: praças, praias, mirantes, museus com dias de entrada livre e caminhadas por bairros históricos equilibram o orçamento sem reduzir a qualidade cultural do roteiro.',
          '7. Compre ingressos antecipadamente quando houver vantagem comprovada: alguns parques e atrações oficiais oferecem desconto antecipado ou evitam filas extensas — confirme sempre no canal oficial do atrativo.',
          '8. Utilize transporte público quando adequado: sistemas de metrô, trem urbano e ônibus integrados costumam ser muito mais econômicos do que depender exclusivamente de táxi ou carro alugado em áreas centrais.',
          '9. Evite taxas desnecessárias: confira o peso real da bagagem antes de sair de casa, leve garrafa reutilizável onde for permitido, observe taxas de cancelamento e evite juros de parcelamento sempre que possível.',
          '10. Planeje compras e despesas pessoais: definir um teto de compras antes de viajar evita compras por impulso que comprometem o orçamento restante.',
          '11. Compare o custo-benefício de pacotes, viagens avulsas e cruzeiros: dependendo da temporada, combinar voo e hotel pode sair mais barato ou mais caro do que comprar separado — confira nosso guia de [pacotes de viagem baratos](/blog/pacotes-de-viagem-baratos) ou avalie quando um roteiro de [cruzeiro marítimo](/blog/como-funciona-um-cruzeiro) entrega melhor relação entre hospedagem e alimentação incluída.',
        ],
        es: [
          'Ahorrar con criterio no equivale a elegir automáticamente la alternativa de menor precio en cada rubro. Un alojamiento económico muy alejado del centro o de los puntos de interés puede exigir traslados diarios costosos y restar varias horas útiles de viaje. El objetivo siempre es optimizar el costo total y la experiencia.',
          '1. Compara fechas y horarios de viaje: mover la salida o el regreso a días intermedios de la semana suele liberar tarifas más bajas en vuelos y alojamientos — consulta estrategias detalladas en nuestra guía sobre [cómo comprar vuelos baratos](/es/blog/como-comprar-vuelos-baratos).',
          '2. Evalúa aeropuertos alternativos cuando resulten prácticos: aterrizar en una terminal cercana puede abaratar el boleto, siempre que el traslado terrestre posterior no borre esa ventaja.',
          '3. Elige alojamiento cruzando tarifa y ubicación: suma el valor de la noche más el gasto diario estimado de transporte hacia los atractivos.',
          '4. Compara el precio final de la estadía y no solo la tarifa base: añade limpieza, tasas municipales, estacionamiento y desayuno antes de decidir entre hotel o departamento.',
          '5. Alterna restaurantes con comidas cotidianas más económicas: reserva el presupuesto fuerte para un par de experiencias gastronómicas destacadas y equilibra otros días con mercados, panaderías o platos simples.',
          '6. Aprovecha atractivos gratuitos: miradores, playas, parques públicos, caminatas urbanas y museos con jornadas sin costo enriquecen el viaje sin presionar el bolsillo.',
          '7. Compra entradas anticipadas cuando exista ventaja real: verifica directamente en webs oficiales si la venta previa ofrece descuento o evita perder medio día en filas.',
          '8. Prioriza el transporte público eficiente: redes de metro, tren o autobús turístico con pases diarios reducen drásticamente el gasto frente al uso continuo de taxis.',
          '9. Evita cargos evitables: pesa el equipaje antes de salir, revisa políticas de cancelación y compara si las cuotas sin interés realmente mantienen el precio al contado.',
          '10. Establece un límite previo para compras personales: acotar recuerdos y tiendas protege el presupuesto asignado a comidas y paseos.',
          '11. Compara comprar armado frente a compra por separado y otras modalidades: según la época, un paquete puede superar o no la compra independiente — revisa cómo evaluarlo en [paquetes de viaje baratos](/es/blog/paquetes-de-viaje-baratos) o analiza si un [crucero marítimo](/es/blog/como-funciona-un-crucero) concentra mejor alojamiento y comidas en una sola tarifa.',
        ],
        en: [
          'Smart travel savings do not mean blindly picking the cheapest option on every line item. A budget hotel far outside the city center, for instance, can add expensive daily rideshares and cost hours of transit time. Always optimize for total trip value rather than lowest sticker price alone.',
          '1. Compare departure dates and flight times: shifting flights to midweek or off-peak hours frequently lowers airfare and room rates—explore more tactics in our guide on [how to find cheap flights](/en/blog/how-to-find-cheap-flights).',
          '2. Check nearby alternative airports when convenient: secondary airports can cut ticket costs, provided ground transfers to your actual destination don’t eat up the savings.',
          '3. Evaluate lodging by combining nightly rate plus transit: weigh room cost alongside daily metro or rideshare expenses needed to reach key neighborhoods.',
          '4. Compare true all-in lodging totals, not base nightly rates: add cleaning fees, city taxes, parking, and breakfast before deciding between hotels and rentals.',
          '5. Balance splurge meals with casual eats: pair a few memorable sit-down restaurants with included hotel breakfasts, local bakeries, food halls, or market picnics.',
          '6. Mix in high-value free attractions: walkable historic districts, public parks, beaches, viewpoints, and free museum days deliver rich experiences at zero ticket cost.',
          '7. Book tickets ahead only when verified worthwhile: check official attraction websites to confirm whether advance purchase saves money or guarantees timed entry.',
          '8. Lean on public transit where reliable: metro lines, regional trains, and multi-day transit passes are far cheaper than relying exclusively on taxis or rideshares.',
          '9. Dodge preventable fees: weigh bags at home, confirm fare cancellation terms, and skip high-interest installment plans whenever possible.',
          '10. Cap discretionary shopping upfront: assigning a firm souvenir and personal budget keeps impulse purchases from cutting into experiences.',
          '11. Benchmark bundles, DIY booking, and cruises side by side: depending on season, packaging flights and lodging can win or lose against separate bookings—see our guide to [cheap vacation packages](/en/blog/cheap-vacation-packages) or check when an [ocean cruise](/en/blog/how-a-cruise-works) bundles lodging and meals more efficiently.',
        ],
      },
      image: {
        src: '/images/blog/orcamento-viagem-fachada-hotel.webp',
        orientation: 'portrait',
        alt: 'Fachada iluminada de hotel boutique em pedra clara ao entardecer emoldurada por folhagem urbana',
        caption: 'Ao comparar hospedagens, some localização, café da manhã e eventuais taxas extras à diária anunciada para avaliar o custo-benefício real — Acervo Pexels (ID 39814600).',
        altByLang: {
          pt: 'Fachada iluminada de hotel boutique em pedra clara ao entardecer emoldurada por folhagem urbana',
          es: 'Fachada iluminada de un hotel boutique al atardecer enmarcada por copas de árboles',
          en: 'Illuminated stone boutique hotel facade at twilight framed by urban tree branches',
        },
        captionByLang: {
          pt: 'Uma hospedagem bem localizada pode parecer mais cara na diária, mas reduz drasticamente os deslocamentos diários e melhora o aproveitamento do tempo — Acervo Pexels (ID 39814600).',
          es: 'Un alojamiento bien ubicado puede tener una tarifa algo mayor por noche, pero recorta drásticamente el gasto diario en transporte y el tiempo perdido en traslados — Colección Pexels (ID 39814600).',
          en: 'A well-located property can show a higher nightly rate yet reduce daily transit spending and save hours over the course of a trip — Pexels Archive (ID 39814600).',
        },
      },
    },
    {
      id: 'planilha-orcamento-viagem',
      title: {
        pt: 'Como montar uma planilha de orçamento de viagem',
        es: 'Cómo armar una planilla de presupuesto de viaje',
        en: 'How to build a travel budget spreadsheet',
      },
      content: {
        pt: [
          'Você não precisa de um sistema complexo para organizar o financeiro de uma viagem: uma tabela clara em qualquer editor de planilhas (ou até em caderno bem estruturado) já resolve todo o ciclo, do planejamento ao fechamento pós-viagem.',
          'A estrutura mínima deve reunir cinco colunas: Categoria, Descrição, Estimativa (previsão calculada antes de viajar), Valor pago (o desembolso efetivo registrado no pagamento ou durante o roteiro) e Diferença (a variação entre o que foi previsto e o gasto real — positiva quando custa acima do estimado e negativa quando há economia).',
          'Além dessas colunas, acrescente uma marcação de situação financeira (status) para separar claramente o dinheiro em quatro grupos: (1) despesas já pagas antes do embarque; (2) despesas reservadas com pagamento futuro no check-in ou na fatura seguinte; (3) despesas previstas para consumo no destino; e (4) reserva disponível para imprevistos.',
        ],
        es: [
          'No hace falta un sistema complejo para controlar las finanzas de un viaje: una tabla bien diseñada en cualquier hoja de cálculo (o incluso en un cuaderno ordenado) cubre todo el proceso, desde la cotización inicial hasta el balance final.',
          'La estructura mínima recomendada consta de cinco columnas: Categoría, Descripción, Estimación (previsión previa al viaje), Monto pagado (gasto real al momento de abonar o viajar) y Diferencia (variación entre lo previsto y lo desembolsado, identificando desvíos o ahorros).',
          'Junto a esa tabla base, añade una columna o etiqueta de estado para distinguir claramente cuatro etapas de flujo de caja: (1) gastos ya pagados antes de salir; (2) reservas confirmadas con pago pendiente en check-in o resumen futuro; (3) gastos previstos para abonar en destino; y (4) reserva disponible para imprevistos.',
        ],
        en: [
          'You do not need complex software to manage trip finances: a clean five-column table in any spreadsheet app (or even a structured notebook) covers everything from pre-trip estimating through post-trip reconciliation.',
          'Your core table needs at least five columns: Category, Description, Estimate (your pre-trip projection), Amount Paid (actual money spent at booking or on site), and Variance (the difference between planned and actual spend, highlighting overages or savings).',
          'Alongside those five columns, add a simple status tag separating cash flow into four buckets: (1) already paid before departure; (2) reserved now but payable later at check-in or on a future statement; (3) projected on-trip spending; and (4) untouched contingency reserve.',
        ],
      },
      table: {
        pt: {
          caption: 'Modelo de organização de planilha de orçamento de viagem (colunas essenciais e categorias base)',
          headers: ['Categoria', 'Descrição', 'Estimativa', 'Valor pago', 'Diferença'],
          rows: [
            ['Transporte', 'Passagens / deslocamento principal', 'Preencher antes da compra', 'Registrar após emissão', 'Valor pago − Estimativa'],
            ['Hospedagem', 'Diárias + taxas e limpeza', 'Diária total × noites × quartos', 'Sinal + saldo na estadia', 'Valor pago − Estimativa'],
            ['Alimentação', 'Refeições e compras de mercado', 'Previsão diária × dias', 'Soma dos gastos diários', 'Valor pago − Estimativa'],
            ['Transporte local', 'Ônibus, metrô, táxi e apps', 'Estimativa por deslocamento', 'Recargas e corridas reais', 'Valor pago − Estimativa'],
            ['Passeios', 'Ingressos e experiências', 'Cotação oficial dos atrativos', 'Valor efetivo dos bilhetes', 'Valor pago − Estimativa'],
            ['Documentação', 'Documentos, vistos e taxas', 'Taxas oficiais aplicáveis', 'Guias e emolumentos pagos', 'Valor pago − Estimativa'],
            ['Seguro', 'Seguro-viagem / assistência', 'Cotação por viajante e dias', 'Apólice emitida', 'Valor pago − Estimativa'],
            ['Conectividade', 'Chip físico ou eSIM', 'Plano compatível com dias', 'Compra do plano de dados', 'Valor pago − Estimativa'],
            ['Despesas pessoais', 'Compras, farmácia e extras', 'Teto pessoal definido antes', 'Registros ao longo da viagem', 'Valor pago − Estimativa'],
            ['Imprevistos', 'Reserva de segurança separada', 'Margem de segurança à parte', 'Apenas se houver ocorrência', 'Saldo remanescente'],
          ],
        },
        es: {
          caption: 'Modelo base de planilla de presupuesto de viaje (estructura mínima de cinco columnas)',
          headers: ['Categoría', 'Descripción', 'Estimación', 'Monto pagado', 'Diferencia'],
          rows: [
            ['Transporte', 'Pasajes o trayecto principal', 'Cotizar antes de emitir', 'Registrar tras la compra', 'Pagado − Estimación'],
            ['Alojamiento', 'Noches + tasas e impuestos', 'Tarifa final × noches × hab.', 'Anticipo + saldo final', 'Pagado − Estimación'],
            ['Alimentación', 'Comidas, cafés y supermercado', 'Estimación diaria × días', 'Suma real de consumos', 'Pagado − Estimación'],
            ['Transporte local', 'Autobús, metro, taxi y apps', 'Proyección por jornada', 'Recargas y viajes reales', 'Pagado − Estimación'],
            ['Paseos', 'Entradas y excursiones', 'Tarifas oficiales previas', 'Boletos efectivamente pagos', 'Pagado − Estimación'],
            ['Documentación', 'Documentos, visas y tasas', 'Tasas oficiales vigentes', 'Pagos realizados', 'Pagado − Estimación'],
            ['Seguro', 'Seguro o asistencia médica', 'Póliza por viajero y días', 'Emisión contratada', 'Pagado − Estimación'],
            ['Conectividad', 'Chip local o eSIM', 'Plan para la duración total', 'Compra efectuada', 'Pagado − Estimación'],
            ['Gastos personales', 'Compras, farmacia y extras', 'Tope personal predefinido', 'Registro durante el viaje', 'Pagado − Estimación'],
            ['Imprevistos', 'Reserva financiera separada', 'Margen de seguridad aparte', 'Solo si ocurre contingencia', 'Saldo restante'],
          ],
        },
        en: {
          caption: 'Starter travel budget spreadsheet template (five essential columns and core categories)',
          headers: ['Category', 'Description', 'Estimate', 'Amount Paid', 'Variance'],
          rows: [
            ['Transportation', 'Main flights, train, or road travel', 'Quote prior to booking', 'Log upon ticket purchase', 'Paid − Estimate'],
            ['Lodging', 'Nightly rates + taxes & fees', 'All-in rate × nights × rooms', 'Deposit + check-in balance', 'Paid − Estimate'],
            ['Food & Dining', 'Meals, coffee, and groceries', 'Daily allowance × trip days', 'Sum of daily food spend', 'Paid − Estimate'],
            ['Local Transit', 'Bus, metro, taxi, and rideshares', 'Projected daily transit', 'Actual passes & rides', 'Paid − Estimate'],
            ['Activities', 'Tickets, tours, and experiences', 'Official venue pricing', 'Actual tickets purchased', 'Paid − Estimate'],
            ['Documentation', 'Passports, visas, and fees', 'Official processing fees', 'Actual fees paid', 'Paid − Estimate'],
            ['Insurance', 'Travel medical insurance', 'Quote by travelers & days', 'Policy premium paid', 'Paid − Estimate'],
            ['Connectivity', 'SIM card or international eSIM', 'Data plan for trip length', 'Plan purchase total', 'Paid − Estimate'],
            ['Personal Spend', 'Shopping, pharmacy, and extras', 'Pre-set personal cap', 'Tracked on-trip purchases', 'Paid − Estimate'],
            ['Contingency', 'Dedicated emergency reserve', 'Separate safety cushion', 'Logged only if triggered', 'Remaining balance'],
          ],
        },
      },
    },
    {
      id: 'controlar-gastos-durante-viagem',
      title: {
        pt: 'Como controlar os gastos durante a viagem',
        es: 'Cómo controlar los gastos durante el viaje',
        en: 'How to track and control spending while traveling',
      },
      content: {
        pt: [
          'Mesmo a planilha mais bem montada perde utilidade se ficar esquecida em casa no dia do embarque. O controle durante a viagem precisa ser rápido — levando menos de cinco minutos no fim de cada dia — para manter a tranquilidade financeira sem transformar as férias em auditoria.',
          'Registre os gastos diariamente: anote compras em dinheiro, débito e cartão ao final da tarde ou antes de dormir, enquanto os valores ainda estão frescos na memória.',
          'Separe gastos por categoria e guarde comprovantes importantes: recibos de hospedagem, seguros, aluguel de carro, câmbio e ingressos devem ser preservados para conferência de estornos, cauções ou eventual necessidade de suporte ao consumidor.',
          'Acompanhe o saldo disponível e evite confundir limite de cartão com dinheiro disponível: manter um teto de gasto por dia ou por etapa ajuda a perceber cedo quando uma refeição mais cara pede equilíbrio no dia seguinte, evitando surpresas no fechamento da fatura.',
          'Atualize a previsão diante de mudanças no roteiro: se choveu e um passeio de barco foi substituído por museu, ajuste a planilha na mesma hora para enxergar o novo saldo.',
          'Organize despesas compartilhadas em tempo real: em viagens em casal ou grupo, registrar quem pagou cada conta em uma planilha compartilhada na nuvem ou em aplicativos específicos de divisão de despesas (como Splitwise ou Tricount) evita acumular dezenas de notas fiscais para tentar acertar tudo semanas depois.',
        ],
        es: [
          'Hasta la planilla mejor preparada pierde eficacia si queda olvidada al iniciar el viaje. El seguimiento en ruta debe ser ligero —tomar menos de cinco minutos cada noche— para cuidar tus finanzas sin convertir las vacaciones en un trámite agotador.',
          'Registra tus gastos cada día: anota compras en efectivo, débito y tarjeta antes de acostarte o durante una pausa, mientras recuerdas con claridad cada concepto.',
          'Clasifica por categoría y conserva comprobantes clave: guarda facturas de alojamiento, depósitos de garantía de autos, comprobantes de cambio oficial, pólizas y boletos para controlar devoluciones o reclamos.',
          'Vigila tu saldo real y no confundas cupo de tarjeta con presupuesto disponible: comparar lo gastado cada jornada frente al saldo restante permite compensar un día más costoso con otro más moderado antes de excederte.',
          'Actualiza las previsiones si cambia el itinerario: si el clima obliga a cancelar una excursión al aire libre, reasigna ese monto en tu tabla ese mismo día.',
          'Lleva al día los gastos compartidos: en viajes en pareja o con amigos, anotar quién pagó cada cuenta en una hoja compartida en la nube o en aplicaciones dedicadas a dividir gastos (como Splitwise o Tricount) evita acumular decenas de recibos para resolver al volver.',
        ],
        en: [
          'Even the cleanest pre-trip spreadsheet stops helping if it stays untouched once you board. On-trip expense tracking works best when it takes under five minutes each evening—giving you financial clarity without turning vacation into bookkeeping.',
          'Log expenses daily: jot down cash, debit, and credit purchases once a day before bed while every charge is still fresh.',
          'Group spending by category and keep key receipts: hold onto lodging folios, rental car deposit confirmations, currency exchange receipts, insurance policies, and major tickets in case you need a refund, deposit release, or dispute record.',
          'Watch actual available funds rather than credit limits: tracking daily spend against remaining cash flow makes it obvious when a splurge dinner calls for a lighter day afterward, preventing post-trip statement shock.',
          'Update projections whenever plans shift: if rain cancels a boat tour and you swap in a museum day, update your forecast right away to see the revised balance.',
          'Track shared bills in real time: for couples or friend groups, logging who paid each shared check in a cloud spreadsheet or dedicated bill-splitting app (such as Splitwise or Tricount) prevents messy receipt piles weeks later.',
        ],
      },
    },
    {
      id: 'quanto-reservar-imprevistos',
      title: {
        pt: 'Quanto reservar para imprevistos?',
        es: '¿Cuánto conviene reservar para imprevistos?',
        en: 'How much should you set aside for travel contingencies?',
      },
      content: {
        pt: [
          'Nenhuma viagem é totalmente imune a atrasos de transporte, mudanças climáticas, perda de bagagem, pequenos atendimentos farmacêuticos ou cobranças inesperadas. Por isso, todo orçamento bem planejado inclui uma reserva financeira apartada dos custos regulares.',
          'Não existe um percentual único oficial ou obrigatório que sirva para qualquer roteiro. Como hipótese prática de planejamento, muitos viajantes trabalham com uma faixa entre 10% e 20% sobre o orçamento variável ou total — usando margens menores em viagens curtas nacionais com quase tudo já pago e margens mais folgadas em roteiros longos ou internacionais sujeitos a câmbio.',
          'Para organizar suas finanças pessoais com segurança, diferencie três camadas de proteção que não se confundem:',
          '1. Reserva para despesas inesperadas da viagem: dinheiro destinado a ocorrências operacionais do roteiro (táxi de emergência por greve ou chuva, taxa de bagagem extra, refeição adicional em conexão atrasada ou troca de passeio). Se não for usado ao voltar, permanece como economia.',
          '2. Fundo de emergência pessoal: sua reserva patrimonial de longo prazo para imprevistos da vida cotidiana (saúde familiar, trabalho, moradia), que não deve ser comprometida para pagar parcelas ou despesas de turismo.',
          '3. Coberturas de seguro-viagem: apólice contratada para eventos de alto impacto financeiro, como urgências médicas, internações hospitalares, extravio de bagagem e repatriação sanitária. Uma pequena reserva em dinheiro jamais substitui um seguro-viagem adequado — especialmente no exterior, onde uma única diária hospitalar pode superar dezenas de vezes o orçamento inteiro das férias.',
        ],
        es: [
          'Ningún itinerario está completamente libre de demoras en vuelos, cambios climáticos, equipaje rezagado, compras de farmacia o cargos no contemplados. Por eso resulta indispensable mantener una reserva separada del presupuesto operativo del viaje.',
          'No existe un porcentaje oficial único ni obligatorio aplicable a todos los casos. Como hipótesis práctica de planificación, suele utilizarse un margen orientativo de entre 10 % y 20 % —menor en viajes cortos nacionales con la mayoría de reservas ya pagas, y más amplio en recorridos largos o internacionales expuestos al tipo de cambio—.',
          'Conviene distinguir con claridad tres niveles distintos de respaldo financiero:',
          '1. Reserva de contingencia del viaje: dinero apartado exclusivamente para resolver imprevistos del recorrido (un traslado de urgencia, exceso de equipaje, comida extra por demora en escala o reemplazo de actividad). Si no se utiliza, vuelve íntegro a tus ahorros.',
          '2. Fondo de emergencia personal: tu respaldo financiero general para imprevistos de la vida cotidiana (salud, hogar o ingresos), el cual nunca debería comprometerse para financiar vacaciones.',
          '3. Cobertura de seguro de viaje: póliza diseñada para eventos de costo elevado —como urgencias médicas, internaciones, cancelaciones cubiertas o repatriación—. Ninguna reserva de efectivo reemplaza a un buen seguro de viaje, sobre todo fuera del país, donde una atención hospitalaria puede costar varias veces más que todo el viaje.',
        ],
        en: [
          'No itinerary is completely immune to transit delays, sudden weather shifts, delayed luggage, pharmacy runs, or surprise fees. That is why every sound travel budget sets aside a contingency reserve kept strictly separate from planned spending.',
          'There is no single official or mandatory percentage that fits every trip. As an illustrative planning guideline, many travelers build in a 10% to 20% buffer—leaning lower on short domestic trips where transport and lodging are prepaid, and leaning higher on longer or international itineraries exposed to currency swings.',
          'To protect your finances cleanly, keep three distinct layers of protection separate:',
          '1. Trip contingency buffer: cash reserved specifically for small operational surprises on the road (an emergency taxi during heavy rain, extra bag fees, an extra meal during a delayed connection, or rebooking a tour). If unused, it returns straight to your savings.',
          '2. Personal emergency fund: your core household safety net for everyday life emergencies (health, housing, employment), which should never be drained to fund discretionary travel.',
          '3. Travel insurance coverage: a formal policy covering high-cost events such as medical emergencies, hospital stays, lost baggage, or medical evacuation. A small cash buffer never substitutes for proper travel insurance—especially abroad, where a single hospital visit can exceed the entire cost of a vacation.',
        ],
      },
    },
    {
      id: 'erros-comuns-orcamento',
      title: {
        pt: 'Erros comuns ao calcular o custo de uma viagem',
        es: 'Errores frecuentes al calcular el presupuesto de un viaje',
        en: 'Common mistakes when calculating travel costs',
      },
      content: {
        pt: [
          'Grande parte dos estouros de orçamento não vem de extravagâncias, mas de omissões repetidas logo na fase de estimativa. Confira os onze deslizes mais comuns para eliminá-los do seu planejamento:',
          '1. Considerar somente passagem e hospedagem: ignorar alimentação, mobilidade e passeios distorce totalmente a viabilidade financeira do roteiro.',
          '2. Esquecer deslocamentos até aeroportos e terminais: corridas, ônibus executivos ou estacionamento de vários dias na origem e no destino pesam na soma final.',
          '3. Não considerar bagagem despachada: tarifas básicas normalmente incluem apenas mala de mão de até 10 kg; comprar despacho em cima da hora no balcão costuma custar bem mais caro.',
          '4. Ignorar taxas e cobranças adicionais: taxas de turismo municipais, taxa de limpeza, estacionamento do hotel ou encargos de emissão alteram o preço exibido na vitrine.',
          '5. Subestimar alimentação: contar apenas almoço e jantar sem incluir cafés da manhã pagos à parte, bebidas, água, lanches de rua e refeições em aeroportos.',
          '6. Não calcular o transporte local: escolher um hotel barato na periferia sem somar o custo diário de metrô, ônibus ou aplicativo até as atrações.',
          '7. Não considerar câmbio, IOF e spread bancário: planejar uma viagem internacional pela cotação comercial pura sem embutir os custos efetivos do meio de pagamento.',
          '8. Não prever imprevistos: viajar com a conta exata até o último centavo transforma qualquer atraso ou imprevisto médico em endividamento.',
          '9. Fazer reservas sem conferir regras de cancelamento: tarifas não reembolsáveis exigem certeza de datas; um imprevisto de agenda pode gerar perda integral ou multa elevada.',
          '10. Confundir parcelamento com redução de custo: dividir em várias parcelas alivia o fluxo mensal, mas o custo total da viagem — especialmente se houver juros — continua igual ou maior.',
          '11. Não acompanhar os gastos durante a viagem: deixar para olhar extratos e faturas somente semanas após retornar impede qualquer ajuste de rota enquanto ainda há tempo.',
        ],
        es: [
          'La mayoría de los desvíos presupuestarios no nacen de lujos imprevistos, sino de omisiones repetidas en la etapa de estimación. Revisa los once errores habituales para evitarlos:',
          '1. Calcular solo pasaje y hotel: omitir comidas, movilidad local y actividades distorsiona por completo el costo real del viaje.',
          '2. Olvidar los traslados hacia aeropuertos o terminales: viajes en taxi, autobuses o estacionamientos prolongados tanto en el origen como en el destino suman rápidamente.',
          '3. No contemplar equipaje facturado: muchas tarifas económicas incluyen únicamente equipaje de mano; añadir valijas en el aeropuerto resulta mucho más costoso.',
          '4. Pasar por alto tasas e impuestos adicionales: cargos de limpieza, tasas municipales de turismo, estacionamiento o gastos de gestión cambian el precio de portada.',
          '5. Subestimar la alimentación: contar solo dos comidas principales olvidando desayunos pagos aparte, bebidas, agua, meriendas y consumos en tránsito.',
          '6. Omitir el transporte urbano en destino: elegir alojamiento barato en zonas alejadas sin calcular el costo diario de movilidad hacia el centro.',
          '7. Ignorar tipo de cambio, impuestos y comisiones bancarias: proyectar gastos en moneda extranjera al cambio comercial puro sin considerar el recargo real de la tarjeta o casa de cambio.',
          '8. Viajar sin margen para imprevistos: ajustar las cuentas al límite deja el presupuesto indefenso frente a cualquier demora o eventualidad.',
          '9. Reservar sin leer políticas de cancelación: contratar tarifas no reembolsables sin seguridad plena sobre las fechas expone a perder el importe total.',
          '10. Confundir cuotas con ahorro: pagar en plazos distribuye el desembolso mensual, pero no reduce el precio total —y los intereses incluso lo elevan—.',
          '11. No controlar los gastos durante el recorrido: revisar el resumen bancario recién al volver impide corregir desvíos mientras aún estás a tiempo.',
        ],
        en: [
          'Most budget overruns do not come from reckless splurges—they stem from predictable blind spots during the planning phase. Watch out for these eleven recurring mistakes:',
          '1. Budgeting only flights and lodging: leaving out meals, local transit, and activities drastically understates true trip cost.',
          '2. Forgetting airport and station transfers: rideshares, express buses, or multi-day airport parking at both ends add up quickly.',
          '3. Overlooking checked baggage fees: basic economy fares often allow carry-on bags only; paying for checked luggage at the airport counter usually costs far more.',
          '4. Ignoring extra taxes and property fees: cleaning fees, resort charges, municipal tourist taxes, and booking fees quietly lift final checkout totals.',
          '5. Underestimating food and drink: counting lunch and dinner while forgetting paid breakfasts, coffee breaks, beverages, snacks, and airport meals.',
          '6. Skipping local transit estimates: picking an inexpensive outer-ring hotel without adding daily metro or rideshare expenses back into the city center.',
          '7. Omitting exchange fees and card spreads: planning an international trip using pure mid-market exchange rates without baking in foreign transaction fees, taxes, or spreads.',
          '8. Leaving zero contingency cushion: budgeting down to the last dollar leaves no buffer for weather disruptions, delays, or pharmacy visits.',
          '9. Booking before reading cancellation policies: locking into non-refundable fares or rooms before dates are firm risks full forfeiture if plans change.',
          '10. Confusing installment plans with lower cost: splitting payments across months eases short-term cash flow, yet total trip cost stays the same—or rises when financing charges apply.',
          '11. Failing to track spending during the trip: waiting until credit card statements close weeks later eliminates any chance to course-correct on site.',
        ],
      },
    },
    {
      id: 'exemplo-pratico-orcamento',
      title: {
        pt: 'Exemplo prático de planejamento de orçamento (simulação hipotética)',
        es: 'Ejemplo práctico de planificación de presupuesto (simulación hipotética)',
        en: 'Worked trip budget planning example (explicitly hypothetical)',
      },
      content: {
        pt: [
          'Para demonstrar o método na prática sem vincular a simulação a preços de nenhuma cidade específica, observe abaixo um exemplo explicitamente hipotético: um casal (2 adultos) planejando uma viagem nacional fictícia de 5 dias e 4 noites, com valores ilustrativos criados apenas para conferir a matemática do orçamento.',
          '1. Separação entre individuais e compartilhadas (valores estimados): nas despesas individuais, estimamos R$ 1.600 em passagens aéreas (R$ 800 × 2), R$ 1.500 em alimentação (R$ 150/dia × 5 dias × 2 viajantes), R$ 440 em passeios (R$ 220 × 2), R$ 160 em seguro-viagem (R$ 80 × 2) e R$ 300 em despesas pessoais (R$ 150 × 2). A soma das despesas individuais estimadas fecha em R$ 4.000 (ou R$ 2.000 por pessoa). Nas despesas compartilhadas, estimamos R$ 1.600 de hospedagem (4 diárias × R$ 400 em quarto duplo com café da manhã e taxas) mais R$ 400 de transporte local e traslados, totalizando R$ 2.000 (÷ 2 = R$ 1.000 por pessoa).',
          '2. Soma planejada, reserva para imprevistos e divisão por pessoa: somando individuais (R$ 4.000) + compartilhadas (R$ 2.000), o subtotal planejado estimado é de R$ 6.000. Aplicando a fórmula por pessoa: R$ 2.000 (individuais) + (R$ 2.000 ÷ 2 compartilhadas) = R$ 3.000 por pessoa. Acrescentando uma hipótese didática de reserva para imprevistos de 10% sobre o subtotal planejado (R$ 600 no total, ou R$ 300 por pessoa), o orçamento total mobilizado fica em R$ 6.600 (R$ 3.300 por pessoa).',
          '3. Comparação entre estimativa e gasto efetivo após a viagem: na prática da simulação, as passagens subiram R$ 80 no total (R$ 1.680 pagos) e a hospedagem teve R$ 60 extras de estacionamento (R$ 1.660 pagos), além de R$ 60 adicionais em despesas pessoais (R$ 360 pagos). Em contrapartida, houve economia de R$ 80 em alimentação (R$ 1.420 pagos), R$ 50 em transporte local (R$ 350 pagos) e R$ 10 no seguro (R$ 150 pagos), mantendo R$ 440 exatos em passeios. O gasto efetivo total somou R$ 6.060 (R$ 4.050 individuais + R$ 2.010 compartilhados = R$ 3.030 por pessoa) — apenas R$ 60 acima do subtotal planejado, facilmente absorvidos pela reserva de R$ 600, deixando R$ 540 de saldo remanescente (R$ 270 por pessoa).',
        ],
        es: [
          'Para mostrar cómo funciona el método sin atarlo a tarifas reales de un destino puntual, revisemos un ejemplo explícitamente hipotético: una pareja (2 adultos) que organiza un viaje ficticio de 5 días y 4 noches, con cifras ilustrativas en dólares diseñadas únicamente para comprobar las cuentas.',
          '1. Separación entre gastos individuales y compartidos (estimación previa): en gastos individuales estimamos US$ 320 en boletos aéreos (US$ 160 × 2), US$ 300 en comidas (US$ 30/día × 5 días × 2 personas), US$ 88 en excursiones (US$ 44 × 2), US$ 32 en seguro de viaje (US$ 16 × 2) y US$ 60 en gastos personales (US$ 30 × 2), sumando US$ 800 individuales (US$ 400 por persona). En gastos compartidos estimamos US$ 320 de alojamiento (4 noches × US$ 80 en habitación doble con tasas y desayuno) más US$ 80 en traslados y movilidad local, totalizando US$ 400 compartidos (÷ 2 = US$ 200 por persona).',
          '2. Suma planificada, reserva y cálculo por persona: al reunir gastos individuales (US$ 800) + compartidos (US$ 400), el subtotal planificado asciende a US$ 1.200. Aplicando la fórmula por viajero: US$ 400 (individuales) + (US$ 400 ÷ 2 compartidos) = US$ 600 por persona. Si sumamos una hipótesis didáctica de 10 % para imprevistos (US$ 120 en total o US$ 60 por persona), el presupuesto total movilizado es de US$ 1.320 (US$ 660 por viajero).',
          '3. Comparación entre estimación y gasto real al concluir el viaje: en la ejecución simulada, los boletos costaron US$ 16 más (US$ 336), el alojamiento sumó US$ 12 de estacionamiento (US$ 332) y los gastos personales aumentaron US$ 12 (US$ 72); en cambio, se ahorraron US$ 16 en comidas (US$ 284), US$ 10 en transporte local (US$ 70) y US$ 2 en el seguro (US$ 30), manteniendo US$ 88 exactos en paseos. El gasto real total sumó US$ 1.212 (US$ 810 individuales + US$ 402 compartidos = US$ 606 por persona), cubriendo con holgura la diferencia de US$ 12 gracias a la reserva de US$ 120 y dejando US$ 108 sin gastar (US$ 54 por persona).',
        ],
        en: [
          'To demonstrate the math cleanly without tying figures to any specific city’s live pricing, walk through this explicitly hypothetical scenario: two adults planning a fictional 5-day, 4-night getaway using illustrative dollar figures created strictly to verify the calculation workflow.',
          '1. Splitting individual vs. shared estimates: under individual expenses, we project $320 for round-trip flights ($160 × 2), $300 for food ($30/day × 5 days × 2 travelers), $88 for tours ($44 × 2), $32 for travel insurance ($16 × 2), and $60 for personal extras ($30 × 2)—totaling $800 in individual costs ($400 per person). Under shared expenses, we project $320 for lodging (4 nights × $80 double room including breakfast and taxes) plus $80 for shared transfers and local rides—totaling $400 shared (÷ 2 = $200 per person).',
          '2. Planned subtotal, contingency buffer, and per-person formula: combining individual ($800) + shared ($400) produces a $1,200 planned subtotal. Using the per-person formula: $400 (individual) + ($400 ÷ 2 shared) = $600 per traveler. Adding an illustrative 10% planning buffer ($120 total, or $60 per person) sets the full target budget at $1,320 ($660 per person).',
          '3. Comparing estimated vs. actual spend after the trip: in this worked scenario, flights came in $16 higher ($336 paid), lodging added $12 for parking ($332 paid), and personal extras ran $12 over ($72 paid). Meanwhile, smart dining swaps saved $16 ($284 paid), local transit came in $10 under ($70 paid), insurance cost $2 less ($30 paid), and tours matched at $88. Actual total spend equaled $1,212 ($810 individual + $402 shared = $606 per person)—just $12 above the planned subtotal, easily absorbed by the $120 buffer with $108 left unspent ($54 per person).',
        ],
      },
      table: {
        pt: {
          caption: 'Simulação hipotética completa (2 adultos, 5 dias / 4 noites): conferência matemática entre estimativa e gasto efetivo',
          headers: ['Categoria e rateio', 'Descrição (hipotética)', 'Estimativa', 'Valor pago', 'Diferença'],
          rows: [
            ['Transporte (individual × 2)', '2 passagens ida e volta (R$ 800 → R$ 840 cada)', 'R$ 1.600', 'R$ 1.680', '+ R$ 80'],
            ['Alimentação (individual × 2)', '5 dias de refeições (R$ 150/dia por pessoa est.)', 'R$ 1.500', 'R$ 1.420', '− R$ 80'],
            ['Passeios (individual × 2)', '2 ingressos e atividades pagas (R$ 220 cada)', 'R$ 440', 'R$ 440', 'R$ 0'],
            ['Seguro (individual × 2)', 'Apólice para 2 viajantes (R$ 80 → R$ 75 cada)', 'R$ 160', 'R$ 150', '− R$ 10'],
            ['Despesas pessoais (ind. × 2)', 'Lembranças, lanches e farmácia (R$ 150 est.)', 'R$ 300', 'R$ 360', '+ R$ 60'],
            ['Hospedagem (compartilhada ÷ 2)', '4 diárias em quarto duplo (R$ 400/noite + extra)', 'R$ 1.600', 'R$ 1.660', '+ R$ 60'],
            ['Transporte local (compart. ÷ 2)', 'Traslados e corridas divididas pelo casal', 'R$ 400', 'R$ 350', '− R$ 50'],
            ['Subtotal planejado (soma)', 'Individuais (R$ 4.000 → R$ 4.050) + Compart. (R$ 2.000 → R$ 2.010)', 'R$ 6.000', 'R$ 6.060', '+ R$ 60'],
            ['Custo efetivo por pessoa', 'Individual/pess. + (Compartilhado ÷ 2)', 'R$ 3.000 / pess.', 'R$ 3.030 / pess.', '+ R$ 30 / pess.'],
            ['Reserva de imprevistos (10% hip.)', 'Margem reservada à parte (R$ 600 → R$ 540 sobra)', 'R$ 600', 'R$ 60 usados (sobra R$ 540)', '− R$ 540 não gastos'],
          ],
        },
        es: {
          caption: 'Simulación hipotética completa (2 adultos, 5 días / 4 noches): verificación matemática entre estimación y gasto real',
          headers: ['Categoría y reparto', 'Descripción (hipotética)', 'Estimación', 'Monto pagado', 'Diferencia'],
          rows: [
            ['Transporte (individual × 2)', '2 pasajes ida y vuelta (US$ 160 → US$ 168 c/u)', 'US$ 320', 'US$ 336', '+ US$ 16'],
            ['Alimentación (individual × 2)', '5 días de comidas (US$ 30/día por persona est.)', 'US$ 300', 'US$ 284', '− US$ 16'],
            ['Paseos (individual × 2)', '2 entradas y actividades (US$ 44 c/u)', 'US$ 88', 'US$ 88', 'US$ 0'],
            ['Seguro (individual × 2)', 'Póliza para 2 viajeros (US$ 16 → US$ 15 c/u)', 'US$ 32', 'US$ 30', '− US$ 2'],
            ['Gastos personales (ind. × 2)', 'Recuerdos y extras (US$ 30 est. c/u)', 'US$ 60', 'US$ 72', '+ US$ 12'],
            ['Alojamiento (compartido ÷ 2)', '4 noches hab. doble (US$ 80/noche + parking)', 'US$ 320', 'US$ 332', '+ US$ 12'],
            ['Transporte local (compart. ÷ 2)', 'Traslados y viajes divididos entre 2', 'US$ 80', 'US$ 70', '− US$ 10'],
            ['Subtotal planificado (suma)', 'Indiv. (US$ 800 → US$ 810) + Compart. (US$ 400 → US$ 402)', 'US$ 1.200', 'US$ 1.212', '+ US$ 12'],
            ['Costo efectivo por persona', 'Individual/pers. + (Compartido ÷ 2)', 'US$ 600 / pers.', 'US$ 606 / pers.', '+ US$ 6 / pers.'],
            ['Reserva imprevistos (10 % hip.)', 'Colchón separado (US$ 120 → US$ 108 libres)', 'US$ 120', 'US$ 12 usados (quedan US$ 108)', '− US$ 108 sin usar'],
          ],
        },
        en: {
          caption: 'Complete explicitly hypothetical budget check (2 adults, 5 days / 4 nights): arithmetic from estimate to actual spend',
          headers: ['Category & split', 'Description (hypothetical)', 'Estimate', 'Amount Paid', 'Variance'],
          rows: [
            ['Transportation (individual × 2)', '2 round-trip tickets ($160 → $168 each)', '$320', '$336', '+ $16'],
            ['Food & Dining (individual × 2)', '5 days of meals ($30/day per person est.)', '$300', '$284', '− $16'],
            ['Activities (individual × 2)', '2 tickets & excursions ($44 each)', '$88', '$88', '$0'],
            ['Insurance (individual × 2)', 'Coverage for 2 travelers ($16 → $15 each)', '$32', '$30', '− $2'],
            ['Personal Spend (ind. × 2)', 'Souvenirs & extras ($30 est. each)', '$60', '$72', '+ $12'],
            ['Lodging (shared ÷ 2)', '4 nights double room ($80/night + parking)', '$320', '$332', '+ $12'],
            ['Local Transit (shared ÷ 2)', 'Shared airport transfers & rides', '$80', '$70', '− $10'],
            ['Planned subtotal (sum)', 'Individual ($800 → $810) + Shared ($400 → $402)', '$1,200', '$1,212', '+ $12'],
            ['Effective cost per person', 'Individual/person + (Shared ÷ 2)', '$600 / person', '$606 / person', '+ $6 / person'],
            ['Contingency buffer (10% hyp.)', 'Separate safety cushion ($120 → $108 unspent)', '$120', '$12 used ($108 remaining)', '− $108 unspent'],
          ],
        },
      },
    },
    {
      id: 'checklist-fechar-orcamento',
      title: {
        pt: 'Checklist antes de fechar o orçamento',
        es: 'Checklist final antes de cerrar tu presupuesto de viaje',
        en: 'Pre-booking travel budget checklist',
      },
      content: {
        pt: [
          'Antes de emitir passagens, confirmar reservas não reembolsáveis ou definir quanto dinheiro levar, faça uma conferência rápida pelos quatorze itens essenciais abaixo para ter certeza de que nenhuma despesa relevante ficou de fora da conta.',
        ],
        es: [
          'Antes de emitir pasajes, confirmar reservas no reembolsables o definir cuánto dinero llevar, repasa estos catorce puntos clave para asegurarte de que ningún gasto relevante haya quedado fuera de tu planilla.',
        ],
        en: [
          'Before buying flights, locking in non-refundable lodging, or deciding how much money to carry, scan these fourteen checkpoints to make sure no major cost category was overlooked.',
        ],
      },
      checklist: {
        pt: [
          'Transporte principal ida e volta cotado com bagagem, assento e taxas de embarque incluídas.',
          'Hospedagem calculada pelo valor total (diárias × noites × quartos + limpeza, turismo e café da manhã).',
          'Alimentação prevista considerando refeições fora do hotel, cafés, lanches e dias de deslocamento.',
          'Deslocamentos completos previstos (traslados de aeroporto/rodoviária e transporte diário no destino).',
          'Passeios e ingressos consultados em sites oficiais com diferenciação de atividades gratuitas.',
          'Documentação verificada com antecedência (passaporte válido, vistos, autorizações e vacinas).',
          'Seguro-viagem cotado com cobertura médica compatível com o destino e exigências legais.',
          'Conectividade planejada (chip internacional, eSIM ou pacote de dados compatível com a duração).',
          'Taxas e custos financeiros incluídos (IOF de 3,5% em viagens internacionais, spread bancário e tarifas).',
          'Compras e despesas pessoais com limite financeiro próprio separado do orçamento essencial.',
          'Despesas extras consideradas (lavanderia, gorjetas, eventual excesso de bagagem ou cauções).',
          'Reserva financeira separada para imprevistos, sem comprometer seu fundo de emergência pessoal.',
          'Forma de pagamento definida (equilíbrio entre pré-pago, cartão, conta global e reserva em espécie).',
          'Regras de cancelamento, remarcação e reembolso conferidas por escrito antes do pagamento final.',
        ],
        es: [
          'Transporte principal de ida y regreso cotizado con tasas aeroportuarias, equipaje y asientos.',
          'Alojamiento calculado sobre tarifa final (noches × habitaciones + limpieza, impuestos y desayuno).',
          'Alimentación proyectada con comidas fuera del hotel, meriendas y jornadas de traslado.',
          'Traslados completos cubiertos (aeropuerto o terminal al hotel y movilidad urbana diaria).',
          'Excursiones y entradas verificadas en webs oficiales, combinando opciones pagas y gratuitas.',
          'Documentación revisada con tiempo (vigencia del pasaporte, visas, permisos y certificados).',
          'Seguro o asistencia al viajero con cobertura médica adecuada y exigencias legales del destino.',
          'Conectividad resuelta (SIM local, eSIM o plan de datos ajustado a toda la estadía).',
          'Impuestos y costos cambiarios incorporados según el medio de pago elegido.',
          'Compras y gastos personales acotados con tope propio separado del dinero esencial.',
          'Gastos extras contemplados (propinas, lavandería, eventual exceso de equipaje o depósitos).',
          'Reserva para imprevistos apartada en cuenta, sin tocar el fondo de emergencia personal.',
          'Medios de pago definidos (combinación prudente de reservas prepagas, tarjetas y efectivo).',
          'Políticas de cancelación, cambio de fecha y reembolso leídas antes de confirmar el pago.',
        ],
        en: [
          'Main round-trip transport priced inclusive of taxes, seat selection, and checked baggage.',
          'Lodging totaled using the full checkout price (nights × rooms + cleaning, resort taxes, and meals).',
          'Food budget covering all uncovered meals, coffee/snacks, groceries, and travel-day dining.',
          'Door-to-door transit included (both airport/station transfers and daily local travel on site).',
          'Priority tours and attraction tickets verified on official sites alongside free activities.',
          'Required documents checked early (passport validity, visas, electronic authorizations, vaccines).',
          'Travel medical insurance priced with coverage matching destination costs and legal rules.',
          'Mobile connectivity arranged (international eSIM, local SIM, or verified roaming pass).',
          'Cross-border taxes, FX spreads, and ATM/card fees factored in for international trips.',
          'Shopping and personal spending capped in their own bucket apart from core trip costs.',
          'Extra/incidental items counted (tips, laundry, potential baggage overages, security deposits).',
          'Dedicated trip contingency reserve set aside without dipping into your personal emergency fund.',
          'Payment mix planned (balancing prepaid bookings, multi-currency cards, and modest cash).',
          'Cancellation, modification, and refund rules verified in writing prior to checkout.',
        ],
      },
      image: {
        src: '/images/blog/orcamento-viagem-passaporte-mala-mapa.webp',
        orientation: 'portrait',
        alt: 'Viajante sorridente sentado no sofá segurando passaporte azul com mapa dobrado e mala aberta ao lado',
        caption: 'Conferir documentação, apólice de seguro, conectividade e políticas de cancelamento antes de fechar as compras protege tanto o embarque quanto o orçamento — Acervo Pexels (ID 8770475).',
        altByLang: {
          pt: 'Viajante sorridente sentado no sofá segurando passaporte azul com mapa dobrado e mala aberta ao lado',
          es: 'Viajero sonriente sentado en un sofá sosteniendo un pasaporte azul junto a un mapa doblado y una maleta abierta',
          en: 'Smiling traveler sitting on a sofa holding a blue passport with a folded map and an open suitcase beside him',
        },
        captionByLang: {
          pt: 'Fechar o checklist de documentação, seguro, formas de pagamento e reserva de imprevistos antes do embarque evita gastos emergenciais de última hora — Acervo Pexels (ID 8770475).',
          es: 'Completar el checklist de documentos, seguro, medios de pago y margen de reserva antes de salir evita pagos de emergencia de último momento — Colección Pexels (ID 8770475).',
          en: 'Running through documents, insurance, payment methods, and your contingency cushion before departure prevents costly last-minute surprises — Pexels Archive (ID 8770475).',
        },
      },
    },
  ],
  faqs: {
    pt: [
      {
        question: '1. Como calcular quanto vou gastar em uma viagem?',
        answer:
          'Some nove blocos em sequência: transporte até o destino, hospedagem com taxas, alimentação diária, deslocamentos locais, passeios, documentação/seguro, conectividade, despesas pessoais e uma reserva separada para imprevistos. Só consolide o orçamento depois de pesquisar cotações reais para as datas escolhidas.',
      },
      {
        question: '2. Como calcular o custo de uma viagem por pessoa?',
        answer:
          'Separe o que é individual (passagens, seguro, documentação e consumo próprio) do que é compartilhado (diária do quarto, aluguel de carro, pedágios e traslados). Aplique a fórmula: Custo por pessoa = despesas individuais + (despesas compartilhadas ÷ número de participantes).',
      },
      {
        question: '3. Quanto dinheiro devo levar para viajar?',
        answer:
          'Leve o equivalente à soma das despesas previstas para pagamento no destino (alimentação não incluída, transporte local, ingressos pendentes e teto de compras) mais a sua reserva para imprevistos. Não é preciso portar tudo em espécie: distribua entre cartão ou conta internacional e dinheiro para pequenos gastos.',
      },
      {
        question: '4. Como calcular os gastos de uma viagem internacional?',
        answer:
          'Converta cada categoria pela moeda do destino somando o custo efetivo do meio de pagamento: no Brasil, considere o IOF unificado de 3,5% (Decreto nº 12.499/2025) mais o spread cambial do banco ou corretora, trabalhe com margem conservadora contra oscilações e inclua visto, passaporte, eSIM e seguro-viagem.',
      },
      {
        question: '5. Qual é a melhor forma de controlar despesas durante a viagem?',
        answer:
          'Reserve cinco minutos no fim de cada dia para anotar os gastos por categoria em uma planilha simples no celular ou aplicativo financeiro, comparando o valor acumulado ao saldo planejado em vez de se orientar pelo limite do cartão de crédito.',
      },
      {
        question: '6. É melhor pagar tudo antecipadamente ou reservar dinheiro para o destino?',
        answer:
          'Antecipar passagem, hospedagem e seguro trava boa parte do orçamento contra aumentos de tarifa e reduz o risco cambial antes do embarque. Já despesas variáveis como alimentação, transporte urbano e compras devem ficar reservadas com liquidez para pagamento conforme o ritmo real do roteiro.',
      },
      {
        question: '7. Como dividir os custos de uma viagem em grupo?',
        answer:
          'Combine as regras antes de sair: diárias de hospedagem, aluguel de carro e combustível dividem-se igualmente entre quem os utiliza, enquanto passeios opcionais, bebidas e compras ficam na conta individual. Registrar quem pagou cada conta em uma planilha compartilhada ou app de divisão evita acertos confusos no fim.',
      },
      {
        question: '8. Como montar uma planilha de gastos de viagem?',
        answer:
          'Crie cinco colunas básicas — Categoria, Descrição, Estimativa, Valor pago e Diferença — listando todas as categorias da viagem e adicionando um marcador para separar itens já pagos, reservas pendentes, consumo no destino e reserva de segurança.',
      },
      {
        question: '9. Como economizar sem comprometer a experiência?',
        answer:
          'Use flexibilidade de datas e aeroportos na compra das passagens, avalie hospedagem pela soma da diária com o transporte diário, alterne refeições especiais com cafés e mercados locais, inclua atrações gratuitas de qualidade e corte tarifas desnecessárias como excesso de bagagem ou juros.',
      },
      {
        question: '10. Por que é importante reservar dinheiro para imprevistos?',
        answer:
          'Atrasos climáticos, remarcações de última hora, farmácia ou deslocamentos urgentes acontecem mesmo em roteiros organizados. Ter uma margem separada evita endividamento e preserva as experiências principais da viagem — lembrando que essa reserva não substitui a proteção de um seguro-viagem.',
      },
    ],
    es: [
      {
        question: '1. ¿Cómo calcular cuánto voy a gastar en un viaje?',
        answer:
          'Suma nueve bloques en orden: transporte hasta el destino, alojamiento con tasas, comidas diarias, transporte local, paseos, documentación/seguro, conectividad, gastos personales y un margen aparte para imprevistos, completando cada monto con cotizaciones reales para tus fechas.',
      },
      {
        question: '2. ¿Cómo calcular el costo de un viaje por persona?',
        answer:
          'Separa los gastos individuales (boletos, seguro, trámites y consumos personales) de los compartidos (habitación, alquiler de auto, peajes y traslados). Aplica la fórmula: Costo por persona = gastos individuales + (gastos compartidos ÷ número de participantes).',
      },
      {
        question: '3. ¿Cuánto dinero debo llevar para viajar?',
        answer:
          'Lleva la suma prevista para los gastos que pagarás en destino (comidas no incluidas, movilidad urbana, entradas pendientes y tope de compras) más tu reserva para imprevistos, distribuyendo el monto entre tarjetas o cuenta multimoneda y algo de efectivo para gastos menores.',
      },
      {
        question: '4. ¿Cómo calcular los gastos de un viaje internacional?',
        answer:
          'Presupuesta los consumos en moneda extranjera añadiendo impuestos aplicables y spread cambiario de tu banco o tarjeta, usa un tipo de cambio conservador por posibles variaciones antes del viaje e incorpora pasaporte, visas, eSIM y seguro de asistencia médica.',
      },
      {
        question: '5. ¿Cuál es la mejor forma de controlar los gastos durante el viaje?',
        answer:
          'Dedica cinco minutos cada noche a registrar lo gastado por categoría en una planilla en el teléfono o aplicación financiera, midiendo el avance contra tu saldo real disponible y nunca contra el cupo máximo de la tarjeta de crédito.',
      },
      {
        question: '6. ¿Conviene pagar todo por adelantado o reservar dinero para el destino?',
        answer:
          'Pagar con antelación vuelos, alojamiento y seguro ayuda a congelar precios y reduce exposición cambiaria, mientras conviene mantener líquido el presupuesto variable de comidas, movilidad local y actividades flexibles para abonarlo durante el viaje.',
      },
      {
        question: '7. ¿Cómo dividir los costos de un viaje en grupo?',
        answer:
          'Acuerda reglas claras antes de salir: divide entre quienes los usan los rubros compartidos (alojamiento, auto y combustible) y mantén aparte las compras o excursiones opcionales, anotando los pagos al instante en una planilla compartida o aplicación como Splitwise.',
      },
      {
        question: '8. ¿Cómo armar una planilla de gastos de viaje?',
        answer:
          'Estructura cinco columnas mínimas —Categoría, Descripción, Estimación, Monto pagado y Diferencia— junto con un indicador que separe reservas ya abonadas, pagos pendientes en destino y tu reserva para imprevistos.',
      },
      {
        question: '9. ¿Cómo ahorrar sin afectar la calidad del viaje?',
        answer:
          'Busca flexibilidad de fechas y horarios en vuelos, evalúa el alojamiento sumando tarifa más traslados diarios, alterna restaurantes con mercados o cafeterías, combina actividades gratuitas y evita cargos evitables como exceso de equipaje o intereses.',
      },
      {
        question: '10. ¿Por qué es importante apartar dinero para imprevistos?',
        answer:
          'Porque una demora, cambio climático o compra médica menor puede ocurrir en cualquier ruta. Contar con una reserva separada absorbe contratiempos sin arruinar el viaje ni generar deudas, aunque nunca reemplaza a un seguro médico de viaje.',
      },
    ],
    en: [
      {
        question: '1. How do I calculate how much a trip will cost?',
        answer:
          'Add nine core buckets together: main transportation, all-in lodging, daily food, local transit, activities, documents/insurance, connectivity, personal spending, and a separate contingency reserve—filling each line with real quotes for your target dates.',
      },
      {
        question: '2. How do I calculate travel cost per person?',
        answer:
          'Separate individual costs (tickets, insurance, visas, personal meals) from shared costs (hotel rooms, rental cars, fuel, cleaning fees). Then apply: Cost per person = individual expenses + (shared expenses ÷ number of travelers sharing).',
      },
      {
        question: '3. How much money should I bring on a trip?',
        answer:
          'Bring enough accessible funds to cover all unpaid on-site categories (meals, local rides, walk-up tickets, and your shopping cap) plus your contingency buffer. Split funds safely between cards or multi-currency accounts and a modest amount of local cash.',
      },
      {
        question: '4. How do I budget for an international trip?',
        answer:
          'Price foreign expenses in local currency and apply your payment method’s true all-in cost (foreign transaction fees, applicable taxes, and FX spread), build in a conservative exchange cushion, and budget early for passports, visas, eSIM data, and travel medical insurance.',
      },
      {
        question: '5. What is the best way to track expenses while traveling?',
        answer:
          'Spend five minutes each evening logging daily purchases by category in a mobile spreadsheet or expense app, comparing cumulative spending against your planned cash balance rather than relying on credit card limits.',
      },
      {
        question: '6. Is it better to prepay everything or save cash to spend on site?',
        answer:
          'Prepaying core transport, lodging, and insurance locks in prices and protects against fare hikes before departure, while keeping variable money liquid for food, local transit, and flexible sightseeing preserves control on the ground.',
      },
      {
        question: '7. How do you split group travel costs fairly?',
        answer:
          'Set clear ground rules beforehand: split shared rooms, rental cars, fuel, and transfers across participants using them, while keeping optional tours or personal dining separate, logging bills immediately in a shared sheet or splitting app.',
      },
      {
        question: '8. How do I structure a travel budget spreadsheet?',
        answer:
          'Use five essential columns—Category, Description, Estimate, Amount Paid, and Variance—and add a status tag separating already-paid bookings, future check-in balances, on-trip allowances, and your contingency cushion.',
      },
      {
        question: '9. How can I save money without hurting the trip?',
        answer:
          'Compare flexible flight dates and nearby airports, price lodging together with daily commute costs, mix special dinners with casual cafés or markets, add free attractions, and eliminate avoidable fees like overweight luggage or interest charges.',
      },
      {
        question: '10. Why keep a separate contingency buffer for surprises?',
        answer:
          'Flight delays, sudden weather changes, urgent rides, or minor pharmacy stops can happen on any trip. Holding a dedicated safety margin keeps disruptions from causing debt—though a cash buffer never replaces proper travel medical insurance.',
      },
    ],
  },
  sources: [
    {
      label: 'Banco Central do Brasil — Câmbio, envio de dinheiro e capitais internacionais (Lei nº 14.286/2021)',
      url: 'https://www.bcb.gov.br/estabilidadefinanceira/cambio',
      description:
        'Orientações oficiais do Banco Central do Brasil sobre mercado de câmbio, contratação com instituições autorizadas, limites e regras da Lei Cambial.',
      labelByLang: {
        pt: 'Banco Central do Brasil — Mercado de Câmbio e regras vigentes',
        es: 'Banco Central de Brasil — Mercado Cambiario y marco regulatorio',
        en: 'Central Bank of Brazil — Foreign Exchange Rules & Official Guidance',
      },
      descriptionByLang: {
        pt: 'Normas oficiais sobre operações cambiais, comparação de taxas e porte legal de moeda estrangeira no Brasil.',
        es: 'Directrices oficiales sobre operaciones cambiarias, comparación de tasas y normas de traslado de divisas.',
        en: 'Official central bank guidance on foreign exchange rules, authorized providers, and currency limits.',
      },
    },
    {
      label: 'Receita Federal / Portal Gov.br — Declaração Eletrônica de Bens de Viajantes (e-DBV) e regras alfandegárias',
      url: 'https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior/viagens-internacionais',
      description:
        'Regras aduaneiras oficiais sobre porte de valores em espécie acima do equivalente a US$ 10.000 e procedimentos da e-DBV.',
      labelByLang: {
        pt: 'Receita Federal (Gov.br) — Viagens Internacionais e e-DBV',
        es: 'Receita Federal (Gov.br) — Viajes Internacionales y Declaración e-DBV',
        en: 'Brazilian Federal Revenue Service — International Travel & Cash Declaration (e-DBV)',
      },
      descriptionByLang: {
        pt: 'Orientações sobre declaração obrigatória ao cruzar fronteiras com valores em espécie superiores a US$ 10.000.',
        es: 'Normativa aduanera oficial sobre declaración electrónica de efectivo superior a US$ 10.000 al viajar.',
        en: 'Customs declaration rules when entering or departing Brazil with cash above the US$10,000 threshold.',
      },
    },
    {
      label: 'Portal Consular / Ministério das Relações Exteriores (MRE) — Seguro-viagem e recomendações no exterior',
      url: 'https://www.gov.br/mre/pt-br/assuntos/portal-consular',
      description:
        'Diretrizes do Itamaraty sobre passaportes, vistos, contratação de seguro-viagem médico internacional e limites da assistência consular.',
      labelByLang: {
        pt: 'Ministério das Relações Exteriores — Portal Consular (Seguro-viagem e Documentos)',
        es: 'Ministerio de Relaciones Exteriores de Brasil — Portal Consular (Seguro y Documentos)',
        en: 'Brazil Ministry of Foreign Affairs — Consular Travel Guidance & Insurance',
      },
      descriptionByLang: {
        pt: 'Recomendações sobre seguro médico obrigatório (como Espaço Schengen), documentação e impossibilidade de custeio hospitalar consular.',
        es: 'Recomendaciones sobre pólizas médicas exigidas en el exterior, documentos de viaje y límites de cobertura consular.',
        en: 'Official guidance on international medical insurance, entry documentation, and limits of consular assistance.',
      },
    },
    {
      label: 'Polícia Federal (Gov.br) — Emissão de Passaporte Brasileiro e taxas GRU vigentes',
      url: 'https://www.gov.br/pt-br/servicos/obter-passaporte-comum-para-brasileiro',
      description:
        'Portal oficial de serviços do Governo Federal detalhando documentação, agendamento e taxa oficial de emissão de passaporte comum.',
      labelByLang: {
        pt: 'Polícia Federal (Gov.br) — Serviço Oficial de Emissão de Passaporte',
        es: 'Policía Federal de Brasil (Gov.br) — Emisión de Pasaporte y Tasas',
        en: 'Brazilian Federal Police (Gov.br) — Passport Issuance & Official Fee Schedule',
      },
      descriptionByLang: {
        pt: 'Valores oficiais de GRU e prazos para solicitação de passaporte brasileiro antes de viagens internacionais.',
        es: 'Tarifas vigentes y requisitos oficiales para tramitar el pasaporte brasileño.',
        en: 'Official government service page detailing current passport fee schedules and application steps.',
      },
    },
    {
      label: 'ANAC (Gov.br) — Direitos e Deveres do Passageiro Aéreo (Resolução nº 400/2016)',
      url: 'https://www.gov.br/anac/pt-br/assuntos/passageiros',
      description:
        'Regras oficiais sobre bagagem de mão (10 kg), desistência em até 24 horas (para compras com 7+ dias de antecedência) e reembolsos.',
      labelByLang: {
        pt: 'ANAC (Gov.br) — Bagagem, Desistência e Regras Tarifárias (Resolução nº 400)',
        es: 'ANAC (Gov.br) — Derechos del Pasajero Aéreo y Equipaje',
        en: 'ANAC Brazil Civil Aviation Agency — Air Passenger & Baggage Rules',
      },
      descriptionByLang: {
        pt: 'Referência regulatória brasileira sobre franquia de bagagem de mão, tarifas de embarque reembolsáveis e remarcações.',
        es: 'Marco regulatorio sobre equipaje de mano, plazos de cancelación y reembolso de tasas aeroportuarias.',
        en: 'Official regulatory rules covering carry-on allowance, 24-hour cancellation rights, and refundable airport taxes.',
      },
    },
    {
      label: 'Senacon / Ministério da Justiça — Consumidor.gov.br e Guia do Consumidor Turista',
      url: 'https://www.gov.br/mj/pt-br/assuntos/seus-direitos/consumidor',
      description:
        'Orientações oficiais sobre transparência prévia de taxas em hospedagens, serviços opcionais, contratos turísticos e mediação de conflitos.',
      labelByLang: {
        pt: 'Senacon / Gov.br — Defesa do Consumidor e Turismo',
        es: 'Senacon / Gov.br — Protección al Consumidor Turista',
        en: 'Senacon / Gov.br — Tourist Consumer Protection Guidelines',
      },
      descriptionByLang: {
        pt: 'Regras do Código de Defesa do Consumidor aplicadas a cobranças adicionais, taxa de serviço opcional e cancelamento de reservas.',
        es: 'Normativa de defensa del consumidor aplicada a transparencia tarifaria, cargos extra y cancelaciones.',
        en: 'Official consumer protection standards regarding price transparency, optional fees, and booking cancellations.',
      },
    },
  ],
  relatedInternalLinks: [
    {
      label: 'Calculadora de Orçamento de Viagem',
      labelByLang: {
        pt: 'Calculadora de Orçamento de Viagem',
        es: 'Calculadora de Presupuesto de Viaje',
        en: 'Trip Budget Calculator',
      },
      path: '/calculadora-orcamento',
      view: 'calculator',
      description:
        'Simule na prática hospedagem, alimentação, passeios, transporte e margem de segurança por viajante e por dia.',
      descriptionByLang: {
        pt: 'Simule na prática hospedagem, alimentação, passeios, transporte e margem de segurança por viajante e por dia.',
        es: 'Simula alojamiento, comidas, excursiones, transporte y reserva por viajero y por día.',
        en: 'Estimate lodging, meals, activities, transportation, and safety buffer per traveler and day.',
      },
    },
    {
      label: 'Calculadora de Rota e Combustível',
      labelByLang: {
        pt: 'Calculadora de Rota e Combustível',
        es: 'Calculadora de Ruta y Combustible',
        en: 'Route & Fuel Calculator',
      },
      path: '/calculadora-rota',
      view: 'route-calculator',
      description:
        'Calcule distância rodoviária, combustível, pedágios e divisão de custos por passageiro para viagens de carro.',
      descriptionByLang: {
        pt: 'Calcule distância rodoviária, combustível, pedágios e divisão de custos por passageiro para viagens de carro.',
        es: 'Calcula distancia en carretera, combustible, peajes y reparto de costos por pasajero.',
        en: 'Calculate road distance, fuel usage, tolls, and per-passenger cost split for road trips.',
      },
    },
    {
      label: 'Comparador de Custos entre Destinos',
      labelByLang: {
        pt: 'Comparador de Custos entre Destinos',
        es: 'Comparador de Costos entre Destinos',
        en: 'Destination Cost Comparator',
      },
      path: '/comparador-custos',
      view: 'comparator',
      description:
        'Compare estimativas diárias entre destinos para escolher qual roteiro se ajusta melhor ao seu orçamento disponível.',
      descriptionByLang: {
        pt: 'Compare estimativas diárias entre destinos para escolher qual roteiro se ajusta melhor ao seu orçamento disponível.',
        es: 'Compara gastos diarios estimados entre destinos para elegir el viaje más acorde a tu presupuesto.',
        en: 'Compare daily cost profiles side by side across destinations to pick the best fit for your budget.',
      },
    },
    {
      label: 'Como comprar passagens aéreas mais baratas',
      labelByLang: {
        pt: 'Como comprar passagens aéreas mais baratas',
        es: 'Cómo comprar vuelos baratos: estrategias prácticas',
        en: 'How to find cheap flights: smart strategies',
      },
      path: '/blog/como-comprar-passagens-aereas-baratas',
      view: 'article',
      slug: 'como-comprar-passagens-aereas-baratas',
      description:
        'Estratégias práticas para pesquisar voos, comparar tarifas com bagagem e economizar no maior item do orçamento.',
      descriptionByLang: {
        pt: 'Estratégias práticas para pesquisar voos, comparar tarifas com bagagem e economizar no maior item do orçamento.',
        es: 'Estrategias prácticas para buscar vuelos, comparar tarifas con equipaje y ahorrar en el tramo aéreo.',
        en: 'Practical methods to compare airfares, evaluate baggage rules, and save on one of your largest trip costs.',
      },
    },
    {
      label: 'Pacotes de viagem baratos: como comparar e escolher',
      labelByLang: {
        pt: 'Pacotes de viagem baratos: como comparar e escolher',
        es: 'Paquetes de viaje baratos: cómo comparar y elegir',
        en: 'Cheap vacation packages: how to compare & choose',
      },
      path: '/blog/pacotes-de-viagem-baratos',
      view: 'article',
      slug: 'pacotes-de-viagem-baratos',
      description:
        'Veja quando contratar pacote combinado compensa mais do que comprar aéreo e hospedagem separadamente.',
      descriptionByLang: {
        pt: 'Veja quando contratar pacote combinado compensa mais do que comprar aéreo e hospedagem separadamente.',
        es: 'Descubre cuándo conviene comprar un paquete combinado frente a reservar vuelo y hotel por separado.',
        en: 'Learn when bundling flight and hotel genuinely beats booking each component on its own.',
      },
    },
    {
      label: 'Cruzeiro marítimo: como funciona e quanto custa',
      labelByLang: {
        pt: 'Cruzeiro marítimo: como funciona e quanto custa',
        es: 'Crucero marítimo: cómo funciona y cuánto cuesta',
        en: 'Ocean cruises: how they work & what they cost',
      },
      path: '/blog/como-funciona-um-cruzeiro',
      view: 'article',
      slug: 'como-funciona-um-cruzeiro',
      description:
        'Entenda o que realmente entra na tarifa de um navio — taxas portuárias, serviço, bebidas e gastos em dólares.',
      descriptionByLang: {
        pt: 'Entenda o que realmente entra na tarifa de um navio — taxas portuárias, serviço, bebidas e gastos em dólares.',
        es: 'Entiende qué incluye realmente la tarifa de un crucero: tasas portuarias, servicio, bebidas y cargos a bordo.',
        en: 'See what a cruise fare actually includes—and how port fees, gratuities, drinks, and excursions affect total spend.',
      },
    },
  ],
};
