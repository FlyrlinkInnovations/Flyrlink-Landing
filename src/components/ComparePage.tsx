'use client';

import { useState } from 'react';
import {
  Check, Minus, X, Sparkles, Layers, CalendarDays, ShieldCheck,
  ArrowRight, type LucideIcon,
} from 'lucide-react';

type Status = 'yes' | 'partial' | 'no';
type Cell = { status: Status; note: string };
type Row = { feature: string; flyrlink: Cell; market: Cell; freelance: Cell };
type Group = { key: string; label: string; rows: Row[] };

const yes = (note: string): Cell => ({ status: 'yes', note });
const partial = (note: string): Cell => ({ status: 'partial', note });
const no = (note: string): Cell => ({ status: 'no', note });

const GROUPS: Group[] = [
  {
    key: 'booking', label: 'Core Booking',
    rows: [
      { feature: 'Platform Type', flyrlink: yes('Expert network'), market: partial('Gig listings'), freelance: partial('Project bids') },
      { feature: 'Primary Use Case', flyrlink: yes('1:1 sessions'), market: partial('Service gigs'), freelance: partial('Long projects') },
      { feature: 'Session Formats', flyrlink: yes('Calls, chat, events'), market: partial('Limited'), freelance: no('Async only') },
    ],
  },
  {
    key: 'ai', label: 'AI & Matching',
    rows: [
      { feature: 'AI Matching', flyrlink: yes('Smart 3-expert match'), market: no('Manual search'), freelance: no('Manual search') },
      { feature: 'Personalized Picks', flyrlink: yes('Goal & budget aware'), market: partial('Basic filters'), freelance: no('None') },
      { feature: 'Timezone Aware', flyrlink: yes('Built in'), market: no('No'), freelance: no('No') },
    ],
  },
  {
    key: 'trust', label: 'Discovery & Trust',
    rows: [
      { feature: 'Expert Verification', flyrlink: yes('ID + background'), market: partial('Self-reported'), freelance: partial('Optional') },
      { feature: 'Rating System', flyrlink: yes('Verified reviews'), market: yes('Reviews'), freelance: yes('Reviews') },
      { feature: 'Real, Vetted Pros', flyrlink: yes('Every expert'), market: partial('Mixed'), freelance: partial('Mixed') },
    ],
  },
  {
    key: 'variety', label: 'Session Variety',
    rows: [
      { feature: '1:1 Sessions', flyrlink: yes('Core feature'), market: partial('Some'), freelance: no('Rare') },
      { feature: 'Live Events & Workshops', flyrlink: yes('Supported'), market: no('No'), freelance: no('No') },
    ],
  },
  {
    key: 'flexibility', label: 'Booking Flexibility',
    rows: [
      { feature: 'Instant Booking', flyrlink: yes('Live availability'), market: partial('Request-based'), freelance: no('Quote first') },
      { feature: 'Free Reschedule', flyrlink: yes('Flexible'), market: partial('Varies'), freelance: partial('Varies') },
    ],
  },
  {
    key: 'fees', label: 'Fees & Clarity',
    rows: [
      { feature: 'Commission Model', flyrlink: yes('Low, transparent'), market: no('High'), freelance: no('High + fees') },
      { feature: 'Hidden Fees', flyrlink: yes('None'), market: no('Common'), freelance: no('Common') },
    ],
  },
  {
    key: 'experience', label: 'Client Experience',
    rows: [
      { feature: 'Direct Chat', flyrlink: yes('Free before booking'), market: partial('After purchase'), freelance: yes('Yes') },
      { feature: 'In-app Video', flyrlink: yes('Secure calls'), market: no('No'), freelance: no('External') },
      { feature: 'Support', flyrlink: yes('24/7'), market: partial('Limited'), freelance: partial('Limited') },
    ],
  },
];

const FILTERS = [
  { key: 'all', label: 'All Categories' },
  ...GROUPS.map((g) => ({ key: g.key, label: g.label })),
];

const WHY: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Sparkles, title: 'AI-First Matching', desc: 'We surface 3 verified experts that fit your goals — no endless scrolling.' },
  { icon: Layers, title: 'Unique Category Depth', desc: '89+ services across 12 categories, from wellness to tax filing.' },
  { icon: CalendarDays, title: 'Live Events & Sessions', desc: 'Book 1:1 calls, workshops and events — not just async gigs.' },
  { icon: ShieldCheck, title: 'Verified Every Expert', desc: 'Every pro is ID-checked and background-verified before going live.' },
];

