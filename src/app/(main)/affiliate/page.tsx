import type { Metadata } from 'next';
import { Percent, CalendarDays, DollarSign, Eye, Star, Megaphone, Gift, TrendingUp, ArrowRight } from 'lucide-react';
import AffiliateSignupForm from '@/components/AffiliateSignupForm';

export const metadata: Metadata = {
  title: 'Affiliate Program',
  description: 'Join the Flyrlink Affiliate Program. Earn 5% commission on all transactions for 12 months. Promote Flyrlink and earn without limits.',
  keywords: 'flyrlink affiliate, affiliate program, earn commissions, referral program, partner program',
};

const benefits = [
  { icon: Percent, title: '5% Commission', description: 'Earn on every transaction your referrals make -- sessions, events, and all services.' },
  { icon: CalendarDays, title: '12-Month Window', description: 'Earn commissions for a full 12 months from the date of each referral.' },
  { icon: DollarSign, title: 'All Transaction Types', description: '1:1 sessions, events, group sessions, and more -- everything counts.' },
  { icon: Eye, title: 'Visibility Boost', description: 'Top affiliates get featured placement and increased discovery on the platform.' },
  { icon: Star, title: 'Priority Discovery', description: 'Your profile gets prioritized in our AI matching for greater exposure.' },
  { icon: Gift, title: 'Milestone Rewards', description: 'Unlock bonus rewards as you hit referral milestones.' },
];

const steps = [
  { step: 1, title: 'Apply', description: 'Fill out the application form below with your details.' },
  { step: 2, title: 'Get Approved', description: 'Our team reviews and approves your application within 48 hours.' },
  { step: 3, title: 'Share Your Link', description: 'Get your unique referral link and start promoting Flyrlink.' },
  { step: 4, title: 'Earn Commissions', description: 'Earn 5% on every transaction your referrals make for 12 months.' },
];

export default function AffiliatePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 text-brand text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-6 h-px bg-brand/40" />
            Affiliate Program
            <span className="w-6 h-px bg-brand/40" />
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-navy-900 tracking-tight">
            Promote Flyrlink. <span className="text-gradient">Earn Without Limits.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join our affiliate program and earn recurring commissions for every user you bring to Flyrlink.
            5% on all transactions for 12 months per referral.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-navy-900 text-center mb-12 tracking-tight">Why Join?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="p-6 bg-white rounded-xl border border-gray-200/80 card-premium hover:border-brand/30">
                  <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-navy-900 text-center mb-12 tracking-tight">How It Works</h2>
          <div className="space-y-6">
            {steps.map((item) => (
              <div key={item.step} className="flex items-start gap-6 p-6 bg-white rounded-xl border border-gray-200/80 card-premium hover:border-brand/30">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand text-white flex items-center justify-center font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-navy-900 text-center mb-4 tracking-tight">Who Is It For?</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Our affiliate program is perfect for anyone with an audience who values professional growth and learning.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Megaphone, label: 'Content Creators', desc: 'YouTubers, bloggers, podcasters' },
              { icon: Star, label: 'Coaches & Mentors', desc: 'Career coaches, life coaches, trainers' },
              { icon: TrendingUp, label: 'Freelancers', desc: 'Consultants, agencies, solopreneurs' },
              { icon: Gift, label: 'Community Admins', desc: 'Discord, Slack, WhatsApp groups' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="p-6 bg-brand/5 rounded-xl text-center border border-brand/10">
                  <Icon className="w-8 h-8 text-brand mx-auto mb-3" />
                  <h3 className="font-bold text-navy-900 mb-1">{item.label}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section className="py-20 bg-gray-50" id="apply">
        <div className="max-w-2xl mx-auto px-6">
          <AffiliateSignupForm />
        </div>
      </section>
    </>
  );
}
