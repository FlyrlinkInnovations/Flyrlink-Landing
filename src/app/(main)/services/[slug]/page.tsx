import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  MessagesSquare,
  ShieldCheck,
  Star,
} from 'lucide-react';
import {
  CATEGORIES,
  SERVICES,
  findCategory,
  findService,
} from '@/config/services';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) return { title: 'Service not found' };
  return {
    title: `Hire a ${service.name}`,
    description: `${service.description} Real ratings, secure payments, free chat before you book.`,
  };
}

const SAMPLE_EXPERTS = [
  {
    name: 'Priya S.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 4.9,
    reviews: 247,
    sessions: 800,
  },
  {
    name: 'Ravi M.',
    image: 'https://randomuser.me/api/portraits/men/52.jpg',
    rating: 4.8,
    reviews: 198,
    sessions: 540,
  },
  {
    name: 'Anjali R.',
    image: 'https://randomuser.me/api/portraits/women/47.jpg',
    rating: 5.0,
    reviews: 312,
    sessions: 920,
  },
];

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) notFound();

  const primaryCategoryName = service.categories[0];
  const primaryCategory = primaryCategoryName
    ? CATEGORIES.find((c) => c.name === primaryCategoryName)
    : undefined;

  const relatedServices = SERVICES.filter(
    (s) =>
      s.slug !== service.slug &&
      s.categories.some((c) => service.categories.includes(c))
  ).slice(0, 6);

  return (
    <main className="bg-white pt-24 pb-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 flex flex-wrap items-center gap-1 text-xs text-gray-500"
        >
          <Link href="/" className="hover:text-brand">
            Home
          </Link>
          <ChevronRight className="h-3 w-3 text-gray-300" />
          <Link href="/categories" className="hover:text-brand">
            Categories
          </Link>
          {primaryCategory && (
            <>
              <ChevronRight className="h-3 w-3 text-gray-300" />
              <Link
                href={`/categories/${primaryCategory.slug}`}
                className="hover:text-brand"
              >
                {primaryCategory.name}
              </Link>
            </>
          )}
          <ChevronRight className="h-3 w-3 text-gray-300" />
          <span className="text-gray-700 font-medium">{service.name}</span>
        </nav>

        {/* Hero */}
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-start md:gap-12">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold tracking-[0.22em] text-gray-400">
              {service.categories.map((c, i) => {
                const cat = CATEGORIES.find((cc) => cc.name === c);
                return (
                  <span key={c} className="inline-flex items-center gap-2">
                    {cat ? (
                      <Link
                        href={`/categories/${cat.slug}`}
                        className="hover:text-brand"
                      >
                        {c.toUpperCase()}
                      </Link>
                    ) : (
                      <span>{c.toUpperCase()}</span>
                    )}
                    {i < service.categories.length - 1 && (
                      <span className="text-gray-300">·</span>
                    )}
                  </span>
                );
              })}
            </div>

            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-navy-900 md:text-5xl lg:text-6xl">
              Hire a{' '}
              <span className="font-serif italic font-medium text-brand">
                {service.name}
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg">
              {service.description}
            </p>

            <div className="mt-6 flex flex-wrap items-baseline gap-3">
              <span className="text-sm text-gray-500">Sessions from</span>
              <span className="font-display text-3xl font-bold text-navy-900">
                ₹{service.startingPrice}
              </span>
              <span className="text-sm text-gray-500">
                / 30 min &middot; set by each expert
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://app.flyrlink.com/"
                className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-brand/20 transition-all duration-300 hover:bg-brand-600"
              >
                Browse {service.name}s
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-brand transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="h-3 w-3" />
                </span>
              </a>
              <a
                href="https://app.flyrlink.com/"
                className="inline-flex items-center gap-1.5 px-5 py-3 text-sm font-medium text-gray-700 hover:text-navy-900"
              >
                Free chat first
                <MessagesSquare className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Trust row */}
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="flex items-center gap-2 text-sm font-bold text-navy-900">
                  <ShieldCheck className="h-4 w-4 text-brand" />
                  Verified pros
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  ID-checked, rated by real clients.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="flex items-center gap-2 text-sm font-bold text-navy-900">
                  <CalendarDays className="h-4 w-4 text-brand" />
                  Book in minutes
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Live availability, secure pay.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="flex items-center gap-2 text-sm font-bold text-navy-900">
                  <CheckCircle2 className="h-4 w-4 text-brand" />
                  Refund protected
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Not satisfied? Get rematched.
                </p>
              </div>
            </div>
          </div>

          {/* Right: sample experts card */}
          <div className="relative">
            <div className="rounded-3xl border border-gray-200 bg-gradient-to-b from-gray-50 to-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-lg font-bold text-navy-900">
                  Top {service.name}s
                </h2>
                <a
                  href="https://app.flyrlink.com/"
                  className="text-xs font-semibold text-brand hover:underline inline-flex items-center gap-1"
                >
                  See all
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
              <ul className="mt-4 space-y-3">
                {SAMPLE_EXPERTS.map((e) => (
                  <li
                    key={e.name}
                    className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 transition-colors hover:border-brand/30"
                  >
                    <Image
                      src={e.image}
                      alt={e.name}
                      width={44}
                      height={44}
                      className="h-11 w-11 rounded-full object-cover ring-2 ring-white"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-bold text-navy-900">
                        {e.name}
                      </p>
                      <p className="truncate text-xs text-gray-500 inline-flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        {e.rating} ({e.reviews}) · {e.sessions}+ sessions
                      </p>
                    </div>
                    <a
                      href="https://app.flyrlink.com/"
                      className="rounded-lg bg-navy-900 px-3 py-1.5 text-[11px] font-bold text-white hover:bg-navy-800"
                    >
                      View
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Related services */}
        {relatedServices.length > 0 && (
          <div className="mt-20 border-t border-gray-100 pt-12">
            <h2 className="mb-6 font-display text-2xl font-bold text-navy-900">
              Related services
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-md hover:shadow-brand/10"
                >
                  <div className="min-w-0">
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
        )}
      </div>
    </main>
  );
}
