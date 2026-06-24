'use client';

import Link from 'next/link';
import {
  Code2, Activity, Video, Banknote, BookOpen, Dumbbell,
  Clapperboard, Mic, Megaphone, Bot, PenTool, Globe,
  type LucideIcon,
} from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type Service = { title: string; slug: string; icon: LucideIcon; bg: string };

const SERVICES: Service[] = [
  { title: 'Vibe Coding',           slug: 'web-development',      icon: Code2,       bg: '#9EC2E4' },
  { title: 'Yoga Teacher',          slug: 'yoga-trainer',         icon: Activity,    bg: '#9EC2E4' },
  { title: 'Video Editing',         slug: 'video-editing',        icon: Video,       bg: '#9EC2E4' },
  { title: 'Finance',               slug: 'tax-consulting',       icon: Banknote,    bg: '#9EC2E4' },
  { title: 'Book Publishing',       slug: 'book-publishing',      icon: BookOpen,    bg: '#2A81D2' },
  { title: 'Gym Instructor',        slug: 'fitness-coach',        icon: Dumbbell,    bg: '#9EC2E4' },
  { title: 'UGC Videos',            slug: 'ugc-creators',         icon: Clapperboard, bg: '#003912' },
  { title: 'Voice Over',            slug: 'voice-dubbing',        icon: Mic,         bg: '#003912' },
  { title: 'Social Media Marketing', slug: 'digital-marketing',   icon: Megaphone,   bg: '#003912' },
  { title: 'AI Development',        slug: 'ai-expert',            icon: Bot,         bg: '#003912' },
  { title: 'Logo Design',           slug: 'logo-design',          icon: PenTool,     bg: '#003912' },
  { title: 'Website Design',        slug: 'website-design',       icon: Globe,       bg: '#003912' },
];

export default function PopularServices() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-[#F2F7FF] py-10 lg:py-12">
      <div
        ref={ref}
        className={`reveal ${isVisible ? 'revealed' : ''}`}
      >
        <div className="mx-auto max-w-[1380px] pl-6 lg:pl-[60px]">
          <h2 className="font-heading text-3xl tracking-[-1.44px] text-black lg:text-5xl">
            Popular services
          </h2>
        </div>

        {/* Auto-scrolling marquee — pauses on hover */}
        <div className="marquee-pause relative mt-6 overflow-hidden py-3">
          <div className="animate-marquee-left flex w-max gap-2">
            {[...SERVICES, ...SERVICES].map((s, i) => {
              const Icon = s.icon;
              return (
                <Link
                  key={`${s.title}-${i}`}
                  href={`/services/${s.slug}`}
                  aria-hidden={i >= SERVICES.length}
                  tabIndex={i >= SERVICES.length ? -1 : undefined}
                  className="group flex h-[266px] w-[200px] flex-shrink-0 flex-col items-center rounded-2xl px-2 pb-2 pt-6 shadow-[0px_3px_10px_rgba(0,0,0,0.13)] transition-transform hover:-translate-y-1"
                  style={{ backgroundColor: s.bg }}
                >
                  <h3 className="px-2 text-center text-[18px] font-bold leading-7 text-white">
                    {s.title}
                  </h3>
                  <div className="flex flex-1 items-center justify-center">
                    <Icon className="h-20 w-20 text-white/90" strokeWidth={1.5} />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#F2F7FF] to-transparent lg:w-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#F2F7FF] to-transparent lg:w-20" />
        </div>
      </div>
    </section>
  );
}
