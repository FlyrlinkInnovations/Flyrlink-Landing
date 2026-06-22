'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Search } from 'lucide-react';

const leftLinks = [
  { href: '/categories', label: 'Browse experts' },
  { href: '/list-your-business', label: 'List your business' },
];

const centerLinks = [
  { href: '/about', label: 'Why Flyrlink' },
  { href: '/register-project', label: 'Register your Projects' },
  { href: '/become-expert', label: 'Become an expert' },
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
      className={`fixed top-0 left-0 right-0 z-50 bg-[#EFF6FF] transition-shadow duration-300 ${
        scrolled ? 'shadow-sm' : ''
      }`}
      aria-label="Primary navigation"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="flex h-16 items-center gap-2 lg:gap-4">
          {/* Logo */}
          <Link
            href="/"
            onClick={close}
            className="flex flex-shrink-0 items-center gap-2"
            aria-label="Flyrlink home"
          >
            <Image
              src="/Flyrlink logo.png"
              alt="Flyrlink"
              width={32}
              height={32}
              priority
              className="h-8 w-8 object-contain"
            />
            <span className="font-serif text-2xl font-medium italic leading-none text-navy-900">
              Flyrlink
            </span>
          </Link>

          {/* Left links */}
          <div className="hidden items-center gap-0.5 lg:flex">
            {leftLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href) ? 'text-brand' : 'text-[#364153] hover:text-navy-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Center / right links */}
          <div className="ml-auto hidden items-center gap-0.5 lg:flex">
            {centerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href) ? 'text-brand' : 'text-[#364153] hover:text-navy-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://app.flyrlink.com/login"
              className="px-3 py-2 text-sm font-medium text-[#364153] transition-colors hover:text-navy-900"
            >
              Log in
            </a>
            <a
              href="https://app.flyrlink.com/"
              className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow-md shadow-brand/20 transition-colors hover:bg-brand-600"
            >
              Sign up
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <Link
              href="/find-experts"
              aria-label="Search experts"
              className="ml-2 flex h-9 w-9 items-center justify-center rounded-full border border-[#1D4ED8]/30 bg-[#F9FAFB] text-[#364153] transition-colors hover:bg-white hover:text-brand"
            >
              <Search className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="ml-auto p-2 text-[#364153] lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`absolute left-0 right-0 top-full transition-all duration-300 lg:hidden ${
          isOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
      >
        <div className="border-b border-gray-200 bg-white shadow-lg">
          <div className="space-y-3 px-4 py-4">
            <div className="flex flex-col">
              {[...leftLinks, ...centerLinks, ...drawerExtraLinks].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={close}
                  className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? 'bg-brand/5 text-brand'
                      : 'text-[#364153] hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-2 border-t border-gray-100 pt-3">
              <a
                href="https://app.flyrlink.com/login"
                onClick={close}
                className="flex items-center justify-center rounded-full border border-gray-200 px-4 py-2.5 text-sm font-medium text-[#364153] hover:bg-gray-50"
              >
                Log in
              </a>
              <a
                href="https://app.flyrlink.com/"
                onClick={close}
                className="flex items-center justify-center gap-1.5 rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand/20 hover:bg-brand-600"
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
