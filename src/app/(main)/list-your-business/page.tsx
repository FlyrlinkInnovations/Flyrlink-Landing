import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Briefcase,
  Clock,
  Code2,
  Dumbbell,
  GraduationCap,
  LineChart,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Wallet,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'List Your Business',
  description:
    'Turn your skills into income on Flyrlink. Build your profile, get discovered, and grow your business on the high-trust marketplace for professionals.',
};

const valueProps = [
  {
    icon: Wallet,
    title: 'Earn Your Way',
    description: 'Flexible work, your terms',
  },
  {
    icon: Users,
    title: 'Reach Real Clients',
    description: 'Connect with serious buyers',
  },
  {
    icon: BadgeCheck,
    title: 'Build Your Brand',
    description: 'Reviews drive growth',
  },
  {
    icon: Clock,
    title: 'Start Anytime',
    description: 'No long-term commitment',
  },
];

const categories = [
  {
    icon: Sparkles,
    title: 'AI Experts',
    tags: ['machine learning', 'agents', 'data'],
  },
  {
    icon: Dumbbell,
    title: 'Fitness Trainers',
    tags: ['workout', 'fit', 'wellness'],
  },
  {
    icon: TrendingUp,
    title: 'Sales Professionals',
    tags: ['lead generation', 'growth'],
  },
  {
    icon: Target,
    title: 'Business Strategists',
    tags: ['strategy', 'marketing', 'scaling'],
  },
  {
    icon: Code2,
    title: 'Tech & Developers',
    tags: ['coding', 'projects', 'mentorship'],
  },
  {
    icon: GraduationCap,
    title: 'Students & Mentors',
    tags: ['projects', 'peer learning'],
  },
];

const steps = [
  {
    title: 'Offer your first service',
    description: 'Define what you are good at and set your terms.',
  },
  {
    title: 'Help others with real problems',
    description: 'Connect with clients who need your specific expertise.',
  },
  {
    title: 'Build experience and confidence',
    description: 'Collect reviews and showcase your growing portfolio.',
  },
  {
    title: 'Use this as a full-time or side income',
    description: 'Scale your brand and increase your booking rates.',
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
              <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-[11px] font-semibold text-brand-700">
                <Sparkles className="h-3.5 w-3.5" />
                Join the Marketplace
              </div>
              <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-navy-900 md:text-6xl">
                Turn Your Skills
                <br />
                Into <span className="text-brand">Income</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg">
                Freelance your expertise, build your profile, start
                earning. The high-trust marketplace for professionals who
                deliver.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://app.flyrlink.com/"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-600"
                >
                  Become an Expert
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <Link
                  href="/become-expert"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-900 bg-white px-6 py-3 text-sm font-semibold text-navy-900 transition hover:bg-navy-50"
                >
                  Start Your Journey
                </Link>
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative">
              <div className="relative aspect-[5/4] overflow-hidden rounded-3xl bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 shadow-2xl shadow-navy-900/20">
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full bg-brand/30 blur-3xl" />
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center p-10">
                  <div className="relative h-44 w-44 rounded-full bg-gradient-to-br from-brand/30 to-transparent" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Briefcase className="h-28 w-28 text-white/10" strokeWidth={1} />
                </div>
              </div>

              {/* Floating chip: Earn from Skills */}
              <div className="absolute -top-4 right-6 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-black/5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Wallet className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                    Monetize
                  </p>
                  <p className="text-sm font-bold text-navy-900">
                    Earn from Skills
                  </p>
                </div>
              </div>

              {/* Floating chip: Instant Bookings */}
              <div className="absolute left-0 top-1/2 -translate-x-4 -translate-y-1/2 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-black/5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Zap className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                    Efficiency
                  </p>
                  <p className="text-sm font-bold text-navy-900">
                    Instant Bookings
                  </p>
                </div>
              </div>

              {/* Floating chip: Grow Your Profile */}
              <div className="absolute -bottom-4 right-10 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-black/5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <TrendingUp className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                    Success
                  </p>
                  <p className="text-sm font-bold text-navy-900">
                    Grow Your Profile
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
                <div
                  key={item.title}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand-300">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-white">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-400">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Share What You Know */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="font-display text-4xl font-bold tracking-tight text-navy-900 md:text-5xl">
              Share What You Know
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-gray-600">
              Expertise spanning across every professional horizon.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/5"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-navy-900">
                    {cat.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {cat.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[11px] font-medium text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-10 text-center text-sm italic text-gray-500">
            No matter your skill, there is someone looking for it.
          </p>
        </div>
      </section>

      {/* Start Small. Grow Big. */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-4xl font-bold tracking-tight text-navy-900 md:text-5xl">
                Start Small. Grow Big.
              </h2>
              <p className="mt-4 max-w-lg text-base text-gray-600">
                Freelance your skills, gain real-world experience, and build
                your professional identity, step by step.
              </p>

              <ol className="mt-10 space-y-6">
                {steps.map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-navy-900">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Dashboard preview card */}
            <div className="relative">
              <div className="rounded-3xl bg-gradient-to-br from-navy-800 to-navy-950 p-7 shadow-2xl shadow-navy-900/20">
                {/* Project Completion */}
                <div className="rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-white">
                      Project Completion
                    </span>
                    <span className="font-bold text-brand-300">85%</span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-brand"
                      style={{ width: '85%' }}
                    />
                  </div>
                </div>

                {/* Stats grid */}
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                      Total Earnings
                    </p>
                    <p className="mt-2 font-display text-2xl font-bold text-white">
                      $12,450
                    </p>
                    <div className="mt-3 flex h-6 items-end gap-1">
                      {[35, 50, 42, 65, 55, 78, 70, 90].map((h, idx) => (
                        <div
                          key={idx}
                          className="flex-1 rounded-sm bg-brand/60"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                      Satisfied Clients
                    </p>
                    <p className="mt-2 font-display text-2xl font-bold text-white">
                      142
                    </p>
                    <div className="mt-3 flex items-center gap-1 text-brand-300">
                      <LineChart className="h-4 w-4" />
                      <span className="text-[11px] font-semibold">
                        +12 this month
                      </span>
                    </div>
                  </div>
                </div>

                {/* Profile mini card */}
                <div className="mt-4 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-lg">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-700 text-sm font-bold text-white">
                    SC
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5">
                      <p className="text-sm font-bold text-navy-900">
                        Sarah Chen
                      </p>
                      <BadgeCheck className="h-4 w-4 text-brand" />
                    </div>
                    <div className="mt-0.5 flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          className="h-3 w-3 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                      <span className="ml-1 text-[11px] font-semibold text-gray-600">
                        4.9
                      </span>
                    </div>
                  </div>
                  <Award className="h-5 w-5 text-brand" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-800 to-navy-950 px-6 py-16 text-center md:py-20">
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />
            <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl">
                Your Skills Have Value.
                <br />
                Start Today.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base text-gray-300">
                Join thousands of experts already growing their business on
                Flyrlink. The setup takes less than 5 minutes.
              </p>
              <div className="mt-8">
                <a
                  href="https://app.flyrlink.com/"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-brand/30 transition hover:bg-brand-600"
                >
                  Become an Expert Now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
