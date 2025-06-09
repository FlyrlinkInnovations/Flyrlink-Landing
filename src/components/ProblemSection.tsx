
import React, { useState, useEffect } from 'react';
import { Brain, Zap, Activity, User, Users, TrendingUp } from 'lucide-react';

const ProblemSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-100 to-sky-100 border border-purple-200 rounded-full mb-6">
            <Brain className="w-5 h-5 text-purple-600 animate-pulse" />
            <span className="text-purple-700 font-semibold">AI PROBLEM SOLVING</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-navy-900">AI Solves What</span>
            <br />
            <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Humans Struggle With
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Traditional expert-finding is broken. Our <span className="font-semibold text-sky-600">AI-powered platform</span> eliminates 
            delays, uncertainty, and generic solutions with intelligent automation.
          </p>
        </div>

        {/* Enhanced Challenges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {challenges.map((challenge, index) => (
            <div 
              key={index}
              className={`group relative p-8 bg-white rounded-2xl border border-gray-200 hover:border-transparent transition-all duration-500 hover:transform hover:-translate-y-3 shadow-sm hover:shadow-2xl text-center overflow-hidden cursor-pointer
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${challenge.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Animated Icon */}
              <div className={`text-4xl mb-4 transition-all duration-300 ${hoveredCard === index ? 'scale-125 animate-bounce' : ''}`}>
                {challenge.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-navy-900 mb-3 group-hover:text-gray-800">
                {challenge.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700">
                {challenge.description}
              </p>

              {/* AI Solution Badge */}
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 
                ${hoveredCard === index 
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white scale-105' 
                  : 'bg-sky-100 text-sky-700'
                }`}>
                {challenge.solution}
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
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
