'use client';

import { Star, Sparkles, ShieldCheck, Layers, Users } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';

const featured = {
  name: 'Girish Kotte',
  role: 'FOUNDER · FLYRLINK',
  quote:
    'I built Flyrlink because finding the right expert shouldn\'t take weeks of asking around. From a yoga trainer to a tax consultant, your next expert is now ',
  accent: 'just minutes away.',
  link: 'https://gkotte.com',
  image: '/gk.jpeg',
};

const secondary = [
  {
    name: 'Anjali Reddy',
    role: 'YOGA STUDENT · BENGALURU',
    quote:
      'Booked Priya expecting a generic class. Got a custom plan for my back pain that actually worked. Three weeks in and ',
    accent: 'I can sleep again.',
    rating: 5,
  },
  {
    name: 'Manju Iyer',
    role: 'PARENT · CHENNAI',
    quote:
      'Booked a tutor for my son\'s board exam prep. He went from 60% to 89% in 3 months. ',
    accent: 'Wish I\'d found Flyrlink sooner.',
    rating: 5,
  },
];

const stats = [
  { icon: Layers, value: 89, suffix: '+', label: 'Services' },
  { icon: Star, value: 12, suffix: '', label: 'Categories' },
  { icon: Users, value: 500, suffix: '+', label: 'Verified Experts' },
  { icon: Sparkles, value: 10, suffix: 'k+', label: 'Sessions' },
  { icon: ShieldCheck, displayValue: '4.9★', label: 'Average Rating' },
];

function StatItem({
  stat,
  isVisible,
}: {
  stat: (typeof stats)[0];
  isVisible: boolean;
}) {
  const Icon = stat.icon;
  const count = useCountUp(stat.value || 0, 2000, isVisible);

  return (
    <div className="text-center px-6">
      <Icon className="w-7 h-7 text-brand-300 mx-auto mb-3" />
      <p className="text-2xl md:text-3xl font-bold text-white mb-1">
        {stat.displayValue || `${count}${stat.suffix}`}
      </p>
      <p className="text-gray-400 text-sm">{stat.label}</p>
    </div>
  );
}

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-28 bg-white">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 reveal ${isVisible ? 'revealed' : ''}`}
      >
        {/* Top bar */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-navy-900">4.9</span>
            <span className="text-gray-300">·</span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gray-400">
              120 reviews
            </span>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-navy-900">500+</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-400">
                EXPERTS
              </span>
            </div>
            <span className="h-5 w-px bg-gray-200" />
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-navy-900">10k+</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-400">
                SESSIONS
              </span>
            </div>
          </div>
        </div>

        {/* Headline with ghost watermark */}
        <div className="relative">
          <span
            aria-hidden
            className="pointer-events-none absolute -top-8 right-0 select-none font-serif italic font-medium leading-none text-brand-50 md:text-[12rem]"
            style={{ fontSize: 'clamp(96px, 14vw, 180px)' }}
          >
            loved
          </span>
          <div className="relative">
            <div className="mb-2 text-[11px] font-semibold tracking-[0.28em] text-gray-400">
              TESTIMONIALS
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-navy-900">
              Loved by{' '}
              <span className="font-serif italic font-medium text-brand">
                10,000+ clients.
              </span>
            </h2>
          </div>
        </div>

        {/* Featured pull-quote */}
        <div className="relative mx-auto mt-14 max-w-3xl text-center">
          <div className="mb-2 font-serif text-6xl leading-none text-brand/20 md:text-7xl">
            &ldquo;
          </div>
          <p className="text-2xl font-medium leading-snug text-navy-900 md:text-3xl">
            {featured.quote}
            <span className="font-serif italic font-medium text-brand">
              {featured.accent}
            </span>
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={featured.image}
              alt={featured.name}
              loading="lazy"
              className="h-10 w-10 rounded-full object-cover shadow-md"
            />
            <div className="text-left">
              <a
                href={featured.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-navy-900 hover:text-brand"
              >
                {featured.name}
              </a>
              <div className="text-[10px] font-semibold tracking-[0.22em] text-gray-400">
                {featured.role}
              </div>
            </div>
          </div>
        </div>

        {/* Secondary quotes */}
        <div className="mt-16 grid gap-10 border-t border-gray-100 pt-10 md:grid-cols-2 md:gap-16">
          {secondary.map((t) => (
            <div key={t.name} className="relative">
              <span
                aria-hidden
                className="pointer-events-none absolute -top-2 right-0 font-serif text-4xl text-brand/10"
              >
                &rdquo;
              </span>
              <div className="mb-3 flex items-center gap-0.5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-base leading-relaxed text-navy-900 md:text-lg">
                {t.quote}
                <span className="font-serif italic font-medium text-brand">
                  {t.accent}
                </span>
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-700 text-xs font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-navy-900">
                    {t.name}
                  </div>
                  <div className="text-[10px] font-semibold tracking-[0.22em] text-gray-400">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-20 bg-navy-900 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-white/10">
            {stats.map((stat, index) => (
              <StatItem key={index} stat={stat} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
