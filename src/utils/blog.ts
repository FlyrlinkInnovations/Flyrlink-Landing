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

export function extractExcerpt(htmlContent: string, maxLength: number = READING_CONFIG.EXCERPT_LENGTH): string {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = htmlContent;
  const textContent = tempDiv.textContent || tempDiv.innerText || '';
  
  if (textContent.length <= maxLength) {
    return textContent;
  }
  
  return textContent.substring(0, maxLength).trim() + '...';
}

export function calculateReadTime(content: string): string {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = content;
  const text = tempDiv.textContent || tempDiv.innerText || '';
  const words = text.trim().split(/\s+/).length;
  const readTime = Math.max(READING_CONFIG.MIN_READ_TIME, Math.ceil(words / READING_CONFIG.WORDS_PER_MINUTE));
  
  return `${readTime} min read`;
}