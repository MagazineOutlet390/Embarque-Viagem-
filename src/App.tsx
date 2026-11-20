/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { FeaturedDestinations } from './components/home/FeaturedDestinations';
import { EditorialArticles } from './components/home/EditorialArticles';
import { TravelProfiles } from './components/home/TravelProfiles';
import { PartnerOffers } from './components/home/PartnerOffers';
import { BudgetCalculator } from './components/tools/BudgetCalculator';
import { RouteCalculator } from './components/tools/RouteCalculator';
import { CostComparator } from './components/tools/CostComparator';
import { DestinationDetail } from './components/destination/DestinationDetail';
import { ArticleDetail } from './components/article/ArticleDetail';
import { AuthorDetail } from './components/author/AuthorDetail';
import { NewsletterSection } from './components/newsletter/NewsletterSection';
import { InstitutionalView } from './components/institutional/InstitutionalView';

import { getDestinations, getArticles, getPartners, getOffers } from './lib/sanity';
import { articlesData } from './data/articles';
import { destinationsData } from './data/destinations';
import { AUTHORS_BY_SLUG } from './data/authors';
import { travellerProfilesData } from './data/partners';
import { Destination, Article, Language, HeroPhotoConfig } from './types';
import { translations } from './i18n/translations';
import {
  findArticleByAnySlug,
  getArticleSlugForLang,
  getPathForRoute,
  parseRouteFromPathname,
  syncPageSeo,
} from './lib/seo';

const DEFAULT_HERO_CONFIG: HeroPhotoConfig = {
  imageUrl: '/images/hero_coast.jpg',
  objectPosition: 'center 40%',
  overlayOpacity: 0.45,
  layoutStyle: 'full_bleed',
};

