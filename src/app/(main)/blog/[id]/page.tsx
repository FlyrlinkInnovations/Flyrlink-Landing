import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, Eye, Heart, Share2, LinkIcon, Twitter, Linkedin } from 'lucide-react';
import { formatDate, extractExcerpt, calculateReadTime } from '@/utils/blog';
import { getLocalPosts } from '@/utils/localBlog';
import { API_CONFIG, SEO_CONFIG } from '@/config/constants';

/* -------------------------------------------------------------------------- */
/*  Types                                                                       */
/* -------------------------------------------------------------------------- */

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
  isLocal?: boolean;
}

interface BlogResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: BlogPost[];
}

/* -------------------------------------------------------------------------- */
/*  Data helpers                                                                */
/* -------------------------------------------------------------------------- */

async function getRemotePosts(): Promise<BlogPost[]> {
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

async function getAllPosts(): Promise<BlogPost[]> {
  const [remote, local] = await Promise.all([
    getRemotePosts(),
    Promise.resolve(getLocalPosts()),
  ]);

  // Merge, newest first.
  return [...local, ...remote].sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
}

async function getPost(id: string): Promise<BlogPost | null> {
  const posts = await getAllPosts();
  return posts.find((p) => p.uid === id) ?? null;
}

async function getRelatedPosts(currentId: string): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter((p) => p.uid !== currentId).slice(0, 3);
}

/* -------------------------------------------------------------------------- */
/*  Static params                                                               */
/* -------------------------------------------------------------------------- */

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ id: p.uid }));
}

