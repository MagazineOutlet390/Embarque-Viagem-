/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Article, Author, Destination, Language } from '../types';
import { SITE_CONFIG, resolveActiveBaseUrl, resolveCanonicalUrl, resolveMediaUrl } from '../config/site';
import { translations } from '../i18n/translations';

interface SeoContext {
  activeView: string;
  activeSlug?: string;
  currentLang: Language;
  article?: Article;
  author?: Author;
  destination?: Destination;
}

const HOME_TITLES: Record<Language, string> = {
  pt: 'Embarque | Destinos, Roteiros e Dicas de Viagem',
  es: 'Embarque | Destinos, Itinerarios y Guías de Viaje',
  en: 'Embarque | Destinations, Itineraries & Travel Guides',
};

const HOME_DESCRIPTIONS: Record<Language, string> = {
  pt: 'Descubra destinos no Brasil e no mundo, roteiros, dicas de viagem, experiências, hospedagens e ferramentas para planejar sua próxima aventura.',
  es: 'Descubre destinos en Brasil y el mundo, itinerarios, guías editoriales, playas y herramientas para planificar tu próximo viaje.',
  en: 'Discover destinations across Brazil and beyond with editorial guides, itineraries, beaches, and travel planning tools.',
};

const BREADCRUMB_LABELS: Record<Language, { home: string; blog: string; author: string; destinations: string }> = {
  pt: { home: 'Início', blog: 'Blog', author: 'Autoria Editorial', destinations: 'Destinos' },
  es: { home: 'Inicio', blog: 'Blog', author: 'Autoría Editorial', destinations: 'Destinos' },
  en: { home: 'Home', blog: 'Blog', author: 'Editorial Author', destinations: 'Destinations' },
};

export function getArticleSlugForLang(article: Article, lang: Language): string {
  return article.slugs?.[lang] || article.slug;
}

export function findArticleByAnySlug(articles: Article[], slug: string): Article | undefined {
  if (!slug) return undefined;
  return articles.find(
    (a) => a.slug === slug || (a.slugs ? Object.values(a.slugs).includes(slug) : false)
  );
}

function upsertMeta(selector: string, attrs: Record<string, string>, content: string) {
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonicalTag(canonicalUrl: string | undefined) {
  const existing = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonicalUrl) {
    if (existing) existing.remove();
    return;
  }
  if (existing) {
    existing.setAttribute('href', canonicalUrl);
  } else {
    const link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', canonicalUrl);
    document.head.appendChild(link);
  }
}

function syncHreflangTags(
  view: string,
  slug: string | undefined,
  availableLanguages: Language[],
  article?: Article
) {
  document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((node) => node.remove());

  const base = resolveActiveBaseUrl();
  if (!base || availableLanguages.length === 0) {
    return;
  }

  availableLanguages.forEach((lang) => {
    const targetSlug = article ? getArticleSlugForLang(article, lang) : slug;
    const path = getPathForRoute(view, targetSlug, lang, article);
    const link = document.createElement('link');
    link.setAttribute('rel', 'alternate');
    link.setAttribute('hreflang', SITE_CONFIG.supportedLocales[lang]);
    link.setAttribute('href', `${base}${path}`);
    document.head.appendChild(link);
  });

  if (availableLanguages.includes('pt')) {
    const ptSlug = article ? getArticleSlugForLang(article, 'pt') : slug;
    const ptPath = getPathForRoute(view, ptSlug, 'pt', article);
    const xDefault = document.createElement('link');
    xDefault.setAttribute('rel', 'alternate');
    xDefault.setAttribute('hreflang', 'x-default');
    xDefault.setAttribute('href', `${base}${ptPath}`);
    document.head.appendChild(xDefault);
  }
}

function setStructuredData(payload: Record<string, any> | null) {
  const existing = document.getElementById('embarque-structured-data');
  if (!payload) {
    if (existing) existing.remove();
    return;
  }
  const script = existing || document.createElement('script');
  script.id = 'embarque-structured-data';
  script.setAttribute('type', 'application/ld+json');
  script.textContent = JSON.stringify(payload);
  if (!existing) {
    document.head.appendChild(script);
  }
}

