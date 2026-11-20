/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';
import { articlesData } from '../data/articles';
import { destinationsData } from '../data/destinations';
import { affiliatePartnersData, partnerOffersData } from '../data/partners';
import { Article, Destination, AffiliatePartner, PartnerOffer } from '../types';

/**
 * Sanity Project Configuration for Embarque
 * Project: Embarque
 * Dataset: production
 * Studio URL: https://embarque-viagem.sanity.studio/
 */
export const SANITY_CONFIG = {
  projectId: (import.meta as any).env?.VITE_SANITY_PROJECT_ID || '2j6phep5',
  dataset: (import.meta as any).env?.VITE_SANITY_DATASET || 'production',
  apiVersion: '2024-03-01',
  useCdn: true,
  studioUrl: 'https://embarque-viagem.sanity.studio/',
};

export const sanityClient = createClient({
  projectId: SANITY_CONFIG.projectId,
  dataset: SANITY_CONFIG.dataset,
  apiVersion: SANITY_CONFIG.apiVersion,
  useCdn: SANITY_CONFIG.useCdn,
});

const builder = createImageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  if (!source) {
    const emptyBuilder: any = {
      url: () => '',
      width: () => emptyBuilder,
      height: () => emptyBuilder,
      quality: () => emptyBuilder,
      auto: () => emptyBuilder,
    };
    return emptyBuilder;
  }

  // If source is already a direct string URL or local path
  if (typeof source === 'string') {
    const stringBuilder: any = {
      url: () => source,
      width: () => stringBuilder,
      height: () => stringBuilder,
      quality: () => stringBuilder,
      auto: () => stringBuilder,
    };
    return stringBuilder;
  }

  // If source is a Sanity asset reference or image object
  try {
    return builder.image(source);
  } catch {
    const fallbackBuilder: any = {
      url: () => '',
      width: () => fallbackBuilder,
      height: () => fallbackBuilder,
      quality: () => fallbackBuilder,
      auto: () => fallbackBuilder,
    };
    return fallbackBuilder;
  }
}

/**
 * Robust fetcher that queries Sanity with automatic fallback to curated editorial data.
 * This guarantees zero downtime and instant previews while the project credentials
 * are being linked in Cloudflare or local .env.
 */
export async function getDestinations(): Promise<Destination[]> {
  try {
    if (SANITY_CONFIG.projectId && SANITY_CONFIG.projectId !== 'embarque') {
      const query = `*[_type == "destination"] | order(featured desc, name asc) {
        id,
        "slug": slug.current,
        name,
        state,
        region,
        country,
        tagline,
        description,
        "heroImage": heroImage.asset->url,
        bestTimeToVisit,
        howToGetThere,
        highlights,
        costProfile,
        featured,
        priorityRegion
      }`;
      const data = await sanityClient.fetch(query);
      if (Array.isArray(data) && data.length > 0) {
        return data;
      }
    }
  } catch (err) {
    console.warn('[Sanity] Fetch failed or not yet provisioned; using curated editorial dataset.', err);
  }
  return destinationsData;
}

export async function getDestinationBySlug(slug: string): Promise<Destination | undefined> {
  const all = await getDestinations();
  return all.find((d) => d.slug === slug);
}

export async function getArticles(): Promise<Article[]> {
  try {
    if (SANITY_CONFIG.projectId && SANITY_CONFIG.projectId !== 'embarque') {
      const query = `*[_type == "article"] | order(publishedAt desc) {
        id,
        "slug": slug.current,
        title,
        subtitle,
        excerpt,
        "coverImage": coverImage.asset->url,
        category,
        author->{
          id,
          name,
          role,
          bio,
          "avatar": avatar.asset->url
        },
        publishedAt,
        updatedAt,
        readTimeMinutes,
        "destinationSlug": destination->slug.current,
        sections,
        featured
      }`;
      const data = await sanityClient.fetch(query);
      if (Array.isArray(data) && data.length > 0) {
        return data;
      }
    }
  } catch (err) {
    console.warn('[Sanity] Fetch articles fallback.', err);
  }
  return articlesData;
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  const all = await getArticles();
  return all.find((a) => a.slug === slug);
}

export function getPartners(): AffiliatePartner[] {
  return affiliatePartnersData;
}

export function getOffers(): PartnerOffer[] {
  return partnerOffersData;
}