/* -------------------------------------------------------------------------- */
/*  Dynamic metadata                                                            */
/* -------------------------------------------------------------------------- */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  const title = post.meta_title || post.title;
  const description = post.meta_description || extractExcerpt(post.description, 160);
  const url = `${SEO_CONFIG.SITE_URL}/blog/${post.uid}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      publishedTime: post.created_at,
      authors: [post.user.username],
      images: post.banner_image
        ? [{ url: post.banner_image, width: 1200, height: 630, alt: title }]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: post.banner_image ? [post.banner_image] : [],
    },
    alternates: {
      canonical: url,
    },
  };
}

/* -------------------------------------------------------------------------- */
/*  Page component                                                              */
/* -------------------------------------------------------------------------- */

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const [post, relatedPosts] = await Promise.all([getPost(id), getRelatedPosts(id)]);

  if (!post) {
    notFound();
  }

  const readTime = calculateReadTime(post.description);
  const pageUrl = `${SEO_CONFIG.SITE_URL}/blog/${post.uid}`;

  /* Schema.org BlogPosting structured data */
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: extractExcerpt(post.description, 160),
    image: post.banner_image,
    datePublished: post.created_at,
    dateModified: post.created_at,
    author: {
      '@type': 'Person',
      name: post.user.username,
      image: post.user.profile_image,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Flyrlink',
      logo: {
        '@type': 'ImageObject',
        url: `${SEO_CONFIG.SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
    interactionStatistic: [
      {
        '@type': 'InteractionCounter',
        interactionType: 'https://schema.org/ViewAction',
        userInteractionCount: post.view_count,
      },
      {
        '@type': 'InteractionCounter',
        interactionType: 'https://schema.org/LikeAction',
        userInteractionCount: post.like_count,
      },
    ],
  };

  const encodedTitle = encodeURIComponent(post.title);
  const encodedUrl = encodeURIComponent(pageUrl);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="min-h-screen bg-white">
        {/* ─── Hero banner ─── */}
        {post.banner_image ? (
          <div className="relative w-full h-[28rem] md:h-[32rem] lg:h-[36rem]">
            <Image
              src={post.banner_image}
              alt={post.title}
              fill
              priority
              className="object-cover object-top"
              sizes="100vw"
              unoptimized
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent" />

            {/* Back button on image */}
            <div className="absolute top-6 left-6 z-10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </Link>
            </div>

            {/* Title & meta overlaid on image */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:px-16">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/90 bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(post.created_at)}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/90 bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                    <Clock className="w-3.5 h-3.5" />
                    {readTime}
                  </span>
                </div>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                  {post.title}
                </h1>
              </div>
            </div>
          </div>
        ) : (
          /* No banner — dark header block */
          <div className="bg-navy-950 pt-24 pb-16 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </Link>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-300 bg-white/10 px-3 py-1.5 rounded-full">
                  <Calendar className="w-3.5 h-3.5" />
                  {formatDate(post.created_at)}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-300 bg-white/10 px-3 py-1.5 rounded-full">
                  <Clock className="w-3.5 h-3.5" />
                  {readTime}
                </span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                {post.title}
              </h1>
            </div>
          </div>
        )}

        {/* ─── Article body ─── */}
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
          {/* Author + stats bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-6 border-b border-gray-100">
            {/* Author */}
            <div className="flex items-center gap-3">
              {post.user.profile_image ? (
                <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-brand/20 flex-shrink-0">
                  <Image
                    src={post.user.profile_image}
                    alt={post.user.username}
                    fill
                    className="object-cover object-top"
                    sizes="44px"
                    unoptimized
                  />
                </div>
              ) : (
                <div className="w-11 h-11 rounded-full bg-brand/10 flex items-center justify-center ring-2 ring-brand/20 flex-shrink-0">
                  <span className="text-brand font-semibold text-sm">
                    {post.user.username.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
              <div>
                <p className="text-sm font-semibold text-gray-900">{post.user.username}</p>
                <p className="text-xs text-gray-500">{formatDate(post.created_at)}</p>
              </div>
            </div>

            {/* Stats + Share */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <Eye className="w-4 h-4" />
                  {post.view_count.toLocaleString()}
                </span>
                <span className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4" />
                  {post.like_count.toLocaleString()}
                </span>
              </div>
              <div className="h-5 w-px bg-gray-200" />
              <div className="flex items-center gap-1">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-brand hover:bg-brand/5 rounded-lg transition-colors"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-brand hover:bg-brand/5 rounded-lg transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* ─── Content ─── */}
          <div
            className="prose-blog py-10"
            dangerouslySetInnerHTML={{ __html: post.description }}
          />

          {/* ─── Bottom share bar ─── */}
          <div className="border-t border-gray-100 py-8">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500 font-medium">Share this article</p>
              <div className="flex items-center gap-2">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-brand bg-gray-50 hover:bg-brand/5 rounded-lg transition-colors border border-gray-200 hover:border-brand/30"
                >
                  <Twitter className="w-4 h-4" /> Twitter
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-brand bg-gray-50 hover:bg-brand/5 rounded-lg transition-colors border border-gray-200 hover:border-brand/30"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* ─── Author card ─── */}
          <div className="border-t border-gray-100 py-10">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-start gap-5">
              {post.user.profile_image ? (
                <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-brand/20 flex-shrink-0">
                  <Image
                    src={post.user.profile_image}
                    alt={post.user.username}
                    fill
                    className="object-cover object-top"
                    sizes="64px"
                    unoptimized
                  />
                </div>
              ) : (
                <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center ring-2 ring-brand/20 flex-shrink-0">
                  <span className="text-brand font-bold text-xl">
                    {post.user.username.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
              <div>
                <p className="text-xs font-medium text-brand uppercase tracking-wider mb-1">Written by</p>
                <h3 className="font-display text-lg font-bold text-navy-900 mb-1">{post.user.username}</h3>
                <p className="text-sm text-gray-500 mb-3">{post.user.email}</p>
                <Link
                  href="/blog"
                  className="inline-flex items-center text-sm font-medium text-brand hover:text-brand-700 transition-colors"
                >
                  View all posts &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Related Posts ─── */}
        {relatedPosts.length > 0 && (
          <div className="bg-gray-50 border-t border-gray-100">
            <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 py-20">
              <div className="text-center mb-12">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand mb-2">Keep Reading</p>
                <h2 className="font-display text-3xl font-bold text-navy-900 tracking-tight">
                  You might also like
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.uid}
                    href={`/blog/${related.uid}`}
                    className="group block"
                  >
                    <div className="bg-white rounded-xl border border-gray-200/80 card-premium overflow-hidden h-full flex flex-col">
                      {related.banner_image ? (
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={related.banner_image}
                            alt={related.title}
                            fill
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            unoptimized
                          />
                        </div>
                      ) : (
                        <div className="h-48 bg-navy-900 flex items-center justify-center px-6">
                          <p className="text-white/60 font-display font-semibold text-center text-sm">
                            {related.title}
                          </p>
                        </div>
                      )}
                      <div className="p-5 flex flex-col flex-1">
                        <h3 className="font-display font-semibold text-navy-900 group-hover:text-brand transition-colors mb-2 line-clamp-2 leading-snug">
                          {related.title}
                        </h3>
                        <p className="text-sm text-gray-500 mb-4 line-clamp-2 flex-1">
                          {extractExcerpt(related.description, 100)}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-gray-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {formatDate(related.created_at)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {calculateReadTime(related.description)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ─── CTA banner ─── */}
        <div className="bg-navy-950">
          <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
              Connect with top experts on Flyrlink
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Join thousands of professionals using AI-powered expert matching to grow their careers and businesses.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/waiting-list"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-brand text-white font-semibold hover:bg-brand-600 transition-colors text-sm"
              >
                Join the Waiting List
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors text-sm"
              >
                Explore More Articles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
