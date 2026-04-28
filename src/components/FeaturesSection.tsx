'use client';

import Image from 'next/image';
import {
  ShieldCheck,
  MessagesSquare,
  Star,
  Search,
  CheckCircle2,
  Calendar,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type Item = {
  title: string;
  description: string;
  tags: string[];
  icon: React.ComponentType<{ className?: string }>;
};

const items: Item[] = [
  {
    title: 'Only verified pros, no gig roulette',
    description:
      'Every expert is ID-verified, background-checked, and rated by real clients. You see what they actually delivered, not just what they promised.',
    tags: ['ID verified', 'Real reviews', 'Background checked'],
    icon: ShieldCheck,
  },
  {
    title: 'Smart match, not a search dump',
    description:
      'Skip scrolling through 200 profiles. Tell us what you need, and we surface 3 experts that fit your goals, budget, and timezone in seconds.',
    tags: ['AI-matched', 'Budget-aware', 'Timezone-friendly'],
    icon: Search,
  },
  {
    title: 'Chat, book, meet, all in one app',
    description:
      'Message experts free before you book. Pay only when you confirm. Meet on secure in-app video. No WhatsApp chases, no surprise charges.',
    tags: ['Free chat', 'Secure payments', 'In-app video'],
    icon: MessagesSquare,
  },
];

const featuredExpert = {
  name: 'Priya Sharma',
  role: 'Yoga & Wellness Trainer',
  image: 'https://randomuser.me/api/portraits/women/68.jpg',
  rating: 4.9,
  reviews: 247,
  sessions: 800,
  price: 499,
  reviewSnippets: [
    {
      name: 'Anjali R.',
      text: 'Booked her on a whim. Best decision. Felt heard from minute one.',
    },
    {
      name: 'Rohit K.',
      text: 'Customised plan for my back pain. Three weeks in and I can sleep again.',
    },
  ],
};

export default function FeaturesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative overflow-hidden bg-navy-950 py-28">
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-brand/5 blur-[120px]" />
      <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-brand/10 blur-[120px]" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-7xl px-6 reveal ${isVisible ? 'revealed' : ''}`}
      >
        {/* Header */}
        <div className="mb-12 md:mb-14">
          <div className="mb-4 text-[11px] font-semibold tracking-[0.28em] text-brand-300">
            WHY FLYRLINK
          </div>
          <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
            Three reasons.{' '}
            <span className="font-serif italic font-medium text-white/40">
              Done differently.
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-base text-gray-400 md:text-lg">
            Three things every Flyrlink session has in common, and why
            thousands of clients keep coming back.
          </p>
        </div>

        {/* Panel */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent p-6 md:rounded-[2.5rem] md:p-10">
          <div className="pointer-events-none absolute -right-24 -top-24 h-[380px] w-[380px] rounded-full bg-brand/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-24 h-[320px] w-[320px] rounded-full bg-brand/10 blur-3xl" />

          <div className="relative grid gap-10 md:grid-cols-[1.1fr_1fr] md:gap-14">
            {/* Left: 3 reasons, all open */}
            <div className="space-y-6">
              {items.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-brand/30 hover:bg-white/[0.05]"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-brand/30 bg-brand/15 text-brand-300">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-lg font-bold text-white md:text-xl">
                          {item.title}
                        </h3>
                        <p className="mt-2 max-w-md text-sm leading-relaxed text-gray-400 md:text-base">
                          {item.description}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {item.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand-300"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: real expert profile preview */}
            <div className="relative">
              <div className="relative mx-auto max-w-sm overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-navy-800 to-navy-950 shadow-2xl shadow-black/50">
                {/* Cover */}
                <div className="relative h-24 bg-gradient-to-br from-brand via-brand-600 to-navy-900">
                  <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                  <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/15 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                    Available today
                  </span>
                </div>

                {/* Profile */}
                <div className="px-5 pb-5">
                  <div className="-mt-10 flex items-end gap-4">
                    <div className="relative">
                      <Image
                        src={featuredExpert.image}
                        alt={featuredExpert.name}
                        width={80}
                        height={80}
                        className="h-20 w-20 rounded-2xl object-cover ring-4 ring-navy-900"
                      />
                      <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand ring-2 ring-navy-900">
                        <CheckCircle2 className="h-3.5 w-3.5 text-white" />
                      </span>
                    </div>
                    <div className="pb-1">
                      <h3 className="text-base font-bold text-white">
                        {featuredExpert.name}
                      </h3>
                      <p className="text-xs text-gray-400">
                        {featuredExpert.role}
                      </p>
                    </div>
                  </div>

                  {/* Stats row */}
                  <div className="mt-4 flex items-center gap-3 text-xs">
                    <span className="inline-flex items-center gap-1 text-white">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold">{featuredExpert.rating}</span>
                      <span className="text-gray-400">
                        ({featuredExpert.reviews})
                      </span>
                    </span>
                    <span className="h-3 w-px bg-white/10" />
                    <span className="text-gray-300">
                      <span className="font-bold text-white">
                        {featuredExpert.sessions}+
                      </span>{' '}
                      sessions
                    </span>
                    <span className="h-3 w-px bg-white/10" />
                    <span className="inline-flex items-center gap-1 text-brand-300">
                      <ShieldCheck className="h-3 w-3" />
                      Verified
                    </span>
                  </div>

                  {/* Review snippets */}
                  <div className="mt-5 space-y-2">
                    {featuredExpert.reviewSnippets.map((review) => (
                      <div
                        key={review.name}
                        className="rounded-xl border border-white/5 bg-white/[0.03] p-3"
                      >
                        <p className="text-xs leading-relaxed text-gray-300">
                          &ldquo;{review.text}&rdquo;
                        </p>
                        <p className="mt-1.5 text-[10px] font-semibold text-gray-500">
                          - {review.name}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Price + Book */}
                  <div className="mt-5 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3">
                    <div>
                      <p className="text-[10px] text-gray-400">From</p>
                      <p className="text-lg font-bold text-white leading-none">
                        ₹{featuredExpert.price}
                        <span className="ml-1 text-xs font-medium text-gray-400">
                          /session
                        </span>
                      </p>
                    </div>
                    <button className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-brand-600">
                      <Calendar className="h-3.5 w-3.5" />
                      Book session
                    </button>
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
