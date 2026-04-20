'use client';

import {
  ArrowRight,
  ArrowUpRight,
  Bell,
  Brain,
  Heart,
  MessageCircle,
  Rss,
  Shield,
  Sparkles,
  Star,
  TrendingUp,
  Zap,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const pills = [
  { icon: Zap, label: 'Matches 24/7' },
  { icon: Shield, label: 'Verified-only' },
  { icon: Rss, label: 'Live reactions' },
];

export default function PlatformFeatures() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative overflow-hidden bg-navy-950 py-28">
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-brand/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-brand/5 blur-[120px]" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-7xl px-6 reveal ${isVisible ? 'revealed' : ''}`}
      >
        {/* Top grid */}
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left: product mock */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent p-6 shadow-2xl shadow-black/40 md:rounded-[2.5rem] md:p-10">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand/25 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-brand/15 blur-3xl" />

              {/* Phone-like card */}
              <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-navy-800 to-navy-950 shadow-2xl">
                <div className="flex items-center gap-3 border-b border-white/10 p-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://randomuser.me/api/portraits/women/55.jpg"
                    alt=""
                    loading="lazy"
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-bold text-white">Expert Sarah</p>
                    <p className="text-xs text-gray-500">
                      Business Coach · 2h ago
                    </p>
                  </div>
                  <span className="rounded-full border border-brand/30 bg-brand/15 px-2 py-0.5 text-[10px] font-semibold text-brand-300">
                    VERIFIED
                  </span>
                </div>
                <div className="px-4 pb-4 pt-3">
                  <p className="text-sm font-bold text-white">
                    5 Tips for Startup Success in 2026
                  </p>
                  <p className="mt-1 line-clamp-2 text-xs text-gray-400">
                    Building a successful startup takes more than a great idea
                    - here&apos;s what actually moved the needle for the
                    founders I coach…
                  </p>
                  <div className="mt-3 overflow-hidden rounded-xl bg-gradient-to-br from-brand via-brand-600 to-navy-900 p-5">
                    <div className="flex items-center gap-2 text-white/90">
                      <TrendingUp className="h-4 w-4" />
                      <span className="text-[10px] font-semibold tracking-[0.24em]">
                        TRENDING INSIGHTS
                      </span>
                    </div>
                    <p className="mt-2 font-serif text-2xl italic font-medium text-white">
                      Ship early, listen loud.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-white/10 px-4 py-3 text-gray-500">
                  <button className="flex items-center gap-1.5 transition hover:text-brand-300">
                    <Heart className="h-4 w-4" />
                    <span className="text-xs font-semibold">324</span>
                  </button>
                  <button className="flex items-center gap-1.5 transition hover:text-brand-300">
                    <MessageCircle className="h-4 w-4" />
                    <span className="text-xs font-semibold">89</span>
                  </button>
                  <button className="flex items-center gap-1.5 transition hover:text-brand-300">
                    <Star className="h-4 w-4" />
                    <span className="text-xs font-semibold">Save</span>
                  </button>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between text-brand-300/80">
                <span className="font-serif text-2xl italic font-medium">
                  Flyr
                </span>
                <span className="text-[10px] font-semibold tracking-[0.28em]">
                  PLATFORM · v1
                </span>
              </div>
            </div>
          </div>

          {/* Right: copy */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1">
              <Sparkles className="h-3.5 w-3.5 text-brand-300" />
              <span className="text-[10px] font-semibold tracking-[0.24em] text-brand-300">
                MEET FLYRLINK
              </span>
            </div>
            <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
              From signal to
              <span className="mt-1 block font-serif italic font-medium text-brand-300">
                outcome.
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-400 md:text-lg">
              Your always-on expert stack - ideas, intros, posts and reactions
              from the people who move your work forward. Always on, never
              noisy.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {pills.map((p) => {
                const Icon = p.icon;
                return (
                  <span
                    key={p.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white shadow-sm"
                  >
                    <Icon className="h-3.5 w-3.5 text-brand-300" />
                    {p.label}
                  </span>
                );
              })}
            </div>

            <a
              href="https://app.flyrlink.com/"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-navy-950 shadow-xl transition-all duration-300 hover:bg-gray-100 hover:shadow-brand/30"
            >
              Explore the platform
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-navy-950 text-white transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="h-3 w-3" />
              </span>
            </a>
          </div>
        </div>

        {/* Bottom 3-card row */}
        <div className="mt-16 grid gap-4 md:mt-20 md:grid-cols-3 md:gap-5">
          <FeatureCard tone="glass" kicker="SIGNAL DETECTED" icon={Brain}>
            <p className="text-sm leading-relaxed text-gray-300">
              AI surfaces posts, events and experts aligned with{' '}
              <em className="font-serif not-italic text-white">your goals</em>
              {' '}in the moments that matter.
            </p>
            <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-3">
              <div className="flex items-center gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt=""
                  loading="lazy"
                  className="h-7 w-7 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="text-[11px] font-semibold text-white">
                    @priya_builds
                  </p>
                  <p className="text-[10px] text-gray-400">
                    &quot;Shipped the MVP in 3 weeks - here&apos;s what I&apos;d
                    do different&quot;
                  </p>
                </div>
                <Heart className="h-3.5 w-3.5 fill-brand text-brand" />
              </div>
            </div>
          </FeatureCard>

          <FeatureCard tone="glass" kicker="CONNECTIONS FLOW" icon={MessageCircle}>
            <p className="text-sm leading-relaxed text-gray-300">
              Replies, intros and bookings happen inline - your community
              doesn&apos;t wait for you to open a new tab.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[
                  'https://randomuser.me/api/portraits/men/52.jpg',
                  'https://randomuser.me/api/portraits/women/47.jpg',
                  'https://randomuser.me/api/portraits/men/36.jpg',
                ].map((src) => (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    key={src}
                    src={src}
                    alt=""
                    loading="lazy"
                    className="h-7 w-7 rounded-full border-2 border-navy-950 object-cover"
                  />
                ))}
              </div>
              <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                <MessageCircle className="h-3.5 w-3.5 text-brand-300" />
                <span className="text-[11px] font-semibold text-white">
                  12 replies
                </span>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard tone="brand" kicker="HAND-OFF TO YOUR ROOM" icon={Bell}>
            <p className="text-sm leading-relaxed text-white/90">
              When a thread is ready for action, Flyrlink auto-pings the right
              expert - handoffs without the hand-wringing.
            </p>
            <div className="mt-5 rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur-sm">
              <div className="flex items-start gap-2">
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-white">
                  <Bell className="h-3.5 w-3.5 text-brand" />
                </div>
                <div className="flex-1">
                  <p className="text-[11px] font-semibold text-white">
                    New intro · Amit K.
                  </p>
                  <p className="text-[10px] text-white/70">
                    Loved your post - 15 min chat?
                  </p>
                </div>
                <span className="rounded-full bg-white px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-brand">
                  Live
                </span>
              </div>
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}

type CardProps = {
  tone: 'glass' | 'brand';
  kicker: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
};

function FeatureCard({ tone, kicker, icon: Icon, children }: CardProps) {
  const brand = tone === 'brand';
  return (
    <div
      className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 ${
        brand
          ? 'bg-gradient-to-br from-brand via-brand-600 to-navy-900 text-white shadow-xl shadow-brand/30'
          : 'border border-white/10 bg-white/[0.04] text-white shadow-sm hover:border-brand/30 hover:shadow-lg hover:shadow-brand/20'
      }`}
    >
      {brand && (
        <>
          <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-12 -left-8 h-28 w-28 rounded-full bg-brand-300/20 blur-2xl" />
        </>
      )}
      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon
              className={`h-3.5 w-3.5 ${brand ? 'text-white/80' : 'text-brand-300'}`}
            />
            <span
              className={`text-[10px] font-semibold tracking-[0.28em] ${
                brand ? 'text-white/80' : 'text-brand-300'
              }`}
            >
              {kicker}
            </span>
          </div>
          <ArrowUpRight
            className={`h-4 w-4 ${brand ? 'text-white/70' : 'text-gray-500'}`}
          />
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}
