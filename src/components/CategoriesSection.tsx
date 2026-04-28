'use client';

import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Camera,
  Code2,
  Dumbbell,
  Film,
  GraduationCap,
  Megaphone,
  PenLine,
  Shirt,
  Sparkles,
  Trophy,
  Video,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { slugify } from '@/config/services';

type Category = {
  title: string;
  count: number;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  iconText: string;
};

const row1: Category[] = [
  { title: 'Education',     count: 12, icon: GraduationCap, iconBg: 'bg-blue-100',    iconText: 'text-blue-600' },
  { title: 'Fitness',       count: 9,  icon: Dumbbell,      iconBg: 'bg-rose-100',    iconText: 'text-rose-600' },
  { title: 'Tech & IT',     count: 11, icon: Code2,         iconBg: 'bg-indigo-100',  iconText: 'text-indigo-600' },
  { title: 'Business',      count: 12, icon: Briefcase,     iconBg: 'bg-slate-100',   iconText: 'text-slate-700' },
];

const row2: Category[] = [
  { title: 'Photography',   count: 6,  icon: Camera,        iconBg: 'bg-amber-100',   iconText: 'text-amber-600' },
  { title: 'Beauty',        count: 4,  icon: Sparkles,      iconBg: 'bg-pink-100',    iconText: 'text-pink-600' },
  { title: 'Fashion',       count: 4,  icon: Shirt,         iconBg: 'bg-violet-100',  iconText: 'text-violet-600' },
  { title: 'Sports',        count: 5,  icon: Trophy,        iconBg: 'bg-orange-100',  iconText: 'text-orange-600' },
];

const row3: Category[] = [
  { title: 'Entertainment',         count: 5, icon: Film,      iconBg: 'bg-purple-100',  iconText: 'text-purple-600' },
  { title: 'Digital Marketing',     count: 6, icon: Megaphone, iconBg: 'bg-emerald-100', iconText: 'text-emerald-600' },
  { title: 'Writing & Translation', count: 8, icon: PenLine,   iconBg: 'bg-teal-100',    iconText: 'text-teal-600' },
  { title: 'Creators & Influencers',count: 7, icon: Video,     iconBg: 'bg-fuchsia-100', iconText: 'text-fuchsia-600' },
];

const POPULAR_NICHES = [
  'Yoga Trainer',
  'Logo Design',
  'Academic Tutor',
  'UGC Creators',
  'Tax Consulting',
  'Product Photography',
  'Career Guidance',
  'Web Development',
  'Nutrition Coach',
  'Pitch Decks',
  'Voice & Dubbing',
  'SEO Services',
  'Interview Prep',
  'YouTube Creator',
  'Content Writing',
  'Beauty Consulting',
  'Sports Coach',
  'Fashion Influencer',
  'AI Expert',
  'App Development',
];

const total = row1.length + row2.length + row3.length;
const totalServices =
  [...row1, ...row2, ...row3].reduce((sum, c) => sum + c.count, 0);

function CategoryPill({ category }: { category: Category }) {
  const Icon = category.icon;
  return (
    <Link
      href={`/categories/${slugify(category.title)}`}
      className="group flex w-[280px] flex-shrink-0 items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/10"
    >
      <div
        className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${category.iconBg} ${category.iconText} transition-transform group-hover:scale-110`}
      >
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-bold text-navy-900">
          {category.title}
        </div>
        <div className="truncate text-xs text-gray-500">
          {category.count} services
        </div>
      </div>
      <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-gray-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
    </Link>
  );
}

export default function CategoriesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="categories" className="relative py-28 bg-gray-50 overflow-hidden">
      {/* Soft brand glow accents */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-brand/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-brand/5 blur-3xl" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-7xl px-6 reveal ${isVisible ? 'revealed' : ''}`}
      >
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="mb-3 text-[11px] font-semibold tracking-[0.28em] text-gray-400">
            BROWSE BY CATEGORY
          </div>
          <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-navy-900 md:text-5xl lg:text-6xl">
            {total} categories.{' '}
            <span className="font-serif italic font-medium text-gray-400">
              {totalServices}+ services.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-gray-600 md:text-lg">
            From yoga trainers to tax consultants. Find a verified expert for
            anything you need.
          </p>
        </div>

        {/* Staggered pill rows */}
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-28 bg-gradient-to-r from-gray-50 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-28 bg-gradient-to-l from-gray-50 to-transparent" />

          <div className="flex flex-nowrap items-center justify-center gap-4">
            {row1.map((c) => <CategoryPill key={c.title} category={c} />)}
          </div>

          <div className="mt-4 flex flex-nowrap items-center justify-center gap-4 md:-ml-24">
            {row2.map((c) => <CategoryPill key={c.title} category={c} />)}
          </div>

          <div className="mt-4 flex flex-nowrap items-center justify-center gap-4 md:ml-20">
            {row3.map((c) => <CategoryPill key={c.title} category={c} />)}
          </div>
        </div>

        {/* Popular niches cloud */}
        <div className="mt-16">
          <div className="mb-5 flex items-center justify-center gap-3 text-[11px] font-semibold tracking-[0.28em] text-gray-400">
            <span className="h-px w-10 bg-gray-300" />
            POPULAR RIGHT NOW
            <span className="h-px w-10 bg-gray-300" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-5xl mx-auto">
            {POPULAR_NICHES.map((niche) => (
              <Link
                key={niche}
                href={`/services/${slugify(niche)}`}
                className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-medium text-gray-700 transition-all hover:border-brand/40 hover:bg-brand/5 hover:text-brand hover:-translate-y-0.5"
              >
                {niche}
              </Link>
            ))}
          </div>
        </div>

        {/* Dark CTA pill */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/categories"
            className="group inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-navy-900/20 transition-all duration-300 hover:bg-navy-800 hover:shadow-brand/20"
          >
            Explore all {totalServices}+ services
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-navy-900 transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="h-3 w-3" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
