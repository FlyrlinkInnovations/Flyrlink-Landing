'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Palette, Briefcase, Star } from 'lucide-react';

const POPULAR_LINKS: { label: string; slug: string }[] = [
  { label: 'Yoga Teacher',   slug: 'yoga-trainer' },
  { label: 'Designer',       slug: 'logo-design' },
  { label: 'UGC Creator',    slug: 'ugc-creators' },
  { label: 'Logo',           slug: 'logo-design' },
  { label: 'Tax Consultant', slug: 'tax-consulting' },
];

const FEATURED_LOGOS = [
  { name: 'Amazon',         src: '/logos/Amazon%20logo.jpg' },
  { name: 'Microsoft',      src: '/logos/Microsoft%20logo.jpg' },
  { name: 'Erba Solutions', src: '/logos/Erba%20Solutions.png' },
  { name: 'Cloudwink Tech', src: '/logos/Cloudwink%20Tech.jpg' },
  { name: 'Lumina',         src: '/logos/Lumina.jpg' },
  { name: 'Microsoft',      src: '/logos/Microsoft%20logo.jpg' },
  { name: 'Amazon',         src: '/logos/Amazon%20logo.jpg' },
  { name: 'Cloudwink Tech', src: '/logos/Cloudwink%20Tech.jpg' },
];

const FLOATING = [
  {
    name: 'Priya Sharma',
    role: 'Yoga Trainer',
    image: '/Marketing%20content/Profiles/smiling-woman-in-tank-top-with-prayer-pose-2026-01-09-10-22-23-utc.jpg',
    pos: 'left-4 bottom-4',
  },
  {
    name: 'Ravi Mehta',
    role: 'Logo Designer',
    image: '/Marketing%20content/Profiles/professional-headshot-of-a-man-in-a-suit-2026-01-07-07-10-42-utc.jpg',
    pos: 'right-4 bottom-4',
  },
];

export default function HeroSection() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => { setIsVisible(true); }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    router.push(q ? `/find-experts?q=${encodeURIComponent(q)}` : '/find-experts');
  };

  return (
    <section className="relative bg-white pt-24 lg:pt-28" aria-label="Hero section">
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-[72px] pb-12 lg:pb-16">
        <div
          className={`flex flex-col items-center gap-12 lg:flex-row lg:gap-[85px] transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Left column */}
          <div className="w-full lg:flex-1">
            <h1 className="font-heading font-semibold text-[#151515] text-[34px] leading-[1.1] tracking-[-0.02em] sm:text-[44px] lg:text-[54px] lg:leading-[58px] lg:tracking-[-1.8px]">
              Find a coach, tutor, designer, in Minutes
            </h1>

            <p className="mt-4 max-w-[581px] text-base leading-7 text-[#151515] sm:text-lg">
              Book 1:1 sessions with verified pros across 12+ categories. Real
              people, real ratings, real results.
            </p>

            {/* Category toggles */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex h-10 items-center gap-1.5 rounded-full border border-[#DBDBDE] px-[19px] text-[13px] font-semibold text-[#060318] transition-colors hover:bg-gray-50">
                <Palette className="h-[18px] w-[18px]" strokeWidth={1.5} />
                Designers
              </span>
              <span className="inline-flex h-10 items-center gap-1.5 rounded-full border border-[#DBDBDE] px-[19px] text-[13px] font-semibold text-[#060318] transition-colors hover:bg-gray-50">
                <Briefcase className="h-[18px] w-[18px]" strokeWidth={1.5} />
                Services
              </span>
            </div>

            {/* Search */}
            <form
              onSubmit={onSubmit}
              className="mt-3 flex h-14 w-full max-w-[599px] items-center gap-3 rounded-full border border-[#2A81D2]/60 bg-[#2A81D2]/10 pr-2"
            >
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="What type of work are you interested in?"
                aria-label="Search for experts"
                className="h-full flex-1 rounded-full bg-transparent pl-6 text-sm text-[#3A3546] placeholder:text-[#3A3546] focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Search"
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#51A3D5] bg-[#2A81D2] text-white transition-colors hover:bg-[#1d6ec0]"
              >
                <Search className="h-5 w-5" strokeWidth={1.25} />
              </button>
            </form>

            {/* Popular links */}
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="mr-1 text-[13px] font-bold text-[#354146]">Popular:</span>
              {POPULAR_LINKS.map((link, i) => (
                <Link
                  key={`${link.slug}-${i}`}
                  href={`/services/${link.slug}`}
                  className="rounded-full border border-[#E7E7E9] bg-white px-4 py-[7px] text-xs text-[#0D0C22] transition-colors hover:border-[#2A81D2]/40 hover:text-[#2A81D2]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right column — image card */}
          <div className="w-full lg:w-[614px] lg:flex-shrink-0">
            <div className="relative aspect-[614/430] w-full overflow-hidden rounded-3xl bg-[#F3F3F6]">
              <Image
                src="/Marketing%20content/Group/loving-couple-enjoying-coffee-and-using-laptop-out-2026-01-07-23-01-26-utc.jpg"
                alt="Clients booking verified experts on Flyrlink"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 614px"
                className="object-cover"
              />

              {/* Floating expert chips */}
              {FLOATING.map((p) => (
                <div
                  key={p.name}
                  className={`absolute ${p.pos} flex items-center gap-2 rounded-full bg-white/95 py-1 pl-1 pr-4 shadow-[0px_3px_6px_rgba(0,0,0,0.14)] backdrop-blur`}
                >
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <div className="leading-tight">
                    <p className="text-xs font-semibold text-[#0D0C22]">{p.name}</p>
                    <p className="flex items-center gap-1 text-[10px] text-gray-500">
                      <Star className="h-2.5 w-2.5 fill-[#FFBA00] text-[#FFBA00]" />
                      {p.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured in */}
        <div className="mt-16 lg:mt-[86px]">
          <p className="text-[13px] font-bold text-[#354146]">Featured in</p>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-x-8 gap-y-6">
            {FEATURED_LOGOS.map((logo, i) => (
              <Image
                key={`${logo.name}-${i}`}
                src={logo.src}
                alt={logo.name}
                width={160}
                height={68}
                className="h-11 w-auto object-contain opacity-80 transition-opacity hover:opacity-100"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
