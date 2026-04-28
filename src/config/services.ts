import type { LucideIcon } from 'lucide-react';
import {
  Briefcase,
  Camera,
  Code2,
  Dumbbell,
  Film,
  GraduationCap,
  Megaphone,
  PenLine,
  Shirt,
  Sparkles,
  Trophy,
  Video,
} from 'lucide-react';

export type Category = {
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  icon: LucideIcon;
  iconBg: string;
  iconText: string;
  tone: string;
  services: string[];
};

export type Service = {
  slug: string;
  name: string;
  description: string;
  categories: string[];
  startingPrice: number;
};

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

const RAW: { category: string; name: string; price?: number }[] = [
  // Education (12)
  { category: 'Education', name: 'AI Expert', price: 1499 },
  { category: 'Education', name: 'Student Peer', price: 299 },
  { category: 'Education', name: 'Academic Tutor', price: 499 },
  { category: 'Education', name: 'Subject Expert', price: 599 },
  { category: 'Education', name: 'Soft Skills', price: 599 },
  { category: 'Education', name: 'Public Speaking', price: 799 },
  { category: 'Education', name: 'Competitive Exams', price: 699 },
  { category: 'Education', name: 'Study Abroad', price: 1299 },
  { category: 'Education', name: 'Language Expert', price: 599 },
  { category: 'Education', name: 'Career Guidance', price: 999 },
  { category: 'Education', name: 'Interview Prep', price: 999 },
  { category: 'Education', name: 'Articles Guidance', price: 599 },

  // Fitness (9)
  { category: 'Fitness', name: 'Fitness Coach', price: 599 },
  { category: 'Fitness', name: 'Gym Trainer', price: 499 },
  { category: 'Fitness', name: 'Nutrition Coach', price: 799 },
  { category: 'Fitness', name: 'Wellness Guidance', price: 699 },
  { category: 'Fitness', name: 'Yoga Trainer', price: 499 },
  { category: 'Fitness', name: 'Meditation', price: 399 },
  { category: 'Fitness', name: 'Pilates Trainer', price: 599 },
  { category: 'Fitness', name: 'Zumba Fitness', price: 499 },
  { category: 'Fitness', name: 'Weight Coach', price: 699 },

  // Sports (5)
  { category: 'Sports', name: 'Sports Coach', price: 799 },
  { category: 'Sports', name: 'Esports & Gaming', price: 599 },
  { category: 'Sports', name: 'Sports Peers', price: 399 },
  { category: 'Sports', name: 'Sports Analytics', price: 1299 },
  { category: 'Sports', name: 'Sports Strategy Mentor', price: 1499 },

  // Tech & IT (11)
  { category: 'Tech & IT', name: 'Web Development', price: 2499 },
  { category: 'Tech & IT', name: 'App Development', price: 2999 },
  { category: 'Tech & IT', name: 'Logo Design', price: 1499 },
  { category: 'Tech & IT', name: 'Animation & 3D', price: 2499 },
  { category: 'Tech & IT', name: 'Tech Copywriting', price: 999 },
  { category: 'Tech & IT', name: 'IT Services', price: 1499 },
  { category: 'Tech & IT', name: 'Data Solutions', price: 1999 },
  { category: 'Tech & IT', name: 'AI Expert', price: 1999 },
  { category: 'Tech & IT', name: 'Tech Consulting', price: 1999 },
  { category: 'Tech & IT', name: 'UX Design', price: 1999 },
  { category: 'Tech & IT', name: 'Programming & Coding', price: 1999 },

  // Photography (6)
  { category: 'Photography', name: 'Product Photography', price: 1999 },
  { category: 'Photography', name: 'Fashion Photography', price: 2499 },
  { category: 'Photography', name: 'Media Editing', price: 999 },
  { category: 'Photography', name: 'Photography Training', price: 999 },
  { category: 'Photography', name: 'Film Editing', price: 1499 },
  { category: 'Photography', name: 'Animation & 3D', price: 2499 },

  // Beauty (4)
  { category: 'Beauty', name: 'Beauty Consulting', price: 999 },
  { category: 'Beauty', name: "Women's Care", price: 799 },
  { category: 'Beauty', name: "Men's Care", price: 699 },
  { category: 'Beauty', name: 'Beauty Training', price: 1299 },

  // Fashion (4)
  { category: 'Fashion', name: 'Model Consulting', price: 1499 },
  { category: 'Fashion', name: 'Fashion Consulting', price: 1299 },
  { category: 'Fashion', name: 'Branding Model', price: 1999 },
  { category: 'Fashion', name: 'Fashion Influencer', price: 1499 },

  // Business (12)
  { category: 'Business', name: 'Business Expert', price: 1999 },
  { category: 'Business', name: 'Operations Expert', price: 1499 },
  { category: 'Business', name: 'Startups Validation', price: 1999 },
  { category: 'Business', name: 'Financial Guidance', price: 1499 },
  { category: 'Business', name: 'Accounting Services', price: 1299 },
  { category: 'Business', name: 'Tax Consulting', price: 1299 },
  { category: 'Business', name: 'Legal Advisory', price: 1999 },
  { category: 'Business', name: 'HR Services', price: 1499 },
  { category: 'Business', name: 'Market Validation', price: 1999 },
  { category: 'Business', name: 'Business Setup', price: 2499 },
  { category: 'Business', name: 'Pitch Decks', price: 2499 },
  { category: 'Business', name: 'Sales Consulting', price: 1499 },

  // Entertainment (5)
  { category: 'Entertainment', name: 'Actors', price: 1999 },
  { category: 'Entertainment', name: 'Stage Performers', price: 1999 },
  { category: 'Entertainment', name: 'Music Composer', price: 1999 },
  { category: 'Entertainment', name: 'Voice & Dubbing', price: 1499 },
  { category: 'Entertainment', name: 'Script Writing', price: 1499 },

  // Digital Marketing (6)
  { category: 'Digital Marketing', name: 'Email Marketing', price: 999 },
  { category: 'Digital Marketing', name: 'Bloggers', price: 599 },
  { category: 'Digital Marketing', name: 'SEO Services', price: 1499 },
  { category: 'Digital Marketing', name: 'Social Marketing', price: 1299 },
  { category: 'Digital Marketing', name: 'Ads Management', price: 1999 },
  { category: 'Digital Marketing', name: 'Content Writing', price: 799 },

  // Writing & Translation (8)
  { category: 'Writing & Translation', name: 'Content Writing', price: 799 },
  { category: 'Writing & Translation', name: 'Copywriting', price: 999 },
  { category: 'Writing & Translation', name: 'Script Writing', price: 1499 },
  { category: 'Writing & Translation', name: 'Bloggers', price: 599 },
  { category: 'Writing & Translation', name: 'Book Writing', price: 1999 },
  { category: 'Writing & Translation', name: 'Translation Services', price: 799 },
  { category: 'Writing & Translation', name: 'Proofreading & Editing', price: 599 },
  { category: 'Writing & Translation', name: 'Academic Writing', price: 999 },

  // Creators & Influencers (7)
  { category: 'Creators & Influencers', name: 'Influencer', price: 1499 },
  { category: 'Creators & Influencers', name: 'Content Creator', price: 1499 },
  { category: 'Creators & Influencers', name: 'UGC Creators', price: 1999 },
  { category: 'Creators & Influencers', name: 'YouTube Creator', price: 1999 },
  { category: 'Creators & Influencers', name: 'Influencer Guidance', price: 1499 },
  { category: 'Creators & Influencers', name: 'Product Creators', price: 1999 },
  { category: 'Creators & Influencers', name: 'Brand Creators', price: 1999 },
];

