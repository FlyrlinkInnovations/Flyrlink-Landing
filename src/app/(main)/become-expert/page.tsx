import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Banknote,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Globe,
  Gauge,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  UserPlus,
  Wallet,
} from 'lucide-react';
import { CATEGORIES, TOTAL_SERVICE_COUNT } from '@/config/services';

export const metadata: Metadata = {
  title: 'Become an Expert',
  description:
    'Earn from your skill on Flyrlink. Set your own price, build a verified profile, and get booked by clients across 12 categories. Free to join.',
};

const benefits = [
  {
    icon: Banknote,
    title: 'Set your own price',
    description:
      'You decide what your time is worth. From ₹500 per session upwards, no caps.',
  },
  {
    icon: ShieldCheck,
    title: 'Keep the majority',
    description:
      '10% platform fee. No hidden charges. No setup cost. No subscription.',
  },
  {
    icon: CalendarDays,
    title: 'Work on your schedule',
    description:
      'Open your calendar when you want. Take time off when you need to. You are in control.',
  },
  {
    icon: Star,
    title: 'Real reviews, real growth',
    description:
      'Genuine ratings from real clients build your reputation faster than ads ever could.',
  },
];

const steps = [
  {
    icon: UserPlus,
    tag: '01 · SIGN UP',
    title: 'Create a free account',
    description:
      'Takes 2 minutes. Email or phone, no credit card needed.',
  },
  {
    icon: ClipboardList,
    tag: '02 · BUILD PROFILE',
    title: 'Tell us about your skill',
    description:
      'Add credentials, sample work, and your hourly or session rate. Get ID-verified.',
  },
  {
    icon: Search,
    tag: '03 · GET DISCOVERED',
    title: 'Show up in search',
    description:
      'Clients searching your category see your profile, ratings, and pricing instantly.',
  },
  {
    icon: CalendarDays,
    tag: '04 · GET BOOKED',
    title: 'Chat, then deliver',
    description:
      'Free chat first. Confirmed bookings go through escrow, so you never chase payment.',
  },
  {
    icon: Wallet,
    tag: '05 · GET PAID',
    title: 'Cash out securely',
    description:
      'Funds release 15 days after each session. Withdraw to your bank, anytime.',
  },
];

const expertFAQs = [
  {
    q: 'How much does it cost to join?',
    a: 'Nothing. Creating an expert profile is free. Flyrlink charges a 10% platform fee only on completed sessions.',
  },
  {
    q: 'How do payments work?',
    a: 'Clients pay upfront into escrow when they book. After your session, funds release to you 15 days later (a grace period for any disputes). You withdraw via UPI, bank transfer, or wallet.',
  },
  {
    q: 'How long does verification take?',
    a: 'Once you submit your profile and KYC documents, our team reviews within 3 to 5 business days. Verified pros get a badge on their profile that significantly boosts trust.',
  },
  {
    q: 'Can I do this part-time alongside my job?',
    a: 'Yes. Most experts on Flyrlink work flexibly. You set your availability and only take bookings when your calendar is open.',
  },
  {
    q: 'What if a client cancels or refuses to pay?',
    a: 'Funds sit in our escrow until the session is delivered and accepted, so you do not chase payments. Disputes go through our review process. Genuine work always gets paid.',
  },
  {
    q: 'Do I need a GST registration?',
    a: 'Not to start. If your annual income from Flyrlink crosses the GST threshold, you will need to register. We provide payment statements to make tax filing simple.',
  },
];