export default function App() {
  const initialRoute = useMemo(() => parseRouteFromPathname(window.location.pathname), []);

  const [currentLang, setCurrentLang] = useState<Language>(initialRoute.lang);
  const [activeView, setActiveView] = useState<string>(initialRoute.view);
  const [activeSlug, setActiveSlug] = useState<string>(initialRoute.slug);
  const [searchFilter, setSearchFilter] = useState<string>('');

  // Data states (resilient Sanity client with immediate curated fallback for deep links)
  const [destinations, setDestinations] = useState<Destination[]>(destinationsData);
  const [articles, setArticles] = useState<Article[]>(articlesData);
  const [partners] = useState<import('./types').AffiliatePartner[]>(() => getPartners());
  const [offers] = useState<import('./types').PartnerOffer[]>(() => getOffers());

  // Hero photo configuration (internal state preserved for programmatic control)
  const [heroConfig] = useState<HeroPhotoConfig>(() => {
    try {
      const stored = localStorage.getItem('embarque_hero_config');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && typeof parsed.imageUrl === 'string') {
          if (parsed.imageUrl.includes('/src/assets/')) {
            parsed.imageUrl = '/images/hero_coast.jpg';
          }
          return { ...DEFAULT_HERO_CONFIG, ...parsed };
        }
      }
    } catch {
      // ignore
    }
    return DEFAULT_HERO_CONFIG;
  });

  // Load Sanity data on mount if published documents exist
  useEffect(() => {
    async function loadData() {
      const [destList, artList] = await Promise.all([getDestinations(), getArticles()]);
      if (destList.length > 0) setDestinations(destList);
      if (artList.length > 0) setArticles(artList);
    }
    loadData();
  }, []);

  // Sync browser history back/forward navigation (preserving language prefix & localized route)
  useEffect(() => {
    const handlePopState = () => {
      const parsed = parseRouteFromPathname(window.location.pathname);
      setCurrentLang(parsed.lang);
      setActiveView(parsed.view);
      setActiveSlug(parsed.slug);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const selectedDestination = useMemo(() => {
    if (activeView !== 'destination' || !activeSlug) return undefined;
    return destinations.find((d) => d.slug === activeSlug);
  }, [activeView, activeSlug, destinations]);

  const selectedArticle = useMemo(() => {
    if (activeView !== 'article' || !activeSlug) return undefined;
    return findArticleByAnySlug(articles, activeSlug);
  }, [activeView, activeSlug, articles]);

  const selectedAuthor = useMemo(() => {
    if (activeView !== 'author' || !activeSlug) return undefined;
    return AUTHORS_BY_SLUG[activeSlug];
  }, [activeView, activeSlug]);

  const handleNavigate = (view: string, slug?: string, langOverride?: Language) => {
    const targetLang = langOverride || currentLang;
    const cleanSlug = slug || '';
    const articleMatch =
      view === 'article' && cleanSlug ? findArticleByAnySlug(articles, cleanSlug) : undefined;
    const resolvedSlug =
      view === 'article' && articleMatch ? getArticleSlugForLang(articleMatch, targetLang) : cleanSlug;

    setActiveView(view);
    setActiveSlug(resolvedSlug);

    const targetPath = getPathForRoute(view, resolvedSlug, targetLang, articleMatch);
    if (window.location.pathname !== targetPath) {
      window.history.pushState(
        { view, slug: resolvedSlug, lang: targetLang },
        '',
        targetPath
      );
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectLang = (newLang: Language) => {
    setCurrentLang(newLang);
    try {
      localStorage.setItem('embarque_lang', newLang);
    } catch {
      // ignore storage errors
    }

    if (activeView === 'article' && selectedArticle) {
      const nextSlug = getArticleSlugForLang(selectedArticle, newLang);
      setActiveSlug(nextSlug);
      const targetPath = getPathForRoute('article', nextSlug, newLang, selectedArticle);
      if (window.location.pathname !== targetPath) {
        window.history.pushState(
          { view: 'article', slug: nextSlug, lang: newLang },
          '',
          targetPath
        );
      }
      return;
    }

    const targetPath = getPathForRoute(activeView, activeSlug, newLang);
    if (window.location.pathname !== targetPath) {
      window.history.pushState(
        { view: activeView, slug: activeSlug, lang: newLang },
        '',
        targetPath
      );
    }
  };

  // Sync document title, meta tags, noindex pre-launch policy, canonical and Schema.org JSON-LD
  useEffect(() => {
    syncPageSeo({
      activeView,
      activeSlug,
      currentLang,
      article: selectedArticle,
      author: selectedAuthor,
      destination: selectedDestination,
    });
  }, [currentLang, activeView, activeSlug, selectedArticle, selectedAuthor, selectedDestination]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F3] text-[#1C2230] selection:bg-[#B8923B]/20 selection:text-[#16283F]">
      {/* 3-Zone Editorial Header (Clean public interface without admin buttons) */}
      <Header
        currentLang={currentLang}
        onSelectLang={handleSelectLang}
        activeView={activeView}
        onNavigate={handleNavigate}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {/* HOMEPAGE VIEW */}
        {activeView === 'home' && (
          <>
            {/* 1. Hero Slideshow with 3 Alternating Themes */}
            <Hero
              currentLang={currentLang}
              heroConfig={heroConfig}
              onNavigate={handleNavigate}
              onSearch={(query) => {
                setSearchFilter(query);
                handleNavigate('destinations');
              }}
            />

            {/* 2. Curated Destinations (SC & RJ Focus) */}
            <FeaturedDestinations
              destinations={destinations}
              currentLang={currentLang}
              onSelectDestination={(slug) => handleNavigate('destination', slug)}
              searchFilter={searchFilter}
            />

            {/* 3. Editorial Articles & Guides */}
            <EditorialArticles
              articles={articles}
              currentLang={currentLang}
              onSelectArticle={(slug) => handleNavigate('article', slug)}
            />

            {/* 4. Traveller Profiles */}
            <TravelProfiles
              profiles={travellerProfilesData}
              currentLang={currentLang}
              onSelectDestination={(slug) => handleNavigate('destination', slug)}
            />

            {/* 5. Tools Teaser Banner (Budget, Route & Comparator) */}
            <section className="py-16 sm:py-20 bg-white border-y border-[#1C2230]/10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <span className="text-xs uppercase tracking-widest text-[#B8923B] font-semibold block mb-2">
                    {translations[currentLang].homeUi.smartPlanningKicker}
                  </span>
                  <h2 className="font-editorial text-3xl sm:text-4xl text-[#16283F]">
                    {translations[currentLang].sections.toolsTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-[#1C2230]/70 mt-2">
                    {translations[currentLang].sections.toolsSubtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                  {/* Budget Calculator Teaser */}
                  <div className="p-7 rounded-xl bg-[#FAF8F3] border border-[#1C2230]/15 hover:border-[#B8923B]/60 transition-all shadow-xs flex flex-col justify-between">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#B8923B] font-semibold block mb-2">
                        {translations[currentLang].homeUi.expenseSimulatorKicker}
                      </span>
                      <h3 className="font-editorial text-xl sm:text-2xl text-[#16283F] mb-3">
                        {translations[currentLang].sections.budgetToolTitle}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#1C2230]/75 leading-relaxed mb-6">
                        {translations[currentLang].sections.budgetToolDesc}
                      </p>
                    </div>
                    <button
                      onClick={() => handleNavigate('calculator')}
                      className="w-full py-3 bg-[#16283F] text-white font-semibold text-xs rounded-lg hover:bg-[#16283F]/90 transition-colors shadow-xs cursor-pointer"
                    >
                      {translations[currentLang].sections.openCalculator} →
                    </button>
                  </div>

                  {/* Route & Fuel Calculator Teaser */}
                  <div className="p-7 rounded-xl bg-[#FAF8F3] border border-[#1C2230]/15 hover:border-[#B8923B]/60 transition-all shadow-xs flex flex-col justify-between">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#B8923B] font-semibold block mb-2">
                        {translations[currentLang].homeUi.mobilityKicker}
                      </span>
                      <h3 className="font-editorial text-xl sm:text-2xl text-[#16283F] mb-3">
                        {translations[currentLang].routeCalculator.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#1C2230]/75 leading-relaxed mb-6">
                        {translations[currentLang].routeCalculator.subtitle}
                      </p>
                    </div>
                    <button
                      onClick={() => handleNavigate('route-calculator')}
                      className="w-full py-3 bg-[#16283F] text-white font-semibold text-xs rounded-lg hover:bg-[#16283F]/90 transition-colors shadow-xs cursor-pointer"
                    >
                      {translations[currentLang].homeUi.routeToolBtn} →
                    </button>
                  </div>

                  {/* Destination Comparator Teaser */}
                  <div className="p-7 rounded-xl bg-[#FAF8F3] border border-[#1C2230]/15 hover:border-[#B8923B]/60 transition-all shadow-xs flex flex-col justify-between">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#B8923B] font-semibold block mb-2">
                        {translations[currentLang].homeUi.sideBySideKicker}
                      </span>
                      <h3 className="font-editorial text-xl sm:text-2xl text-[#16283F] mb-3">
                        {translations[currentLang].sections.comparatorToolTitle}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#1C2230]/75 leading-relaxed mb-6">
                        {translations[currentLang].sections.comparatorToolDesc}
                      </p>
                    </div>
                    <button
                      onClick={() => handleNavigate('comparator')}
                      className="w-full py-3 bg-white border border-[#1C2230]/20 text-[#16283F] font-semibold text-xs rounded-lg hover:border-[#B8923B] transition-colors shadow-xs cursor-pointer"
                    >
                      {translations[currentLang].sections.openComparator} →
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* 6. Partner Offers & Monetization */}
            <PartnerOffers
              partners={partners}
              offers={offers}
              currentLang={currentLang}
            />

            {/* 7. Newsletter (Brevo integration) */}
            <NewsletterSection currentLang={currentLang} />
          </>
        )}

        {/* DESTINATIONS ARCHIVE VIEW */}
        {activeView === 'destinations' && (
          <div className="py-8">
            <FeaturedDestinations
              destinations={destinations}
              currentLang={currentLang}
              onSelectDestination={(slug) => handleNavigate('destination', slug)}
              searchFilter={searchFilter}
            />
          </div>
        )}

        {/* SINGLE DESTINATION GUIDE VIEW */}
        {activeView === 'destination' && selectedDestination && (
          <DestinationDetail
            destination={selectedDestination}
            currentLang={currentLang}
            relatedArticles={articles.filter(
              (a) =>
                a.destinationSlug === selectedDestination.slug &&
                a.editorialStatus !== 'legacy_review'
            )}
            offers={offers}
            onBack={() => handleNavigate('destinations')}
            onSelectArticle={(slug) => handleNavigate('article', slug)}
            onOpenCalculator={(slug) => handleNavigate('calculator', slug)}
          />
        )}

        {/* ARTICLES ARCHIVE VIEW */}
        {activeView === 'articles' && (
          <div className="py-8">
            <EditorialArticles
              articles={articles}
              currentLang={currentLang}
              onSelectArticle={(slug) => handleNavigate('article', slug)}
              showAll
            />
          </div>
        )}

        {/* SINGLE ARTICLE READER VIEW */}
        {activeView === 'article' && selectedArticle && (
          <ArticleDetail
            article={selectedArticle}
            currentLang={currentLang}
            destination={destinations.find(
              (d) => d.slug === selectedArticle.destinationSlug
            )}
            relatedArticles={articles.filter(
              (a) =>
                a.id !== selectedArticle.id &&
                a.editorialStatus !== 'legacy_review'
            )}
            offers={offers}
            onBack={() => handleNavigate('articles')}
            onSelectArticle={(slug) => handleNavigate('article', slug)}
            onSelectDestination={(slug) => handleNavigate('destination', slug)}
            onSelectAuthor={(authorSlug) => handleNavigate('author', authorSlug)}
            onNavigate={handleNavigate}
            onSwitchToAvailableLang={(lang, fallbackSlug) => {
              setCurrentLang(lang);
              handleNavigate('article', fallbackSlug, lang);
            }}
          />
        )}

        {/* AUTHOR PROFILE VIEW */}
        {activeView === 'author' && selectedAuthor && (
          <AuthorDetail
            author={selectedAuthor}
            articles={articles}
            currentLang={currentLang}
            onBack={() => handleNavigate('home')}
            onSelectArticle={(slug) => handleNavigate('article', slug)}
          />
        )}

        {/* NOT FOUND FALLBACK FOR UNKNOWN ARTICLE / AUTHOR / DESTINATION SLUGS */}
        {((activeView === 'article' && !selectedArticle) ||
          (activeView === 'author' && !selectedAuthor) ||
          (activeView === 'destination' && !selectedDestination)) && (
          <section className="py-24 max-w-2xl mx-auto px-4 text-center space-y-5">
            <span className="text-xs uppercase tracking-widest text-[#B8923B] font-semibold block">
              {translations[currentLang].homeUi.notFoundKicker}
            </span>
            <h1 className="font-editorial text-3xl sm:text-4xl text-[#16283F]">
              {translations[currentLang].homeUi.notFoundTitle}
            </h1>
            <p className="text-sm sm:text-base text-[#1C2230]/75 leading-relaxed">
              {translations[currentLang].homeUi.notFoundDesc}
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => handleNavigate('articles')}
                className="px-5 py-2.5 bg-[#16283F] text-white text-xs font-semibold rounded-md hover:bg-[#16283F]/90 transition-colors cursor-pointer"
              >
                {translations[currentLang].homeUi.notFoundBlogBtn}
              </button>
              <button
                onClick={() => handleNavigate('home')}
                className="px-5 py-2.5 bg-white border border-[#1C2230]/20 text-[#16283F] text-xs font-semibold rounded-md hover:border-[#B8923B] transition-colors cursor-pointer"
              >
                {translations[currentLang].homeUi.notFoundHomeBtn}
              </button>
            </div>
          </section>
        )}

        {/* BUDGET CALCULATOR TOOL VIEW */}
        {activeView === 'calculator' && (
          <BudgetCalculator
            destinations={destinations}
            currentLang={currentLang}
            preselectedSlug={activeSlug}
            onNavigateToRoute={() => handleNavigate('route-calculator')}
          />
        )}

        {/* ROUTE & FUEL CALCULATOR TOOL VIEW */}
        {activeView === 'route-calculator' && (
          <RouteCalculator
            currentLang={currentLang}
            onNavigateToBudget={() => handleNavigate('calculator')}
          />
        )}

        {/* COST COMPARATOR TOOL VIEW */}
        {activeView === 'comparator' && (
          <CostComparator
            destinations={destinations}
            currentLang={currentLang}
            onSelectDestination={(slug) => handleNavigate('destination', slug)}
          />
        )}

        {/* TRAVELLER PROFILES VIEW */}
        {activeView === 'profiles' && (
          <div className="py-8">
            <TravelProfiles
              profiles={travellerProfilesData}
              currentLang={currentLang}
              onSelectDestination={(slug) => handleNavigate('destination', slug)}
            />
          </div>
        )}

        {/* PARTNERS VIEW */}
        {activeView === 'partners' && (
          <div className="py-8">
            <PartnerOffers
              partners={partners}
              offers={offers}
              currentLang={currentLang}
            />
          </div>
        )}

        {/* INSTITUTIONAL PAGES */}
        {(activeView === 'about' ||
          activeView === 'contact' ||
          activeView === 'privacy' ||
          activeView === 'terms' ||
          activeView === 'affiliates') && (
          <InstitutionalView
            type={activeView as any}
            currentLang={currentLang}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Editorial Footer */}
      <Footer currentLang={currentLang} onNavigate={handleNavigate} />
    </div>
  );
}
