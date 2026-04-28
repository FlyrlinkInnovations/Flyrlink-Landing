import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { CATEGORIES, TOTAL_SERVICE_COUNT } from '@/config/services';

export const metadata: Metadata = {
  title: 'Browse all categories',
  description: `Browse ${CATEGORIES.length} categories and ${TOTAL_SERVICE_COUNT}+ services on Flyrlink. Find verified experts for fitness, education, business, tech, beauty, and more.`,
};

export default function CategoriesIndexPage() {
  return (
    <main className="bg-white pt-24 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="mb-3 text-[11px] font-semibold tracking-[0.28em] text-gray-400">
            BROWSE BY CATEGORY
          </div>
          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-navy-900 md:text-5xl lg:text-6xl">
            {CATEGORIES.length} categories.{' '}
            <span className="font-serif italic font-medium text-gray-400">
              {TOTAL_SERVICE_COUNT}+ services.
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-gray-600 md:text-lg">
            From yoga trainers to tax consultants. Find a verified expert for
            anything you need.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c) => {
            const Icon = c.icon;
            return (
              <Link
                key={c.slug}
                href={`/categories/${c.slug}`}
                className={`group relative flex flex-col rounded-2xl border border-gray-200/80 bg-gradient-to-b ${c.tone} p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5`}
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${c.iconBg} ${c.iconText} transition-transform group-hover:scale-110`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-gray-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                </div>
                <h2 className="mt-5 text-lg font-bold text-navy-900">
                  {c.name}
                </h2>
                <p className="mt-1 text-xs text-gray-500">
                  {c.services.length} services
                </p>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {c.shortDescription}
                </p>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <a
            href="https://app.flyrlink.com/"
            className="group inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-navy-900/20 transition-all duration-300 hover:bg-navy-800 hover:shadow-brand/20"
          >
            Browse all experts
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-navy-900 transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="h-3 w-3" />
            </span>
          </a>
        </div>
      </div>
    </main>
  );
}
