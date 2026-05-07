'use client';

import { ArrowRight, Star, ShieldCheck } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type Expert = {
  name: string;
  role: string;
  city: string;
  image: string;
  rating: number;
  reviews: number;
};

const ROW_ONE: Expert[] = [
  {
    name: 'Aditi Nair',
    role: 'Brand Strategist',
    city: 'Mumbai',
    image:
      '/Marketing%20content/Profiles/confident-woman-in-business-attire-with-arms-cross-2026-01-09-11-34-03-utc.jpg',
    rating: 4.9,
    reviews: 142,
  },
  {
    name: 'Vikram Joshi',
    role: 'Startup Mentor',
    city: 'Bengaluru',
    image:
      '/Marketing%20content/Profiles/business-man-serious-face-and-portrait-in-studio-2026-01-09-09-49-57-utc.jpg',
    rating: 4.8,
    reviews: 96,
  },
  {
    name: 'Sanya Kapoor',
    role: 'Career Coach',
    city: 'Delhi',
    image:
      '/Marketing%20content/Profiles/confident-woman-smiles-in-business-portrait-studio-2026-01-09-10-26-05-utc.jpg',
    rating: 5.0,
    reviews: 213,
  },
  {
    name: 'Rohit Khanna',
    role: 'Product Coach',
    city: 'Pune',
    image:
      '/Marketing%20content/Profiles/crossed-arms-city-and-portrait-of-business-man-fo-2026-01-09-09-41-51-utc.jpg',
    rating: 4.9,
    reviews: 174,
  },
  {
    name: 'Meera Krishnan',
    role: 'Content Strategist',
    city: 'Chennai',
    image:
      '/Marketing%20content/Profiles/efficient-communication-with-each-strike-of-a-key-2026-01-09-10-16-15-utc.jpg',
    rating: 4.9,
    reviews: 88,
  },
  {
    name: 'Arjun Desai',
    role: 'Music Producer',
    city: 'Mumbai',
    image:
      '/Marketing%20content/Profiles/man-listening-to-music-outdoors-on-sunny-day-2026-03-25-02-51-17-utc.jpg',
    rating: 4.8,
    reviews: 67,
  },
  {
    name: 'Pooja Bhatt',
    role: 'Executive Coach',
    city: 'Hyderabad',
    image:
      '/Marketing%20content/Profiles/my-projects-are-always-a-success-shot-of-an-attra-2026-01-09-10-58-13-utc.jpg',
    rating: 5.0,
    reviews: 305,
  },
  {
    name: 'Nikhil Saxena',
    role: 'Finance Advisor',
    city: 'Gurgaon',
    image:
      '/Marketing%20content/Profiles/professional-man-with-white-shirt-and-red-tie-2026-01-11-09-55-22-utc.jpg',
    rating: 4.9,
    reviews: 156,
  },
  {
    name: 'Tanvi Sethi',
    role: 'Personal Stylist',
    city: 'Delhi',
    image:
      '/Marketing%20content/Profiles/professional-woman-smiling-in-business-portrait-2026-03-25-04-43-09-utc.jpg',
    rating: 4.7,
    reviews: 79,
  },
  {
    name: 'Kabir Malhotra',
    role: 'Sales Trainer',
    city: 'Bengaluru',
    image:
      '/Marketing%20content/Profiles/shot-of-a-mature-businessman-standing-with-his-arm-2026-01-09-09-44-55-utc.jpg',
    rating: 4.8,
    reviews: 122,
  },
];

const ROW_TWO: Expert[] = [
  {
    name: 'Ishita Verma',
    role: 'Public Speaking Coach',
    city: 'Mumbai',
    image:
      '/Marketing%20content/Profiles/shes-got-a-lot-of-fight-in-her-studio-shot-of-a-f-2026-03-25-09-04-11-utc.jpg',
    rating: 5.0,
    reviews: 198,
  },
  {
    name: 'Devansh Rao',
    role: 'Music Coach',
    city: 'Pune',
    image:
      '/Marketing%20content/Profiles/smiling-man-with-headphones-outside-in-the-city-2026-03-25-05-47-55-utc.jpg',
    rating: 4.9,
    reviews: 84,
  },
  {
    name: 'Riya Pillai',
    role: 'Resume Writer',
    city: 'Chennai',
    image:
      '/Marketing%20content/Profiles/smiling-woman-in-business-suit-professional-heads-2026-03-26-02-10-48-utc.jpg',
    rating: 4.8,
    reviews: 110,
  },
  {
    name: 'Naveen Reddy',
    role: 'UX Mentor',
    city: 'Hyderabad',
    image:
      '/Marketing%20content/Profiles/studio-shot-of-a-young-man-showing-a-thumbs-up-ges-2026-03-25-05-56-14-utc.jpg',
    rating: 4.9,
    reviews: 143,
  },
  {
    name: 'Shreya Bose',
    role: 'Interior Designer',
    city: 'Kolkata',
    image:
      '/Marketing%20content/Profiles/smiling-woman-in-office-with-arms-crossed-2026-01-09-11-16-03-utc.jpg',
    rating: 4.8,
    reviews: 91,
  },
  {
    name: 'Harsh Vora',
    role: 'Marketing Consultant',
    city: 'Ahmedabad',
    image:
      '/Marketing%20content/Profiles/portrait-of-a-chinese-businessman-in-the-financial-2026-03-27-00-27-47-utc.jpg',
    rating: 4.9,
    reviews: 102,
  },
  {
    name: 'Diya Menon',
    role: 'HR Consultant',
    city: 'Kochi',
    image:
      '/Marketing%20content/Profiles/smiling-woman-in-polka-dot-jacket-in-office-2026-03-25-00-55-20-utc.jpg',
    rating: 4.7,
    reviews: 64,
  },
  {
    name: 'Yuvraj Sinha',
    role: 'CA & Tax Advisor',
    city: 'Delhi',
    image:
      '/Marketing%20content/Profiles/foto%20de%20perfil%20de%20LinkedIn%20hombre%20elegante.png',
    rating: 5.0,
    reviews: 218,
  },
  {
    name: 'Avantika Shah',
    role: 'Wellness Coach',
    city: 'Mumbai',
    image:
      '/Marketing%20content/Profiles/studio-portrait-of-an-attractive-young-businesswom-2026-01-09-11-05-39-utc.jpg',
    rating: 4.9,
    reviews: 175,
  },
  {
    name: 'Lavanya Iyer',
    role: 'Voice Coach',
    city: 'Bengaluru',
    image:
      '/Marketing%20content/Profiles/woman-posing-with-white-top-and-dark-hair-2026-01-09-10-00-53-utc.jpg',
    rating: 4.8,
    reviews: 73,
  },
];

