'use client';

import { useState } from 'react';
import {
  Brain,
  CheckCircle,
  ChevronDown,
  Sparkles,
  Zap,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type Item = {
  title: string;
  description: string;
  tags: string[];
  icon: React.ComponentType<{ className?: string }>;
};

const items: Item[] = [
  {
    title: 'AI matching that reads between the lines',
    description:
      'Describe your need in plain language. Our models weigh skills, domain, style, budget and availability so the first intro already feels tailor-made.',
    tags: ['Context-aware', 'Multi-signal ranking', 'One-tap match'],
    icon: Brain,
  },
  {
    title: 'Connections that happen in minutes',
    description:
      'No more waiting for callbacks. Real-time availability, instant booking and seamless chat - so the moment stays hot.',
    tags: ['Live availability', 'Instant booking', 'In-app chat'],
    icon: Zap,
  },
  {
    title: 'Experts you can actually trust',
    description:
      'Every pro is vetted - KYC, reviews, outcome history. You see what they ship, not just what they say.',
    tags: ['KYC verified', 'Outcome-rated', 'Transparent reviews'],
    icon: CheckCircle,
  },
];

export default function FeaturesSection() {
  const { ref, isVisible } = useScrollReveal();
  const [open, setOpen] = useState(0);

  return (
    <section className="relative overflow-hidden bg-navy-950 py-28">
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-brand/5 blur-[120px]" />
      <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-brand/10 blur-[120px]" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-7xl px-6 reveal ${isVisible ? 'revealed' : ''}`}
      >
        {/* Header */}
        <div className="mb-12 md:mb-14">
          <div className="mb-4 text-[11px] font-semibold tracking-[0.28em] text-brand-300">
            WHY FLYRLINK
          </div>
          <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
            Three reasons.{' '}
            <span className="font-serif italic font-medium text-white/40">
              Done differently.
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-base text-gray-400 md:text-lg">
            We&apos;re redefining how people connect with experts - cutting-edge AI
            paired with human expertise to deliver outcomes, not just
            introductions.
          </p>
        </div>

        {/* Panel */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent p-6 md:rounded-[2.5rem] md:p-10">
          <div className="pointer-events-none absolute -right-24 -top-24 h-[380px] w-[380px] rounded-full bg-brand/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-24 h-[320px] w-[320px] rounded-full bg-brand/10 blur-3xl" />

          <div className="relative grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
            {/* Left accordion */}
            <div className="space-y-0 divide-y divide-white/10">
              {items.map((item, i) => {
                const isOpen = open === i;
                const Icon = item.icon;
                return (
                  <div key={item.title} className={i === 0 ? 'pt-0' : 'pt-6'}>
                    <button
                      onClick={() => setOpen(i)}
                      className="group flex w-full items-center justify-between gap-4 pb-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex h-8 w-8 items-center justify-center rounded-lg border transition-colors ${
                            isOpen
                              ? 'border-brand/30 bg-brand/15 text-brand-300'
                              : 'border-white/10 bg-white/5 text-gray-400 group-hover:border-brand/20 group-hover:text-brand-300'
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                        </span>
                        <span
                          className={`text-lg font-bold transition-colors md:text-xl ${
                            isOpen
                              ? 'text-white'
                              : 'text-white/70 group-hover:text-white'
                          }`}
                        >
                          {item.title}
                        </span>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 flex-shrink-0 text-gray-500 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-brand-300' : ''
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-md text-sm leading-relaxed text-gray-400 md:text-base">
                          {item.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand-300"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: product mock */}
            <div className="relative">
              <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-navy-800 to-navy-950 shadow-2xl shadow-black/40">
                {/* Browser chrome */}
                <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.02] px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                  <span className="ml-3 text-xs font-medium text-gray-500">
                    Match · New request
                  </span>
                </div>

                {/* Status row */}
                <div className="flex items-center justify-between px-5 pt-5 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-brand-700">
                      <Sparkles className="h-4 w-4 text-white" />
                    </span>
                    <div>
                      <div className="text-sm font-bold text-white">
                        Match engine · On
                      </div>
                      <div className="text-[10px] text-gray-500">
                        scanning 500+ verified experts
                      </div>
                    </div>
                  </div>
                  <span className="rounded-full border border-brand/30 bg-brand/15 px-2 py-0.5 text-[10px] font-bold text-brand-300">
                    AI
                  </span>
                </div>

                {/* Shimmer lines */}
                <div className="space-y-2 px-5 py-4">
                  <div className="h-2 w-full rounded-full bg-white/10" />
                  <div className="h-2 w-[82%] rounded-full bg-brand/50" />
                  <div className="h-2 w-[64%] rounded-full bg-white/10" />
                  <div className="h-2 w-[90%] rounded-full bg-white/10" />
                </div>

                {/* Gradient CTA */}
                <div className="px-5 pb-5 pt-2">
                  <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand via-brand-600 to-brand-700 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/40 transition-all duration-300 hover:shadow-brand/60">
                    <Zap className="h-4 w-4" />
                    Match now
                  </button>
                </div>
              </div>

              {/* Floating match score card */}
              <div className="absolute -bottom-6 right-2 z-10 w-56 rounded-xl border border-white/10 bg-navy-900/95 p-3 shadow-xl backdrop-blur-sm md:-bottom-8 md:right-6">
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-brand/15">
                    <CheckCircle className="h-3 w-3 text-brand-300" />
                  </span>
                  <div className="flex-1">
                    <p className="text-xs font-bold text-white">Match score</p>
                    <p className="mt-0.5 text-[10px] leading-snug text-gray-400">
                      Matches your criteria at{' '}
                      <span className="font-semibold text-brand-300">96%</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
