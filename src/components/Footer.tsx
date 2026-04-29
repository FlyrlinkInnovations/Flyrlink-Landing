import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  ShieldCheck,
  Star,
  Users,
} from 'lucide-react';

const platformLinks = [
  { label: 'Find Experts', href: 'https://app.flyrlink.com/', external: true },
  { label: 'Become an Expert', href: 'https://app.flyrlink.com/', external: true },
  { label: 'Events', href: 'https://app.flyrlink.com/', external: true },
  { label: 'Social Feed', href: 'https://app.flyrlink.com/', external: true },
];

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'Affiliate Program', href: '/affiliate' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'Payment Policy', href: '/payment-policy' },
  { label: 'Disclaimers', href: '/disclaimers' },
];

const connectLinks = [
  { label: 'FAQ', href: '/faq' },
  { label: 'Book a Call', href: '/book-call' },
  { label: 'Join Waiting List', href: '/waiting-list' },
];

const socials = [
  {
    href: 'https://www.linkedin.com/company/flyrlink-innovations/',
    label: 'LinkedIn',
    path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
  },
  {
    href: 'https://www.instagram.com/flyrlink.official/',
    label: 'Instagram',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    href: 'https://www.facebook.com/profile.php?id=61578250422713',
    label: 'Facebook',
    path: 'M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z',
  },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-navy-950"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Background orbs */}
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-brand/8 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-brand/5 blur-[100px]" />

      {/* Ghost watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 select-none font-serif italic font-medium leading-none text-white/[0.025]"
        style={{ fontSize: 'clamp(180px, 24vw, 380px)' }}
      >
        flyrlink
      </span>

      {/* CTA block */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid items-end gap-8 md:grid-cols-[1.5fr_1fr]">
            <div>
              <div className="mb-4 text-[11px] font-semibold tracking-[0.28em] text-brand-300">
                READY TO BEGIN
              </div>
              <h3 className="font-display text-3xl font-bold leading-[1.05] tracking-tight text-white md:text-4xl lg:text-5xl">
                Your next expert is{' '}
                <span className="font-serif italic font-medium text-brand-300">
                  one click away.
                </span>
              </h3>
              <p className="mt-5 max-w-lg text-gray-400">
                Join thousands of clients finding the right expert in minutes,
                not weeks. From yoga trainers to tax consultants.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <a
                href="https://app.flyrlink.com/"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-950 shadow-xl transition-all duration-300 hover:bg-gray-100 hover:shadow-brand/30"
              >
                Get Started Free
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-navy-950 text-white transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </a>
              <Link
                href="/book-call"
                className="group inline-flex items-center justify-center gap-1.5 px-5 py-3 text-sm font-semibold text-white/90 hover:text-white transition-colors"
              >
                Book a call
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-block font-serif text-4xl font-medium italic text-white"
            >
              Flyrlink
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
              Find a coach, tutor, designer, or expert. Book in minutes.
              Verified pros across 12 categories, all in one app.
            </p>

            <div className="mt-6 space-y-2.5">
              <ContactRow icon={Mail}>Contact@flyrlink.com</ContactRow>
              <ContactRow icon={Mail}>support@flyrlink.com</ContactRow>
              <ContactRow icon={MapPin}>
                Flyrlink Innovations Pvt. Ltd., Bangalore, Karnataka, India
              </ContactRow>
            </div>

            {/* Socials */}
            <div className="mt-6 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:border-brand hover:bg-brand hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <LinkColumn label="PLATFORM" links={platformLinks} />
          <LinkColumn label="COMPANY" links={companyLinks} />
          <LinkColumn
            label="LEGAL · CONNECT"
            links={[...legalLinks, ...connectLinks]}
          />
        </div>

        {/* Inline newsletter */}
        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-10 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-2 text-[11px] font-semibold tracking-[0.28em] text-brand-300">
              NEWSLETTER
            </div>
            <h4 className="font-display text-xl font-bold text-white md:text-2xl">
              Stay in the{' '}
              <span className="font-serif italic font-medium text-white/50">
                loop.
              </span>
            </h4>
          </div>
          <div className="flex w-full gap-2 md:w-auto">
            <input
              type="email"
              placeholder="you@email.com"
              className="flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-gray-500 focus:border-brand focus:outline-none md:w-80"
            />
            <button
              type="button"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition-all duration-300 hover:bg-brand-600 hover:shadow-brand/50"
            >
              Subscribe
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Trust & meta bar */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5 text-[10px] font-semibold tracking-[0.28em] text-gray-500">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-3 w-3 text-brand-300" />
              VERIFIED PROS
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="h-3 w-3 text-brand-300" />
              500+ EXPERTS
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="h-3 w-3 fill-brand-300 text-brand-300" />
              4.9★ AVG RATING
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
              SECURE PAYMENTS · REFUND PROTECTED
            </span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm md:flex-row">
          <div className="text-gray-500">
            &copy; 2026 Flyrlink Innovations Pvt. Ltd. All rights reserved.
          </div>
          <div className="font-serif italic text-gray-500">
            Proudly supporting India&apos;s expert economy.
          </div>
        </div>
      </div>
    </footer>
  );
}

function ContactRow({
  icon: Icon,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3 text-gray-400">
      <Icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-300" />
      <span className="text-sm">{children}</span>
    </div>
  );
}

type LinkItem = { label: string; href: string; external?: boolean };

function LinkColumn({ label, links }: { label: string; links: LinkItem[] }) {
  return (
    <div>
      <h4 className="mb-5 text-[11px] font-semibold tracking-[0.28em] text-gray-500">
        {label}
      </h4>
      <ul className="space-y-3">
        {links.map((link) =>
          link.external ? (
            <li key={link.label}>
              <a
                href={link.href}
                className="group inline-flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-white"
              >
                {link.label}
                <ArrowUpRight className="h-3 w-3 text-gray-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-300" />
              </a>
            </li>
          ) : (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
