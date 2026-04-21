import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export interface BlogPostUser {
  uid: string;
  username: string;
  email: string;
  profile_image: string;
}

export interface BlogPost {
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
  /** Marker set on locally-authored posts so the UI / metadata layer
      can identify them. */
  isLocal?: boolean;
}

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog');

const DEFAULT_AUTHOR: BlogPostUser = {
  uid: 'flyrlink-team',
  username: 'Flyrlink Team',
  email: 'Contact@flyrlink.com',
  profile_image: '/icon.svg',
};

type Frontmatter = {
  slug?: string;
  title?: string;
  meta_title?: string;
  meta_description?: string;
  banner_image?: string;
  author?: string;
  published_at?: string | Date;
};

function toIsoDate(value: string | Date | undefined): string {
  if (!value) return new Date().toISOString();
  const d = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(d.getTime())) return new Date().toISOString();
  return d.toISOString();
}

/**
 * Read all locally-authored markdown posts from /content/blog.
 * Returns them in the same shape as the remote API for easy merging.
 */
export function getLocalPosts(): BlogPost[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));

  const posts: BlogPost[] = files.map((file) => {
    const filePath = path.join(CONTENT_DIR, file);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(raw);
    const fm = data as Frontmatter;

    const slug = (fm.slug ?? file.replace(/\.(md|mdx)$/, '')).trim();
    const title = fm.title ?? slug;
    const html = marked.parse(content, { async: false }) as string;
    const created_at = toIsoDate(fm.published_at);

    const author: BlogPostUser = fm.author
      ? { ...DEFAULT_AUTHOR, username: fm.author }
      : DEFAULT_AUTHOR;

    return {
      uid: slug,
      title,
      description: html,
      meta_title: fm.meta_title ?? title,
      meta_description: fm.meta_description ?? '',
      banner_image: fm.banner_image ?? '/1.png',
      view_count: 0,
      like_count: 0,
      comment_count: 0,
      created_at,
      user: author,
      isLocal: true,
    };
  });

  // Newest first
  return posts.sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
}

/**
 * Get a single local post by slug.
 */
export function getLocalPost(slug: string): BlogPost | null {
  return getLocalPosts().find((p) => p.uid === slug) ?? null;
}
