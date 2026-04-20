'use client';

import { useEffect, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Sparkles,
  Star,
  Users,
  Zap,
  Shield,
  Lock,
} from 'lucide-react';
import Image from 'next/image';

const experts = [
  { name: 'Rajesh Kumar', title: 'Business Strategy', rating: 5, reviews: 350, sessions: 800, image: 'https://randomuser.me/api/portraits/men/75.jpg' },
  { name: 'Priya Sharma', title: 'Tech Expert', rating: 5, reviews: 420, sessions: 950, image: 'https://randomuser.me/api/portraits/women/68.jpg' },
  { name: 'Amit Kapoor', title: 'Finance Advisor', rating: 5, reviews: 280, sessions: 650, image: 'https://randomuser.me/api/portraits/men/52.jpg' },
  { name: 'Neha Kapoor', title: 'Marketing Guru', rating: 5, reviews: 310, sessions: 720, image: 'https://randomuser.me/api/portraits/women/47.jpg' },
  { name: 'Vikram Gupta', title: 'Tech Leadership', rating: 5, reviews: 390, sessions: 870, image: 'https://randomuser.me/api/portraits/men/36.jpg' },
];

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentExpertIndex, setCurrentExpertIndex] = useState(0);

  useEffect(() => { setIsVisible(true); }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExpertIndex((prev) => (prev + 1) % experts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const current = experts[currentExpertIndex];
  const next = experts[(currentExpertIndex + 1) % experts.length];
  const third = experts[(currentExpertIndex + 2) % experts.length];

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-navy-950 overflow-hidden -mt-20"
      aria-label="Hero section"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-navy-800/50 rounded-full blur-[100px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand/5 rounded-full blur-[80px]" />
      </div>

      {/* Ghost watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-24 left-1/2 -translate-x-1/2 select-none font-serif italic font-medium leading-none text-white/[0.035]"
        style={{ fontSize: 'clamp(180px, 22vw, 340px)' }}
      >
        flyrlink
      </span>

      <div className={`relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Top magazine-style meta bar */}
        <div className="hidden md:flex items-center justify-between mb-12 text-[10px] font-semibold tracking-[0.28em] text-white/40">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
              LIVE · AI EXPERT NETWORK
            </span>
            <span className="h-3 w-px bg-white/10" />
            <span>VOL 01 · FLYRLINK 2026</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Shield className="h-3 w-3 text-brand-300" />
              DPDP
            </span>
            <span className="flex items-center gap-1.5">
              <Lock className="h-3 w-3 text-brand-300" />
              256-BIT
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-left">
            {/* Kicker */}
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-brand-700 shadow-lg shadow-brand/30">
                <Sparkles className="h-4 w-4 text-white" />
              </span>
              <div>
                <span className="text-[10px] font-semibold tracking-[0.28em] text-white/70">
                  MEET FLYRLINK
                </span>
                <div className="mt-1 h-0.5 w-24 rounded-full bg-gradient-to-r from-brand via-brand-300 to-transparent" />
              </div>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.05] tracking-tight">
              <span className="text-white">Your next expert is</span>
              <span className="mt-2 block font-serif italic font-medium text-brand-300">
                one match away.
              </span>
            </h1>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-xl">
              Flyrlink uses AI to match you with verified professionals across
              12+ categories. Book 1:1 sessions, attend live events, and get
              expert guidance - all in one platform.
            </p>

            {/* Trust stat row */}
            <div className="flex flex-wrap items-center gap-4 mb-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold text-white">4.9</span>
                <span className="text-[10px] font-semibold tracking-[0.22em] text-gray-500">
                  · 500+ REVIEWS
                </span>
              </div>
              <span className="h-4 w-px bg-white/10" />
              <span className="flex items-center gap-1.5 text-gray-400">
                <Users className="h-3.5 w-3.5 text-brand-300" />
                <span className="font-semibold text-white">500+</span> verified experts
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="https://app.flyrlink.com/"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-950 shadow-xl transition-all duration-300 hover:bg-gray-100 hover:shadow-brand/30"
              >
                Get Started Free
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-navy-950 text-white transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </a>
              <a
                href="/book-call"
                className="group inline-flex items-center gap-1.5 px-5 py-3 text-sm font-semibold text-white/90 hover:text-white transition-colors"
              >
                Book a call with us
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'AI matches perfect experts',
                'Verified professionals only',
                'Instant connections',
                'Secure & trusted platform',
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-400">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-brand/30 bg-brand/10">
                    <Check className="h-3 w-3 text-brand-300" />
                  </span>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative lg:block hidden">
            {/* Section label above card */}
            <div className="mb-5 flex items-center justify-between text-[10px] font-semibold tracking-[0.28em]">
              <div className="flex items-center gap-2 text-brand-300">
                <span className="h-0.5 w-8 rounded-full bg-gradient-to-r from-brand to-transparent" />
                MATCH ENGINE · LIVE
              </div>
              <span className="text-white/40">
                {String(currentExpertIndex + 1).padStart(2, '0')} / {String(experts.length).padStart(2, '0')}
              </span>
            </div>

            <div className="relative w-full max-w-md mx-auto pb-16">
              {/* Glow behind cards */}
              <div className="absolute inset-0 bg-brand/10 rounded-3xl blur-3xl" />

              {/* Card deck - back cards peek from behind below */}
              <div className="relative">
                {/* Tertiary Card (bottom of deck) */}
                <div className="absolute top-6 left-6 right-6 h-full z-10">
                  <div className="glass-dark rounded-2xl p-5 opacity-30 h-16" />
                </div>

                {/* Secondary Card (middle of deck) */}
                <div className="absolute top-3 left-3 right-3 h-full z-20">
                  <div className="glass-dark rounded-2xl p-5 opacity-50 h-16" />
                </div>

                {/* Primary Card (top of deck) */}
                <div className="relative z-30 glass-dark rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Image
                        src={current.image}
                        alt={current.name}
                        width={56}
                        height={56}
                        className="w-14 h-14 rounded-full object-cover ring-2 ring-white/10 transition-all duration-500"
                      />
                      <div>
                        <h3 className="font-bold text-white text-lg">{current.name}</h3>
                        <p className="text-sm text-gray-400">{current.title}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 bg-green-500/10 px-3 py-1.5 rounded-full border border-green-500/20">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-xs font-semibold text-green-400">Online</span>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-gray-400 ml-2">
                      5.0 ({current.reviews}+ reviews)
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{current.sessions}+ sessions</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Zap className="w-4 h-4 text-brand-300" />
                      <span>2 min response</span>
                    </div>
                  </div>
                  <button className="group w-full inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-600 text-white py-2.5 rounded-lg font-semibold transition-colors">
                    Connect Now
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Floating stat badges */}
              <div className="absolute -top-2 -right-6 z-40 glass-dark rounded-xl py-2.5 px-3.5 shadow-lg">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center border border-green-500/20">
                    <Check className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-medium leading-none mb-0.5">Match Rate</p>
                    <p className="font-bold text-white text-base leading-none">98%</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-2 -left-6 z-40 glass-dark rounded-xl py-2.5 px-3.5 shadow-lg">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-brand/10 rounded-lg flex items-center justify-center border border-brand/20">
                    <Users className="w-4 h-4 text-brand-300" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-medium leading-none mb-0.5">Active Experts</p>
                    <p className="font-bold text-white text-base leading-none">500+</p>
                  </div>
                </div>
              </div>

              {/* Up-next mini cards - flanking right side */}
              <div className="absolute -right-4 top-1/3 z-40 glass-dark rounded-xl p-3 shadow-lg max-w-[160px]">
                <div className="flex items-center gap-2">
                  <Image src={next.image} alt={next.name} width={36} height={36} className="w-9 h-9 rounded-full object-cover ring-2 ring-white/10 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-white truncate">{next.name}</p>
                    <p className="text-[10px] text-gray-400 truncate">{next.title}</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-2 top-1/3 mt-16 z-40 glass-dark rounded-xl p-3 shadow-lg max-w-[150px] opacity-60">
                <div className="flex items-center gap-2">
                  <Image src={third.image} alt={third.name} width={32} height={32} className="w-8 h-8 rounded-full object-cover ring-2 ring-white/10 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-white truncate">{third.name}</p>
                    <p className="text-[10px] text-gray-400 truncate">{third.title}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Caption below card */}
            <div className="mt-8 flex items-center gap-2 text-[10px] font-semibold tracking-[0.28em] text-white/30">
              AI · VERIFIED
              <span className="text-brand-300">·</span>
              2 MIN · MATCH
              <span className="text-brand-300">·</span>
              CONNECT
            </div>
          </div>
        </div>

        {/* Trusted By */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <p className="text-center text-[11px] font-semibold tracking-[0.24em] text-gray-500 mb-8">
            TRUSTED BY LEADING PROFESSIONALS AND ORGANIZATIONS
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 md:gap-x-20 gap-y-6">
            {['Foundershub', 'LEORIX'].map((name) => (
              <span
                key={name}
                className="font-serif italic text-2xl md:text-[28px] text-white/40 hover:text-brand-300 transition-colors duration-300 select-none"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
