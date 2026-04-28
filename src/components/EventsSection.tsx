'use client';

import { useEffect, useState, Fragment } from 'react';
import Image from 'next/image';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  MapPin,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type Stat = { value: string; label: string };

type EventItem = {
  title: string;
  host: string;
  hostRole: string;
  watermark: string;
  tagline: string;
  accent: string;
  image: string;
  stats: Stat[];
  type: string;
  date: string;
  location: string;
};

const events: EventItem[] = [
  {
    title: 'Wellness & Fitness',
    host: 'Dr. Kavya Narayan',
    hostRole: 'SPORTS NUTRITIONIST · 15+ YEARS',
    watermark: 'well',
    tagline: 'A live workshop for people tired of diet fads, ',
    accent: 'habits that actually stick.',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    stats: [
      { value: '15+', label: 'YRS EXP' },
      { value: '500+', label: 'CLIENTS' },
      { value: '4.9', label: 'RATING' },
    ],
    type: 'Online',
    date: 'Mar 15, 2026',
    location: 'Chennai, India',
  },
  {
    title: 'Study Abroad Q&A',
    host: 'Aarav Kapoor',
    hostRole: 'STUDY ABROAD CONSULTANT · 12+ YEARS',
    watermark: 'study',
    tagline: 'A live Q&A for students applying overseas, ',
    accent: 'pick a country, plan your offer.',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    stats: [
      { value: '12+', label: 'YRS EXP' },
      { value: '800+', label: 'STUDENTS' },
      { value: '94', label: 'JOINING' },
    ],
    type: 'Virtual',
    date: 'Mar 18, 2026',
    location: 'Online',
  },
  {
    title: 'Photography Bootcamp',
    host: 'Maya Chen',
    hostRole: 'PRODUCT PHOTOGRAPHER · 10+ YEARS',
    watermark: 'photo',
    tagline: 'A hands-on workshop for hobbyists ready to ',
    accent: 'shoot like a pro.',
    image: 'https://randomuser.me/api/portraits/women/33.jpg',
    stats: [
      { value: '10+', label: 'YRS EXP' },
      { value: '300+', label: 'STUDENTS' },
      { value: '46', label: 'JOINING' },
    ],
    type: 'Hybrid',
    date: 'Mar 20, 2026',
    location: 'Bangalore, India',
  },
];

