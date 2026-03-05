'use client';

import { useState } from 'react';
import { UserPlus, FileText, Search, CreditCard, Star, User, CalendarDays, Eye, Banknote, TrendingUp, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const clientSteps = [
  { icon: UserPlus, title: 'Sign Up', description: 'Create your free Flyrlink account in seconds. No credit card required.' },
  { icon: FileText, title: 'Describe Your Need', description: 'Tell us what you need help with — our AI understands context and intent.' },
  { icon: Search, title: 'Get Matched', description: 'AI recommends the best experts based on your requirements, budget, and timing.' },
  { icon: CreditCard, title: 'Book & Pay', description: 'Book a session, pay securely, and connect with your expert instantly.' },
  { icon: Star, title: 'Rate & Review', description: 'Share feedback to help the community find great experts.' },
];

const expertSteps = [
  { icon: User, title: 'Create Profile', description: 'Showcase your skills, experience, credentials, and pricing.' },
  { icon: CalendarDays, title: 'Set Availability', description: 'Define your schedule, preferred session types, and rates.' },
  { icon: Eye, title: 'Get Discovered', description: 'AI recommends you to clients matching your expertise and style.' },
  { icon: Banknote, title: 'Deliver & Earn', description: 'Conduct sessions and receive secure, on-time payments.' },
  { icon: TrendingUp, title: 'Grow Your Brand', description: 'Build your reputation with ratings, reviews, and content.' },
];

export default function HowItWorks() {
  const { ref, isVisible } = useScrollReveal();
  const [activeTab, setActiveTab] = useState<'clients' | 'experts'>('clients');
  const [activeStep, setActiveStep] = useState(0);

  const steps = activeTab === 'clients' ? clientSteps : expertSteps;

  const handleTabChange = (tab: 'clients' | 'experts') => {
    setActiveTab(tab);
    setActiveStep(0);
  };

  return (
    <section id="how-it-works" className="py-28 bg-white">
      <div ref={ref} className={`max-w-7xl mx-auto px-6 reveal ${isVisible ? 'revealed' : ''}`}>
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-brand text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-6 h-px bg-brand/40" />
            Getting Started
            <span className="w-6 h-px bg-brand/40" />
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 tracking-tight mb-6">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you&apos;re seeking guidance or sharing your expertise, getting started is simple.
          </p>
        </div>

        {/* Tab toggle */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            <button
              onClick={() => handleTabChange('clients')}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === 'clients'
                  ? 'bg-brand text-white shadow-md shadow-brand/20'
                  : 'text-gray-600 hover:text-navy-900'
              }`}
            >
              For Clients
            </button>
            <button
              onClick={() => handleTabChange('experts')}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === 'experts'
                  ? 'bg-brand text-white shadow-md shadow-brand/20'
                  : 'text-gray-600 hover:text-navy-900'
              }`}
            >
              For Experts
            </button>
          </div>
        </div>

        {/* Steps layout */}
        <div className="max-w-5xl mx-auto">
          {/* Horizontal step indicators — desktop */}
          <div className="hidden md:flex items-center justify-between mb-12 relative">
            {/* Connecting line */}
            <div className="absolute top-5 left-[10%] right-[10%] h-0.5 bg-gray-200" />
            {/* Progress fill */}
            <div
              className="absolute top-5 left-[10%] h-0.5 bg-brand transition-all duration-500 ease-out"
              style={{ width: `${(activeStep / (steps.length - 1)) * 80}%` }}
            />

            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;
              const isPast = index < activeStep;

              return (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className="relative z-10 flex flex-col items-center gap-3 group"
                  style={{ width: `${100 / steps.length}%` }}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? 'bg-brand text-white scale-110 shadow-lg shadow-brand/30'
                        : isPast
                          ? 'bg-brand text-white'
                          : 'bg-white text-gray-400 border-2 border-gray-200 group-hover:border-brand/40 group-hover:text-brand'
                    }`}
                  >
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <span
                    className={`text-xs font-semibold transition-colors whitespace-nowrap ${
                      isActive ? 'text-brand' : isPast ? 'text-navy-900' : 'text-gray-400 group-hover:text-gray-600'
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active step detail card */}
          <div className="relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              if (index !== activeStep) return null;

              return (
                <div
                  key={`${activeTab}-${index}`}
                  className="bg-gray-50 rounded-2xl border border-gray-200/80 p-8 md:p-10 animate-fade-in"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    {/* Step number + icon */}
                    <div className="flex items-center gap-4 md:min-w-[200px]">
                      <div className="w-14 h-14 rounded-2xl bg-brand text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-brand/20">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div className="md:hidden">
                        <p className="text-xs font-semibold text-brand uppercase tracking-wider">Step {index + 1}</p>
                        <h3 className="text-xl font-bold text-navy-900">{step.title}</h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <p className="hidden md:block text-xs font-semibold text-brand uppercase tracking-wider mb-1">Step {index + 1} of {steps.length}</p>
                      <h3 className="hidden md:block text-2xl font-bold text-navy-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                    </div>

                    {/* Nav arrows */}
                    <div className="flex gap-2 md:flex-col flex-shrink-0">
                      <button
                        onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                        disabled={activeStep === 0}
                        className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-brand hover:border-brand/30 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                      >
                        <ArrowRight className="w-4 h-4 rotate-180" />
                      </button>
                      <button
                        onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                        disabled={activeStep === steps.length - 1}
                        className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-brand hover:border-brand/30 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Mobile step dots */}
                  <div className="flex justify-center gap-2 mt-6 md:hidden">
                    {steps.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveStep(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === activeStep ? 'w-6 bg-brand' : 'w-1.5 bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
