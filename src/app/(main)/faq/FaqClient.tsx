'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  ClipboardList,
  CreditCard,
  HelpCircle,
  Search,
  Shield,
  Star,
  User,
  UserCircle,
} from 'lucide-react';

type FaqItem = {
  question: string;
  answer: string;
};

type FaqCategory = {
  id: string;
  title: string;
  short: string;
  icon: React.ComponentType<{ className?: string }>;
  items: FaqItem[];
};

const faqCategories: FaqCategory[] = [
  {
    id: 'general',
    title: 'General Questions',
    short: 'General',
    icon: HelpCircle,
    items: [
      {
        question: 'What is FLYRLINK, and how does it work?',
        answer:
          'FLYRLINK is a professional networking and talent discovery platform where General Users, Experts, Startups, and Businesses can connect, collaborate, and grow. Experts can offer services, monetize content, and provide consultations, while startups and businesses can promote their services and gain expert support.',
      },
      {
        question: 'Who can use FLYRLINK? Is it for individuals, businesses, or both?',
        answer:
          'FLYRLINK is designed for both individuals and businesses.\n\n' +
          '• General Users can engage with expert content and seek professional guidance.\n' +
          '• Experts & Freelancers can offer services, share knowledge, and monetize content.\n' +
          '• Startups & Small Businesses can promote their services, connect with experts, and gain visibility.',
      },
      {
        question: 'Is FLYRLINK available globally, or is it restricted to certain regions?',
        answer:
          'Currently, FLYRLINK is available in India. A global release is planned soon, allowing users from different countries to join and benefit from the platform. Stay tuned for updates!',
      },
      {
        question: 'How do I sign up and create a profile on FLYRLINK?',
        answer:
          "You can sign up using your email or social accounts. Once registered, complete your profile with skills, experience, and services, and if you're an expert, apply for verification to enhance trust and credibility.",
      },
      {
        question: 'Is FLYRLINK free to use, or are there any charges?',
        answer:
          'FLYRLINK offers free access to all users. Experts can list their services for free, but for verification and premium features like priority listing and promotional ads, a customized pricing applies.',
      },
      {
        question: 'Can I use FLYRLINK for networking and connecting with other professionals?',
        answer:
          'Yes! FLYRLINK allows you to connect with experts, businesses, and professionals, engage in discussions, follow experts, and collaborate on projects or mentorship opportunities.',
      },
      {
        question: 'How can I search for experts, businesses, or services in FLYRLINK?',
        answer:
          'Use the search feature in the app to find verified experts, startups, and service providers based on category, location, or expertise. You can also check posts and video content in the feed for recommendations.',
      },
    ],
  },
  {
    id: 'users',
    title: 'User Role & Usage',
    short: 'Users',
    icon: User,
    items: [
      {
        question: 'How do I create an account on FLYRLINK?',
        answer:
          'Users can sign up with an email or social account, select User role and then complete their profile with basic details. Once registered, users can browse expert services, post content, and engage with the community.',
      },
      {
        question: 'How do I book a service appointment with an expert?',
        answer:
          "Go to the expert's profile or service listing, select the desired service, choose an available date and time, and confirm the booking. The expert will receive a notification and can approve the appointment.",
      },
      {
        question: 'How can I pay for a service on FLYRLINK?',
        answer:
          'Users can securely pay for services through the in-app payment system. Payment options may include credit/debit cards, UPI, or other supported digital payment methods.',
      },
      {
        question: 'Can users post in the feed and upload videos?',
        answer:
          'Yes! Users can post updates, share experiences, ask questions, and upload videos to engage with the community. However, monetization is available only for verified experts.',
      },
      {
        question: 'How old do I need to be to use FLYRLINK to book services?',
        answer:
          'Users must be at least 18 years old to book services and make payments on FLYRLINK. Minors may use the platform under parental guidance for educational content.',
      },
    ],
  },
  {
    id: 'experts',
    title: 'Expert Roles & Monetization',
    short: 'Experts',
    icon: Star,
    items: [
      { question: 'How do I create an expert account on FLYRLINK?', answer: 'Sign up using your email or social account, then select "Expert Profile" during setup. Complete your profile with skills, experience, and services offered. You can also apply for verification to increase trust and visibility.' },
      { question: 'How can I list my services on FLYRLINK?', answer: 'Go to your profile settings, select "Create a Service", and fill in details such as service title, description, pricing, and availability (online, in-person, home visit). Once listed, users can book your services directly.' },
      { question: 'Can I set my own prices for services?', answer: 'Yes! Experts can define their own pricing based on market demand, expertise, and service quality. You can also offer discounted or free introductory sessions to attract new clients.' },
      { question: 'How do I earn money by uploading videos on FLYRLINK?', answer: 'Experts can upload high-quality videos such as tutorials, how-to guides, and industry insights. Earnings are based on video views, in-app ads, and engagement metrics (likes, comments, and shares).' },
      { question: 'Can I monetize blogs and written content?', answer: 'Currently, FLYRLINK monetizes videos only. However, experts can use blog posts to gain visibility, attract clients, and promote their paid services.' },
      { question: 'What is the benefit of getting verified as an expert?', answer: 'A verified badge helps build trust with users, increases engagement, and improves visibility in searches. Verified experts also qualify for monetization and priority listing opportunities.' },
      { question: 'How can I increase my visibility as an expert?', answer: 'Post high-quality content (videos, blogs, discussions) regularly. Engage with users through comments, Q&A, and consultations. Apply for priority listing to feature your profile at the top.' },
      { question: 'How do I get priority listing or sponsored ads?', answer: 'Experts looking for more exposure can apply for priority listing and sponsored ads by contacting the FLYRLINK team. These services help increase visibility and reach more users.' },
      { question: 'Is there an eligibility requirement to start earning?', answer: 'Yes, experts must meet a minimum engagement threshold (favorites, video views, likes, comments, shares) before earning from their content. This ensures only high-quality content is monetized.' },
      { question: 'Can I offer both online and in-person services?', answer: 'Yes! Experts can specify whether they provide online sessions, in-person consultations, or home visits in their service listings. Users can book based on location and availability.' },
    ],
  },
  {
    id: 'business',
    title: 'Startup & Business Growth',
    short: 'Business',
    icon: Briefcase,
    items: [
      { question: 'How can startups and small businesses use FLYRLINK to grow?', answer: 'Startups and small businesses can list their services, connect with verified experts, promote their brand through posts and videos, and engage with potential customers. They can also participate in Startup Saturday for extra visibility.' },
      { question: 'Can startups collaborate with experts on FLYRLINK?', answer: 'Yes! Startups can hire experts for business consulting, mentorship, and marketing strategies. Verified experts can provide growth advice, funding guidance, and operational insights.' },
      { question: 'How can startups increase their visibility on FLYRLINK?', answer: 'Post engaging content regularly (videos, insights, offers). Utilize priority listing & sponsored ads for better reach. Participate in Startup Saturday for promotional support. Offer free samples or introductory discounts to attract customers.' },
      { question: 'Can businesses sell products or services directly on FLYRLINK?', answer: 'Businesses can list services that users can book and pay for directly through the app. However, product sales are not currently supported, but businesses can use posts and videos to drive traffic to their offerings.' },
      { question: 'How can startups apply for priority listing and sponsored ads?', answer: 'Startups and small businesses must contact the FLYRLINK team for customized sponsored posts and priority listing options to increase visibility and attract targeted customers.' },
    ],
  },
  {
    id: 'services',
    title: 'Service Types & Offerings',
    short: 'Services',
    icon: ClipboardList,
    items: [
      { question: 'What types of services can experts offer on FLYRLINK?', answer: 'Experts can offer a variety of services, including: Online consultations (video calls, chat-based advice), In-person services (local meetups, office visits), Home visits (for business, consulting, coaching, or personal services).' },
      { question: 'How can I offer services on FLYRLINK?', answer: 'Verified experts can create a service listing by going to their profile settings, selecting "Create a Service", and adding details such as service type, description, pricing, and availability (online, in-person, or home visit).' },
      { question: 'Can experts create custom services based on user requirements?', answer: 'Yes! Experts can offer tailor-made services based on client needs. Users can send service requests, and experts can customize the scope, duration, and pricing accordingly.' },
      { question: 'What payment options are available for booking services?', answer: 'Users can pay for services using multiple payment methods, including: Credit/Debit Cards, UPI, Net Banking, Cash Payments (for in-person or home visit services, based on expert preference).' },
      { question: 'Can experts offer both free and paid services?', answer: 'Yes! Experts can offer free introductory services to attract clients, provide discounted services for a limited time, and charge based on service quality, expertise, and demand once they build a reputation.' },
      { question: 'How do users book and pay for free services?', answer: 'Users can book free services the same way as paid services. If an expert lists a service as free, no payment is required at checkout, making it easier for users to try the service and leave reviews.' },
    ],
  },
  {
    id: 'payments',
    title: 'Payments & Support',
    short: 'Payments',
    icon: CreditCard,
    items: [
      { question: 'How do experts receive payments for services?', answer: 'Payments are processed directly through the FLYRLINK platform to ensure secure transactions between experts and clients.' },
      { question: 'How do users pay for expert services?', answer: 'Users can book expert services and pay securely through the in-app payment system and cash payment to the service provider.' },
      { question: 'Can experts change service pricing?', answer: 'Yes, experts have full control over their pricing and can update their rates based on demand, quality, and expertise.' },
    ],
  },
  {
    id: 'account',
    title: 'Account & Suspension',
    short: 'Account',
    icon: UserCircle,
    items: [
      { question: 'How can I update my profile details on FLYRLINK?', answer: 'You can update your name, profile picture, bio, and other details by going to Settings > Edit Profile in the app. Changes will be saved instantly.' },
      { question: 'Can I switch from a user account to an expert account?', answer: 'Yes! If you want to become an expert, go to Settings > Upgrade to Expert, fill in your expertise details, and submit a verification request. Once approved, your account will be upgraded.' },
      { question: 'Why was my account suspended or restricted?', answer: 'FLYRLINK may suspend accounts due to: Violations of community guidelines (spam, abuse, fraud), Inappropriate content or behavior reported by users, Multiple failed verification attempts or fraudulent activity. If you believe your suspension was an error, contact support@flyrlink.com for a review.' },
      { question: 'Can I recover a suspended or deactivated account?', answer: 'If your account was temporarily suspended, you can request a review by contacting support. However, permanently deleted accounts cannot be restored.' },
    ],
  },
  {
    id: 'security',
    title: 'Security & Privacy',
    short: 'Security',
    icon: Shield,
    items: [
      { question: 'How does FLYRLINK protect my personal information?', answer: 'FLYRLINK uses end-to-end encryption, secure payment gateways, and strict data privacy policies to protect user information. Your personal details are never shared without your consent.' },
      { question: 'How can I enable two-factor authentication (2FA) for my account?', answer: 'Currently, FLYRLINK does not support two-factor authentication (2FA) but recommends using a strong password and enabling device-level security like fingerprint or face ID for additional protection.' },
      { question: 'How do I report a suspicious user or scam?', answer: "If you come across a fraudulent profile, spam, or suspicious activity, go to the user's profile, click \"Report\", and select the reason. Our team will review and take action accordingly." },
      { question: 'What should I do if I suspect my account has been hacked?', answer: 'If you notice unauthorized activity, immediately: Change your password under Settings > Security. Log out of all devices under Account Settings. Contact FLYRLINK support if you need further assistance.' },
      { question: 'How does FLYRLINK handle payment security?', answer: 'All transactions are processed through secure payment gateways with encryption to prevent fraud. FLYRLINK does not store sensitive payment information on its servers.' },
      { question: 'Does FLYRLINK share my data with third parties?', answer: 'No, FLYRLINK does not sell or share user data with third-party companies. Your personal information is used strictly to enhance your experience on the platform.' },
    ],
  },
];

