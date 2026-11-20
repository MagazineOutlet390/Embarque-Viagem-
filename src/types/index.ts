/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'pt' | 'es' | 'en';

export interface Author {
  id: string;
  slug?: string;
  name: string;
  role: Record<Language, string>;
  avatar: string;
  bio: Record<Language, string>;
  methodologyNote?: Record<Language, string>;
  socialLinks?: {
    linkedin?: string;
    instagram?: string;
  };
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  state: string; // SC, RJ, etc.
  region: string;
  country: string;
  tagline: Record<Language, string>;
  description: Record<Language, string>;
  heroImage: string;
  gallery: string[];
  bestTimeToVisit: Record<Language, string>;
  howToGetThere: Record<Language, string>;
  highlights: {
    title: Record<Language, string>;
    description: Record<Language, string>;
    category: 'beach' | 'culture' | 'gastronomy' | 'adventure' | 'nature';
  }[];
  costProfile: {
    dailyAverageBRL: number; // in BRL
    tier: 'economico' | 'moderado' | 'alto_padrao' | 'luxo';
    lodgingRangeBRL: [number, number];
    diningRangeBRL: [number, number];
    transportDailyBRL: number;
    toursDailyBRL: number;
  };
  featured: boolean;
  priorityRegion: 'santa_catarina' | 'rio_de_janeiro' | 'outros';
}

export interface ArticleImage {
  src: string;
  alt: string;
  caption: string;
  altByLang?: Partial<Record<Language, string>>;
  captionByLang?: Partial<Record<Language, string>>;
  orientation?: 'landscape' | 'portrait';
  isIllustration?: boolean;
}

export interface ArticleTable {
  caption?: string;
  headers: string[];
  rows: string[][];
}

export interface ArticleSubsection {
  title: string;
  paragraphs: string[];
}

export interface ArticleSection {
  id?: string;
  title: Record<Language, string>;
  content: Record<Language, string[]>;
  subsections?: Record<Language, ArticleSubsection[]>;
  image?: ArticleImage;
  table?: Record<Language, ArticleTable>;
}

export interface ArticleFAQ {
  question: string;
  answer: string;
}

export interface ArticleExternalSource {
  label: string;
  url: string;
  description?: string;
  labelByLang?: Partial<Record<Language, string>>;
  descriptionByLang?: Partial<Record<Language, string>>;
}

export interface ArticleInternalLink {
  label: string;
  path: string;
  view: string;
  slug?: string;
  description?: string;
  labelByLang?: Partial<Record<Language, string>>;
  descriptionByLang?: Partial<Record<Language, string>>;
}

export interface Article {
  id: string;
  slug: string;
  slugs?: Partial<Record<Language, string>>;
  editorialStatus?: 'verified' | 'draft' | 'legacy_review';
  showNewsletterInvite?: boolean;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  excerpt: Record<Language, string>;
  coverImage: string;
  coverImageAlt?: Record<Language, string>;
  coverImageCaption?: Record<Language, string>;
  category: 'guias' | 'praias' | 'roteiros' | 'gastronomia' | 'dicas';
  author: Author;
  reviewer?: Author;
  publisherName?: string;
  publishedAt: string;
  updatedAt: string;
  readTimeMinutes: number;
  destinationSlug?: string;
  availableLanguages?: Language[];
  seo?: {
    title: Record<Language, string>;
    description: Record<Language, string>;
    primaryKeyword: string;
  };
  transparencyNote?: Record<Language, string>;
  videoEmbed?: {
    youtubeId: string;
    title: string;
    titleByLang?: Partial<Record<Language, string>>;
    channelName: string;
    channelUrl: string;
    watchUrl: string;
    caption: string;
    captionByLang?: Partial<Record<Language, string>>;
  };
  sections: ArticleSection[];
  faqs?: Record<Language, ArticleFAQ[]>;
  sources?: ArticleExternalSource[];
  relatedInternalLinks?: ArticleInternalLink[];
  featured: boolean;
}

export interface TravellerProfile {
  id: string;
  slug: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  icon: string;
  recommendedDestinations: string[]; // slugs
}

export interface AffiliatePartner {
  id: string;
  name: string;
  category: 'hospedagem' | 'passagens' | 'seguro' | 'veiculos' | 'passeios' | 'cruzeiros' | 'pacotes';
  description: Record<Language, string>;
  websiteUrl: string;
  affiliateUrl: string;
  badgeText: Record<Language, string>;
  isSponsored: boolean;
}

export interface PartnerOffer {
  id: string;
  partnerId: string;
  partnerName: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  destinationSlug?: string;
  priceNote?: Record<Language, string>;
  affiliateUrl: string;
  validUntil?: string;
  highlight: boolean;
}

export interface HeroPhotoConfig {
  imageUrl: string;
  objectPosition: string; // e.g., 'center 40%', 'top', etc.
  overlayOpacity: number; // 0.1 to 0.8
  layoutStyle: 'full_bleed' | 'editorial_split';
  sourceName?: string;
}
