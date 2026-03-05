import type { Metadata } from 'next';
import { Search, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Find Experts',
  description: 'Browse and connect with verified experts across 12+ categories on Flyrlink. AI-powered matching for business, career, technology, health, and more.',
};

const categories = [
  { name: 'Business & Finance', count: 250, icon: '💼' },
  { name: 'Career & Coaching', count: 180, icon: '🎯' },
  { name: 'Creative & Design', count: 150, icon: '🎨' },
  { name: 'Education & Tutoring', count: 200, icon: '📚' },
  { name: 'Technology', count: 90, icon: '💻' },
  { name: 'Health & Wellness', count: 120, icon: '❤️' },
  { name: 'Legal & Consulting', count: 100, icon: '⚖️' },
  { name: 'Marketing', count: 130, icon: '📣' },
];

export default function FindExpertsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 text-brand text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-6 h-px bg-brand/40" />
            Expert Directory
            <span className="w-6 h-px bg-brand/40" />
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-navy-900 tracking-tight">
            Find Your Perfect Expert
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Browse verified professionals across 12+ categories. AI-powered matching ensures you find the right expert for your needs.
          </p>
          <a
            href="https://app.flyrlink.com/"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-brand hover:bg-brand-600 text-white font-semibold rounded-lg transition-all duration-300"
          >
            <Search className="w-5 h-5" />
            Search Experts on Flyrlink App
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-navy-900 mb-8 text-center tracking-tight">Expert Categories</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {categories.map((cat, i) => (
              <a
                key={i}
                href="https://app.flyrlink.com/"
                className="group p-6 bg-white rounded-xl border border-gray-200/80 hover:border-brand/30 card-premium text-center"
              >
                <div className="text-4xl mb-3">{cat.icon}</div>
                <h3 className="font-semibold text-navy-900 mb-1">{cat.name}</h3>
                <p className="text-sm text-gray-600">{cat.count}+ experts</p>
              </a>
            ))}
          </div>

          <div className="bg-navy-900 rounded-2xl p-12 text-center">
            <h3 className="font-display text-3xl font-bold text-white mb-4 tracking-tight">Ready to Connect?</h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Sign up for free and let our AI match you with the perfect expert for your needs.
            </p>
            <a
              href="https://app.flyrlink.com/"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-brand hover:bg-brand-600 text-white font-semibold rounded-lg transition-all duration-300"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
