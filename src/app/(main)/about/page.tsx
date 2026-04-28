import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Globe,
  Lightbulb,
  Shield,
  Sparkles,
  Star,
  Users as UsersIcon,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Flyrlink',
  description:
    "Flyrlink's mission is to make booking the right expert as easy as ordering a cab. From yoga trainers to tax consultants, find verified pros in minutes.",
  keywords:
    'about flyrlink, expert marketplace, find an expert, book a coach, hire a tutor, company mission, verified experts',
};

const teamMembers = [
  {
    name: 'Rajesh Poojari',
    role: 'FOUNDER & CEO',
    bio: 'Former business consultant with a passion for democratizing expert access.',
    initial: 'R',
    accent: 'from-brand to-brand-700',
  },
  {
    name: 'Supriya Pudhari',
    role: 'CO-FOUNDER',
    bio: 'Ex-Google product manager focused on user experience and platform growth.',
    initial: 'S',
    accent: 'from-brand-500 to-navy-800',
  },
  {
    name: 'Rahul Poojari',
    role: 'COO',
    bio: 'Tech veteran who believes technology should simplify, not complicate.',
    initial: 'R',
    accent: 'from-navy-700 to-brand',
  },
];

const values = [
  {
    title: 'Trust & Verification',
    description:
      'Every expert is ID-verified, background-checked, and rated by real clients before they meet you.',
    icon: Shield,
    tag: 'VALUE 01',
  },
  {
    title: 'Accessibility',
    description:
      'Finding the right expert shouldn\'t depend on who you know. We make it affordable, reachable, and fast.',
    icon: Globe,
    tag: 'VALUE 02',
  },
  {
    title: 'Honest pricing',
    description:
      'No subscriptions. No hidden fees. You pay only for the session you book, and you see the price upfront.',
    icon: UsersIcon,
    tag: 'VALUE 03',
  },
  {
    title: 'Real ratings, real pros',
    description:
      'Reviews come from clients who actually booked. No bots, no buying ratings, no gig-economy roulette.',
    icon: Lightbulb,
    tag: 'VALUE 04',
  },
];

