import React, { useState, memo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { SEO } from '../components/SEO';
import { Card } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { ChevronDown, ChevronUp, HelpCircle, User, Shield, Briefcase, Star, ClipboardList, CreditCard, UserCircle } from 'lucide-react';

type FaqItem = {
  question: string;
  answer: string;
};

type FaqCategory = {
  id: string;
  title: string;
  icon: React.ReactNode;
  items: FaqItem[];
};

// FAQ Item Component
const FaqItem = ({ 
  faq, 
  isOpen, 
  onClick 
}: { 
  faq: FaqItem; 
  isOpen: boolean; 
  onClick: () => void;
}) => (
  <Card className="overflow-hidden mb-3 hover:shadow-md transition-shadow">
    <button
      onClick={onClick}
      className="w-full px-5 py-4 text-left focus:outline-none flex justify-between items-start"
      aria-expanded={isOpen}
    >
      <h3 className="text-base font-medium text-gray-800 pr-4">{faq.question}</h3>
      {isOpen ? (
        <ChevronUp className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
      ) : (
        <ChevronDown className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
      )}
    </button>
    <div 
      className={`px-5 pb-4 pt-0 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}
      aria-hidden={!isOpen}
    >
      <p className="text-gray-600 text-sm whitespace-pre-line">{faq.answer}</p>
    </div>
  </Card>
);

// FAQ Category Component - Simplified without the category header
const FaqCategory = ({ 
  category, 
  openIndex, 
  onToggle 
}: { 
  category: FaqCategory; 
  openIndex: number | null; 
  onToggle: (index: number) => void;
}) => (
  <div className="space-y-4">
    {category.items.map((faq, index) => (
      <FaqItem
        key={`${category.id}-${index}`}
        faq={faq}
        isOpen={openIndex === index}
        onClick={() => onToggle(openIndex === index ? -1 : index)}
      />
    ))}
  </div>
);

const FaqPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndices, setOpenIndices] = useState<{[key: string]: number | null}>({});
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    general: true, // First category expanded by default
    users: false,
    experts: false,
    business: false,
    services: false,
    payments: false,
    account: false,
    security: false,
  });

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => {
      // If the clicked category is already open, close it
      if (prev[categoryId]) {
        return { ...prev, [categoryId]: false };
      }
      // Otherwise, close all categories and open the clicked one
      const newState = Object.keys(prev).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {} as Record<string, boolean>);
      return { ...newState, [categoryId]: true };
    });
  };
  
  // FAQ Data
  const faqCategories: FaqCategory[] = [
    {
      id: 'general',
      title: 'General Questions',
      icon: <HelpCircle className="w-6 h-6 text-sky-500" />,
      items: [
        {
          question: 'What is FLYRLINK, and how does it work?',
          answer: 'FLYRLINK is a professional networking and talent discovery platform where General Users, Experts, Startups, and Businesses can connect, collaborate, and grow. Experts can offer services, monetize content, and provide consultations, while startups and businesses can promote their services and gain expert support.'
        },
        {
          question: 'Who can use FLYRLINK? Is it for individuals, businesses, or both?',
          answer: 'FLYRLINK is designed for both individuals and businesses.\n\n' +
                 '• General Users can engage with expert content and seek professional guidance.\n' +
                 '• Experts & Freelancers can offer services, share knowledge, and monetize content.\n' +
                 '• Startups & Small Businesses can promote their services, connect with experts, and gain visibility.'
        },
        {
          question: 'Is FLYRLINK available globally, or is it restricted to certain regions?',
          answer: 'Currently, FLYRLINK is available in India. A global release is planned soon, allowing users from different countries to join and benefit from the platform. Stay tuned for updates!'
        },
        {
          question: 'How do I sign up and create a profile on FLYRLINK?',
          answer: 'You can sign up using your email or social accounts. Once registered, complete your profile with skills, experience, and services, and if you\'re an expert, apply for verification to enhance trust and credibility.'
        },
        {
          question: 'Is FLYRLINK free to use, or are there any charges?',
          answer: 'FLYRLINK offers free access to all users. Experts can list their services for free, but for verification and premium features like priority listing and promotional ads, a customized pricing applies.'
        },
        {
          question: 'Can I use FLYRLINK for networking and connecting with other professionals?',
          answer: 'Yes! FLYRLINK allows you to connect with experts, businesses, and professionals, engage in discussions, follow experts, and collaborate on projects or mentorship opportunities.'
        },
        {
          question: 'How can I search for experts, businesses, or services in FLYRLINK?',
          answer: 'Use the search feature in the app to find verified experts, startups, and service providers based on category, location, or expertise. You can also check posts and video content in the feed for recommendations.'
        }
      ]
    },
    {
      id: 'users',
      title: 'User Role & Usage',
      icon: <User className="w-6 h-6 text-sky-500" />,
      items: [
        {
          question: 'How do I create an account on FLYRLINK?',
          answer: 'Users can sign up with an email or social account, select User role and then complete their profile with basic details. Once registered, users can browse expert services, post content, and engage with the community.'
        },
        {
          question: 'How do I book a service appointment with an expert?',
          answer: 'Go to the expert\'s profile or service listing, select the desired service, choose an available date and time, and confirm the booking. The expert will receive a notification and can approve the appointment.'
        },
        {
          question: 'How can I pay for a service on FLYRLINK?',
          answer: 'Users can securely pay for services through the in-app payment system. Payment options may include credit/debit cards, UPI, or other supported digital payment methods.'
        },
        {
          question: 'Can users post in the feed and upload videos?',
          answer: 'Yes! Users can post updates, share experiences, ask questions, and upload videos to engage with the community. However, monetization is available only for verified experts.'
        },
        {
          question: 'How old do I need to be to use FLYRLINK to book services?',
          answer: 'Users must be at least 18 years old to book services and make payments on FLYRLINK. Minors may use the platform under parental guidance for educational content.'
        }
      ]
    },
    {
      id: 'experts',
      title: 'Expert Roles & Monetization',
      icon: <Star className="w-6 h-6 text-sky-500" />,
      items: [
        {
          question: 'How do I create an expert account on FLYRLINK?',
          answer: 'Sign up using your email or social account, then select "Expert Profile" during setup. Complete your profile with skills, experience, and services offered. You can also apply for verification to increase trust and visibility.'
        },
        {
          question: 'How can I list my services on FLYRLINK?',
          answer: 'Go to your profile settings, select "Create a Service", and fill in details such as service title, description, pricing, and availability (online, in-person, home visit). Once listed, users can book your services directly.'
        },
        {
          question: 'Can I set my own prices for services?',
          answer: 'Yes! Experts can define their own pricing based on market demand, expertise, and service quality. You can also offer discounted or free introductory sessions to attract new clients.'
        },
        {
          question: 'How do I earn money by uploading videos on FLYRLINK?',
          answer: 'Experts can upload high-quality videos such as tutorials, how-to guides, and industry insights. Earnings are based on video views, in-app ads, and engagement metrics (likes, comments, and shares).'
        },
        {
          question: 'Can I monetize blogs and written content?',
          answer: 'Currently, FLYRLINK monetizes videos only. However, experts can use blog posts to gain visibility, attract clients, and promote their paid services.'
        },
        {
          question: 'What is the benefit of getting verified as an expert?',
          answer: 'A verified badge helps build trust with users, increases engagement, and improves visibility in searches. Verified experts also qualify for monetization and priority listing opportunities.'
        },
        {
          question: 'How can I increase my visibility as an expert?',
          answer: '✅ Post high-quality content (videos, blogs, discussions) regularly.\n' +
                 '✅ Engage with users through comments, Q&A, and consultations.\n' +
                 '✅ Apply for priority listing to feature your profile at the top.'
        },
        {
          question: 'How do I get priority listing or sponsored ads?',
          answer: 'Experts looking for more exposure can apply for priority listing and sponsored ads by contacting the FLYRLINK team. These services help increase visibility and reach more users.'
        },
        {
          question: 'Is there an eligibility requirement to start earning?',
          answer: 'Yes, experts must meet a minimum engagement threshold (favorites, video views, likes, comments, shares) before earning from their content. This ensures only high-quality content is monetized.'
        },
        {
          question: 'Can I offer both online and in-person services?',
          answer: 'Yes! Experts can specify whether they provide online sessions, in-person consultations, or home visits in their service listings. Users can book based on location and availability.'
        }
      ]
    },
    {
      id: 'business',
      title: 'Startup & Business Growth',
      icon: <Briefcase className="w-6 h-6 text-sky-500" />,
      items: [
        {
          question: 'How can startups and small businesses use FLYRLINK to grow?',
          answer: 'Startups and small businesses can list their services, connect with verified experts, promote their brand through posts and videos, and engage with potential customers. They can also participate in Startup Saturday for extra visibility.'
        },
        {
          question: 'Can startups collaborate with experts on FLYRLINK?',
          answer: 'Yes! Startups can hire experts for business consulting, mentorship, and marketing strategies. Verified experts can provide growth advice, funding guidance, and operational insights.'
        },
        {
          question: 'How can startups increase their visibility on FLYRLINK?',
          answer: '✅ Post engaging content regularly (videos, insights, offers).\n' +
                 '✅ Utilize priority listing & sponsored ads for better reach.\n' +
                 '✅ Participate in Startup Saturday for promotional support.\n' +
                 '✅ Offer free samples or introductory discounts to attract customers.'
        },
        {
          question: 'Can businesses sell products or services directly on FLYRLINK?',
          answer: 'Businesses can list services that users can book and pay for directly through the app. However, product sales are not currently supported, but businesses can use posts and videos to drive traffic to their offerings.'
        },
        {
          question: 'How can startups apply for priority listing and sponsored ads?',
          answer: 'Startups and small businesses must contact the FLYRLINK team for customized sponsored posts and priority listing options to increase visibility and attract targeted customers. Contact the FLYRLINK team for advertising and top priority listings.'
        }
      ]
    },
    {
      id: 'services',
      title: 'Service Types & Offerings',
      icon: <ClipboardList className="w-6 h-6 text-sky-500" />,
      items: [
        {
          question: 'What types of services can experts offer on FLYRLINK?',
          answer: 'Experts can offer a variety of services, including:\n' +
                 '✅ Online consultations (video calls, chat-based advice).\n' +
                 '✅ In-person services (local meetups, office visits).\n' +
                 '✅ Home visits (for business, consulting, coaching, or personal services).'
        },
        {
          question: 'How can I offer services on FLYRLINK?',
          answer: 'Verified experts can create a service listing by going to their profile settings, selecting "Create a Service", and adding details such as service type, description, pricing, and availability (online, in-person, or home visit).'
        },
        {
          question: 'Can experts create custom services based on user requirements?',
          answer: 'Yes! Experts can offer tailor-made services based on client needs. Users can send service requests, and experts can customize the scope, duration, and pricing accordingly.'
        },
        {
          question: 'What payment options are available for booking services?',
          answer: 'Users can pay for services using multiple payment methods, including:\n' +
                 '✅ Credit/Debit Cards\n' +
                 '✅ UPI\n' +
                 '✅ Net Banking\n' +
                 '✅ Cash Payments (for in-person or home visit services, based on expert preference).'
        },
        {
          question: 'Can experts offer both free and paid services?',
          answer: 'Yes! Experts can:\n' +
                 '✅ Offer free introductory services to attract clients.\n' +
                 '✅ Provide discounted services for a limited time.\n' +
                 '✅ Charge based on service quality, expertise, and demand once they build a reputation.'
        },
        {
          question: 'How do users book and pay for free services?',
          answer: 'Users can book free services the same way as paid services. If an expert lists a service as free, no payment is required at checkout, making it easier for users to try the service and leave reviews.'
        }
      ]
    },
    {
      id: 'payments',
      title: 'Payments & Support',
      icon: <CreditCard className="w-6 h-6 text-sky-500" />,
      items: [
        {
          question: 'How do experts receive payments for services?',
          answer: 'Payments are processed directly through the FLYRLINK platform to ensure secure transactions between experts and clients.'
        },
        {
          question: 'How do users pay for expert services?',
          answer: 'Users can book expert services and pay securely through the in-app payment system and cash payment to the service provider.'
        },
        {
          question: 'Can experts change service pricing?',
          answer: 'Yes, experts have full control over their pricing and can update their rates based on demand, quality, and expertise.'
        }
      ]
    },
    {
      id: 'account',
      title: 'Account & Suspension',
      icon: <UserCircle className="w-6 h-6 text-sky-500" />,
      items: [
        {
          question: 'How can I update my profile details on FLYRLINK?',
          answer: 'You can update your name, profile picture, bio, and other details by going to Settings > Edit Profile in the app. Changes will be saved instantly.'
        },
        {
          question: 'Can I switch from a user account to an expert account?',
          answer: 'Yes! If you want to become an expert, go to Settings > Upgrade to Expert, fill in your expertise details, and submit a verification request. Once approved, your account will be upgraded.'
        },
        {
          question: 'Why was my account suspended or restricted?',
          answer: 'FLYRLINK may suspend accounts due to:\n' +
                 '✅ Violations of community guidelines (spam, abuse, fraud).\n' +
                 '✅ Inappropriate content or behavior reported by users.\n' +
                 '✅ Multiple failed verification attempts or fraudulent activity.\n' +
                 'If you believe your suspension was an error, contact support@flyrlink.com for a review.'
        },
        {
          question: 'Can I recover a suspended or deactivated account?',
          answer: 'If your account was temporarily suspended, you can request a review by contacting support. However, permanently deleted accounts cannot be restored.'
        }
      ]
    },
    {
      id: 'security',
      title: 'Security & Privacy',
      icon: <Shield className="w-6 h-6 text-sky-500" />,
      items: [
        {
          question: 'How does FLYRLINK protect my personal information?',
          answer: 'FLYRLINK uses end-to-end encryption, secure payment gateways, and strict data privacy policies to protect user information. Your personal details are never shared without your consent.'
        },
        {
          question: 'How can I enable two-factor authentication (2FA) for my account?',
          answer: 'Currently, FLYRLINK does not support two-factor authentication (2FA) but recommends using a strong password and enabling device-level security like fingerprint or face ID for additional protection.'
        },
        {
          question: 'How do I report a suspicious user or scam?',
          answer: 'If you come across a fraudulent profile, spam, or suspicious activity, go to the user\'s profile, click "Report", and select the reason. Our team will review and take action accordingly.'
        },
        {
          question: 'What should I do if I suspect my account has been hacked?',
          answer: 'If you notice unauthorized activity, immediately:\n' +
                 '✅ Change your password under Settings > Security.\n' +
                 '✅ Log out of all devices under Account Settings.\n' +
                 '✅ Contact FLYRLINK support if you need further assistance.'
        },
        {
          question: 'How does FLYRLINK handle payment security?',
          answer: 'All transactions are processed through secure payment gateways with encryption to prevent fraud. FLYRLINK does not store sensitive payment information on its servers.'
        },
        {
          question: 'Does FLYRLINK share my data with third parties?',
          answer: 'No, FLYRLINK does not sell or share user data with third-party companies. Your personal information is used strictly to enhance your experience on the platform.'
        }
      ]
    }
  ];

  // Toggle FAQ item open/close state
  const toggleFaq = (categoryId: string, index: number) => {
    setOpenIndices(prev => ({
      ...prev,
      [categoryId]: prev[categoryId] === index ? -1 : index
    }));
  };

  // Filter FAQs based on search query
  const filteredCategories = faqCategories
    .map(category => ({
      ...category,
      items: searchQuery
        ? category.items.filter(
            item =>
              item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.answer.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : category.items
    }))
    .filter(category => category.items.length > 0);

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap(category => 
      category.items.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    )
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Frequently Asked Questions"
        description="Find answers to common questions about Flyrlink. Learn about expert consultations, platform features, pricing, security, and how to connect with verified professionals."
        keywords="flyrlink faq, frequently asked questions, help center, expert platform questions, user guide, platform support, common questions, how to use flyrlink"
        jsonLd={faqSchema}
      />
      <Navbar />
      
      <main className="flex-1 bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-sky-50 to-blue-50 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white/80 text-sky-600 text-sm font-medium mb-6 shadow-sm">
                <HelpCircle className="w-4 h-4 mr-2" />
                We're here to help
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Find quick answers to common questions about FLYRLINK. Can't find what you're looking for? 
                <a href="/contact" className="text-sky-600 hover:underline font-medium ml-1">Contact our support team</a>.
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search questions..."
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-gray-700 placeholder-gray-400 text-base shadow-sm transition-all duration-200"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="space-y-8">
              {searchQuery ? (
                // Show filtered results
                <>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Search Results for "{searchQuery}"
                  </h2>
                  {filteredCategories.length > 0 ? (
                    filteredCategories.map((category) => (
                      <div key={category.id} className="mb-8">
                        <FaqCategory
                          category={category}
                          openIndex={openIndices[category.id] ?? -1}
                          onToggle={(index) => toggleFaq(category.id, index)}
                        />
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-16 px-6 bg-gray-50 rounded-2xl">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-sky-50 flex items-center justify-center">
                        <HelpCircle className="w-8 h-8 text-sky-500" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                      <p className="text-gray-500 max-w-md mx-auto">
                        We couldn't find any questions matching your search. Try different keywords or 
                        <a href="/contact" className="text-sky-600 hover:underline font-medium ml-1">contact support</a>.
                      </p>
                    </div>
                  )}
                </>
              ) : (
                // Show all categories in accordion
                <div className="space-y-6">
                  {faqCategories.map((category) => (
                    <div key={category.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                      <button
                        onClick={() => toggleCategory(category.id)}
                        className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center">
                          <span className="text-sky-500 mr-3">
                            {React.cloneElement(category.icon as React.ReactElement, {
                              className: 'w-5 h-5',
                            })}
                          </span>
                          <h2 className="text-xl font-semibold text-gray-800">
                            {category.title}
                          </h2>
                        </div>
                        <ChevronDown 
                          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${expandedCategories[category.id] ? 'transform rotate-180' : ''}`} 
                        />
                      </button>
                      
                      <div 
                        className={`overflow-hidden transition-all duration-300 ${expandedCategories[category.id] ? 'max-h-[5000px]' : 'max-h-0'}`}
                        aria-hidden={!expandedCategories[category.id]}
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                          <FaqCategory
                            category={category}
                            openIndex={openIndices[category.id] ?? -1}
                            onToggle={(index) => toggleFaq(category.id, index)}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-sky-600 to-blue-600 py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Still have questions?
              </h2>
              <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto">
                Our support team is here to help you with any questions or concerns you might have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white text-base font-semibold rounded-xl text-white bg-transparent hover:bg-white/10 transition-all duration-200 shadow-sm"
                >
                  Contact Support
                </a>
                <a
                  href="mailto:support@flyrlink.com"
                  className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-transparent text-base font-semibold rounded-xl text-sky-700 bg-white hover:bg-gray-50 transition-all duration-200 shadow-sm"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default memo(FaqPage);
