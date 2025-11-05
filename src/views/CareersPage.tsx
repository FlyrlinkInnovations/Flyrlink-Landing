import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { MapPin, Clock, Briefcase, ChevronRight } from 'lucide-react';

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

const CareersPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('All');

  const jobs: Job[] = [
    {
      id: '1',
      title: 'Senior Full Stack Engineer',
      department: 'Engineering',
      location: 'Bangalore, India',
      type: 'Full-time',
      description: 'Join our engineering team to build scalable AI-powered solutions that connect experts with learners worldwide.',
      requirements: [
        '5+ years of experience in full-stack development',
        'Strong proficiency in React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS/GCP)',
        'Knowledge of AI/ML integration is a plus'
      ],
      responsibilities: [
        'Design and develop scalable web applications',
        'Collaborate with product and design teams',
        'Mentor junior engineers',
        'Contribute to technical architecture decisions'
      ]
    },
    {
      id: '2',
      title: 'Product Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      description: 'Shape the future of our platform by creating intuitive and delightful user experiences.',
      requirements: [
        '3+ years of product design experience',
        'Strong portfolio showcasing UX/UI work',
        'Proficiency in Figma and design systems',
        'Understanding of user research methodologies'
      ],
      responsibilities: [
        'Design end-to-end user experiences',
        'Create and maintain design systems',
        'Conduct user research and usability testing',
        'Collaborate with engineering and product teams'
      ]
    },
    {
      id: '3',
      title: 'AI/ML Engineer',
      department: 'Engineering',
      location: 'Bangalore, India',
      type: 'Full-time',
      description: 'Build and optimize our AI-powered matching algorithms to connect users with the right experts.',
      requirements: [
        '4+ years of ML/AI development experience',
        'Strong Python and TensorFlow/PyTorch skills',
        'Experience with recommendation systems',
        'Knowledge of NLP and computer vision'
      ],
      responsibilities: [
        'Develop and improve AI matching algorithms',
        'Build ML models for user recommendations',
        'Optimize model performance and accuracy',
        'Work with data science team on new features'
      ]
    },
    {
      id: '4',
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'Mumbai, India',
      type: 'Full-time',
      description: 'Drive growth and brand awareness through strategic marketing campaigns and partnerships.',
      requirements: [
        '5+ years in digital marketing',
        'Experience with B2B/B2C growth strategies',
        'Strong analytics and data-driven approach',
        'Excellent communication skills'
      ],
      responsibilities: [
        'Develop and execute marketing strategies',
        'Manage digital marketing campaigns',
        'Build brand awareness and partnerships',
        'Analyze campaign performance and ROI'
      ]
    },
    {
      id: '5',
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Remote',
      type: 'Full-time',
      description: 'Ensure our users get maximum value from Flyrlink by providing exceptional support and guidance.',
      requirements: [
        '3+ years in customer success or account management',
        'Excellent communication and problem-solving skills',
        'Experience with SaaS products',
        'Empathy and customer-first mindset'
      ],
      responsibilities: [
        'Onboard and support new customers',
        'Build strong customer relationships',
        'Identify upsell and expansion opportunities',
        'Gather customer feedback for product improvements'
      ]
    },
    {
      id: '6',
      title: 'Content Writer',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      description: 'Create compelling content that educates, engages, and converts our audience.',
      requirements: [
        '3+ years of content writing experience',
        'Strong portfolio of published work',
        'SEO knowledge and best practices',
        'Ability to write for different audiences'
      ],
      responsibilities: [
        'Write blog posts, articles, and marketing copy',
        'Create content for social media and email campaigns',
        'Collaborate with marketing team on content strategy',
        'Optimize content for SEO'
      ]
    }
  ];

  const departments = ['All', ...Array.from(new Set(jobs.map(job => job.department)))];

  const filteredJobs = selectedDepartment === 'All'
    ? jobs
    : jobs.filter(job => job.department === selectedDepartment);

  return (
    <>
      <SEO
        title="Careers"
        description="Join Flyrlink and help us build the future of expert networking. Explore open positions across engineering, design, marketing, and more."
        keywords="flyrlink careers, jobs, hiring, work at flyrlink, engineering jobs, design jobs"
      />

      <div className="min-h-screen bg-white">
        <Navbar />

        <div className="pt-20">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-b from-sky-50 to-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-navy-900">
                Join Our Team
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Help us build the future of expert networking. We're looking for passionate individuals
                who want to make a real impact on how people connect and learn.
              </p>
            </div>
          </section>

          {/* Why Join Flyrlink */}
          <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">
                Why Join Flyrlink?
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Impact at Scale',
                    description: 'Your work will directly impact thousands of experts and learners worldwide.'
                  },
                  {
                    title: 'Growth & Learning',
                    description: 'Continuous learning opportunities with access to expert mentorship and courses.'
                  },
                  {
                    title: 'Flexible Work',
                    description: 'Remote-friendly culture with flexible hours and work-life balance.'
                  },
                  {
                    title: 'Competitive Compensation',
                    description: 'Market-leading salaries, equity options, and comprehensive benefits.'
                  },
                  {
                    title: 'Innovative Culture',
                    description: 'Work with cutting-edge AI technology in a collaborative environment.'
                  },
                  {
                    title: 'Health & Wellness',
                    description: 'Comprehensive health insurance, wellness programs, and mental health support.'
                  }
                ].map((benefit, index) => (
                  <div key={index} className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300">
                    <h3 className="text-lg font-bold text-navy-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Job Listings */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-navy-900 mb-6">
                  Open Positions
                </h2>

                {/* Department Filter */}
                <div className="flex flex-wrap gap-3">
                  {departments.map((dept) => (
                    <button
                      key={dept}
                      onClick={() => setSelectedDepartment(dept)}
                      className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                        selectedDepartment === dept
                          ? 'bg-sky-600 text-white'
                          : 'bg-white text-gray-700 border border-gray-200 hover:border-sky-600'
                      }`}
                    >
                      {dept}
                    </button>
                  ))}
                </div>
              </div>

              {/* Job Cards */}
              <div className="space-y-6">
                {filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-navy-900 mb-2 group-hover:text-sky-600 transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-gray-600">
                          <div className="flex items-center gap-2">
                            <Briefcase className="w-4 h-4" />
                            <span className="text-sm">{job.department}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{job.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm">{job.type}</span>
                          </div>
                        </div>
                      </div>

                      <button className="flex items-center gap-2 px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg transition-all duration-300 whitespace-nowrap">
                        Apply Now
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-gray-700 mb-6">
                      {job.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-navy-900 mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                              <span className="text-sky-600 mt-1">•</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-navy-900 mb-3">Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, index) => (
                            <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                              <span className="text-sky-600 mt-1">•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredJobs.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-gray-600 text-lg">
                    No positions available in this department at the moment.
                  </p>
                  <p className="text-gray-500 mt-2">
                    Check back soon or view all open positions.
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">
                Don't See the Right Role?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We're always looking for talented individuals. Send us your resume and
                we'll keep you in mind for future opportunities.
              </p>
              <button className="px-8 py-4 bg-navy-900 hover:bg-navy-800 text-white font-semibold rounded-lg transition-all duration-300 shadow-sm hover:shadow-md">
                Send Your Resume
              </button>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default CareersPage;
