'use client';

import React from 'react';
import Image from 'next/image';
import { Brain, Zap, CheckCircle } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const features = [
  { title: 'AI-Powered Matching', description: 'Our advanced algorithms connect you with the perfect experts based on your specific needs and preferences.', icon: Brain },
  { title: 'Instant Connections', description: 'Get matched and start your session in minutes, not days. No more waiting for callbacks.', icon: Zap },
  { title: 'Verified Experts', description: 'Every professional on our platform is thoroughly vetted to ensure quality and expertise.', icon: CheckCircle },
];

export default function FeaturesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-28 bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px]" />

      <div ref={ref} className={`relative max-w-7xl mx-auto px-6 reveal ${isVisible ? 'revealed' : ''}`}>
        <div className="glass-dark rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-12 flex flex-col justify-center">
              <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-brand-300 text-xs font-semibold uppercase tracking-wider mb-6 w-fit">
                Why Flyrlink
              </span>
              <h3 className="font-display text-3xl font-bold text-white mb-6">Why Choose Flyrlink?</h3>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                We&apos;re redefining how people connect with experts. Our platform combines cutting-edge technology with human expertise to deliver exceptional results.
              </p>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand-300">
                      {React.createElement(feature.icon, { size: 24 })}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] w-full overflow-hidden">
              <Image src="/1.png" alt="Flyrlink Platform Preview" fill className="object-cover object-top" loading="lazy" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-none" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-navy-950/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
