import React, { useEffect, useState, memo } from 'react';
import { Sparkles, Brain, Zap, ArrowRight, Check, Star, Users } from 'lucide-react';
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
      gradient: 'from-sky-400 to-sky-600'
    },
    {
      initials: 'PS',
      name: 'Priya Sharma',
      title: 'Tech Expert',
      rating: 5,
      reviews: 420,
      sessions: 950,
      gradient: 'from-purple-400 to-purple-600'
    },
    {
      initials: 'AK',
      name: 'Amit Kapoor',
      title: 'Finance Advisor',
      rating: 5,
      reviews: 280,
      sessions: 650,
      gradient: 'from-green-400 to-green-600'
    },
    {
      initials: 'NK',
      name: 'Neha Kapoor',
      title: 'Marketing Guru',
      rating: 5,
      reviews: 310,
      sessions: 720,
      gradient: 'from-pink-400 to-pink-600'
    },
    {
      initials: 'VG',
      name: 'Vikram Gupta',
      title: 'Tech Leadership',
      rating: 5,
      reviews: 390,
      sessions: 870,
      gradient: 'from-orange-400 to-orange-600'
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
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-sky-50 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#0ea5e9" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className={`relative z-10 max-w-7xl mx-auto px-6 py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 border border-sky-200 rounded-full mb-6">
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
                  <div className="w-8 h-8 rounded-full bg-sky-100 border-2 border-white flex items-center justify-center text-sky-600 font-semibold text-xs">J</div>
                  <div className="w-8 h-8 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center text-purple-600 font-semibold text-xs">S</div>
                  <div className="w-8 h-8 rounded-full bg-green-100 border-2 border-white flex items-center justify-center text-green-600 font-semibold text-xs">M</div>
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
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-navy-900 px-8 py-4 text-lg font-semibold rounded-lg border-2 border-gray-200 hover:border-sky-600 transition-all duration-300"
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
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative lg:block hidden">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400/20 to-purple-400/20 rounded-3xl blur-3xl"></div>

              {/* Main Expert Cards Stack */}
              <div className="relative space-y-4">
                {/* Card 1 - Primary (Current Expert) */}
                <div className="relative z-30 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 transform hover:scale-105 transition-all duration-500">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${experts[currentExpertIndex].gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg transition-all duration-500`}>
                        {experts[currentExpertIndex].initials}
                      </div>
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

                  <button className="w-full bg-sky-600 hover:bg-sky-700 text-white py-2.5 rounded-lg font-semibold transition-colors shadow-md">
                    Connect Now
                  </button>
                </div>

                {/* Card 2 - Secondary (Next Expert) */}
                <div className="absolute top-8 left-4 right-4 z-20 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 opacity-80 transform -rotate-2 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${experts[(currentExpertIndex + 1) % experts.length].gradient} flex items-center justify-center text-white font-bold shadow-lg`}>
                      {experts[(currentExpertIndex + 1) % experts.length].initials}
                    </div>
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
                <div className="absolute top-16 left-8 right-8 z-10 bg-white rounded-2xl shadow-lg p-6 border border-gray-100 opacity-60 transform rotate-2 transition-all duration-500">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${experts[(currentExpertIndex + 2) % experts.length].gradient} flex items-center justify-center text-white font-bold shadow-lg`}>
                      {experts[(currentExpertIndex + 2) % experts.length].initials}
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-900">{experts[(currentExpertIndex + 2) % experts.length].name}</h3>
                      <p className="text-sm text-gray-600">{experts[(currentExpertIndex + 2) % experts.length].title}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats Badges */}
              <div className="absolute -top-4 -right-4 z-40 bg-white rounded-xl shadow-lg p-3 border border-gray-100 animate-float">
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

              <div className="absolute -bottom-4 -left-4 z-40 bg-white rounded-xl shadow-lg p-3 border border-gray-100 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-sky-100 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">AI Powered</p>
                    <p className="font-bold text-navy-900 text-sm">Smart Match</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Social Proof */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500 mb-6">Trusted by leading professionals and organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="text-gray-400 font-bold text-lg">BRAND {i}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection);
