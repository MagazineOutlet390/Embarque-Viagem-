/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Clock } from 'lucide-react';
import { Article, Language } from '../../types';
import { translations } from '../../i18n/translations';
import { getArticleSlugForLang, getPathForRoute } from '../../lib/seo';

interface EditorialArticlesProps {
  articles: Article[];
  currentLang: Language;
  onSelectArticle: (slug: string) => void;
  showAll?: boolean;
}

export const EditorialArticles: React.FC<EditorialArticlesProps> = ({
  articles,
  currentLang,
  onSelectArticle,
  showAll = false,
}) => {
  const t = translations[currentLang];

  if (!articles || articles.length === 0) return null;

  const leadArticle = articles[0];
  const secondaryArticles = showAll ? articles.slice(1) : articles.slice(1, 4);

  const leadSlug = getArticleSlugForLang(leadArticle, currentLang);
  const leadHref = getPathForRoute('article', leadSlug, currentLang, leadArticle);

  return (
    <section className="py-16 sm:py-24 bg-[#F5F0E8] border-y border-[#1C2230]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-[#1C2230]/10">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#B8923B] block mb-2">
              {t.editorialUi.journalismKicker}
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#16283F] tracking-tight">
              {t.sections.editorialArticles}
            </h2>
            <p className="text-sm sm:text-base text-[#1C2230]/70 mt-2 max-w-2xl">
              {t.sections.editorialSubtitle}
            </p>
          </div>
        </div>

        {/* 3-Tier Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Tier 1: Lead Story (7 cols) */}
          {leadArticle && (
            <article className="lg:col-span-7 bg-white rounded-xl overflow-hidden border border-[#1C2230]/10 hover:border-[#B8923B]/60 transition-all duration-300 shadow-xs hover:shadow-md group">
              <a
                href={leadHref}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectArticle(leadSlug);
                }}
                className="flex flex-col justify-between h-full"
              >
                <div className="relative aspect-16/9 overflow-hidden bg-neutral-100">
                  <img
                    src={leadArticle.coverImage}
                    alt={leadArticle.coverImageAlt?.[currentLang] || leadArticle.title[currentLang]}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const el = e.currentTarget;
                      if (!el.src.endsWith('/images/hero_coast.jpg')) {
                        el.src = '/images/hero_coast.jpg';
                      }
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-[#16283F] text-white text-[11px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded">
                    {t.editorialUi.leadIssueBadge}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Clean unboxed metadata kicker */}
                    <div className="flex items-center gap-2 text-xs text-[#1C2230]/60 mb-3">
                      <span className="uppercase tracking-wider font-semibold text-[#B8923B]">
                        {leadArticle.category}
                      </span>
                      <span>·</span>
                      <span>{leadArticle.publishedAt}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {leadArticle.readTimeMinutes} {t.sections.minRead}
                      </span>
                    </div>

                    <h3 className="font-editorial text-2xl sm:text-3xl text-[#16283F] group-hover:text-[#B8923B] transition-colors mb-3 leading-snug">
                      {leadArticle.title[currentLang]}
                    </h3>

                    <p className="text-sm sm:text-base text-[#1C2230]/75 leading-relaxed line-clamp-3 mb-6">
                      {leadArticle.subtitle[currentLang]}
                    </p>
                  </div>

                  {/* Author byline */}
                  <div className="pt-4 border-t border-[#1C2230]/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={leadArticle.author.avatar}
                        alt={leadArticle.author.name}
                        loading="lazy"
                        className="w-9 h-9 rounded-full object-cover border border-gray-200"
                      />
                      <div>
                        <div className="text-xs font-semibold text-[#16283F]">
                          {leadArticle.author.name}
                        </div>
                        <div className="text-[11px] text-[#1C2230]/60">
                          {leadArticle.author.role[currentLang]}
                        </div>
                      </div>
                    </div>

                    <span className="text-xs font-semibold text-[#16283F] group-hover:text-[#B8923B] flex items-center gap-1">
                      {t.sections.readArticle} →
                    </span>
                  </div>
                </div>
              </a>
            </article>
          )}

          {/* Tier 2: Secondary Stories Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {secondaryArticles.map((art) => {
              const artSlug = getArticleSlugForLang(art, currentLang);
              const artHref = getPathForRoute('article', artSlug, currentLang, art);
              return (
                <article
                  key={art.id}
                  className="bg-white rounded-xl border border-[#1C2230]/10 hover:border-[#B8923B]/60 transition-all duration-300 shadow-xs hover:shadow-md group"
                >
                  <a
                    href={artHref}
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectArticle(artSlug);
                    }}
                    className="p-5 flex flex-col sm:flex-row gap-4 items-center"
                  >
                  <div className="relative w-full sm:w-36 h-28 shrink-0 rounded-lg overflow-hidden bg-neutral-100">
                    <img
                      src={art.coverImage}
                      alt={art.coverImageAlt?.[currentLang] || art.title[currentLang]}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const el = e.currentTarget;
                        if (!el.src.endsWith('/images/hero_coast.jpg')) {
                          el.src = '/images/hero_coast.jpg';
                        }
                      }}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-[11px] text-[#1C2230]/60 mb-1.5">
                      <span className="uppercase tracking-wider font-semibold text-[#B8923B]">
                        {art.category}
                      </span>
                      <span>·</span>
                      <span>{art.readTimeMinutes} min</span>
                    </div>

                    <h4 className="font-editorial text-lg text-[#16283F] group-hover:text-[#B8923B] transition-colors leading-snug line-clamp-2 mb-2">
                      {art.title[currentLang]}
                    </h4>

                    <p className="text-xs text-[#1C2230]/70 line-clamp-2">
                      {art.excerpt[currentLang]}
                    </p>
                  </div>
                </a>
              </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
