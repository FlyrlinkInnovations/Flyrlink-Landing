
import React from 'react';

const FeaturesSection = () => {
  const testimonials = [
    {
      quote: "Found the perfect nutritionist for my health goals within minutes. The personalized advice has been life-changing!",
      author: "Priya S.",
      role: "Working Parent",
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
    </section>
  );
};

export default FeaturesSection;
