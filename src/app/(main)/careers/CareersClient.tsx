'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Banknote,
  Briefcase,
  Globe,
  HeartPulse,
  Laptop,
  MapPin,
  Sparkles,
  Star,
  TrendingUp,
} from 'lucide-react';

type Department =
  | 'All'
  | 'Engineering'
  | 'Design'
  | 'Marketing'
  | 'Customer Success';

interface Job {
  id: string;
  title: string;
  department: Department;
  location: string;
  type: string;
  description: string;
  requirements: { text: string }[];
  responsibilities: { text: string }[];
}

const jobs: Job[] = [
  {
    id: '1',
    title: 'Senior Full Stack Engineer',
    department: 'Engineering',
    location: 'Hyderabad, India',
    type: 'Full-time',
    description:
      "Build scalable infrastructure for our AI-powered expert network platform. You'll work with modern technologies and mentor junior engineers.",
    requirements: [
      { text: '5+ years of full-stack development experience' },
      { text: 'Proficiency in React, Node.js, and TypeScript' },
      { text: 'Strong understanding of system design and architecture' },
      { text: 'Experience with cloud platforms (AWS, GCP, or Azure)' },
      { text: 'Excellent problem-solving and communication skills' },
    ],
    responsibilities: [
      { text: 'Design and implement new features for our platform' },
      { text: 'Lead code reviews and maintain code quality standards' },
      { text: 'Collaborate with product and design teams' },
      { text: 'Mentor junior developers and contribute to their growth' },
      { text: 'Optimize application performance and security' },
    ],
  },
  {
    id: '2',
    title: 'Product Designer',
    department: 'Design',
    location: 'Hyderabad, India',
    type: 'Full-time',
    description:
      'Lead the visual and user experience design for Flyrlink. Shape how millions of professionals interact with our platform.',
    requirements: [
      { text: '4+ years of product design experience' },
      { text: 'Proficiency in Figma, Adobe XD, or similar tools' },
      { text: 'Strong portfolio showcasing UX/UI work' },
      { text: 'Understanding of design systems and accessibility standards' },
      { text: 'Experience with user research and usability testing' },
    ],
    responsibilities: [
      { text: 'Create wireframes, prototypes, and high-fidelity designs' },
      { text: 'Conduct user research and usability tests' },
      { text: 'Develop and maintain design systems' },
      { text: 'Collaborate with engineering and product teams' },
      { text: 'Ensure consistent brand identity across platforms' },
    ],
  },
  {
    id: '3',
    title: 'AI/ML Engineer',
    department: 'Engineering',
    location: 'Hyderabad, India',
    type: 'Full-time',
    description:
      "Develop and optimize machine learning models that power Flyrlink's intelligent matching and recommendation engine.",
    requirements: [
      { text: '3+ years of experience with ML/AI development' },
      { text: 'Proficiency in Python and ML frameworks (TensorFlow, PyTorch)' },
      { text: 'Understanding of NLP, recommendation systems, or similar' },
      { text: 'Experience with data processing and feature engineering' },
      { text: 'Knowledge of MLOps and model deployment practices' },
    ],
    responsibilities: [
      { text: 'Build and train machine learning models' },
      { text: 'Optimize model performance and accuracy' },
      { text: 'Implement ML pipelines and data preprocessing workflows' },
      { text: 'Collaborate with data science and engineering teams' },
      { text: 'Monitor and improve model performance in production' },
    ],
  },
  {
    id: '4',
    title: 'Marketing Manager',
    department: 'Marketing',
    location: 'Hyderabad, India',
    type: 'Full-time',
    description:
      'Drive growth and brand awareness for Flyrlink. Develop and execute marketing strategies that engage professionals worldwide.',
    requirements: [
      { text: '3+ years of digital marketing experience' },
      { text: 'Expertise in content marketing and SEO' },
      { text: 'Strong analytical and data-driven mindset' },
      { text: 'Experience with marketing automation tools' },
      { text: 'Excellent copywriting and communication skills' },
    ],
    responsibilities: [
      { text: 'Develop and execute marketing campaigns' },
      { text: 'Manage content calendar and social media presence' },
      { text: 'Analyze metrics and optimize campaigns for ROI' },
      { text: 'Collaborate with sales and product teams' },
      { text: 'Build partnerships and manage vendor relationships' },
    ],
  },
  {
    id: '5',
    title: 'Customer Success Manager',
    department: 'Customer Success',
    location: 'Hyderabad, India',
    type: 'Full-time',
    description:
      'Be the voice of our customers. Help professionals succeed on Flyrlink and drive retention and expansion.',
    requirements: [
      { text: '2+ years in customer success or account management' },
      { text: 'Strong communication and interpersonal skills' },
      { text: 'Problem-solving orientation with customer empathy' },
      { text: 'Proficiency in CRM tools and analytics' },
      { text: 'Ability to manage multiple client relationships' },
    ],
    responsibilities: [
      { text: 'Onboard and support new customers' },
      { text: 'Track customer health metrics and identify upsell opportunities' },
      { text: 'Gather customer feedback and communicate to product team' },
      { text: 'Resolve customer issues and ensure satisfaction' },
      { text: 'Conduct training sessions and create support resources' },
    ],
  },
  {
    id: '6',
    title: 'Content Writer',
    department: 'Marketing',
    location: 'Remote',
    type: 'Full-time',
    description:
      'Create compelling content that educates and engages our professional community. Tell the story of Flyrlink to the world.',
    requirements: [
      { text: '2+ years of professional writing experience' },
      { text: 'Strong research and fact-checking abilities' },
      { text: 'SEO writing knowledge and content optimization' },
      { text: 'Experience with various content formats' },
      { text: 'Excellent grammar and attention to detail' },
    ],
    responsibilities: [
      { text: 'Write blog posts, articles, and case studies' },
      { text: 'Create social media content and email campaigns' },
      { text: 'Conduct research on industry trends and topics' },
      { text: 'Optimize content for SEO and engagement' },
      { text: 'Collaborate with marketing and product teams on messaging' },
    ],
  },
];

