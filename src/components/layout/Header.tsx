/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { translations } from '../../i18n/translations';
import { Language } from '../../types';

interface HeaderProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  activeView: string;
  onNavigate: (view: string, slug?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onSelectLang,
  activeView,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const t = translations[currentLang];

  const handleNav = (view: string, slug?: string) => {
    onNavigate(view, slug);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'pt', label: 'Português (BR)', flag: '🇧🇷' },
    { code: 'es', label: 'Español (América)', flag: '🇦🇷' },
    { code: 'en', label: 'English (US)', flag: '🇺🇸' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F3]/95 backdrop-blur-md border-b border-[#1C2230]/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleNav('home')}
          className="text-left group cursor-pointer shrink-0 focus-visible:outline-none"
        >
          <span className="font-editorial text-2xl sm:text-3xl tracking-tight text-[#16283F] group-hover:text-[#B8923B] transition-colors whitespace-nowrap">
            Embarque
          </span>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-[#1C2230]/80">
          <button
            onClick={() => handleNav('destinations')}
            className={`cursor-pointer hover:text-[#16283F] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
              activeView === 'destinations' ? 'border-[#B8923B] text-[#16283F] font-semibold' : 'border-transparent'
            }`}
          >
            {t.nav.destinations}
          </button>
          <button
            onClick={() => handleNav('articles')}
            className={`cursor-pointer hover:text-[#16283F] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
              activeView === 'articles' ? 'border-[#B8923B] text-[#16283F] font-semibold' : 'border-transparent'
            }`}
          >
            {t.nav.guides}
          </button>
          <button
            onClick={() => handleNav('calculator')}
            className={`cursor-pointer hover:text-[#16283F] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
              activeView === 'calculator' ? 'border-[#B8923B] text-[#16283F] font-semibold' : 'border-transparent'
            }`}
          >
            {t.nav.calculator}
          </button>
          <button
            onClick={() => handleNav('route-calculator')}
            className={`cursor-pointer hover:text-[#16283F] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
              activeView === 'route-calculator' ? 'border-[#B8923B] text-[#16283F] font-semibold' : 'border-transparent'
            }`}
          >
            {t.nav.routeCalculator || 'Calculadora de Rota'}
          </button>
          <button
            onClick={() => handleNav('comparator')}
            className={`cursor-pointer hover:text-[#16283F] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
              activeView === 'comparator' ? 'border-[#B8923B] text-[#16283F] font-semibold' : 'border-transparent'
            }`}
          >
            {t.nav.comparator}
          </button>
          <button
            onClick={() => handleNav('profiles')}
            className={`cursor-pointer hover:text-[#16283F] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
              activeView === 'profiles' ? 'border-[#B8923B] text-[#16283F] font-semibold' : 'border-transparent'
            }`}
          >
            {t.nav.profiles}
          </button>
        </nav>

        {/* Zone 3: Language Picker and Primary CTA */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Language Picker Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#16283F] bg-white border border-[#1C2230]/15 rounded-md hover:border-[#B8923B] transition-colors focus-visible:outline-none whitespace-nowrap cursor-pointer shadow-xs"
              aria-label={t.homeUi.selectLangAria}
            >
              <Globe className="w-3.5 h-3.5 text-[#B8923B]" />
              <span className="uppercase font-semibold tracking-wider">{currentLang}</span>
            </button>

            {langDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-48 bg-white border border-[#1C2230]/15 rounded-lg shadow-lg py-1 z-50 animate-in fade-in zoom-in-95 duration-150"
                onMouseLeave={() => setLangDropdownOpen(false)}
              >
                <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#1C2230]/40 border-b border-gray-100">
                  Idioma / Idioma / Language
                </div>
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      onSelectLang(l.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-[#FAF8F3] transition-colors cursor-pointer ${
                      currentLang === l.code ? 'font-semibold text-[#16283F] bg-[#FAF8F3]' : 'text-[#1C2230]/80'
                    }`}
                  >
                    <span>{l.label}</span>
                    <span className="text-sm">{l.flag}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Primary CTA Button */}
          <button
            onClick={() => handleNav('calculator')}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-[#16283F] hover:bg-[#16283F]/90 rounded-md transition-colors shadow-xs whitespace-nowrap cursor-pointer"
          >
            {t.hero.budgetCTA}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#16283F] hover:bg-black/5 rounded-md transition-colors"
            aria-label={t.homeUi.openMenuAria}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Sheet */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F3] border-b border-[#1C2230]/15 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-base font-medium text-[#1C2230]">
            <button
              onClick={() => handleNav('destinations')}
              className="text-left py-2 px-2 hover:bg-white rounded-md transition-colors"
            >
              {t.nav.destinations}
            </button>
            <button
              onClick={() => handleNav('articles')}
              className="text-left py-2 px-2 hover:bg-white rounded-md transition-colors"
            >
              {t.nav.guides}
            </button>
            <button
              onClick={() => handleNav('calculator')}
              className="text-left py-2 px-2 hover:bg-white rounded-md transition-colors font-semibold text-[#16283F]"
            >
              {t.nav.calculator}
            </button>
            <button
              onClick={() => handleNav('route-calculator')}
              className="text-left py-2 px-2 hover:bg-white rounded-md transition-colors font-semibold text-[#16283F]"
            >
              {t.nav.routeCalculator || 'Calculadora de Rota'}
            </button>
            <button
              onClick={() => handleNav('comparator')}
              className="text-left py-2 px-2 hover:bg-white rounded-md transition-colors"
            >
              {t.nav.comparator}
            </button>
            <button
              onClick={() => handleNav('profiles')}
              className="text-left py-2 px-2 hover:bg-white rounded-md transition-colors"
            >
              {t.nav.profiles}
            </button>
            <button
              onClick={() => handleNav('partners')}
              className="text-left py-2 px-2 hover:bg-white rounded-md transition-colors text-sm text-[#1C2230]/70"
            >
              {t.nav.partners}
            </button>
          </nav>

          <div className="pt-3 border-t border-[#1C2230]/10 flex items-center justify-between">
            <span className="text-xs text-[#1C2230]/60">{t.homeUi.langLabel}</span>
            <div className="flex gap-2">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => onSelectLang(l.code)}
                  className={`px-2.5 py-1 text-xs rounded border ${
                    currentLang === l.code
                      ? 'bg-[#16283F] text-white border-[#16283F]'
                      : 'bg-white text-[#1C2230] border-gray-200'
                  }`}
                >
                  {l.flag} {l.code.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
