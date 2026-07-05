'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Wallet, CalendarClock, BadgeCheck, Zap, Star, Globe,
  Check, ChevronDown, ArrowRight, UserPlus, MessagesSquare,
  TrendingUp, UserRound, type LucideIcon,
} from 'lucide-react';

const SIGNUP_URL = 'https://app.flyrlink.com/';

const HERO_TRUST = ['No upfront cost', 'Set your own rates', 'Verified, serious clients'];

const BENEFITS: { icon: LucideIcon; title: string; desc: string; green?: boolean }[] = [
  { icon: Wallet, title: 'Keep More of What You Earn', desc: 'Industry-low commission. Set your own price and keep the majority of every session.' },
  { icon: CalendarClock, title: 'Full Control over Your Time', desc: 'Set your own schedule and availability. Work when and how you want.' },
  { icon: BadgeCheck, title: 'Verified, Serious Clients', desc: 'Every client is verified. No tire-kickers — just people ready to book.', green: true },
  { icon: Zap, title: 'Get Paid Fast', desc: 'Secure payments with fast, automatic payouts after every session.' },
  { icon: Star, title: 'Build Your Reputation', desc: 'Collect real ratings and reviews that grow your profile and your bookings.' },
  { icon: Globe, title: "Reach India's Expert Economy", desc: 'Get discovered by clients across 12 categories, all over India.' },
];

const LIST_CARDS: { icon: LucideIcon; title: string; desc: string; grad: string }[] = [
  {
    icon: UserPlus,
    title: 'Create Your Expert Profile',
    desc: 'Sign up quickly and add your bio, skills, experience, languages, and social links to build trust with clients.',
    grad: 'from-green-500 to-green-600',
  },
  {
    icon: CalendarClock,
    title: 'Add Services & Availability',
    desc: 'List consultations or packages, set pricing, and manage your weekly schedule with flexible time slots.',
    grad: 'from-teal-400 to-teal-500',
  },
  {
    icon: MessagesSquare,
    title: 'Manage Bookings & Chat',
    desc: 'Receive bookings, chat with clients, share custom quotes, and handle online sessions from one dashboard.',
    grad: 'from-purple-400 to-purple-500',
  },
  {
    icon: TrendingUp,
    title: 'Get Paid & Grow',
    desc: 'Track earnings, collect reviews, use your QR/profile flyer, and grow your visibility on Flyrlink.',
    grad: 'from-blue-400 to-blue-500',
  },
];

const STEPS = [
  { n: 1, title: 'List Your Service', desc: 'Create your profile and set your prices in minutes.' },
  { n: 2, title: 'Start Accepting Bookings', desc: 'Clients find you and book 1:1 sessions.' },
  { n: 3, title: 'Build Your Reputation', desc: 'Earn ratings and reviews from real clients.' },
  { n: 4, title: 'Get Paid Fast', desc: 'Secure, automatic payouts after every session.' },
  { n: 5, title: 'Grow Your Income', desc: 'Scale your bookings and earn on your terms.' },
];

const FAQS = [
  { q: 'How much does it cost?', a: 'Listing is completely free. We take a low commission only when you earn from a completed session — no monthly fees, no upfront cost.' },
  { q: 'How do I get paid?', a: 'Payouts are automatic and secure. After each completed session, your earnings are transferred to your bank account.' },
  { q: 'Do I need specific qualifications?', a: 'You need proven skill and experience in your field. Every expert is verified by our team before going live on the platform.' },
  { q: 'Can I work part-time?', a: 'Absolutely. You set your own schedule and availability — work full-time, part-time, or just on weekends.' },
  { q: 'What if I want to cancel?', a: 'You can pause or remove your listing anytime from your dashboard. No lock-ins, no penalties.' },
  { q: 'Is my information safe?', a: 'Yes. Your data is encrypted and never shared with third parties without your consent.' },
];

export default function BecomeExpert() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="bg-white">
      {/* Hero */}
      <section
        className="px-6 pb-16 pt-28 text-center lg:pb-20"
        style={{ backgroundImage: 'linear-gradient(160deg, #2A81D2 0%, #1d6ec0 55%, #0C2738 130%)' }}
      >
        <div className="mx-auto max-w-3xl">
          <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-[-1px] text-white md:text-5xl lg:text-6xl">
            Turn Your Skill Into Income
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/85 md:text-lg">
            List your services, connect with clients, and build your
            expertise-based business on Flyrlink. Real verified pros earning on
            their own terms.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {HERO_TRUST.map((t) => (
              <span key={t} className="inline-flex items-center gap-2 text-sm font-medium text-white/90">
                <Check className="h-4 w-4 text-brand-300" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why list on Flyrlink */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-heading text-3xl font-bold tracking-[-0.5px] text-navy-900 md:text-4xl">
              Why List on Flyrlink?
            </h2>
            <p className="mt-5 text-base leading-7 text-gray-600">
              Flyrlink is built for experts who want to grow on their own terms.
              List your services, set your prices, and reach clients actively
              looking to book. No cold outreach, no chasing invoices — just
              verified clients and fast, secure payouts. From your first booking
              to a full client base, we handle the platform so you can focus on
              your craft.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100">
            <Image
              src="/landing/Professional%20working.png"
              alt="Experts collaborating on Flyrlink"
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold tracking-[-0.5px] text-navy-900 md:text-4xl">
              Key Benefits
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-gray-600">
              Everything you need to grow your client base and run your expert
              business.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/5"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                      b.green ? 'bg-green-100 text-green-600' : 'bg-brand/10 text-brand'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy-900">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* List your service in 5 minutes */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold tracking-[-0.5px] text-navy-900 md:text-5xl">
              List Your Service in 5 Minutes
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 md:text-lg">
              Join Flyrlink as an expert, create your profile, publish services,
              manage bookings, and grow your presence online.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LIST_CARDS.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-brand/5"
                >
                  <div
                    className={`mx-auto flex aspect-square w-full max-w-[220px] items-center justify-center rounded-2xl bg-gradient-to-br ${c.grad}`}
                  >
                    <Icon className="h-16 w-16 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-navy-900">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{c.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href={SIGNUP_URL}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-brand px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand/30 transition-colors hover:bg-brand-600"
            >
              <UserRound className="h-5 w-5" />
              Join Flyrlink as an Expert
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Path to earning */}
      <section
        className="px-6 py-20"
        style={{ backgroundImage: 'linear-gradient(135deg, #2A81D2 0%, #1d6ec0 100%)' }}
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-heading text-3xl font-bold tracking-[-0.5px] text-white md:text-4xl">
            Your Path to Earning
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {STEPS.map((s) => (
              <div key={s.n} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-lg font-bold text-white ring-1 ring-white/30">
                  {s.n}
                </div>
                <h3 className="mt-4 text-sm font-bold text-white">{s.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-white/75">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-heading text-3xl font-bold tracking-[-0.5px] text-navy-900 md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 space-y-3">
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={open}
                  >
                    <span className="text-sm font-semibold text-navy-900 md:text-base">{f.q}</span>
                    <ChevronDown className={`h-4 w-4 flex-shrink-0 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`} />
                  </button>
                  {open && (
                    <div className="px-5 pb-5 text-sm leading-relaxed text-gray-600">{f.a}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
