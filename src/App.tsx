import { lazy, Suspense } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { PageLoadingSpinner } from "@/components/LoadingSpinner";

// Lazy load all route components
const Index = lazy(() => import("@/views/HomePage"));
const FindExperts = lazy(() => import("@/views/FindExpertsPage"));
const About = lazy(() => import("@/views/AboutPage"));
const Contact = lazy(() => import("@/views/ContactPage"));
const NotFound = lazy(() => import("@/views/NotFoundPage"));
const BlogPage = lazy(() => import("@/views/blog/BlogPage"));
const BlogPost = lazy(() => import("@/views/blog/BlogPost"));
const FaqPage = lazy(() => import("@/views/FaqPage"));
const WaitingListPage = lazy(() => import("@/views/WaitingListPage"));
const BookCall = lazy(() => import("@/views/BookCall"));
const CareersPage = lazy(() => import("@/views/CareersPage"));

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <BrowserRouter>
            <Suspense fallback={<PageLoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/find-experts" element={<FindExperts />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/waiting-list" element={<WaitingListPage />} />
                <Route path="/book-call" element={<BookCall />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
  </ErrorBoundary>
);

export default App;