const CATEGORY_META: Record<
  string,
  {
    icon: LucideIcon;
    iconBg: string;
    iconText: string;
    tone: string;
    shortDescription: string;
    longDescription: string;
  }
> = {
  Education: {
    icon: GraduationCap,
    iconBg: 'bg-blue-100',
    iconText: 'text-blue-600',
    tone: 'from-blue-50 to-white',
    shortDescription: 'Tutors, coaches, and learning experts for every age and goal.',
    longDescription:
      'From board exam prep to study-abroad guidance and career coaching, find verified experts who help you learn faster and grow further.',
  },
  Fitness: {
    icon: Dumbbell,
    iconBg: 'bg-rose-100',
    iconText: 'text-rose-600',
    tone: 'from-rose-50 to-white',
    shortDescription: 'Trainers, coaches, and wellness experts to help you feel your best.',
    longDescription:
      'Yoga, gym, nutrition, pilates, and more. Book 1:1 sessions with verified trainers who fit your goals, schedule, and budget.',
  },
  Sports: {
    icon: Trophy,
    iconBg: 'bg-orange-100',
    iconText: 'text-orange-600',
    tone: 'from-orange-50 to-white',
    shortDescription: 'Coaches, mentors, and analytics experts for athletes at every level.',
    longDescription:
      'Whether you play for fun or compete seriously, find sports coaches and mentors who can sharpen your game.',
  },
  'Tech & IT': {
    icon: Code2,
    iconBg: 'bg-indigo-100',
    iconText: 'text-indigo-600',
    tone: 'from-indigo-50 to-white',
    shortDescription: 'Developers, designers, and tech consultants for your next project.',
    longDescription:
      'Web and app development, AI, UX, animation, IT services. Hire vetted tech pros for one-off projects or ongoing engagements.',
  },
  Photography: {
    icon: Camera,
    iconBg: 'bg-amber-100',
    iconText: 'text-amber-600',
    tone: 'from-amber-50 to-white',
    shortDescription: 'Photographers, editors, and visual storytellers for any moment.',
    longDescription:
      'Product, fashion, film, and editing pros. Book a session for your shoot or learn the craft from a trainer.',
  },
  Beauty: {
    icon: Sparkles,
    iconBg: 'bg-pink-100',
    iconText: 'text-pink-600',
    tone: 'from-pink-50 to-white',
    shortDescription: 'Stylists, consultants, and beauty experts for everyday confidence.',
    longDescription:
      "Makeup, skincare, hair, and grooming guidance from verified beauty pros. For weddings, daily routine, or learning the trade.",
  },
  Fashion: {
    icon: Shirt,
    iconBg: 'bg-violet-100',
    iconText: 'text-violet-600',
    tone: 'from-violet-50 to-white',
    shortDescription: 'Stylists, models, and fashion consultants to elevate your look.',
    longDescription:
      'Personal styling, model consulting, and fashion direction from people who actually work in the industry.',
  },
  Business: {
    icon: Briefcase,
    iconBg: 'bg-slate-100',
    iconText: 'text-slate-700',
    tone: 'from-slate-50 to-white',
    shortDescription: 'Consultants, advisors, and operators to grow your business.',
    longDescription:
      'Tax, legal, HR, sales, pitch decks, and business setup. Get expert help when you need it, without retainers.',
  },
  Entertainment: {
    icon: Film,
    iconBg: 'bg-purple-100',
    iconText: 'text-purple-600',
    tone: 'from-purple-50 to-white',
    shortDescription: 'Actors, performers, and creatives to bring your vision to life.',
    longDescription:
      'Voice artists, actors, music composers, and stage performers. Book talent for your project or learn from a working pro.',
  },
  'Digital Marketing': {
    icon: Megaphone,
    iconBg: 'bg-emerald-100',
    iconText: 'text-emerald-600',
    tone: 'from-emerald-50 to-white',
    shortDescription: 'Marketers, SEO experts, and ads pros to grow your audience.',
    longDescription:
      'SEO, social, email, content, and paid ads. Hire vetted marketers for one-off campaigns or growth retainers.',
  },
  'Writing & Translation': {
    icon: PenLine,
    iconBg: 'bg-teal-100',
    iconText: 'text-teal-600',
    tone: 'from-teal-50 to-white',
    shortDescription: 'Writers, editors, and translators for any kind of content.',
    longDescription:
      'Content, copy, scripts, books, and translation. Match with the right voice for your project, fast.',
  },
  'Creators & Influencers': {
    icon: Video,
    iconBg: 'bg-fuchsia-100',
    iconText: 'text-fuchsia-600',
    tone: 'from-fuchsia-50 to-white',
    shortDescription: 'Content creators, UGC experts, and influencers to amplify your brand.',
    longDescription:
      'Hire YouTubers, UGC creators, and influencers. Or get advice from creators who built audiences from scratch.',
  },
};

