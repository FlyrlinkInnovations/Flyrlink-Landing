'use client';

import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const STATS = [
  { value: '500+', label: 'VERIFIED EXPERTS' },
  { value: '12',   label: 'CATEGORIES' },
  { value: '4.9★', label: 'AVG RATING' },
];

export default function VerifiedProsBand() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative overflow-hidden bg-[#2A81D2] px-6 py-16 lg:px-20 lg:py-20">
      {/* glow */}
      <div className="pointer-events-none absolute bottom-[-160px] left-0 h-[400px] w-[400px] rounded-full bg-[#29ABD2]/10 blur-[60px]" />

      <div
        ref={ref}
        className={`relative mx-auto flex max-w-[1280px] flex-col items-center gap-10 px-6 text-center reveal ${
          isVisible ? 'revealed' : ''
        }`}
      >
        <div className="max-w-3xl">
          <h2 className="font-heading text-4xl leading-[1.05] tracking-[-1.5px] text-white sm:text-5xl lg:text-6xl">
            <span className="font-bold">500+ verified pros,</span>{' '}
            <span className="font-normal">one tap away.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/90 lg:text-lg">
            From wellness to weddings, photography to tax filing — real Indian
            experts, vetted by humans, rated by clients.
          </p>
        </div>

        {/* Stats card */}
        <div className="w-full max-w-[768px] rounded-2xl border border-white/40 bg-white/60 backdrop-blur">
          <div className="grid grid-cols-3 divide-x divide-gray-200/70">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1 px-4 py-6">
                <span className="font-display text-3xl font-bold text-[#0C2738]">
                  {s.value}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#404145]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3">
          <a
            href="https://app.flyrlink.com/"
            className="group inline-flex items-center gap-2 rounded-full bg-[#29ABD2] px-6 py-3 text-sm font-semibold text-[#0C2738] shadow-lg shadow-[#29ABD2]/30 ring-1 ring-white/40 transition-transform hover:-translate-y-0.5"
          >
            Browse all experts
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
          <p className="text-xs text-[#D1D5DC]">500+ verified pros across 12 categories</p>
        </div>
      </div>
    </section>
  );
}
