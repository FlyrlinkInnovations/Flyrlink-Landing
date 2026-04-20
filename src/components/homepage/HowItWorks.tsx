'use client';

import { useState } from 'react';
import {
  ArrowRight,
  Banknote,
  CalendarDays,
  Check,
  CreditCard,
  Eye,
  FileText,
  Search,
  Sparkles,
  Star,
  TrendingUp,
  User,
  UserPlus,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type Step = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  tag: string;
};

const clientSteps: Step[] = [
  { icon: UserPlus,   title: 'Sign Up',            description: 'Create your free account in seconds.',           tag: 'ONBOARD' },
  { icon: FileText,   title: 'Describe Your Need', description: 'Tell us in plain language - AI handles context.', tag: 'BRIEF' },
  { icon: Search,     title: 'Get Matched',        description: 'Best-fit experts for skills, budget & timing.',  tag: 'MATCH' },
  { icon: CreditCard, title: 'Book & Pay',         description: 'Secure checkout and instant session access.',    tag: 'BOOK' },
  { icon: Star,       title: 'Rate & Review',      description: 'Share feedback. Help the community thrive.',     tag: 'REVIEW' },
];

const expertSteps: Step[] = [
  { icon: User,         title: 'Create Profile',   description: 'Showcase skills, credentials and pricing.',  tag: 'PROFILE' },
  { icon: CalendarDays, title: 'Set Availability', description: 'Pick your schedule and session types.',      tag: 'CALENDAR' },
  { icon: Eye,          title: 'Get Discovered',   description: 'AI surfaces you to aligned clients.',        tag: 'REACH' },
  { icon: Banknote,     title: 'Deliver & Earn',   description: 'Run sessions, get paid on time, securely.',  tag: 'EARN' },
  { icon: TrendingUp,   title: 'Grow Your Brand',  description: 'Reviews, ratings and content compound.',     tag: 'GROW' },
];

const cardPositions = [
  { left: '0%',  rotate: '-8deg', z: 10 },
  { left: '8%',  rotate: '-5deg', z: 20 },
  { left: '16%', rotate: '-3deg', z: 30 },
  { left: '24%', rotate: '-1deg', z: 40 },
  { left: '32%', rotate: '1deg',  z: 50 },
];

const cardTints = [
  { bg: 'bg-white',       text: 'text-brand-700', border: 'border-brand-100' },
  { bg: 'bg-brand-50',    text: 'text-brand-700', border: 'border-brand-100' },
  { bg: 'bg-brand-100',   text: 'text-brand-800', border: 'border-brand-200' },
  { bg: 'bg-brand-400',   text: 'text-white',     border: 'border-brand-300' },
  { bg: 'bg-brand-600',   text: 'text-white',     border: 'border-brand-500' },
];

