import React, { useState, useEffect } from 'react';
import { Brain, Zap, Activity, User, Users, TrendingUp } from 'lucide-react';

const ProblemSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(true); // Start as visible to prevent white space

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Reduced threshold for earlier visibility
    );

    const section = document.getElementById('problem-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const challenges = [
    {
      title: "Delays & Uncertainty",
      description: "AI instantly matches you with available experts",
      icon: "⏰",
      gradient: "from-red-400 to-pink-500",
      solution: "Real-time AI matching"
    },
    {
      title: "One-Size-Fits-All", 
      description: "Machine learning creates personalized solutions",
      icon: "🎯",
      gradient: "from-orange-400 to-red-500",
      solution: "AI personalization"
    },
    {
      title: "Trust Issues",
      description: "AI-verified professionals with smart ratings",
      icon: "🛡️",
      gradient: "from-blue-400 to-indigo-500",
      solution: "AI verification system"
    },
    {
      title: "Complicated Process",
      description: "One-click AI-powered expert connections",
      icon: "⚡",
      gradient: "from-green-400 to-blue-500",
      solution: "Smart automation"
    }
  ];

  const steps = [
    { 
      title: "Setup Profile", 
      description: "Create your personal profile in minutes",
      icon: User,
      color: "from-blue-500 to-blue-600",
      borderColor: "border-blue-100",
      hoverBorderColor: "hover:border-blue-200",
      details: "Set up your profile with your interests, skills, and goals to help us understand your needs"
    },
    { 
      title: "Connect", 
      description: "Get matched with the right experts",
      icon: Users,
      color: "from-purple-500 to-purple-600",
      borderColor: "border-purple-100",
      hoverBorderColor: "hover:border-purple-200",
      details: "Our AI connects you with verified professionals who match your specific requirements"
    },
    { 
      title: "Grow", 
      description: "Achieve your goals faster",
      icon: TrendingUp,
      color: "from-emerald-500 to-emerald-600",
      borderColor: "border-emerald-100",
      hoverBorderColor: "hover:border-emerald-200",
      details: "Access resources and guidance to help you grow personally and professionally"
    }
  ];

  return (
    <section id="problem-section" className="py-10 md:py-20 bg-gradient-to-b from-white via-slate-50 to-sky-50 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-sky-500 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-100 to-sky-100 border border-purple-200 rounded-full mb-6">
            <Brain className="w-5 h-5 text-purple-600 animate-pulse" />
            <span className="text-purple-700 font-semibold">AI PROBLEM SOLVING</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-navy-900 via-sky-700 to-emerald-600 bg-clip-text text-transparent">
              Traditional Problems,
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              AI Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the future of expert connections with our intelligent platform that eliminates traditional barriers
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 rounded-2xl border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${challenge.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {challenge.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-navy-900 mb-3 group-hover:text-gray-800">
                  {challenge.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-700">
                  {challenge.description}
                </p>
                
                {/* Solution Badge */}
                <div className={`inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r ${challenge.gradient} text-white text-xs font-medium rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  <Zap className="w-3 h-3" />
                  {challenge.solution}
                </div>
              </div>

              {/* Hover Particles Effect */}
              {hoveredCard === index && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-sky-400 rounded-full animate-ping"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* How It Works Section */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              How <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">It Works</span>
            </h3>
            <p className="text-gray-600 text-lg">Get started in three simple steps to unlock your full potential</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection Arrows */}
            <div className="hidden md:flex items-center justify-between absolute top-1/4 left-0 right-0 px-8">
              <div className="h-0.5 bg-gradient-to-r from-blue-100 to-purple-100 flex-1"></div>
              <div className="mx-2 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              <div className="h-0.5 bg-gradient-to-r from-purple-100 to-emerald-100 flex-1"></div>
              <div className="mx-2 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              <div className="h-0.5 bg-emerald-100 flex-1"></div>
            </div>

            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative bg-white p-8 rounded-2xl border-2 ${step.borderColor} ${step.hoverBorderColor} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
              >
                {/* Step Number */}
                <div className={`absolute -top-4 left-6 w-8 h-8 rounded-full bg-gradient-to-br ${step.color} text-white flex items-center justify-center font-bold text-sm shadow-md`}>
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className={`w-14 h-14 mx-auto mb-6 bg-gradient-to-br ${step.color} text-white rounded-xl flex items-center justify-center text-2xl shadow-lg`}>
                  <step.icon className="w-6 h-6" />
                </div>
                
                {/* Content */}
                <h4 className="text-xl font-bold text-navy-900 mb-3 text-center">{step.title}</h4>
                <p className="text-gray-600 font-medium mb-4 text-center">{step.description}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{step.details}</p>
                
                {/* Bottom Border */}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r ${step.color} rounded-full`}></div>
              </div>
            ))}
          </div>
          

        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