function buildServiceDescription(name: string): string {
  return `Looking for a verified ${name}? Book a 1:1 session on Flyrlink with real ratings, secure payments, and free chat before you book.`;
}

function buildData() {
  const serviceMap = new Map<string, Service>();
  const categoryMap = new Map<string, string[]>();

  for (const item of RAW) {
    const slug = slugify(item.name);
    const existing = serviceMap.get(slug);
    if (existing) {
      if (!existing.categories.includes(item.category)) {
        existing.categories.push(item.category);
      }
    } else {
      serviceMap.set(slug, {
        slug,
        name: item.name,
        description: buildServiceDescription(item.name),
        categories: [item.category],
        startingPrice: item.price ?? 499,
      });
    }
    const list = categoryMap.get(item.category) ?? [];
    if (!list.includes(slug)) list.push(slug);
    categoryMap.set(item.category, list);
  }

  const categories: Category[] = Object.entries(CATEGORY_META).map(
    ([name, meta]) => ({
      slug: slugify(name),
      name,
      shortDescription: meta.shortDescription,
      longDescription: meta.longDescription,
      icon: meta.icon,
      iconBg: meta.iconBg,
      iconText: meta.iconText,
      tone: meta.tone,
      services: categoryMap.get(name) ?? [],
    })
  );

  const services = Array.from(serviceMap.values()).sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return { categories, services };
}

