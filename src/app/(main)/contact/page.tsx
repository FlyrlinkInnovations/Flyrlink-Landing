import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Sparkles,
  Star,
  Users,
} from 'lucide-react';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    "Get in touch with Flyrlink. Reach out via email, phone, or our contact form. We're here to help connect you with expert professionals.",
  keywords:
    'contact us, reach out, customer support, flyrlink contact, expert booking help',
};

const contactMethods = [
  {
    icon: Mail,
    tag: 'EMAIL',
    value: 'Contact@flyrlink.com',
    description: 'Drop us a line anytime. We read everything.',
    href: 'mailto:Contact@flyrlink.com',
  },
  {
    icon: Phone,
    tag: 'PHONE',
    value: '+91 8125150893',
    description: 'Mon to Fri, 9am - 6pm IST. No phone trees.',
    href: 'tel:+918125150893',
  },
  {
    icon: MapPin,
    tag: 'VISIT',
    value: 'Hyderabad, India',
    description: 'Unit 407, Jain Sadguru Image Capital Park',
    href: '#',
  },
];

const infoCards = [
  {
    icon: MessageSquare,
    title: 'Quick Response',
    description: 'We reply to every inquiry within 24 hours. Most within 4.',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    description: 'Monday to Friday, 9:00 AM to 6:00 PM IST. We keep it simple.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Join thousands of clients booking the right expert in minutes.',
  },
];

