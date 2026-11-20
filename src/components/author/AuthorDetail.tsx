/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowLeft, BookOpen, ShieldCheck, ExternalLink, Clock } from 'lucide-react';
import { Article, Author, Language } from '../../types';
import { translations } from '../../i18n/translations';
import { getArticleSlugForLang, getPathForRoute } from '../../lib/seo';

interface AuthorDetailProps {
  author: Author;
  articles: Article[];
  currentLang: Language;
  onBack: () => void;
  onSelectArticle: (slug: string) => void;
}

export const AuthorDetail: React.FC<AuthorDetailProps> = ({
  author,
  articles,
  currentLang,
  onBack,
  onSelectArticle,
}) => {
  const t = translations[currentLang];
  const aui = t.authorUi;
  const eui = t.editorialUi;

  // Mostra artigos assinados ou revisados pelo autor (filtrando rascunhos não revisados)
  const authoredArticles = articles.filter(
    (art) =>
      (art.author.id === author.id || art.reviewer?.id === author.id) &&
      art.editorialStatus !== 'legacy_review' &&
      art.editorialStatus !== 'draft'
  );

  const hasSocialLinks = Boolean(author.socialLinks?.linkedin || author.socialLinks?.instagram);
  const homePath = getPathForRoute('home', undefined, currentLang);

  return (
    <section className="min-h-screen pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[#1C2230]/60">
          <a
            href={homePath}
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
            className="hover:text-[#16283F] transition-colors"
          >
            {eui.homeBreadcrumb}
          </a>
          <span>›</span>
          <span>{aui.breadcrumbLabel}</span>
          <span>›</span>
          <span className="text-[#16283F] font-medium">{author.name}</span>
        </nav>

        <button
          onClick={onBack}
          className="mb-8 inline-flex items-center gap-1.5 text-xs text-[#1C2230]/60 hover:text-[#16283F] uppercase tracking-widest font-semibold transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-[#B8923B]" />
          <span>{eui.backToPortal}</span>
        </button>

        {/* Author Editorial Header Card */}
        <header className="bg-white rounded-xl p-6 sm:p-10 border border-[#1C2230]/10 shadow-xs mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
            <img
              src={author.avatar}
              alt={author.name}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border border-[#1C2230]/15 shrink-0"
              loading="eager"
              fetchPriority="high"
            />
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-widest text-[#B8923B] font-semibold">
                {aui.profileKicker}
              </div>
              <h1 className="font-editorial text-3xl sm:text-4xl text-[#16283F] tracking-tight">
                {author.name}
              </h1>
              <p className="text-sm sm:text-base font-medium text-[#1C2230]/75">
                {author.role[currentLang] || author.role.pt}
              </p>

              {hasSocialLinks && (
                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-[#16283F]">
                  {author.socialLinks?.linkedin && (
                    <a
                      href={author.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:text-[#B8923B] transition-colors"
                    >
                      <span>LinkedIn</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {author.socialLinks?.instagram && (
                    <a
                      href={author.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:text-[#B8923B] transition-colors"
                    >
                      <span>Instagram</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#1C2230]/10 space-y-4">
            <h2 className="font-editorial text-xl text-[#16283F]">{aui.aboutHeading}</h2>
            <p className="text-sm sm:text-base text-[#1C2230]/85 leading-relaxed">
              {author.bio[currentLang] || author.bio.pt}
            </p>
          </div>

          {author.methodologyNote && (
            <div className="mt-6 p-5 bg-[#FAF8F3] rounded-lg border border-[#1C2230]/10 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#B8923B] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#16283F] block">
                  {aui.methodologyTitle}
                </span>
                <p className="text-xs sm:text-sm text-[#1C2230]/75 leading-relaxed">
                  {author.methodologyNote[currentLang] || author.methodologyNote.pt}
                </p>
              </div>
            </div>
          )}
        </header>

        {/* Authored Articles List */}
        <section className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-[#1C2230]/10">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B8923B] font-semibold block mb-1">
                {aui.publicationsKicker}
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl text-[#16283F]">
                {aui.publicationsHeading}
              </h2>
            </div>
            <span className="text-xs text-[#1C2230]/60 font-medium">
              {authoredArticles.length}{' '}
              {authoredArticles.length === 1 ? aui.singularPub : aui.pluralPub}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {authoredArticles.map((art) => {
              const targetLang: Language =
                !art.availableLanguages || art.availableLanguages.includes(currentLang)
                  ? currentLang
                  : art.availableLanguages[0];
              const artSlug = getArticleSlugForLang(art, targetLang);
              const articlePath = getPathForRoute('article', artSlug, targetLang, art);
              const artTitle = art.title[targetLang] || art.title.pt;
              const artExcerpt = art.excerpt[targetLang] || art.excerpt.pt;
              const artAlt = art.coverImageAlt?.[targetLang] || artTitle;

              return (
                <article
                  key={art.id}
                  className="bg-white rounded-xl overflow-hidden border border-[#1C2230]/10 hover:border-[#B8923B]/60 transition-all shadow-xs group"
                >
                  <a
                    href={articlePath}
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectArticle(artSlug);
                    }}
                    className="grid grid-cols-1 sm:grid-cols-12 items-stretch"
                  >
                    <div className="sm:col-span-4 aspect-16/10 sm:aspect-auto overflow-hidden bg-neutral-100">
                      <img
                        src={art.coverImage}
                        alt={artAlt}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="sm:col-span-8 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-xs text-[#1C2230]/60 mb-2">
                          <span className="uppercase tracking-wider font-semibold text-[#B8923B]">
                            {art.category}
                          </span>
                          <span>·</span>
                          <span>
                            {eui.publishedOn} {art.publishedAt}
                          </span>
                          <span>·</span>
                          <span className="inline-flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {art.readTimeMinutes} min
                          </span>
                        </div>
                        <h3 className="font-editorial text-xl sm:text-2xl text-[#16283F] group-hover:text-[#B8923B] transition-colors mb-2 leading-snug">
                          {artTitle}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#1C2230]/75 line-clamp-2 leading-relaxed">
                          {artExcerpt}
                        </p>
                      </div>
                      <div className="pt-4 mt-4 border-t border-[#1C2230]/10 flex items-center justify-between text-xs font-semibold text-[#16283F]">
                        <span className="inline-flex items-center gap-1.5 text-[#1C2230]/70 font-normal">
                          <BookOpen className="w-3.5 h-3.5 text-[#B8923B]" />
                          {aui.bylinePrefix} {author.name}
                        </span>
                        <span className="group-hover:text-[#B8923B] transition-colors">
                          {aui.readFullGuide} →
                        </span>
                      </div>
                    </div>
                  </a>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
};