const benefits = [
  {
    icon: Globe,
    tag: 'BENEFIT 01',
    title: 'Impact at Scale',
    description:
      'Work on a platform that connects millions of professionals and transforms careers globally.',
  },
  {
    icon: TrendingUp,
    tag: 'BENEFIT 02',
    title: 'Growth & Learning',
    description:
      'Continuous learning, mentorship, and career development paths that actually move your needle.',
  },
  {
    icon: Laptop,
    tag: 'BENEFIT 03',
    title: 'Flexible Work',
    description:
      'Work from anywhere with flexible schedules. We believe in trust and results, not hours.',
  },
  {
    icon: Banknote,
    tag: 'BENEFIT 04',
    title: 'Competitive Pay',
    description:
      'Competitive salaries, equity options, and comprehensive benefits packages.',
  },
  {
    icon: Sparkles,
    tag: 'BENEFIT 05',
    title: 'Innovative Culture',
    description:
      'Collaborate with talented, innovative minds in a fast-paced, creative environment.',
  },
  {
    icon: HeartPulse,
    tag: 'BENEFIT 06',
    title: 'Health & Wellness',
    description:
      'Comprehensive health insurance, wellness programs, and paid time off that actually gets taken.',
  },
];

const stats = [
  { value: String(jobs.length), label: 'OPEN ROLES' },
  { value: '5', label: 'DEPARTMENTS' },
  { value: 'IN', label: 'HYDERABAD · REMOTE' },
  { value: '4.9', label: 'GLASSDOOR' },
];