function StatusIcon({ status }: { status: Status }) {
  if (status === 'yes')
    return <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600"><Check className="h-3.5 w-3.5" strokeWidth={3} /></span>;
  if (status === 'partial')
    return <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-amber-600"><Minus className="h-3.5 w-3.5" strokeWidth={3} /></span>;
  return <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-red-500"><X className="h-3.5 w-3.5" strokeWidth={3} /></span>;
}

function CompareCell({ cell, highlight }: { cell: Cell; highlight?: boolean }) {
  return (
    <div className={`flex flex-col items-center gap-1 px-3 py-3 text-center ${highlight ? 'bg-brand/5' : ''}`}>
      <StatusIcon status={cell.status} />
      <span className="text-[11px] leading-tight text-gray-500">{cell.note}</span>
    </div>
  );
}

export default function ComparePage() {
  const [filter, setFilter] = useState('all');
  const groups = filter === 'all' ? GROUPS : GROUPS.filter((g) => g.key === filter);

  return (
    <main className="bg-white">
      {/* Hero */}
      <section
        className="relative overflow-hidden px-6 pb-16 pt-28 text-center"
        style={{ backgroundImage: 'linear-gradient(160deg, #0C2738 0%, #123a63 70%, #0C2738 100%)' }}
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand/20 blur-[100px]" />
        <div className="relative mx-auto max-w-2xl">
          <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-[-1px] text-white md:text-5xl">
            Flyrlink <span className="text-brand-300">vs The Rest</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/80 md:text-lg">
            See how Flyrlink compares to generic marketplaces and freelance
            platforms — feature by feature.
          </p>
        </div>
      </section>

      {/* Filter pills */}
      <section className="px-6 pt-10">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                filter === f.key
                  ? 'bg-brand text-white'
                  : 'border border-gray-200 bg-white text-gray-600 hover:border-gray-300'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-6xl overflow-x-auto">
          <div className="min-w-[640px] overflow-hidden rounded-2xl border border-gray-200">
            {/* Header */}
            <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr] border-b border-gray-200 bg-white">
              <div className="px-4 py-4" />
              <div className="bg-brand px-3 py-4 text-center text-sm font-bold text-white">Flyrlink</div>
              <div className="px-3 py-4 text-center text-sm font-semibold text-gray-500">Other Marketplaces</div>
              <div className="px-3 py-4 text-center text-sm font-semibold text-gray-500">Freelance Sites</div>
            </div>

            {groups.map((g) => (
              <div key={g.key}>
                <div className="bg-gray-50 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400">
                  {g.label}
                </div>
                {g.rows.map((r, i) => (
                  <div
                    key={r.feature}
                    className={`grid grid-cols-[1.6fr_1fr_1fr_1fr] items-center ${
                      i % 2 ? 'bg-gray-50/40' : 'bg-white'
                    }`}
                  >
                    <div className="px-4 py-3 text-sm font-medium text-navy-900">{r.feature}</div>
                    <CompareCell cell={r.flyrlink} highlight />
                    <CompareCell cell={r.market} />
                    <CompareCell cell={r.freelance} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why experts choose Flyrlink */}
      <section className="bg-[#F2F7FF] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-heading text-3xl font-bold tracking-[-0.5px] text-navy-900 md:text-4xl">
            Why Experts Choose Flyrlink
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w) => {
              const Icon = w.icon;
              return (
                <div key={w.title} className="rounded-2xl border border-gray-200 bg-white p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-navy-900">{w.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{w.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="px-6 py-16 text-center"
        style={{ backgroundImage: 'linear-gradient(135deg, #2A81D2 0%, #1d6ec0 100%)' }}
      >
        <div className="mx-auto max-w-2xl">
          <h2 className="font-heading text-3xl font-bold tracking-[-0.5px] text-white md:text-4xl">
            Ready to Experience the Difference?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base text-white/85">
            Find a verified expert and book a real 1:1 session in minutes.
          </p>
          <a
            href="https://app.flyrlink.com/"
            className="group mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0C2738] shadow-lg transition-transform hover:-translate-y-0.5"
          >
            Get Started Free
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </section>
    </main>
  );
}
