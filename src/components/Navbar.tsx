'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Dark navy background bar */}
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? 'bg-navy-950 shadow-lg shadow-navy-950/20'
            : 'bg-navy-950'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* White pill container */}
          <div className="relative my-2.5">
            <div className="bg-white rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between shadow-sm">
              {/* Logo */}
              <Link href="/" onClick={closeMobileMenu} className="flex-shrink-0">
                <Image
                  src="/Flyrlink logo blue-blank .png"
                  alt="Flyrlink"
                  width={120}
                  height={40}
                  className="h-9 w-auto"
                  priority
                />
              </Link>

              {/* Desktop Nav Links - Centered */}
              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                      isActive(link.href)
                        ? 'text-brand'
                        : 'text-gray-600 hover:text-navy-900'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Desktop CTAs */}
              <div className="hidden lg:flex items-center gap-3">
                <Link
                  href="/contact"
                  className="px-5 py-2 text-sm font-semibold text-navy-900 border border-gray-300 rounded-full hover:border-navy-900 transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  href="/book-call"
                  className="group px-5 py-2 text-sm font-semibold bg-brand text-white rounded-full hover:bg-brand-600 transition-colors flex items-center gap-1.5"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-navy-900 transition-colors -mr-2"
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
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 mx-1">
                <div className="flex flex-col space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        isActive(link.href)
                          ? 'text-brand bg-brand/5'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-navy-900'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-gray-100 space-y-2">
                  <Link
                    href="/contact"
                    className="block px-4 py-2.5 text-sm font-semibold text-center text-navy-900 border border-gray-300 rounded-lg hover:border-navy-900"
                    onClick={closeMobileMenu}
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/book-call"
                    className="flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-center rounded-lg bg-brand text-white hover:bg-brand-600"
                    onClick={closeMobileMenu}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line - gradient from navy to brand */}
      <div className="h-0.5 bg-gradient-to-r from-navy-800 via-brand to-navy-800" />
    </nav>
  );
}
