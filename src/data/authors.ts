/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Author } from '../types';

/**
 * Cadastro oficial de autoria e revisão editorial do Embarque.
 * Regra editorial: não inventar autores, biografias, credenciais ou perfis sociais.
 */
export const WESLEY_VIEIRA: Author = {
  id: 'wesley-vieira',
  slug: 'wesley-vieira',
  name: 'Wesley Vieira',
  role: {
    pt: 'Responsável pela Estratégia Editorial & SEO',
    es: 'Responsable de Estrategia Editorial y SEO',
    en: 'Head of Editorial Strategy & SEO',
  },
  // Fotografia real enviada pelo proprietário
  avatar: '/assets/aistudio/IMG_20260522_223809_979_a433e0fc.webp',
  bio: {
    pt: 'Wesley Vieira é responsável pela estratégia editorial do Embarque. Atua com estratégia digital e SEO, coordenando a pesquisa, a organização e a revisão dos conteúdos publicados no portal. Seu trabalho editorial busca transformar informações verificáveis em guias práticos para ajudar viajantes a planejar melhor suas viagens.',
    es: 'Wesley Vieira es responsable de la estrategia editorial de Embarque. Trabaja en estrategia digital y SEO, coordinando la investigación, organización y revisión de los contenidos publicados en el portal.',
    en: 'Wesley Vieira leads editorial strategy and SEO at Embarque, coordinating factual research, content structure, and editorial review to turn verifiable travel data into practical planning guides.',
  },
  methodologyNote: {
    pt: 'Os guias assinados por Wesley Vieira são estruturados com apoio de ferramentas digitais de pesquisa e organização textual, passando por checagem factual em fontes oficiais (órgãos públicos, concessionárias e portais municipais) e revisão editorial humana antes da publicação.',
    es: 'Las guías firmadas por Wesley Vieira combinan herramientas digitales de investigación con verificación factual en fuentes oficiales y revisión editorial humana.',
    en: 'Guides signed by Wesley Vieira are researched and structured with digital tools, fact-checked against official municipal and environmental sources, and human-reviewed prior to publication.',
  },
  // Links sociais aguardando envio pelo proprietário (não inventar URLs)
  socialLinks: {
    linkedin: undefined,
    instagram: undefined,
  },
};

export const AUTHORS_BY_SLUG: Record<string, Author> = {
  'wesley-vieira': WESLEY_VIEIRA,
};
