import React from 'react';

const features = [
  {
    title: 'AI-Powered Matching',
    description: 'Our advanced algorithms connect you with the perfect experts based on your specific needs and preferences.',
    icon: '🤖'
  },
  {
    title: 'Instant Connections',
    description: 'Get matched and start your session in minutes, not days. No more waiting for callbacks.',
    icon: '⚡'
  },
  {
    title: 'Verified Experts',
    description: 'Every professional on our platform is thoroughly vetted to ensure quality and expertise.',
    icon: '✅'
  }
];

const FeaturesSection = () => {
  const testimonials = [
    {
      quote: "Found the perfect business mentor for my startup within minutes. The personalized advice has been game-changing!",
      author: "Priya S.",
      role: "Entrepreneur",
      avatar: "🌟"
    },
    {
      quote: "As a college student, having instant access to career mentors has helped me make better decisions about my future.",
      author: "Rahul K.",
      role: "Student", 
      avatar: "💼"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-navy-900">Real Stories from</span>
            <br />
            <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
              Real People
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            See how people like you are finding their next breakthrough with Flyrlink.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4 text-center">{testimonial.avatar}</div>
              <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-center">
                <div className="font-semibold text-navy-900">{testimonial.author}</div>
                <div className="text-sky-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Features */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-navy-900 text-center mb-8">
            Find Your Community
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl mb-3">👥</div>
              <div className="font-semibold text-navy-900 mb-2">Find Peers</div>
              <div className="text-gray-600">Connect with like-minded individuals</div>
            </div>
            <div className="p-6">
              <div className="text-3xl mb-3">📝</div>
              <div className="font-semibold text-navy-900 mb-2">Share Content</div>
              <div className="text-gray-600">Post insights and earn recognition</div>
            </div>
            <div className="p-6">
              <div className="text-3xl mb-3">💡</div>
              <div className="font-semibold text-navy-900 mb-2">Get Inspired</div>
              <div className="text-gray-600">Learn from people just like you</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Image Showcase Section */}
      <div className="max-w-7xl mx-auto px-6 mt-24 relative">
        {/* Floating elements */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 transform -translate-x-1/2 -translate-y-1/2" />
        
        <div className="relative z-10 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl overflow-hidden shadow-2xl border border-white/50 backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-12 flex flex-col justify-center relative z-10">
              <h3 className="text-3xl font-bold text-navy-900 mb-6">
                Why Choose <span className="text-blue-600">Flyrlink?</span>
              </h3>
              <p className="text-gray-700 mb-8 text-lg">
                We're redefining how people connect with experts. Our platform combines cutting-edge technology with human expertise to deliver exceptional results.
              </p>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center text-2xl shadow-sm border border-gray-100">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative h-[500px] w-full group overflow-hidden rounded-r-3xl">
              {/* Main Image Container */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="/1.png"
                  alt="Flyrlink Platform Preview"
                  className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105"
                  loading="eager"
                  style={{
                    imageRendering: 'crisp-edges',
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                    willChange: 'transform',
                    transformStyle: 'preserve-3d',
                    filter: 'drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04))',
                  }}
                />
              </div>
              
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-transparent" />
              
              {/* Image Frame */}
              <div className="absolute inset-0 border-l-4 border-t-4 border-b-4 border-white/30 rounded-l-3xl" />
              
              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-full opacity-70 animate-float" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-pink-400/10 to-transparent rounded-full opacity-70 animate-float animation-delay-2000" />
              
              {/* Subtle Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/5 via-transparent to-purple-400/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
