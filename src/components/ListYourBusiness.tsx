'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import {
  Pointer, ClipboardList, Contrast, Podcast, MessageCircle, Plus,
  BadgeCheck, Sparkles, Globe, Lock, Star, Contact, ArrowRight, Check, Heart,
  type LucideIcon,
} from 'lucide-react';

type Business = {
  name: string;
  category: string;
  tags: string[];
  rating: number;
  reviews: number;
  price: number;
  availability: string;
  gradient: string;
};

const BUSINESSES: Business[] = [
  { name: 'Seerto Design Studio', category: 'Design & Creative', tags: ['Branding', 'UI/UX'], rating: 4.9, reviews: 124, price: 5000, availability: 'Available Today', gradient: 'from-purple-500 via-fuchsia-500 to-blue-600' },
  { name: 'Madian Pro Solutions', category: 'Business Services', tags: ['Strategy', 'Ops'], rating: 4.8, reviews: 98, price: 5000, availability: 'This Week', gradient: 'from-sky-200 via-blue-300 to-indigo-400' },
  { name: 'Digital Marketing Expert', category: 'Marketing & SEO', tags: ['SEO', 'Ads'], rating: 4.9, reviews: 210, price: 5000, availability: 'Flexible Schedule', gradient: 'from-violet-800 via-indigo-800 to-indigo-950' },
  { name: 'Nova Web Labs', category: 'Tech & Development', tags: ['Next.js', 'Apps'], rating: 4.7, reviews: 76, price: 5000, availability: 'Available Today', gradient: 'from-purple-500 via-fuchsia-500 to-blue-600' },
  { name: 'Lumen Brand Co.', category: 'Design & Creative', tags: ['Logo', 'Identity'], rating: 5.0, reviews: 142, price: 5000, availability: 'This Week', gradient: 'from-sky-200 via-blue-300 to-indigo-400' },
  { name: 'PeakGrowth Consulting', category: 'Coaching & Training', tags: ['Mentoring', 'Workshops'], rating: 4.8, reviews: 64, price: 5000, availability: 'Flexible Schedule', gradient: 'from-violet-800 via-indigo-800 to-indigo-950' },
  { name: 'ClickRank Media', category: 'Marketing & SEO', tags: ['Content', 'Social'], rating: 4.6, reviews: 51, price: 5000, availability: 'Available Today', gradient: 'from-purple-500 via-fuchsia-500 to-blue-600' },
  { name: 'Forge Dev Studio', category: 'Tech & Development', tags: ['Backend', 'Cloud'], rating: 4.9, reviews: 88, price: 5000, availability: 'This Week', gradient: 'from-sky-200 via-blue-300 to-indigo-400' },
  { name: 'Apex Advisory', category: 'Business Services', tags: ['Finance', 'Legal'], rating: 4.7, reviews: 39, price: 5000, availability: 'Flexible Schedule', gradient: 'from-violet-800 via-indigo-800 to-indigo-950' },
];

const FEATURES = [
  { icon: BadgeCheck, title: 'Verified Listings', desc: 'Every listing is verified for accuracy and reliability.' },
  { icon: Sparkles, title: 'Fast Discovery', desc: 'Customers get what they are looking for in seconds.' },
  { icon: Globe, title: 'Global Support', desc: 'Local experts to help you around the world.' },
  { icon: Lock, title: 'Secure & Private', desc: 'Secure & Transparent, your data privacy is our top priority.' },
];

const TABS = ['How It Works?', 'Search', 'Categories'];

type Step = {
  icon: LucideIcon;
  tag: string;
  desc: string;
  circle: string;
  pill: string;
  last?: boolean;
};

