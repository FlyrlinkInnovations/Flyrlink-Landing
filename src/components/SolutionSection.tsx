import React, { useState, useEffect } from 'react';
import { Brain, Zap, Users, Target, Shield } from 'lucide-react';

const SolutionSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(true); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } 
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
      name: "Business Intelligence", 
      description: "AI-powered financial & business consulting",
      icon: "📈",
      color: "from-blue-400 to-indigo-500"
    },
    { 
      name: "Career Intelligence", 
      description: "Smart career mentors & life coaches",
      icon: "💼",
      color: "from-green-400 to-emerald-500"
    },
    { 
      name: "Learning Accelerator", 
      description: "AI-curated tutors & educational advisors",
      icon: "📚",
      color: "from-purple-400 to-pink-500"
    },
    { 
      name: "Creative Solutions", 
      description: "Smart design & creative professionals",
      icon: "🎨",
      color: "from-orange-400 to-red-500"
    },
    { 
      name: "Technology Experts", 
      description: "AI-powered tech & development consulting",
      icon: "💻",
      color: "from-cyan-400 to-blue-500"
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
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-100 to-purple-100 border border-sky-200 rounded-full mb-6">
            <Brain className="w-5 h-5 text-sky-600 animate-pulse" />
            <span className="text-sky-700 font-semibold">AI-POWERED SOLUTIONS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-navy-900 to-sky-700 bg-clip-text text-transparent">
              Discover and connect with
            </span>
            <br />
            <span className="bg-gradient-to-r from-sky-600 to-purple-600 bg-clip-text text-transparent">
              Verified Experts
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our intelligent platform connects you with the right professionals instantly, 
            powered by advanced AI matching algorithms
          </p>
        </div>

        {/* AI Features Showcase */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {aiFeatures.map((feature, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-500 cursor-pointer group overflow-hidden
                ${activeFeature === index 
                  ? 'border-sky-300 bg-gradient-to-br from-sky-50 to-purple-50 shadow-xl scale-105' 
                  : 'border-gray-200 bg-white hover:border-sky-200 hover:shadow-lg'
                }`}
            >
              {/* Animated Background */}
              <div className={`absolute inset-0 bg-gradient-to-br from-sky-400 to-purple-500 opacity-0 transition-opacity duration-500
                ${activeFeature === index ? 'opacity-5' : 'group-hover:opacity-5'}
              `} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center text-white transition-all duration-500
                  ${activeFeature === index 
                    ? 'bg-gradient-to-br from-sky-500 to-purple-600 shadow-lg scale-110' 
                    : 'bg-gradient-to-br from-gray-400 to-gray-500 group-hover:from-sky-400 group-hover:to-purple-500'
                  }`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                
                {/* Content */}
                <h3 className={`text-xl font-bold mb-3 text-center transition-colors duration-300
                  ${activeFeature === index ? 'text-sky-700' : 'text-navy-900 group-hover:text-sky-600'}
                `}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center mb-4 group-hover:text-gray-700">
                  {feature.description}
                </p>
                <p className="text-sm text-gray-500 text-center leading-relaxed group-hover:text-gray-600">
                  {feature.details}
                </p>
              </div>

              {/* Active Indicator */}
              {activeFeature === index && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-sky-500 to-purple-600 rounded-full" />
              )}
            </div>
          ))}
        </div>

        {/* Expert Categories */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Expert <span className="bg-gradient-to-r from-sky-600 to-purple-600 bg-clip-text text-transparent">Categories</span>
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Connect with verified professionals across diverse fields, all powered by intelligent matching
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {expertTypes.map((type, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl border border-gray-200 hover:border-transparent hover:shadow-xl transition-all duration-500 cursor-pointer text-center overflow-hidden"
              >
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
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xl">
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
