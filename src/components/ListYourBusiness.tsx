'use client';

import { useMemo, useState } from 'react';
import {
  UserPlus, ClipboardList, Rocket, Search, Star, BadgeCheck,
  ChevronDown, ArrowRight, type LucideIcon,
} from 'lucide-react';

const STEPS: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: UserPlus, title: 'Create Your Free Account', desc: 'Sign up in minutes and set up your business profile — no upfront cost.' },
  { icon: ClipboardList, title: 'Submit Your Business Details', desc: 'Add your services, pricing, and portfolio so clients know what you offer.' },
  { icon: Rocket, title: 'Get Approved & Go Live', desc: 'Our team verifies your listing and you go live to clients across India.' },
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
      {/* Hero + steps */}
      <section className="bg-gray-50 px-6 pb-16 pt-28">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="font-heading text-3xl font-bold tracking-[-0.5px] text-navy-900 md:text-4xl lg:text-5xl">
            Start Listing Your Business Today
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 md:text-lg">
            List your business and connect with clients looking for trusted
            experts. Get discovered, get booked, and grow — all in one place.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="rounded-2xl border border-gray-200 bg-white p-6 text-left">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[11px] font-bold tracking-[0.2em] text-gray-400">
                      STEP {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-bold text-navy-900">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{s.desc}</p>
                </div>
              );
            })}
          </div>

          <a
            href="https://app.flyrlink.com/"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition-colors hover:bg-brand-600"
          >
            Add Your Business — Free
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </section>

      {/* Filter panel */}
      <section className="px-6 pt-12">
        <div className="mx-auto max-w-6xl rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
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

          {/* Main category */}
          <FilterRow label="Main Category">
            {MAIN_CATEGORIES.map((c) => (
              <Checkbox key={c} checked={cats.includes(c)} onChange={() => toggle(cats, c, setCats)} label={c} />
            ))}
          </FilterRow>

          {/* Tags */}
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

          {/* Availability */}
          <FilterRow label="Availability">
            {AVAILABILITY.map((a) => (
              <Checkbox key={a} checked={avail.includes(a)} onChange={() => toggle(avail, a, setAvail)} label={a} />
            ))}
          </FilterRow>
        </div>
      </section>

      {/* Listings */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
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
