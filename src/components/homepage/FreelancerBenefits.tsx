'use client';

import { Users, Wand2, Gauge, Smile, type LucideIcon } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const BENEFITS: { icon: LucideIcon; text: string }[] = [
  { icon: Users, text: 'Access a pool of top talent across 700 categories' },
  { icon: Wand2, text: 'Enjoy a simple, easy-to-use matching experience' },
  { icon: Gauge, text: 'Get quality work done quickly and within budget' },
  { icon: Smile, text: "Only pay when you're happy" },
];

export default function FreelancerBenefits() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-[#F2F7FF]">
      {/* Blue bar */}
      <div className="flex flex-col items-center justify-between gap-4 bg-[#2A81D2] px-6 py-3 sm:flex-row lg:px-10">
        <h2 className="font-heading text-2xl tracking-[-1.2px] text-white sm:text-3xl lg:text-[40px] lg:leading-[48px]">
          Make it all happen with freelancers
        </h2>
        <a
          href="https://app.flyrlink.com/"
          className="rounded-lg bg-[#2AABD2] px-5 py-2 text-base font-semibold text-white transition-colors hover:bg-[#1f93b8]"
        >
          Join
        </a>
      </div>

      <div className="border-t border-[#DADBDD]" />

      {/* Benefits */}
      <div
        ref={ref}
        className={`grid grid-cols-1 gap-8 px-6 py-10 reveal sm:grid-cols-2 lg:grid-cols-4 lg:px-20 ${
          isVisible ? 'revealed' : ''
        }`}
      >
        {BENEFITS.map((b) => {
          const Icon = b.icon;
          return (
            <div key={b.text} className="flex flex-col gap-3">
              <Icon className="h-12 w-12 text-[#404145]" strokeWidth={1.5} />
              <p className="max-w-[232px] text-base leading-6 text-[#222325]">{b.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