export default function EventsSection() {
  const { ref, isVisible } = useScrollReveal();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const len = events.length;

  const next = () => setActive((a) => (a + 1) % len);
  const prev = () => setActive((a) => (a - 1 + len) % len);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % len), 6000);
    return () => clearInterval(id);
  }, [paused, len]);

  const event = events[active];
  const volume = String(active + 1).padStart(2, '0');
  const total = String(len).padStart(2, '0');

  return (
    <section
      id="events"
      className="relative overflow-hidden bg-white py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 reveal ${isVisible ? 'revealed' : ''}`}
      >
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <div className="mb-3 text-[11px] font-semibold tracking-[0.28em] text-gray-400">
            EVENTS YOU WON&apos;T WANT TO MISS
          </div>
          <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-navy-900 md:text-5xl lg:text-6xl">
            Workshops, meetups,
            <span className="mt-1 block font-serif italic font-medium text-brand">
              never dull.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-gray-600 md:text-lg">
            Live workshops, classes and Q&amp;As with verified experts, from
            wellness to photography, all in one place.
          </p>
        </div>

        {/* Stage */}
        <div className="relative">
          {/* Ghost watermark */}
          <span
            aria-hidden
            key={`wm-${active}`}
            className="pointer-events-none absolute -top-6 right-0 select-none font-serif italic font-medium leading-none text-brand-50 animate-fade-in"
            style={{ fontSize: 'clamp(96px, 14vw, 180px)' }}
          >
            {event.watermark}
          </span>

          <div className="relative grid items-center gap-10 md:grid-cols-2 md:gap-14">
            {/* Left: portrait */}
            <div className="relative flex items-center justify-center md:justify-start">
              <div
                className="absolute left-0 top-1/2 hidden -translate-y-1/2 md:block"
                style={{ writingMode: 'vertical-rl' }}
              >
                <div className="rotate-180 text-[10px] font-semibold tracking-[0.4em] text-gray-400">
                  VOL {volume} · FLYRLINK 2026
                </div>
              </div>

              <div
                key={`photo-${active}`}
                className="relative ml-6 w-full max-w-sm animate-fade-in md:ml-10"
              >
                <div className="absolute -bottom-3 -right-3 top-8 left-10 rounded-[1.5rem] bg-brand shadow-xl shadow-brand/30" />
                <div className="relative overflow-hidden rounded-[1.5rem] border border-gray-100 bg-white shadow-2xl">
                  <Image
                    src={event.image}
                    alt={event.host}
                    width={400}
                    height={500}
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
              </div>

              <div className="absolute -bottom-8 left-16 hidden gap-2 text-[10px] font-semibold tracking-[0.28em] text-gray-400 md:flex">
                HOST
                <span className="text-brand-400">·</span>
                EXPERT
                <span className="text-brand-400">·</span>
                FLYRLINK
              </div>
            </div>

            {/* Right: content */}
            <div key={`content-${active}`} className="relative animate-fade-in">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-0.5 w-10 rounded-full bg-gradient-to-r from-brand via-brand-300 to-transparent" />
                <span className="text-[10px] font-semibold tracking-[0.28em] text-brand-700">
                  UPCOMING · {event.type.toUpperCase()}
                </span>
              </div>

              <p className="text-xl font-medium leading-snug text-navy-900 md:text-2xl">
                <span className="mr-1 font-serif text-3xl leading-none text-brand/20">
                  &ldquo;
                </span>
                {event.tagline}
                <span className="font-serif italic font-medium text-brand">
                  {event.accent}
                </span>
              </p>

              <div className="mt-7">
                <h3 className="font-display text-3xl font-bold text-navy-900 md:text-4xl">
                  {event.host}
                </h3>
                <p className="mt-1 text-xs font-semibold tracking-[0.22em] text-gray-400">
                  {event.hostRole}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-brand" />
                  {event.date}
                </span>
                <span className="text-gray-300">·</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-brand" />
                  {event.location}
                </span>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-gray-100 py-4">
                {event.stats.map((s, i) => (
                  <Fragment key={s.label}>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold text-navy-900 md:text-2xl">
                        {s.value}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-400">
                        {s.label}
                      </span>
                    </div>
                    {i < event.stats.length - 1 && (
                      <span className="h-5 w-px bg-gray-200" />
                    )}
                  </Fragment>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-6">
                <a
                  href="https://app.flyrlink.com/"
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 underline-offset-4 hover:underline"
                >
                  Visit event
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="https://app.flyrlink.com/"
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand decoration-brand/40 decoration-2 underline-offset-4 hover:underline"
                >
                  Reserve your spot
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Nav row */}
          <div className="relative mt-16 flex items-center justify-between border-t border-gray-100 pt-6">
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-3xl italic font-medium text-navy-900">
                {volume}
              </span>
              <span className="text-sm text-gray-300">/</span>
              <span className="font-serif text-lg italic text-gray-400">
                {total}
              </span>
            </div>

            <div className="hidden items-center gap-1.5 md:flex">
              {events.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to event ${i + 1}`}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    i === active ? 'w-8 bg-brand' : 'w-4 bg-brand-200 hover:bg-brand-400'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                aria-label="Previous"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-200 bg-white text-navy-900 shadow-sm transition-all duration-300 hover:border-brand-400 hover:bg-brand-50 hover:text-brand"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-200 bg-white text-navy-900 shadow-sm transition-all duration-300 hover:border-brand-400 hover:bg-brand-50 hover:text-brand"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Host CTA */}
        <div className="relative mt-24 overflow-hidden rounded-[2rem] border border-gray-100 bg-gradient-to-br from-white via-brand-50/50 to-white p-10 md:p-14">
          <div className="pointer-events-none absolute -top-20 right-0 h-[280px] w-[280px] rounded-full bg-brand-200/40 blur-3xl" />
          <div className="relative grid items-center gap-6 md:grid-cols-[1.3fr_1fr]">
            <div>
              <div className="mb-3 text-[11px] font-semibold tracking-[0.28em] text-gray-400">
                HOST WITH FLYRLINK
              </div>
              <h3 className="font-display text-3xl font-bold text-navy-900 md:text-4xl">
                Want to host an{' '}
                <span className="font-serif italic font-medium text-brand">
                  event?
                </span>
              </h3>
              <p className="mt-3 max-w-lg text-gray-600">
                Share your skill. Run workshops, classes or Q&amp;A sessions,
                and reach the people who actually want to learn from you.
              </p>
            </div>
            <div className="flex md:justify-end">
              <a
                href="https://app.flyrlink.com/"
                className="group inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-navy-900/20 transition-all duration-300 hover:bg-navy-800 hover:shadow-brand/20"
              >
                Create an event
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-navy-900 transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="h-3 w-3" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
