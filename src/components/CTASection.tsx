
import React from 'react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Main CTA */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="text-navy-900">Ready to</span>
            <span className="block bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
              Explore?
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Download Flyrlink and connect with your next breakthrough today.
          </p>
        </div>

        {/* Primary CTA */}
        <div className="mb-16">
          <button className="group bg-sky-500 text-white px-12 py-6 text-xl font-semibold rounded-full hover:bg-sky-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-sky-400/25 mb-4">
            Download Flyrlink
            <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
          </button>
          <p className="text-sky-600 font-medium">
            → Start connecting with verified experts today
          </p>
        </div>

        {/* Trust Indicators Final */}
        <div className="border-t border-gray-200 pt-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-sky-600 mb-2">🔒 Secure</div>
              <div className="text-gray-600">Verified experts & safe platform</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-sky-600 mb-2">⚡ Instant</div>
              <div className="text-gray-600">Connect with experts immediately</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-sky-600 mb-2">🎯 Personal</div>
              <div className="text-gray-600">Tailored solutions for your goals</div>
            </div>
          </div>
        </div>

        {/* Movement Message */}
        <div className="mt-12 p-6 bg-sky-50 rounded-xl border border-sky-200">
          <p className="text-sky-700 font-medium">
            💥 Join the movement - Your direct line to knowledge, support, and transformation
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