export default function HowItWorks() {
  const { ref, isVisible } = useScrollReveal();
  const [activeTab, setActiveTab] = useState<'clients' | 'experts'>('clients');
  const [activeStep, setActiveStep] = useState(0);

  const steps = activeTab === 'clients' ? clientSteps : expertSteps;

  const handleTabChange = (tab: 'clients' | 'experts') => {
    setActiveTab(tab);
    setActiveStep(0);
  };

  return (
    <section id="how-it-works" className="py-28 bg-white">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 reveal ${isVisible ? 'revealed' : ''}`}
      >
        {/* Header */}
        <div className="mb-12 text-center md:mb-14">
          <div className="mb-3 text-[11px] font-semibold tracking-[0.28em] text-gray-400">
            THE FLYRLINK FLOW
          </div>
          <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-navy-900 md:text-5xl lg:text-6xl">
            Five steps.{' '}
            <span className="font-serif italic font-medium text-brand">
              Done differently.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-gray-600 md:text-lg">
            Whether you&apos;re seeking guidance or sharing your expertise,
            getting started is simple - and the flow flexes for both sides.
          </p>
        </div>

        {/* Tab toggle */}
        <div className="mb-12 flex justify-center">
          <div className="inline-flex rounded-full bg-gray-100 p-1">
            <button
              onClick={() => handleTabChange('clients')}
              className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === 'clients'
                  ? 'bg-brand text-white shadow-md shadow-brand/20'
                  : 'text-gray-600 hover:text-navy-900'
              }`}
            >
              For Clients
            </button>
            <button
              onClick={() => handleTabChange('experts')}
              className={`px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === 'experts'
                  ? 'bg-brand text-white shadow-md shadow-brand/20'
                  : 'text-gray-600 hover:text-navy-900'
              }`}
            >
              For Experts
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: numbered step list */}
          <div>
            <div className="space-y-2">
              {steps.map((step, i) => {
                const Icon = step.icon;
                const isActive = i === activeStep;
                return (
                  <button
                    key={`${activeTab}-${i}`}
                    onClick={() => setActiveStep(i)}
                    className={`group flex w-full items-start gap-4 rounded-xl border p-4 text-left transition-all duration-300 ${
                      isActive
                        ? 'border-brand/30 bg-brand/5 shadow-sm'
                        : 'border-transparent hover:bg-gray-50'
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border text-sm font-bold transition-colors ${
                        isActive
                          ? 'border-brand bg-brand text-white'
                          : 'border-gray-200 bg-white text-gray-500 group-hover:border-brand/30 group-hover:text-brand'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1 pt-0.5">
                      <div className="flex items-center gap-2">
                        <Icon
                          className={`h-3.5 w-3.5 ${
                            isActive ? 'text-brand' : 'text-gray-400'
                          }`}
                        />
                        <span
                          className={`text-[10px] font-semibold tracking-[0.24em] ${
                            isActive ? 'text-brand' : 'text-gray-400'
                          }`}
                        >
                          {step.tag}
                        </span>
                      </div>
                      <h3 className="mt-1 text-base font-bold text-navy-900 md:text-lg">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            <a
              href="https://app.flyrlink.com/"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-navy-900/20 transition-all duration-300 hover:bg-navy-800 hover:shadow-brand/20"
            >
              {activeTab === 'clients' ? 'Start your journey' : 'Join as expert'}
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-navy-900 transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="h-3 w-3" />
              </span>
            </a>
          </div>

          {/* Right: stack deck */}
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 rounded-[3rem] bg-gradient-to-br from-brand-200/40 via-brand-100/30 to-transparent blur-3xl" />

            <div
              key={activeTab}
              className="relative mx-auto h-[460px] w-full max-w-xl animate-fade-in"
            >
              {steps.map((step, i) => {
                const Icon = step.icon;
                const pos = cardPositions[i];
                const tint = cardTints[i];
                const isActive = i === activeStep;
                return (
                  <button
                    key={`${activeTab}-card-${i}`}
                    onClick={() => setActiveStep(i)}
                    className={`absolute top-4 bottom-4 flex w-[48%] flex-col rounded-3xl border ${tint.border} ${tint.bg} p-5 shadow-xl shadow-brand-900/10 transition-all duration-500 ${
                      isActive ? 'ring-2 ring-brand/50 ring-offset-2' : ''
                    }`}
                    style={{
                      left: pos.left,
                      transform: `rotate(${pos.rotate}) ${
                        isActive ? 'translateY(-8px) scale(1.02)' : ''
                      }`,
                      zIndex: isActive ? 55 : pos.z,
                    }}
                    aria-label={step.title}
                  >
                    <div className={`flex items-center gap-2 ${tint.text}`}>
                      <Icon className="h-4 w-4" />
                      <span className="text-[10px] font-semibold tracking-[0.22em] opacity-80">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Middle visual */}
                    <div className="flex flex-1 items-center justify-center py-3">
                      <StepVisual
                        index={i}
                        dark={tint.text === 'text-white'}
                      />
                    </div>

                    <div
                      className={`text-[10px] font-semibold tracking-[0.22em] ${tint.text} opacity-90`}
                    >
                      {step.tag}
                    </div>
                  </button>
                );
              })}

              {/* Front featured card */}
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
                  <div className="text-[10px] font-semibold tracking-[0.28em] opacity-75">
                    {activeTab === 'clients' ? 'FOR CLIENTS' : 'FOR EXPERTS'}
                  </div>
                  <div className="mt-2 font-serif italic font-medium leading-none text-5xl md:text-6xl">
                    Flyrlink
                  </div>
                  <div className="mt-3 text-xs leading-relaxed opacity-80">
                    {activeTab === 'clients'
                      ? 'From need to outcome. Verified experts, matched by AI - bookable in minutes.'
                      : 'Grow your practice. Get discovered, paid on time, and backed by a trust system that works.'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepVisual({ index, dark }: { index: number; dark: boolean }) {
  const dot = dark ? 'bg-white/60' : 'bg-brand/60';
  const soft = dark ? 'bg-white/30' : 'bg-brand/25';
  const faint = dark ? 'bg-white/15' : 'bg-brand/15';
  const ring = dark ? 'border-white/40' : 'border-brand/40';
  const fill = dark ? 'bg-white/20 text-white' : 'bg-brand/15 text-brand';
  const accent = dark ? 'bg-white text-brand' : 'bg-brand text-white';

  switch (index) {
    case 0:
      // Sign Up / Create Profile - avatar circle with check
      return (
        <div className="relative">
          <div className={`flex h-12 w-12 items-center justify-center rounded-full ${fill}`}>
            <User className="h-5 w-5" />
          </div>
          <span
            className={`absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full ${accent} shadow-sm`}
          >
            <Check className="h-3 w-3" />
          </span>
        </div>
      );
    case 1:
      // Describe Need / Set Availability - shimmer bars
      return (
        <div className="flex w-full flex-col gap-1.5 px-1">
          <div className={`h-1.5 w-[92%] rounded-full ${soft}`} />
          <div className={`h-1.5 w-[72%] rounded-full ${dot}`} />
          <div className={`h-1.5 w-[55%] rounded-full ${faint}`} />
          <div className={`h-1.5 w-[80%] rounded-full ${faint}`} />
        </div>
      );
    case 2:
      // Get Matched / Get Discovered - avatar stack + pulse
      return (
        <div className="flex flex-col items-center gap-2">
          <div className="flex -space-x-2">
            {[0, 1, 2].map((k) => (
              <div
                key={k}
                className={`h-7 w-7 rounded-full border-2 ${ring} ${soft}`}
              />
            ))}
          </div>
          <div className="flex items-center gap-1">
            <span className={`h-1.5 w-1.5 rounded-full ${dot} animate-pulse`} />
            <span className={`h-1 w-1 rounded-full ${faint}`} />
            <span className={`h-1 w-1 rounded-full ${faint}`} />
          </div>
        </div>
      );
    case 3:
      // Book & Pay / Deliver & Earn - bar chart
      return (
        <div className="flex h-12 items-end gap-1">
          {[35, 55, 45, 75, 62, 90].map((h, k) => (
            <div
              key={k}
              className={`w-1.5 rounded-sm ${k === 5 ? dot : soft}`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      );
    case 4:
      // Rate & Review / Grow - stars
      return (
        <div className="flex items-center gap-1">
          {[0, 1, 2, 3, 4].map((k) => (
            <Star
              key={k}
              className={`h-4 w-4 ${
                dark ? 'fill-white/90 text-white/90' : 'fill-brand/70 text-brand/70'
              }`}
            />
          ))}
        </div>
      );
    default:
      return null;
  }
}