const built = buildData();

export const CATEGORIES: Category[] = built.categories;
export const SERVICES: Service[] = built.services;
export const TOTAL_SERVICE_COUNT = RAW.length; // 89

export function findCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function findService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getServicesForCategory(categorySlug: string): Service[] {
  const category = findCategory(categorySlug);
  if (!category) return [];
  return category.services
    .map((s) => findService(s))
    .filter((s): s is Service => Boolean(s));
}

export type SearchHit =
  | { type: 'category'; slug: string; name: string; subtitle: string }
  | {
      type: 'service';
      slug: string;
      name: string;
      subtitle: string;
      price: number;
    };

export function searchAll(query: string, limit = 6): SearchHit[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const hits: { score: number; hit: SearchHit }[] = [];

  for (const c of CATEGORIES) {
    const idx = c.name.toLowerCase().indexOf(q);
    if (idx >= 0) {
      hits.push({
        score: idx === 0 ? 0 : idx + 100,
        hit: {
          type: 'category',
          slug: c.slug,
          name: c.name,
          subtitle: `${c.services.length} services`,
        },
      });
    }
  }

  for (const s of SERVICES) {
    const idx = s.name.toLowerCase().indexOf(q);
    if (idx >= 0) {
      hits.push({
        score: 200 + (idx === 0 ? 0 : idx + 100),
        hit: {
          type: 'service',
          slug: s.slug,
          name: s.name,
          subtitle: s.categories.join(' · '),
          price: s.startingPrice,
        },
      });
    }
  }

  return hits
    .sort((a, b) => a.score - b.score)
    .slice(0, limit)
    .map((h) => h.hit);
}
