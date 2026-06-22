'use client';

import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function FiveStepsDifferent() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      className="relative overflow-hidden px-6 py-16 lg:px-20 lg:py-20"
      style={{
        backgroundImage:
          'linear-gradient(89.81deg, #2A81D2 30.34%, rgba(94, 214, 250, 0.35) 99.84%)',
      }}
    >
      {/* faded backdrop image */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-15 mix-blend-overlay"
        style={{
          backgroundImage:
            'url(/Marketing%20content/Group/four-people-working-together-on-laptops-2026-01-07-23-37-33-utc.jpg)',
        }}
      />

      <div
        ref={ref}
        className={`relative max-w-[640px] reveal ${isVisible ? 'revealed' : ''}`}
      >
        <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-[-1.5px] text-white lg:text-6xl">
          Five steps.<br />Done differently.
        </h2>
        <p className="mt-5 max-w-[510px] text-base leading-7 text-white/90 lg:text-lg">
          Whether you&apos;re booking an expert or earning from your skill,
          getting started takes minutes. Same flow, both sides.
        </p>
        <a
          href="https://app.flyrlink.com/"
          className="group mt-7 inline-flex items-center gap-2 rounded-full bg-white px-8 py-2.5 text-sm font-semibold text-[#0F3042] shadow-md shadow-[#29ABD2]/20 transition-transform hover:-translate-y-0.5"
        >
          Let&apos;s connect for Process
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
}
