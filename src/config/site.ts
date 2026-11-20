/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Language } from '../types';

/**
 * Configuração central do portal Embarque.
 *
 * ATENÇÃO — ETAPA DE DESENVOLVIMENTO:
 * O domínio definitivo ("embarqueviagem.com") ainda não foi registrado nem conectado.
 * Mantenha VITE_PUBLIC_SITE_URL vazio e VITE_ENABLE_INDEXING != "true" durante o
 * desenvolvimento/homologação para evitar que URLs temporárias sejam indexadas.
 *
 * No lançamento definitivo (Cloudflare Pages + domínio conectado):
 *   VITE_PUBLIC_SITE_URL="https://embarqueviagem.com"
 *   VITE_ENABLE_INDEXING="true"
 */

const envSiteUrl = ((import.meta as any).env?.VITE_PUBLIC_SITE_URL || '').trim().replace(/\/+$/, '');
const envEnableIndexing = ((import.meta as any).env?.VITE_ENABLE_INDEXING || '').trim() === 'true';

export const SITE_CONFIG = {
  brandName: 'Embarque',
  legalName: 'Embarque Turismo & Conteúdo Editorial',
  targetDomain: 'embarqueviagem.com',
  // Só se torna true quando a variável de produção for explicitamente ativada no deploy final
  isDomainConnected: Boolean(envSiteUrl),
  isIndexingEnabled: envEnableIndexing && Boolean(envSiteUrl),
  publicBaseUrl: envSiteUrl, // Ex: "https://embarqueviagem.com" somente após conexão do domínio
  defaultLocale: 'pt-BR',
  supportedLocales: {
    pt: 'pt-BR',
    es: 'es-419',
    en: 'en-US',
  } as Record<Language, string>,
  routes: {
    home: '/',
    destinations: '/destinos',
    destinationPrefix: '/destinos/',
    blog: '/blog',
    blogPrefix: '/blog/',
    authorPrefix: '/autor/',
    calculator: '/calculadora-orcamento',
    routeCalculator: '/calculadora-rota',
    comparator: '/comparador-custos',
    profiles: '/perfis',
    partners: '/parceiros',
    about: '/sobre',
    contact: '/contato',
    privacy: '/privacidade',
    terms: '/termos',
    affiliates: '/afiliados',
  },
  localizedRoutes: {
    pt: {
      home: '/',
      destinations: '/destinos',
      destinationPrefix: '/destinos/',
      blog: '/blog',
      blogPrefix: '/blog/',
      authorPrefix: '/autor/',
      calculator: '/calculadora-orcamento',
      routeCalculator: '/calculadora-rota',
      comparator: '/comparador-custos',
      profiles: '/perfis',
      partners: '/parceiros',
      about: '/sobre',
      contact: '/contato',
      privacy: '/privacidade',
      terms: '/termos',
      affiliates: '/afiliados',
    },
    es: {
      home: '/es',
      destinations: '/es/destinos',
      destinationPrefix: '/es/destinos/',
      blog: '/es/blog',
      blogPrefix: '/es/blog/',
      authorPrefix: '/es/autor/',
      calculator: '/es/calculadora-presupuesto',
      routeCalculator: '/es/calculadora-ruta',
      comparator: '/es/comparador-costos',
      profiles: '/es/perfiles',
      partners: '/es/socios',
      about: '/es/nosotros',
      contact: '/es/contacto',
      privacy: '/es/privacidad',
      terms: '/es/terminos',
      affiliates: '/es/afiliados',
    },
    en: {
      home: '/en',
      destinations: '/en/destinations',
      destinationPrefix: '/en/destinations/',
      blog: '/en/blog',
      blogPrefix: '/en/blog/',
      authorPrefix: '/en/author/',
      calculator: '/en/budget-calculator',
      routeCalculator: '/en/route-calculator',
      comparator: '/en/cost-comparator',
      profiles: '/en/travel-styles',
      partners: '/en/partners',
      about: '/en/about',
      contact: '/en/contact',
      privacy: '/en/privacy',
      terms: '/en/terms',
      affiliates: '/en/affiliates',
    },
  },
} as const;

/**
 * Resolve a base URL para tags de SEO em tempo de execução:
 * - Quando VITE_PUBLIC_SITE_URL estiver configurada (produção), usa o domínio oficial.
 * - Em homologação/staging, retorna o origin ativo apenas para tags dinâmicas de DOM,
 *   mantendo noindex/nofollow e sem gravar URLs provisórias em arquivos fonte.
 */
export function resolveActiveBaseUrl(): string {
  if (SITE_CONFIG.isDomainConnected && SITE_CONFIG.publicBaseUrl) {
    return SITE_CONFIG.publicBaseUrl;
  }
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin.replace(/\/+$/, '');
  }
  return '';
}

export function resolveCanonicalUrl(relativePath: string): string | undefined {
  const base = resolveActiveBaseUrl();
  if (!base) return undefined;
  const normalized = relativePath.startsWith('/') ? relativePath : `/${relativePath}`;
  return `${base}${normalized}`;
}

export function resolveMediaUrl(relativePath: string): string {
  if (!relativePath) return '';
  if (relativePath.startsWith('http://') || relativePath.startsWith('https://')) {
    return relativePath;
  }
  const normalized = relativePath.startsWith('/') ? relativePath : `/${relativePath}`;
  const base = resolveActiveBaseUrl();
  return base ? `${base}${normalized}` : normalized;
}
