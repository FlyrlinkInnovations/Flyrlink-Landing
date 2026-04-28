import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { CATEGORIES, TOTAL_SERVICE_COUNT } from '@/config/services';
import SearchAutocomplete from '@/components/SearchAutocomplete';

export const metadata: Metadata = {
  title: 'Find Experts',
  description: `Browse ${CATEGORIES.length} categories and ${TOTAL_SERVICE_COUNT}+ services on Flyrlink. From yoga trainers to tax consultants, find a verified expert in minutes.`,
};

export default function FindExpertsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 text-brand text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-6 h-px bg-brand/40" />
            Expert Directory
            <span className="w-6 h-px bg-brand/40" />
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-navy-900 tracking-tight">
            Find your perfect expert.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Browse verified pros across {CATEGORIES.length} categories and{' '}
            {TOTAL_SERVICE_COUNT}+ services. From yoga trainers to tax
            consultants, real ratings, secure payments.
          </p>

          <div className="mx-auto max-w-xl">
            <SearchAutocomplete size="lg" />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-navy-900 mb-2 text-center tracking-tight">
            Browse by category
          </h2>
          <p className="text-center text-gray-600 mb-10">
            {CATEGORIES.length} categories &middot; {TOTAL_SERVICE_COUNT}+
            services
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.slug}
                  href={`/categories/${cat.slug}`}
                  className={`group p-5 bg-gradient-to-b ${cat.tone} rounded-xl border border-gray-200/80 hover:border-brand/30 hover:-translate-y-0.5 hover:shadow-md hover:shadow-brand/5 transition-all duration-300`}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${cat.iconBg} ${cat.iconText}`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-gray-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                  </div>
                  <h3 className="mt-4 font-semibold text-navy-900">
                    {cat.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {cat.services.length} services
                  </p>
                </Link>
              );
            })}
          </div>

          <div className="bg-navy-900 rounded-2xl p-12 text-center">
            <h3 className="font-display text-3xl font-bold text-white mb-4 tracking-tight">
              Ready to book your first session?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Sign up free, chat with experts, book in minutes. No
              subscriptions, no hidden fees.
            </p>
            <a
              href="https://app.flyrlink.com/"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-brand hover:bg-brand-600 text-white font-semibold rounded-lg transition-all duration-300"
            >
              Get started free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
