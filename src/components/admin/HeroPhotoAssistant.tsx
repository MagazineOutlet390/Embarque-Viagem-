/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Check, Upload, Sliders, Image as ImageIcon, Eye } from 'lucide-react';
import { HeroPhotoConfig, Language } from '../../types';
import { translations } from '../../i18n/translations';

interface HeroPhotoAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  config: HeroPhotoConfig;
  onSaveConfig: (newConfig: HeroPhotoConfig) => void;
  currentLang: Language;
}

export const HeroPhotoAssistant: React.FC<HeroPhotoAssistantProps> = ({
  isOpen,
  onClose,
  config,
  onSaveConfig,
  currentLang,
}) => {
  const [imageUrl, setImageUrl] = useState(config.imageUrl);
  const [objectPosition, setObjectPosition] = useState(config.objectPosition);
  const [overlayOpacity, setOverlayOpacity] = useState(config.overlayOpacity);
  const [layoutStyle, setLayoutStyle] = useState<'full_bleed' | 'editorial_split'>(config.layoutStyle);
  const [savedBanner, setSavedBanner] = useState(false);

  if (!isOpen) return null;

  const t = translations[currentLang].heroAdjuster;

  const handleApply = () => {
    onSaveConfig({
      imageUrl,
      objectPosition,
      overlayOpacity,
      layoutStyle,
    });
    setSavedBanner(true);
    setTimeout(() => {
      setSavedBanner(false);
      onClose();
    }, 1200);
  };

  const handleReset = () => {
    setImageUrl('/images/hero_coast.jpg');
    setObjectPosition('center 40%');
    setOverlayOpacity(0.45);
    setLayoutStyle('full_bleed');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-[#FAF8F3] border border-[#1C2230]/15 rounded-xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl text-[#1C2230] animate-in fade-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#1C2230]/50 hover:text-[#1C2230] p-1.5 rounded-lg hover:bg-black/5"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2 text-[#B8923B]">
          <Sliders className="w-5 h-5" />
          <span className="text-xs font-semibold tracking-wider uppercase">Direção Editorial de Arte</span>
        </div>

        <h3 className="font-editorial text-2xl text-[#16283F] mb-1">{t.title}</h3>
        <p className="text-xs sm:text-sm text-[#1C2230]/70 mb-6">{t.description}</p>

        {/* Guidance Box */}
        <div className="bg-[#16283F]/5 border border-[#16283F]/15 rounded-lg p-3 text-xs text-[#16283F]/85 mb-6">
          <p className="font-medium mb-1">Nota para o Proprietário do Projeto:</p>
          <p>{t.guidanceNote}</p>
        </div>

        <div className="space-y-5">
          {/* Image URL / Local path */}
          <div>
            <label className="block text-xs font-semibold text-[#16283F] uppercase tracking-wider mb-1.5">
              {t.imageUrlLabel}
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="/images/hero_coast.jpg ou https://..."
                className="flex-1 px-3 py-2 text-xs sm:text-sm bg-white border border-[#1C2230]/20 rounded-md focus:border-[#B8923B] focus:outline-none"
              />
            </div>
            <p className="text-[11px] text-[#1C2230]/50 mt-1">{t.localDefaultNotice}</p>
          </div>

          {/* Quick presets for testing */}
          <div>
            <span className="block text-xs font-semibold text-[#16283F] uppercase tracking-wider mb-2">
              Fotografias Curadas Disponíveis:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { name: 'Costa Brasileira (Hero)', path: '/images/hero_coast.jpg' },
                { name: 'Bombinhas (SC)', path: '/images/bombinhas.jpg' },
                { name: 'Florianópolis (SC)', path: '/images/florianopolis.jpg' },
                { name: 'Búzios (RJ)', path: '/images/buzios.jpg' },
                { name: 'Angra dos Reis (RJ)', path: '/images/angra_dos_reis.jpg' },
                { name: 'Balneário Camboriú (SC)', path: '/images/balneario_camboriu.jpg' },
              ].map((preset) => (
                <button
                  key={preset.name}
                  type="button"
                  onClick={() => setImageUrl(preset.path)}
                  className={`text-left p-2 rounded border text-xs transition-colors ${
                    imageUrl === preset.path
                      ? 'border-[#B8923B] bg-[#B8923B]/10 font-medium text-[#16283F]'
                      : 'border-[#1C2230]/15 bg-white text-[#1C2230]/70 hover:border-[#1C2230]/30'
                  }`}
                >
                  <div className="truncate">{preset.name}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Focal Position */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-semibold text-[#16283F] uppercase tracking-wider">
                {t.focalPositionLabel}
              </label>
              <span className="text-xs font-mono text-[#1C2230]/60">{objectPosition}</span>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {[
                { label: 'Centro 40%', val: 'center 40%' },
                { label: 'Topo', val: 'center top' },
                { label: 'Centro 50%', val: 'center center' },
                { label: 'Base', val: 'center bottom' },
                { label: 'Direita 60%', val: 'right 40%' },
              ].map((pos) => (
                <button
                  key={pos.val}
                  type="button"
                  onClick={() => setObjectPosition(pos.val)}
                  className={`py-1.5 px-2 text-xs rounded border transition-colors ${
                    objectPosition === pos.val
                      ? 'border-[#16283F] bg-[#16283F] text-white font-medium'
                      : 'border-[#1C2230]/15 bg-white text-[#1C2230]/70 hover:border-[#1C2230]/30'
                  }`}
                >
                  {pos.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contrast Overlay Slider */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-semibold text-[#16283F] uppercase tracking-wider">
                {t.overlayTintLabel}
              </label>
              <span className="text-xs font-mono text-[#1C2230]/60">{Math.round(overlayOpacity * 100)}%</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="0.85"
              step="0.05"
              value={overlayOpacity}
              onChange={(e) => setOverlayOpacity(parseFloat(e.target.value))}
              className="w-full accent-[#B8923B] cursor-pointer"
            />
          </div>

          {/* Layout Mode */}
          <div>
            <label className="block text-xs font-semibold text-[#16283F] uppercase tracking-wider mb-2">
              {t.layoutModeLabel}
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setLayoutStyle('full_bleed')}
                className={`p-3 rounded-lg border text-left transition-colors ${
                  layoutStyle === 'full_bleed'
                    ? 'border-[#16283F] bg-white ring-2 ring-[#16283F]/20 font-medium'
                    : 'border-[#1C2230]/15 bg-white/50 text-[#1C2230]/70'
                }`}
              >
                <div className="text-xs font-semibold text-[#16283F] mb-1">{t.layoutFull}</div>
                <div className="text-[11px] text-[#1C2230]/60">Fotografia como grande plano de fundo da tela</div>
              </button>

              <button
                type="button"
                onClick={() => setLayoutStyle('editorial_split')}
                className={`p-3 rounded-lg border text-left transition-colors ${
                  layoutStyle === 'editorial_split'
                    ? 'border-[#16283F] bg-white ring-2 ring-[#16283F]/20 font-medium'
                    : 'border-[#1C2230]/15 bg-white/50 text-[#1C2230]/70'
                }`}
              >
                <div className="text-xs font-semibold text-[#16283F] mb-1">{t.layoutSplit}</div>
                <div className="text-[11px] text-[#1C2230]/60">Texto à esquerda e card fotográfico à direita</div>
              </button>
            </div>
          </div>
        </div>

        {/* Live Preview Strip */}
        <div className="mt-6 pt-4 border-t border-[#1C2230]/10">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#1C2230]/50 mb-2 flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5" /> Pré-visualização do Enquadramento
          </div>
          <div className="relative h-28 rounded-lg overflow-hidden border border-[#1C2230]/15 bg-neutral-900">
            <img
              src={imageUrl}
              alt="Preview Hero"
              className="w-full h-full object-cover transition-all"
              style={{ objectPosition }}
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div
              className="absolute inset-0 bg-[#16283F] pointer-events-none"
              style={{ opacity: overlayOpacity }}
            />
            <div className="absolute inset-0 p-3 flex flex-col justify-end text-white">
              <span className="text-[10px] uppercase tracking-widest text-[#B8923B] font-semibold">
                Tipografia Caslon
              </span>
              <span className="font-editorial text-lg leading-tight">Onde o mar encontra a alma brasileira.</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleReset}
            className="px-3 py-2 text-xs text-[#1C2230]/70 hover:text-[#1C2230] underline"
          >
            {t.resetDefault}
          </button>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-[#1C2230] hover:bg-black/5 rounded-md"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={handleApply}
              className="px-5 py-2 text-xs font-semibold text-white bg-[#16283F] hover:bg-[#16283F]/90 rounded-md transition-colors shadow-sm flex items-center gap-1.5"
            >
              {savedBanner ? <Check className="w-4 h-4 text-emerald-400" /> : null}
              {savedBanner ? t.savedSuccess : t.applyAndSave}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
