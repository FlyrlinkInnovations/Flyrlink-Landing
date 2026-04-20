'use client';

import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  TrendingUp,
  GraduationCap,
  Palette,
  Laptop,
  HeartPulse,
  Scale,
  Megaphone,
  Landmark,
  Sparkles,
  Star,
  Languages,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type Category = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

const row1: Category[] = [
  { title: 'Business Intelligence', description: 'Strategy, consulting & management', icon: Briefcase },
  { title: 'Career Intelligence',   description: 'Coaching & interview prep',       icon: TrendingUp },
  { title: 'Learning Accelerator',  description: 'Tutoring & mentorship',           icon: GraduationCap },
  { title: 'Creative Solutions',    description: 'Design, art & creative pros',     icon: Palette },
];

const row2: Category[] = [
  { title: 'Technology',        description: 'Software, AI/ML & DevOps',      icon: Laptop },
  { title: 'Health & Wellness', description: 'Fitness, nutrition, mental',    icon: HeartPulse },
  { title: 'Legal',             description: 'Legal advice & compliance',     icon: Scale },
  { title: 'Marketing',         description: 'Digital marketing & growth',    icon: Megaphone },
];

const row3: Category[] = [
  { title: 'Finance',   description: 'Planning, investments & tax', icon: Landmark },
  { title: 'Lifestyle', description: 'Travel, fashion & growth',    icon: Sparkles },
  { title: 'Astrology', description: 'Vedic astrology & guidance',  icon: Star },
  { title: 'Language',  description: 'Language learning & xlate',   icon: Languages },
];

const total = row1.length + row2.length + row3.length;

function CategoryPill({ category }: { category: Category }) {
  const Icon = category.icon;
  return (
    <a
      href="https://app.flyrlink.com/"
      className="group flex w-[280px] flex-shrink-0 items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/10"
    >
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-600 transition-colors group-hover:bg-brand/10 group-hover:text-brand">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-bold text-navy-900">
          {category.title}
        </div>
        <div className="truncate text-xs text-gray-500">
          {category.description}
        </div>
      </div>
      <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-gray-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
    </a>
  );
}

export default function CategoriesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="categories"
      className="py-28 bg-gray-50 overflow-hidden"
    >
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 reveal ${isVisible ? 'revealed' : ''}`}
      >
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="mb-3 text-[11px] font-semibold tracking-[0.28em] text-gray-400">
            EXPERT CATEGORIES
          </div>
          <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-navy-900 md:text-5xl lg:text-6xl">
            {total} categories.{' '}
            <span className="font-serif italic font-medium text-gray-400">
              One network.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-gray-600 md:text-lg">
            Plan, connect, learn and grow with verified experts - no hopping
            between tools.
          </p>
        </div>

        {/* Pill grid */}
        <div className="relative overflow-hidden">
          {/* edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-28 bg-gradient-to-r from-gray-50 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-28 bg-gradient-to-l from-gray-50 to-transparent" />

          <div className="flex flex-nowrap items-center justify-center gap-4">
            {row1.map((c) => (
              <CategoryPill key={c.title} category={c} />
            ))}
          </div>

          <div className="mt-4 flex flex-nowrap items-center justify-center gap-4 md:-ml-24">
            {row2.map((c) => (
              <CategoryPill key={c.title} category={c} />
            ))}
          </div>

          <div className="mt-4 flex flex-nowrap items-center justify-center gap-4 md:ml-20">
            {row3.map((c) => (
              <CategoryPill key={c.title} category={c} />
            ))}
          </div>
        </div>

        {/* Dark CTA pill */}
        <div className="mt-14 flex justify-center">
          <a
            href="https://app.flyrlink.com/"
            className="group inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-navy-900/20 transition-all duration-300 hover:bg-navy-800 hover:shadow-brand/20"
          >
            Explore all {total} categories
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-navy-900 transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="h-3 w-3" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
