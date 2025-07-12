// API Configuration
export const API_CONFIG = {
  BLOG_API_URL: import.meta.env.VITE_BLOG_API_URL || 'https://api.foundershub.ai/api/blog/blogs/user_blogs/',
  BLOG_USER_ID: import.meta.env.VITE_BLOG_USER_ID || '7e2e8b8dbcd98eac',
  BLOG_BASE_URL: import.meta.env.VITE_BLOG_BASE_URL || 'https://app.foundershub.ai/user/blogs/',
  GOOGLE_SCRIPT_URL: import.meta.env.VITE_GOOGLE_SCRIPT_URL || '',
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
  SITE_URL: import.meta.env.VITE_SITE_URL || 'https://flyrlink.com',
  DEFAULT_OG_IMAGE: '/og-image.jpg',
  TWITTER_HANDLE: '@flyrlink',
} as const;

// Feature Flags
export const FEATURES = {
  ENABLE_ANALYTICS: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  ENABLE_ERROR_LOGGING: import.meta.env.VITE_ENABLE_ERROR_LOGGING === 'true',
} as const;