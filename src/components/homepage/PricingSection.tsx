'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function PricingSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-[#F9FAFB] px-6 py-24 lg:px-20 lg:py-32">
      <div
        ref={ref}
        className={`mx-auto flex max-w-[1280px] flex-col gap-10 px-6 reveal lg:flex-row lg:items-end lg:justify-between ${
          isVisible ? 'revealed' : ''
        }`}
      >
        {/* Left — heading */}
        <div className="lg:max-w-[596px]">
          <div className="text-[11px] font-semibold tracking-[0.28em] text-[#99A1AF]">
            PRICING
          </div>
          <h2 className="mt-5 font-heading text-4xl font-bold leading-[1.05] tracking-[-1.5px] text-[#0C2738] lg:text-6xl">
            Simple, transparent{' '}
            <span className="font-serif font-normal italic text-[#29ABD2]">
              pricing.
            </span>
          </h2>
        </div>

        {/* Right — copy + CTA */}
        <div className="flex flex-col items-start gap-5 lg:items-end lg:text-right">
          <p className="max-w-[425px] text-base leading-6 text-[#4A5565]">
            Experts set their own price. You pay only for the session you book.
            No fine print, no surprises.
          </p>
          <Link
            href="/faq"
            className="group inline-flex items-center gap-2 rounded-full bg-[#0C2738] px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-[#0C2738]/20 transition-transform hover:-translate-y-0.5"
          >
            Not sure where to start?
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#0C2738] transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="h-3 w-3" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
