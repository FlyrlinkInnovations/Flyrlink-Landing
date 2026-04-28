'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Check,
  User,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type Plan = {
  name: string;
  kicker: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  tone: 'light' | 'featured';
  badge?: string;
  price?: string;
  priceSuffix?: string;
};

const plans: Plan[] = [
  {
    name: 'For Clients',
    kicker: 'BOOK A SESSION',
    description:
      'Find a coach, tutor, designer, or expert. Browse free, pay only for the session you book.',
    features: [
      'Free to sign up and browse',
      'Sessions from ₹499, set by each expert',
      'No subscription, no hidden fees',
      'Free chat before you book',
      'Secure payments · refund protection',
    ],
    cta: 'Find an expert',
    href: 'https://app.flyrlink.com/',
    icon: User,
    tone: 'light',
    price: 'Free',
    priceSuffix: 'to sign up',
  },
  {
    name: 'For Experts',
    kicker: 'EARN FROM YOUR SKILL',
    description:
      'Turn what you know into income. Set your own price, get discovered, paid on time.',
    features: [
      'Free expert profile',
      'Set your own session price',
      'Keep the majority of earnings',
      'Live calendar & in-app video',
      'Real ratings, grow your reputation',
    ],
    cta: 'Become an expert',
    href: 'https://app.flyrlink.com/',
    icon: Briefcase,
    tone: 'featured',
    badge: 'MOST POPULAR',
    price: '0%',
    priceSuffix: 'upfront · revenue-share per session',
  },
];

export default function PricingSection() {
  const { ref, isVisible } = useScrollReveal();
  const [active, setActive] = useState(1);

  const next = () => setActive((a) => (a + 1) % plans.length);
  const prev = () => setActive((a) => (a - 1 + plans.length) % plans.length);

  return (
    <section id="pricing" className="bg-gray-50 py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 reveal ${isVisible ? 'revealed' : ''}`}
      >
        {/* Header */}
        <div className="mb-12 grid items-end gap-6 md:mb-14 md:grid-cols-2 md:gap-10">
          <div>
            <div className="mb-3 text-[11px] font-semibold tracking-[0.28em] text-gray-400">
              PRICING
            </div>
            <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-navy-900 md:text-5xl lg:text-6xl">
              Simple, transparent
              <span className="mt-1 block font-serif italic font-medium text-brand">
                pricing.
              </span>
            </h2>
          </div>
          <div className="md:text-right">
            <p className="max-w-md text-gray-600 md:ml-auto">
              Experts set their own price. You pay only for the session you
              book. No fine print, no surprises.
            </p>
            <Link
              href="/contact"
              className="group mt-5 inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white shadow-xl shadow-navy-900/20 transition-all duration-300 hover:bg-navy-800 hover:shadow-brand/20"
            >
              Have a question?
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-navy-900 transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex items-center gap-3 md:gap-5">
            <button
              onClick={prev}
              aria-label="Previous plan"
              className="z-10 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-navy-900 shadow-sm transition-all duration-300 hover:border-brand/40 hover:bg-brand/5 hover:text-brand"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <div className="grid flex-1 gap-6 md:grid-cols-2 md:gap-6">
              {plans.map((plan, i) => (
                <PlanCard
                  key={plan.name}
                  plan={plan}
                  featured={i === active}
                  onClick={() => setActive(i)}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next plan"
              className="z-10 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-navy-900 shadow-sm transition-all duration-300 hover:border-brand/40 hover:bg-brand/5 hover:text-brand"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-1.5">
            {plans.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`View plan ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active
                    ? 'w-8 bg-brand'
                    : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-14 text-center">
          <p className="mb-3 text-sm text-gray-500">
            Not sure where to start?
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand decoration-brand/40 decoration-2 underline-offset-4 hover:underline"
          >
            Chat with our team
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function PlanCard({
  plan,
  featured,
  onClick,
}: {
  plan: Plan;
  featured: boolean;
  onClick: () => void;
}) {
  const Icon = plan.icon;
  const featuredTone = plan.tone === 'featured';

  return (
    <button
      onClick={onClick}
      className={`group relative flex flex-col overflow-hidden rounded-2xl p-6 text-left transition-all duration-500 md:p-8 ${
        featured
          ? featuredTone
            ? 'md:-translate-y-3 bg-navy-900 text-white shadow-2xl shadow-navy-900/30'
            : 'md:-translate-y-3 bg-white border border-brand/30 shadow-2xl shadow-brand/10'
          : 'bg-white border border-gray-200/80 opacity-60 hover:opacity-100'
      }`}
    >
      {/* Featured navy card decor */}
      {featured && featuredTone && (
        <>
          <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-50" />
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-brand/10 blur-3xl" />
        </>
      )}

      <div className="relative flex flex-1 flex-col">
        {/* Top row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                featuredTone && featured
                  ? 'bg-white/10 text-brand-300'
                  : 'bg-brand/10 text-brand'
              }`}
            >
              <Icon className="h-4 w-4" />
            </span>
            <span
              className={`text-[10px] font-semibold tracking-[0.24em] ${
                featuredTone && featured ? 'text-brand-300' : 'text-brand'
              }`}
            >
              {plan.kicker}
            </span>
          </div>
          {plan.badge && featured && (
            <span className="rounded-full bg-brand px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-white">
              {plan.badge}
            </span>
          )}
        </div>

        {/* Name */}
        <h3
          className={`mt-5 font-display text-2xl font-bold ${
            featuredTone && featured ? 'text-white' : 'text-navy-900'
          }`}
        >
          {plan.name}
        </h3>

        {/* Price */}
        {plan.price && (
          <div className="mt-3 flex items-baseline gap-2">
            <span
              className={`font-serif text-4xl italic font-medium leading-none ${
                featuredTone && featured ? 'text-white' : 'text-navy-900'
              }`}
            >
              {plan.price}
            </span>
            {plan.priceSuffix && (
              <span
                className={`text-xs ${
                  featuredTone && featured ? 'text-white/60' : 'text-gray-500'
                }`}
              >
                {plan.priceSuffix}
              </span>
            )}
          </div>
        )}

        <p
          className={`mt-4 text-sm ${
            featuredTone && featured ? 'text-white/70' : 'text-gray-600'
          }`}
        >
          {plan.description}
        </p>

        {/* Features */}
        <ul className="mt-6 space-y-2.5">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-3">
              <Check
                className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                  featuredTone && featured ? 'text-brand-300' : 'text-brand'
                }`}
              />
              <span
                className={`text-sm ${
                  featuredTone && featured ? 'text-white/85' : 'text-gray-700'
                }`}
              >
                {f}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-7">
          {featured ? (
            <a
              href={plan.href}
              className={`inline-flex w-full items-center justify-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold shadow-lg transition-all duration-300 ${
                featuredTone
                  ? 'bg-white text-navy-900 hover:bg-gray-100'
                  : 'bg-navy-900 text-white hover:bg-navy-800'
              }`}
            >
              {plan.cta}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-400">
              Tap to view plan
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          )}
        </div>
      </div>
    </button>
  );
}
