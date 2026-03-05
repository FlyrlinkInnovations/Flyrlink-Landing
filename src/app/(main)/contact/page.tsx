import type { Metadata } from 'next';
import { Mail, Phone, MapPin, MessageSquare, Clock, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Flyrlink. Reach out via email, phone, or our contact form. We\'re here to help connect you with expert professionals.',
  keywords: 'contact us, reach out, customer support, business inquiry, flyrlink contact, expert network contact, professional networking support',
};

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: 'Contact@flyrlink.com',
    description: 'Send us an email anytime',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 8125150893',
    description: 'Call us during business hours',
  },
  {
    icon: MapPin,
    title: 'Address',
    value: 'Unit 407 Jain Sadguru Image Capital Park, Hyderabad - 500081',
    description: 'Visit our office',
  },
];

const infoCards = [
  {
    icon: MessageSquare,
    title: 'Quick Response',
    description: 'We respond to all inquiries within 24 hours.',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    description: 'Monday - Friday: 9:00 AM - 6:00 PM IST. We\'re here when you need us.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Join thousands of professionals and experts already using Flyrlink.',
  },
];

const faqItems = [
  {
    question: 'How do I get started with Flyrlink?',
    answer: 'Getting started is simple! Sign up on our platform, complete your profile, and explore our expert directory or list your services. Our support team is ready to guide you through the process.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, digital wallets, and bank transfers. All transactions are secure and encrypted for your protection.',
  },
  {
    question: 'How long does it take to get a response?',
    answer: 'We aim to respond to all inquiries within 24 hours. For urgent matters, please call us directly at +91 8125150893.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel your subscription anytime without any penalties. We want to make sure you\'re always satisfied with our service.',
  },
  {
    question: 'Is my data secure on Flyrlink?',
    answer: 'Absolutely. We use industry-standard encryption and security protocols to protect your personal and business information.',
  },
  {
    question: 'How can I become a verified expert?',
    answer: 'Complete your profile with your qualifications and experience. Our verification team will review your credentials and you\'ll be verified within 3-5 business days.',
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Flyrlink',
            description:
              'AI-powered expert network platform connecting professionals with users for seamless service bookings and expertise sharing',
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

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 text-brand text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-6 h-px bg-brand/40" />
            Contact Us
            <span className="w-6 h-px bg-brand/40" />
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="text-navy-900">Get in Touch</span>
            <span className="block text-gradient">We&apos;re Here to Help</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Have questions about Flyrlink? Need technical support? Want to partner with us?
            Reach out and let&apos;s connect. We&apos;re dedicated to providing exceptional support to every member of our community.
          </p>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-navy-900 text-center mb-12 tracking-tight">Contact Methods</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card key={index} className="bg-white card-premium rounded-xl border-gray-200/80 hover:border-brand/30">
                  <CardContent className="p-8">
                    <div className="mb-4 w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-2">{method.title}</h3>
                    <p className="text-brand font-medium text-lg mb-2">{method.value}</p>
                    <p className="text-gray-600 text-sm">{method.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-6">
          <ContactForm />
        </div>
      </section>

      {/* Additional Info Cards */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-navy-900 text-center mb-12 tracking-tight">Why Choose Flyrlink?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {infoCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <Card key={index} className="bg-white card-premium rounded-xl border-gray-200/80 hover:border-brand/30">
                  <CardContent className="p-8 text-center">
                    <div className="mb-4 w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand mx-auto">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-3">{card.title}</h3>
                    <p className="text-gray-600">{card.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-navy-900 text-center mb-12 tracking-tight">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <details key={index} className="group bg-white rounded-xl border border-gray-200/80 hover:border-brand/30 transition-colors">
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 font-medium text-navy-900 hover:text-brand transition-colors">
                  <span>{item.question}</span>
                  <span className="text-2xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-200 pt-4">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="font-display text-3xl font-bold mb-6 tracking-tight">Ready to Get Started?</h2>
          <p className="text-lg mb-8 text-gray-300">
            Join thousands of professionals and experts who are already transforming their careers with Flyrlink.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app.flyrlink.com/" className="px-8 py-3 bg-white text-navy-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Sign Up Now
            </a>
            <a href="/" className="px-8 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