export default function BecomeExpertPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 pt-28 pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-60" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/15 rounded-full blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70 backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-brand-300" />
                FOR EXPERTS
              </div>
              <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
                Earn from your skill.
                <span className="mt-2 block font-serif italic font-medium text-brand-300">
                  On your schedule.
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-300 md:text-lg">
                Whether you teach yoga, write code, design logos, or consult on
                taxes, Flyrlink helps you turn your skill into income. Set your
                own price, get bookings on your calendar, and build a verified
                reputation that compounds.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://app.flyrlink.com/"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-brand/30 transition-all duration-300 hover:bg-brand-600"
                >
                  Apply to become an expert
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-brand transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-3 text-sm font-semibold text-white/90 hover:text-white"
                >
                  See how it works
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              {/* Hero stats */}
              <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
                <div>
                  <div className="font-display text-3xl font-bold text-white">
                    500+
                  </div>
                  <div className="mt-1 text-[10px] font-semibold tracking-[0.2em] text-gray-400 uppercase">
                    Active Experts
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-white">
                    {CATEGORIES.length}
                  </div>
                  <div className="mt-1 text-[10px] font-semibold tracking-[0.2em] text-gray-400 uppercase">
                    Categories
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-white">
                    10k+
                  </div>
                  <div className="mt-1 text-[10px] font-semibold tracking-[0.2em] text-gray-400 uppercase">
                    Sessions Run
                  </div>
                </div>
              </div>
            </div>

            {/* Side: earnings card */}
            <div className="relative">
              <div className="relative mx-auto max-w-sm overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-navy-800 to-navy-950 p-6 shadow-2xl shadow-black/50">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold tracking-[0.22em] text-brand-300">
                    YOUR EARNINGS · APRIL
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-500/10 border border-green-500/30 px-2 py-0.5 text-[10px] font-bold text-green-400">
                    <TrendingUp className="h-3 w-3" />
                    +28%
                  </span>
                </div>
                <div className="mt-5">
                  <div className="font-display text-5xl font-bold text-white">
                    ₹47,250
                  </div>
                  <p className="mt-1 text-xs text-gray-400">
                    52 sessions, average ₹908 each
                  </p>
                </div>

                {/* Bar chart */}
                <div className="mt-6 flex h-20 items-end gap-1.5">
                  {[40, 55, 48, 70, 62, 85, 78, 92, 75, 88, 95, 100].map(
                    (h, i) => (
                      <div
                        key={i}
                        className={`flex-1 rounded-sm ${
                          i >= 8
                            ? 'bg-gradient-to-t from-brand to-brand-300'
                            : 'bg-white/10'
                        }`}
                        style={{ height: `${h}%` }}
                      />
                    )
                  )}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                    <p className="text-gray-400">Avg session</p>
                    <p className="mt-1 font-bold text-white">₹908</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                    <p className="text-gray-400">Rating</p>
                    <p className="mt-1 font-bold text-white inline-flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      4.9
                    </p>
                  </div>
                </div>

                <div className="mt-5 rounded-xl border border-brand/30 bg-brand/10 p-3 text-xs">
                  <p className="text-brand-300 font-semibold">
                    Sample dashboard
                  </p>
                  <p className="mt-0.5 text-gray-400 text-[11px]">
                    Earnings vary by category, price, and availability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Flyrlink */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <div className="mb-3 text-[11px] font-semibold tracking-[0.28em] text-gray-400">
              WHY FLYRLINK
            </div>
            <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-navy-900 md:text-5xl">
              Built for experts.{' '}
              <span className="font-serif italic font-medium text-gray-400">
                Not against them.
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-gray-600 md:text-lg">
              No exploitative fees, no race to the bottom. Real tools to grow a
              real business.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition-transform group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-navy-900">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {b.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="bg-gray-50 py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <div className="mb-3 text-[11px] font-semibold tracking-[0.28em] text-gray-400">
              HOW IT WORKS
            </div>
            <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-navy-900 md:text-5xl">
              Five steps from{' '}
              <span className="font-serif italic font-medium text-brand">
                signup to first booking.
              </span>
            </h2>
          </div>

          <ol className="relative grid gap-4 lg:grid-cols-5">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.tag}
                  className="relative rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-md hover:shadow-brand/5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="mt-4 text-[10px] font-semibold tracking-[0.22em] text-brand">
                    {step.tag}
                  </div>
                  <h3 className="mt-1 text-base font-bold text-navy-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {step.description}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <div className="mb-3 text-[11px] font-semibold tracking-[0.28em] text-gray-400">
              {TOTAL_SERVICE_COUNT}+ SERVICES TO LIST UNDER
            </div>
            <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-navy-900 md:text-5xl">
              Pick your category.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-gray-600">
              From yoga to tax consulting, list under any of our 12 categories.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((c) => {
              const Icon = c.icon;
              return (
                <Link
                  key={c.slug}
                  href={`/categories/${c.slug}`}
                  className={`group inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gradient-to-b ${c.tone} px-4 py-2 text-sm font-medium text-navy-900 transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-md`}
                >
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-full ${c.iconBg} ${c.iconText}`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  {c.name}
                  <span className="text-xs text-gray-500">
                    {c.services.length}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <ShieldCheck className="h-6 w-6 text-brand" />
              <h3 className="mt-4 font-bold text-navy-900">
                Escrow-protected payments
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Clients pay upfront. You deliver. Funds release in 15 days.
                Never chase invoices again.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <Gauge className="h-6 w-6 text-brand" />
              <h3 className="mt-4 font-bold text-navy-900">No spam clients</h3>
              <p className="mt-2 text-sm text-gray-600">
                Free chat before booking lets you screen requests. Decline what
                does not fit, no penalty.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <Globe className="h-6 w-6 text-brand" />
              <h3 className="mt-4 font-bold text-navy-900">India-wide reach</h3>
              <p className="mt-2 text-sm text-gray-600">
                Take sessions remotely or in-person. Pick your service area, set
                your timezone, your call.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 text-center">
            <div className="mb-3 text-[11px] font-semibold tracking-[0.28em] text-gray-400">
              QUESTIONS, ANSWERED
            </div>
            <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-navy-900 md:text-5xl">
              Common questions{' '}
              <span className="font-serif italic font-medium text-brand">
                from new experts.
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {expertFAQs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-gray-200 bg-white p-6"
              >
                <h3 className="flex items-start gap-3 text-base font-bold text-navy-900 md:text-lg">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" />
                  {faq.q}
                </h3>
                <p className="mt-3 pl-8 text-sm leading-relaxed text-gray-600 md:text-base">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy-950 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[120px]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
            Ready to earn from{' '}
            <span className="font-serif italic font-medium text-brand-300">
              your skill?
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-gray-400 md:text-lg">
            Free to join, free to list. You only pay when you earn.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="https://app.flyrlink.com/"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-brand/30 transition-all duration-300 hover:bg-brand-600"
            >
              Apply to become an expert
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-brand transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-1.5 px-5 py-4 text-sm font-semibold text-white/90 hover:text-white"
            >
              Talk to our team first
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
