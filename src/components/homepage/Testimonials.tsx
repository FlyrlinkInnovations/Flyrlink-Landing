'use client';

import { Star, Sparkles, ShieldCheck, Layers, Users } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';

const testimonials = [
  {
    name: 'Anjali Reddy',
    role: 'YOGA STUDENT · BENGALURU',
    quote:
      'Booked Priya expecting a generic class. Got a custom plan for my back pain that actually worked. Three weeks in and ',
    accent: 'I can sleep again.',
    image:
      '/Marketing%20content/Profiles/cheerful-woman-smiling-with-wavy-hair-on-blue-2026-01-09-09-53-59-utc.jpg',
  },
  {
    name: 'Manju Iyer',
    role: 'PARENT · CHENNAI',
    quote:
      "Booked a tutor for my son's board exam prep. He went from 60% to 89% in 3 months. ",
    accent: "Wish I'd found Flyrlink sooner.",
    image:
      '/Marketing%20content/Profiles/professional-woman-smiling-portrait-in-business-at-2026-01-08-05-28-10-utc.jpg',
  },
  {
    name: 'Rahul Verma',
    role: 'STARTUP FOUNDER · MUMBAI',
    quote:
      'Found a brand designer in a day. Clear pricing, real reviews, no agency runaround. ',
    accent: 'Shipped our rebrand in two weeks.',
    image:
      '/Marketing%20content/Profiles/professional-headshot-of-a-man-in-a-suit-2026-01-07-07-10-42-utc.jpg',
  },
  {
    name: 'Sneha Nair',
    role: 'SMALL BUSINESS · KOCHI',
    quote:
      'My GST filing used to be a nightmare. Booked a verified consultant and it was sorted in one call. ',
    accent: 'Now I actually understand my taxes.',
    image:
      '/Marketing%20content/Profiles/confident-business-woman-poses-in-corporate-office-2026-01-09-10-52-25-utc.jpg',
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
    <div className="px-6 text-center">
      <Icon className="mx-auto mb-3 h-7 w-7 text-brand-300" />
      <p className="mb-1 text-2xl font-bold text-white md:text-3xl">
        {stat.displayValue || `${count}${stat.suffix}`}
      </p>
      <p className="text-sm text-gray-400">{stat.label}</p>
    </div>
  );
}

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-white py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 reveal ${isVisible ? 'revealed' : ''}`}
      >
        {/* Top bar */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
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

        {/* Heading */}
        <div className="mb-2 text-[11px] font-semibold tracking-[0.28em] text-gray-400">
          TESTIMONIALS
        </div>
        <h2 className="font-heading text-4xl font-bold leading-[1.05] tracking-[-1.5px] text-navy-900 md:text-5xl lg:text-6xl">
          Loved by{' '}
          <span className="font-normal">10,000+ clients.</span>
        </h2>

        {/* 2x2 testimonial grid */}
        <div className="mt-12 grid gap-x-16 gap-y-12 border-t border-gray-100 pt-12 md:grid-cols-2">
          {testimonials.map((t) => (
            <div key={t.name} className="relative">
              <span
                aria-hidden
                className="pointer-events-none absolute -top-2 right-0 font-serif text-4xl text-brand/10"
              >
                &rdquo;
              </span>
              <div className="mb-3 flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-base leading-relaxed text-navy-900 md:text-lg">
                {t.quote}
                <span className="font-serif italic font-medium text-brand">
                  {t.accent}
                </span>
              </p>
              <div className="mt-5 flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.image}
                  alt={t.name}
                  loading="lazy"
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-brand/10"
                />
                <div>
                  <div className="text-sm font-semibold text-navy-900">{t.name}</div>
                  <div className="text-[10px] font-semibold tracking-[0.22em] text-gray-400">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-20 rounded-2xl bg-navy-900 p-8 md:p-12">
          <div className="grid grid-cols-2 divide-x divide-white/10 md:grid-cols-5">
            {stats.map((stat, index) => (
              <StatItem key={index} stat={stat} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
