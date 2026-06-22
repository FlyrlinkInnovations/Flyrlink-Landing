'use client';

import { useRef } from 'react';
import Link from 'next/link';
import {
  Code2, Activity, Video, Banknote, BookOpen, Dumbbell,
  Clapperboard, Mic, Megaphone, Bot, PenTool, Globe,
  ChevronRight, type LucideIcon,
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
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: dir * 480, behavior: 'smooth' });
  };

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

        <div className="relative mt-6">
          <div
            ref={scrollerRef}
            className="flex gap-2 overflow-x-auto scroll-smooth px-6 pb-3 lg:px-[60px] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.title}
                  href={`/services/${s.slug}`}
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

          {/* scroll buttons */}
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Scroll left"
            className="absolute left-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#62646A] shadow-[0px_1px_5px_rgba(0,0,0,0.12)] transition-colors hover:bg-gray-50 lg:flex"
          >
            <ChevronRight className="h-4 w-4 rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Scroll right"
            className="absolute right-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#62646A] shadow-[0px_1px_5px_rgba(0,0,0,0.12)] transition-colors hover:bg-gray-50 lg:flex"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
