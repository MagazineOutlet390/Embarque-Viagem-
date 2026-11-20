/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronDown, List } from 'lucide-react';

export interface TocItem {
  id: string;
  label: string;
  children?: { id: string; label: string }[];
}

interface ArticleTocProps {
  title: string;
  items: TocItem[];
  sectionsUnit: string;
  expandLabel: string;
  collapseLabel: string;
}

export const ArticleToc: React.FC<ArticleTocProps> = ({
  title,
  items,
  sectionsUnit,
  expandLabel,
  collapseLabel,
}) => {
  const [desktopExpanded, setDesktopExpanded] = useState(true);
  const [mobileExpanded, setMobileExpanded] = useState(false);

  if (items.length === 0) return null;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (!target) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const headerOffset = 96; // Clears sticky header (80px) with editorial breathing room
    const elementTop = target.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: Math.max(0, elementTop - headerOffset),
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });

    if (window.history && window.history.replaceState) {
      window.history.replaceState(
        window.history.state,
        '',
        `${window.location.pathname}#${targetId}`
      );
    }
  };

  const renderList = (listId: string) => (
    <ol id={listId} className="mt-3.5 pt-3.5 border-t border-[#1C2230]/10 space-y-2.5">
      {items.map((item, idx) => (
        <li key={item.id} className="leading-snug">
          <a
            href={`#${item.id}`}
            onClick={(e) => handleLinkClick(e, item.id)}
            className="group flex items-baseline gap-3 py-1 text-sm sm:text-[15px] text-[#16283F] hover:text-[#B8923B] transition-colors"
          >
            <span className="font-mono text-[11px] tabular-nums text-[#B8923B] font-semibold shrink-0 w-5">
              {String(idx + 1).padStart(2, '0')}
            </span>
            <span className="underline decoration-[#1C2230]/15 group-hover:decoration-[#B8923B]/60 underline-offset-4">
              {item.label}
            </span>
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <nav
      aria-label={title}
      className="my-8 rounded-xl bg-white border border-[#1C2230]/12 px-5 py-4 sm:px-6 sm:py-5 shadow-xs"
    >
      {/* Mobile collapsible header (< md) */}
      <div className="md:hidden">
        <button
          type="button"
          aria-expanded={mobileExpanded}
          aria-controls="article-toc-list-mobile"
          onClick={() => setMobileExpanded((prev) => !prev)}
          className="w-full min-h-[44px] flex items-center justify-between gap-3 text-left cursor-pointer focus-visible:outline-none"
        >
          <span className="flex items-center gap-2">
            <List className="w-4 h-4 text-[#B8923B] shrink-0" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#16283F]">
              {title}
            </span>
            <span className="text-xs text-[#1C2230]/55 font-normal">
              ({items.length} {sectionsUnit})
            </span>
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-medium text-[#B8923B] shrink-0">
            <span>{mobileExpanded ? collapseLabel : expandLabel}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                mobileExpanded ? 'rotate-180' : ''
              }`}
            />
          </span>
        </button>

        {mobileExpanded && renderList('article-toc-list-mobile')}
      </div>

      {/* Desktop index (>= md) */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <List className="w-4 h-4 text-[#B8923B] shrink-0" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#16283F]">
              {title}
            </span>
            <span className="text-xs text-[#1C2230]/55 font-normal">
              · {items.length} {sectionsUnit}
            </span>
          </div>
          <button
            type="button"
            aria-expanded={desktopExpanded}
            aria-controls="article-toc-list-desktop"
            onClick={() => setDesktopExpanded((prev) => !prev)}
            className="inline-flex items-center gap-1 text-xs font-medium text-[#1C2230]/65 hover:text-[#16283F] transition-colors cursor-pointer"
          >
            <span>{desktopExpanded ? collapseLabel : expandLabel}</span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                desktopExpanded ? 'rotate-180' : ''
              }`}
            />
          </button>
        </div>

        {desktopExpanded && renderList('article-toc-list-desktop')}
      </div>
    </nav>
  );
};
