/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Check, AlertCircle, Send, ShieldCheck } from 'lucide-react';
import { Language } from '../../types';
import { translations } from '../../i18n/translations';

interface NewsletterSectionProps {
  currentLang: Language;
}

export const NewsletterSection: React.FC<NewsletterSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang].sections;
  const ui = translations[currentLang].homeUi;
  const nArt = translations[currentLang].newsletterArticle;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      setStatus('error');
      setErrorMessage(nArt.consentError);
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          language: currentLang,
          source: 'homepage_newsletter',
          consentGiven: true,
          consentDate: new Date().toISOString(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setName('');
        setEmail('');
      } else {
        setStatus('error');
        setErrorMessage(data.message || t.subscribedError);
      }
    } catch (err: unknown) {
      console.warn('Newsletter submission response:', err);
      setStatus('error');
      setErrorMessage(t.subscribedError);
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#16283F] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs text-[#B8923B] font-semibold tracking-wider uppercase mb-4">
          <Mail className="w-3.5 h-3.5" />
          <span>{ui.editorialCorrespondence}</span>
        </div>

        <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4 text-balance">
          {t.newsletterTitle}
        </h2>

        <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto leading-relaxed mb-8">
          {t.newsletterSubtitle}
        </p>

        {status === 'success' ? (
          <div className="p-6 bg-white/10 border border-[#B8923B]/40 rounded-xl max-w-md mx-auto text-left animate-in fade-in">
            <div className="flex items-center gap-2 text-emerald-400 font-medium text-sm mb-1">
              <Check className="w-5 h-5" />
              <span>{ui.subscriptionConfirmedTitle}</span>
            </div>
            <p className="text-xs text-white/80 leading-relaxed">
              {t.subscribedSuccess}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-white/70 mb-1">
                  {nArt.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.namePlaceholder}
                  className="w-full px-3.5 py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-white/40 focus:border-[#B8923B] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-white/70 mb-1">
                  {nArt.emailLabel}
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.emailPlaceholder}
                  className="w-full px-3.5 py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-white/40 focus:border-[#B8923B] focus:outline-none"
                />
              </div>
            </div>

            {/* Consent check */}
            <div className="flex items-start gap-2 text-left pt-1">
              <input
                type="checkbox"
                id="consentCheck"
                required
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 accent-[#B8923B] cursor-pointer"
              />
              <label htmlFor="consentCheck" className="text-xs text-white/70 cursor-pointer">
                {t.consentText}
              </label>
            </div>

            {status === 'error' && (
              <div className="p-3 bg-red-900/40 border border-red-500/30 rounded-lg text-xs text-red-200 flex items-center gap-2 text-left">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                <span>{errorMessage || t.subscribedError}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full sm:w-auto px-8 py-3 bg-[#B8923B] text-[#16283F] font-semibold text-sm rounded-lg hover:bg-[#B8923B]/90 transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer mx-auto disabled:opacity-50"
            >
              <Send className="w-4 h-4 text-[#16283F]" />
              <span>{status === 'loading' ? nArt.submittingBtn : t.subscribeBtn}</span>
            </button>
          </form>
        )}

        <div className="mt-8 flex items-center justify-center gap-2 text-[11px] text-white/50">
          <ShieldCheck className="w-3.5 h-3.5 text-[#B8923B]" />
          <span>{ui.privacyAssuredNote}</span>
        </div>
      </div>
    </section>
  );
};
