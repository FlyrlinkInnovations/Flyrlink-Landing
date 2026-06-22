'use client';

import {
  Briefcase,
  Megaphone,
  MessageSquare,
  Mic,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const audiences: { icon: LucideIcon; label: string }[] = [
  { icon: Mic, label: 'Creators' },
  { icon: Users, label: 'Coaches' },
  { icon: Briefcase, label: 'Freelancers' },
  { icon: MessageSquare, label: 'Communities' },
  { icon: Megaphone, label: 'Agencies' },
];

export default function AffiliateHighlights() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      className="relative overflow-hidden px-6 py-20 lg:px-20"
      style={{
        backgroundImage:
          'linear-gradient(0deg, rgba(10,113,208,0.6), rgba(10,113,208,0.6)), url(/Marketing%20content/Group/architect-cafe-casual-brainstorming-meeting-concep-2026-01-07-23-27-47-utc.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        ref={ref}
        className={`relative mx-auto flex max-w-[1280px] flex-col items-center gap-3 px-6 text-center reveal ${
          isVisible ? 'revealed' : ''
        }`}
      >
        <div className="text-[11px] font-semibold tracking-[0.28em] text-white/70">
          AFFILIATE PROGRAM
        </div>
        <h2 className="font-heading text-4xl leading-[1.05] tracking-[-1.5px] text-white sm:text-5xl lg:text-6xl">
          <span className="font-bold">Bring your audience.</span>{' '}
          <span className="font-normal">Earn for a year.</span>
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-base text-white/90 lg:text-lg">
          Five steps to start earning: share your link, refer clients, collect
          commission. No cap, no chasing.
        </p>

        {/* Audience pill row */}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {audiences.map((a) => {
            const Icon = a.icon;
            return (
              <span
                key={a.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-[#0C2738]"
              >
                <Icon className="h-3.5 w-3.5 text-brand" />
                {a.label}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
