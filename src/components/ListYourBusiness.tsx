'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import {
  Search, Star, BadgeCheck, ChevronDown, ArrowRight, Check, Hexagon,
} from 'lucide-react';

const STEPS = [
  { n: 1, title: 'Create Your Free Account', desc: 'Sign up and set up your business profile in minutes.' },
  { n: 2, title: 'Add Services & Pricing', desc: 'List what you offer and set your own rates.' },
  { n: 3, title: 'Get Verified & Go Live', desc: 'We verify your listing and you start getting booked.', green: true },
];

const INCLUDED = [
  'Free profile & listing',
  'Verified business badge',
  'Direct client bookings',
  'Secure, fast payouts',
];

const TRUST_STATS = [
  { value: '500+', label: 'Businesses listed' },
  { value: '12', label: 'Categories' },
  { value: '4.9★', label: 'Avg rating' },
  { value: '10k+', label: 'Bookings' },
];

const WHY = [
  {
    title: 'Get Discovered',
    desc: 'Reach clients actively searching for your services across India.',
    image: '/Marketing%20content/Group/confident-woman-sitting-in-office-with-coworkers-2026-03-25-06-43-08-utc.jpg',
  },
  {
    title: 'Verified & Trusted',
    desc: 'Earn a verified badge and real client reviews that build trust.',
    image: '/Marketing%20content/Group/four-people-working-together-on-laptops-2026-01-07-23-37-33-utc.jpg',
  },
  {
    title: 'Grow Faster',
    desc: 'Secure payments, instant bookings, and tools to scale your business.',
    image: '/Marketing%20content/Group/architect-cafe-casual-brainstorming-meeting-concep-2026-01-07-23-27-47-utc.jpg',
  },
];

const MAIN_CATEGORIES = [
  'Design & Creative', 'Tech & Development', 'Marketing & SEO',
  'Business Services', 'Coaching & Training',
];
const AVAILABILITY = ['Available now', 'Booking soon', 'Newly listed'];

type Business = {
  name: string;
  category: string;
  tags: string[];
  rating: number;
  reviews: number;
  price: number;
  status: string;
  gradient: string;
};

const BUSINESSES: Business[] = [
  { name: 'Seerto Design Studio', category: 'Design & Creative', tags: ['Branding', 'UI/UX'], rating: 4.9, reviews: 124, price: 5000, status: 'Available now', gradient: 'from-fuchsia-500 to-purple-700' },
  { name: 'Madian Pro Business', category: 'Business Services', tags: ['Strategy', 'Ops'], rating: 4.8, reviews: 98, price: 8000, status: 'Booking soon', gradient: 'from-blue-500 to-indigo-700' },
  { name: 'Digital Marketing Expert', category: 'Marketing & SEO', tags: ['SEO', 'Ads'], rating: 4.9, reviews: 210, price: 6500, status: 'Available now', gradient: 'from-violet-600 to-indigo-900' },
  { name: 'Nova Web Labs', category: 'Tech & Development', tags: ['Next.js', 'Apps'], rating: 4.7, reviews: 76, price: 12000, status: 'Newly listed', gradient: 'from-sky-500 to-blue-700' },
  { name: 'Lumen Brand Co.', category: 'Design & Creative', tags: ['Logo', 'Identity'], rating: 5.0, reviews: 142, price: 7000, status: 'Available now', gradient: 'from-purple-500 to-fuchsia-700' },
  { name: 'PeakGrowth Consulting', category: 'Coaching & Training', tags: ['Mentoring', 'Workshops'], rating: 4.8, reviews: 64, price: 4500, status: 'Booking soon', gradient: 'from-indigo-500 to-blue-800' },
  { name: 'ClickRank Media', category: 'Marketing & SEO', tags: ['Content', 'Social'], rating: 4.6, reviews: 51, price: 5500, status: 'Newly listed', gradient: 'from-blue-600 to-violet-800' },
  { name: 'Forge Dev Studio', category: 'Tech & Development', tags: ['Backend', 'Cloud'], rating: 4.9, reviews: 88, price: 15000, status: 'Available now', gradient: 'from-cyan-500 to-blue-700' },
  { name: 'Apex Advisory', category: 'Business Services', tags: ['Finance', 'Legal'], rating: 4.7, reviews: 39, price: 9000, status: 'Booking soon', gradient: 'from-indigo-600 to-purple-800' },
];

