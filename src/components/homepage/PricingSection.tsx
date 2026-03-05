'use client';

import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function PricingSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="pricing" className="py-28 bg-gray-50">
      <div ref={ref} className={`max-w-7xl mx-auto px-6 reveal ${isVisible ? 'revealed' : ''}`}>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-brand/10 border border-brand/20 rounded-full text-brand text-xs font-semibold uppercase tracking-wider mb-4">
            Pricing
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 tracking-tight mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experts set their own pricing. You only pay for the sessions you book.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* For Clients */}
          <div className="bg-white p-8 rounded-xl border border-gray-200/80 card-premium hover:border-brand/30">
            <h3 className="font-display text-2xl font-bold text-navy-900 mb-4">For Clients</h3>
            <p className="text-gray-600 mb-6">
              Browse and book experts with transparent, upfront pricing.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Free to sign up and browse',
                'Pay per session (starting from INR 500)',
                'No hidden fees or subscriptions',
                'Secure payment with refund protection',
                'Book 1:1 sessions, events, and more',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://app.flyrlink.com/"
              className="block w-full bg-brand hover:bg-brand-600 text-white py-3 rounded-lg font-semibold transition-colors text-center"
            >
              Get Started Free
            </a>
          </div>

          {/* For Experts */}
          <div className="bg-navy-900 p-8 rounded-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-50" />
            <div className="relative">
              <span className="inline-block bg-brand text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                POPULAR
              </span>
              <h3 className="font-display text-2xl font-bold text-white mb-4">For Experts</h3>
              <p className="text-gray-400 mb-6">
                Monetize your expertise with flexible pricing and powerful tools.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Free to create your expert profile',
                  'Set your own session pricing',
                  'Keep the majority of your earnings',
                  'Host events and group sessions',
                  'Analytics and growth tools included',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-300 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://app.flyrlink.com/"
                className="block w-full bg-white hover:bg-gray-100 text-navy-900 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                Become an Expert
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">Need a custom solution or have questions?</p>
          <Link
            href="/book-call"
            className="group inline-flex items-center gap-2 text-brand hover:text-brand-600 font-semibold"
          >
            Book a Call with Us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