const STEPS: Step[] = [
  {
    icon: Pointer,
    tag: 'Step 1 - Register or Sign In',
    desc: 'Create your free account in seconds. Once registered, you can access your dashboard, manage your business profile, view listing details, and track enquiries received through your listing.',
    circle: 'bg-[#2A7FD0]',
    pill: 'bg-[#1AA3C4] text-white',
  },
  {
    icon: ClipboardList,
    tag: 'Step 2 - List Your Business',
    desc: 'Add your business name, category, location, contact details, service description, images, and other important information. A complete profile helps customers understand your business better and improves your chances of appearing in relevant searches.',
    circle: 'bg-[#2A7FD0]',
    pill: 'bg-[#1AA3C4] text-white',
  },
  {
    icon: Contrast,
    tag: 'Step 3 - Get Approved & Go Live',
    desc: 'Once your listing is reviewed, it goes live quickly so customers can start discovering your business. With verified profile, your business can build more trust and attract better-quality enquiries.',
    circle: 'bg-[#1FA85A]',
    pill: 'bg-green-100 text-green-700',
    last: true,
  },
];

const CATEGORIES = [
  'Design & Creative', 'Tech & Development', 'Marketing & SEO',
  'Business Services', 'Coaching & Training',
];
const AVAILABILITY = ['Available Today', 'This Week', 'Flexible Schedule'];
const RATINGS = [
  { key: 'all', label: 'All Ratings', stars: 0, check: false },
  { key: '5', label: '(5 Stars)', stars: 5, check: false },
  { key: '4', label: '(4+ Stars)', stars: 4, check: false },
  { key: 'verified', label: 'Verified Only', stars: 0, check: true },
];

