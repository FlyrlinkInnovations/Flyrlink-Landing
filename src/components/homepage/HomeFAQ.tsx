'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const faqs = [
  { q: 'What is Flyrlink?', a: 'Flyrlink is an AI-powered expert marketplace that connects you with verified professionals across 12+ categories including business, technology, health, legal, finance, and more. Book 1:1 sessions, attend live events, and get expert guidance all in one platform.' },
  { q: 'How does AI matching work?', a: 'Our AI analyzes your requirements, preferences, and context to recommend the most relevant experts. It considers expertise, ratings, availability, pricing, and past success rates to ensure the best match.' },
  { q: 'Is Flyrlink free to use?', a: 'Signing up and browsing experts is completely free. You only pay when you book a session or event. Experts set their own pricing, with sessions starting from INR 500.' },
  { q: 'How are experts verified?', a: 'Every expert goes through a verification process that includes identity verification, credential checks, and profile review. Our rating and review system further ensures quality.' },
  { q: 'What categories of experts are available?', a: 'We have 12+ categories: Business Intelligence, Career Intelligence, Learning Accelerator, Creative Solutions, Technology, Health & Wellness, Legal, Marketing, Finance, Lifestyle, Astrology, and Language.' },
  { q: 'How do payments work?', a: 'Payments are processed securely through our platform. Clients pay upfront when booking, and experts receive their earnings after sessions are completed. We support multiple payment methods.' },
  { q: 'Can I become an expert on Flyrlink?', a: 'Yes! If you have expertise in any of our categories, you can create a free expert profile, set your pricing and availability, and start earning by helping others.' },
  { q: 'What is the affiliate program?', a: 'Our affiliate program lets you earn 5% commission on all transactions made by users you refer for 12 months. It\'s available to creators, coaches, freelancers, and community admins.' },
  { q: 'How do live events work?', a: 'Experts can host webinars, workshops, and group sessions. Users can browse upcoming events, register, and join live. Events can be online, in-person, or hybrid.' },
  { q: 'Is my data safe on Flyrlink?', a: 'Yes. We use industry-standard encryption, secure payment processing, and AI-powered content moderation. Your data is protected under our privacy policy compliant with DPDP Act.' },
];

export default function HomeFAQ() {
  const { ref, isVisible } = useScrollReveal();

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
    <section className="py-28 bg-white">
      <div ref={ref} className={`max-w-4xl mx-auto px-6 reveal ${isVisible ? 'revealed' : ''}`}>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-brand/10 border border-brand/20 rounded-full text-brand text-xs font-semibold uppercase tracking-wider mb-4">
            FAQ
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 tracking-tight mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about Flyrlink.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`} className="border border-gray-200/80 rounded-xl px-6 hover:bg-gray-50/50 transition-colors">
              <AccordionTrigger className="text-left font-semibold text-navy-900 hover:text-brand">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center bg-gray-50 rounded-xl p-8 border border-gray-200/80">
          <h3 className="font-display text-xl font-bold text-navy-900 mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-6">We&apos;re here to help. Reach out and we&apos;ll get back to you quickly.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand hover:bg-brand-600 text-white font-semibold rounded-lg transition-all duration-300"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/book-call"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 hover:border-brand/30 text-navy-900 font-semibold rounded-lg transition-all duration-300"
            >
              Book a Call
            </Link>
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
