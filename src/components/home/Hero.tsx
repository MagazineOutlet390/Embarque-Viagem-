/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Search, Compass, Calculator, ArrowRight, Navigation, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { HeroPhotoConfig, Language } from '../../types';
import { translations } from '../../i18n/translations';

interface HeroProps {
  currentLang: Language;
  heroConfig?: HeroPhotoConfig;
  onNavigate: (view: string, slug?: string) => void;
  onSearch: (query: string) => void;
}

interface HeroSlide {
  id: string;
  image: string;
  alt: string;
  locationKicker: string;
  locationTitle: string;
  locationSubtitle: string;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onNavigate,
  onSearch,
}) => {
  const [searchVal, setSearchVal] = useState('');
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  const t = translations[currentLang];

  // 3 Distinct Editorial Slides (localized captions)
  const slides: HeroSlide[] = [
    {
      id: 'sc-coast',
      image: '/images/hero_coast.jpg',
      alt:
        currentLang === 'es'
          ? 'Litoral de Santa Catarina — Costa Esmeralda y Florianópolis'
          : currentLang === 'en'
            ? 'Santa Catarina Coast — Costa Esmeralda and Florianópolis'
            : 'Litoral Catarinense — Costa Esmeralda e Florianópolis',
      locationKicker: 'Santa Catarina · Brasil',
      locationTitle: 'Praia da Sepultura, Bombinhas',
      locationSubtitle:
        currentLang === 'es'
          ? 'Costa Esmeralda · Reserva Biológica Marina de Arvoredo'
          : currentLang === 'en'
            ? 'Costa Esmeralda · Arvoredo Marine Biological Reserve'
            : 'Costa Esmeralda · Reserva Biológica Marinha do Arvoredo',
    },
    {
      id: 'serra-gaucha',
      image: '/images/gramado_canela.jpg',
      alt:
        currentLang === 'es'
          ? 'Serra Gaúcha — Gramado y Canela'
          : currentLang === 'en'
            ? 'Serra Gaúcha Highlands — Gramado and Canela'
            : 'Serra Gaúcha — Gramado e Canela',
      locationKicker: 'Rio Grande do Sul · Brasil',
      locationTitle: 'Gramado & Canela · Serra Gaúcha',
      locationSubtitle:
        currentLang === 'es'
          ? 'Ruta de las Hortensias · Encanto serrano, valles y araucarias'
          : currentLang === 'en'
            ? 'Hydrangea Route · Mountain valleys and araucaria forests'
            : 'Rota das Hortênsias · Charme Europeu, Vales e Araucárias',
    },
    {
      id: 'cruzeiro',
      image: '/images/cruzeiro.jpg',
      alt:
        currentLang === 'es'
          ? 'Cruceros y viajes marítimos por la costa sudamericana'
          : currentLang === 'en'
            ? 'Ocean cruises along the Brazilian and South American coast'
            : 'Viagens Marítimas — Cruzeiros na Costa Brasileira e América do Sul',
      locationKicker:
        currentLang === 'es'
          ? 'Costa Brasileña & Mar Abierto'
          : currentLang === 'en'
            ? 'Brazilian Coast & Open Ocean'
            : 'Costa Brasileira & Mar Aberto',
      locationTitle:
        currentLang === 'es'
          ? 'Cruceros & Travesías Marítimas'
          : currentLang === 'en'
            ? 'Cruises & Ocean Voyages'
            : 'Cruzeiros & Grandes Navegações',
      locationSubtitle:
        currentLang === 'es'
          ? 'Itinerarios en barco · De Santos y Río hacia el Atlántico Sur'
          : currentLang === 'en'
            ? 'Ocean itineraries · Sailing from Santos and Rio across the Atlantic'
            : 'Roteiros de Navio · De Santos e Rio até as Águas Azuis do Atlântico',
    },
  ];

  // Slideshow auto-rotation: 6-second interval, pauses on hover or interaction
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = window.setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, slides.length]);

  const goToSlide = (idx: number) => {
    setCurrentSlideIndex(idx);
  };

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchVal.trim()) {
      onSearch(searchVal.trim());
      onNavigate('destinations');
    }
  };

  const popularDestinations = [
    { label: 'Bombinhas', slug: 'bombinhas' },
    { label: 'Florianópolis', slug: 'florianopolis' },
    { label: 'Gramado', slug: 'gramado' },
    { label: 'Búzios', slug: 'buzios' },
    { label: 'Angra dos Reis', slug: 'angra-dos-reis' },
  ];

  return (
    <section
      className="relative min-h-[640px] lg:min-h-[740px] flex items-center justify-center overflow-hidden border-b border-[#1C2230]/10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      aria-label="Apresentação editorial de destinos do Embarque"
    >
      {/* Background Photography Slideshow Layer */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => {
          const isActive = index === currentSlideIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
              }`}
              style={{
                transitionProperty: 'opacity, transform',
                transitionDuration: '1000ms',
              }}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const el = e.currentTarget;
                  if (!el.src.endsWith('/images/hero_coast.jpg')) {
                    el.src = '/images/hero_coast.jpg';
                  }
                }}
              />
            </div>
          );
        })}

        {/* Measured dark gradient scrim for WCAG AA readability across all 3 slide themes */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#16283F]/92 via-[#16283F]/70 to-[#16283F]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#16283F]/95 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-2xl text-white">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B8923B] font-semibold mb-4">
            <span>{t.hero.kicker}</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.08] tracking-tight mb-6 text-balance drop-shadow-sm">
            {t.hero.title}
          </h1>

          <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-8 max-w-xl font-normal drop-shadow-xs">
            {t.hero.subtitle}
          </p>

          {/* Search bar inside hero */}
          <form onSubmit={handleSearchSubmit} className="mb-6 max-w-lg">
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-white/60 pointer-events-none" />
              <input
                type="text"
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                placeholder={t.hero.searchPlaceholder}
                className="w-full pl-12 pr-28 py-3.5 bg-white/15 backdrop-blur-md border border-white/25 rounded-lg text-sm text-white placeholder-white/65 focus:bg-white focus:text-[#1C2230] focus:placeholder-[#1C2230]/40 focus:outline-none transition-all shadow-md"
              />
              <button
                type="submit"
                className="absolute right-2 px-4 py-1.5 bg-[#B8923B] text-[#16283F] font-semibold text-xs rounded-md hover:bg-[#B8923B]/90 transition-colors cursor-pointer"
              >
                Buscar
              </button>
            </div>
          </form>

          {/* Popular destination text tags */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-white/80 mb-8">
            <span className="font-semibold text-[#B8923B]">{t.hero.popularSearches}</span>
            {popularDestinations.map((dest, i) => (
              <React.Fragment key={dest.slug}>
                <button
                  onClick={() => onNavigate('destination', dest.slug)}
                  className="hover:text-[#B8923B] underline underline-offset-4 cursor-pointer text-white/90"
                >
                  {dest.label}
                </button>
                {i < popularDestinations.length - 1 && <span className="text-white/40">·</span>}
              </React.Fragment>
            ))}
          </div>

          {/* Action CTAs: Destinations, Budget Calculator, and Route Calculator */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={() => onNavigate('destinations')}
              className="px-6 py-3.5 bg-[#B8923B] text-[#16283F] text-sm font-semibold rounded-lg hover:bg-[#B8923B]/90 transition-colors shadow-md flex items-center gap-2 cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#16283F]" />
              <span>{t.hero.exploreCTA}</span>
            </button>

            <button
              onClick={() => onNavigate('calculator')}
              className="px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg backdrop-blur-xs border border-white/25 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-[#B8923B]" />
              <span>{t.hero.budgetCTA}</span>
            </button>

            <button
              onClick={() => onNavigate('route-calculator')}
              className="px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg backdrop-blur-xs border border-white/25 transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Navigation className="w-4 h-4 text-[#B8923B]" />
              <span>{t.hero.routeCTA || 'Calcular Rota & Combustível'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Discrete Slide Caption & Metadata (Bottom Left) */}
      <div className="absolute bottom-6 left-6 sm:left-12 z-20 pointer-events-none max-w-sm hidden sm:block">
        <div className="text-[11px] uppercase tracking-widest text-[#B8923B] font-semibold mb-0.5">
          {slides[currentSlideIndex].locationKicker}
        </div>
        <div className="text-white font-medium text-sm drop-shadow-sm">
          {slides[currentSlideIndex].locationTitle}
        </div>
        <div className="text-white/70 text-xs drop-shadow-xs">
          {slides[currentSlideIndex].locationSubtitle}
        </div>
      </div>

      {/* Discrete Slideshow Controls (Bottom Right) */}
      <div className="absolute bottom-6 right-6 sm:right-12 z-20 flex items-center gap-3">
        {/* Previous / Next Arrow buttons */}
        <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md rounded-lg p-1 border border-white/15">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Fotografia anterior"
            className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Próxima fotografia"
            className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Indicators (Dots) */}
        <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-2 rounded-lg border border-white/15">
          {slides.map((slide, idx) => {
            const isActive = idx === currentSlideIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => goToSlide(idx)}
                aria-label={`Ver imagem ${idx + 1} de 3: ${slide.locationTitle}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  isActive
                    ? 'w-6 h-2 bg-[#B8923B]'
                    : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
