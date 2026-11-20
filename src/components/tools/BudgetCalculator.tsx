/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Calculator, Users, Calendar, Hotel, Utensils, Compass, DollarSign, RefreshCw, AlertCircle, Sparkles } from 'lucide-react';
import { Destination, Language } from '../../types';
import { translations } from '../../i18n/translations';

interface BudgetCalculatorProps {
  destinations: Destination[];
  currentLang: Language;
  preselectedSlug?: string;
  onNavigateToRoute?: () => void;
}

export const BudgetCalculator: React.FC<BudgetCalculatorProps> = ({
  destinations,
  currentLang,
  preselectedSlug,
  onNavigateToRoute,
}) => {
  const t = translations[currentLang].calculator;
  const ui = translations[currentLang].homeUi;
  const locale = currentLang === 'en' ? 'en-US' : currentLang === 'es' ? 'es-419' : 'pt-BR';

  const defaultDestination = useMemo(() => {
    return (
      destinations.find((d) => d.slug === preselectedSlug) ||
      destinations.find((d) => d.slug === 'bombinhas') ||
      destinations[0]
    );
  }, [destinations, preselectedSlug]);

  const [selectedSlug, setSelectedSlug] = useState<string>(defaultDestination.slug);
  const [numTravelers, setNumTravelers] = useState<number>(2);
  const [numDays, setNumDays] = useState<number>(5);
  const [lodgingTier, setLodgingTier] = useState<'economy' | 'comfort' | 'luxury'>('comfort');
  const [diningTier, setDiningTier] = useState<'casual' | 'foodie'>('casual');
  const [customTransport, setCustomTransport] = useState<number>(400); // total transit
  const [includeTours, setIncludeTours] = useState<boolean>(true);
  const [extraBufferPercent, setExtraBufferPercent] = useState<number>(10); // 10%

  const currentDest = useMemo(() => {
    return destinations.find((d) => d.slug === selectedSlug) || defaultDestination;
  }, [destinations, selectedSlug, defaultDestination]);

  // Dynamic calculations based on realistic regional benchmarks
  const budget = useMemo(() => {
    const profile = currentDest.costProfile;

    // Lodging per night
    let lodgingNight = 0;
    if (lodgingTier === 'economy') {
      lodgingNight = profile.lodgingRangeBRL[0];
    } else if (lodgingTier === 'comfort') {
      lodgingNight = Math.round((profile.lodgingRangeBRL[0] + profile.lodgingRangeBRL[1]) / 2);
    } else {
      lodgingNight = profile.lodgingRangeBRL[1];
    }
    // Room count: roughly 1 room per 2 travelers
    const roomsCount = Math.ceil(numTravelers / 2);
    const totalLodging = lodgingNight * (numDays - 1 > 0 ? numDays - 1 : 1) * roomsCount;

    // Dining daily per person
    const diningDailyPerson =
      diningTier === 'casual' ? profile.diningRangeBRL[0] : profile.diningRangeBRL[1];
    const totalDining = diningDailyPerson * numDays * numTravelers;

    // Tours daily per person
    const toursDailyPerson = includeTours ? profile.toursDailyBRL : 0;
    const totalTours = toursDailyPerson * numDays * numTravelers;

    // Transport (per party or person)
    const totalTransport = customTransport * numTravelers;

    // Subtotal before extra cushion
    const subtotal = totalLodging + totalDining + totalTours + totalTransport;
    const totalExtras = Math.round(subtotal * (extraBufferPercent / 100));
    const grandTotal = subtotal + totalExtras;

    const perPerson = Math.round(grandTotal / (numTravelers || 1));
    const perDayPerPerson = Math.round(perPerson / (numDays || 1));

    // Percent distribution
    const pctLodging = Math.round((totalLodging / grandTotal) * 100);
    const pctDining = Math.round((totalDining / grandTotal) * 100);
    const pctTransport = Math.round((totalTransport / grandTotal) * 100);
    const pctTours = Math.round((totalTours / grandTotal) * 100);
    const pctExtras = 100 - (pctLodging + pctDining + pctTransport + pctTours);

    return {
      totalLodging,
      totalDining,
      totalTransport,
      totalTours,
      totalExtras,
      grandTotal,
      perPerson,
      perDayPerPerson,
      percentages: {
        lodging: pctLodging,
        dining: pctDining,
        transport: pctTransport,
        tours: pctTours,
        extras: pctExtras,
      },
    };
  }, [currentDest, numTravelers, numDays, lodgingTier, diningTier, customTransport, includeTours, extraBufferPercent]);

  return (
    <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title & Editorial Deck */}
      <div className="max-w-3xl mb-10">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#B8923B] mb-2">
          <Calculator className="w-4 h-4" />
          <span>{ui.budgetToolKicker}</span>
        </div>
        <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#16283F] tracking-tight mb-4">
          {t.title}
        </h1>
        <p className="text-base sm:text-lg text-[#1C2230]/75 leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Inputs Card (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-xl p-6 sm:p-8 border border-[#1C2230]/15 shadow-xs space-y-6">
          {/* Destination Selector */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#16283F] mb-2">
              {t.destinationLabel}
            </label>
            <select
              value={selectedSlug}
              onChange={(e) => setSelectedSlug(e.target.value)}
              className="w-full px-4 py-3 bg-[#FAF8F3] border border-[#1C2230]/20 rounded-lg text-sm text-[#16283F] font-medium focus:border-[#B8923B] focus:outline-none cursor-pointer"
            >
              {destinations.map((d) => (
                <option key={d.slug} value={d.slug}>
                  {d.name} ({d.state} · {d.region}) — {ui.budgetMeanPrefix} R$ {d.costProfile.dailyAverageBRL}{ui.perDaySuffix}
                </option>
              ))}
            </select>
          </div>

          {/* Travelers & Duration Sliders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#16283F] flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#B8923B]" />
                  {t.travelersLabel}
                </label>
                <span className="text-sm font-semibold font-mono text-[#16283F]">{numTravelers} {ui.peopleUnit}</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={numTravelers}
                onChange={(e) => setNumTravelers(parseInt(e.target.value))}
                className="w-full accent-[#B8923B] cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#16283F] flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#B8923B]" />
                  {t.daysLabel}
                </label>
                <span className="text-sm font-semibold font-mono text-[#16283F]">{numDays} {ui.daysUnit}</span>
              </div>
              <input
                type="range"
                min="2"
                max="30"
                value={numDays}
                onChange={(e) => setNumDays(parseInt(e.target.value))}
                className="w-full accent-[#B8923B] cursor-pointer"
              />
            </div>
          </div>

          {/* Lodging Tier Selection */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#16283F] mb-2 flex items-center gap-1.5">
              <Hotel className="w-3.5 h-3.5 text-[#B8923B]" />
              {t.lodgingTierLabel}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: 'economy', label: ui.tierEconomy, note: `R$ ${currentDest.costProfile.lodgingRangeBRL[0]}${ui.perNightSuffix}` },
                {
                  id: 'comfort',
                  label: ui.tierComfort,
                  note: `R$ ${Math.round(
                    (currentDest.costProfile.lodgingRangeBRL[0] + currentDest.costProfile.lodgingRangeBRL[1]) / 2
                  )}${ui.perNightSuffix}`,
                },
                { id: 'luxury', label: ui.tierLuxury, note: `R$ ${currentDest.costProfile.lodgingRangeBRL[1]}${ui.perNightSuffix}` },
              ].map((tier) => (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => setLodgingTier(tier.id as any)}
                  className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                    lodgingTier === tier.id
                      ? 'border-[#16283F] bg-[#16283F] text-white shadow-xs'
                      : 'border-[#1C2230]/15 bg-[#FAF8F3] text-[#1C2230]/80 hover:border-[#1C2230]/30'
                  }`}
                >
                  <div className="text-xs font-semibold">{tier.label}</div>
                  <div className={`text-[11px] font-mono mt-0.5 ${lodgingTier === tier.id ? 'text-[#B8923B]' : 'text-[#1C2230]/60'}`}>
                    {tier.note}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Dining Style & Foodie Choice */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#16283F] mb-2 flex items-center gap-1.5">
              <Utensils className="w-3.5 h-3.5 text-[#B8923B]" />
              {t.diningTierLabel}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setDiningTier('casual')}
                className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                  diningTier === 'casual'
                    ? 'border-[#16283F] bg-[#16283F] text-white shadow-xs'
                    : 'border-[#1C2230]/15 bg-[#FAF8F3] text-[#1C2230]/80 hover:border-[#1C2230]/30'
                }`}
              >
                <div className="text-xs font-semibold">{t.diningCasual}</div>
                <div className={`text-[11px] font-mono mt-0.5 ${diningTier === 'casual' ? 'text-[#B8923B]' : 'text-[#1C2230]/60'}`}>
                  {ui.budgetMeanPrefix} R$ {currentDest.costProfile.diningRangeBRL[0]}{ui.perPersonDay}
                </div>
              </button>

              <button
                type="button"
                onClick={() => setDiningTier('foodie')}
                className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                  diningTier === 'foodie'
                    ? 'border-[#16283F] bg-[#16283F] text-white shadow-xs'
                    : 'border-[#1C2230]/15 bg-[#FAF8F3] text-[#1C2230]/80 hover:border-[#1C2230]/30'
                }`}
              >
                <div className="text-xs font-semibold">{t.diningFoodie}</div>
                <div className={`text-[11px] font-mono mt-0.5 ${diningTier === 'foodie' ? 'text-[#B8923B]' : 'text-[#1C2230]/60'}`}>
                  {ui.budgetMeanPrefix} R$ {currentDest.costProfile.diningRangeBRL[1]}{ui.perPersonDay}
                </div>
              </button>
            </div>
          </div>

          {/* Transport Estimate per traveler */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#16283F]">
                {t.transportLabel} {ui.transportHint}
              </label>
              <span className="text-sm font-mono font-semibold text-[#16283F]">R$ {customTransport}</span>
            </div>
            <input
              type="range"
              min="100"
              max="2500"
              step="50"
              value={customTransport}
              onChange={(e) => setCustomTransport(parseInt(e.target.value))}
              className="w-full accent-[#B8923B] cursor-pointer"
            />
          </div>

          {/* Tours toggle */}
          <div className="pt-2 flex items-center justify-between border-t border-[#1C2230]/10">
            <div>
              <div className="text-xs font-semibold text-[#16283F] uppercase tracking-wider">
                {t.toursLabel}
              </div>
              <div className="text-[11px] text-[#1C2230]/60">
                {ui.toursDescPrefix} (R$ {currentDest.costProfile.toursDailyBRL}{ui.perDaySuffix})
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIncludeTours(!includeTours)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                includeTours ? 'bg-[#16283F] text-white' : 'bg-[#1C2230]/10 text-[#1C2230]/60'
              }`}
            >
              {includeTours ? ui.includedBtn : ui.notIncludedBtn}
            </button>
          </div>
        </div>

        {/* Right Summary Card (5 cols) */}
        <div className="lg:col-span-5 bg-[#16283F] text-white rounded-xl p-6 sm:p-8 shadow-xl sticky top-28">
          <div className="text-xs uppercase tracking-widest text-[#B8923B] font-semibold mb-2">
            {t.summaryTitle}
          </div>

          <div className="mb-6 pb-6 border-b border-white/15">
            <span className="text-xs text-white/70 block mb-1">{t.totalCost}</span>
            <div className="font-editorial text-4xl sm:text-5xl font-medium tracking-tight text-white mb-2">
              R$ {budget.grandTotal.toLocaleString(locale)}
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2 text-xs text-white/80">
              <div>
                <span className="text-white/50 block">{t.perPerson}</span>
                <span className="text-base font-semibold font-mono text-[#B8923B]">
                  R$ {budget.perPerson.toLocaleString(locale)}
                </span>
              </div>
              <div>
                <span className="text-white/50 block">{t.perDay}</span>
                <span className="text-base font-semibold font-mono text-[#B8923B]">
                  R$ {budget.perDayPerPerson.toLocaleString(locale)}
                </span>
              </div>
            </div>
          </div>

          {/* Visual Percentage Distribution Bar */}
          <div className="mb-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
              {t.breakdown}
            </div>
            <div className="h-3 w-full rounded-full overflow-hidden flex bg-white/10 mb-3">
              <div
                style={{ width: `${budget.percentages.lodging}%` }}
                className="bg-[#B8923B]"
                title={`${t.lodging}: ${budget.percentages.lodging}%`}
              />
              <div
                style={{ width: `${budget.percentages.dining}%` }}
                className="bg-emerald-500"
                title={`${t.dining}: ${budget.percentages.dining}%`}
              />
              <div
                style={{ width: `${budget.percentages.transport}%` }}
                className="bg-sky-400"
                title={`${t.transport}: ${budget.percentages.transport}%`}
              />
              <div
                style={{ width: `${budget.percentages.tours}%` }}
                className="bg-amber-400"
                title={`${t.tours}: ${budget.percentages.tours}%`}
              />
              <div
                style={{ width: `${budget.percentages.extras}%` }}
                className="bg-purple-400"
                title={`${t.extras}: ${budget.percentages.extras}%`}
              />
            </div>

            {/* List breakdown */}
            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center text-white/90">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#B8923B]" />
                  {t.lodging} ({budget.percentages.lodging}%)
                </span>
                <span className="font-mono tabular-nums">R$ {budget.totalLodging.toLocaleString(locale)}</span>
              </div>
              <div className="flex justify-between items-center text-white/90">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  {t.dining} ({budget.percentages.dining}%)
                </span>
                <span className="font-mono tabular-nums">R$ {budget.totalDining.toLocaleString(locale)}</span>
              </div>
              <div className="flex justify-between items-center text-white/90">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-sky-400" />
                  {t.transport} ({budget.percentages.transport}%)
                </span>
                <span className="font-mono tabular-nums">R$ {budget.totalTransport.toLocaleString(locale)}</span>
              </div>
              {includeTours && (
                <div className="flex justify-between items-center text-white/90">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    {t.tours} ({budget.percentages.tours}%)
                  </span>
                  <span className="font-mono tabular-nums">R$ {budget.totalTours.toLocaleString(locale)}</span>
                </div>
              )}
              <div className="flex justify-between items-center text-white/90">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                  {t.extras} ({budget.percentages.extras}%)
                </span>
                <span className="font-mono tabular-nums">R$ {budget.totalExtras.toLocaleString(locale)}</span>
              </div>
            </div>
          </div>

          {/* Transparent Disclaimer Box */}
          <div className="p-3 bg-white/5 border border-white/10 rounded-lg text-[11px] text-white/70 leading-relaxed flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-[#B8923B] shrink-0 mt-0.5" />
            <p>{t.disclaimer}</p>
          </div>
        </div>
      </div>

      {/* Reciprocal Cross-link to Route Calculator */}
      {onNavigateToRoute && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="p-6 sm:p-8 bg-white rounded-2xl border border-[#1C2230]/10 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider text-[#B8923B] font-semibold block">
                {ui.routeCtaKicker}
              </span>
              <h3 className="font-editorial text-xl sm:text-2xl text-[#16283F]">
                {ui.routeCtaTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#1C2230]/70 max-w-xl">
                {ui.routeCtaDesc}
              </p>
            </div>
            <button
              type="button"
              onClick={onNavigateToRoute}
              className="px-6 py-3 bg-[#16283F] text-white text-xs font-semibold rounded-lg hover:bg-[#16283F]/90 transition-colors shadow-xs shrink-0 cursor-pointer"
            >
              {ui.openRouteCalcBtn}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
