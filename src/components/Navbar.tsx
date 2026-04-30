'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import SearchAutocomplete from './SearchAutocomplete';

const navLinks = [
  { href: '/categories', label: 'Browse' },
  { href: '/#how-it-works', label: 'How it works' },
  { href: '/blog', label: 'Blog' },
];

const drawerExtraLinks = [
  { href: '/about', label: 'About' },
  { href: '/careers', label: 'Careers' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const close = () => setIsOpen(false);

  const isActive = (href: string) => {
    if (href.startsWith('/#')) return false;
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled
          ? 'border-b border-gray-200 shadow-sm'
          : 'border-b border-gray-100'
      }`}
      aria-label="Primary navigation"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center gap-3 lg:gap-6">
          {/* Logo */}
          <Link
            href="/"
            onClick={close}
            className="flex-shrink-0 flex items-center gap-2"
            aria-label="Flyrlink home"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand text-white">
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
            <span className="font-serif italic font-medium text-2xl leading-none text-navy-900">
              Flyrlink
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-brand'
                    : 'text-gray-700 hover:text-navy-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Search bar (desktop + tablet) */}
          <SearchAutocomplete
            className="hidden md:block flex-1 max-w-md"
            size="sm"
          />

          {/* Right-side actions */}
          <div className="flex items-center gap-1 ml-auto">
            <Link
              href="/become-expert"
              className="hidden lg:inline-flex px-3 py-2 text-sm font-medium text-gray-700 hover:text-navy-900 transition-colors"
            >
              Become an expert
            </Link>
            <a
              href="https://app.flyrlink.com/login"
              className="hidden md:inline-flex px-3 py-2 text-sm font-medium text-gray-700 hover:text-navy-900 transition-colors"
            >
              Log in
            </a>
            <a
              href="https://app.flyrlink.com/"
              className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-md shadow-brand/20 hover:bg-brand-600 transition-colors"
            >
              Sign up
              <ArrowRight className="h-3.5 w-3.5" />
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 -mr-2 text-gray-700"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="bg-white border-b border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {/* Search */}
            <SearchAutocomplete size="md" />

            {/* Links */}
            <div className="flex flex-col">
              {[...navLinks, ...drawerExtraLinks].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className={`px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    isActive(link.href)
                      ? 'text-brand bg-brand/5'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/become-expert"
                onClick={close}
                className="px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Become an expert
              </Link>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2 pt-3 border-t border-gray-100">
              <a
                href="https://app.flyrlink.com/login"
                onClick={close}
                className="flex items-center justify-center px-4 py-2.5 text-sm font-medium text-gray-700 border border-gray-200 rounded-full hover:bg-gray-50"
              >
                Log in
              </a>
              <a
                href="https://app.flyrlink.com/"
                onClick={close}
                className="flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-white bg-brand rounded-full hover:bg-brand-600 shadow-md shadow-brand/20"
              >
                Sign up
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
