# Flyrlink Landing Page - Development Notes

## Project Overview
This is the landing page for Flyrlink, an AI-powered expert network platform built with:
- React 18 + TypeScript
- Vite for bundling
- TailwindCSS for styling
- React Router for navigation
- React Query for data fetching
- React Helmet Async for SEO

## Key Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Project Structure
```
src/
├── components/      # Reusable UI components
├── config/         # Configuration files and constants
├── services/       # API services
├── utils/          # Utility functions
├── views/          # Page components (routes)
└── App.tsx         # Main app component with routing
```

## Recent Optimizations
1. **Technical Debt Removal**
   - Removed duplicate `/src/pages` directory (using `/src/views` for routes)
   - Consolidated 3 toast libraries into single shadcn toast
   - Removed unused dependencies (react-toastify, sonner, googleapis, next)
   - Fixed all TypeScript linting errors

2. **Performance Improvements**
   - Implemented React.lazy() for route-based code splitting
   - Added React.memo() to major components
   - Created reusable LoadingSpinner component
   - Moved constants to centralized config

3. **Error Handling**
   - Added global ErrorBoundary component
   - Improved API error handling
   - Removed all console.log statements

4. **SEO Enhancements**
   - Dynamic meta tags with React Helmet
   - Structured data (Schema.org)
   - Sitemap.xml generation
   - Image optimization with lazy loading

## Environment Variables
Copy `.env.example` to `.env` and configure:
- `VITE_BLOG_API_URL` - Blog API endpoint
- `VITE_BLOG_USER_ID` - User ID for blog posts
- `VITE_SITE_URL` - Production site URL

## API Endpoints
- Blog Posts: `https://api.foundershub.ai/api/blog/blogs/user_blogs/`
- Waiting List: `https://api.foundershub.ai/api/v2/templates/ingest/cavzfgZsRTKyHnPgkb3uyYYOfCctKebx3KM11pLS/`

## Known Issues
- Blog API returns external image URLs that can't be optimized
- Some UI components export non-component values (causes React Fast Refresh warnings)

## Deployment Notes
- Ensure all environment variables are set in production
- Build outputs to `/dist` directory
- Static hosting compatible (Netlify, Vercel, etc.)