const ALL_TAGS = ['All Tags', ...Array.from(new Set(BUSINESSES.flatMap((b) => b.tags)))];

export default function ListYourBusiness() {
  const [query, setQuery] = useState('');
  const [cats, setCats] = useState<string[]>([]);
  const [tag, setTag] = useState('All Tags');
  const [avail, setAvail] = useState<string[]>([]);

  const toggle = (list: string[], v: string, setter: (x: string[]) => void) =>
    setter(list.includes(v) ? list.filter((i) => i !== v) : [...list, v]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return BUSINESSES.filter((b) => {
      const mq = !q || b.name.toLowerCase().includes(q) || b.category.toLowerCase().includes(q) || b.tags.some((t) => t.toLowerCase().includes(q));
      const mc = cats.length === 0 || cats.includes(b.category);
      const mt = tag === 'All Tags' || b.tags.includes(tag);
      const ma = avail.length === 0 || avail.includes(b.status);
      return mq && mc && mt && ma;
    });
  }, [query, cats, tag, avail]);

  return (
    <main className="bg-white">
      {/* Hero — Find your perfect service provider */}
      <section
        className="relative overflow-hidden px-6 pb-16 pt-28"
        style={{ backgroundImage: 'linear-gradient(160deg, #2A81D2 0%, #1d6ec0 60%, #0C2738 130%)' }}
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-25" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-[-1px] text-white md:text-5xl">
              Find Your Perfect Service Provider
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/85 md:text-lg">
              List your business, get verified, and connect with clients looking
              for trusted experts across India.
            </p>
          </div>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
            {/* Left: vertical stepper + CTA + checklist */}
            <div>
              <ol className="relative ml-5 space-y-8 border-l border-white/20 pl-8">
                {STEPS.map((s) => (
                  <li key={s.n} className="relative">
                    <span
                      className={`absolute -left-[2.85rem] flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white ring-4 ring-[#1d6ec0] ${
                        s.green ? 'bg-green-500' : 'bg-white/20'
                      }`}
                    >
                      {s.n}
                    </span>
                    <h3 className="text-base font-bold text-white">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/75">{s.desc}</p>
                  </li>
                ))}
              </ol>

              <div className="ml-5 mt-10 pl-8">
                <a
                  href="https://app.flyrlink.com/"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  Add Your Business — Free
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <p className="mt-3 text-xs text-white/75">
                  No upfront cost. Only pay a small fee when you earn from a booking.
                </p>
                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2.5">
                  {INCLUDED.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white/90">
                      <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-500/90 text-white">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: hero image */}
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/20">
                <Image
                  src="/landing/Aside.png"
                  alt="Service providers collaborating on Flyrlink"
                  width={614}
                  height={430}
                  priority
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust band */}
      <section className="bg-[#2A81D2] px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6">
          <div className="flex items-center gap-3 text-white">
            <span className="relative flex h-9 w-9 items-center justify-center">
              <Hexagon className="absolute h-9 w-9 fill-white/15 text-white/40" />
              <Check className="relative h-4 w-4 text-white" strokeWidth={3} />
            </span>
            <span className="text-sm font-semibold md:text-base">
              Trusted by businesses joining Flyrlink across India
            </span>
          </div>
          <div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-4">
            {TRUST_STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-2xl font-bold text-white md:text-3xl">{s.value}</div>
                <div className="mt-1 text-xs font-medium text-white/80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose Flyrlink */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold tracking-[-0.5px] text-navy-900 md:text-4xl">
              Why Choose Flyrlink?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-gray-600">
              The easiest way to get discovered, win trust, and grow your client
              base.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {WHY.map((w) => (
              <div key={w.title} className="group relative h-64 overflow-hidden rounded-2xl">
                <Image
                  src={w.image}
                  alt={w.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C2738]/90 via-[#0C2738]/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-lg font-bold text-white">{w.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/85">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Start listing — heading + filter + listings */}
      <section className="bg-gray-50 px-6 pb-16 pt-16">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-heading text-3xl font-bold tracking-[-0.5px] text-navy-900 md:text-4xl">
            Start Listing Your Business Today
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-600">
            List your business and connect with clients looking for trusted
            experts. Get discovered, get booked, and grow.
          </p>
        </div>

        {/* Filter panel */}
        <div className="mx-auto mt-10 max-w-6xl rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name, skill or service..."
                className="w-full rounded-full border border-gray-200 bg-gray-50 py-2.5 pl-11 pr-4 text-sm text-navy-900 placeholder:text-gray-400 focus:border-brand focus:bg-white focus:outline-none"
              />
            </div>
            <button type="button" className="rounded-full bg-brand px-6 text-sm font-semibold text-white hover:bg-brand-600">
              Search
            </button>
          </div>

          <FilterRow label="Main Category">
            {MAIN_CATEGORIES.map((c) => (
              <Checkbox key={c} checked={cats.includes(c)} onChange={() => toggle(cats, c, setCats)} label={c} />
            ))}
          </FilterRow>

          <FilterRow label="Tags">
            <div className="relative">
              <select
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                className="appearance-none rounded-lg border border-gray-200 bg-white py-2 pl-3.5 pr-10 text-sm text-navy-900 focus:border-brand focus:outline-none"
              >
                {ALL_TAGS.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            </div>
          </FilterRow>

          <FilterRow label="Availability">
            {AVAILABILITY.map((a) => (
              <Checkbox key={a} checked={avail.includes(a)} onChange={() => toggle(avail, a, setAvail)} label={a} />
            ))}
          </FilterRow>
        </div>

        {/* Listings */}
        <div className="mx-auto mt-10 max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((b) => (
              <article key={b.name} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-brand/10">
                <div className={`relative h-28 bg-gradient-to-br ${b.gradient}`}>
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-navy-900">
                    {b.status}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-[15px] font-bold text-navy-900">{b.name}</h3>
                    <BadgeCheck className="h-4 w-4 text-brand" />
                  </div>
                  <p className="mt-0.5 text-xs text-gray-500">{b.category}</p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {b.tags.map((t) => (
                      <span key={t} className="rounded-md bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-600">{t}</span>
                    ))}
                  </div>

                  <div className="mt-3 flex items-center gap-1 text-xs text-gray-500">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    <span className="font-semibold text-navy-900">{b.rating}</span>
                    <span>({b.reviews} reviews)</span>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
                    <span className="text-sm font-bold text-navy-900">
                      ₹{b.price.toLocaleString('en-IN')}
                      <span className="text-xs font-normal text-gray-400">/mo</span>
                    </span>
                    <a href="https://app.flyrlink.com/" className="rounded-full bg-brand px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-brand-600">
                      View
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

function FilterRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-5 border-t border-gray-100 pt-4">
      <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">{label}</p>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5">{children}</div>
    </div>
  );
}

function Checkbox({ checked, onChange, label }: { checked: boolean; onChange: () => void; label: string }) {
  return (
    <label className="inline-flex cursor-pointer items-center gap-2 text-sm text-gray-600">
      <input type="checkbox" checked={checked} onChange={onChange} className="h-4 w-4 rounded border-gray-300 text-brand focus:ring-brand" />
      {label}
    </label>
  );
}