export default function CareersClient() {
  const [selectedDepartment, setSelectedDepartment] = useState<Department>('All');
  const [expanded, setExpanded] = useState<string | null>(null);

  const departments: Department[] = [
    'All',
    'Engineering',
    'Design',
    'Marketing',
    'Customer Success',
  ];

  const filteredJobs =
    selectedDepartment === 'All'
      ? jobs
      : jobs.filter((job) => job.department === selectedDepartment);

  return (
    <div className="bg-white">
      {/* --- HERO --- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-white py-20 md:py-28">
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 select-none font-serif italic font-medium leading-none text-brand/[0.05]"
          style={{ fontSize: 'clamp(140px, 20vw, 280px)' }}
        >
          careers
        </span>

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mb-10 flex items-center justify-between text-[10px] font-semibold tracking-[0.28em] text-gray-400">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
                WE&apos;RE HIRING
              </span>
            </div>
            <span>{jobs.length} OPEN ROLES</span>
          </div>

          <div className="grid items-end gap-8 md:grid-cols-[1.4fr_1fr] md:gap-14">
            <div>
              <div className="mb-4 text-[11px] font-semibold tracking-[0.28em] text-gray-400">
                CAREERS AT FLYRLINK
              </div>
              <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-navy-900 md:text-6xl lg:text-7xl">
                Build what&apos;s{' '}
                <span className="font-serif italic font-medium text-brand">
                  next.
                </span>
              </h1>
            </div>
            <div>
              <p className="text-base leading-relaxed text-gray-600 md:text-lg">
                Join the mission to connect the world&apos;s best professionals.
                We&apos;re building AI-powered matching, seamless collaboration,
                and tools that move careers forward.
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
                  · TEAM RATING
                </span>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-14 grid gap-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:grid-cols-4 md:gap-0 md:p-8">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`px-2 md:px-6 ${
                  i > 0 ? 'md:border-l md:border-gray-100' : ''
                }`}
              >
                <div className="font-serif text-3xl italic font-medium text-brand md:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-[10px] font-semibold tracking-[0.24em] text-gray-400">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BENEFITS (bento) --- */}
      <section className="relative overflow-hidden bg-gray-50 py-20 md:py-28">
        <div className="pointer-events-none absolute -right-20 top-20 h-[400px] w-[400px] rounded-full bg-brand/5 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center md:mb-14">
            <div className="mb-3 text-[11px] font-semibold tracking-[0.28em] text-gray-400">
              WHY FLYRLINK
            </div>
            <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-navy-900 md:text-4xl lg:text-5xl">
              Six reasons to{' '}
              <span className="font-serif italic font-medium text-brand">
                join us.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              // Bento sizing: 7-5, 5-7, 6-6
              const span =
                i === 0 || i === 3
                  ? 'md:col-span-7'
                  : i === 1 || i === 2
                    ? 'md:col-span-5'
                    : 'md:col-span-6';

              return (
                <div
                  key={b.title}
                  className={`group relative overflow-hidden rounded-2xl border border-gray-200/70 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/10 md:p-7 ${span}`}
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand/5 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-navy-900 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-white">
                        {b.tag}
                      </span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-xl font-bold text-navy-900 md:text-2xl">
                      {b.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-gray-600 md:text-base">
                      {b.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- OPEN ROLES --- */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center md:mb-12">
            <div className="mb-3 text-[11px] font-semibold tracking-[0.28em] text-gray-400">
              OPEN ROLES
            </div>
            <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-navy-900 md:text-4xl lg:text-5xl">
              Find your{' '}
              <span className="font-serif italic font-medium text-brand">
                next chapter.
              </span>
            </h2>
          </div>

          {/* Department filter */}
          <div className="mb-10 flex justify-center md:mb-12">
            <div className="inline-flex flex-wrap justify-center rounded-full bg-gray-100 p-1">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`rounded-full px-5 py-2 text-xs font-semibold transition-all duration-300 md:text-sm ${
                    selectedDepartment === dept
                      ? 'bg-brand text-white shadow-md shadow-brand/20'
                      : 'text-gray-600 hover:text-navy-900'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Job list */}
          <div className="space-y-3">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, i) => {
                const isOpen = expanded === job.id;
                return (
                  <div
                    key={job.id}
                    className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 ${
                      isOpen
                        ? 'border-brand/30 bg-white shadow-lg shadow-brand/10'
                        : 'border-gray-200/70 bg-white hover:border-brand/30 hover:shadow-md'
                    }`}
                  >
                    <button
                      onClick={() => setExpanded(isOpen ? null : job.id)}
                      className="flex w-full items-start gap-5 p-6 text-left md:items-center md:p-7"
                    >
                      <span className="font-serif text-3xl italic font-medium leading-none text-gray-200 group-hover:text-brand/40 md:text-4xl">
                        {String(i + 1).padStart(2, '0')}
                      </span>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold tracking-[0.22em] text-gray-400">
                          <span className="rounded-full bg-brand/10 px-2 py-0.5 text-brand">
                            {job.department.toUpperCase()}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="h-3 w-3" />
                            {job.location.toUpperCase()}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Briefcase className="h-3 w-3" />
                            {job.type.toUpperCase()}
                          </span>
                        </div>
                        <h3 className="mt-2 font-display text-xl font-bold text-navy-900 md:text-2xl">
                          {job.title}
                        </h3>
                        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-600">
                          {job.description}
                        </p>
                      </div>

                      <span
                        className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? 'border-brand bg-brand text-white rotate-45'
                            : 'border-gray-200 text-gray-400 group-hover:border-brand/40 group-hover:text-brand'
                        }`}
                      >
                        <span className="text-xl font-semibold">+</span>
                      </span>
                    </button>

                    {/* Expanded details */}
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-gray-100 px-6 pb-7 pt-6 md:px-7">
                          <div className="grid gap-6 md:grid-cols-2 md:gap-10">
                            <div>
                              <div className="mb-3 text-[10px] font-semibold tracking-[0.24em] text-brand">
                                WHAT WE LOOK FOR
                              </div>
                              <ul className="space-y-2">
                                {job.requirements.map((r, idx) => (
                                  <li
                                    key={idx}
                                    className="flex gap-3 text-sm text-gray-600"
                                  >
                                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-brand" />
                                    {r.text}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <div className="mb-3 text-[10px] font-semibold tracking-[0.24em] text-brand">
                                WHAT YOU&apos;LL DO
                              </div>
                              <ul className="space-y-2">
                                {job.responsibilities.map((r, idx) => (
                                  <li
                                    key={idx}
                                    className="flex gap-3 text-sm text-gray-600"
                                  >
                                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-brand" />
                                    {r.text}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
                            <p className="text-[11px] text-gray-500">
                              Questions about this role?{' '}
                              <Link
                                href="/contact"
                                className="text-brand hover:underline"
                              >
                                Reach out
                              </Link>
                              .
                            </p>
                            <a
                              href="mailto:careers@flyrlink.com?subject=Application: {job.title}"
                              className="group/btn inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white shadow-xl shadow-navy-900/20 transition-all duration-300 hover:bg-navy-800 hover:shadow-brand/20"
                            >
                              Apply for this role
                              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-navy-900 transition-transform group-hover/btn:translate-x-0.5">
                                <ArrowRight className="h-3 w-3" />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="rounded-2xl border border-gray-200/70 bg-white p-12 text-center">
                <p className="text-gray-600">
                  No roles open in the{' '}
                  <span className="font-semibold text-navy-900">
                    {selectedDepartment}
                  </span>{' '}
                  department right now. Check back soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* --- DON'T SEE YOUR ROLE CTA --- */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-navy-950 p-10 md:p-16">
            <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-30" />
            <div className="pointer-events-none absolute -top-20 right-0 h-[320px] w-[320px] rounded-full bg-brand/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 left-0 h-[320px] w-[320px] rounded-full bg-brand/10 blur-3xl" />

            <div className="relative grid items-center gap-8 md:grid-cols-[1.3fr_1fr]">
              <div>
                <div className="mb-3 text-[11px] font-semibold tracking-[0.28em] text-brand-300">
                  GENERAL APPLICATION
                </div>
                <h3 className="font-display text-3xl font-bold leading-[1.05] text-white md:text-4xl lg:text-5xl">
                  Don&apos;t see the{' '}
                  <span className="font-serif italic font-medium text-brand-300">
                    right role?
                  </span>
                </h3>
                <p className="mt-5 max-w-lg text-gray-400">
                  We&apos;re always meeting great people. Send us your story and
                  how you&apos;d like to contribute - we read every message.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
                <a
                  href="mailto:careers@flyrlink.com"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-950 shadow-xl transition-all duration-300 hover:bg-gray-100 hover:shadow-brand/30"
                >
                  Get in touch
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-navy-950 text-white transition-transform group-hover:translate-x-0.5">
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </a>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-1.5 px-5 py-3 text-sm font-semibold text-white/90 hover:text-white"
                >
                  Contact us
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