export function getPathForRoute(
  view: string,
  slug?: string,
  lang: Language = 'pt',
  article?: Article
): string {
  const r = SITE_CONFIG.localizedRoutes[lang] || SITE_CONFIG.localizedRoutes.pt;

  switch (view) {
    case 'home':
      return r.home;
    case 'destinations':
      return r.destinations;
    case 'destination':
      return slug ? `${r.destinationPrefix}${slug}` : r.destinations;
    case 'articles':
      return r.blog;
    case 'article': {
      const targetSlug = article ? getArticleSlugForLang(article, lang) : slug;
      return targetSlug ? `${r.blogPrefix}${targetSlug}` : r.blog;
    }
    case 'author':
      return slug ? `${r.authorPrefix}${slug}` : r.about;
    case 'calculator':
      return r.calculator;
    case 'route-calculator':
      return r.routeCalculator;
    case 'comparator':
      return r.comparator;
    case 'profiles':
      return r.profiles;
    case 'partners':
      return r.partners;
    case 'about':
      return r.about;
    case 'contact':
      return r.contact;
    case 'privacy':
      return r.privacy;
    case 'terms':
      return r.terms;
    case 'affiliates':
      return r.affiliates;
    default:
      return r.home;
  }
}

export function parseRouteFromPathname(pathname: string): {
  lang: Language;
  view: string;
  slug: string;
} {
  const clean = (pathname || '/').replace(/\/+$/, '') || '/';

  let lang: Language = 'pt';
  let subPath = clean;

  if (clean === '/es' || clean.startsWith('/es/')) {
    lang = 'es';
    subPath = clean.slice(3) || '/';
  } else if (clean === '/en' || clean.startsWith('/en/')) {
    lang = 'en';
    subPath = clean.slice(3) || '/';
  }

  if (subPath === '/' || subPath === '') {
    return { lang, view: 'home', slug: '' };
  }

  if (subPath === '/blog') return { lang, view: 'articles', slug: '' };
  if (subPath.startsWith('/blog/')) {
    return { lang, view: 'article', slug: subPath.slice('/blog/'.length) };
  }

  if (subPath.startsWith('/autor/')) {
    return { lang, view: 'author', slug: subPath.slice('/autor/'.length) };
  }
  if (subPath.startsWith('/author/')) {
    return { lang, view: 'author', slug: subPath.slice('/author/'.length) };
  }

  if (subPath === '/destinos' || subPath === '/destinations') {
    return { lang, view: 'destinations', slug: '' };
  }
  if (subPath.startsWith('/destinos/')) {
    return { lang, view: 'destination', slug: subPath.slice('/destinos/'.length) };
  }
  if (subPath.startsWith('/destinations/')) {
    return { lang, view: 'destination', slug: subPath.slice('/destinations/'.length) };
  }

  if (
    subPath === '/calculadora-orcamento' ||
    subPath === '/calculadora-presupuesto' ||
    subPath === '/budget-calculator'
  ) {
    return { lang, view: 'calculator', slug: '' };
  }

  if (
    subPath === '/calculadora-rota' ||
    subPath === '/calculadora-ruta' ||
    subPath === '/route-calculator'
  ) {
    return { lang, view: 'route-calculator', slug: '' };
  }

  if (
    subPath === '/comparador-custos' ||
    subPath === '/comparador-costos' ||
    subPath === '/cost-comparator'
  ) {
    return { lang, view: 'comparator', slug: '' };
  }

  if (subPath === '/perfis' || subPath === '/perfiles' || subPath === '/travel-styles') {
    return { lang, view: 'profiles', slug: '' };
  }

  if (subPath === '/parceiros' || subPath === '/socios' || subPath === '/partners') {
    return { lang, view: 'partners', slug: '' };
  }

  if (subPath === '/sobre' || subPath === '/nosotros' || subPath === '/about') {
    return { lang, view: 'about', slug: '' };
  }

  if (subPath === '/contato' || subPath === '/contacto' || subPath === '/contact') {
    return { lang, view: 'contact', slug: '' };
  }

  if (subPath === '/privacidade' || subPath === '/privacidad' || subPath === '/privacy') {
    return { lang, view: 'privacy', slug: '' };
  }

  if (subPath === '/termos' || subPath === '/terminos' || subPath === '/terms') {
    return { lang, view: 'terms', slug: '' };
  }

  if (subPath === '/afiliados' || subPath === '/affiliates') {
    return { lang, view: 'affiliates', slug: '' };
  }

  return { lang, view: 'home', slug: '' };
}

