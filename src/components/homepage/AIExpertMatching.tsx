'use client';

import {
  ArrowRight,
  Check,
  Sparkles,
  Brain,
  CalendarDays,
  MessagesSquare,
  Bot,
  Send,
  Zap,
  Target,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type StackCard = {
  key: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  bg: string;
  text: string;
  border: string;
  left: string;
  rotate: string;
  z: number;
};

const backCards: StackCard[] = [
  {
    key: 'match',
    label: 'MATCH',
    icon: Brain,
    bg: 'bg-white',
    text: 'text-brand-700',
    border: 'border-brand-100',
    left: '0%',
    rotate: '-8deg',
    z: 10,
  },
  {
    key: 'chat',
    label: 'CHAT',
    icon: MessagesSquare,
    bg: 'bg-brand-50',
    text: 'text-brand-700',
    border: 'border-brand-100',
    left: '8%',
    rotate: '-5deg',
    z: 20,
  },
  {
    key: 'calendar',
    label: 'CALENDAR',
    icon: CalendarDays,
    bg: 'bg-brand-100',
    text: 'text-brand-800',
    border: 'border-brand-200',
    left: '16%',
    rotate: '-3deg',
    z: 30,
  },
  {
    key: 'ai',
    label: 'AI ASSIST',
    icon: Bot,
    bg: 'bg-brand-400',
    text: 'text-white',
    border: 'border-brand-300',
    left: '24%',
    rotate: '-1deg',
    z: 40,
  },
  {
    key: 'publish',
    label: 'CONNECT',
    icon: Send,
    bg: 'bg-brand-600',
    text: 'text-white',
    border: 'border-brand-500',
    left: '32%',
    rotate: '1deg',
    z: 50,
  },
];

const aiFeatures = [
  {
    title: 'Smart Matching',
    description:
      'AI analyses your goals and context so the first intro feels tailor-made.',
    icon: Brain,
  },
  {
    title: 'Instant Connect',
    description:
      'Real-time availability and scheduling - go from need to call in minutes.',
    icon: Zap,
  },
  {
    title: 'Personalised Outcomes',
    description:
      'Continuous learning adapts to your preferences, pace, and success patterns.',
    icon: Target,
  },
];

export default function AIExpertMatching() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative overflow-hidden bg-gray-50 bg-dot-pattern-light py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 reveal ${isVisible ? 'revealed' : ''}`}
      >
        {/* Stack hero */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left copy */}
          <div>
            <div className="mb-6 text-[11px] font-semibold tracking-[0.28em] text-gray-400">
              THE FLYRLINK STACK
            </div>
            <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-navy-900 md:text-5xl lg:text-6xl">
              Your expert
              <span className="mt-1 block font-serif italic font-medium text-brand">
                journey.
              </span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-gray-700">
              Match, chat, calendar, AI assist and live collaboration - all
              stacked into a single surface that takes you from need to outcome.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                'Get matched in seconds, not weeks.',
                'Chat, book, and meet verified pros instantly.',
                'Schedule across timezones without the back-and-forth.',
                'See what actually moved your needle.',
              ].map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-3 text-sm text-gray-700 md:text-base"
                >
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-brand-200 bg-brand-50">
                    <Check className="h-3 w-3 text-brand" />
                  </span>
                  {line}
                </li>
              ))}
            </ul>

            <a
              href="https://app.flyrlink.com/"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-navy-900/20 transition-all duration-300 hover:bg-navy-800 hover:shadow-brand/20"
            >
              Explore the stack
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-navy-900 transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="h-3 w-3" />
              </span>
            </a>
          </div>

          {/* Right - card stack */}
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 rounded-[3rem] bg-gradient-to-br from-brand-200/40 via-brand-100/30 to-transparent blur-3xl" />

            <div className="relative mx-auto h-[460px] w-full max-w-xl">
              {backCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.key}
                    className={`absolute top-4 bottom-4 flex w-[48%] flex-col rounded-3xl border ${card.border} ${card.bg} p-5 shadow-xl shadow-brand-900/10`}
                    style={{
                      left: card.left,
                      transform: `rotate(${card.rotate})`,
                      zIndex: card.z,
                    }}
                  >
                    <Icon className={`h-4 w-4 ${card.text}`} />
                    <div
                      className={`mt-auto text-[10px] font-semibold tracking-[0.22em] ${card.text} opacity-90`}
                    >
                      {card.label}
                    </div>
                  </div>
                );
              })}

              {/* Featured front card */}
              <div
                className="absolute -right-2 top-0 bottom-0 flex w-[58%] flex-col justify-between overflow-hidden rounded-3xl border border-white/30 bg-gradient-to-br from-brand via-brand-600 to-navy-900 p-7 text-white shadow-2xl shadow-brand/30"
                style={{ transform: 'rotate(3deg)', zIndex: 60 }}
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
                <div className="pointer-events-none absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-brand-300/20 blur-2xl" />

                <div className="relative flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15 backdrop-blur-sm">
                    <Sparkles className="h-4 w-4" />
                  </span>
                  <span className="text-[10px] font-semibold tracking-[0.28em] opacity-80">
                    WORKSPACE
                  </span>
                </div>

                <div className="relative">
                  <div className="font-serif italic font-medium leading-none text-5xl md:text-6xl">
                    Flyrlink
                  </div>
                  <div className="mt-3 text-xs leading-relaxed opacity-80">
                    One surface for match, chat, calendar and AI - so every
                    expert session turns into an outcome.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI feature trio */}
        <div className="mt-24 grid gap-6 md:grid-cols-3 md:gap-8">
          {aiFeatures.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 card-premium hover:border-brand/30"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-50 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-700 text-white shadow-lg shadow-brand/30">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-navy-900">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {f.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
