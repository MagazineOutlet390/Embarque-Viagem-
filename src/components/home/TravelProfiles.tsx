/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Users, Heart, Compass, Waves, ArrowRight } from 'lucide-react';
import { Language, TravellerProfile } from '../../types';
import { translations } from '../../i18n/translations';

interface TravelProfilesProps {
  profiles: TravellerProfile[];
  currentLang: Language;
  onSelectDestination: (slug: string) => void;
}

export const TravelProfiles: React.FC<TravelProfilesProps> = ({
  profiles,
  currentLang,
  onSelectDestination,
}) => {
  const t = translations[currentLang];

  const getProfileIcon = (icon: string) => {
    switch (icon) {
      case 'Users':
        return <Users className="w-5 h-5 text-[#B8923B]" />;
      case 'Heart':
        return <Heart className="w-5 h-5 text-[#B8923B]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#B8923B]" />;
      case 'Waves':
      default:
        return <Waves className="w-5 h-5 text-[#B8923B]" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12 pb-6 border-b border-[#1C2230]/10">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#B8923B] block mb-2">
          Estilos de Viagem
        </span>
        <h2 className="font-editorial text-3xl sm:text-4xl text-[#16283F] tracking-tight">
          {t.sections.travelProfiles}
        </h2>
        <p className="text-sm sm:text-base text-[#1C2230]/70 mt-2 max-w-2xl">
          {t.sections.travelProfilesSubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {profiles.map((prof) => (
          <div
            key={prof.id}
            className="bg-white rounded-xl p-6 border border-[#1C2230]/10 hover:border-[#B8923B]/60 transition-all flex flex-col justify-between shadow-xs hover:shadow-md"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#FAF8F3] border border-[#1C2230]/10 flex items-center justify-center mb-4">
                {getProfileIcon(prof.icon)}
              </div>

              <h3 className="font-editorial text-xl text-[#16283F] mb-2 font-medium">
                {prof.title[currentLang]}
              </h3>

              <p className="text-xs sm:text-sm text-[#1C2230]/75 leading-relaxed mb-6">
                {prof.description[currentLang]}
              </p>
            </div>

            <div className="pt-4 border-t border-[#1C2230]/10">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#1C2230]/50 block mb-2">
                {t.homeUi.recommendedDestinationsLabel}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {prof.recommendedDestinations.map((slug) => (
                  <button
                    key={slug}
                    onClick={() => onSelectDestination(slug)}
                    className="text-xs px-2.5 py-1 bg-[#FAF8F3] hover:bg-[#16283F] hover:text-white rounded border border-[#1C2230]/10 transition-colors capitalize font-medium"
                  >
                    {slug.replace('-', ' ')}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
