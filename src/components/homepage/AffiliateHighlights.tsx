'use client';

import Link from 'next/link';
import { ArrowRight, Percent, CalendarDays, DollarSign, Users, Mic, Briefcase, MessageSquare } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const highlights = [
  { icon: Percent, title: '5% Commission', description: 'Earn on every transaction your referrals make.' },
  { icon: CalendarDays, title: '12-Month Window', description: 'Earn commissions for a full year after referral.' },
  { icon: DollarSign, title: 'All Transactions', description: 'Sessions, events, and all expert services count.' },
];

const audiences = [
  { icon: Mic, label: 'Content Creators' },
  { icon: Users, label: 'Coaches & Mentors' },
  { icon: Briefcase, label: 'Freelancers' },
  { icon: MessageSquare, label: 'Community Admins' },
];

export default function AffiliateHighlights() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-28 bg-gray-50">
      <div ref={ref} className={`max-w-7xl mx-auto px-6 reveal ${isVisible ? 'revealed' : ''}`}>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-brand/10 border border-brand/20 rounded-full text-brand text-xs font-semibold uppercase tracking-wider mb-4">
            Affiliate Program
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 tracking-tight mb-6">
            Promote Flyrlink. Earn Without Limits.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join our affiliate program and earn recurring commissions for every user you bring to Flyrlink.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="group bg-white p-8 rounded-xl border border-gray-200/80 text-center card-premium hover:border-brand/30">
                <div className="w-14 h-14 rounded-xl bg-brand/10 text-brand flex items-center justify-center mx-auto mb-4 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-xl p-8 border border-gray-200/80 mb-12">
          <h3 className="font-display text-2xl font-bold text-navy-900 mb-6 text-center">Who Is It For?</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {audiences.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center gap-3 p-4 bg-brand/5 rounded-xl border border-brand/10">
                  <Icon className="w-6 h-6 text-brand" />
                  <span className="font-medium text-navy-900">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/affiliate"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-brand hover:bg-brand-600 text-white font-semibold rounded-lg transition-all duration-300"
          >
            Join the Affiliate Program
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
