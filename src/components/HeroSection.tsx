import React, { useEffect, useState, memo } from 'react';
import { Brain, Zap, ArrowRight, Check, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentExpertIndex, setCurrentExpertIndex] = useState(0);

  const experts = [
    {
      initials: 'RK',
      name: 'Rajesh Kumar',
      title: 'Business Strategy',
      rating: 5,
      reviews: 350,
      sessions: 800,
      gradient: 'from-sky-400 to-sky-600',
      image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
      initials: 'PS',
      name: 'Priya Sharma',
      title: 'Tech Expert',
      rating: 5,
      reviews: 420,
      sessions: 950,
      gradient: 'from-purple-400 to-purple-600',
      image: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    {
      initials: 'AK',
      name: 'Amit Kapoor',
      title: 'Finance Advisor',
      rating: 5,
      reviews: 280,
      sessions: 650,
      gradient: 'from-green-400 to-green-600',
      image: 'https://randomuser.me/api/portraits/men/52.jpg'
    },
    {
      initials: 'NK',
      name: 'Neha Kapoor',
      title: 'Marketing Guru',
      rating: 5,
      reviews: 310,
      sessions: 720,
      gradient: 'from-pink-400 to-pink-600',
      image: 'https://randomuser.me/api/portraits/women/47.jpg'
    },
    {
      initials: 'VG',
      name: 'Vikram Gupta',
      title: 'Tech Leadership',
      rating: 5,
      reviews: 390,
      sessions: 870,
      gradient: 'from-orange-400 to-orange-600',
      image: 'https://randomuser.me/api/portraits/men/36.jpg'
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExpertIndex((prev) => (prev + 1) % experts.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [experts.length]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden"
      aria-label="Hero section"
    >
      {/* Light Background with Network Pattern */}
      <div className="absolute inset-0">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-sky-50/30"></div>

        {/* Network Pattern SVG */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          {/* Network Lines */}
          <g strokeWidth="1" opacity="0.5">
            <line x1="10%" y1="20%" x2="25%" y2="35%" stroke="#0ea5e9"/>
            <line x1="25%" y1="35%" x2="15%" y2="55%" stroke="#0ea5e9"/>
            <line x1="15%" y1="55%" x2="30%" y2="70%" stroke="#0ea5e9"/>
            <line x1="30%" y1="70%" x2="20%" y2="85%" stroke="#0ea5e9"/>
            <line x1="25%" y1="35%" x2="40%" y2="25%" stroke="#0ea5e9"/>
            <line x1="40%" y1="25%" x2="55%" y2="40%" stroke="#0ea5e9"/>
            <line x1="15%" y1="55%" x2="35%" y2="50%" stroke="#0ea5e9"/>
            <line x1="5%" y1="40%" x2="25%" y2="35%" stroke="#0ea5e9"/>
            <line x1="5%" y1="40%" x2="15%" y2="55%" stroke="#0ea5e9"/>
            <line x1="20%" y1="15%" x2="10%" y2="20%" stroke="#0ea5e9"/>
            <line x1="20%" y1="15%" x2="40%" y2="25%" stroke="#0ea5e9"/>
            <line x1="35%" y1="50%" x2="30%" y2="70%" stroke="#0ea5e9"/>
          </g>
          {/* Network Nodes */}
          <g>
            <circle cx="10%" cy="20%" r="4" fill="#0ea5e9" opacity="0.6"/>
            <circle cx="25%" cy="35%" r="5" fill="#0ea5e9" opacity="0.7"/>
            <circle cx="15%" cy="55%" r="4" fill="#0ea5e9" opacity="0.5"/>
            <circle cx="30%" cy="70%" r="4" fill="#0ea5e9" opacity="0.6"/>
            <circle cx="20%" cy="85%" r="3" fill="#0ea5e9" opacity="0.4"/>
            <circle cx="40%" cy="25%" r="4" fill="#0ea5e9" opacity="0.6"/>
            <circle cx="5%" cy="40%" r="3" fill="#0ea5e9" opacity="0.5"/>
            <circle cx="20%" cy="15%" r="3" fill="#0ea5e9" opacity="0.4"/>
            <circle cx="35%" cy="50%" r="4" fill="#0ea5e9" opacity="0.6"/>
            <circle cx="55%" cy="40%" r="3" fill="#0ea5e9" opacity="0.4"/>
          </g>
        </svg>

        {/* Soft Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-100/50 rounded-full blur-3xl"></div>
      </div>

      <div className={`relative z-10 max-w-7xl mx-auto px-6 py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-50 border border-sky-200 rounded-full mb-6">
              <Brain className="w-4 h-4 text-sky-600" />
              <span className="text-sky-700 font-semibold text-sm">AI-Powered Expert Network</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-navy-900">Connect with the</span>
              <span className="block text-sky-600 mt-2">Perfect Expert</span>
              <span className="block text-navy-900">Instantly</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
              AI-powered matching connects you with verified professionals in seconds.
              Get expert guidance for business, career, learning, and life.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  <img src="https://randomuser.me/api/portraits/women/23.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                  <img src="https://randomuser.me/api/portraits/men/41.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                </div>
                <span className="font-semibold text-gray-700">10,000+ users</span>
              </div>

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-1 font-semibold text-gray-700">4.9/5</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/waiting-list"
                className="group inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/book-call"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-navy-900 px-8 py-4 text-lg font-semibold rounded-lg border-2 border-gray-200 hover:border-sky-300 transition-all duration-300"
              >
                Book a Demo
              </Link>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'AI matches perfect experts',
                'Verified professionals only',
                'Instant connections',
                'Secure & trusted platform'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-600">
                  <Check className="w-5 h-5 text-sky-600 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative lg:block hidden">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-100/50 to-purple-100/50 rounded-3xl blur-3xl"></div>

              {/* Main Expert Cards Stack */}
              <div className="relative space-y-4">
                {/* Card 1 - Primary (Current Expert) */}
                <div className="relative z-30 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 transform hover:scale-105 transition-all duration-500">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={experts[currentExpertIndex].image}
                        alt={experts[currentExpertIndex].name}
                        className="w-14 h-14 rounded-full object-cover shadow-lg transition-all duration-500"
                      />
                      <div>
                        <h3 className="font-bold text-navy-900 text-lg transition-all duration-500">{experts[currentExpertIndex].name}</h3>
                        <p className="text-sm text-gray-600 transition-all duration-500">{experts[currentExpertIndex].title}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 bg-green-50 px-3 py-1.5 rounded-full">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-semibold text-green-700">Online</span>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-3">
                    {[...Array(experts[currentExpertIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">5.0 ({experts[currentExpertIndex].reviews}+ reviews)</span>
                  </div>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{experts[currentExpertIndex].sessions}+ sessions</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Zap className="w-4 h-4 text-sky-600" />
                      <span>2 min response</span>
                    </div>
                  </div>

                  <button className="w-full bg-sky-600 hover:bg-sky-700 text-white py-2.5 rounded-lg font-semibold transition-colors">
                    Connect Now
                  </button>
                </div>

                {/* Card 2 - Secondary (Next Expert) */}
                <div className="absolute top-8 left-4 right-4 z-20 bg-white rounded-2xl shadow-lg p-6 border border-gray-100 opacity-80 transform -rotate-2 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={experts[(currentExpertIndex + 1) % experts.length].image}
                      alt={experts[(currentExpertIndex + 1) % experts.length].name}
                      className="w-12 h-12 rounded-full object-cover shadow-lg"
                    />
                    <div>
                      <h3 className="font-bold text-navy-900">{experts[(currentExpertIndex + 1) % experts.length].name}</h3>
                      <p className="text-sm text-gray-600">{experts[(currentExpertIndex + 1) % experts.length].title}</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Card 3 - Tertiary (Expert after next) */}
                <div className="absolute top-16 left-8 right-8 z-10 bg-white rounded-2xl shadow-md p-6 border border-gray-100 opacity-60 transform rotate-2 transition-all duration-500">
                  <div className="flex items-center gap-3">
                    <img
                      src={experts[(currentExpertIndex + 2) % experts.length].image}
                      alt={experts[(currentExpertIndex + 2) % experts.length].name}
                      className="w-12 h-12 rounded-full object-cover shadow-lg"
                    />
                    <div>
                      <h3 className="font-bold text-navy-900">{experts[(currentExpertIndex + 2) % experts.length].name}</h3>
                      <p className="text-sm text-gray-600">{experts[(currentExpertIndex + 2) % experts.length].title}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Badges */}
              <div className="absolute -top-4 -right-4 z-40 bg-white rounded-xl shadow-lg p-3 border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Match Rate</p>
                    <p className="font-bold text-navy-900 text-lg">98%</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 z-40 bg-white rounded-xl shadow-lg p-3 border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-sky-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Active Experts</p>
                    <p className="font-bold text-navy-900 text-sm">500+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Social Proof */}
        <div className="mt-16 pt-10 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500 mb-8">
            Trusted by leading professionals and organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-sky-300 hover:bg-sky-50/50 transition-all duration-300 shadow-sm">
              <img
                src="/leo-main.png"
                alt="LEORIX"
                className="h-10 md:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-300"
              />
            </div>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-sky-300 hover:bg-sky-50/50 transition-all duration-300 shadow-sm">
              <img
                src="/th.png"
                alt="Traders Hub"
                className="h-10 md:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
