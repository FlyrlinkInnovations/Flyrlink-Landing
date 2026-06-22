'use client';

import { useMemo, useState } from 'react';
import { Search, Star, MapPin, BadgeCheck, ArrowRight, TrendingUp } from 'lucide-react';

type Expert = {
  initials: string;
  name: string;
  role: string;
  rating: number;
  tags: string[];
  location: string;
  price: number;
  category: string;
  bookings: number;
  gradient: string;
};

const EXPERTS: Expert[] = [
  {
    initials: 'MK', name: 'Meera Krishnan', role: 'Math & Science Tutor', rating: 5.0,
    tags: ['Boards', 'JEE', 'Class 9-12'], location: 'Chennai', price: 800,
    category: 'Tutoring', bookings: 320, gradient: 'from-sky-400 to-blue-600',
  },
  {
    initials: 'PS', name: 'Priya Sharma', role: 'Yoga & Mobility Coach', rating: 4.9,
    tags: ['Backpain', 'Beginners', 'Hatha'], location: 'Bengaluru', price: 1200,
    category: 'Wellness', bookings: 540, gradient: 'from-cyan-400 to-blue-500',
  },
  {
    initials: 'SI', name: 'Sneha Iyer', role: 'Content & Video Editor', rating: 4.9,
    tags: ['Reels', 'YouTube', 'Premiere'], location: 'Kochi', price: 1500,
    category: 'Creative', bookings: 410, gradient: 'from-sky-400 to-indigo-500',
  },
  {
    initials: 'AN', name: 'Arjun Nair', role: 'Brand & Product Designer', rating: 4.8,
    tags: ['Branding', 'Figma', 'UI/UX'], location: 'Pune', price: 2500,
    category: 'Design', bookings: 280, gradient: 'from-blue-400 to-blue-700',
  },
  {
    initials: 'VR', name: 'Vikram Rao', role: 'Career & Interview Coach', rating: 4.8,
    tags: ['FAANG', 'Resume', 'Mock'], location: 'Hyderabad', price: 1800,
    category: 'Coaching', bookings: 360, gradient: 'from-sky-500 to-blue-600',
  },
  {
    initials: 'RD', name: 'Rahul Desai', role: 'Startup & Finance Advisor', rating: 4.7,
    tags: ['Fundraising', 'Tax', 'Modeling'], location: 'Mumbai', price: 3500,
    category: 'Finance', bookings: 190, gradient: 'from-blue-500 to-indigo-700',
  },
];

const CATEGORIES = ['All', 'Wellness', 'Design', 'Tutoring', 'Finance', 'Creative', 'Coaching'];
const SORTS = ['Top rated', 'Price-low', 'Most booked'] as const;
type Sort = (typeof SORTS)[number];

export default function BrowseExperts() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState<Sort>('Top rated');

  const experts = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = EXPERTS.filter((e) => {
      const matchesQuery =
        !q ||
        e.name.toLowerCase().includes(q) ||
        e.role.toLowerCase().includes(q) ||
        e.tags.some((t) => t.toLowerCase().includes(q));
      const matchesCategory = category === 'All' || e.category === category;
      return matchesQuery && matchesCategory;
    });
    const sorted = [...list];
    if (sort === 'Top rated') sorted.sort((a, b) => b.rating - a.rating);
    else if (sort === 'Price-low') sorted.sort((a, b) => a.price - b.price);
    else sorted.sort((a, b) => b.bookings - a.bookings);
    return sorted;
  }, [query, category, sort]);

  return (
    <main className="min-h-screen bg-white pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <h1 className="font-heading text-3xl font-bold tracking-[-0.5px] text-navy-900 md:text-4xl">
          Browse experts
        </h1>
        <p className="mt-1.5 text-sm text-gray-500">
          {experts.length} verified pros ready to book
        </p>

        {/* Search + sort */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, skill or service..."
              className="w-full rounded-full border border-gray-200 bg-gray-50 py-2.5 pl-11 pr-4 text-sm text-navy-900 placeholder:text-gray-400 focus:border-brand focus:bg-white focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-2">
            {SORTS.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSort(s)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                  sort === s
                    ? 'bg-brand text-white shadow-sm shadow-brand/30'
                    : 'border border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Category pills */}
        <div className="mt-5 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                category === c
                  ? 'bg-brand text-white'
                  : 'border border-gray-200 bg-white text-gray-500 hover:border-gray-300'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Expert grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {experts.map((e) => (
            <article
              key={e.name}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-brand/10"
            >
              {/* Banner */}
              <div className={`relative h-20 bg-gradient-to-br ${e.gradient}`}>
                <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-navy-900 shadow-sm">
                  <BadgeCheck className="h-3 w-3 text-brand" />
                  Verified
                </span>
                <div className="absolute -bottom-6 left-4 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-brand-300 to-brand-600 text-sm font-bold text-white shadow-md">
                  {e.initials}
                </div>
              </div>

              {/* Body */}
              <div className="px-4 pb-4 pt-8">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="text-[15px] font-bold text-navy-900">{e.name}</h2>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-navy-900">
                    <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    {e.rating}
                  </span>
                </div>
                <p className="mt-0.5 text-xs text-gray-500">{e.role}</p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {e.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
                  <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                    <MapPin className="h-3.5 w-3.5" />
                    {e.location}
                  </span>
                  <span className="text-sm font-bold text-navy-900">
                    ₹{e.price.toLocaleString('en-IN')}
                    <span className="text-xs font-normal text-gray-400">/session</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {experts.length === 0 && (
          <p className="mt-12 text-center text-sm text-gray-500">
            No experts match your search. Try a different keyword or category.
          </p>
        )}

        {/* Earn CTA banner */}
        <div className="mt-12 overflow-hidden rounded-2xl bg-[#2A81D2] px-8 py-10">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h3 className="font-heading text-2xl font-bold leading-snug text-white md:text-3xl">
                Verified Experts on Flyrlink can earn
                <br className="hidden sm:block" /> ₹1,000–₹10,000/session.
              </h3>
              <p className="mt-3 max-w-md text-sm text-white/80">
                Learn how you can monetize your expertise and connect with
                clients across India.
              </p>
              <a
                href="https://app.flyrlink.com/"
                className="group mt-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/30 backdrop-blur transition-colors hover:bg-white/25"
              >
                Confirm &amp; Book
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Bar chart graphic */}
            <div className="relative flex h-32 items-end gap-2 pr-8">
              {[40, 58, 74, 92].map((h, i) => (
                <div
                  key={i}
                  className="w-9 rounded-t-md bg-gradient-to-t from-green-600 to-green-400 shadow-lg"
                  style={{ height: `${h}%` }}
                />
              ))}
              <TrendingUp
                className="absolute -right-1 top-0 h-10 w-10 text-green-300"
                strokeWidth={2.5}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
