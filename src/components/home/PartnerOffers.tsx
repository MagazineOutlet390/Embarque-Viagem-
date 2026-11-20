/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ExternalLink, ShieldCheck, Tag } from 'lucide-react';
import { AffiliatePartner, Language, PartnerOffer } from '../../types';
import { translations } from '../../i18n/translations';

interface PartnerOffersProps {
  partners: AffiliatePartner[];
  offers: PartnerOffer[];
  currentLang: Language;
}

export const PartnerOffers: React.FC<PartnerOffersProps> = ({
  partners,
  offers,
  currentLang,
}) => {
  const t = translations[currentLang];

  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-[#1C2230]/10">
        <div>
          <span className="text-xs font-semibold tracking-widest uppercase text-[#B8923B] block mb-2">
            Curadoria Comercial & Parcerias
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl text-[#16283F] tracking-tight">
            {t.sections.partnersTitle}
          </h2>
          <p className="text-sm sm:text-base text-[#1C2230]/70 mt-2 max-w-2xl">
            {t.sections.partnersSubtitle}
          </p>
        </div>
      </div>

      {/* Offers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="bg-white rounded-xl p-6 border border-[#1C2230]/10 hover:border-[#B8923B]/60 transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-[11px] text-[#1C2230]/50 mb-2">
                <span className="uppercase tracking-wider font-semibold text-[#16283F]">
                  {offer.partnerName}
                </span>
                <span className="flex items-center gap-1 text-[#B8923B]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{t.sections.verifiedPartner}</span>
                </span>
              </div>

              <h3 className="font-editorial text-xl text-[#16283F] font-medium mb-2 leading-snug">
                {offer.title[currentLang]}
              </h3>

              <p className="text-xs sm:text-sm text-[#1C2230]/75 leading-relaxed mb-4">
                {offer.description[currentLang]}
              </p>

              {offer.priceNote && (
                <div className="text-xs font-mono font-medium text-[#16283F] bg-[#FAF8F3] p-2.5 rounded-lg border border-[#1C2230]/10 mb-6">
                  {offer.priceNote[currentLang]}
                </div>
              )}
            </div>

            <a
              href={offer.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 bg-[#FAF8F3] hover:bg-[#16283F] text-[#16283F] hover:text-white font-semibold text-xs rounded-lg transition-colors border border-[#1C2230]/15 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>
                {currentLang === 'es'
                  ? 'Ver Detalles del Socio'
                  : currentLang === 'en'
                    ? 'View Partner Details'
                    : 'Ver Detalhes do Parceiro'}
              </span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>

      {/* Partner Logos / Categories Strip */}
      <div className="bg-[#FAF8F3] rounded-xl p-6 border border-[#1C2230]/10">
        <span className="text-[11px] uppercase tracking-wider text-[#1C2230]/50 font-semibold block mb-4">
          {t.homeUi.integratedNetworkLabel}
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {partners.map((p) => (
            <div key={p.id} className="p-3 bg-white rounded-lg border border-[#1C2230]/10 text-center">
              <span className="font-editorial text-base text-[#16283F] block font-medium mb-1">
                {p.name}
              </span>
              <span className="text-[11px] text-[#1C2230]/60 block capitalize">
                {p.badgeText[currentLang]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
