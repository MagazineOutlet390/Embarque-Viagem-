/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Clock,
  ArrowLeft,
  Compass,
  ShieldCheck,
  ExternalLink,
  BookOpen,
  PlayCircle,
  Mail,
  Check,
  AlertCircle,
  Globe,
} from 'lucide-react';
import { Article, Destination, Language, PartnerOffer } from '../../types';
import { translations } from '../../i18n/translations';
import { getArticleSlugForLang, getPathForRoute } from '../../lib/seo';
import { ArticleToc, TocItem } from './ArticleToc';

interface ArticleDetailProps {
  article: Article;
  currentLang: Language;
  destination?: Destination;
  relatedArticles: Article[];
  offers: PartnerOffer[];
  onBack: () => void;
  onSelectArticle: (slug: string) => void;
  onSelectDestination: (slug: string) => void;
  onSelectAuthor: (authorSlug: string) => void;
  onNavigate?: (view: string, slug?: string) => void;
  onSwitchToAvailableLang?: (lang: Language, articleSlug: string) => void;
}

export const ArticleDetail: React.FC<ArticleDetailProps> = ({
  article,
  currentLang,
  destination,
  relatedArticles,
  onBack,
  onSelectArticle,
  onSelectDestination,
  onSelectAuthor,
  onNavigate,
  onSwitchToAvailableLang,
}) => {
  const t = translations[currentLang];
  const ui = t.editorialUi;
  const nl = t.newsletterArticle;

  const isLanguageAvailable =
    !article.availableLanguages || article.availableLanguages.includes(currentLang);

  // Discreet inline newsletter state (connected to live /api/newsletter -> Brevo)
  const [nlName, setNlName] = useState('');
  const [nlEmail, setNlEmail] = useState('');
  const [nlConsent, setNlConsent] = useState(false);
  const [nlStatus, setNlStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [nlError, setNlError] = useState('');

  const handleInlineNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nlConsent) {
      setNlStatus('error');
      setNlError(nl.consentError);
      return;
    }

    setNlStatus('loading');
    setNlError('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: nlName.trim(),
          email: nlEmail.trim(),
          language: currentLang,
          source: `article_${article.slug}`,
          consentGiven: true,
          consentDate: new Date().toISOString(),
        }),
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setNlStatus('success');
        setNlName('');
        setNlEmail('');
      } else {
        setNlStatus('error');
        setNlError(data.message || nl.genericError);
      }
    } catch {
      setNlStatus('error');
      setNlError(nl.genericError);
    }
  };

  const homePath = getPathForRoute('home', undefined, currentLang);
  const blogPath = getPathForRoute('articles', undefined, currentLang);

  // When a translation does NOT exist yet, show an honest, unambiguous notice
  // instead of a half-translated page or machine translation.
  if (!isLanguageAvailable) {
    const fallbackLang = article.availableLanguages?.[0] || 'pt';
    const fallbackSlug = getArticleSlugForLang(article, fallbackLang);
    const fallbackPath = getPathForRoute('article', fallbackSlug, fallbackLang, article);

    return (
      <section className="min-h-screen py-16 sm:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 space-y-6">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs text-[#1C2230]/60"
          >
            <a
              href={homePath}
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('home');
                else onBack();
              }}
              className="hover:text-[#16283F] transition-colors"
            >
              {ui.homeBreadcrumb}
            </a>
            <span>›</span>
            <a
              href={blogPath}
              onClick={(e) => {
                e.preventDefault();
                onBack();
              }}
              className="hover:text-[#16283F] transition-colors"
            >
              {ui.blogBreadcrumb}
            </a>
            <span>›</span>
            <span className="text-[#16283F] font-medium">{article.title.pt}</span>
          </nav>

          <div className="bg-white rounded-xl p-6 sm:p-10 border border-[#1C2230]/15 shadow-xs space-y-5">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B8923B] font-semibold">
              <Globe className="w-4 h-4" />
              <span>Embarque · {article.category}</span>
            </div>

            <h1 className="font-editorial text-2xl sm:text-3xl text-[#16283F] leading-snug">
              {ui.unavailableTitle}
            </h1>

            <p className="text-sm sm:text-base text-[#1C2230]/80 leading-relaxed">
              {ui.unavailableDesc}
            </p>

            <div className="p-4 bg-[#FAF8F3] rounded-lg border border-[#1C2230]/10 space-y-1">
              <div className="text-xs uppercase tracking-wider text-[#1C2230]/60 font-semibold">
                {fallbackLang.toUpperCase()}
              </div>
              <div className="font-editorial text-lg text-[#16283F]">{article.title[fallbackLang]}</div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={fallbackPath}
                onClick={(e) => {
                  e.preventDefault();
                  if (onSwitchToAvailableLang) {
                    onSwitchToAvailableLang(fallbackLang, fallbackSlug);
                  }
                }}
                className="px-5 py-2.5 bg-[#16283F] text-white text-xs font-semibold rounded-md hover:bg-[#16283F]/90 transition-colors shadow-xs"
              >
                {ui.readOriginalIn} →
              </a>
              <a
                href={blogPath}
                onClick={(e) => {
                  e.preventDefault();
                  onBack();
                }}
                className="px-5 py-2.5 bg-white border border-[#1C2230]/20 text-[#16283F] text-xs font-semibold rounded-md hover:border-[#B8923B] transition-colors"
              >
                {ui.backToArticles}
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const articleTitle = article.title[currentLang] || article.title.pt;
  const articleSubtitle = article.subtitle[currentLang] || article.subtitle.pt;
  const coverAlt = article.coverImageAlt?.[currentLang] || articleTitle;
  const coverCaption = article.coverImageCaption?.[currentLang];
  const faqs = article.faqs?.[currentLang] || [];
  const transparencyNote = article.transparencyNote?.[currentLang];
  const authorSlug = article.author.slug;
  const authorPath = authorSlug ? getPathForRoute('author', authorSlug, currentLang) : '#';
  const destinationPath = destination
    ? getPathForRoute('destination', destination.slug, currentLang)
    : '#';

  const tocItems: TocItem[] = [];
  article.sections.slice(1).forEach((sec, sIdx) => {
    const targetId = sec.id || `secao-${sIdx + 1}`;
    const label = sec.title[currentLang] || sec.title.pt;
    if (label) {
      tocItems.push({ id: targetId, label });
    }
  });
  if (article.videoEmbed) {
    tocItems.push({ id: 'video-oficial', label: ui.officialVideoHeading });
  }
  if (faqs.length > 0) {
    tocItems.push({ id: 'perguntas-frequentes', label: ui.faqHeading });
  }

  const handleAuthorClick = (e: React.MouseEvent) => {
    if (!authorSlug) return;
    e.preventDefault();
    onSelectAuthor(authorSlug);
  };

  return (
    <article className="min-h-screen pb-24">
      {/* Header Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-8">
        {/* Semantic Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex flex-wrap items-center gap-2 text-xs text-[#1C2230]/60"
        >
          <a
            href={homePath}
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate('home');
              else onBack();
            }}
            className="hover:text-[#16283F] transition-colors"
          >
            {ui.homeBreadcrumb}
          </a>
          <span>›</span>
          <a
            href={blogPath}
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
            className="hover:text-[#16283F] transition-colors"
          >
            {ui.blogBreadcrumb}
          </a>
          <span>›</span>
          <span className="text-[#16283F] font-medium line-clamp-1">{articleTitle}</span>
        </nav>

        <button
          onClick={onBack}
          className="mb-8 inline-flex items-center gap-1.5 text-xs text-[#1C2230]/60 hover:text-[#16283F] uppercase tracking-widest font-semibold transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-[#B8923B]" />
          <span>{ui.backToArticles}</span>
        </button>

        {article.editorialStatus === 'draft' && (
          <div
            role="status"
            className="mb-6 px-4 py-2.5 rounded-lg bg-[#F5F0E8] border border-[#B8923B]/40 text-xs font-medium text-[#16283F]"
          >
            {ui.draftBadge}
          </div>
        )}

        {/* Metadata kicker */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#1C2230]/60 mb-4">
          <span className="uppercase tracking-widest font-semibold text-[#B8923B]">
            {article.category}
          </span>
          <span>·</span>
          <span>
            {ui.publishedOn} {article.publishedAt}
          </span>
          {article.updatedAt && article.updatedAt !== article.publishedAt && (
            <>
              <span>·</span>
              <span>
                {ui.updatedOn} {article.updatedAt}
              </span>
            </>
          )}
          <span>·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {article.readTimeMinutes} {ui.readUnit}
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#16283F] leading-[1.12] tracking-tight mb-6 text-balance">
          {articleTitle}
        </h1>

        {/* Subtitle Deck */}
        <p className="text-lg sm:text-xl text-[#1C2230]/80 leading-relaxed font-normal mb-8">
          {articleSubtitle}
        </p>

        {/* Author & Reviewer Byline Box */}
        <div className="py-4 border-y border-[#1C2230]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            {authorSlug ? (
              <a
                href={authorPath}
                onClick={handleAuthorClick}
                className="shrink-0 group"
                aria-label={`${article.author.name}`}
              >
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#1C2230]/15 group-hover:border-[#B8923B] transition-colors"
                />
              </a>
            ) : (
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-12 h-12 rounded-full object-cover border border-[#1C2230]/15 shrink-0"
              />
            )}

            <div>
              <div className="text-sm font-semibold text-[#16283F]">
                {authorSlug ? (
                  <a
                    href={authorPath}
                    onClick={handleAuthorClick}
                    className="hover:text-[#B8923B] transition-colors underline decoration-[#1C2230]/20 underline-offset-4"
                  >
                    {article.author.name}
                  </a>
                ) : (
                  article.author.name
                )}
                {article.publisherName && (
                  <span className="font-normal text-[#1C2230]/60"> · {article.publisherName}</span>
                )}
              </div>
              <div className="text-xs text-[#1C2230]/65">
                {article.author.role[currentLang] || article.author.role.pt}
                {article.reviewer && (
                  <span>
                    {' '}
                    · {ui.editorialReviewBy} {article.reviewer.name}
                  </span>
                )}
              </div>
            </div>
          </div>

          {destination && (
            <a
              href={destinationPath}
              onClick={(e) => {
                e.preventDefault();
                onSelectDestination(destination.slug);
              }}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-[#FAF8F3] hover:bg-[#16283F] hover:text-white rounded border border-[#1C2230]/15 transition-colors shrink-0 self-start sm:self-auto"
            >
              <Compass className="w-3.5 h-3.5 text-[#B8923B]" />
              <span>
                {ui.exploreDestination} {destination.name}
              </span>
            </a>
          )}
        </div>
      </div>

      {/* Hero Visual Image (only rendered when coverImage is defined; empty preparation slot has zero images) */}
      {article.coverImage ? (
        <figure className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="aspect-16/9 rounded-xl overflow-hidden shadow-sm border border-[#1C2230]/10 bg-neutral-100">
            <img
              src={article.coverImage}
              alt={coverAlt}
              loading="eager"
              fetchPriority="high"
              className="w-full h-full object-cover"
              onError={(e) => {
                const el = e.currentTarget;
                if (!el.src.endsWith('/images/hero_coast.jpg')) {
                  el.src = '/images/hero_coast.jpg';
                }
              }}
            />
          </div>
          {coverCaption && (
            <figcaption className="mt-2.5 text-xs text-[#1C2230]/60 leading-relaxed">
              {coverCaption}
            </figcaption>
          )}
        </figure>
      ) : (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="rounded-xl border border-dashed border-[#1C2230]/20 bg-[#F5F0E8]/60 px-6 py-10 text-center">
            <p className="text-xs uppercase tracking-widest font-semibold text-[#B8923B] mb-1">
              {ui.coverPlaceholderTitle}
            </p>
            <p className="text-xs text-[#1C2230]/65">{ui.coverPlaceholderDesc}</p>
          </div>
        </div>
      )}

      {/* Reading Column (Strict 65-75ch measure for editorial comfort) */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-[#1C2230]/90 leading-relaxed space-y-10">
        {article.sections.map((section, idx) => {
          const sectionId = section.id || (idx > 0 ? `secao-${idx}` : 'introducao');
          const sectionTitle = section.title[currentLang] || section.title.pt;
          const paragraphs = section.content[currentLang] || section.content.pt || [];
          const subsections = section.subsections?.[currentLang] || [];
          const table = section.table?.[currentLang];
          const inlineAlt = section.image?.altByLang?.[currentLang] || section.image?.alt || '';
          const inlineCaption =
            section.image?.captionByLang?.[currentLang] || section.image?.caption || '';

          return (
            <React.Fragment key={sectionId || idx}>
              <section id={sectionId} className="space-y-5 scroll-mt-24">
                <h2 className="font-editorial text-2xl sm:text-3xl text-[#16283F] pt-4 leading-snug">
                  {sectionTitle}
                </h2>

              {paragraphs.map((paragraph, pIdx) => (
                <p
                  key={pIdx}
                  className={`text-base sm:text-lg leading-relaxed ${
                    idx === 0 && pIdx === 0
                      ? 'first-letter:text-5xl first-letter:font-editorial first-letter:font-medium first-letter:float-left first-letter:mr-3 first-letter:text-[#B8923B]'
                      : ''
                  }`}
                >
                  {paragraph}
                </p>
              ))}

              {/* Optional Inline Section Video Embed (e.g., Traveler Experience Account) */}
              {section.videoEmbed && (
                <div className="my-6 rounded-xl overflow-hidden border border-[#1C2230]/15 bg-white shadow-xs">
                  <div className="aspect-16/9 bg-[#16283F]">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${section.videoEmbed.youtubeId}?rel=0`}
                      title={
                        section.videoEmbed.titleByLang?.[currentLang] ||
                        section.videoEmbed.title
                      }
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  </div>
                  <div className="p-4 sm:p-5 bg-[#FAF8F3] border-t border-[#1C2230]/10 space-y-2.5">
                    {(section.videoEmbed.creditLabel?.[currentLang] ||
                      section.videoEmbed.authorName ||
                      section.videoEmbed.channelName) && (
                      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#16283F]">
                        <PlayCircle className="w-4 h-4 text-[#B8923B] shrink-0" />
                        <span>
                          {section.videoEmbed.creditLabel?.[currentLang] ||
                            `${section.videoEmbed.authorName ? `${section.videoEmbed.authorName} · ` : ''}${section.videoEmbed.channelName}`}
                        </span>
                      </div>
                    )}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <p className="text-xs text-[#1C2230]/75 leading-relaxed">
                        {section.videoEmbed.captionByLang?.[currentLang] ||
                          section.videoEmbed.caption}
                      </p>
                      <a
                        href={section.videoEmbed.watchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#16283F] hover:text-[#B8923B] transition-colors shrink-0"
                      >
                        <span>
                          {ui.watchOnYoutube} ({section.videoEmbed.channelName})
                        </span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Optional Subsections (H3) */}
              {subsections.length > 0 && (
                <div className="space-y-6 pt-2">
                  {subsections.map((sub, sIdx) => (
                    <div key={sIdx} className="space-y-2.5">
                      <h3 className="font-editorial text-xl sm:text-2xl text-[#16283F]">
                        {sub.title}
                      </h3>
                      {sub.paragraphs.map((subP, spIdx) => (
                        <p key={spIdx} className="text-base sm:text-lg leading-relaxed">
                          {subP}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              )}

              {/* Optional Structured Table */}
              {table && table.headers.length > 0 && table.rows.length > 0 && (
                <div className="my-6 overflow-x-auto rounded-xl border border-[#1C2230]/15 bg-white shadow-xs">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    {table.caption && (
                      <caption className="px-4 py-3 text-left text-xs font-semibold text-[#16283F] bg-[#FAF8F3] border-b border-[#1C2230]/10">
                        {table.caption}
                      </caption>
                    )}
                    <thead>
                      <tr className="border-b border-[#1C2230]/15 bg-[#F5F0E8]/60">
                        {table.headers.map((header, hIdx) => (
                          <th
                            key={hIdx}
                            scope="col"
                            className="px-4 py-3 font-semibold text-[#16283F] whitespace-nowrap"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#1C2230]/10">
                      {table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-[#FAF8F3]/60 transition-colors">
                          {row.map((cell, cIdx) => (
                            <td
                              key={cIdx}
                              className={`px-4 py-3 align-top tabular-nums ${
                                cIdx === 0 ? 'font-medium text-[#16283F]' : 'text-[#1C2230]/80'
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Optional Inline Photograph */}
              {section.image && (
                <figure
                  className={
                    section.image.orientation === 'portrait'
                      ? 'my-8 max-w-sm mx-auto'
                      : 'my-6'
                  }
                >
                  <div
                    className={`${
                      section.image.orientation ? '' : 'aspect-16/9 '
                    }rounded-xl overflow-hidden border border-[#1C2230]/10 bg-neutral-100 shadow-xs`}
                  >
                    <img
                      src={section.image.src}
                      alt={inlineAlt}
                      loading="lazy"
                      className={
                        section.image.orientation
                          ? 'w-full h-auto block'
                          : 'w-full h-full object-cover'
                      }
                    />
                  </div>
                  {inlineCaption && (
                    <figcaption className="mt-2.5 text-xs text-[#1C2230]/65 leading-relaxed">
                      {inlineCaption}
                    </figcaption>
                  )}
                </figure>
              )}
            </section>

              {idx === 0 && article.sections.length > 2 && (
                <ArticleToc
                  title={ui.tocTitle}
                  items={tocItems}
                  sectionsUnit={ui.tocSectionsUnit}
                  expandLabel={ui.tocExpand}
                  collapseLabel={ui.tocCollapse}
                />
              )}
            </React.Fragment>
          );
        })}

        {/* Verified Official Video Embed */}
        {article.videoEmbed && (
          <section id="video-oficial" className="pt-4 space-y-4 scroll-mt-24">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B8923B] font-semibold">
              <PlayCircle className="w-4 h-4" />
              <span>{ui.officialVideoKicker}</span>
            </div>
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#16283F]">
              {ui.officialVideoHeading}
            </h2>
            <div className="rounded-xl overflow-hidden border border-[#1C2230]/15 bg-white shadow-xs">
              <div className="aspect-16/9 bg-[#16283F]">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${article.videoEmbed.youtubeId}`}
                  title={article.videoEmbed.titleByLang?.[currentLang] || article.videoEmbed.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
              <div className="p-4 sm:p-5 bg-[#FAF8F3] border-t border-[#1C2230]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <p className="text-xs text-[#1C2230]/75 leading-relaxed">
                  {article.videoEmbed.captionByLang?.[currentLang] || article.videoEmbed.caption}
                </p>
                <a
                  href={article.videoEmbed.watchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#16283F] hover:text-[#B8923B] transition-colors shrink-0"
                >
                  <span>
                    {ui.watchOnYoutube} ({article.videoEmbed.channelName})
                  </span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </section>
        )}

        {/* Frequently Asked Questions */}
        {faqs.length > 0 && (
          <section id="perguntas-frequentes" className="pt-6 space-y-5 border-t border-[#1C2230]/10 scroll-mt-24">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B8923B] font-semibold block mb-1">
                {ui.faqKicker}
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl text-[#16283F]">
                {ui.faqHeading}
              </h2>
            </div>

            <div className="divide-y divide-[#1C2230]/10 border-y border-[#1C2230]/10 bg-white rounded-xl px-5 sm:px-6 shadow-xs">
              {faqs.map((item, fIdx) => (
                <div key={fIdx} className="py-5 space-y-2">
                  <h3 className="font-editorial text-lg sm:text-xl text-[#16283F]">
                    {item.question}
                  </h3>
                  <p className="text-sm sm:text-base text-[#1C2230]/80 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Internal Planning Tools */}
        {article.relatedInternalLinks && article.relatedInternalLinks.length > 0 && (
          <section className="pt-4 space-y-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B8923B] font-semibold block mb-1">
                {ui.planningKicker}
              </span>
              <h2 className="font-editorial text-2xl text-[#16283F]">
                {ui.planningHeading}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {article.relatedInternalLinks.map((link, lIdx) => {
                const matchedArticle =
                  link.view === 'article' && link.slug
                    ? relatedArticles.find(
                        (a) =>
                          a.slug === link.slug ||
                          (a.slugs ? Object.values(a.slugs).includes(link.slug!) : false)
                      )
                    : undefined;
                const localizedPath = getPathForRoute(link.view, link.slug, currentLang, matchedArticle);
                const linkLabel = link.labelByLang?.[currentLang] || link.label;
                const linkDesc = link.descriptionByLang?.[currentLang] || link.description;
                return (
                  <a
                    key={lIdx}
                    href={localizedPath}
                    onClick={(e) => {
                      e.preventDefault();
                      if (onNavigate) {
                        onNavigate(link.view, link.slug);
                      } else if (link.view === 'destination' && link.slug) {
                        onSelectDestination(link.slug);
                      }
                    }}
                    className="p-4 rounded-xl bg-white border border-[#1C2230]/15 hover:border-[#B8923B] transition-colors shadow-xs flex flex-col justify-between gap-2 group"
                  >
                    <div className="font-semibold text-sm text-[#16283F] group-hover:text-[#B8923B] transition-colors">
                      {linkLabel} →
                    </div>
                    {linkDesc && (
                      <p className="text-xs text-[#1C2230]/70 leading-relaxed">{linkDesc}</p>
                    )}
                  </a>
                );
              })}
            </div>
          </section>
        )}

        {/* Discreet Newsletter Callout near closing (connected to Brevo via /api/newsletter) */}
        {article.showNewsletterInvite && (
          <section className="p-6 rounded-xl bg-white border border-[#1C2230]/15 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B8923B] font-semibold">
              <Mail className="w-4 h-4" />
              <span>{nl.kicker}</span>
            </div>
            <div>
              <h2 className="font-editorial text-xl sm:text-2xl text-[#16283F]">{nl.heading}</h2>
              <p className="text-xs sm:text-sm text-[#1C2230]/75 mt-1 leading-relaxed">{nl.desc}</p>
            </div>

            {nlStatus === 'success' ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-xs sm:text-sm text-emerald-900 flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>{nl.successMsg}</span>
              </div>
            ) : (
              <form onSubmit={handleInlineNewsletterSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#1C2230]/65 font-semibold mb-1">
                      {nl.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={nlName}
                      onChange={(e) => setNlName(e.target.value)}
                      className="w-full px-3 py-2 bg-[#FAF8F3] border border-[#1C2230]/20 rounded-md text-xs sm:text-sm text-[#16283F] focus:border-[#B8923B] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#1C2230]/65 font-semibold mb-1">
                      {nl.emailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      value={nlEmail}
                      onChange={(e) => setNlEmail(e.target.value)}
                      className="w-full px-3 py-2 bg-[#FAF8F3] border border-[#1C2230]/20 rounded-md text-xs sm:text-sm text-[#16283F] focus:border-[#B8923B] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex items-start gap-2 text-xs text-[#1C2230]/75">
                  <input
                    type="checkbox"
                    id={`article-nl-consent-${article.id}`}
                    required
                    checked={nlConsent}
                    onChange={(e) => setNlConsent(e.target.checked)}
                    className="mt-0.5 accent-[#16283F] cursor-pointer"
                  />
                  <label htmlFor={`article-nl-consent-${article.id}`} className="cursor-pointer">
                    {nl.consentLabel}
                  </label>
                </div>

                {nlStatus === 'error' && (
                  <div className="p-2.5 bg-red-50 border border-red-200 rounded-md text-xs text-red-800 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{nlError}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={nlStatus === 'loading'}
                  className="px-5 py-2.5 bg-[#16283F] text-white text-xs font-semibold rounded-md hover:bg-[#16283F]/90 transition-colors cursor-pointer disabled:opacity-50"
                >
                  {nlStatus === 'loading' ? nl.submittingBtn : nl.submitBtn}
                </button>
              </form>
            )}
          </section>
        )}

        {/* Official Sources */}
        {article.sources && article.sources.length > 0 && (
          <section className="p-6 rounded-xl bg-[#F5F0E8] border border-[#1C2230]/10 space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B8923B] font-semibold">
              <BookOpen className="w-4 h-4" />
              <span>{ui.sourcesHeading}</span>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm">
              {article.sources.map((source, sIdx) => {
                const sLabel = source.labelByLang?.[currentLang] || source.label;
                const sDesc = source.descriptionByLang?.[currentLang] || source.description;
                return (
                  <li key={sIdx} className="space-y-0.5">
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-semibold text-[#16283F] hover:text-[#B8923B] transition-colors underline decoration-[#1C2230]/20 underline-offset-4"
                    >
                      <span>{sLabel}</span>
                      <ExternalLink className="w-3 h-3 shrink-0" />
                    </a>
                    {sDesc && <p className="text-xs text-[#1C2230]/70">{sDesc}</p>}
                  </li>
                );
              })}
            </ul>
          </section>
        )}

        {/* Transparency & Editorial Governance Box */}
        {transparencyNote && (
          <aside className="p-5 rounded-xl bg-white border border-[#1C2230]/10 flex items-start gap-3 text-xs text-[#1C2230]/75 leading-relaxed">
            <ShieldCheck className="w-5 h-5 text-[#B8923B] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p>{transparencyNote}</p>
              {authorSlug && (
                <p>
                  <a
                    href={authorPath}
                    onClick={handleAuthorClick}
                    className="font-semibold text-[#16283F] hover:text-[#B8923B] underline underline-offset-4"
                  >
                    {ui.viewAuthorProfile} {article.author.name} →
                  </a>
                </p>
              )}
            </div>
          </aside>
        )}

        {/* Destination Callout Box */}
        {destination && (
          <div className="p-6 bg-white rounded-xl border border-[#1C2230]/15 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#B8923B] font-semibold block mb-0.5">
                {ui.linkedDestination}
              </span>
              <h3 className="font-editorial text-xl text-[#16283F]">{destination.name}</h3>
              <p className="text-xs text-[#1C2230]/70">
                {destination.tagline[currentLang] || destination.tagline.pt}
              </p>
            </div>
            <a
              href={destinationPath}
              onClick={(e) => {
                e.preventDefault();
                onSelectDestination(destination.slug);
              }}
              className="px-4 py-2.5 bg-[#16283F] text-white text-xs font-semibold rounded-md hover:bg-[#16283F]/90 transition-colors shrink-0 shadow-xs"
            >
              {ui.viewDestinationGuide}
            </a>
          </div>
        )}
      </div>

      {/* Related Stories (Only shown when verified/eligible related articles exist) */}
      {relatedArticles.length > 0 && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-12 border-t border-[#1C2230]/10">
          <span className="text-xs uppercase tracking-widest text-[#B8923B] font-semibold block mb-2">
            {ui.relatedKicker}
          </span>
          <h3 className="font-editorial text-2xl sm:text-3xl text-[#16283F] mb-8">
            {ui.relatedHeading}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.slice(0, 3).map((art) => {
              const relTitle = art.title[currentLang] || art.title.pt;
              const relSlug = getArticleSlugForLang(art, currentLang);
              const relHref = getPathForRoute('article', relSlug, currentLang, art);
              return (
                <a
                  key={art.id}
                  href={relHref}
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectArticle(relSlug);
                  }}
                  className="bg-white rounded-xl overflow-hidden border border-[#1C2230]/10 hover:border-[#B8923B]/60 transition-all group shadow-xs block"
                >
                  {art.coverImage && (
                    <div className="aspect-16/10 overflow-hidden bg-neutral-100">
                      <img
                        src={art.coverImage}
                        alt={relTitle}
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
                  )}
                  <div className="p-5">
                    <div className="text-[10px] uppercase tracking-wider text-[#B8923B] font-semibold mb-1">
                      {art.category} · {art.readTimeMinutes} min
                    </div>
                    <h4 className="font-editorial text-lg text-[#16283F] group-hover:text-[#B8923B] transition-colors leading-snug line-clamp-2">
                      {relTitle}
                    </h4>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </article>
  );
};