const totalQuestions = faqCategories.reduce(
  (sum, c) => sum + c.items.length,
  0
);

export default function FaqClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('general');
  const [openKey, setOpenKey] = useState<string | null>(null);

  const searching = searchQuery.trim().length > 0;

  const filteredCategories = searching
    ? faqCategories
        .map((c) => ({
          ...c,
          items: c.items.filter(
            (i) =>
              i.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
              i.answer.toLowerCase().includes(searchQuery.toLowerCase())
          ),
        }))
        .filter((c) => c.items.length > 0)
    : [];

  const current =
    faqCategories.find((c) => c.id === activeCategory) ?? faqCategories[0];

  return (
    <div className="bg-white">
      {/* --- HERO --- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-white py-20 md:py-28">
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 select-none font-serif italic font-medium leading-none text-brand/[0.05]"
          style={{ fontSize: 'clamp(140px, 20vw, 280px)' }}
        >
          answers
        </span>

        <div className="relative mx-auto max-w-6xl px-6">
          {/* Meta bar */}
          <div className="mb-10 flex items-center justify-between text-[10px] font-semibold tracking-[0.28em] text-gray-400">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
                HELP CENTER
              </span>
              <span className="hidden h-3 w-px bg-gray-200 md:inline-block" />
              <span className="hidden md:inline">VOL 01 · FLYRLINK 2026</span>
            </div>
            <span>{totalQuestions} QUESTIONS</span>
          </div>

          <div className="mb-10 grid items-end gap-8 md:grid-cols-[1.4fr_1fr] md:gap-14">
            <div>
              <div className="mb-4 text-[11px] font-semibold tracking-[0.28em] text-gray-400">
                FREQUENTLY ASKED
              </div>
              <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-navy-900 md:text-6xl lg:text-7xl">
                Questions?{' '}
                <span className="font-serif italic font-medium text-brand">
                  Answers.
                </span>
              </h1>
            </div>
            <div>
              <p className="text-base leading-relaxed text-gray-600 md:text-lg">
                Quick answers to the questions we hear most. Can&apos;t find
                yours?{' '}
                <Link
                  href="/contact"
                  className="font-semibold text-brand hover:underline"
                >
                  Contact support
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Search */}
          <div className="relative mx-auto max-w-2xl">
            <Search className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-gray-200 bg-white py-4 pl-12 pr-32 text-sm text-navy-900 placeholder:text-gray-400 shadow-sm transition-all focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand/10"
            />
            {searching && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-gray-100 px-3 py-1.5 text-[10px] font-semibold tracking-wider text-gray-500 hover:bg-gray-200"
              >
                CLEAR
              </button>
            )}
          </div>
        </div>
      </section>

      {/* --- CONTENT --- */}
      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          {searching ? (
            <SearchResults
              results={filteredCategories}
              query={searchQuery}
              openKey={openKey}
              setOpenKey={setOpenKey}
            />
          ) : (
            <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-14">
              {/* Sidebar */}
              <aside className="lg:sticky lg:top-24 lg:h-fit">
                <div className="mb-4 text-[11px] font-semibold tracking-[0.28em] text-gray-400">
                  CATEGORIES
                </div>
                <nav className="space-y-1">
                  {faqCategories.map((c) => {
                    const Icon = c.icon;
                    const isActive = c.id === activeCategory;
                    return (
                      <button
                        key={c.id}
                        onClick={() => {
                          setActiveCategory(c.id);
                          setOpenKey(null);
                        }}
                        className={`group flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-left text-sm font-medium transition-all ${
                          isActive
                            ? 'border-brand/30 bg-brand/5 text-navy-900'
                            : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-navy-900'
                        }`}
                      >
                        <Icon
                          className={`h-4 w-4 flex-shrink-0 ${
                            isActive ? 'text-brand' : 'text-gray-400'
                          }`}
                        />
                        <span className="flex-1 truncate">{c.title}</span>
                        <span
                          className={`text-[10px] font-semibold tracking-wider ${
                            isActive ? 'text-brand' : 'text-gray-400'
                          }`}
                        >
                          {c.items.length}
                        </span>
                      </button>
                    );
                  })}
                </nav>
              </aside>

              {/* Questions */}
              <main>
                <div className="mb-8 flex items-end justify-between gap-4 border-b border-gray-100 pb-6">
                  <div>
                    <div className="mb-2 flex items-center gap-2 text-[10px] font-semibold tracking-[0.28em] text-brand">
                      <current.icon className="h-3.5 w-3.5" />
                      {current.title.toUpperCase()}
                    </div>
                    <h2 className="font-display text-2xl font-bold leading-tight tracking-tight text-navy-900 md:text-3xl">
                      {current.items.length} question
                      {current.items.length !== 1 ? 's' : ''}{' '}
                      <span className="font-serif italic font-medium text-gray-400">
                        to help.
                      </span>
                    </h2>
                  </div>
                </div>

                <CategoryAccordion
                  category={current}
                  openKey={openKey}
                  setOpenKey={setOpenKey}
                />
              </main>
            </div>
          )}
        </div>
      </section>

      {/* --- BOTTOM CTA --- */}
      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-navy-950 p-10 md:p-16">
            <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-30" />
            <div className="pointer-events-none absolute -top-20 right-0 h-[320px] w-[320px] rounded-full bg-brand/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 left-0 h-[320px] w-[320px] rounded-full bg-brand/10 blur-3xl" />

            <div className="relative grid items-center gap-8 md:grid-cols-[1.3fr_1fr]">
              <div>
                <div className="mb-3 text-[11px] font-semibold tracking-[0.28em] text-brand-300">
                  STILL STUCK
                </div>
                <h3 className="font-display text-3xl font-bold leading-[1.05] text-white md:text-4xl lg:text-5xl">
                  We&apos;ve got{' '}
                  <span className="font-serif italic font-medium text-brand-300">
                    your back.
                  </span>
                </h3>
                <p className="mt-5 max-w-lg text-gray-400">
                  Real humans on support, replies within 24 hours. Drop a line
                  or shoot us an email - no chatbots, we promise.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-950 shadow-xl transition-all duration-300 hover:bg-gray-100 hover:shadow-brand/30"
                >
                  Contact support
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-navy-950 text-white transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
                <a
                  href="mailto:support@flyrlink.com"
                  className="group inline-flex items-center gap-1.5 px-5 py-3 text-sm font-semibold text-white/90 hover:text-white"
                >
                  Email us
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function SearchResults({
  results,
  query,
  openKey,
  setOpenKey,
}: {
  results: FaqCategory[];
  query: string;
  openKey: string | null;
  setOpenKey: (k: string | null) => void;
}) {
  const totalMatches = results.reduce((sum, c) => sum + c.items.length, 0);

  if (results.length === 0) {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-gray-200/70 bg-white p-12 text-center md:p-16">
        <div className="pointer-events-none absolute -top-16 left-1/2 h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />
        <div className="relative">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-700 text-white shadow-xl shadow-brand/30">
            <HelpCircle className="h-6 w-6" />
          </div>
          <div className="mt-6 text-[11px] font-semibold tracking-[0.28em] text-gray-400">
            NO MATCHES
          </div>
          <h3 className="mt-3 font-display text-2xl font-bold text-navy-900 md:text-3xl">
            Nothing found for{' '}
            <span className="font-serif italic font-medium text-brand">
              &ldquo;{query}&rdquo;
            </span>
          </h3>
          <p className="mx-auto mt-3 max-w-md text-gray-600">
            Try different keywords, or talk to a human on our support team.
          </p>
          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-navy-900/20 transition-all duration-300 hover:bg-navy-800 hover:shadow-brand/20"
          >
            Contact support
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-navy-900 transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="h-3 w-3" />
            </span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8 border-b border-gray-100 pb-6">
        <div className="mb-2 text-[10px] font-semibold tracking-[0.28em] text-brand">
          SEARCH RESULTS
        </div>
        <h2 className="font-display text-2xl font-bold leading-tight tracking-tight text-navy-900 md:text-3xl">
          {totalMatches} match{totalMatches !== 1 ? 'es' : ''}{' '}
          <span className="font-serif italic font-medium text-gray-400">
            for &ldquo;{query}&rdquo;
          </span>
        </h2>
      </div>

      <div className="space-y-10">
        {results.map((category) => {
          const Icon = category.icon;
          return (
            <div key={category.id}>
              <div className="mb-4 flex items-center gap-2 text-[10px] font-semibold tracking-[0.28em] text-brand">
                <Icon className="h-3.5 w-3.5" />
                {category.title.toUpperCase()}
              </div>
              <CategoryAccordion
                category={category}
                openKey={openKey}
                setOpenKey={setOpenKey}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CategoryAccordion({
  category,
  openKey,
  setOpenKey,
}: {
  category: FaqCategory;
  openKey: string | null;
  setOpenKey: (k: string | null) => void;
}) {
  return (
    <div className="space-y-3">
      {category.items.map((item, i) => {
        const key = `${category.id}-${i}`;
        const isOpen = openKey === key;
        return (
          <div
            key={key}
            className={`group rounded-2xl border transition-all duration-300 ${
              isOpen
                ? 'border-brand/30 bg-white shadow-md shadow-brand/5'
                : 'border-gray-200/70 bg-white hover:border-brand/30'
            }`}
          >
            <button
              onClick={() => setOpenKey(isOpen ? null : key)}
              aria-expanded={isOpen}
              className="flex w-full items-start gap-4 p-5 text-left md:p-6"
            >
              <span
                className={`font-serif text-xl italic font-medium leading-none transition-colors md:text-2xl ${
                  isOpen ? 'text-brand' : 'text-gray-300 group-hover:text-brand/50'
                }`}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="flex-1">
                <h3 className="font-display text-base font-bold text-navy-900 md:text-lg">
                  {item.question}
                </h3>
              </div>

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
                  <p className="whitespace-pre-line text-sm leading-relaxed text-gray-600 md:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
