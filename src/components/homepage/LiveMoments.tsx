'use client';

import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type Tile = {
  src: string;
  alt: string;
  caption: string;
  category: string;
  span?: string;
  aspect?: string;
};

const tiles: Tile[] = [
  {
    src: '/Marketing%20content/mentoring/woman-happily-communicating-online-with-laptop-ind-2026-03-25-05-31-19-utc.jpg',
    alt: '1:1 online mentoring session',
    caption: '1:1 mentoring on Flyrlink',
    category: 'MENTORING',
    span: 'md:col-span-2 md:row-span-2',
    aspect: 'aspect-square md:aspect-auto',
  },
  {
    src: '/Marketing%20content/Event%20pics/speaker-presents-at-conference-to-audience-members-2026-03-10-03-08-21-utc.jpg',
    alt: 'Conference speaker on stage',
    caption: 'Sold-out workshops, every weekend',
    category: 'EVENTS',
    span: 'md:col-span-2',
    aspect: 'aspect-[4/3]',
  },
  {
    src: '/Marketing%20content/mentoring/smiling-woman-works-on-laptop-at-desk-2026-03-25-03-58-39-utc.jpg',
    alt: 'Expert preparing a session',
    caption: 'Pros prepping for sessions',
    category: 'PRO TIME',
    aspect: 'aspect-[4/5]',
  },
  {
    src: '/Marketing%20content/Group/group-of-young-adults-learning-together-indoors-2026-01-09-09-59-22-utc.jpg',
    alt: 'Students learning together in a group',
    caption: 'Cohort classes for board prep',
    category: 'COHORTS',
    aspect: 'aspect-[4/5]',
  },
  {
    src: '/Marketing%20content/Event%20pics/man-delivering-presentation-in-conference-room-2026-01-09-10-22-25-utc.jpg',
    alt: 'Presenter at a corporate workshop',
    caption: 'Live keynotes & workshops',
    category: 'KEYNOTES',
    span: 'md:col-span-2',
    aspect: 'aspect-[4/3]',
  },
  {
    src: '/Marketing%20content/mentoring/woman-with-headphones-smiling-working-on-laptop-i-2026-03-25-08-30-34-utc.jpg',
    alt: 'Online tutor with headphones',
    caption: 'Online tutoring, K-12 to college',
    category: 'TUTORING',
    aspect: 'aspect-[4/5]',
  },
  {
    src: '/Marketing%20content/Group/four-people-working-together-on-laptops-2026-01-07-23-37-33-utc.jpg',
    alt: 'Team collaboration session',
    caption: 'Team upskilling sprints',
    category: 'TEAMS',
    aspect: 'aspect-[4/5]',
  },
  {
    src: '/Marketing%20content/mentoring/woman-smiling-at-a-webcam-in-office-2026-03-26-08-48-51-utc.jpg',
    alt: 'Live video session',
    caption: 'Face-to-face on video',
    category: 'LIVE',
    aspect: 'aspect-square',
  },
  {
    src: '/Marketing%20content/Group/architect-cafe-casual-brainstorming-meeting-concep-2026-01-07-23-27-47-utc.jpg',
    alt: 'Casual brainstorm meeting',
    caption: 'Casual coffee mentoring',
    category: 'CONNECT',
    span: 'md:col-span-2',
    aspect: 'aspect-[4/3]',
  },
  {
    src: '/Marketing%20content/Slider%20images/portrait-of-a-beautiful-university-student-making-2026-01-09-11-07-39-utc.jpg',
    alt: 'University student studying',
    caption: 'Study-abroad guidance',
    category: 'EDUCATION',
    aspect: 'aspect-[4/5]',
  },
  {
    src: '/Marketing%20content/mentoring/focused-woman-working-at-desk-with-laptop-2026-01-09-09-20-15-utc.jpg',
    alt: 'Tax consultant preparing files',
    caption: 'Tax & finance consulting',
    category: 'FINANCE',
    aspect: 'aspect-[4/5]',
  },
  {
    src: '/Marketing%20content/Slider%20images/portrait-fitness-and-basketball-with-a-sports-man-2026-03-25-02-21-58-utc.jpg',
    alt: 'Sports coach with basketball',
    caption: 'Sports & fitness coaching',
    category: 'FITNESS',
    aspect: 'aspect-square',
  },
  {
    src: '/Marketing%20content/Group/confident-woman-sitting-in-office-with-coworkers-2026-03-25-06-43-08-utc.jpg',
    alt: 'Career coach with team',
    caption: 'Career coaching at scale',
    category: 'CAREER',
    aspect: 'aspect-[4/5]',
  },
  {
    src: '/Marketing%20content/Slider%20images/smiling-woman-pauses-workout-on-urban-steps-2026-01-09-09-42-37-utc.jpg',
    alt: 'Fitness coach outdoors',
    caption: 'Strength & wellness',
    category: 'WELLNESS',
    aspect: 'aspect-[4/5]',
  },
  {
    src: '/Marketing%20content/Event%20pics/top-view-of-a-woman-working-on-a-laptop-with-an-em-2026-01-07-23-20-14-utc.jpg',
    alt: 'Working on laptop top down',
    caption: 'Async deliverables, on time',
    category: 'PROJECTS',
    span: 'md:col-span-2',
    aspect: 'aspect-[4/3]',
  },
  {
    src: '/Marketing%20content/mentoring/smiling-woman-using-a-tablet-indoors-2026-01-09-09-26-28-utc.jpg',
    alt: 'Mentor on tablet',
    caption: 'Quick consults on the go',
    category: 'CONSULT',
    aspect: 'aspect-square',
  },
  {
    src: '/Marketing%20content/Slider%20images/young-woman-studying-at-desk-with-open-book-2026-03-26-09-01-38-utc.jpg',
    alt: 'Student studying',
    caption: 'Exam prep, 1:1',
    category: 'STUDY',
    aspect: 'aspect-[4/5]',
  },
  {
    src: '/Marketing%20content/Slider%20images/thoughtful-young-adult-studying-in-classroom-setti-2026-03-25-02-51-22-utc.jpg',
    alt: 'Student thinking in classroom',
    caption: 'Career counselling sessions',
    category: 'GUIDANCE',
    aspect: 'aspect-[4/5]',
  },
  {
    src: '/Marketing%20content/Group/loving-couple-enjoying-coffee-and-using-laptop-out-2026-01-07-23-01-26-utc.jpg',
    alt: 'Couple working together',
    caption: 'Couple counselling & life coaching',
    category: 'LIFE',
    span: 'md:col-span-2',
    aspect: 'aspect-[4/3]',
  },
  {
    src: '/Marketing%20content/mentoring/smiling-woman-working-at-desk-with-laptop-2026-01-09-11-36-43-utc.jpg',
    alt: 'Expert smiling at desk',
    caption: 'Real experts, real bookings',
    category: 'EXPERTS',
    aspect: 'aspect-square',
  },
  {
    src: '/Marketing%20content/Slider%20images/elegant-woman-with-long-hair-and-jewelry-2026-01-09-01-02-13-utc.jpg',
    alt: 'Stylist portrait',
    caption: 'Stylists, makeup artists, weddings',
    category: 'BEAUTY',
    aspect: 'aspect-[4/5]',
  },
  {
    src: '/Marketing%20content/Slider%20images/happy-asian-man-phone-and-laptop-for-social-media-2026-01-09-11-32-51-utc.jpg',
    alt: 'Creator on laptop',
    caption: 'UGC creators & social experts',
    category: 'CREATORS',
    aspect: 'aspect-square',
  },
  {
    src: '/Marketing%20content/Slider%20images/tablet-smile-and-business-woman-in-studio-isolate-2026-01-09-09-54-10-utc.jpg',
    alt: 'Business consultant on tablet',
    caption: 'Business advisors, on demand',
    category: 'BUSINESS',
    aspect: 'aspect-[4/5]',
  },
  {
    src: '/Marketing%20content/mentoring/woman-sitting-with-laptop-smiling-on-white-backgr-2026-01-15-21-43-26-utc.jpg',
    alt: 'Friendly online tutor',
    caption: 'Friendly first calls, every time',
    category: 'WELCOME',
    aspect: 'aspect-[4/5]',
  },
  {
    src: '/Marketing%20content/Slider%20images/woman-in-dress-posing-against-textured-wall-2026-03-09-03-25-24-utc.jpg',
    alt: 'Stylist portrait',
    caption: 'Personal stylists & creators',
    category: 'STYLE',
    aspect: 'aspect-[4/5]',
  },
  {
    src: '/Marketing%20content/Slider%20images/phone-smile-and-portrait-of-woman-with-sunglasses-2026-03-25-04-45-55-utc.jpg',
    alt: 'Creator on phone',
    caption: 'Influencer & UGC consults',
    category: 'INFLUENCE',
    aspect: 'aspect-square',
  },
  {
    src: '/Marketing%20content/Slider%20images/studio-shot-of-an-attractive-young-woman-working-o-2026-01-09-09-44-27-utc.jpg',
    alt: 'Online business woman',
    caption: 'Brand, content & strategy',
    category: 'STRATEGY',
    aspect: 'aspect-[4/5]',
  },
  {
    src: '/Marketing%20content/Slider%20images/smiling-woman-wearing-red-hat-and-plaid-shirt-2026-01-05-00-27-38-utc.JPG',
    alt: 'Friendly coach',
    caption: 'Lifestyle & wellness coaches',
    category: 'LIFESTYLE',
    aspect: 'aspect-square',
  },
];

