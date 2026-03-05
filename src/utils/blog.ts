import { READING_CONFIG } from '@/config/constants';

export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return 'Invalid date';
    }
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch {
    return 'Invalid date';
  }
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
}

export function extractExcerpt(htmlContent: string, maxLength: number = READING_CONFIG.EXCERPT_LENGTH): string {
  const textContent = stripHtml(htmlContent);

  if (textContent.length <= maxLength) {
    return textContent;
  }

  return textContent.substring(0, maxLength).trim() + '...';
}

export function calculateReadTime(content: string): string {
  const text = stripHtml(content);
  const words = text.trim().split(/\s+/).length;
  const readTime = Math.max(READING_CONFIG.MIN_READ_TIME, Math.ceil(words / READING_CONFIG.WORDS_PER_MINUTE));

  return `${readTime} min read`;
}
