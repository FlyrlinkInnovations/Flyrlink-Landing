import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, Eye, Heart } from 'lucide-react';
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

    if (!res.ok) {
      return [];
    }

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
    <div className="min-h-screen bg-white pt-8 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Blog Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-brand text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-6 h-px bg-brand/40" />
            Flyrlink Insights
            <span className="w-6 h-px bg-brand/40" />
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-navy-900 mb-6 tracking-tight">
            Our{' '}
            <span className="text-gradient">
              Blog
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Insights, stories, and expert advice to help you connect with professionals and grow
            your career.
          </p>
          <div className="mt-6 text-sm text-gray-500">
            {blogPosts.length} articles &bull; Updated regularly
          </div>
        </div>

        {/* Empty State */}
        {blogPosts.length === 0 && (
          <div className="text-center py-20 mb-16">
            <div className="w-20 h-20 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-10 h-10 text-brand" />
            </div>
            <h2 className="font-display text-2xl font-bold text-navy-900 mb-3">No articles yet</h2>
            <p className="text-gray-500 max-w-md mx-auto mb-8">
              We&apos;re working on bringing you great content. Check back soon for insights, tips, and expert advice.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Back to Home <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200/80 card-premium">
              <div className="md:flex">
                <div className="md:w-1/2 relative h-64 md:h-auto">
                  <Image
                    src={featuredPost.banner_image}
                    alt={featuredPost.title}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized
                  />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-brand/10 text-brand text-xs font-semibold px-3 py-1 rounded-full">
                      Featured
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(featuredPost.created_at)}
                    </div>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-900 mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {extractExcerpt(featuredPost.description, 200)}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {calculateReadTime(featuredPost.description)}
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {featuredPost.view_count}
                      </div>
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {featuredPost.like_count}
                      </div>
                    </div>
                    <Link
                      href={`/blog/${featuredPost.uid}`}
                      className="inline-flex items-center gap-2 bg-brand hover:bg-brand-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                    >
                      Read Article <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        {remainingPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {remainingPosts.map((post) => (
              <div
                key={post.uid}
                className="flex flex-col h-full bg-white rounded-xl border border-gray-200/80 card-premium overflow-hidden"
              >
                {/* Card Image */}
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={post.banner_image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    unoptimized
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                      Article
                    </div>
                  </div>
                </div>

                {/* Card Header */}
                <div className="px-5 pt-5 pb-3">
                  <div className="flex items-center gap-2 mb-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    {formatDate(post.created_at)}
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 leading-tight line-clamp-2">
                    {post.title}
                  </h3>
                </div>

                {/* Card Content */}
                <div className="px-5 pb-3 flex-grow">
                  <p className="text-gray-600 leading-relaxed line-clamp-3">
                    {extractExcerpt(post.description)}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="px-5 py-3 border-t border-gray-100 flex justify-between items-center">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {calculateReadTime(post.description)}
                    </div>
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {post.view_count}
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.uid}`}
                    className="inline-flex items-center gap-1 text-sm text-brand hover:text-brand-600 transition-colors"
                  >
                    Read <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="bg-navy-900 p-8 md:p-12 rounded-2xl shadow-xl text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-4 tracking-tight">Stay in the Loop</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Get the latest insights, tips, and updates delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-6 py-3 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand text-gray-900 placeholder-gray-500"
              />
              <button
                type="button"
                className="bg-brand hover:bg-brand-600 text-white px-8 py-3 font-semibold rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Join 1,000+ professionals already subscribed
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
