'use client';

import { useState, useEffect } from 'react';
import { Brain, Zap, ShieldCheck } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const solutions = [
  {
    icon: Brain,
    title: 'Smart Matching',
    description: 'Our AI analyzes your needs and matches you with the most relevant experts based on skills, availability, ratings, and domain expertise.',
  },
  {
    icon: Zap,
    title: 'Instant Connect',
    description: 'Get connected with the right expert in minutes, not days. Real-time availability, instant booking, and seamless communication.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assured',
    description: 'Every expert is verified, rated, and reviewed. Our trust system ensures you always get high-quality guidance and support.',
  },
];

export default function AIExpertMatching() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, isVisible } = useScrollReveal();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % solutions.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-28 bg-gray-50 bg-dot-pattern-light">
      <div ref={ref} className={`max-w-7xl mx-auto px-6 reveal ${isVisible ? 'revealed' : ''}`}>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-brand/10 border border-brand/20 rounded-full text-brand text-xs font-semibold uppercase tracking-wider mb-4">
            AI-Powered Solutions
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 tracking-tight mb-6">
            How AI Powers Your Expert Search
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our intelligent platform uses advanced AI to ensure every expert match is relevant, reliable, and ready to help.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const isActive = index === activeIndex;
            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative p-8 rounded-xl cursor-pointer card-premium transition-all duration-500 ${
                  isActive
                    ? 'bg-white border-l-4 border-l-brand border border-gray-200/80 shadow-xl bg-brand/[0.02]'
                    : 'bg-white border border-gray-200/80 hover:border-brand/30'
                }`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                  isActive ? 'bg-brand text-white' : 'bg-brand/10 text-brand'
                }`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 leading-relaxed">{solution.description}</p>
                <div className="flex gap-1.5 mt-6">
                  {solutions.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeIndex ? 'w-6 bg-brand' : 'w-1.5 bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
