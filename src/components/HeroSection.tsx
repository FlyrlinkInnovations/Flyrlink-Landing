'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Palette, Briefcase } from 'lucide-react';

const POPULAR_LINKS: { label: string; slug: string }[] = [
  { label: 'Yoga Teacher',   slug: 'yoga-trainer' },
  { label: 'Designer',       slug: 'logo-design' },
  { label: 'UGC Creator',    slug: 'ugc-creators' },
  { label: 'Logo',           slug: 'logo-design' },
  { label: 'Tax Consultant', slug: 'tax-consulting' },
];

const FEATURED_LOGOS = [
  '/featured/a.png',
  '/featured/f.png',
  '/featured/g.png',
  '/featured/m.png',
  '/featured/w.png',
  '/featured/ct.png',
  '/featured/lv.png',
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
            <a
              href="https://app.flyrlink.com/"
              aria-label="Sign up for Flyrlink"
              className="group relative block aspect-[614/430] w-full overflow-hidden rounded-3xl bg-[#F3F3F6] shadow-sm transition-all hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              <Image
                src="/landing/Aside.png"
                alt="Clients booking verified experts on Flyrlink"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 614px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </a>
          </div>
        </div>

        {/* Featured in */}
        <div className="mt-16 lg:mt-[86px]">
          <p className="text-[13px] font-bold text-[#354146]">Featured in</p>
          <div className="marquee-pause relative mt-5 overflow-hidden">
            <div
              className="animate-marquee-left flex w-max items-center gap-14"
              style={{ animationDuration: '28s' }}
            >
              {[...FEATURED_LOGOS, ...FEATURED_LOGOS].map((src, i) => (
                <Image
                  key={`${src}-${i}`}
                  src={src}
                  alt="Featured brand"
                  width={160}
                  height={48}
                  aria-hidden={i >= FEATURED_LOGOS.length}
                  className="h-9 w-auto flex-shrink-0 object-contain"
                />
              ))}
            </div>
            {/* edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
