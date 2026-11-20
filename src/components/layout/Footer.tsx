/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Compass, ShieldCheck, Heart } from 'lucide-react';
import { Language } from '../../types';
import { translations } from '../../i18n/translations';

interface FooterProps {
  currentLang: Language;
  onNavigate: (view: string, slug?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onNavigate }) => {
  const t = translations[currentLang];

  const handleLink = (view: string, slug?: string) => {
    onNavigate(view, slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#16283F] text-white border-t border-[#1C2230]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand Manifesto (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-editorial text-3xl tracking-tight text-white block">
              Embarque
            </span>
            <p className="text-xs sm:text-sm text-white/70 max-w-sm leading-relaxed">
              {t.footer.editorialMission}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#B8923B]">
              <Compass className="w-4 h-4" />
              <span className="uppercase tracking-widest font-semibold text-[11px]">
                {t.homeUi.footerEdition}
              </span>
            </div>
          </div>

          {/* Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B8923B] block">
              {t.footer.quickLinks}
            </span>
            <ul className="space-y-2 text-xs text-white/75">
              <li>
                <button
                  onClick={() => handleLink('destinations')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.destinations}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('articles')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.guides}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('calculator')}
                  className="hover:text-white transition-colors cursor-pointer text-[#B8923B]"
                >
                  {t.nav.calculator}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('comparator')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.comparator}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('profiles')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.profiles}
                </button>
              </li>
            </ul>
          </div>

          {/* Regional Portals (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B8923B] block">
              {t.homeUi.footerDestinationsTitle}
            </span>
            <ul className="space-y-2 text-xs text-white/75">
              <li>
                <button
                  onClick={() => handleLink('destination', 'bombinhas')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Bombinhas (SC)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('destination', 'florianopolis')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Florianópolis (SC)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('destination', 'buzios')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Armação dos Búzios (RJ)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('destination', 'angra-dos-reis')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Angra dos Reis & Ilha Grande
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('destination', 'balneario-camboriu')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Balneário Camboriú (SC)
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Transparency (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B8923B] block">
              {t.footer.legal}
            </span>
            <ul className="space-y-2 text-xs text-white/75">
              <li>
                <button
                  onClick={() => handleLink('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.contact}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('privacy')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.footer.privacy}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('terms')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.footer.terms}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('affiliates')}
                  className="hover:text-white transition-colors cursor-pointer text-[#B8923B]"
                >
                  {t.footer.affiliateDisclosure}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Commercial Affiliate Disclaimer */}
        <div className="py-6 text-xs text-white/60 leading-relaxed border-b border-white/10 flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-[#B8923B] shrink-0 mt-0.5" />
          <p>{t.footer.commercialDisclosure}</p>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/50 gap-4">
          <div>© {new Date().getFullYear()} {t.footer.rights}</div>
          <div className="flex items-center gap-1">
            <span>{t.homeUi.footerTagline}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
