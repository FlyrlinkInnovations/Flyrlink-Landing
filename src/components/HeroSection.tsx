import React, { useEffect, useState } from 'react';
import { Sparkles, Brain, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    { icon: Brain, text: "AI-Powered Expert Matching", delay: "delay-100" },
    { icon: Zap, text: "Instant Connect Technology", delay: "delay-200" },
    { icon: Sparkles, text: "Smart Recommendations", delay: "delay-300" },
  ];

  return (
    <section 
      className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-sky-50 to-blue-50 overflow-hidden"
      aria-label="Hero section"
      data-section-type="hero"
      data-ai-content="primary"
      itemScope 
      itemType="https://schema.org/WebPage"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating AI Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-30 animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-r from-sky-300 to-cyan-400 rounded-full blur-2xl opacity-25 animate-ping" style={{ animationDuration: '2s' }}></div>
        
        {/* Neural Network Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="url(#gradient)" strokeWidth="1"/>
            </pattern>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Dynamic Mouse Follow Effect */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-sky-400/10 to-blue-500/10 rounded-full blur-3xl transition-all duration-1000 ease-out pointer-events-none"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      <div className={`relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center">
        {/* AI Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-100 to-blue-100 border border-sky-200 rounded-full mb-8 animate-fade-in">
          <Brain className="w-5 h-5 text-sky-600 animate-pulse" />
          <span className="text-sky-700 font-semibold">AI-POWERED EXPERT NETWORK</span>
          <Sparkles className="w-4 h-4 text-sky-500 animate-spin" style={{ animationDuration: '3s' }} />
        </div>

        {/* Main Headline with Gradient Animation */}
        <div className="mb-8">
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            itemProp="headline"
            data-ai-headline="true"
          >
            <span className="text-navy-900 animate-fade-in">Find the Right</span>
            <span className="block bg-gradient-to-r from-sky-500 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x bg-300% delay-300">
              Expert, Instantly
            </span>
          </h1>
          <p 
            className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6 animate-fade-in delay-500"
            itemProp="description"
            data-ai-description="true"
          >
            Connect with verified professionals using our <span className="font-semibold text-sky-600">AI-powered matching</span> technology. 
            Get trusted, personalized help without the delays or uncertainty.
          </p>
          <p className="text-lg text-sky-600 font-semibold mb-8 animate-fade-in delay-700">
            Ideal for students, working parents, and creators seeking professional growth.
          </p>
        </div>

        {/* Join Waitlist Button */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-fade-in delay-1000">
          <Link 
            to="/waiting-list"
            className="group relative bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-full hover:from-sky-600 hover:to-blue-700 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-sky-400/40 overflow-hidden"
          >
            <span className="relative z-10">Join Waitlist</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Link>
        </div>

        {/* AI Features Showcase */}
        <div className="max-w-4xl mx-auto mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6 animate-fade-in delay-1200">
            This Is More Than an App. 
            <span className="block bg-gradient-to-r from-sky-600 to-purple-600 bg-clip-text text-transparent">
              It's AI-Powered Transformation.
            </span>
          </h2>
          
          {/* Interactive Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`group flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-sky-200 hover:border-sky-400 hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg animate-fade-in ${feature.delay}`}
              >
                <feature.icon className="w-5 h-5 text-sky-600 group-hover:text-sky-700 transition-colors" />
                <span className="text-gray-700 group-hover:text-gray-900 font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
          
          {/* Enhanced Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 text-left animate-fade-in delay-1500">
            {[
              "AI matches you with perfect experts instantly",
              "Smart scheduling with real-time availability",
              "Personalized content recommendations",
              "Intelligent local & virtual connections"
            ].map((feature, index) => (
              <div key={index} className="group flex items-center gap-3 p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-sky-200 hover:border-sky-400 hover:bg-white/80 transition-all duration-300 hover:scale-102 hover:shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{feature}</span>
              </div>
            ))}
          </div>
        </div>
        
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
