'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Star, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import SearchAutocomplete from './SearchAutocomplete';

const POPULAR_CHIPS: { label: string; slug: string }[] = [
  { label: 'Yoga Trainer',        slug: 'yoga-trainer' },
  { label: 'Logo Design',         slug: 'logo-design' },
  { label: 'Academic Tutor',      slug: 'academic-tutor' },
  { label: 'UGC Creators',        slug: 'ugc-creators' },
  { label: 'Tax Consulting',      slug: 'tax-consulting' },
  { label: 'Product Photography', slug: 'product-photography' },
];

const LIVE_EXPERTS = [
  { name: 'Priya Sharma',  role: 'Yoga Trainer',     image: 'https://randomuser.me/api/portraits/women/68.jpg', rating: 4.9, price: 499 },
  { name: 'Ravi Mehta',    role: 'Logo Designer',    image: 'https://randomuser.me/api/portraits/men/52.jpg',   rating: 4.8, price: 1499 },
  { name: 'Anjali Rao',    role: 'Math Tutor',       image: 'https://randomuser.me/api/portraits/women/47.jpg', rating: 5.0, price: 699 },
  { name: 'Karan Singh',   role: 'UGC Creator',      image: 'https://randomuser.me/api/portraits/men/36.jpg',   rating: 4.9, price: 1999 },
  { name: 'Neha Iyer',     role: 'Tax Consultant',   image: 'https://randomuser.me/api/portraits/women/72.jpg', rating: 4.9, price: 1299 },
  { name: 'Aman Verma',    role: 'Fitness Coach',    image: 'https://randomuser.me/api/portraits/men/75.jpg',   rating: 4.8, price: 899 },
];

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => { setIsVisible(true); }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-navy-950 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-60" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-brand/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px]" />
      </div>

      <div
        className={`relative z-10 w-full max-w-6xl mx-auto px-6 pt-28 pb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* Kicker */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-300 animate-pulse" />
            500+ verified experts available now
          </span>
        </div>

        {/* Headline */}
        <h1 className="mt-6 text-center font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
          <span className="text-white">Find a coach, tutor, designer.</span>
          <span className="mt-2 block font-serif italic font-medium text-brand-300">
            Book in minutes.
          </span>
        </h1>

        <p className="mt-5 text-center text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
          Book 1:1 sessions with verified pros across 12+ categories. Real
          people, real ratings, real results.
        </p>

        {/* Search */}
        <div className="mt-9 mx-auto max-w-2xl">
          <SearchAutocomplete
            variant="dark"
            size="lg"
            placeholder='Try "yoga trainer", "logo design", "tax consulting"…'
          />

          {/* Popular chips */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-medium uppercase tracking-wider text-white/40 mr-1">
              Popular
            </span>
            {POPULAR_CHIPS.map((chip) => (
              <Link
                key={chip.slug}
                href={`/services/${chip.slug}`}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur transition-all hover:border-brand-300/40 hover:bg-brand/10 hover:text-white"
              >
                {chip.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Trust row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
          <div className="flex items-center gap-2 text-gray-300">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-semibold text-white">4.9</span>
            <span className="text-gray-400">· 500+ reviews</span>
          </div>
          <span className="hidden sm:block h-4 w-px bg-white/10" />
          <span className="text-gray-300">
            <span className="font-semibold text-white">500+</span> verified experts
          </span>
          <span className="hidden sm:block h-4 w-px bg-white/10" />
          <span className="text-gray-300">
            <span className="font-semibold text-white">12</span> categories · India-wide
          </span>
        </div>

        {/* Live experts strip */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-4 px-1">
            <span className="text-[11px] font-semibold tracking-[0.2em] text-white/50 uppercase">
              Available now
            </span>
            <a
              href="https://app.flyrlink.com/"
              className="text-xs font-medium text-brand-300 hover:text-white transition-colors inline-flex items-center gap-1"
            >
              Browse all experts
              <ArrowRight className="h-3 w-3" />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {LIVE_EXPERTS.map((expert) => (
              <a
                key={expert.name}
                href="https://app.flyrlink.com/"
                className="group relative rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur transition-all hover:bg-white/10 hover:border-brand-300/30 hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-3">
                  <div className="relative flex-shrink-0">
                    <Image
                      src={expert.image}
                      alt={expert.name}
                      width={44}
                      height={44}
                      className="h-11 w-11 rounded-full object-cover ring-2 ring-white/10"
                    />
                    <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-400 ring-2 ring-navy-950" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-white">{expert.name}</p>
                    <p className="truncate text-xs text-gray-400">{expert.role}</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="inline-flex items-center gap-1 text-gray-300">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    {expert.rating}
                  </span>
                  <span className="text-white/60">
                    From <span className="font-semibold text-white">₹{expert.price}</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Trusted by */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-center text-[11px] font-semibold tracking-[0.24em] text-gray-500 mb-6">
            FEATURED IN
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 md:gap-x-20 gap-y-6">
            {['Foundershub', 'LEORIX'].map((name) => (
              <span
                key={name}
                className="font-serif italic text-2xl md:text-[28px] text-white/40 hover:text-brand-300 transition-colors duration-300 select-none"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
