/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  MapPin,
  Calendar,
  Compass,
  ArrowLeft,
  DollarSign,
  Utensils,
  Hotel,
  Ship,
  ExternalLink,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';
import { Article, Destination, Language, PartnerOffer } from '../../types';
import { translations } from '../../i18n/translations';

interface DestinationDetailProps {
  destination: Destination;
  currentLang: Language;
  relatedArticles: Article[];
  offers: PartnerOffer[];
  onBack: () => void;
  onSelectArticle: (slug: string) => void;
  onOpenCalculator: (slug: string) => void;
}

export const DestinationDetail: React.FC<DestinationDetailProps> = ({
  destination,
  currentLang,
  relatedArticles,
  offers,
  onBack,
  onSelectArticle,
  onOpenCalculator,
}) => {
  const t = translations[currentLang].destination;
  const ui = translations[currentLang].homeUi;

  const destOffers = offers.filter(
    (o) => !o.destinationSlug || o.destinationSlug === destination.slug
  );

  return (
    <article className="min-h-screen pb-24">
      {/* Editorial Destination Hero */}
      <div className="relative min-h-[500px] lg:min-h-[580px] flex items-end overflow-hidden border-b border-[#1C2230]/10">
        <img
          src={destination.heroImage}
          alt={destination.name}
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const el = e.currentTarget;
            if (!el.src.endsWith('/images/hero_coast.jpg')) {
              el.src = '/images/hero_coast.jpg';
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#16283F] via-[#16283F]/60 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full text-white">
          <button
            onClick={onBack}
            className="mb-6 inline-flex items-center gap-1.5 text-xs text-white/80 hover:text-white uppercase tracking-widest font-semibold transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#B8923B]" />
            <span>{t.backToDestinations}</span>
          </button>

          <div className="text-xs uppercase tracking-widest text-[#B8923B] font-semibold mb-2">
            {destination.country} · {destination.state} · {destination.region}
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-4 text-balance">
            {destination.name}
          </h1>

          <p className="text-base sm:text-lg text-white/90 max-w-3xl leading-relaxed font-normal">
            {destination.tagline[currentLang]}
          </p>
        </div>
      </div>

      {/* Main Content & Sidebar Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Editorial Narrative (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Presentation Essay */}
            <section className="bg-white rounded-xl p-6 sm:p-10 border border-[#1C2230]/10 shadow-xs">
              <h2 className="font-editorial text-2xl sm:text-3xl text-[#16283F] mb-6">
                {ui.destinationSoulKicker}
              </h2>
              <div className="prose prose-stone max-w-none text-[#1C2230]/85 text-base sm:text-lg leading-relaxed space-y-4">
                <p className="first-letter:text-5xl first-letter:font-editorial first-letter:font-medium first-letter:float-left first-letter:mr-3 first-letter:text-[#B8923B]">
                  {destination.description[currentLang]}
                </p>
              </div>
            </section>

            {/* Highlights Grid */}
            <section>
              <h2 className="font-editorial text-2xl sm:text-3xl text-[#16283F] mb-6">
                {t.highlights}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {destination.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl p-5 border border-[#1C2230]/10 shadow-xs hover:border-[#B8923B]/60 transition-colors"
                  >
                    <div className="text-[11px] uppercase tracking-wider font-semibold text-[#B8923B] mb-1">
                      {h.category}
                    </div>
                    <h3 className="font-editorial text-xl text-[#16283F] mb-2 font-medium">
                      {h.title[currentLang]}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#1C2230]/75 leading-relaxed">
                      {h.description[currentLang]}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Practical Logistics (Best time & How to get there) */}
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#FAF8F3] rounded-xl p-6 border border-[#1C2230]/10">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#16283F] mb-2">
                  <Calendar className="w-4 h-4 text-[#B8923B]" />
                  <span>{t.bestTime}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#1C2230]/80 leading-relaxed">
                  {destination.bestTimeToVisit[currentLang]}
                </p>
              </div>

              <div className="bg-[#FAF8F3] rounded-xl p-6 border border-[#1C2230]/10">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#16283F] mb-2">
                  <Compass className="w-4 h-4 text-[#B8923B]" />
                  <span>{t.howToGet}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#1C2230]/80 leading-relaxed">
                  {destination.howToGetThere[currentLang]}
                </p>
              </div>
            </section>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <section>
                <h2 className="font-editorial text-2xl sm:text-3xl text-[#16283F] mb-6">
                  {t.relatedArticles}
                </h2>
                <div className="space-y-4">
                  {relatedArticles.map((art) => (
                    <div
                      key={art.id}
                      onClick={() => onSelectArticle(art.slug)}
                      className="bg-white rounded-xl p-4 sm:p-5 border border-[#1C2230]/10 hover:border-[#B8923B]/60 transition-all flex flex-col sm:flex-row gap-4 items-center cursor-pointer group shadow-xs"
                    >
                      <img
                        src={art.coverImage}
                        alt={art.title[currentLang]}
                        className="w-full sm:w-32 h-24 object-cover rounded-lg shrink-0"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const el = e.currentTarget;
                          if (!el.src.endsWith('/images/hero_coast.jpg')) {
                            el.src = '/images/hero_coast.jpg';
                          }
                        }}
                      />
                      <div className="flex-1">
                        <span className="text-[11px] uppercase tracking-wider text-[#B8923B] font-semibold">
                          {art.category} · {art.readTimeMinutes} min
                        </span>
                        <h4 className="font-editorial text-lg text-[#16283F] group-hover:text-[#B8923B] transition-colors leading-snug mb-1">
                          {art.title[currentLang]}
                        </h4>
                        <p className="text-xs text-[#1C2230]/70 line-clamp-2">
                          {art.excerpt[currentLang]}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Sidebar: Cost Estimates & Partner Offers (4 cols) */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {/* Cost Overview Box */}
            <div className="bg-[#16283F] text-white rounded-xl p-6 sm:p-7 shadow-lg">
              <span className="text-xs uppercase tracking-widest text-[#B8923B] font-semibold block mb-1">
                {t.costsOverview}
              </span>
              <div className="font-editorial text-4xl font-medium text-white mb-1">
                R$ {destination.costProfile.dailyAverageBRL}
                <span className="text-xs font-normal text-white/60"> {ui.perDayPerson}</span>
              </div>
              <p className="text-[11px] text-white/70 mb-6 leading-relaxed">
                {t.disclaimerCost}
              </p>

              <div className="space-y-3 text-xs border-t border-white/10 pt-4 mb-6">
                <div className="flex justify-between items-center text-white/90">
                  <span className="flex items-center gap-1.5 text-white/70">
                    <Hotel className="w-3.5 h-3.5 text-[#B8923B]" />
                    {t.lodgingRange}:
                  </span>
                  <span className="font-mono font-medium">
                    R$ {destination.costProfile.lodgingRangeBRL[0]} - {destination.costProfile.lodgingRangeBRL[1]}
                  </span>
                </div>
                <div className="flex justify-between items-center text-white/90">
                  <span className="flex items-center gap-1.5 text-white/70">
                    <Utensils className="w-3.5 h-3.5 text-[#B8923B]" />
                    {t.diningRange}:
                  </span>
                  <span className="font-mono font-medium">
                    R$ {destination.costProfile.diningRangeBRL[0]} - {destination.costProfile.diningRangeBRL[1]}
                  </span>
                </div>
              </div>

              <button
                onClick={() => onOpenCalculator(destination.slug)}
                className="w-full py-3 bg-[#B8923B] hover:bg-[#B8923B]/90 text-[#16283F] font-semibold text-xs rounded-lg transition-colors cursor-pointer shadow-xs"
              >
                {ui.simulateCityBtn}
              </button>
            </div>

            {/* Verified Partner Offers */}
            {destOffers.length > 0 && (
              <div className="bg-white rounded-xl p-6 border border-[#1C2230]/15 shadow-xs">
                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#16283F] mb-4">
                  <ShieldCheck className="w-4 h-4 text-[#B8923B]" />
                  <span>{t.offersForYou}</span>
                </div>

                <div className="space-y-4">
                  {destOffers.map((off) => (
                    <div
                      key={off.id}
                      className="p-4 bg-[#FAF8F3] rounded-lg border border-[#1C2230]/10 hover:border-[#B8923B]/60 transition-colors"
                    >
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#16283F]/50 block mb-1">
                        {off.partnerName} · {ui.partnerLinkTag}
                      </span>
                      <h4 className="font-editorial text-base text-[#16283F] font-medium mb-1">
                        {off.title[currentLang]}
                      </h4>
                      <p className="text-xs text-[#1C2230]/70 mb-3">
                        {off.description[currentLang]}
                      </p>
                      {off.priceNote && (
                        <div className="text-xs font-mono font-medium text-[#16283F] mb-3">
                          {off.priceNote[currentLang]}
                        </div>
                      )}
                      <a
                        href={off.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#16283F] hover:text-[#B8923B] underline underline-offset-4"
                      >
                        <span>{ui.checkAvailability}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </article>
  );
};