export function syncPageSeo(ctx: SeoContext) {
  const { activeView, activeSlug, currentLang, article, author, destination } = ctx;
  const t = translations[currentLang];
  const labels = BREADCRUMB_LABELS[currentLang];
  const relativePath = getPathForRoute(activeView, activeSlug, currentLang, article);

  const isArticleUnavailableInLang =
    activeView === 'article' &&
    Boolean(article) &&
    Boolean(article?.availableLanguages?.length) &&
    !article!.availableLanguages!.includes(currentLang);

  const isDraftArticle =
    activeView === 'article' &&
    Boolean(article) &&
    article?.editorialStatus === 'draft';

  // Mantém <html lang> sempre coerente com o idioma ativo da página
  document.documentElement.lang = SITE_CONFIG.supportedLocales[currentLang];

  // Regra estrita: não indexável em pré-lançamento, rascunho em preparação ou tradução inexistente
  const shouldIndex = SITE_CONFIG.isIndexingEnabled && !isArticleUnavailableInLang && !isDraftArticle;
  upsertMeta('meta[name="robots"]', { name: 'robots' }, shouldIndex ? 'index, follow' : 'noindex, nofollow');

  let title = HOME_TITLES[currentLang];
  let description = HOME_DESCRIPTIONS[currentLang];
  let ogType = 'website';
  let ogImage = resolveMediaUrl('/images/hero_coast.jpg');
  let availableLanguages: Language[] = ['pt', 'es', 'en'];
  let structuredData: Record<string, any> | null = null;

  const canonicalUrl =
    isArticleUnavailableInLang || isDraftArticle ? undefined : resolveCanonicalUrl(relativePath);
  const homeUrl = resolveCanonicalUrl(getPathForRoute('home', undefined, currentLang));
  const blogUrl = resolveCanonicalUrl(getPathForRoute('articles', undefined, currentLang));

  const publisherOrg: Record<string, any> = {
    '@type': 'Organization',
    name: SITE_CONFIG.brandName,
    ...(homeUrl ? { url: homeUrl } : {}),
  };

  if (activeView === 'article' && article) {
    availableLanguages = article.availableLanguages || ['pt', 'es', 'en'];

    if (isArticleUnavailableInLang) {
      title =
        currentLang === 'es'
          ? `Traducción no disponible · ${article.title.pt} | Embarque`
          : `Translation unavailable · ${article.title.pt} | Embarque`;
      description =
        currentLang === 'es'
          ? 'Esta guía aún no cuenta con una versión publicada en español. Accede a la versión original en portugués.'
          : 'This guide does not yet have a published English edition. Read the original Portuguese version.';
      ogType = 'website';
      ogImage = resolveMediaUrl(article.coverImage);
    } else {
      const seoTitle = article.seo?.title?.[currentLang] || `${article.title[currentLang]} | Embarque`;
      const seoDesc = article.seo?.description?.[currentLang] || article.excerpt[currentLang];
      title = seoTitle;
      description = seoDesc;
      ogType = 'article';
      ogImage = resolveMediaUrl(article.coverImage);

      const authorProfileUrl = article.author.slug
        ? resolveCanonicalUrl(getPathForRoute('author', article.author.slug, currentLang))
        : undefined;
      const authorSameAs = [article.author.socialLinks?.linkedin, article.author.socialLinks?.instagram].filter(
        Boolean
      ) as string[];

      const authorPerson: Record<string, any> = {
        '@type': 'Person',
        name: article.author.name,
        jobTitle: article.author.role[currentLang] || article.author.role.pt,
        ...(authorProfileUrl ? { url: authorProfileUrl } : {}),
        ...(authorSameAs.length > 0 ? { sameAs: authorSameAs } : {}),
      };

      const reviewerPerson: Record<string, any> | undefined = article.reviewer
        ? {
            '@type': 'Person',
            name: article.reviewer.name,
            jobTitle: article.reviewer.role[currentLang] || article.reviewer.role.pt,
            ...(article.reviewer.slug &&
            resolveCanonicalUrl(getPathForRoute('author', article.reviewer.slug, currentLang))
              ? {
                  url: resolveCanonicalUrl(
                    getPathForRoute('author', article.reviewer.slug, currentLang)
                  ),
                }
              : {}),
          }
        : undefined;

      const blogPosting: Record<string, any> = {
        '@type': 'BlogPosting',
        headline: article.title[currentLang],
        description: seoDesc,
        datePublished: article.publishedAt,
        dateModified: article.updatedAt,
        inLanguage: SITE_CONFIG.supportedLocales[currentLang],
        ...(ogImage ? { image: [ogImage] } : {}),
        author: authorPerson,
        ...(reviewerPerson ? { reviewedBy: reviewerPerson } : {}),
        publisher: publisherOrg,
        ...(canonicalUrl
          ? { mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl }, url: canonicalUrl }
          : {}),
      };

      const breadcrumbList: Record<string, any> = {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: labels.home,
            ...(homeUrl ? { item: homeUrl } : {}),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: labels.blog,
            ...(blogUrl ? { item: blogUrl } : {}),
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: article.title[currentLang],
            ...(canonicalUrl ? { item: canonicalUrl } : {}),
          },
        ],
      };

      structuredData = {
        '@context': 'https://schema.org',
        '@graph': [blogPosting, breadcrumbList],
      };
    }
  } else if (activeView === 'author' && author) {
    title = `${author.name} — ${labels.author} | Embarque`;
    description = author.bio[currentLang] || author.bio.pt;
    ogType = 'profile';
    ogImage = resolveMediaUrl(author.avatar);
    availableLanguages = ['pt', 'es', 'en'];

    const authorSameAs = [author.socialLinks?.linkedin, author.socialLinks?.instagram].filter(Boolean) as string[];
    const personEntity: Record<string, any> = {
      '@type': 'Person',
      name: author.name,
      jobTitle: author.role[currentLang] || author.role.pt,
      description,
      image: ogImage,
      worksFor: publisherOrg,
      ...(canonicalUrl ? { url: canonicalUrl } : {}),
      ...(authorSameAs.length > 0 ? { sameAs: authorSameAs } : {}),
    };

    structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ProfilePage',
          mainEntity: personEntity,
          inLanguage: SITE_CONFIG.supportedLocales[currentLang],
          ...(canonicalUrl ? { url: canonicalUrl } : {}),
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: labels.home, ...(homeUrl ? { item: homeUrl } : {}) },
            { '@type': 'ListItem', position: 2, name: author.name, ...(canonicalUrl ? { item: canonicalUrl } : {}) },
          ],
        },
      ],
    };
  } else if (activeView === 'destination' && destination) {
    title = `${destination.name} (${destination.state}) | Embarque`;
    description = destination.tagline[currentLang];
    ogImage = resolveMediaUrl(destination.heroImage);
    structuredData = {
      '@context': 'https://schema.org',
      '@type': 'TouristDestination',
      name: destination.name,
      description: destination.description[currentLang],
      image: ogImage,
      inLanguage: SITE_CONFIG.supportedLocales[currentLang],
      ...(canonicalUrl ? { url: canonicalUrl } : {}),
    };
  } else if (activeView === 'calculator') {
    title = `${t.calculator.title} | Embarque`;
    description = t.calculator.subtitle;
  } else if (activeView === 'route-calculator') {
    title = `${t.routeCalculator.title} | Embarque`;
    description = t.routeCalculator.subtitle;
  } else if (activeView === 'comparator') {
    title = `${t.comparator.title} | Embarque`;
    description = t.comparator.subtitle;
  } else if (activeView === 'articles') {
    title = `${t.sections.editorialArticles} | Embarque`;
    description = t.sections.editorialSubtitle;
  } else {
    structuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_CONFIG.brandName,
      description: HOME_DESCRIPTIONS[currentLang],
      inLanguage: ['pt-BR', 'es-419', 'en-US'],
      publisher: publisherOrg,
      ...(homeUrl ? { url: homeUrl } : {}),
    };
  }

  document.title = title;
  upsertMeta('meta[name="description"]', { name: 'description' }, description);
  upsertMeta('meta[property="og:title"]', { property: 'og:title' }, title);
  upsertMeta('meta[property="og:description"]', { property: 'og:description' }, description);
  upsertMeta('meta[property="og:type"]', { property: 'og:type' }, ogType);
  upsertMeta('meta[property="og:locale"]', { property: 'og:locale' }, SITE_CONFIG.supportedLocales[currentLang].replace('-', '_'));
  if (ogImage) {
    upsertMeta('meta[property="og:image"]', { property: 'og:image' }, ogImage);
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image' }, ogImage);
  } else {
    document.head.querySelector('meta[property="og:image"]')?.remove();
    document.head.querySelector('meta[name="twitter:image"]')?.remove();
  }
  if (canonicalUrl) {
    upsertMeta('meta[property="og:url"]', { property: 'og:url' }, canonicalUrl);
  } else {
    document.head.querySelector('meta[property="og:url"]')?.remove();
  }
  upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, title);
  upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, description);

  setCanonicalTag(canonicalUrl);
  syncHreflangTags(activeView, activeSlug, isDraftArticle ? [] : availableLanguages, article);
  setStructuredData(isDraftArticle ? null : structuredData);
}
