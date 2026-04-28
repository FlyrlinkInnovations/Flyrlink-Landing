'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Briefcase,
  Copy,
  Globe,
  Megaphone,
  MessageSquare,
  Mic,
  Share2,
  Users,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const audiences = [
  { icon: Mic, label: 'Creators' },
  { icon: Users, label: 'Coaches' },
  { icon: Briefcase, label: 'Freelancers' },
  { icon: MessageSquare, label: 'Communities' },
  { icon: Megaphone, label: 'Agencies' },
];

const stats = [
  { value: '5%', label: 'COMMISSION' },
  { value: '12 mo', label: 'WINDOW' },
  { value: '∞', label: 'REFERRALS' },
  { value: '24/7', label: 'TRACKING' },
];

export default function AffiliateHighlights() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-gray-50 py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 reveal ${isVisible ? 'revealed' : ''}`}
      >
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mb-3 text-[11px] font-semibold tracking-[0.28em] text-gray-400">
            AFFILIATE PROGRAM
          </div>
          <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-navy-900 md:text-5xl lg:text-6xl">
            Bring your audience.{' '}
            <span className="font-serif italic font-medium text-brand">
              Earn for a year.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-gray-600 md:text-lg">
            Five steps to start earning: share your link, refer clients,
            collect commission. No cap, no chasing.
          </p>

          {/* Audience pill row */}
          <div className="mt-7 flex flex-wrap justify-center gap-2">
            {audiences.map((a) => {
              const Icon = a.icon;
              return (
                <span
                  key={a.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-navy-900"
                >
                  <Icon className="h-3.5 w-3.5 text-brand" />
                  {a.label}
                </span>
              );
            })}
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
          {/* Stage 1 - link */}
          <StageCard
            stage="STAGE 1"
            title="Grab your referral link"
            description="Generate a personal Flyrlink link in seconds. Shareable anywhere."
            className="md:col-span-6 bg-gradient-to-br from-brand-100 via-brand-50 to-white"
          >
            <div className="mt-5 flex items-center gap-2 rounded-xl border border-brand-200/60 bg-white/80 p-2.5 shadow-sm">
              <Globe className="h-3.5 w-3.5 text-brand" />
              <span className="flex-1 truncate text-[11px] font-mono text-navy-900">
                flyrlink.com/?ref=<span className="font-semibold">yourhandle</span>
              </span>
              <button className="flex items-center gap-1 rounded-md bg-brand px-2 py-1 text-[10px] font-semibold text-white hover:bg-brand-600">
                <Copy className="h-3 w-3" />
                Copy
              </button>
            </div>
          </StageCard>

          {/* Stage 2 - share */}
          <StageCard
            stage="STAGE 2"
            title="Share with your audience"
            description="Post anywhere - socials, newsletters, Slack, DMs. We track them all."
            className="md:col-span-6 bg-white"
          >
            <div className="mt-5 flex flex-wrap gap-1.5">
              {[
                { label: 'X', tint: 'bg-navy-900 text-white' },
                { label: 'IG', tint: 'bg-gradient-to-br from-brand to-brand-700 text-white' },
                { label: 'LI', tint: 'bg-brand text-white' },
                { label: 'YT', tint: 'bg-red-500 text-white' },
                { label: 'TT', tint: 'bg-navy-800 text-white' },
                { label: '+2', tint: 'bg-gray-100 text-gray-500' },
              ].map((p) => (
                <span
                  key={p.label}
                  className={`flex h-7 w-9 items-center justify-center rounded-md text-[10px] font-bold ${p.tint}`}
                >
                  {p.label}
                </span>
              ))}
            </div>
          </StageCard>

          {/* Stage 3 - collaborate (smaller) */}
          <StageCard
            stage="STAGE 3"
            title="Track every signup"
            description="Real-time attribution for every click, lead and conversion."
            className="md:col-span-4 bg-brand-50"
          >
            <div className="mt-5">
              <div className="flex items-end gap-1 h-12">
                {[30, 55, 40, 70, 60, 88, 95].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-gradient-to-t from-brand to-brand-300"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="mt-2 flex justify-between text-[9px] uppercase tracking-[0.2em] text-gray-400">
                <span>Mon</span>
                <span>Sun</span>
              </div>
            </div>
          </StageCard>

          {/* Stage 4 - earn (wider) */}
          <StageCard
            stage="STAGE 4"
            title="Earn 5% for 12 months"
            description="Every transaction from every referral - sessions, events, add-ons. Auto-paid, monthly."
            className="md:col-span-8 bg-gradient-to-br from-brand-50 to-white"
          >
            <div className="mt-5 grid grid-cols-12 gap-1">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-8 rounded-md text-[9px] font-semibold uppercase tracking-wider flex items-center justify-center ${
                    i < 12
                      ? 'bg-gradient-to-br from-brand to-brand-600 text-white shadow-sm shadow-brand/30'
                      : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {['J','F','M','A','M','J','J','A','S','O','N','D'][i]}
                </div>
              ))}
            </div>
          </StageCard>

          {/* Stage 5 - dark stats */}
          <div className="relative overflow-hidden rounded-2xl bg-navy-900 p-6 md:col-span-12 md:p-8">
            <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-30" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-brand/10 blur-3xl" />

            <div className="relative grid gap-6 md:grid-cols-[1.3fr_1fr] md:items-center md:gap-10">
              <div>
                <div className="mb-3 text-[10px] font-semibold tracking-[0.28em] text-brand-300">
                  STAGE 5
                </div>
                <h3 className="font-display text-2xl font-bold text-white md:text-3xl">
                  Scale without{' '}
                  <span className="font-serif italic font-medium text-brand-300">
                    limits.
                  </span>
                </h3>
                <p className="mt-2 max-w-md text-sm text-gray-400">
                  No cap on referrals. No cap on earnings. Monthly payouts,
                  transparent dashboards, no chasing.
                </p>
                <Link
                  href="/affiliate"
                  className="group mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy-900 transition-all duration-300 hover:bg-gray-100"
                >
                  Join the program
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-navy-900 text-white transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm"
                  >
                    <div className="font-serif text-3xl italic font-medium text-white md:text-4xl">
                      {s.value}
                    </div>
                    <div className="mt-1 text-[10px] font-semibold tracking-[0.24em] text-gray-400">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type StageCardProps = {
  stage: string;
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
};

function StageCard({
  stage,
  title,
  description,
  className = '',
  children,
}: StageCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-gray-200/60 p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand/10 md:p-7 ${className}`}
    >
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-navy-900 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-white">
          {stage}
        </span>
        <Share2 className="h-3.5 w-3.5 text-gray-400 opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <h3 className="mt-4 font-display text-lg font-bold text-navy-900 md:text-xl">
        {title}
      </h3>
      <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-gray-600">
        {description}
      </p>
      <Link
        href="/affiliate"
        className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-navy-900 hover:text-brand"
      >
        Learn more
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-navy-900 text-white transition-transform group-hover:translate-x-0.5">
          <ArrowRight className="h-2.5 w-2.5" />
        </span>
      </Link>

      {children}
    </div>
  );
}

