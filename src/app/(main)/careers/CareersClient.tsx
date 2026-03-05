'use client';

import { useState } from 'react';
import { MapPin, Clock, Briefcase, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type Department = 'All' | 'Engineering' | 'Design' | 'Marketing' | 'Customer Success';

interface Requirement {
  text: string;
}

interface Responsibility {
  text: string;
}

interface Job {
  id: string;
  title: string;
  department: Department;
  location: string;
  type: string;
  description: string;
  requirements: Requirement[];
  responsibilities: Responsibility[];
}

const jobs: Job[] = [
  {
    id: '1',
    title: 'Senior Full Stack Engineer',
    department: 'Engineering',
    location: 'Hyderabad, India',
    type: 'Full-time',
    description: 'Build scalable infrastructure for our AI-powered expert network platform. You\'ll work with modern technologies and mentor junior engineers.',
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
      { text: 'Collaborate with product and design teams on requirements' },
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
    description: 'Lead the visual and user experience design for Flyrlink. Shape how millions of professionals interact with our platform.',
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
    description: 'Develop and optimize machine learning models that power Flyrlink\'s intelligent matching and recommendation engine.',
    requirements: [
      { text: '3+ years of experience with ML/AI development' },
      { text: 'Proficiency in Python and ML frameworks (TensorFlow, PyTorch)' },
      { text: 'Understanding of NLP, recommendation systems, or similar domains' },
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
    description: 'Drive growth and brand awareness for Flyrlink. Develop and execute marketing strategies that engage professionals worldwide.',
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
    description: 'Be the voice of our customers. Help professionals succeed on Flyrlink and drive retention and expansion.',
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
    description: 'Create compelling content that educates and engages our professional community. Tell the story of Flyrlink to the world.',
    requirements: [
      { text: '2+ years of professional writing experience' },
      { text: 'Strong research and fact-checking abilities' },
      { text: 'SEO writing knowledge and content optimization' },
      { text: 'Experience with various content formats (blog, social, email)' },
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
    icon: 'Impact at Scale',
    title: 'Impact at Scale',
    description: 'Work on a platform that connects millions of professionals and transforms careers globally.',
  },
  {
    icon: 'Growth & Learning',
    title: 'Growth & Learning',
    description: 'Continuous learning opportunities, mentorship programs, and career development paths.',
  },
  {
    icon: 'Flexible Work',
    title: 'Flexible Work',
    description: 'Work from anywhere with flexible schedules. We believe in trust and results, not hours.',
  },
  {
    icon: 'Competitive Compensation',
    title: 'Competitive Compensation',
    description: 'Competitive salaries, equity options, and comprehensive benefits packages.',
  },
  {
    icon: 'Innovative Culture',
    title: 'Innovative Culture',
    description: 'Collaborate with talented, innovative minds in a fast-paced, creative environment.',
  },
  {
    icon: 'Health & Wellness',
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance, wellness programs, and paid time off.',
  },
];

export default function CareersClient() {
  const [selectedDepartment, setSelectedDepartment] = useState<Department>('All');

  const departments: Department[] = ['All', 'Engineering', 'Design', 'Marketing', 'Customer Success'];

  const filteredJobs = selectedDepartment === 'All'
    ? jobs
    : jobs.filter((job) => job.department === selectedDepartment);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 text-brand text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-6 h-px bg-brand/40" />
            Careers
            <span className="w-6 h-px bg-brand/40" />
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="text-navy-900">Join Our Team</span>
            <span className="block text-gradient">
              Shape the Future of Professional Networking
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Be part of a mission to connect the world&apos;s best professionals. At Flyrlink, we&apos;re building the future of expert networking with AI-powered matching and seamless collaboration.
          </p>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-navy-900 text-center mb-12 tracking-tight">Why Join Flyrlink?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-white card-premium rounded-xl border-gray-200/80 hover:border-brand/30">
                <CardContent className="p-8">
                  <div className="mb-4 w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand font-semibold text-sm">
                    {benefit.icon.split(' ')[0].charAt(0)}
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-navy-900 text-center mb-12 tracking-tight">Open Positions</h2>

          {/* Department Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedDepartment === dept
                    ? 'bg-brand text-white shadow-md shadow-brand/20'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Job Cards */}
          <div className="space-y-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <Card key={job.id} className="bg-white card-premium rounded-xl border-gray-200/80 hover:border-brand/30">
                  <CardContent className="p-8">
                    {/* Job Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div className="flex-1">
                        <h3 className="font-display text-2xl font-bold text-navy-900 mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <span className="inline-flex items-center gap-2 text-gray-600">
                            <Briefcase className="w-4 h-4" />
                            {job.department}
                          </span>
                          <span className="inline-flex items-center gap-2 text-gray-600">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="inline-flex items-center gap-2 text-gray-600">
                            <Clock className="w-4 h-4" />
                            {job.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-6">{job.description}</p>

                    {/* Requirements and Responsibilities Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      {/* Requirements */}
                      <div>
                        <h4 className="font-semibold text-navy-900 mb-4">What We&apos;re Looking For</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="flex gap-3 text-gray-600">
                              <span className="text-brand font-bold mt-1">•</span>
                              <span>{req.text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Responsibilities */}
                      <div>
                        <h4 className="font-semibold text-navy-900 mb-4">What You&apos;ll Do</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, index) => (
                            <li key={index} className="flex gap-3 text-gray-600">
                              <span className="text-brand font-bold mt-1">•</span>
                              <span>{resp.text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button className="bg-brand hover:bg-brand-600 text-white font-medium inline-flex items-center gap-2">
                      Apply Now
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">
                  No positions available in the {selectedDepartment} department right now. Check back soon!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-navy-900 rounded-2xl p-12 text-center text-white">
            <h2 className="font-display text-3xl font-bold mb-4 tracking-tight">Don&apos;t See the Right Role?</h2>
            <p className="text-lg text-gray-300 mb-8">
              We&apos;re always looking for talented individuals to join our team. Send us your resume and let us know how you&apos;d like to contribute to Flyrlink&apos;s mission.
            </p>
            <Button className="bg-white text-navy-900 hover:bg-gray-100 font-semibold px-8 py-3">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
