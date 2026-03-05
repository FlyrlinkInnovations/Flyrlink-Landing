'use client';

import { Star, Brain, ShieldCheck, Layers, Lock } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';

const testimonials = [
  { name: 'Ananya Reddy', role: 'Startup Founder', quote: 'Flyrlink connected me with a business strategist who completely transformed my go-to-market approach. The AI matching was spot-on.', rating: 5 },
  { name: 'Vikash Singh', role: 'Software Engineer', quote: 'I found a career coach within minutes. The session was incredibly valuable and the platform made booking seamless.', rating: 5 },
  { name: 'Meera Joshi', role: 'Marketing Manager', quote: 'The quality of experts on Flyrlink is exceptional. I use it regularly for digital marketing strategy sessions.', rating: 5 },
];

const stats = [
  { icon: Layers, value: 100, suffix: '+', label: 'Skills' },
  { icon: Star, value: 12, suffix: '+', label: 'Categories' },
  { icon: Brain, displayValue: 'AI-Powered', label: 'Matching' },
  { icon: Lock, displayValue: 'Secure', label: 'Platform' },
];

function StatItem({ stat, isVisible }: { stat: typeof stats[0]; isVisible: boolean }) {
  const Icon = stat.icon;
  const count = useCountUp(stat.value || 0, 2000, isVisible);

  return (
    <div className="text-center px-6">
      <Icon className="w-7 h-7 text-brand-300 mx-auto mb-3" />
      <p className="text-2xl md:text-3xl font-bold text-white mb-1">
        {stat.displayValue || `${count}${stat.suffix}`}
      </p>
      <p className="text-gray-400 text-sm">{stat.label}</p>
    </div>
  );
}

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-28 bg-white">
      <div ref={ref} className={`max-w-7xl mx-auto px-6 reveal ${isVisible ? 'revealed' : ''}`}>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-brand/10 border border-brand/20 rounded-full text-brand text-xs font-semibold uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 tracking-tight mb-6">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real stories from real users who found the right experts on Flyrlink.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-200/80 card-premium hover:border-brand/30">
              <div className="text-brand/20 text-5xl font-serif leading-none mb-4">&ldquo;</div>
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">{t.quote}</p>
              <div>
                <p className="font-semibold text-navy-900">{t.name}</p>
                <p className="text-sm text-gray-600">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="bg-navy-900 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((stat, index) => (
              <StatItem key={index} stat={stat} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
