import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  ShieldCheck,
  Star,
  Sparkles,
} from 'lucide-react';
import {
  CATEGORIES,
  findCategory,
  getServicesForCategory,
} from '@/config/services';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = findCategory(slug);
  if (!category) return { title: 'Category not found' };
  return {
    title: `${category.name} experts`,
    description: `${category.shortDescription} Find ${category.services.length} services on Flyrlink with verified pros, real ratings, and secure booking.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const category = findCategory(slug);
  if (!category) notFound();

  const services = getServicesForCategory(slug);
  const Icon = category.icon;

  return (
    <main className="bg-white pt-24 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex items-center gap-1 text-xs text-gray-500"
        >
          <Link href="/" className="hover:text-brand">
            Home
          </Link>
          <ChevronRight className="h-3 w-3 text-gray-300" />
          <Link href="/categories" className="hover:text-brand">
            Categories
          </Link>
          <ChevronRight className="h-3 w-3 text-gray-300" />
          <span className="text-gray-700 font-medium">{category.name}</span>
        </nav>

        {/* Hero */}
        <div
          className={`relative overflow-hidden rounded-3xl border border-gray-200/80 bg-gradient-to-b ${category.tone} p-8 md:p-12`}
        >
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${category.iconBg} ${category.iconText}`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-[11px] font-semibold tracking-[0.28em] text-gray-500">
                  {category.services.length} SERVICES
                </span>
              </div>
              <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-navy-900 md:text-5xl lg:text-6xl">
                {category.name}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
                {category.longDescription}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="https://app.flyrlink.com/"
                  className="group inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-navy-900/20 transition-all duration-300 hover:bg-navy-800 hover:shadow-brand/20"
                >
                  Browse {category.name} experts
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-navy-900 transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </a>
                <Link
                  href="/categories"
                  className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-medium text-gray-700 hover:text-navy-900"
                >
                  All categories
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Trust badges card */}
            <div className="hidden md:flex flex-col gap-3 min-w-[220px]">
              <div className="rounded-xl bg-white/70 border border-gray-200/60 p-4 backdrop-blur">
                <div className="flex items-center gap-2 text-sm font-bold text-navy-900">
                  <ShieldCheck className="h-4 w-4 text-brand" />
                  ID-verified pros
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Background checked, rated by real clients.
                </p>
              </div>
              <div className="rounded-xl bg-white/70 border border-gray-200/60 p-4 backdrop-blur">
                <div className="flex items-center gap-2 text-sm font-bold text-navy-900">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  4.9 average rating
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Across 10k+ sessions.
                </p>
              </div>
              <div className="rounded-xl bg-white/70 border border-gray-200/60 p-4 backdrop-blur">
                <div className="flex items-center gap-2 text-sm font-bold text-navy-900">
                  <Sparkles className="h-4 w-4 text-brand" />
                  Free to chat
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Ask anything before you book.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services grid */}
        <div className="mt-14">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="font-display text-2xl font-bold text-navy-900 md:text-3xl">
              All services in {category.name}
            </h2>
            <span className="text-sm text-gray-500">
              {services.length} services
            </span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-md hover:shadow-brand/10"
              >
                <span
                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl ${category.iconBg} ${category.iconText}`}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-navy-900">
                    {s.name}
                  </p>
                  <p className="truncate text-xs text-gray-500">
                    From ₹{s.startingPrice}
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-gray-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
              </Link>
            ))}
          </div>
        </div>

        {/* Other categories */}
        <div className="mt-16 border-t border-gray-100 pt-12">
          <h2 className="mb-6 font-display text-xl font-bold text-navy-900">
            Other categories you might like
          </h2>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.filter((c) => c.slug !== category.slug).map((c) => (
              <Link
                key={c.slug}
                href={`/categories/${c.slug}`}
                className="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-medium text-gray-700 transition-all hover:border-brand/40 hover:bg-brand/5 hover:text-brand"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
