import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Clock,
  Eye,
  Heart,
  Sparkles,
} from 'lucide-react';
import { formatDate, extractExcerpt, calculateReadTime } from '@/utils/blog';
import { API_CONFIG } from '@/config/constants';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Discover industry insights, expert advice, and professional tips from verified consultants and thought leaders. Read the latest articles on business, technology, career growth, and more.',
  keywords:
    'expert blog, industry insights, professional advice, business articles, technology insights, career tips, expert knowledge, consultant blog, thought leadership',
};

interface BlogPostUser {
  uid: string;
  username: string;
  email: string;
  profile_image: string;
}

interface BlogPost {
  uid: string;
  title: string;
  description: string;
  meta_title: string;
  meta_description: string;
  banner_image: string;
  view_count: number;
  like_count: number;
  comment_count: number;
  created_at: string;
  user: BlogPostUser;
}

interface BlogResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: BlogPost[];
}

async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(
      `${API_CONFIG.BLOG_API_URL}?page=1&page_size=100&user_uid=${API_CONFIG.BLOG_USER_ID}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) return [];

    const data: BlogResponse = await res.json();
    return data.results;
  } catch {
    return [];
  }
}

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();
  const featuredPost = blogPosts[0] ?? null;
  const remainingPosts = blogPosts.slice(1);

  return (
    <div className="bg-white">
      {/* --- HERO --- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-white py-20 md:py-28">
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 select-none font-serif italic font-medium leading-none text-brand/[0.05]"
          style={{ fontSize: 'clamp(140px, 20vw, 280px)' }}
        >
          insights
        </span>

        <div className="relative mx-auto max-w-6xl px-6">
          {/* Meta bar */}
          <div className="mb-10 flex items-center justify-between text-[10px] font-semibold tracking-[0.28em] text-gray-400">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
                FRESH READS
              </span>
              <span className="hidden h-3 w-px bg-gray-200 md:inline-block" />
              <span className="hidden md:inline">VOL 01 · FLYRLINK 2026</span>
            </div>
            <span>
              {blogPosts.length} {blogPosts.length === 1 ? 'ARTICLE' : 'ARTICLES'}
            </span>
          </div>

          <div className="grid items-end gap-8 md:grid-cols-[1.4fr_1fr] md:gap-14">
            <div>
              <div className="mb-4 text-[11px] font-semibold tracking-[0.28em] text-gray-400">
                FLYRLINK INSIGHTS
              </div>
              <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-navy-900 md:text-6xl lg:text-7xl">
                Stories worth{' '}
                <span className="font-serif italic font-medium text-brand">
                  your time.
                </span>
              </h1>
            </div>
            <div>
              <p className="text-base leading-relaxed text-gray-600 md:text-lg">
                Insights, playbooks and expert advice from the people who ship -
                designed to help you find, hire and grow with the right people.
              </p>
              <div className="mt-5 text-[10px] font-semibold tracking-[0.22em] text-gray-400">
                UPDATED WEEKLY
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 pb-20">
        {/* --- EMPTY STATE --- */}
        {blogPosts.length === 0 && (
          <div className="relative overflow-hidden rounded-2xl border border-gray-200/70 bg-white p-12 text-center md:p-16">
            <div className="pointer-events-none absolute -top-16 left-1/2 h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />
            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-700 text-white shadow-xl shadow-brand/30">
                <Sparkles className="h-6 w-6" />
              </div>
              <div className="mt-6 text-[11px] font-semibold tracking-[0.28em] text-gray-400">
                COMING SOON
              </div>
              <h2 className="mt-3 font-display text-2xl font-bold text-navy-900 md:text-3xl">
                No articles yet,{' '}
                <span className="font-serif italic font-medium text-brand">
                  just wait.
                </span>
              </h2>
              <p className="mx-auto mt-3 max-w-md text-gray-600">
                We&apos;re cooking insights, tips, and expert advice. Check back
                soon - the best stuff is being written right now.
              </p>
              <Link
                href="/"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-navy-900/20 transition-all duration-300 hover:bg-navy-800 hover:shadow-brand/20"
              >
                Back to home
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-navy-900 transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            </div>
          </div>
        )}

        {/* --- FEATURED POST --- */}
        {featuredPost && (
          <section className="mb-16 md:mb-20">
            <div className="mb-6 flex items-center gap-3 text-[11px] font-semibold tracking-[0.28em] text-gray-400">
              <span className="h-0.5 w-10 rounded-full bg-gradient-to-r from-brand via-brand-300 to-transparent" />
              THE FEATURE
            </div>

            <Link
              href={`/blog/${featuredPost.uid}`}
              className="group relative block overflow-hidden rounded-[2rem] border border-gray-200/70 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/10"
            >
              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 overflow-hidden md:h-full">
                  <Image
                    src={featuredPost.banner_image}
                    alt={featuredPost.title}
                    fill
                    priority
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized
                  />
                  {/* Featured badge */}
                  <div className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-navy-900/90 px-3 py-1 text-[10px] font-bold tracking-[0.22em] text-white backdrop-blur-sm">
                    <Sparkles className="h-3 w-3 text-brand-300" />
                    FEATURED
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
                  <div className="mb-4 flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3 w-3 text-brand" />
                      {formatDate(featuredPost.created_at).toUpperCase()}
                    </span>
                    <span className="text-gray-300">·</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3 w-3 text-brand" />
                      {calculateReadTime(featuredPost.description)}
                    </span>
                  </div>

                  <h2 className="font-display text-2xl font-bold leading-[1.15] tracking-tight text-navy-900 md:text-3xl lg:text-4xl">
                    {featuredPost.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-gray-600">
                    {extractExcerpt(featuredPost.description, 200)}
                  </p>

                  <div className="mt-8 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 text-[11px] tracking-[0.18em] text-gray-400">
                      <span className="flex items-center gap-1.5">
                        <Eye className="h-3.5 w-3.5" />
                        {featuredPost.view_count}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Heart className="h-3.5 w-3.5" />
                        {featuredPost.like_count}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                      Read article
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* --- POSTS GRID --- */}
        {remainingPosts.length > 0 && (
          <section className="mb-16 md:mb-20">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.28em] text-gray-400">
                <span className="h-0.5 w-10 rounded-full bg-gradient-to-r from-brand via-brand-300 to-transparent" />
                LATEST POSTS
              </div>
              <span className="text-[10px] font-semibold tracking-[0.22em] text-gray-400">
                {remainingPosts.length}{' '}
                {remainingPosts.length === 1 ? 'POST' : 'POSTS'}
              </span>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {remainingPosts.map((post, i) => (
                <Link
                  key={post.uid}
                  href={`/blog/${post.uid}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200/70 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/10"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.banner_image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                      unoptimized
                    />
                    {/* Number overlay */}
                    <span className="absolute left-4 top-4 font-serif text-3xl italic font-medium leading-none text-white drop-shadow-md">
                      {String(i + 2).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-5">
                    <div className="mb-2 flex items-center gap-2 text-[10px] font-semibold tracking-[0.22em] text-gray-400">
                      <Calendar className="h-3 w-3 text-brand" />
                      {formatDate(post.created_at).toUpperCase()}
                    </div>
                    <h3 className="font-display text-lg font-bold leading-[1.2] tracking-tight text-navy-900 line-clamp-2 md:text-xl">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-600">
                      {extractExcerpt(post.description)}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                      <div className="flex items-center gap-3 text-[10px] font-semibold tracking-[0.22em] text-gray-400">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {calculateReadTime(post.description)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {post.view_count}
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand">
                        Read
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* --- NEWSLETTER --- */}
        {blogPosts.length > 0 && (
          <section className="relative overflow-hidden rounded-[2rem] bg-navy-950 p-10 md:p-16">
            <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-30" />
            <div className="pointer-events-none absolute -top-20 right-0 h-[320px] w-[320px] rounded-full bg-brand/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 left-0 h-[320px] w-[320px] rounded-full bg-brand/10 blur-3xl" />

            <div className="relative grid items-center gap-8 md:grid-cols-[1.3fr_1fr]">
              <div>
                <div className="mb-3 text-[11px] font-semibold tracking-[0.28em] text-brand-300">
                  NEWSLETTER
                </div>
                <h3 className="font-display text-3xl font-bold leading-[1.05] text-white md:text-4xl lg:text-5xl">
                  Stay in the{' '}
                  <span className="font-serif italic font-medium text-brand-300">
                    loop.
                  </span>
                </h3>
                <p className="mt-5 max-w-lg text-gray-400">
                  New insights every week. Playbooks, expert interviews and the
                  stuff we only share with subscribers.
                </p>
                <p className="mt-3 text-[10px] font-semibold tracking-[0.22em] text-gray-500">
                  1,000+ PROFESSIONALS ALREADY SUBSCRIBED
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-gray-500 focus:border-brand focus:outline-none"
                />
                <button
                  type="button"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-navy-950 transition-all duration-300 hover:bg-gray-100"
                >
                  Subscribe
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-navy-950 text-white transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </button>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
