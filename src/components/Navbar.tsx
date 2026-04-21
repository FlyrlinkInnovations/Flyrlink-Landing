'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/careers', label: 'Careers' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: "FAQ's" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return pathname === '/';
    return pathname.startsWith(href);
  };

  // Dark hero context: home page + not scrolled past it.
  // On other pages, always use light mode.
  const isHome = pathname === '/';
  const darkMode = isHome && !scrolled;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative my-3 pointer-events-auto">
          {/* Floating glass pill */}
          <div
            className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-2.5 backdrop-blur-2xl backdrop-saturate-150 transition-all duration-500 ${
              darkMode
                ? 'bg-white/5 shadow-lg shadow-black/20 ring-1 ring-white/15'
                : scrolled
                  ? 'bg-white/70 shadow-xl shadow-navy-950/10 ring-1 ring-white/40'
                  : 'bg-white/50 shadow-lg shadow-navy-950/5 ring-1 ring-white/40'
            }`}
          >
            {/* Logo */}
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="flex-shrink-0 flex items-center gap-2"
              aria-label="Flyrlink"
            >
              {/* Mark */}
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-lg transition-colors duration-500 ${
                  darkMode
                    ? 'bg-white text-brand'
                    : 'bg-brand text-white'
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4"
                  aria-hidden
                >
                  <path
                    d="M4 17L10 11L14 15L20 9"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="20" cy="9" r="1.5" fill="currentColor" />
                </svg>
              </span>
              {/* Wordmark */}
              <span
                className={`font-serif italic font-medium text-2xl leading-none transition-colors duration-500 ${
                  darkMode ? 'text-white' : 'text-navy-900'
                }`}
              >
                Flyrlink
              </span>
            </Link>

            {/* Desktop Nav Links - Centered */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                      darkMode
                        ? active
                          ? 'text-white'
                          : 'text-white/70 hover:text-white'
                        : active
                          ? 'text-brand'
                          : 'text-gray-600 hover:text-navy-900'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <a
                href="https://app.flyrlink.com/login"
                className="group inline-flex items-center gap-1.5 px-5 py-2 text-sm font-semibold bg-brand text-white rounded-full hover:bg-brand-600 transition-colors shadow-md shadow-brand/20"
              >
                Login
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors -mr-2 ${
                darkMode
                  ? 'text-white/80 hover:text-white'
                  : 'text-gray-600 hover:text-navy-900'
              }`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu - drops below the pill */}
          <div
            className={`lg:hidden absolute top-full left-0 right-0 mt-2 transition-all duration-300 ease-in-out ${
              isMobileMenuOpen
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
          >
            <div
              className={`rounded-2xl shadow-xl ring-1 backdrop-blur-2xl backdrop-saturate-150 p-4 mx-1 ${
                darkMode
                  ? 'bg-navy-950/80 ring-white/10 shadow-black/30'
                  : 'bg-white/80 ring-white/40 shadow-navy-950/10'
              }`}
            >
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        darkMode
                          ? active
                            ? 'text-white bg-white/10'
                            : 'text-white/70 hover:text-white hover:bg-white/5'
                          : active
                            ? 'text-brand bg-brand/5'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-navy-900'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
              <div
                className={`mt-3 pt-3 border-t ${
                  darkMode ? 'border-white/10' : 'border-gray-100'
                }`}
              >
                <a
                  href="https://app.flyrlink.com/login"
                  className="flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-center rounded-lg bg-brand text-white hover:bg-brand-600"
                  onClick={closeMobileMenu}
                >
                  Login
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
