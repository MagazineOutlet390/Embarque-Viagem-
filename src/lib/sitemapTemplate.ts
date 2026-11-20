/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SITE_CONFIG } from '../config/site';
import { articlesData } from '../data/articles';
import { destinationsData } from '../data/destinations';
import { AUTHORS_BY_SLUG } from '../data/authors';
import { Language } from '../types';
import { getArticleSlugForLang, getPathForRoute } from './seo';

interface SitemapAlternate {
  hreflang: string;
  href: string;
}

interface SitemapEntry {
  loc: string;
  lastmod?: string;
  changefreq: 'daily' | 'weekly' | 'monthly';
  priority: string;
  alternates?: SitemapAlternate[];
}

/**
 * Gera XML do sitemap para o lançamento oficial (quando VITE_PUBLIC_SITE_URL e
 * VITE_ENABLE_INDEXING estiverem ativados).
 * Inclui apenas URLs e versões idiomáticas efetivamente publicadas e indexáveis.
 */
export function buildSitemapXml(): string | null {
  if (!SITE_CONFIG.isDomainConnected || !SITE_CONFIG.isIndexingEnabled || !SITE_CONFIG.publicBaseUrl) {
    return null;
  }

  const base = SITE_CONFIG.publicBaseUrl;
  const allLangs: Language[] = ['pt', 'es', 'en'];
  const entries: SitemapEntry[] = [];

  const staticViews: { view: string; changefreq: 'weekly' | 'monthly'; priority: string }[] = [
    { view: 'home', changefreq: 'weekly', priority: '1.0' },
    { view: 'articles', changefreq: 'weekly', priority: '0.9' },
    { view: 'destinations', changefreq: 'weekly', priority: '0.9' },
    { view: 'calculator', changefreq: 'monthly', priority: '0.7' },
    { view: 'route-calculator', changefreq: 'monthly', priority: '0.7' },
    { view: 'comparator', changefreq: 'monthly', priority: '0.7' },
    { view: 'about', changefreq: 'monthly', priority: '0.5' },
  ];

  staticViews.forEach(({ view, changefreq, priority }) => {
    const alternates: SitemapAlternate[] = allLangs.map((lang) => ({
      hreflang: SITE_CONFIG.supportedLocales[lang],
      href: `${base}${getPathForRoute(view, undefined, lang)}`,
    }));
    alternates.push({
      hreflang: 'x-default',
      href: `${base}${getPathForRoute(view, undefined, 'pt')}`,
    });

    allLangs.forEach((lang) => {
      entries.push({
        loc: `${base}${getPathForRoute(view, undefined, lang)}`,
        changefreq,
        priority,
        alternates,
      });
    });
  });

  // Artigos publicados (exclui rascunhos em preparação e legacy_review; emite apenas idiomas disponíveis)
  articlesData
    .filter(
      (article) =>
        article.editorialStatus !== 'legacy_review' && article.editorialStatus !== 'draft'
    )
    .forEach((article) => {
      const langs = article.availableLanguages?.length ? article.availableLanguages : (['pt'] as Language[]);
      const alternates: SitemapAlternate[] = langs.map((lang) => ({
        hreflang: SITE_CONFIG.supportedLocales[lang],
        href: `${base}${getPathForRoute('article', getArticleSlugForLang(article, lang), lang, article)}`,
      }));
      if (langs.includes('pt')) {
        alternates.push({
          hreflang: 'x-default',
          href: `${base}${getPathForRoute('article', getArticleSlugForLang(article, 'pt'), 'pt', article)}`,
        });
      }

      langs.forEach((lang) => {
        entries.push({
          loc: `${base}${getPathForRoute('article', getArticleSlugForLang(article, lang), lang, article)}`,
          lastmod: article.updatedAt || article.publishedAt,
          changefreq: 'monthly',
          priority: article.slug === 'o-que-fazer-em-bombinhas' ? '0.9' : '0.8',
          alternates,
        });
      });
    });

  // Destinos em todos os idiomas suportados
  destinationsData.forEach((dest) => {
    const alternates: SitemapAlternate[] = allLangs.map((lang) => ({
      hreflang: SITE_CONFIG.supportedLocales[lang],
      href: `${base}${getPathForRoute('destination', dest.slug, lang)}`,
    }));
    alternates.push({
      hreflang: 'x-default',
      href: `${base}${getPathForRoute('destination', dest.slug, 'pt')}`,
    });

    allLangs.forEach((lang) => {
      entries.push({
        loc: `${base}${getPathForRoute('destination', dest.slug, lang)}`,
        changefreq: 'monthly',
        priority: '0.8',
        alternates,
      });
    });
  });

  // Perfis de autoria
  Object.keys(AUTHORS_BY_SLUG).forEach((authorSlug) => {
    const alternates: SitemapAlternate[] = allLangs.map((lang) => ({
      hreflang: SITE_CONFIG.supportedLocales[lang],
      href: `${base}${getPathForRoute('author', authorSlug, lang)}`,
    }));
    alternates.push({
      hreflang: 'x-default',
      href: `${base}${getPathForRoute('author', authorSlug, 'pt')}`,
    });

    allLangs.forEach((lang) => {
      entries.push({
        loc: `${base}${getPathForRoute('author', authorSlug, lang)}`,
        changefreq: 'monthly',
        priority: '0.6',
        alternates,
      });
    });
  });

  const urlNodes = entries
    .map((entry) => {
      const altNodes = (entry.alternates || [])
        .map((alt) => `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}" />`)
        .join('\n');
      return `  <url>
    <loc>${entry.loc}</loc>${entry.lastmod ? `\n    <lastmod>${entry.lastmod}</lastmod>` : ''}
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>${altNodes ? `\n${altNodes}` : ''}
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlNodes}
</urlset>`;
}
