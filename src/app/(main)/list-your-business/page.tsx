import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  GraduationCap,
  Megaphone,
  Radar,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Wallet,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'List Your Business',
  description:
    'List your business on Flyrlink. Reach high-intent clients, host demos, hire interns, and scale faster with the trusted B2B marketplace.',
};

const valueProps = [
  {
    icon: Radar,
    title: 'Fast Discovery',
    description: 'Get found by users searching for services.',
  },
  {
    icon: Wallet,
    title: 'Monetize Services',
    description: 'Consultations, coaching, tools.',
  },
  {
    icon: Target,
    title: 'Targeted Reach',
    description: 'Connect with high-intent audiences.',
  },
  {
    icon: TrendingUp,
    title: 'Business Growth',
    description: 'Drive visibility to maximize your growth.',
  },
];

export default function ListYourBusinessPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-12 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-700">
                <Sparkles className="h-3.5 w-3.5" />
                Businesses Marketplace
              </div>
              <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-navy-900 md:text-6xl">
                List Your Business.
                <br />
                <span className="text-brand">Reach Clients Instantly.</span>
                <br />
                Grow Faster.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg">
                Showcase services, host demos, convert users into customers.
                Join the leading platform for reliable business connections.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://app.flyrlink.com/"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-600"
                >
                  Start Listing Your Business
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-900 bg-white px-6 py-3 text-sm font-semibold text-navy-900 transition hover:bg-navy-50"
                >
                  Explore How It Works
                </a>
              </div>
            </div>

            {/* Hero dashboard mockup */}
            <div className="relative">
              <div className="relative aspect-[5/4] overflow-hidden rounded-3xl bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 p-6 shadow-2xl shadow-navy-900/30">
                {/* Status chip */}
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15 backdrop-blur">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-300 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-white">
                    Status: Live Bookings
                  </span>
                </div>

                {/* Mock chart panel */}
                <div className="mt-5 rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10">
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                        This Week
                      </p>
                      <p className="mt-1 font-display text-2xl font-bold text-white">
                        2,847
                      </p>
                    </div>
                    <span className="rounded-full bg-brand/15 px-2 py-0.5 text-[10px] font-bold text-brand-300">
                      +24%
                    </span>
                  </div>

                  {/* Line chart */}
                  <svg
                    viewBox="0 0 300 90"
                    className="mt-3 h-20 w-full"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="lg" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#29abd2" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#29abd2" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,70 L30,60 L60,65 L90,40 L120,50 L150,30 L180,38 L210,20 L240,28 L270,15 L300,22 L300,90 L0,90 Z"
                      fill="url(#lg)"
                    />
                    <path
                      d="M0,70 L30,60 L60,65 L90,40 L120,50 L150,30 L180,38 L210,20 L240,28 L270,15 L300,22"
                      fill="none"
                      stroke="#29abd2"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                {/* Mini bars */}
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {['Mon', 'Tue', 'Wed'].map((d, i) => (
                    <div
                      key={d}
                      className="rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10"
                    >
                      <p className="text-[9px] font-semibold uppercase tracking-wider text-gray-400">
                        {d}
                      </p>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-brand"
                          style={{ width: `${60 + i * 12}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating chip */}
              <div className="absolute -bottom-5 right-6 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-black/5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Zap className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                    Performance
                  </p>
                  <p className="text-sm font-bold text-navy-900">
                    Instant Visibility
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark value-prop band */}
      <section className="bg-navy-950 py-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand-300">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-white">{item.title}</p>
                    <p className="text-xs text-gray-400">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Built for Every Growing Business */}
      <section id="how-it-works" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="font-display text-4xl font-bold tracking-tight text-navy-900 md:text-5xl">
              Built for Every Growing Business
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-gray-600">
              No matter your scale, Flyrlink provides the infrastructure to
              showcase your value and secure long-term clients.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {/* Startups - light card */}
            <div className="rounded-3xl border border-gray-200 bg-white p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Rocket className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-navy-900">Startups</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Launch, validate, and scale faster with integrated lead
                generation and instant visibility tools.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-[11px] font-semibold text-brand-700">
                  <CheckCircle2 className="h-3 w-3" />
                  Rapid Market Validation
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-[11px] font-semibold text-brand-700">
                  <CheckCircle2 className="h-3 w-3" />
                  Reach Early Adopters
                </span>
              </div>
            </div>

            {/* Agencies - dark card */}
            <div className="rounded-3xl bg-gradient-to-br from-navy-800 to-navy-950 p-7 text-white shadow-xl shadow-navy-900/20">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/20 text-brand-300">
                <Megaphone className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-xl font-bold">Agencies</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-300">
                Deliver services and grow clients through our high-velocity
                business ecosystem designed for agency scale.
              </p>
              <div className="mt-5 rounded-2xl bg-white/[0.05] p-4 ring-1 ring-white/10">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-300">
                  Agency Success
                </p>
                <p className="mt-1.5 text-sm italic text-gray-200">
                  &ldquo;Tripled our client capacity in just 3 months.&rdquo;
                </p>
              </div>
            </div>

            {/* Training Institutes - white card with image */}
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white">
              <div className="flex flex-col gap-5 p-7 md:flex-row md:items-center">
                <div className="flex-1">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-navy-900">
                    Training Institutes
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    Run programs and reach learners with integrated
                    registration and workshop management.
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-[11px] font-semibold text-brand-700">
                    <TrendingUp className="h-3 w-3" />
                    10x Enrollment
                  </span>
                </div>
                <div className="relative h-32 w-full overflow-hidden rounded-2xl md:h-32 md:w-40 md:flex-shrink-0">
                  <Image
                    src="/Marketing%20content/Group/group-of-young-adults-learning-together-indoors-2026-01-09-09-59-22-utc.jpg"
                    alt="Training cohort"
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>
              </div>
            </div>

            {/* Organizations - tinted card */}
            <div className="rounded-3xl border border-brand/20 bg-brand/[0.06] p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15 text-brand-700">
                <Building2 className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-navy-900">
                Organizations
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Offer services, hire talent, and build trust within a verified
                network of professional entities.
              </p>
              <div className="mt-5 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-brand-700 ring-1 ring-brand/20">
                  <ShieldCheck className="h-3 w-3" />
                  Verified Teams
                </span>
                <div className="flex -space-x-2">
                  {['#29abd2', '#1d6e89', '#6ec7dd', '#44b6d4'].map((c, i) => (
                    <div
                      key={i}
                      className="h-7 w-7 rounded-full border-2 border-white"
                      style={{ background: c }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post Jobs. Hire Interns. */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
                Boost your team with pro-level talent
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-navy-900 md:text-5xl">
                Post Jobs. Hire Interns.
                <br />
                Work with{' '}
                <span className="text-brand">Skilled Experts.</span>
              </h2>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Briefcase className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-navy-900">
                      Post job opportunities instantly
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">
                      Reach thousands of qualified candidates ready to fill
                      your growth roles. Streamlined posting gets your
                      listings live in minutes.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Users className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-navy-900">
                      Hire interns and early talent cost-effectively
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">
                      Fuel your growth by connecting with ambitious early
                      career talent and specialized interns who can fast-track
                      your roadmap.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="https://app.flyrlink.com/"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-800"
                >
                  Start Hiring Now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            {/* Image with stat overlay */}
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl shadow-navy-900/20">
                <Image
                  src="/Marketing%20content/Group/four-people-working-together-on-laptops-2026-01-07-23-37-33-utc.jpg"
                  alt="Team collaborating on laptops"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className="absolute -bottom-5 left-6 max-w-[220px] rounded-2xl bg-white p-4 shadow-xl ring-1 ring-black/5">
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-3xl font-extrabold text-brand">
                    85%
                  </span>
                </div>
                <p className="mt-1 text-xs leading-snug text-gray-600">
                  faster hiring cycles for organizations using Flyrlink talent
                  tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy-950 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl">
            Start Growing Your Business Today
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-gray-300">
            Reach clients faster. Build trust stronger. Scale smarter. Join
            thousands of businesses thriving on Flyrlink.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://app.flyrlink.com/"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-brand/30 transition hover:bg-brand-600"
            >
              List Your Business Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Platform
            </Link>
          </div>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
            Trusted by 500+ Enterprise Partners
          </p>
        </div>
      </section>
    </>
  );
}
