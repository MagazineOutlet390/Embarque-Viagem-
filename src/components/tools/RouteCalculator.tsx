/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Navigation,
  Fuel,
  Users,
  MapPin,
  Plus,
  Trash2,
  ExternalLink,
  Info,
  ArrowRight,
  RotateCcw,
  Sparkles,
  DollarSign,
  Clock,
  Car,
  Layers,
  Calculator,
} from 'lucide-react';
import { Language } from '../../types';
import { translations } from '../../i18n/translations';
import {
  RouteCalculationResult,
  calculateTrip,
  POPULAR_ROUTE_PRESETS,
} from '../../lib/routeService';

interface RouteCalculatorProps {
  currentLang: Language;
  onNavigateToBudget?: () => void;
  initialOrigin?: string;
  initialDestination?: string;
}

export const RouteCalculator: React.FC<RouteCalculatorProps> = ({
  currentLang,
  onNavigateToBudget,
  initialOrigin = 'São Paulo, SP',
  initialDestination = 'Florianópolis, SC',
}) => {
  const t = translations[currentLang];
  const rc = t.routeCalculator;
  const ui = t.homeUi;
  const locale = currentLang === 'en' ? 'en-US' : currentLang === 'es' ? 'es-419' : 'pt-BR';

  // Form states
  const [origin, setOrigin] = useState(initialOrigin);
  const [destination, setDestination] = useState(initialDestination);
  const [waypoints, setWaypoints] = useState<string[]>([]);
  const [isRoundTrip, setIsRoundTrip] = useState(true);

  // Fuel configuration
  const [fuelType, setFuelType] = useState<'gasoline' | 'ethanol' | 'diesel'>('gasoline');
  const [pricePerLiter, setPricePerLiter] = useState<number>(6.19);
  const [consumptionKmPerLiter, setConsumptionKmPerLiter] = useState<number>(11.5);
  const [isDetailedConsumption, setIsDetailedConsumption] = useState(false);
  const [roadConsumption, setRoadConsumption] = useState<number>(13.5);
  const [cityConsumption, setCityConsumption] = useState<number>(9.5);

  // Passengers & Tolls
  const [passengers, setPassengers] = useState<number>(2);
  const [manualToll, setManualToll] = useState<string>('');
  const [useManualToll, setUseManualToll] = useState(false);

  // Result & Calculation states
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<RouteCalculationResult | null>(null);

  // Update fuel price default when fuel type changes
  const handleFuelTypeChange = (type: 'gasoline' | 'ethanol' | 'diesel') => {
    setFuelType(type);
    if (type === 'gasoline') setPricePerLiter(6.19);
    else if (type === 'ethanol') setPricePerLiter(4.09);
    else if (type === 'diesel') setPricePerLiter(6.25);
  };

  // Compute effective consumption if detailed mode is on (80% road, 20% city for roadtrips)
  const effectiveConsumption = isDetailedConsumption
    ? Math.round((roadConsumption * 0.8 + cityConsumption * 0.2) * 10) / 10
    : consumptionKmPerLiter;

  // Run calculation
  const runCalculation = async () => {
    if (!origin.trim() || !destination.trim()) return;

    setIsCalculating(true);
    try {
      const parsedManualToll = useManualToll && manualToll !== '' ? parseFloat(manualToll) : undefined;
      const res = await calculateTrip({
        origin: origin.trim(),
        destination: destination.trim(),
        waypoints: waypoints.filter((w) => w.trim().length > 0),
        isRoundTrip,
        fuelType,
        fuelPrice: pricePerLiter,
        consumptionKmPerLiter: effectiveConsumption,
        passengers,
        manualToll: parsedManualToll,
      });
      setResult(res);
    } catch (err) {
      console.error('Calculation error:', err);
    } finally {
      setIsCalculating(false);
    }
  };

  // Initial calculation on mount
  useEffect(() => {
    runCalculation();
  }, []);

  // Handlers for intermediate waypoints
  const addWaypoint = () => {
    if (waypoints.length < 5) {
      setWaypoints([...waypoints, '']);
    }
  };

  const updateWaypoint = (index: number, value: string) => {
    const updated = [...waypoints];
    updated[index] = value;
    setWaypoints(updated);
  };

  const removeWaypoint = (index: number) => {
    setWaypoints(waypoints.filter((_, i) => i !== index));
  };

  const loadPreset = (preset: typeof POPULAR_ROUTE_PRESETS[0]) => {
    setOrigin(preset.origin);
    setDestination(preset.destination);
    setWaypoints([]);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <div className="py-10 lg:py-16 bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title Section */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B8923B] font-semibold mb-3">
            <Navigation className="w-4 h-4" />
            <span>{ui.routeKicker}</span>
          </div>
          <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#16283F] tracking-tight leading-tight mb-4">
            {rc.title}
          </h1>
          <p className="text-base sm:text-lg text-[#1C2230]/75 leading-relaxed">
            {rc.subtitle}
          </p>
        </div>

        {/* Main Grid: Form Left, Results Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Inputs & Parameters Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Itinerary & Waypoints Card */}
            <div className="p-6 sm:p-8 bg-white rounded-2xl border border-[#1C2230]/10 shadow-xs space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-[#16283F] flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#B8923B]" />
                  <span>{ui.routeStep1}</span>
                </h2>

                {/* Trip Type Toggle (Ida vs Ida e Volta) */}
                <div className="inline-flex rounded-lg border border-[#1C2230]/15 p-0.5 bg-[#FAF8F3]">
                  <button
                    type="button"
                    onClick={() => setIsRoundTrip(false)}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-all cursor-pointer ${
                      !isRoundTrip
                        ? 'bg-[#16283F] text-white shadow-xs'
                        : 'text-[#1C2230]/70 hover:text-[#16283F]'
                    }`}
                  >
                    {rc.oneWay}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsRoundTrip(true)}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-all cursor-pointer ${
                      isRoundTrip
                        ? 'bg-[#16283F] text-white shadow-xs'
                        : 'text-[#1C2230]/70 hover:text-[#16283F]'
                    }`}
                  >
                    {rc.roundTrip}
                  </button>
                </div>
              </div>

              {/* Origin */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C2230]/70 mb-1.5">
                  {rc.originLabel}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    placeholder={rc.originPlaceholder}
                    className="w-full px-4 py-3 bg-[#FAF8F3]/50 border border-[#1C2230]/15 rounded-lg text-sm text-[#1C2230] placeholder-[#1C2230]/40 focus:bg-white focus:border-[#B8923B] focus:ring-1 focus:ring-[#B8923B] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Waypoints List */}
              {waypoints.map((wp, idx) => (
                <div key={idx} className="relative flex items-center gap-2 pl-4 border-l-2 border-[#B8923B]/40">
                  <div className="flex-1">
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-[#1C2230]/60 mb-1">
                      {rc.stopLabel} #{idx + 1}
                    </label>
                    <input
                      type="text"
                      value={wp}
                      onChange={(e) => updateWaypoint(idx, e.target.value)}
                      placeholder={rc.stopPlaceholder}
                      className="w-full px-3 py-2 bg-[#FAF8F3]/50 border border-[#1C2230]/15 rounded-md text-xs text-[#1C2230] focus:bg-white focus:border-[#B8923B] focus:outline-none"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => removeWaypoint(idx)}
                    title={rc.removeStop}
                    className="p-2 text-red-500/70 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors cursor-pointer self-end mb-0.5"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}

              {/* Add Waypoint Button */}
              {waypoints.length < 4 && (
                <button
                  type="button"
                  onClick={addWaypoint}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#B8923B] hover:text-[#96742a] transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{rc.addStop}</span>
                </button>
              )}

              {/* Destination */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C2230]/70 mb-1.5">
                  {rc.destinationLabel}
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder={rc.destinationPlaceholder}
                    className="w-full px-4 py-3 bg-[#FAF8F3]/50 border border-[#1C2230]/15 rounded-lg text-sm text-[#1C2230] placeholder-[#1C2230]/40 focus:bg-white focus:border-[#B8923B] focus:ring-1 focus:ring-[#B8923B] focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Vehicle & Fuel Card */}
            <div className="p-6 sm:p-8 bg-white rounded-2xl border border-[#1C2230]/10 shadow-xs space-y-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-[#16283F] pb-4 border-b border-gray-100 flex items-center gap-2">
                <Fuel className="w-4 h-4 text-[#B8923B]" />
                <span>{ui.routeStep2}</span>
              </h2>

              {/* Fuel Type Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C2230]/70 mb-2">
                  {rc.fuelTypeLabel}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'gasoline', label: rc.fuelGasoline, defaultPrice: 6.19 },
                    { id: 'ethanol', label: rc.fuelEthanol, defaultPrice: 4.09 },
                    { id: 'diesel', label: rc.fuelDiesel, defaultPrice: 6.25 },
                  ].map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => handleFuelTypeChange(f.id as any)}
                      className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                        fuelType === f.id
                          ? 'border-[#B8923B] bg-[#B8923B]/5 ring-1 ring-[#B8923B]'
                          : 'border-[#1C2230]/15 hover:border-[#1C2230]/30 bg-white'
                      }`}
                    >
                      <div className="text-xs font-semibold text-[#16283F]">{f.label}</div>
                      <div className="text-[11px] text-[#1C2230]/60 mt-0.5">R$ {f.defaultPrice.toFixed(2)}/L</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price per Liter Input */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C2230]/70 mb-1.5">
                    {rc.pricePerLiter}
                  </label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3 text-xs text-[#1C2230]/50 font-medium">R$</span>
                    <input
                      type="number"
                      step="0.01"
                      min="1"
                      value={pricePerLiter}
                      onChange={(e) => setPricePerLiter(parseFloat(e.target.value) || 0)}
                      className="w-full pl-9 pr-4 py-2.5 bg-[#FAF8F3]/50 border border-[#1C2230]/15 rounded-lg text-sm text-[#1C2230] focus:bg-white focus:border-[#B8923B] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Consumption km/l */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C2230]/70">
                      {rc.consumptionLabel}
                    </label>
                    <button
                      type="button"
                      onClick={() => setIsDetailedConsumption(!isDetailedConsumption)}
                      className="text-[11px] text-[#B8923B] hover:underline cursor-pointer"
                    >
                      {isDetailedConsumption ? ui.useSingleAvg : ui.splitRoadCity}
                    </button>
                  </div>

                  {!isDetailedConsumption ? (
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        step="0.5"
                        min="3"
                        max="35"
                        value={consumptionKmPerLiter}
                        onChange={(e) => setConsumptionKmPerLiter(parseFloat(e.target.value) || 1)}
                        className="w-full px-4 py-2.5 bg-[#FAF8F3]/50 border border-[#1C2230]/15 rounded-lg text-sm text-[#1C2230] focus:bg-white focus:border-[#B8923B] focus:outline-none"
                      />
                      <span className="text-xs text-[#1C2230]/60 shrink-0">km/L</span>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <span className="text-[10px] text-[#1C2230]/60 block">{rc.roadConsumption}</span>
                        <input
                          type="number"
                          step="0.5"
                          value={roadConsumption}
                          onChange={(e) => setRoadConsumption(parseFloat(e.target.value) || 1)}
                          className="w-full px-2 py-1.5 bg-[#FAF8F3]/50 border border-[#1C2230]/15 rounded-md text-xs text-[#1C2230]"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] text-[#1C2230]/60 block">{rc.cityConsumption}</span>
                        <input
                          type="number"
                          step="0.5"
                          value={cityConsumption}
                          onChange={(e) => setCityConsumption(parseFloat(e.target.value) || 1)}
                          className="w-full px-2 py-1.5 bg-[#FAF8F3]/50 border border-[#1C2230]/15 rounded-md text-xs text-[#1C2230]"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Quick Car Consumption Presets */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-[11px] text-[#1C2230]/60">{ui.commonPresets}</span>
                {[
                  { label: 'Compacto 1.0 (13 km/l)', val: 13 },
                  { label: 'Sedan/SUV 1.4T (11.5 km/l)', val: 11.5 },
                  { label: 'SUV 2.0 (9 km/l)', val: 9 },
                  { label: 'Hybrid (17 km/l)', val: 17 },
                ].map((p) => (
                  <button
                    key={p.val}
                    type="button"
                    onClick={() => {
                      setConsumptionKmPerLiter(p.val);
                      setIsDetailedConsumption(false);
                    }}
                    className="px-2 py-1 bg-[#FAF8F3] hover:bg-[#B8923B]/10 text-[#16283F] text-[11px] font-medium rounded border border-[#1C2230]/10 transition-colors cursor-pointer"
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Passengers & Tolls Card */}
            <div className="p-6 sm:p-8 bg-white rounded-2xl border border-[#1C2230]/10 shadow-xs space-y-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-[#16283F] pb-4 border-b border-gray-100 flex items-center gap-2">
                <Users className="w-4 h-4 text-[#B8923B]" />
                <span>{ui.routeStep3}</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Passengers */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C2230]/70 mb-1.5">
                    {rc.passengersLabel}
                  </label>
                  <div className="flex items-center gap-3">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setPassengers(num)}
                        className={`w-10 h-10 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                          passengers === num
                            ? 'bg-[#16283F] text-white border-[#16283F]'
                            : 'bg-white border-[#1C2230]/15 text-[#1C2230]/80 hover:border-[#B8923B]'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                  <span className="text-[11px] text-[#1C2230]/60 mt-1.5 block">
                    {rc.passengersHint}
                  </span>
                </div>

                {/* Tolls Mode */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#1C2230]/70">
                      {rc.tollsLabel}
                    </label>
                    <button
                      type="button"
                      onClick={() => setUseManualToll(!useManualToll)}
                      className="text-[11px] text-[#B8923B] hover:underline cursor-pointer"
                    >
                      {useManualToll ? ui.useAutoToll : ui.enterFixedToll}
                    </button>
                  </div>

                  {useManualToll ? (
                    <div className="relative flex items-center">
                      <span className="absolute left-3 text-xs text-[#1C2230]/50 font-medium">R$</span>
                      <input
                        type="number"
                        step="0.50"
                        min="0"
                        value={manualToll}
                        onChange={(e) => setManualToll(e.target.value)}
                        placeholder={ui.tollPlaceholder}
                        className="w-full pl-9 pr-4 py-2 bg-[#FAF8F3]/50 border border-[#1C2230]/15 rounded-lg text-sm text-[#1C2230] focus:bg-white focus:border-[#B8923B] focus:outline-none"
                      />
                    </div>
                  ) : (
                    <div className="p-2.5 bg-[#FAF8F3] border border-[#1C2230]/10 rounded-lg text-xs text-[#1C2230]/70">
                      {ui.autoTollNote}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Calculate Button */}
            <button
              type="button"
              onClick={runCalculation}
              disabled={isCalculating}
              className="w-full py-4 bg-[#16283F] hover:bg-[#16283F]/90 text-white font-semibold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isCalculating ? (
                <span>{rc.calculating}</span>
              ) : (
                <>
                  <Car className="w-4 h-4 text-[#B8923B]" />
                  <span>{rc.calculateBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

          {/* RIGHT: Calculation Results & Breakdown Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {result ? (
              <div className="p-6 sm:p-8 bg-white rounded-2xl border border-[#1C2230]/15 shadow-md space-y-6 sticky top-24">
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#B8923B] block">
                      {ui.consolidatedResult}
                    </span>
                    <h3 className="font-editorial text-2xl text-[#16283F]">
                      {rc.resultsTitle}
                    </h3>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-[#FAF8F3] text-[#16283F] font-semibold rounded-md border border-[#1C2230]/10">
                    {result.isRoundTrip ? rc.roundTrip : rc.oneWay}
                  </span>
                </div>

                {/* Big Total Cost Highlight */}
                <div className="p-6 bg-gradient-to-br from-[#16283F] to-[#1e3450] text-white rounded-xl shadow-inner space-y-3">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs uppercase tracking-wider text-white/70">
                      {rc.totalTripCost}
                    </span>
                    <span className="font-editorial text-3xl sm:text-4xl text-[#B8923B] font-bold">
                      R$ {result.totalCost.toLocaleString(locale, { minimumFractionDigits: 2 })}
                    </span>
                  </div>

                  {passengers > 1 && (
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/90">
                      <span className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#B8923B]" />
                        <span>{rc.costPerPassenger} ({passengers} {ui.peopleUnit}):</span>
                      </span>
                      <span className="font-semibold text-white text-sm">
                        R$ {result.costPerPassenger.toLocaleString(locale, { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                  )}
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-[#FAF8F3] rounded-xl border border-[#1C2230]/10">
                    <div className="flex items-center gap-1.5 text-xs text-[#1C2230]/60 mb-1">
                      <Navigation className="w-3.5 h-3.5 text-[#B8923B]" />
                      <span>{rc.totalDistance}</span>
                    </div>
                    <div className="text-xl font-bold text-[#16283F]">
                      {result.distanceKm.toLocaleString(locale)} km
                    </div>
                  </div>

                  <div className="p-4 bg-[#FAF8F3] rounded-xl border border-[#1C2230]/10">
                    <div className="flex items-center gap-1.5 text-xs text-[#1C2230]/60 mb-1">
                      <Clock className="w-3.5 h-3.5 text-[#B8923B]" />
                      <span>{rc.estimatedDuration}</span>
                    </div>
                    <div className="text-xl font-bold text-[#16283F]">
                      {result.durationFormatted}
                    </div>
                  </div>
                </div>

                {/* Expense Breakdown List */}
                <div className="space-y-3 pt-2 border-t border-gray-100">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1C2230]/70">
                    {ui.costBreakdown}
                  </h4>

                  <div className="flex items-center justify-between text-sm py-1.5 border-b border-gray-50">
                    <div className="flex items-center gap-2 text-[#1C2230]/80">
                      <Fuel className="w-4 h-4 text-[#B8923B]" />
                      <span>{ui.fuelLabel} ({result.fuelRequiredLiters} L)</span>
                    </div>
                    <span className="font-semibold text-[#16283F]">
                      R$ {result.fuelCost.toLocaleString(locale, { minimumFractionDigits: 2 })}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm py-1.5 border-b border-gray-50">
                    <div className="flex items-center gap-2 text-[#1C2230]/80">
                      <Layers className="w-4 h-4 text-[#B8923B]" />
                      <span>
                        {ui.tollsShort}{' '}
                        {result.tollDetails && result.tollDetails.plazaCount > 0
                          ? `(~${result.tollDetails.plazaCount} ${ui.plazasUnit})`
                          : ''}
                      </span>
                    </div>
                    <span className="font-semibold text-[#16283F]">
                      R$ {result.tollCost.toLocaleString(locale, { minimumFractionDigits: 2 })}
                    </span>
                  </div>

                  {result.tollDetails?.highway && (
                    <div className="text-[11px] text-[#1C2230]/60 pt-1">
                      {ui.mainHighways} <span className="font-medium text-[#16283F]">{result.tollDetails.highway}</span>
                    </div>
                  )}
                </div>

                {/* Google Maps Real Integration Button */}
                <div className="pt-2">
                  <a
                    href={result.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 bg-white border border-[#1C2230]/20 hover:border-[#B8923B] text-[#16283F] hover:text-[#B8923B] text-xs font-semibold rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <span>{rc.openInMaps}</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                  <p className="text-[11px] text-center text-[#1C2230]/50 mt-1.5">
                    {rc.mapsNote}
                  </p>
                </div>

                {/* Disclaimer */}
                <div className="p-3 bg-[#FAF8F3] rounded-lg text-[11px] text-[#1C2230]/60 leading-relaxed border border-[#1C2230]/5">
                  <span className="font-semibold text-[#16283F]">{ui.editorialNotePrefix}</span> {rc.disclaimer}
                </div>
              </div>
            ) : (
              <div className="p-8 bg-white rounded-2xl border border-[#1C2230]/10 text-center text-[#1C2230]/60">
                {ui.fillRoutePrompt}
              </div>
            )}
          </div>
        </div>

        {/* Popular Route Presets Section */}
        <div className="mt-16 pt-12 border-t border-[#1C2230]/10">
          <div className="max-w-2xl mb-8">
            <span className="text-xs uppercase tracking-widest text-[#B8923B] font-semibold block mb-2">
              {ui.recommendedRoutesKicker}
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#16283F]">
              {rc.popularRoutesTitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#1C2230]/70 mt-1">
              {ui.recommendedRoutesDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {POPULAR_ROUTE_PRESETS.map((preset, i) => (
              <div
                key={i}
                className="p-5 bg-white rounded-xl border border-[#1C2230]/10 hover:border-[#B8923B]/60 transition-all shadow-xs flex flex-col justify-between group"
              >
                <div>
                  <div className="text-[11px] font-semibold text-[#B8923B] uppercase tracking-wider mb-1">
                    {preset.highway}
                  </div>
                  <h3 className="font-medium text-sm text-[#16283F] group-hover:text-[#B8923B] transition-colors mb-2">
                    {preset.title}
                  </h3>
                  <p className="text-xs text-[#1C2230]/70 leading-relaxed mb-4">
                    {preset.description}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => loadPreset(preset)}
                  className="w-full py-2 bg-[#FAF8F3] group-hover:bg-[#16283F] group-hover:text-white text-[#16283F] text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>{rc.selectRoutePreset}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Cross-Link Banner to Budget Calculator */}
        {onNavigateToBudget && (
          <div className="mt-16 p-8 bg-gradient-to-r from-[#FAF8F3] via-white to-[#FAF8F3] rounded-2xl border border-[#B8923B]/30 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider text-[#B8923B] font-semibold flex items-center gap-1.5">
                <Calculator className="w-3.5 h-3.5" />
                <span>{ui.fullPlanKicker}</span>
              </span>
              <h3 className="font-editorial text-xl sm:text-2xl text-[#16283F]">
                {ui.budgetCtaTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#1C2230]/70 max-w-xl">
                {ui.budgetCtaDesc}
              </p>
            </div>
            <button
              type="button"
              onClick={onNavigateToBudget}
              className="px-6 py-3 bg-[#16283F] text-white text-xs font-semibold rounded-lg hover:bg-[#16283F]/90 transition-colors shadow-xs shrink-0 cursor-pointer flex items-center gap-2"
            >
              <span>{ui.openBudgetCalcBtn}</span>
              <ArrowRight className="w-4 h-4 text-[#B8923B]" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