function ExpertCard({ expert }: { expert: Expert }) {
  return (
    <a
      href="https://app.flyrlink.com/"
      className="group relative block w-56 flex-shrink-0 overflow-hidden rounded-2xl shadow-md shadow-navy-950/5 ring-1 ring-gray-200/70 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/15 hover:ring-brand/30"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={expert.image}
          alt={expert.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />

        {/* Verified badge */}
        <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-brand backdrop-blur">
          <ShieldCheck className="h-3 w-3" />
          Verified
        </span>

        {/* Rating */}
        <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-navy-950/70 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur">
          <Star className="h-3 w-3 fill-amber-300 text-amber-300" />
          {expert.rating}
        </span>

        {/* Footer text */}
        <div className="absolute inset-x-0 bottom-0 p-4 text-white">
          <p className="font-display text-base font-bold leading-tight">
            {expert.name}
          </p>
          <p className="mt-0.5 text-xs text-white/80">{expert.role}</p>
          <p className="mt-2 text-[10px] font-semibold tracking-[0.22em] text-white/60">
            {expert.city.toUpperCase()} · {expert.reviews} REVIEWS
          </p>
        </div>
      </div>
    </a>
  );
}

function MarqueeRow({
  experts,
  direction,
  duration,
}: {
  experts: Expert[];
  direction: 'left' | 'right';
  duration: number;
}) {
  const animationClass =
    direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';

  return (
    <div className="group relative overflow-hidden">
      <div
        className={`flex gap-5 ${animationClass} group-hover:[animation-play-state:paused]`}
        style={{ animationDuration: `${duration}s`, width: 'max-content' }}
      >
        {[...experts, ...experts].map((expert, i) => (
          <ExpertCard key={`${expert.name}-${i}`} expert={expert} />
        ))}
      </div>
    </div>
  );
}

export default function MeetOurExperts() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-28">
      {/* Background accents */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-brand/5 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-brand/5 blur-[120px]" />

      <div
        ref={ref}
        className={`relative mx-auto max-w-7xl px-6 reveal ${isVisible ? 'revealed' : ''}`}
      >
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <div className="mb-3 text-[11px] font-semibold tracking-[0.28em] text-gray-400">
            MEET OUR EXPERTS
          </div>
          <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-navy-900 md:text-5xl lg:text-6xl">
            500+ verified pros,{' '}
            <span className="font-serif italic font-medium text-brand">
              one tap away.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-gray-600 md:text-lg">
            From wellness to weddings, photography to tax filing - real Indian
            experts, vetted by humans, rated by clients.
          </p>
        </div>

        {/* Stats strip */}
        <div className="mx-auto mb-12 grid max-w-3xl grid-cols-3 divide-x divide-gray-200 rounded-2xl border border-gray-200/70 bg-white/60 p-4 backdrop-blur md:mb-14">
          <div className="text-center">
            <p className="font-display text-2xl font-bold text-navy-900 md:text-3xl">
              500+
            </p>
            <p className="mt-1 text-[10px] font-semibold tracking-[0.22em] text-gray-400">
              VERIFIED EXPERTS
            </p>
          </div>
          <div className="text-center">
            <p className="font-display text-2xl font-bold text-navy-900 md:text-3xl">
              12
            </p>
            <p className="mt-1 text-[10px] font-semibold tracking-[0.22em] text-gray-400">
              CATEGORIES
            </p>
          </div>
          <div className="text-center">
            <p className="font-display text-2xl font-bold text-navy-900 md:text-3xl">
              4.9★
            </p>
            <p className="mt-1 text-[10px] font-semibold tracking-[0.22em] text-gray-400">
              AVG RATING
            </p>
          </div>
        </div>
      </div>

      {/* Marquee rows (full bleed) */}
      <div className="space-y-5">
        <MarqueeRow experts={ROW_ONE} direction="left" duration={60} />
        <MarqueeRow experts={ROW_TWO} direction="right" duration={70} />
      </div>

      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-white to-transparent md:block" />
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-l from-white to-transparent md:block" />

      {/* CTA */}
      <div className="relative mx-auto mt-14 max-w-7xl px-6 text-center md:mt-16">
        <a
          href="https://app.flyrlink.com/"
          className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition-all duration-300 hover:bg-brand-600 hover:shadow-brand/50"
        >
          Browse all experts
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
}