export default function LiveMoments() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative overflow-hidden bg-gray-50 py-24 md:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 reveal ${isVisible ? 'revealed' : ''}`}
      >
        {/* Header */}
        <div className="mb-12 grid items-end gap-6 md:mb-14 md:grid-cols-[1.5fr_1fr]">
          <div>
            <div className="mb-3 text-[11px] font-semibold tracking-[0.28em] text-gray-400">
              REAL SESSIONS · REAL PEOPLE
            </div>
            <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-navy-900 md:text-5xl lg:text-6xl">
              The platform,{' '}
              <span className="font-serif italic font-medium text-brand">
                in the wild.
              </span>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-gray-600 md:text-lg">
            From bedroom yoga classes to boardroom keynotes, from board-exam
            cram sessions to study-abroad consults. A peek at the moments
            happening on Flyrlink right now.
          </p>
        </div>

        {/* Grid */}
        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 lg:auto-rows-[220px]">
          {tiles.map((tile, i) => (
            <a
              key={i}
              href="https://app.flyrlink.com/"
              className={`group relative overflow-hidden rounded-2xl bg-gray-200 ${
                tile.span ?? ''
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tile.src}
                alt={tile.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/30 to-transparent transition-opacity duration-500 group-hover:from-navy-950/95" />

              {/* Category chip */}
              <span className="absolute left-3 top-3 rounded-full bg-white/85 px-2 py-0.5 text-[9px] font-semibold tracking-[0.22em] text-brand-700 backdrop-blur">
                {tile.category}
              </span>

              {/* Caption */}
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <p className="text-sm font-semibold leading-snug md:text-base">
                  {tile.caption}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 rounded-2xl border border-gray-200/70 bg-white p-6 md:mt-16 md:flex-row md:p-8">
          <div>
            <p className="font-display text-lg font-bold text-navy-900 md:text-xl">
              Your moment is{' '}
              <span className="font-serif italic font-medium text-brand">
                next.
              </span>
            </p>
            <p className="mt-1 text-sm text-gray-600">
              Book your first session free. Real humans, no bots, no fluff.
            </p>
          </div>
          <a
            href="https://app.flyrlink.com/"
            className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition-all duration-300 hover:bg-brand-600 hover:shadow-brand/50"
          >
            Get started free
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
