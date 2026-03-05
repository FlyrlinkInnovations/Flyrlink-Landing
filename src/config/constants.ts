// API Configuration
export const API_CONFIG = {
  BLOG_API_URL: process.env.NEXT_PUBLIC_BLOG_API_URL || 'https://api.leorix.com/api/blog/blogs/user_blogs/',
  BLOG_USER_ID: process.env.NEXT_PUBLIC_BLOG_USER_ID || '7e2e8b8dbcd98eac',
  BLOG_BASE_URL: process.env.NEXT_PUBLIC_BLOG_BASE_URL || 'https://app.leorix.com/user/blogs/',
  GOOGLE_SCRIPT_URL: process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL || '',
} as const;

// Reading Configuration
export const READING_CONFIG = {
  WORDS_PER_MINUTE: 200,
  EXCERPT_LENGTH: 150,
  MIN_READ_TIME: 1,
} as const;

// UI Configuration
export const UI_CONFIG = {
  COUNTDOWN_SECONDS: 15,
  TOAST_DURATION: 5000,
  ANIMATION_DURATION: 300,
  DEBOUNCE_DELAY: 500,
} as const;

// SEO Configuration
export const SEO_CONFIG = {
  SITE_NAME: 'Flyrlink',
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://flyrlink.com',
  DEFAULT_OG_IMAGE: '/og-image.jpg',
  TWITTER_HANDLE: '@flyrlink',
} as const;

// Feature Flags
export const FEATURES = {
  ENABLE_ANALYTICS: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
  ENABLE_ERROR_LOGGING: process.env.NEXT_PUBLIC_ENABLE_ERROR_LOGGING === 'true',
} as const;
