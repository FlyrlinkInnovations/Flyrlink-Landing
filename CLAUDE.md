# Flyrlink Landing Page - Development Notes

## Project Overview
Landing page for Flyrlink, an AI-powered expert network platform built with:
- Next.js 16 (App Router, Turbopack)
- React 18 + TypeScript
- Tailwind CSS v4
- React Query for data fetching
- shadcn/ui components

## Key Commands
```bash
npm run dev      # Start development server (Turbopack)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Project Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout (fonts, metadata, providers)
│   ├── globals.css         # Global styles + Tailwind v4 config
│   ├── error.tsx           # Error boundary
│   ├── loading.tsx         # Loading state
│   ├── not-found.tsx       # 404 page
│   ├── sitemap.ts          # Dynamic sitemap
│   ├── robots.ts           # robots.txt
│   ├── (main)/             # Route group with Navbar + Footer
│   │   ├── layout.tsx      # Navbar + Footer wrapper
│   │   ├── page.tsx        # Homepage (11 sections)
│   │   ├── about/
│   │   ├── blog/
│   │   ├── blog/[id]/
│   │   ├── careers/
│   │   ├── contact/
│   │   ├── faq/
│   │   ├── find-experts/
│   │   ├── waiting-list/
│   │   ├── privacy/
│   │   ├── terms/
│   │   └── affiliate/
│   └── book-call/          # Standalone page (no navbar/footer)
├── components/
│   ├── homepage/           # Homepage-specific sections
│   ├── Calendar/           # Booking calendar components
│   └── ui/                 # shadcn/ui components
├── config/                 # Configuration and constants
├── services/               # API services
├── hooks/                  # Custom React hooks
├── lib/                    # Utility library (cn, etc.)
└── utils/                  # Utility functions
```

## Architecture Notes
- **Server Components** by default; use `'use client'` only when needed (forms, interactivity, hooks)
- **Metadata API** for SEO (export `metadata` or `generateMetadata` per page)
- **Route groups** `(main)` wraps pages with Navbar + Footer
- **JSON-LD** structured data in root layout (Organization, WebSite, WebApplication)
- **ISR** for blog pages (revalidate: 3600)
- **Tailwind v4** with `@config` directive in globals.css pointing to tailwind.config.ts

## Environment Variables
Copy `.env.example` to `.env` and configure:
- `NEXT_PUBLIC_BLOG_API_URL` - Blog API endpoint
- `NEXT_PUBLIC_BLOG_USER_ID` - User ID for blog posts
- `NEXT_PUBLIC_SITE_URL` - Production site URL

## API Endpoints
- Blog Posts: `https://api.foundershub.ai/api/blog/blogs/user_blogs/`
- Waiting List: `https://api.foundershub.ai/api/v2/templates/ingest/cavzfgZsRTKyHnPgkb3uyYYOfCctKebx3KM11pLS/`

## Key External Links
- App: `https://app.flyrlink.com/`
- Contact: `Contact@flyrlink.com`
- Support: `support@flyrlink.com`

## Deployment Notes
- Build outputs to `.next/` directory
- Ensure all `NEXT_PUBLIC_*` env vars are set in production
- Compatible with Vercel, Netlify (with Next.js plugin), or any Node.js hosting
