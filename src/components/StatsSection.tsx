
import React from 'react';

const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-sky-50 via-white to-sky-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Urgency Section */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-red-100 border border-red-300 rounded-full mb-8">
            <span className="text-red-700 font-semibold">⏳ LIMITED TIME</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-navy-900">Don't Miss This Month's</span>
            <br />
            <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
              Launch Window
            </span>
          </h2>
        </div>

        {/* Scarcity Indicators */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl border border-sky-200 p-8 shadow-lg">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-red-600 mb-2">12</div>
                <div className="text-gray-700">Spots left for May onboarding</div>
                <div className="w-full bg-gray-200 rounded-full h-3 mt-3">
                  <div className="bg-red-500 h-3 rounded-full" style={{width: '20%'}}></div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-3xl mb-3">🎯</div>
                <div className="font-semibold text-navy-900 mb-2">Free 1:1 Session</div>
                <div className="text-gray-600">Funnel strategy session included</div>
              </div>
              <div className="p-6">
                <div className="text-3xl mb-3">🛡️</div>
                <div className="font-semibold text-navy-900 mb-2">Risk-Free</div>
                <div className="text-gray-600">Cancel anytime</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-navy-900 mb-8">
            Start Getting Booked —
            <span className="block text-sky-600">Without the Burnout</span>
          </h3>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Ready to skip the setup headaches and focus on what you do best?
          </p>
          
          <button className="group bg-sky-500 text-white px-12 py-6 text-xl font-semibold rounded-full hover:bg-sky-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-sky-400/25 mb-4">
            Reserve My Spot Now
            <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
          </button>
          
          <p className="text-sky-600 font-medium">
            Includes free custom funnel review
          </p>
        </div>

        {/* Social Proof */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-sky-400 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-green-400 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-blue-400 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-purple-400 rounded-full border-2 border-white"></div>
              </div>
              <span className="ml-3">200+ professionals served</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sky-500">★★★★★</span>
              <span>5.0/5 Client satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span>Setup in under 48 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