export default function ListYourBusiness() {
  const [activeTab, setActiveTab] = useState(0);
  const [query, setQuery] = useState('');
  const [rating, setRating] = useState('all');
  const [cats, setCats] = useState<string[]>([]);
  const [price, setPrice] = useState(5000);
  const [avail, setAvail] = useState<string[]>([]);

  const toggle = (list: string[], v: string, setter: (x: string[]) => void) =>
    setter(list.includes(v) ? list.filter((i) => i !== v) : [...list, v]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const minRating = rating === '5' ? 4.9 : rating === '4' ? 4.0 : 0;
    return BUSINESSES.filter((b) => {
      const mq = !q || b.name.toLowerCase().includes(q) || b.category.toLowerCase().includes(q) || b.tags.some((t) => t.toLowerCase().includes(q));
      const mc = cats.length === 0 || cats.includes(b.category);
      const mr = b.rating >= minRating;
      const ma = avail.length === 0 || avail.includes(b.availability);
      return mq && mc && mr && ma;
    });
  }, [query, rating, cats, avail]);

  return (
    <main className="bg-white">
      {/* Section 1 — Hero banner */}
      <section
        className="relative overflow-hidden px-6 pb-20 pt-32 text-center"
        style={{ backgroundImage: 'linear-gradient(135deg, #2A81D2 0%, #1d6ec0 100%)' }}
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="relative mx-auto max-w-3xl">
          <h1 className="font-heading text-3xl font-bold tracking-[-0.5px] text-white md:text-4xl lg:text-5xl">
            Find Your Perfect Service Provider
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/80 md:text-base">
            Discover thousands of verified professionals and businesses in your area
          </p>
        </div>
      </section>

      {/* Section 2 — How it works */}
      <section className="bg-[#E9F1FB] px-6 py-12 lg:py-16">
        <div className="mx-auto max-w-6xl">
          {/* tabs */}
          <div className="flex flex-wrap items-center gap-6">
            {TABS.map((t, i) => (
              <button
                key={t}
                type="button"
                onClick={() => setActiveTab(i)}
                className={`rounded-lg text-sm font-semibold transition-colors ${
                  activeTab === i
                    ? 'bg-[#2A6CC9] px-5 py-2.5 text-white shadow-sm'
                    : 'px-1 py-2.5 text-[#2A81D2] hover:text-[#1d6ec0]'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Left: vertical stepper */}
            <div>
              {STEPS.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.tag} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <span
                        className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full text-white shadow-md ${s.circle}`}
                      >
                        <Icon className="h-7 w-7" strokeWidth={2} />
                      </span>
                      {!s.last && (
                        <span className="my-2 w-px flex-1 bg-[#2A7FD0]/40" style={{ minHeight: '48px' }} />
                      )}
                    </div>
                    <div className={s.last ? '' : 'pb-8'}>
                      <span
                        className={`inline-block rounded-md px-3 py-1.5 text-xs font-semibold ${s.pill}`}
                      >
                        {s.tag}
                      </span>
                      <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: CTA cards */}
            <div className="space-y-5">
              {/* Add your business - free */}
              <div className="rounded-2xl bg-[#2A7FD0] px-6 py-8 text-center shadow-md">
                <h3 className="text-2xl font-bold text-white">Add Your Business - FREE</h3>
                <p className="mt-2 text-sm text-white/85">Start Your Back-links Now</p>
              </div>

              {/* Everything under 1 minute */}
              <div className="rounded-2xl border border-[#2A81D2]/30 bg-[#CBE0F5] p-6">
                <div className="flex items-center gap-2.5">
                  <Podcast className="h-5 w-5 text-[#0C2738]" strokeWidth={2} />
                  <h4 className="text-lg font-bold text-[#0C2738]">Everything Under 1 Minute</h4>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#33506B]">
                  Creating your business profile is simple, fast, and user-friendly.
                  You can register, add basic details, and submit your listing in
                  under 60 seconds. No complicated setup. No technical skills needed.
                  Just a simple way to bring your business online.
                </p>
              </div>

              {/* Chat bar */}
              <a
                href="https://app.flyrlink.com/"
                className="flex items-center gap-3 rounded-2xl bg-[#22C55E] px-5 py-3.5 text-white transition-opacity hover:opacity-95"
              >
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white/20">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <span className="leading-tight">
                  <span className="block text-xs text-white/85">flyrlink.com</span>
                  <span className="block text-base font-bold">Chat with us</span>
                </span>
              </a>

              {/* Outline add button */}
              <a
                href="https://app.flyrlink.com/"
                className="flex items-center justify-center gap-1.5 rounded-2xl border border-[#2A81D2]/40 py-4 text-sm font-semibold text-[#2A81D2] transition-colors hover:bg-[#2A81D2]/5"
              >
                <Plus className="h-4 w-4" />
                Add Your Business
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Most trusted platform */}
      <section className="bg-white px-6 py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          {/* Left: hexagon badge */}
          <div className="flex justify-center">
            <div className="relative h-[260px] w-[230px]">
              <svg viewBox="0 0 200 230" className="absolute inset-0 h-full w-full" fill="none">
                <polygon
                  points="100,4 196,60 196,170 100,226 4,170 4,60"
                  stroke="#2A81D2"
                  strokeWidth="3"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <div className="flex gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <Star key={i} className="h-5 w-5 fill-[#2A81D2] text-[#2A81D2]" />
                  ))}
                </div>
                <div className="mt-4 font-heading text-xl font-bold leading-tight tracking-wide text-navy-900">
                  MOST<br />TRUSTED
                </div>
                <div className="mt-1 text-sm font-bold tracking-[0.2em] text-[#2A81D2]">
                  PLATFORM
                </div>
              </div>
            </div>
          </div>

          {/* Right: heading + features */}
          <div>
            <h2 className="font-heading text-3xl font-bold leading-tight tracking-[-0.5px] text-navy-900 md:text-4xl">
              The Most Trusted Business Listing Platform in India
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-500 md:text-base">
              Flyrlink is one of the best trusted local business directories in
              India. Why do lakhs of businesses and customers love to choose
              Flyrlink? We deliver real results, you can trust like no other:
            </p>

            <div className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {FEATURES.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="flex gap-3">
                    <Icon className="mt-0.5 h-6 w-6 flex-shrink-0 text-navy-900" strokeWidth={1.5} />
                    <div>
                      <h3 className="text-base font-bold text-navy-900">{f.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-gray-500">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — Why choose Flyrlink */}
      <section className="relative overflow-hidden bg-[#3877D4] px-6 py-16 text-center">
        <Burst className="absolute left-[8%] top-1/2 h-10 w-10 -translate-y-1/2 text-white/40" />
        <Burst className="absolute right-[16%] top-8 h-9 w-9 text-white/40" />
        <Burst className="absolute right-[7%] bottom-8 h-8 w-8 text-white/35" />
        <div className="relative mx-auto max-w-4xl">
          <h2 className="font-heading text-3xl font-bold tracking-[-0.5px] text-white md:text-4xl">
            Why Choose Flyrlink?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-white/85 md:text-base">
            Flyrlink is one of the growing business listing platforms helping
            businesses improve online visibility across multiple categories and
            locations. Whether you are a local shop, professional service
            provider, B2B company, software vendor, manufacturer, or agency, our
            platform helps you connect with customers who are actively searching.
          </p>
        </div>
      </section>

      {/* Section 5 — Start listing today */}
      <section className="bg-[#F5F8FC] px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold tracking-[-0.5px] text-navy-900 md:text-4xl">
              Start Listing Your Business Today
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-gray-500 md:text-base">
              Your customers are already searching online. Make sure they can find you.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
              <div className="flex h-36 items-center justify-center rounded-xl bg-gradient-to-br from-[#14532D] to-[#1F6B3B]">
                <Contact className="h-14 w-14 text-[#FACC15]" strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy-900">Create Your Free Account</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                Sign up in seconds using your mobile number. Access your business
                dashboard instantly. No payment required for free listings.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
              <div className="relative h-36 overflow-hidden rounded-xl">
                <Image
                  src="/Marketing%20content/Group/four-people-working-together-on-laptops-2026-01-07-23-37-33-utc.jpg"
                  alt="Submitting business details"
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy-900">Submit Your Business Details</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                Enter your business name, category, location and other required
                details. Provide accurate info for better leads and ranking.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
              <div className="relative flex h-36 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#2A81D2] to-[#1d6ec0]">
                <BadgeCheck className="absolute left-6 top-5 h-8 w-8 text-white/30" />
                <BadgeCheck className="absolute right-7 bottom-6 h-7 w-7 text-white/25" />
                <BadgeCheck className="h-16 w-16 text-white" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy-900">Get Approved &amp; Go Live</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                Our team verifies your details within 1 hour. Receive instant
                notifications when approved and show up in local search results.
              </p>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="https://app.flyrlink.com/"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#2A81D2] to-[#1d6ec0] px-7 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Add Your Business - Free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Section 6 — Search & filters */}
      <section className="bg-white px-6 py-12">
        <div className="mx-auto max-w-6xl">
          {/* search row */}
          <div className="flex gap-3">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, service, or location..."
              className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-sm text-navy-900 placeholder:text-gray-400 focus:border-brand focus:outline-none"
            />
            <button
              type="button"
              className="flex-shrink-0 rounded-lg bg-[#2A6CC9] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#1d6ec0]"
            >
              Search
            </button>
          </div>

          {/* rating pills */}
          <div className="mt-4 flex flex-wrap gap-3">
            {RATINGS.map((r) => {
              const active = rating === r.key;
              return (
                <button
                  key={r.key}
                  type="button"
                  onClick={() => setRating(r.key)}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                    active
                      ? 'bg-[#2A6CC9] text-white'
                      : 'border border-gray-300 bg-white text-navy-900 hover:border-brand'
                  }`}
                >
                  {r.stars > 0 && (
                    <span className="flex">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className={`h-3.5 w-3.5 ${
                            i <= r.stars ? 'fill-amber-400 text-amber-400' : 'fill-gray-200 text-gray-200'
                          }`}
                        />
                      ))}
                    </span>
                  )}
                  {r.check && <Check className="h-4 w-4" strokeWidth={3} />}
                  {r.label}
                </button>
              );
            })}
          </div>

          {/* service category */}
          <FilterPanel label="Service Category">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
              {CATEGORIES.map((c) => (
                <FilterCheck key={c} checked={cats.includes(c)} onChange={() => toggle(cats, c, setCats)} label={c} />
              ))}
            </div>
          </FilterPanel>

          {/* price range */}
          <FilterPanel label="Price Range">
            <input
              type="range"
              min={500}
              max={5000}
              step={100}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full accent-[#2A81D2]"
            />
            <p className="mt-2 text-xs text-gray-500">Max: ₹{price.toLocaleString('en-IN')}/hr</p>
          </FilterPanel>

          {/* availability */}
          <FilterPanel label="Availability">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {AVAILABILITY.map((a) => (
                <FilterCheck key={a} checked={avail.includes(a)} onChange={() => toggle(avail, a, setAvail)} label={a} />
              ))}
            </div>
          </FilterPanel>
        </div>
      </section>

      {/* Section 7 — Listings grid */}
      <section className="bg-white px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((b) => (
              <article
                key={b.name}
                className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className={`relative h-28 bg-gradient-to-br ${b.gradient}`}>
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-navy-900">
                    <BadgeCheck className="h-3 w-3 text-brand" />
                    Verified
                  </span>
                  <button
                    type="button"
                    aria-label="Save to wishlist"
                    className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-gray-500 hover:text-rose-500"
                  >
                    <Heart className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-[15px] font-bold text-navy-900">{b.name}</h3>
                    <BadgeCheck className="h-4 w-4 text-brand" />
                  </div>
                  <p className="mt-0.5 text-xs text-gray-500">{b.category}</p>

                  <div className="mt-2 flex items-center gap-1.5 text-xs text-gray-500">
                    <span className="flex">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </span>
                    <span className="font-semibold text-navy-900">{b.rating}</span>
                    <span>({b.reviews} reviews)</span>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {b.tags.map((t) => (
                      <span key={t} className="rounded-md bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-600">{t}</span>
                    ))}
                  </div>

                  <p className="mt-3 text-lg font-bold text-[#2A81D2]">
                    ₹{b.price.toLocaleString('en-IN')}
                  </p>

                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-300 py-2 text-xs font-semibold text-navy-900 transition-colors hover:bg-gray-50"
                    >
                      <Heart className="h-3.5 w-3.5" />
                      Wishlist
                    </button>
                    <a
                      href="https://app.flyrlink.com/"
                      className="inline-flex items-center justify-center rounded-lg bg-[#2A6CC9] py-2 text-xs font-semibold text-white transition-colors hover:bg-[#1d6ec0]"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {results.length === 0 && (
            <p className="mt-12 text-center text-sm text-gray-500">
              No businesses match your filters. Try clearing a filter or searching differently.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}

function FilterPanel({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-5 rounded-xl bg-gray-50 p-5">
      <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-navy-900">{label}</p>
      {children}
    </div>
  );
}

function FilterCheck({ checked, onChange, label }: { checked: boolean; onChange: () => void; label: string }) {
  return (
    <label className="inline-flex cursor-pointer items-center gap-2 text-sm text-gray-600">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 rounded border-gray-300 text-brand focus:ring-brand"
      />
      {label}
    </label>
  );
}

function Burst({ className }: { className?: string }) {
  const rays = [0, 45, 90, 135, 180, 225, 270, 315];
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden>
      {rays.map((deg) => {
        const r = (deg * Math.PI) / 180;
        const x1 = 20 + 8 * Math.cos(r);
        const y1 = 20 + 8 * Math.sin(r);
        const x2 = 20 + 17 * Math.cos(r);
        const y2 = 20 + 17 * Math.sin(r);
        return (
          <line
            key={deg}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}
