'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, MessageSquare } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const faqs = [
  {
    q: 'What is Flyrlink?',
    a: 'Flyrlink is a marketplace for finding verified experts: coaches, tutors, designers, trainers, consultants, and creators across 12 categories. Chat free, book a 1:1 session, and meet on secure in-app video.',
  },
  {
    q: 'How does the AI matching work?',
    a: 'Tell us what you need in plain language. We surface 3 verified experts that fit your goal, budget, and timezone, so you skip scrolling through 200 profiles.',
  },
  {
    q: 'Is Flyrlink free to use?',
    a: 'Yes. Signing up, browsing experts, and chatting with them is completely free. You only pay when you book a session. Experts set their own price, starting from ₹499.',
  },
  {
    q: 'How are experts verified?',
    a: 'Every expert goes through ID verification, credential checks, and profile review. Real client ratings and reviews keep the bar high after that.',
  },
  {
    q: 'What categories of experts are available?',
    a: 'We have 12 categories with 89+ services: Education, Fitness, Sports, Tech & IT, Photography, Beauty, Fashion, Business, Entertainment, Digital Marketing, Writing & Translation, and Creators & Influencers.',
  },
  {
    q: 'How do payments work?',
    a: 'You pay securely when you confirm a booking via UPI, card, or wallet. The expert is paid after the session is delivered. Refund protection is built in.',
  },
  {
    q: 'Can I become an expert on Flyrlink?',
    a: "Yes. If you've got a skill people pay for, set up a free profile, list your sessions, set your price, and start earning. We handle discovery, payments, and video calls.",
  },
  {
    q: 'How does the referral program work?',
    a: "Share your personal Flyrlink referral link. Earn 5% commission on every transaction your referrals make for 12 months. No cap on referrals, no cap on earnings.",
  },
  {
    q: 'How do live events and workshops work?',
    a: 'Experts host workshops, classes, and Q&A sessions, from yoga bootcamps to study-abroad masterclasses. Browse upcoming events, register, and join live (online, in-person, or hybrid).',
  },
  {
    q: 'Is my data safe on Flyrlink?',
    a: 'Yes. Conversations are encrypted, payments are processed through trusted gateways, and we comply with India\'s DPDP Act. We never sell your data.',
  },
];

export default function HomeFAQ() {
  const { ref, isVisible } = useScrollReveal();
  const [open, setOpen] = useState<number | null>(0);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Ghost watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 select-none font-serif italic font-medium leading-none text-brand/[0.04]"
        style={{ fontSize: 'clamp(140px, 18vw, 260px)' }}
      >
        faq
      </span>

      <div
        ref={ref}
        className={`relative mx-auto max-w-6xl px-6 reveal ${isVisible ? 'revealed' : ''}`}
      >
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
          {/* Left column */}
          <div className="md:sticky md:top-24 md:h-fit">
            <div className="mb-3 text-[11px] font-semibold tracking-[0.28em] text-gray-400">
              FAQ
            </div>
            <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-navy-900 md:text-5xl lg:text-6xl">
              Good questions,{' '}
              <span className="font-serif italic font-medium text-brand">
                quick answers.
              </span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-gray-600 md:text-lg">
              Everything you need to know about Flyrlink - how it works,
              pricing, verification, and more.
            </p>

            {/* Still have questions card */}
            <div className="mt-8 rounded-2xl border border-gray-200/70 bg-gradient-to-br from-brand/5 via-white to-white p-6">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand">
                  <MessageSquare className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-navy-900">
                    Still curious?
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Real humans, real replies. We respond within 24 hours.
                  </p>
                </div>
              </div>
              <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white shadow-xl shadow-navy-900/20 transition-all duration-300 hover:bg-navy-800 hover:shadow-brand/20"
                >
                  Contact support
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-navy-900 transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
                <Link
                  href="/faq"
                  className="group inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-navy-900 hover:text-brand"
                >
                  Full FAQ
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right column - accordion */}
          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className={`group rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? 'border-brand/30 bg-white shadow-md shadow-brand/5'
                      : 'border-gray-200/70 bg-white hover:border-brand/30'
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start gap-4 p-5 text-left md:p-6"
                  >
                    <span
                      className={`font-serif text-xl italic font-medium leading-none transition-colors md:text-2xl ${
                        isOpen
                          ? 'text-brand'
                          : 'text-gray-300 group-hover:text-brand/50'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <h3 className="flex-1 font-display text-base font-bold text-navy-900 md:text-lg">
                      {faq.q}
                    </h3>

                    <span
                      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition-all ${
                        isOpen
                          ? 'border-brand bg-brand text-white rotate-45'
                          : 'border-gray-200 text-gray-400 group-hover:border-brand/40 group-hover:text-brand'
                      }`}
                    >
                      <span className="text-lg font-semibold">+</span>
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-gray-100 px-5 pb-6 pl-14 pt-4 md:px-6 md:pl-16">
                        <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </div>
    </section>
  );
}
