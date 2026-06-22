'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Wallet, CalendarClock, BadgeCheck, Zap, Star, Globe,
  Check, ChevronDown, ArrowRight, type LucideIcon,
} from 'lucide-react';

const HERO_TRUST = ['No upfront cost', 'Set your own rates', 'Verified, serious clients'];

const BENEFITS: { icon: LucideIcon; title: string; desc: string; green?: boolean }[] = [
  { icon: Wallet, title: 'Keep More of What You Earn', desc: 'Industry-low commission. Set your own price and keep the majority of every session.' },
  { icon: CalendarClock, title: 'Full Control over Your Time', desc: 'Set your own schedule and availability. Work when and how you want.' },
  { icon: BadgeCheck, title: 'Verified, Serious Clients', desc: 'Every client is verified. No tire-kickers — just people ready to book.', green: true },
  { icon: Zap, title: 'Get Paid Fast', desc: 'Secure payments with fast, automatic payouts after every session.' },
  { icon: Star, title: 'Build Your Reputation', desc: 'Collect real ratings and reviews that grow your profile and your bookings.' },
  { icon: Globe, title: "Reach India's Expert Economy", desc: 'Get discovered by clients across 12 categories, all over India.' },
];

const CATEGORY_OPTIONS = [
  'Education', 'Fitness', 'Sports', 'Tech & IT', 'Photography', 'Beauty',
  'Fashion', 'Business', 'Entertainment', 'Digital Marketing',
  'Writing & Translation', 'Creators & Influencers',
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
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', category: '', offer: '1:1 Sessions', agree: false,
  });

  const set = (k: string, v: string | boolean) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.agree) return;
    setSubmitted(true);
  };

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
              src="/Marketing%20content/Group/architect-cafe-casual-brainstorming-meeting-concep-2026-01-07-23-27-47-utc.jpg"
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

      {/* List your service form */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold tracking-[-0.5px] text-navy-900 md:text-4xl">
              List Your Service in 5 Minutes
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-base text-gray-600">
              Tell us about yourself and we&apos;ll get your expert profile live.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            {submitted ? (
              <div className="py-10 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Check className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy-900">You&apos;re on the list!</h3>
                <p className="mx-auto mt-2 max-w-sm text-sm text-gray-600">
                  Thanks, {form.firstName || 'expert'}. Our team will review your
                  details and reach out to get your profile live.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="First Name">
                    <input required value={form.firstName} onChange={(e) => set('firstName', e.target.value)} placeholder="Enter your first name" className={inputCls} />
                  </Field>
                  <Field label="Last Name">
                    <input required value={form.lastName} onChange={(e) => set('lastName', e.target.value)} placeholder="Enter your last name" className={inputCls} />
                  </Field>
                </div>
                <Field label="Email Address">
                  <input required type="email" value={form.email} onChange={(e) => set('email', e.target.value)} placeholder="you@email.com" className={inputCls} />
                </Field>
                <Field label="Phone Number / WhatsApp">
                  <input required value={form.phone} onChange={(e) => set('phone', e.target.value)} placeholder="+91 00000 00000" className={inputCls} />
                </Field>
                <Field label="Service Category">
                  <div className="relative">
                    <select required value={form.category} onChange={(e) => set('category', e.target.value)} className={`${inputCls} appearance-none pr-10`}>
                      <option value="" disabled>Select a category</option>
                      {CATEGORY_OPTIONS.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  </div>
                </Field>
                <Field label="What Service Do You Offer?">
                  <div className="flex flex-wrap gap-2">
                    {['1:1 Sessions', 'Workshops & Events', 'Both'].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => set('offer', opt)}
                        className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                          form.offer === opt
                            ? 'bg-brand text-white'
                            : 'border border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </Field>

                <label className="flex items-start gap-2 pt-1 text-xs text-gray-600">
                  <input type="checkbox" checked={form.agree} onChange={(e) => set('agree', e.target.checked)} className="mt-0.5 h-4 w-4 rounded border-gray-300 text-brand focus:ring-brand" />
                  <span>I agree to Flyrlink&apos;s Terms &amp; Privacy Policy and to being contacted about my listing.</span>
                </label>

                <button
                  type="submit"
                  disabled={!form.agree}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition-colors hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  List My Profile
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>
            )}
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

const inputCls =
  'w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-navy-900 placeholder:text-gray-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand';

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-navy-900">{label}</label>
      {children}
    </div>
  );
}
