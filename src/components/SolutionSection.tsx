
import React, { useState, useEffect } from 'react';
import { Brain, Zap, Users, Target, Shield } from 'lucide-react';

const SolutionSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
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

    const section = document.getElementById('solution-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const expertTypes = [
    { 
      name: "Health & Wellness AI", 
      description: "AI-matched doctors & health professionals",
      icon: "🏥",
      color: "from-red-400 to-pink-500"
    },
    { 
      name: "Career Intelligence", 
      description: "Smart career mentors & life coaches",
      icon: "💼",
      color: "from-blue-400 to-indigo-500"
    },
    { 
      name: "Learning Accelerator", 
      description: "AI-curated tutors & educational advisors",
      icon: "📚",
      color: "from-green-400 to-emerald-500"
    },
    { 
      name: "Wellness Optimization", 
      description: "Smart fitness & wellness coaching",
      icon: "💪",
      color: "from-orange-400 to-red-500"
    },
    { 
      name: "Business Intelligence", 
      description: "AI-powered financial & business consulting",
      icon: "📈",
      color: "from-purple-400 to-indigo-500"
    }
  ];

  const aiFeatures = [
    {
      title: "Smart Matching",
      description: "AI analyzes your needs and preferences",
      icon: Brain,
      details: "Advanced machine learning algorithms understand your unique requirements"
    },
    {
      title: "Instant Connect",
      description: "Real-time availability and scheduling",
      icon: Zap,
      details: "Lightning-fast connections with available experts in seconds"
    },
    {
      title: "Personalized Experience",
      description: "Tailored recommendations based on your goals",
      icon: Target,
      details: "Continuous learning adapts to your preferences and success patterns"
    }
  ];

  return (
    <section id="solution-section" className="py-20 bg-gradient-to-b from-sky-50 via-white to-purple-50 relative overflow-hidden">
      {/* Animated AI Network Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          {/* Animated Network Nodes */}
          {[...Array(15)].map((_, i) => (
            <g key={i}>
              <circle
                cx={100 + (i * 60)}
                cy={200 + Math.sin(i) * 100}
                r="4"
                fill="url(#networkGradient)"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
              {i < 14 && (
                <line
                  x1={100 + (i * 60)}
                  y1={200 + Math.sin(i) * 100}
                  x2={160 + (i * 60)}
                  y2={200 + Math.sin(i + 1) * 100}
                  stroke="url(#networkGradient)"
                  strokeWidth="1"
                  opacity="0.5"
                />
              )}
            </g>
          ))}
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Main Solution Statement */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-full mb-8">
            <Zap className="w-5 h-5 text-blue-600 animate-pulse" />
            <span className="text-blue-700 font-semibold">YOUR GATEWAY TO EXPERTISE</span>
            <Users className="w-5 h-5 text-purple-500" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="block text-navy-900 mb-3">Discover and connect with</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Verified Experts
            </span>
          </h2>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12">
            Find top professionals across business, career, beauty, creativity, and healthcare—all in one place. 
            <span className="block mt-3 font-medium text-blue-600">
              Book instant sessions or schedule appointments with local experts near you.
            </span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {['Business', 'Career', 'Beauty', 'Creativity', 'Healthcare'].map((category, index) => (
              <span 
                key={index}
                className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 hover:shadow-sm transition-all duration-200 flex items-center"
              >
                <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                {category}
              </span>
            ))}
          </div>
        </div>

        {/* AI Features Showcase */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {aiFeatures.map((feature, index) => (
              <div 
                key={index}
                className={`relative p-8 rounded-2xl border transition-all duration-500 cursor-pointer group
                  ${activeFeature === index 
                    ? 'bg-gradient-to-br from-sky-50 to-purple-50 border-sky-300 shadow-xl scale-105' 
                    : 'bg-white border-gray-200 hover:border-sky-300 hover:shadow-lg'
                  }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300
                  ${activeFeature === index 
                    ? 'bg-gradient-to-r from-sky-500 to-purple-600 text-white scale-110' 
                    : 'bg-sky-100 text-sky-600 group-hover:bg-sky-200'
                  }`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-semibold text-navy-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                
                {activeFeature === index && (
                  <div className="text-sm text-sky-700 font-medium animate-fade-in">
                    {feature.details}
                  </div>
                )}

                {/* Active Indicator */}
                {activeFeature === index && (
                  <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Expert Types */}
        <div className={`max-w-5xl mx-auto mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-center text-navy-900 mb-8">
            AI-Powered <span className="text-sky-600">Expert Categories</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertTypes.map((type, index) => (
              <div key={index} className="group relative p-6 bg-white rounded-xl border border-gray-200 hover:border-transparent transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {type.icon}
                  </div>
                  <h4 className="font-semibold text-navy-900 mb-2 group-hover:text-gray-800">
                    {type.name}
                  </h4>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700">
                    {type.description}
                  </p>
                </div>

                {/* Hover Effect Particles */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-sky-400 rounded-full animate-ping"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                        animationDelay: `${i * 0.3}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* India Market Focus with AI Enhancement */}
        <div className={`bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xl transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-sky-50 to-purple-50 px-6 py-4 border-b border-gray-200">
            <h3 className="text-2xl font-bold text-navy-900 text-center flex items-center justify-center gap-2">
              <Brain className="w-6 h-6 text-sky-600" />
              Built for India's AI-Driven Future
            </h3>
          </div>
          <div className="p-8 text-center">
            <p className="text-xl text-gray-700 mb-8">
              India's demand for expert-driven services is exploding — our <span className="font-semibold text-sky-600">AI platform</span> is at the center, 
              making trusted access affordable, instant, and intelligently personalized.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: "🇮🇳", title: "Local AI Matching", desc: "Smart algorithms find experts in your area", gradient: "from-orange-400 to-green-400" },
                { icon: "💰", title: "Intelligent Pricing", desc: "AI optimizes costs for maximum value", gradient: "from-blue-400 to-purple-400" },
                { icon: "⚡", title: "Neural Networks", desc: "Lightning-fast AI-powered connections", gradient: "from-sky-400 to-cyan-400" }
              ].map((item, index) => (
                <div key={index} className="group relative p-6 rounded-xl border border-gray-100 hover:border-transparent hover:shadow-lg transition-all duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`} />
                  <div className="relative z-10">
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                    <div className="font-semibold text-navy-900 mb-2 group-hover:text-gray-800">{item.title}</div>
                    <div className="text-gray-600 group-hover:text-gray-700 text-sm">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
