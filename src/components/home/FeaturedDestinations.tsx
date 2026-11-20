/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowUpRight, MapPin, Waves, DollarSign } from 'lucide-react';
import { Destination, Language } from '../../types';
import { translations } from '../../i18n/translations';

interface FeaturedDestinationsProps {
  destinations: Destination[];
  currentLang: Language;
  onSelectDestination: (slug: string) => void;
  searchFilter?: string;
}

export const FeaturedDestinations: React.FC<FeaturedDestinationsProps> = ({
  destinations,
  currentLang,
  onSelectDestination,
  searchFilter = '',
}) => {
  const [selectedRegion, setSelectedRegion] = useState<'all' | 'santa_catarina' | 'rio_de_janeiro'>('all');
  const t = translations[currentLang];

  const filtered = destinations.filter((dest) => {
    const matchesRegion = selectedRegion === 'all' || dest.priorityRegion === selectedRegion;
    if (!matchesRegion) return false;
    if (!searchFilter) return true;

    const term = searchFilter.toLowerCase();
    const nameMatch = dest.name.toLowerCase().includes(term);
    const stateMatch = dest.state.toLowerCase().includes(term);
    const taglineMatch = dest.tagline[currentLang]?.toLowerCase().includes(term);
    return nameMatch || stateMatch || taglineMatch;
  });

  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-[#1C2230]/10">
        <div>
          <span className="text-xs font-semibold tracking-widest uppercase text-[#B8923B] block mb-2">
            {t.homeUi.geographicCuratorship}
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#16283F] tracking-tight">
            {t.sections.curatedDestinations}
          </h2>
          <p className="text-sm sm:text-base text-[#1C2230]/70 mt-2 max-w-2xl">
            {t.sections.curatedSubtitle}
          </p>
        </div>

        {/* Region Segmented Filter */}
        <div className="flex items-center gap-1 p-1 bg-[#16283F]/5 rounded-lg shrink-0">
          <button
            onClick={() => setSelectedRegion('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
              selectedRegion === 'all'
                ? 'bg-white text-[#16283F] shadow-xs font-semibold'
                : 'text-[#1C2230]/70 hover:text-[#16283F]'
            }`}
          >
            {t.homeUi.allDestinationsChip}
          </button>
          <button
            onClick={() => setSelectedRegion('santa_catarina')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
              selectedRegion === 'santa_catarina'
                ? 'bg-white text-[#16283F] shadow-xs font-semibold'
                : 'text-[#1C2230]/70 hover:text-[#16283F]'
            }`}
          >
            Santa Catarina
          </button>
          <button
            onClick={() => setSelectedRegion('rio_de_janeiro')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
              selectedRegion === 'rio_de_janeiro'
                ? 'bg-white text-[#16283F] shadow-xs font-semibold'
                : 'text-[#1C2230]/70 hover:text-[#16283F]'
            }`}
          >
            Rio de Janeiro
          </button>
        </div>
      </div>

      {/* Grid of Destinations */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((dest) => (
          <article
            key={dest.id}
            onClick={() => onSelectDestination(dest.slug)}
            className="group cursor-pointer bg-white rounded-xl overflow-hidden border border-[#1C2230]/10 hover:border-[#B8923B]/60 transition-all duration-300 flex flex-col shadow-xs hover:shadow-md"
          >
            {/* Photographic Frame */}
            <div className="relative aspect-16/10 overflow-hidden bg-neutral-100">
              <img
                src={dest.heroImage}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const el = e.currentTarget;
                  if (!el.src.endsWith('/images/hero_coast.jpg')) {
                    el.src = '/images/hero_coast.jpg';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

              <div className="absolute top-3 left-3 bg-[#FAF8F3]/90 backdrop-blur-xs text-[#16283F] text-[11px] font-semibold px-2.5 py-1 rounded tracking-wider uppercase">
                {dest.state} · {dest.region}
              </div>

              <div className="absolute bottom-3 right-3 text-white/90 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded text-[11px] font-mono tabular-nums">
                {t.homeUi.perDayPrefix} {dest.costProfile.dailyAverageBRL}
                {t.homeUi.perDaySuffix}
              </div>
            </div>

            {/* Editorial Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-editorial text-2xl text-[#16283F] group-hover:text-[#B8923B] transition-colors">
                    {dest.name}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-[#1C2230]/40 group-hover:text-[#B8923B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </div>

                <p className="text-xs sm:text-sm text-[#1C2230]/75 line-clamp-2 leading-relaxed mb-4">
                  {dest.tagline[currentLang]}
                </p>
              </div>

              {/* Unboxed Metadata Footer */}
              <div className="pt-4 border-t border-[#1C2230]/10 flex items-center justify-between text-xs text-[#1C2230]/60">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#B8923B]" />
                  <span>{dest.country}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>{dest.highlights.length} vivências</span>
                  <span>·</span>
                  <span className="capitalize">{dest.costProfile.tier.replace('_', ' ')}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
