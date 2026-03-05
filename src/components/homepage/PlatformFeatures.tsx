'use client';

import { Video, CalendarDays, Rss, Search, Lock, Star, Briefcase, ShieldCheck } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const features = [
  { icon: Video, title: '1:1 Sessions', description: 'Book personalized video consultations with verified experts.' },
  { icon: CalendarDays, title: 'Live Events', description: 'Host and join webinars, workshops, and group sessions.' },
  { icon: Rss, title: 'Social Feed', description: 'Follow experts, share posts, and stay updated on insights.' },
  { icon: Search, title: 'AI Search', description: 'Find the perfect expert with intelligent AI-powered matching.' },
  { icon: Lock, title: 'Secure Payments', description: 'Protected transactions with escrow-style payment system.' },
  { icon: Star, title: 'Ratings & Reviews', description: 'Transparent feedback system to ensure quality interactions.' },
  { icon: Briefcase, title: 'Business Profiles', description: 'Professional profiles with portfolios, pricing, and availability.' },
  { icon: ShieldCheck, title: 'Content Moderation', description: 'AI-powered moderation keeps the platform safe and trustworthy.' },
];

export default function PlatformFeatures() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-28 bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px]" />

      <div ref={ref} className={`relative max-w-7xl mx-auto px-6 reveal ${isVisible ? 'revealed' : ''}`}>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-brand-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Platform
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Everything You Need in One Platform
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Flyrlink brings together all the tools you need to connect, learn, and grow with experts.
          </p>
        </div>

        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children ${isVisible ? 'revealed' : ''}`}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group glass-dark p-6 rounded-xl card-premium hover:border-brand/30">
                <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand-300 flex items-center justify-center mb-4 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