const faqItems = [
  {
    question: 'How do I get started?',
    answer:
      'Sign up free, tell us what you need, and we surface 3 verified experts that fit your goal, budget, and timezone. You can chat with any of them before booking.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'UPI, all major credit/debit cards, wallets, and net banking. Every transaction is secure.',
  },
  {
    question: 'How long does it take to get a response?',
    answer:
      'We aim to reply within 24 hours, most within 4. For anything urgent, call us at +91 8125150893.',
  },
  {
    question: 'Do I need a subscription?',
    answer:
      'No. Sign up and browsing is free. You only pay for the session you book. No subscriptions, no hidden fees.',
  },
  {
    question: 'Is my data safe on Flyrlink?',
    answer:
      'Yes. Conversations are encrypted, payments go through trusted gateways, and we comply with India\'s DPDP Act. We never sell your data.',
  },
  {
    question: 'How can I become a verified expert?',
    answer:
      'Fill out your profile with credentials and experience. Our team reviews and confirms within 3 to 5 business days.',
  },
];

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Flyrlink',
            description:
              'Marketplace to find and book verified experts across 12 categories. From yoga trainers to tax consultants, all in one app.',
            url: 'https://flyrlink.com',
            telephone: '+918125150893',
            email: 'Contact@flyrlink.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Unit 407 Jain Sadguru Image Capital Park',
              addressLocality: 'Hyderabad',
              postalCode: '500081',
              addressCountry: 'IN',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'Customer Support',
              telephone: '+918125150893',
              email: 'Contact@flyrlink.com',
            },
            sameAs: [
              'https://www.linkedin.com/company/flyrlink',
              'https://twitter.com/flyrlink',
            ],
          }),
        }}
      />

      {/* --- HERO --- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-white py-20 md:py-28">
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 select-none font-serif italic font-medium leading-none text-brand/[0.05]"
          style={{ fontSize: 'clamp(140px, 20vw, 280px)' }}
        >
          hello
        </span>

        <div className="relative mx-auto max-w-6xl px-6">
          {/* Meta bar */}
          <div className="mb-10 flex items-center justify-between text-[10px] font-semibold tracking-[0.28em] text-gray-400">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
                CONTACT
              </span>
            </div>
            <span>WE REPLY IN &lt; 24H</span>
          </div>

          <div className="grid items-end gap-8 md:grid-cols-[1.4fr_1fr] md:gap-14">
            <div>
              <div className="mb-4 text-[11px] font-semibold tracking-[0.28em] text-gray-400">
                GET IN TOUCH
              </div>
              <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-navy-900 md:text-6xl lg:text-7xl">
                Let&apos;s{' '}
                <span className="font-serif italic font-medium text-brand">
                  talk.
                </span>
              </h1>
            </div>
            <div>
              <p className="text-base leading-relaxed text-gray-600 md:text-lg">
                Questions about Flyrlink? Need support? Want to partner or join
                the team? Reach out - real humans read every message.
              </p>
              <div className="mt-5 flex items-center gap-2 text-sm">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="font-semibold text-navy-900">4.9</span>
                <span className="text-[10px] tracking-[0.22em] text-gray-400">
                  · SUPPORT RATING
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT METHODS --- */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-5 md:grid-cols-3">
            {contactMethods.map((m) => {
              const Icon = m.icon;
              return (
                <a
                  key={m.tag}
                  href={m.href}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200/70 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/10"
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-gray-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                    </div>

                    <div className="mt-5 text-[10px] font-semibold tracking-[0.24em] text-brand">
                      {m.tag}
                    </div>
                    <p className="mt-1 font-display text-lg font-bold text-navy-900 md:text-xl">
                      {m.value}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {m.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- FORM + INFO --- */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
            {/* Form */}
            <div>
              <div className="mb-3 text-[11px] font-semibold tracking-[0.28em] text-gray-400">
                SEND A MESSAGE
              </div>
              <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-navy-900 md:text-4xl">
                Tell us what you&apos;re{' '}
                <span className="font-serif italic font-medium text-brand">
                  building.
                </span>
              </h2>
              <p className="mt-4 max-w-lg text-gray-600">
                Drop the form below - we&apos;ll route you to the right human
                within the day. Zero boilerplate, zero bots.
              </p>

              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Info column */}
            <div className="space-y-4">
              <div className="mb-2 text-[11px] font-semibold tracking-[0.28em] text-gray-400">
                WHAT TO EXPECT
              </div>

              {infoCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="relative overflow-hidden rounded-2xl border border-gray-200/70 bg-white p-6 transition-all duration-500 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-md hover:shadow-brand/10"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-display text-base font-bold text-navy-900">
                          {card.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-gray-600">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Small pull-quote */}
              <div className="relative mt-8 rounded-2xl border border-brand/20 bg-brand/5 p-6">
                <Sparkles className="absolute right-5 top-5 h-4 w-4 text-brand/50" />
                <p className="font-serif text-lg italic font-medium leading-snug text-navy-900">
                  Real humans,{' '}
                  <span className="text-brand">real replies.</span>
                </p>
                <p className="mt-2 text-[10px] font-semibold tracking-[0.22em] text-gray-400">
                  - THE SUPPORT TEAM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-12 text-center md:mb-14">
            <div className="mb-3 text-[11px] font-semibold tracking-[0.28em] text-gray-400">
              FAQS
            </div>
            <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-navy-900 md:text-4xl lg:text-5xl">
              Answers to the{' '}
              <span className="font-serif italic font-medium text-brand">
                usual suspects.
              </span>
            </h2>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-gray-200/70 bg-white transition-colors hover:border-brand/30 open:border-brand/30 open:shadow-md open:shadow-brand/5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6">
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-xl italic font-medium text-gray-300 group-open:text-brand transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-display text-base font-bold text-navy-900 md:text-lg">
                      {item.question}
                    </span>
                  </div>
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-gray-200 text-lg font-semibold text-gray-400 transition-all group-hover:border-brand/40 group-hover:text-brand group-open:rotate-45 group-open:border-brand group-open:bg-brand group-open:text-white">
                    +
                  </span>
                </summary>
                <div className="border-t border-gray-100 px-6 pb-6 pl-16 pt-4 text-sm leading-relaxed text-gray-600 md:text-base">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-10 text-center text-sm text-gray-500">
            Still have questions?{' '}
            <a
              href="mailto:Contact@flyrlink.com"
              className="group inline-flex items-center gap-1 font-semibold text-brand decoration-brand/40 decoration-2 underline-offset-4 hover:underline"
            >
              Email us directly
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* --- BOTTOM CTA --- */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-navy-950 p-10 md:p-16">
            <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-30" />
            <div className="pointer-events-none absolute -top-20 right-0 h-[320px] w-[320px] rounded-full bg-brand/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 left-0 h-[320px] w-[320px] rounded-full bg-brand/10 blur-3xl" />

            <div className="relative grid items-center gap-8 md:grid-cols-[1.3fr_1fr]">
              <div>
                <div className="mb-3 text-[11px] font-semibold tracking-[0.28em] text-brand-300">
                  READY TO BEGIN
                </div>
                <h3 className="font-display text-3xl font-bold leading-[1.05] text-white md:text-4xl lg:text-5xl">
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
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-950 shadow-xl transition-all duration-300 hover:bg-gray-100 hover:shadow-brand/30"
                >
                  Get Started Free
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-navy-950 text-white transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </a>
                <Link
                  href="/book-call"
                  className="group inline-flex items-center gap-1.5 px-5 py-3 text-sm font-semibold text-white/90 hover:text-white"
                >
                  Book a call
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
