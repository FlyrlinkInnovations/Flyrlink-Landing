import type { MetadataRoute } from 'next';
import { API_CONFIG } from '@/config/constants';
import { getLocalPosts } from '@/utils/localBlog';

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://flyrlink.com';

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/careers`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/waiting-list`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/book-call`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/find-experts`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/affiliate`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ];

  // Fetch blog posts for dynamic routes
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const res = await fetch(
      `${API_CONFIG.BLOG_API_URL}?page=1&page_size=100&user_uid=${API_CONFIG.BLOG_USER_ID}`,
      { next: { revalidate: 3600 } }
    );
    if (res.ok) {
      const data = await res.json();
      const posts = data.results || data || [];
      blogRoutes = posts.map((post: any) => ({
        url: `${baseUrl}/blog/${post.uid}`,
        lastModified: new Date(post.updated_at || post.created_at),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
      }));
    }
  } catch {
    // If blog fetch fails, proceed without blog routes
  }

  // Local markdown blog posts
  const localBlogRoutes: MetadataRoute.Sitemap = getLocalPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.uid}`,
    lastModified: new Date(post.created_at),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...localBlogRoutes, ...blogRoutes];
}
