/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShieldCheck, Mail, FileText, Check, AlertCircle } from 'lucide-react';
import { Language } from '../../types';
import { translations } from '../../i18n/translations';
import { getPathForRoute } from '../../lib/seo';

interface InstitutionalViewProps {
  type: 'about' | 'contact' | 'privacy' | 'terms' | 'affiliates';
  currentLang: Language;
  onNavigate: (view: string, slug?: string) => void;
}

export const InstitutionalView: React.FC<InstitutionalViewProps> = ({
  type,
  currentLang,
  onNavigate,
}) => {
  const t = translations[currentLang];
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSent, setContactSent] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSent(true);
    setTimeout(() => {
      setContactName('');
      setContactEmail('');
      setContactMessage('');
    }, 2000);
  };

  return (
    <div className="py-12 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {type === 'about' && (
        <article className="space-y-8">
          <div className="border-b border-[#1C2230]/10 pb-6">
            <span className="text-xs uppercase tracking-widest text-[#B8923B] font-semibold block mb-2">
              Manifesto Institucional
            </span>
            <h1 className="font-editorial text-4xl sm:text-5xl text-[#16283F] tracking-tight">
              Sobre o Embarque
            </h1>
            <p className="text-lg text-[#1C2230]/75 mt-3 leading-relaxed">
              Um portal editorial independente nascido do fascínio pela costa brasileira.
            </p>
          </div>

          <div className="prose prose-stone max-w-none text-[#1C2230]/85 text-base sm:text-lg leading-relaxed space-y-6">
            <p className="first-letter:text-5xl first-letter:font-editorial first-letter:font-medium first-letter:float-left first-letter:mr-3 first-letter:text-[#B8923B]">
              O <strong>Embarque</strong> não nasceu para ser mais um comparador frio de passagens ou uma agência de viagens convencional. Nossa missão é cultivar o olhar apurado de quem valoriza a estética tropical, a história das comunidades litorâneas e a verdade sobre cada destino.
            </p>
            <p>
              Iniciamos nossa jornada focando em duas das regiões costeiras mais ricas em biodiversidade e sofisticação cultural do Brasil: o litoral de <strong>Santa Catarina</strong> — de Bombinhas a Florianópolis, de Itapema a Balneário Camboriú — e a península histórica e arquipélagos do <strong>Rio de Janeiro</strong>, com destaque para Armação dos Búzios e Angra dos Reis.
            </p>
            <p>
              Acreditamos que planejar uma viagem é um ato de respeito ao próprio tempo e ao orçamento familiar. Por isso, desenvolvemos ferramentas transparentes de estimativa de custos e mantemos independência editorial rigorosa em todas as análises.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-[#1C2230]/15 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#B8923B] font-semibold block mb-1">
                {t.authorUi.aboutCardLabel}
              </span>
              <h2 className="font-editorial text-xl text-[#16283F]">Wesley Vieira</h2>
              <p className="text-xs sm:text-sm text-[#1C2230]/75 mt-1 max-w-xl">
                {t.authorUi.aboutCardDesc}
              </p>
            </div>
            <a
              href={getPathForRoute('author', 'wesley-vieira', currentLang)}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('author', 'wesley-vieira');
              }}
              className="px-4 py-2.5 bg-[#16283F] text-white text-xs font-semibold rounded-md hover:bg-[#16283F]/90 transition-colors shrink-0 shadow-xs"
            >
              {t.authorUi.viewProfileBtn} →
            </a>
          </div>
        </article>
      )}

      {type === 'contact' && (
        <div className="space-y-8">
          <div className="border-b border-[#1C2230]/10 pb-6">
            <span className="text-xs uppercase tracking-widest text-[#B8923B] font-semibold block mb-2">
              Comunicação Editorial & Parcerias
            </span>
            <h1 className="font-editorial text-4xl sm:text-5xl text-[#16283F] tracking-tight">
              Fale com o Embarque
            </h1>
            <p className="text-lg text-[#1C2230]/75 mt-3 leading-relaxed">
              Sugestões editoriais, propostas de parcerias comerciais ou dúvidas sobre destinos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 bg-white rounded-xl p-6 sm:p-8 border border-[#1C2230]/15 shadow-xs">
              {contactSent ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-sm">
                  <div className="flex items-center gap-2 font-semibold mb-1">
                    <Check className="w-5 h-5 text-emerald-600" />
                    Mensagem Recebida
                  </div>
                  <p>Obrigado pelo contato! Nossa equipe editorial responderá em até 48 horas úteis.</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#16283F] mb-1">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full px-3 py-2 bg-[#FAF8F3] border border-[#1C2230]/20 rounded-md text-sm focus:border-[#B8923B] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#16283F] mb-1">
                      E-mail para Retorno
                    </label>
                    <input
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className="w-full px-3 py-2 bg-[#FAF8F3] border border-[#1C2230]/20 rounded-md text-sm focus:border-[#B8923B] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#16283F] mb-1">
                      Mensagem ou Proposta
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      className="w-full px-3 py-2 bg-[#FAF8F3] border border-[#1C2230]/20 rounded-md text-sm focus:border-[#B8923B] focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#16283F] text-white font-semibold text-xs rounded-md hover:bg-[#16283F]/90 transition-colors shadow-xs cursor-pointer"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              )}
            </div>

            <div className="md:col-span-5 space-y-4 text-xs text-[#1C2230]/75">
              <div className="p-5 bg-[#FAF8F3] rounded-lg border border-[#1C2230]/10">
                <span className="font-semibold text-[#16283F] block mb-1">Redação & Curadoria:</span>
                <p>contato@embarqueviagem.com</p>
              </div>
              <div className="p-5 bg-[#FAF8F3] rounded-lg border border-[#1C2230]/10">
                <span className="font-semibold text-[#16283F] block mb-1">Parcerias & Afiliados:</span>
                <p>parcerias@embarqueviagem.com</p>
              </div>
              <div className="p-5 bg-[#FAF8F3] rounded-lg border border-[#1C2230]/10">
                <span className="font-semibold text-[#16283F] block mb-1">Localização:</span>
                <p>Florianópolis (SC) / Rio de Janeiro (RJ) · Brasil</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {type === 'privacy' && (
        <article className="space-y-6">
          <div className="border-b border-[#1C2230]/10 pb-6">
            <span className="text-xs uppercase tracking-widest text-[#B8923B] font-semibold block mb-2">
              Conformidade LGPD & Segurança
            </span>
            <h1 className="font-editorial text-4xl text-[#16283F] tracking-tight">
              Política de Privacidade e Cookies
            </h1>
            <span className="text-xs text-[#1C2230]/50 block mt-2">Última atualização: Outubro de 2025</span>
          </div>
          <div className="prose prose-stone max-w-none text-xs sm:text-sm text-[#1C2230]/80 space-y-4 leading-relaxed">
            <h3 className="font-editorial text-lg text-[#16283F]">1. Coleta e Uso de Informações</h3>
            <p>
              O portal Embarque valoriza a privacidade de seus leitores. Coletamos apenas informações fornecidas voluntariamente, como nome e e-mail no ato de inscrição na nossa newsletter editorial ou no envio de mensagens de contato.
            </p>
            <h3 className="font-editorial text-lg text-[#16283F]">2. Cookies e Navegação</h3>
            <p>
              Utilizamos cookies estritamente necessários para o funcionamento técnico da navegação, preferências de idioma e análise anônima agregada de tráfego. Nenhum dado é comercializado para terceiros.
            </p>
            <h3 className="font-editorial text-lg text-[#16283F]">3. Direitos do Titular (LGPD)</h3>
            <p>
              Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), o usuário pode solicitar a qualquer momento a confirmação de existência de tratamento, correção de dados incompletos ou eliminação definitiva de sua inscrição através do e-mail contato@embarqueviagem.com.
            </p>
          </div>
        </article>
      )}

      {type === 'terms' && (
        <article className="space-y-6">
          <div className="border-b border-[#1C2230]/10 pb-6">
            <span className="text-xs uppercase tracking-widest text-[#B8923B] font-semibold block mb-2">
              Diretrizes de Uso
            </span>
            <h1 className="font-editorial text-4xl text-[#16283F] tracking-tight">
              Termos de Uso
            </h1>
            <span className="text-xs text-[#1C2230]/50 block mt-2">Vigência: 2025/2026</span>
          </div>
          <div className="prose prose-stone max-w-none text-xs sm:text-sm text-[#1C2230]/80 space-y-4 leading-relaxed">
            <p>
              Todo o conteúdo editorial, fotografias autorais, textos e código de ferramentas interativas disponíveis no Embarque são protegidos pela legislação de direitos autorais e propriedade intelectual. É proibida a reprodução sem citação expressa da fonte com link ativo.
            </p>
            <p>
              As estimativas geradas pela Calculadora de Orçamento e pelo Comparador de Custos têm caráter exclusivamente informativo e de planejamento, não configurando oferta contratual vinculante ou garantia de preço junto a estabelecimentos comerciais.
            </p>
          </div>
        </article>
      )}

      {type === 'affiliates' && (
        <article className="space-y-6">
          <div className="border-b border-[#1C2230]/10 pb-6">
            <span className="text-xs uppercase tracking-widest text-[#B8923B] font-semibold block mb-2">
              Transparência Comercial
            </span>
            <h1 className="font-editorial text-4xl text-[#16283F] tracking-tight">
              Aviso sobre Afiliados e Parcerias
            </h1>
          </div>
          <div className="prose prose-stone max-w-none text-xs sm:text-sm text-[#1C2230]/80 space-y-4 leading-relaxed">
            <p className="p-4 bg-[#FAF8F3] border border-[#1C2230]/15 rounded-lg font-medium text-[#16283F]">
              Em cumprimento às melhores práticas internacionais e de transparência com nossos leitores, declaramos que o portal Embarque participa de programas de afiliados e parcerias selecionadas com operadoras de viagens, plataformas de hospedagem (como Booking.com), seguros de viagem e vivências turísticas.
            </p>
            <h3 className="font-editorial text-lg text-[#16283F]">O que isso significa para você?</h3>
            <p>
              Ao clicar em determinados links comerciais e concluir uma reserva de hospedagem, seguro ou passeio, o Embarque pode receber uma pequena comissão. <strong>Isso não altera em nenhum centavo o valor final pago por você.</strong> Em muitos casos, nossas parcerias oferecem vantagens ou descontos exclusivos aos nossos leitores.
            </p>
            <h3 className="font-editorial text-lg text-[#16283F]">Independência Editorial</h3>
            <p>
              Nossa curadoria editorial é 100% independente. Jamais recomendamos um destino, hotel ou serviço apenas pelo benefício comercial. Avaliamos a qualidade real, segurança e encanto de cada localidade antes de apresentá-la em nossas páginas.
            </p>
          </div>
        </article>
      )}
    </div>
  );
};