const stats = [
  { value: '500+', label: 'VERIFIED EXPERTS' },
  { value: '12+', label: 'CATEGORIES' },
  { value: '10k+', label: 'SESSIONS RUN' },
  { value: '4.9', label: 'AVG RATING' },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* --- HERO --- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-white py-20 md:py-28">
        {/* Ghost watermark */}
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 select-none font-serif italic font-medium leading-none text-brand/[0.05]"
          style={{ fontSize: 'clamp(140px, 20vw, 280px)' }}
        >
          about
        </span>

        <div className="relative mx-auto max-w-6xl px-6">
          {/* Meta bar */}
          <div className="mb-10 flex items-center justify-between text-[10px] font-semibold tracking-[0.28em] text-gray-400">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
                FOUNDED 2025
              </span>
            </div>
            <span>BANGALORE · INDIA</span>
          </div>

          <div className="grid items-end gap-8 md:grid-cols-[1.4fr_1fr] md:gap-14">
            <div>
              <div className="mb-4 text-[11px] font-semibold tracking-[0.28em] text-gray-400">
                ABOUT FLYRLINK
              </div>
              <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-navy-900 md:text-6xl lg:text-7xl">
                Expertise,{' '}
                <span className="font-serif italic font-medium text-brand">
                  made accessible.
                </span>
              </h1>
            </div>
            <div>
              <p className="text-base leading-relaxed text-gray-600 md:text-lg">
                We&apos;re on a mission to make booking the right expert as
                easy as ordering a cab. From yoga trainers to tax consultants,
                anyone, anywhere, in minutes.
              </p>
              <div className="mt-5 flex items-center gap-2 text-sm">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="font-semibold text-navy-900">4.9</span>
                <span className="text-[10px] tracking-[0.22em] text-gray-400">
                  · 500+ REVIEWS
                </span>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-16 grid gap-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:grid-cols-4 md:gap-0 md:p-8">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`px-2 md:px-6 ${
                  i > 0 ? 'md:border-l md:border-gray-100' : ''
                }`}
              >
                <div className="font-serif text-3xl italic font-medium text-brand md:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-[10px] font-semibold tracking-[0.24em] text-gray-400">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- STORY --- */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
            <div>
              <div className="mb-3 text-[11px] font-semibold tracking-[0.28em] text-gray-400">
                OUR STORY
              </div>
              <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-navy-900 md:text-4xl lg:text-5xl">
                Get to know{' '}
                <span className="font-serif italic font-medium text-brand">
                  us.
                </span>
              </h2>

              {/* Pull quote */}
              <blockquote className="relative mt-8 border-l-2 border-brand pl-5">
                <span className="absolute -left-1.5 -top-6 font-serif text-5xl leading-none text-brand/20">
                  &ldquo;
                </span>
                <p className="font-serif text-xl italic font-medium leading-snug text-navy-900 md:text-2xl">
                  Every connection should{' '}
                  <span className="text-brand">count.</span>
                </p>
                <footer className="mt-3 text-[10px] font-semibold tracking-[0.22em] text-gray-400">
                  - THE FLYRLINK TEAM
                </footer>
              </blockquote>
            </div>

            <div className="space-y-5 text-base leading-relaxed text-gray-600 md:text-lg">
              <p>
                Flyrlink was built to bridge the gap between professionals and
                users - a seamless platform for service bookings, expert content
                sharing, and trusted connections. We empower individuals and
                small businesses to showcase skills, host events, and
                collaborate, while giving users a reliable space to find
                services and engage with professionals across diverse fields.
              </p>
              <p>
                Flyrlink goes beyond connecting - it builds a vibrant community
                where growth, learning and collaboration thrive. From business
                consultations to creative services, educational sessions to
                professional coaching, Flyrlink brings everything under one
                trusted platform. Every interaction is intuitive, trustworthy,
                and rewarding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- VALUES (bento) --- */}
      <section className="relative overflow-hidden bg-gray-50 py-20 md:py-28">
        <div className="pointer-events-none absolute -right-20 top-20 h-[400px] w-[400px] rounded-full bg-brand/5 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center md:mb-14">
            <div className="mb-3 text-[11px] font-semibold tracking-[0.28em] text-gray-400">
              WHAT WE STAND FOR
            </div>
            <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-navy-900 md:text-4xl lg:text-5xl">
              Four values.{' '}
              <span className="font-serif italic font-medium text-brand">
                Not up for debate.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              const wide = i === 0 || i === 3;
              return (
                <div
                  key={v.title}
                  className={`group relative overflow-hidden rounded-2xl border border-gray-200/70 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/10 md:p-7 ${
                    wide ? 'md:col-span-7' : 'md:col-span-5'
                  }`}
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-navy-900 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-white">
                        {v.tag}
                      </span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-xl font-bold text-navy-900 md:text-2xl">
                      {v.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-gray-600 md:text-base">
                      {v.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- TEAM --- */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 flex items-end justify-between gap-4 md:mb-14">
            <div>
              <div className="mb-3 text-[11px] font-semibold tracking-[0.28em] text-gray-400">
                THE FOUNDERS
              </div>
              <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-navy-900 md:text-4xl lg:text-5xl">
                Meet the{' '}
                <span className="font-serif italic font-medium text-brand">
                  team.
                </span>
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {teamMembers.map((m, i) => (
              <div
                key={m.name}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/10"
              >
                <div className="absolute right-5 top-5 font-serif text-6xl italic font-medium leading-none text-gray-100 select-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="relative">
                  <div
                    className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${m.accent} text-3xl font-bold text-white shadow-lg`}
                  >
                    {m.initial}
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-navy-900">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-[10px] font-semibold tracking-[0.22em] text-brand">
                    {m.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {m.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MISSION / VISION --- */}
      <section className="relative overflow-hidden bg-gray-50 py-20 md:py-28">
        <div className="pointer-events-none absolute -left-20 top-20 h-[400px] w-[400px] rounded-full bg-brand/5 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-[320px] w-[320px] rounded-full bg-brand/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center md:mb-14">
            <div className="mb-3 text-[11px] font-semibold tracking-[0.28em] text-gray-400">
              WHY WE BUILD
            </div>
            <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-navy-900 md:text-4xl lg:text-5xl">
              Mission and{' '}
              <span className="font-serif italic font-medium text-brand">
                vision.
              </span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <StatementCard
              kicker="MISSION"
              accent="mission."
              body="Simplify connections between professionals and users by combining service bookings, content sharing, and event hosting on one platform. Empower individuals and businesses - every interaction seamless, trusted, and rewarding."
            />
            <StatementCard
              kicker="VISION"
              accent="vision."
              dark
              body="A world where finding and connecting with trusted professionals is effortless - empowering people and businesses to thrive. A seamless platform that fosters collaboration, builds trust, and transforms how services are accessed."
            />
          </div>
        </div>
      </section>

      {/* --- BOTTOM CTA --- */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-navy-950 p-10 md:p-16">
            <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-30" />
            <div className="pointer-events-none absolute -top-20 right-0 h-[320px] w-[320px] rounded-full bg-brand/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 left-0 h-[320px] w-[320px] rounded-full bg-brand/10 blur-3xl" />

            <div className="relative grid items-center gap-8 md:grid-cols-[1.3fr_1fr]">
              <div>
                <div className="mb-3 text-[11px] font-semibold tracking-[0.28em] text-brand-300">
                  JOIN US
                </div>
                <h3 className="font-display text-3xl font-bold leading-[1.05] text-white md:text-4xl lg:text-5xl">
                  Build what&apos;s next with{' '}
                  <span className="font-serif italic font-medium text-brand-300">
                    Flyrlink.
                  </span>
                </h3>
                <p className="mt-5 max-w-lg text-gray-400">
                  Want to join the team, partner with us, or shape the future of
                  expert discovery? We&apos;d love to hear from you.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
                <Link
                  href="/careers"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-950 shadow-xl transition-all duration-300 hover:bg-gray-100 hover:shadow-brand/30"
                >
                  See open roles
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-navy-950 text-white transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-1.5 px-5 py-3 text-sm font-semibold text-white/90 hover:text-white"
                >
                  Get in touch
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatementCard({
  kicker,
  accent,
  body,
  dark,
}: {
  kicker: string;
  accent: string;
  body: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl p-8 md:p-10 ${
        dark
          ? 'bg-navy-900 text-white shadow-2xl shadow-navy-900/30'
          : 'bg-white border border-gray-200/70 shadow-sm'
      }`}
    >
      {dark && (
        <>
          <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand/20 blur-3xl" />
        </>
      )}

      <div className="relative">
        <div className="flex items-center justify-between">
          <span
            className={`text-[11px] font-semibold tracking-[0.28em] ${
              dark ? 'text-brand-300' : 'text-brand'
            }`}
          >
            {kicker}
          </span>
          <Sparkles
            className={`h-4 w-4 ${dark ? 'text-brand-300' : 'text-brand'}`}
          />
        </div>

        <h3
          className={`mt-6 font-display text-3xl font-bold leading-[1.1] md:text-4xl ${
            dark ? 'text-white' : 'text-navy-900'
          }`}
        >
          Our{' '}
          <span
            className={`font-serif italic font-medium ${
              dark ? 'text-brand-300' : 'text-brand'
            }`}
          >
            {accent}
          </span>
        </h3>

        <p
          className={`mt-5 text-base leading-relaxed md:text-lg ${
            dark ? 'text-white/80' : 'text-gray-600'
          }`}
        >
          {body}
        </p>
      </div>
    </div>
  );
}
