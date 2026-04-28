'use client';

import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  CheckCircle2,
  CreditCard,
  MessagesSquare,
  ShieldCheck,
  Sparkles,
  Star,
  Video,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const pills = [
  { icon: MessagesSquare, label: 'Free chat first' },
  { icon: CalendarDays,   label: 'Instant booking' },
  { icon: Video,          label: 'Secure in-app video' },
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
          {/* Left: chat mock */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent p-6 shadow-2xl shadow-black/40 md:rounded-[2.5rem] md:p-10">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand/25 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-brand/15 blur-3xl" />

              {/* Phone-like chat card */}
              <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-navy-800 to-navy-950 shadow-2xl">
                {/* Expert header */}
                <div className="flex items-center gap-3 border-b border-white/10 p-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://randomuser.me/api/portraits/women/55.jpg"
                    alt=""
                    loading="lazy"
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-bold text-white">Dr. Sarah Iyer</p>
                    <p className="text-xs text-gray-500 inline-flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                      Physio · Online now
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full border border-brand/30 bg-brand/15 px-2 py-0.5 text-[10px] font-semibold text-brand-300">
                    <CheckCircle2 className="h-3 w-3" />
                    VERIFIED
                  </span>
                </div>

                {/* Chat bubbles */}
                <div className="space-y-3 px-4 py-4">
                  <div className="flex justify-end">
                    <div className="max-w-[80%] rounded-2xl rounded-br-md bg-brand px-3.5 py-2 text-xs text-white">
                      Hi! Looking for help with chronic back pain. Possible to do remote sessions?
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-2xl rounded-bl-md bg-white/5 border border-white/10 px-3.5 py-2 text-xs text-gray-200">
                      Yes, absolutely. I&apos;ve helped 200+ clients with this. 30-min intro to assess?
                    </div>
                  </div>

                  {/* Booking offer card inside chat */}
                  <div className="flex justify-start">
                    <div className="max-w-[88%] rounded-2xl rounded-bl-md border border-brand/30 bg-gradient-to-br from-brand/15 to-brand/5 p-3 backdrop-blur">
                      <div className="flex items-center gap-2 text-[10px] font-semibold tracking-wider text-brand-300 uppercase">
                        <CalendarDays className="h-3 w-3" />
                        Session offer
                      </div>
                      <p className="mt-1.5 text-sm font-bold text-white">
                        30-min Intro Session
                      </p>
                      <p className="text-[11px] text-gray-300">
                        Tomorrow · 6:00 PM IST
                      </p>
                      <div className="mt-2.5 flex items-center justify-between">
                        <span className="text-base font-bold text-white">
                          ₹499
                        </span>
                        <button className="inline-flex items-center gap-1 rounded-lg bg-white px-3 py-1.5 text-[11px] font-bold text-navy-900 transition-colors hover:bg-gray-100">
                          Book
                          <ArrowRight className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Input bar */}
                <div className="flex items-center gap-2 border-t border-white/10 p-3">
                  <div className="flex-1 rounded-full bg-white/5 border border-white/10 px-3 py-2 text-xs text-gray-500">
                    Reply to Dr. Sarah…
                  </div>
                  <span className="text-[10px] text-gray-500 inline-flex items-center gap-1">
                    <ShieldCheck className="h-3 w-3 text-brand-300" />
                    Secure
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between text-brand-300/80">
                <span className="font-serif text-2xl italic font-medium">
                  Flyrlink
                </span>
                <span className="text-[10px] font-semibold tracking-[0.28em]">
                  CHAT · BOOK · MEET
                </span>
              </div>
            </div>
          </div>

          {/* Right: copy */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1">
              <Sparkles className="h-3.5 w-3.5 text-brand-300" />
              <span className="text-[10px] font-semibold tracking-[0.24em] text-brand-300">
                ALL IN ONE APP
              </span>
            </div>
            <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
              Find. Book.
              <span className="mt-1 block font-serif italic font-medium text-brand-300">
                Done.
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-400 md:text-lg">
              Chat free with any expert. Book a session in minutes. Meet on
              secure in-app video. No WhatsApp chases, no hidden fees, no
              juggling apps.
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
              Find an expert
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-navy-950 text-white transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="h-3 w-3" />
              </span>
            </a>
          </div>
        </div>

        {/* Bottom 3-card row */}
        <div className="mt-16 grid gap-4 md:mt-20 md:grid-cols-3 md:gap-5">
          <FeatureCard tone="glass" kicker="FREE CHAT FIRST" icon={MessagesSquare}>
            <p className="text-sm leading-relaxed text-gray-300">
              Message any expert with your questions. No card needed until you
              actually book.
            </p>
            <div className="mt-5 space-y-2">
              <div className="flex justify-end">
                <span className="rounded-2xl rounded-br-sm bg-brand px-2.5 py-1.5 text-[11px] text-white max-w-[80%]">
                  Quick Q before I book?
                </span>
              </div>
              <div className="flex justify-start">
                <span className="rounded-2xl rounded-bl-sm bg-white/5 border border-white/10 px-2.5 py-1.5 text-[11px] text-gray-200 max-w-[80%]">
                  Of course, ask away ✨
                </span>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard tone="glass" kicker="INSTANT BOOKING" icon={CalendarDays}>
            <p className="text-sm leading-relaxed text-gray-300">
              See live availability and pick a slot. Pay securely. Calendar
              invite hits your inbox in seconds.
            </p>
            <div className="mt-5 grid grid-cols-3 gap-1.5">
              {[
                { day: 'Mon', time: '4 PM', taken: false },
                { day: 'Tue', time: '6 PM', taken: false, hot: true },
                { day: 'Wed', time: '7 PM', taken: true },
              ].map((slot) => (
                <div
                  key={slot.day}
                  className={`rounded-lg border px-2 py-2 text-center ${
                    slot.taken
                      ? 'border-white/5 bg-white/[0.02] opacity-40'
                      : slot.hot
                        ? 'border-brand/40 bg-brand/15'
                        : 'border-white/10 bg-white/5'
                  }`}
                >
                  <p className="text-[9px] font-semibold uppercase text-gray-400">
                    {slot.day}
                  </p>
                  <p className="text-[11px] font-bold text-white">
                    {slot.time}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-1.5 text-[10px] text-gray-400">
              <CreditCard className="h-3 w-3 text-brand-300" />
              UPI · Card · Wallet
            </div>
          </FeatureCard>

          <FeatureCard tone="brand" kicker="MEET ON FLYRLINK" icon={Video}>
            <p className="text-sm leading-relaxed text-white/90">
              Hop on a 1:1 video call right inside the app. Notes, recording,
              and follow-ups all in one place.
            </p>
            <div className="mt-5 rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur-sm">
              <div className="flex items-start gap-2">
                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-white">
                  <Video className="h-3.5 w-3.5 text-brand" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-semibold text-white">
                    Session with Priya · Yoga
                  </p>
                  <p className="text-[10px] text-white/70 inline-flex items-center gap-1">
                    <Star className="h-2.5 w-2.5 fill-white text-white" />
                    Starts in 12 min
                  </p>
                </div>
                <span className="rounded-full bg-white px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-brand">
                  Join
                </span>
              </div>
              <div className="mt-2.5 flex items-center gap-1.5 text-[10px] text-white/80">
                <Check className="h-3 w-3" />
                End-to-end encrypted
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
