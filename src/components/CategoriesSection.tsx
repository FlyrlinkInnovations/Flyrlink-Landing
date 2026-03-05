'use client';

import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const row1 = [
  { title: 'Business Intelligence', description: 'Strategy, consulting & management' },
  { title: 'Career Intelligence', description: 'Coaching, resumes & interview prep' },
  { title: 'Learning Accelerator', description: 'Tutoring, skills & mentorship' },
  { title: 'Creative Solutions', description: 'Design, art & creative consulting' },
];

const row2 = [
  { title: 'Technology', description: 'Software, AI/ML & DevOps' },
  { title: 'Health & Wellness', description: 'Fitness, nutrition & mental health' },
  { title: 'Legal', description: 'Legal advice & compliance' },
  { title: 'Marketing', description: 'Digital marketing & growth' },
];

const row3 = [
  { title: 'Finance', description: 'Planning, investments & tax' },
  { title: 'Lifestyle', description: 'Travel, fashion & personal growth' },
  { title: 'Astrology', description: 'Vedic astrology & spiritual guidance' },
  { title: 'Language', description: 'Language learning & translation' },
];

function MarqueeRow({ items, direction = 'left', speed = 30 }: { items: typeof row1; direction?: 'left' | 'right'; speed?: number }) {
  // Duplicate items enough to fill the screen seamlessly
  const duped = [...items, ...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden py-3">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

      <div
        className={`flex gap-6 w-max ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {duped.map((item, i) => (
          <a
            key={i}
            href="https://app.flyrlink.com/"
            className="group flex items-center gap-4 px-6 py-4 bg-white rounded-full border border-gray-200 hover:border-brand/30 hover:shadow-md transition-all duration-300 flex-shrink-0"
          >
            <div className="min-w-0">
              <h3 className="font-semibold text-navy-900 text-sm whitespace-nowrap">{item.title}</h3>
              <p className="text-xs text-gray-500 whitespace-nowrap">{item.description}</p>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-brand flex-shrink-0 transition-colors" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default function CategoriesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="categories" className="py-28 bg-gray-50 overflow-hidden">
      <div ref={ref} className={`reveal ${isVisible ? 'revealed' : ''}`}>
        {/* Header */}
        <div className="text-center mb-14 px-6">
          <span className="inline-flex items-center gap-2 text-brand text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-6 h-px bg-brand/40" />
            Expert Categories
            <span className="w-6 h-px bg-brand/40" />
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-navy-900">
            Deep Expertise. <span className="text-gradient">Real Impact.</span>
          </h2>
        </div>

        {/* Marquee rows */}
        <div className="space-y-2 mb-12">
          <MarqueeRow items={row1} direction="left" speed={35} />
          <MarqueeRow items={row2} direction="right" speed={40} />
          <MarqueeRow items={row3} direction="left" speed={32} />
        </div>

        {/* CTA */}
        <div className="text-center px-6">
          <a
            href="https://app.flyrlink.com/"
            className="group inline-flex items-center gap-2 text-navy-900 font-semibold hover:text-brand transition-colors"
          >
            View All Categories
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
