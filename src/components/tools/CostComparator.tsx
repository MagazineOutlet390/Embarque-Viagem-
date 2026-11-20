/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Scale, Check, ArrowRight, Info, TrendingUp, Sparkles, MapPin } from 'lucide-react';
import { Destination, Language } from '../../types';
import { translations } from '../../i18n/translations';

interface CostComparatorProps {
  destinations: Destination[];
  currentLang: Language;
  onSelectDestination: (slug: string) => void;
}

export const CostComparator: React.FC<CostComparatorProps> = ({
  destinations,
  currentLang,
  onSelectDestination,
}) => {
  const t = translations[currentLang].comparator;
  const ui = translations[currentLang].homeUi;

  // Pre-select 3 contrasting destinations by default: Bombinhas, Florianópolis, Búzios
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>([
    'bombinhas',
    'florianopolis',
    'buzios',
  ]);

  const toggleDestination = (slug: string) => {
    if (selectedSlugs.includes(slug)) {
      if (selectedSlugs.length > 1) {
        setSelectedSlugs(selectedSlugs.filter((s) => s !== slug));
      }
    } else {
      if (selectedSlugs.length < 3) {
        setSelectedSlugs([...selectedSlugs, slug]);
      } else {
        // Replace the last one
        setSelectedSlugs([selectedSlugs[0], selectedSlugs[1], slug]);
      }
    }
  };

  const selectedDests = destinations.filter((d) => selectedSlugs.includes(d.slug));

  return (
    <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl mb-10">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#B8923B] mb-2">
          <Scale className="w-4 h-4" />
          <span>{ui.financialAnalysisKicker}</span>
        </div>
        <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#16283F] tracking-tight mb-4">
          {t.title}
        </h1>
        <p className="text-base sm:text-lg text-[#1C2230]/75 leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      {/* Destination Picker Buttons */}
      <div className="mb-8 p-4 bg-white rounded-xl border border-[#1C2230]/15 shadow-xs">
        <span className="block text-xs font-semibold uppercase tracking-wider text-[#16283F] mb-3">
          {t.selectDestinations}
        </span>
        <div className="flex flex-wrap gap-2">
          {destinations.map((d) => {
            const isSelected = selectedSlugs.includes(d.slug);
            return (
              <button
                key={d.slug}
                onClick={() => toggleDestination(d.slug)}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg border transition-all flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-[#16283F] text-white border-[#16283F] shadow-xs'
                    : 'bg-[#FAF8F3] text-[#1C2230]/80 border-[#1C2230]/15 hover:border-[#1C2230]/30'
                }`}
              >
                <span>{d.name} ({d.state})</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-[#B8923B]" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {selectedDests.map((dest) => (
          <div
            key={dest.slug}
            className="bg-white rounded-xl border border-[#1C2230]/15 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            {/* Top destination header with image */}
            <div>
              <div className="relative aspect-16/9 overflow-hidden bg-neutral-100">
                <img
                  src={dest.heroImage}
                  alt={dest.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#FAF8F3]/90 text-[#16283F] text-[10px] font-semibold uppercase px-2 py-0.5 rounded">
                  {dest.state} · {dest.region}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-editorial text-2xl text-[#16283F] mb-1">{dest.name}</h3>
                <p className="text-xs text-[#1C2230]/70 line-clamp-2 mb-4">
                  {dest.tagline[currentLang]}
                </p>

                {/* Daily Cost Hero Metric */}
                <div className="p-4 bg-[#FAF8F3] rounded-lg border border-[#1C2230]/10 mb-6">
                  <span className="text-[11px] uppercase tracking-wider text-[#1C2230]/60 block mb-0.5">
                    {t.dailyPerPerson}
                  </span>
                  <div className="font-editorial text-3xl font-medium text-[#16283F]">
                    R$ {dest.costProfile.dailyAverageBRL}
                    <span className="text-xs font-normal text-[#1C2230]/60"> {ui.perDaySuffix}</span>
                  </div>
                </div>

                {/* Detailed Metrics Table */}
                <div className="space-y-3.5 text-xs">
                  <div className="flex justify-between items-center pb-2 border-b border-[#1C2230]/10">
                    <span className="text-[#1C2230]/70">{t.lodgingAverage}</span>
                    <span className="font-mono font-medium text-[#16283F]">
                      R$ {dest.costProfile.lodgingRangeBRL[0]} – {dest.costProfile.lodgingRangeBRL[1]}
                    </span>
                  </div>

                  <div className="flex justify-between items-center pb-2 border-b border-[#1C2230]/10">
                    <span className="text-[#1C2230]/70">{t.diningDaily}</span>
                    <span className="font-mono font-medium text-[#16283F]">
                      R$ {dest.costProfile.diningRangeBRL[0]} – {dest.costProfile.diningRangeBRL[1]}
                    </span>
                  </div>

                  <div className="flex justify-between items-center pb-2 border-b border-[#1C2230]/10">
                    <span className="text-[#1C2230]/70">{t.transportLocal}</span>
                    <span className="font-mono font-medium text-[#16283F]">
                      ~R$ {dest.costProfile.transportDailyBRL}{ui.perDaySuffix}
                    </span>
                  </div>

                  <div className="flex justify-between items-center pb-2 border-b border-[#1C2230]/10">
                    <span className="text-[#1C2230]/70">{t.toursAverage}</span>
                    <span className="font-mono font-medium text-[#16283F]">
                      ~R$ {dest.costProfile.toursDailyBRL}{ui.perDaySuffix}
                    </span>
                  </div>

                  <div className="pt-1">
                    <span className="text-[11px] uppercase tracking-wider text-[#1C2230]/50 block mb-1">
                      {t.seasonality}:
                    </span>
                    <p className="text-[11px] text-[#1C2230]/75 leading-relaxed line-clamp-3">
                      {dest.bestTimeToVisit[currentLang]}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* View Full Guide CTA */}
            <div className="p-6 pt-0">
              <button
                onClick={() => onSelectDestination(dest.slug)}
                className="w-full py-2.5 px-4 bg-[#16283F] text-white text-xs font-semibold rounded-lg hover:bg-[#16283F]/90 transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>{ui.viewFullGuidePrefix} {dest.name}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B8923B]" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Editorial Verdict & Transparency Reference */}
      <div className="bg-[#FAF8F3] rounded-xl p-6 sm:p-8 border border-[#1C2230]/15">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#16283F] mb-3">
          <Info className="w-4 h-4 text-[#B8923B]" />
          <span>{t.verdictTitle}</span>
        </div>
        <p className="text-xs sm:text-sm text-[#1C2230]/80 leading-relaxed mb-4">
          {ui.comparatorVerdictBody}
        </p>
        <span className="text-[11px] text-[#1C2230]/50 font-mono block">
          {t.referenceDate} {ui.comparatorSourcesNote}
        </span>
      </div>
    </section>
  );
};
