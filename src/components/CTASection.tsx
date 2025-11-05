import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, Target, ArrowRight, Check } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main CTA */}
        <div className="bg-gradient-to-br from-navy-900 to-sky-900 rounded-3xl p-12 md:p-16 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10"></div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Connect with Top Experts?
            </h2>
            <p className="text-xl text-sky-100 mb-10 leading-relaxed">
              Join thousands of professionals who are already transforming their careers
              and businesses with Flyrlink.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Link
                to="/waiting-list"
                className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-navy-900 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Get Started Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/book-call"
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white px-8 py-4 text-lg font-semibold rounded-lg border-2 border-white/30 hover:border-white transition-all duration-300"
              >
                Schedule a Demo
              </Link>
            </div>

            {/* Benefits List */}
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                {
                  icon: Shield,
                  title: 'Verified Experts',
                  description: '100% verified professionals'
                },
                {
                  icon: Zap,
                  title: 'Instant Match',
                  description: 'Connect in under 2 minutes'
                },
                {
                  icon: Target,
                  title: 'Perfect Fit',
                  description: 'AI-powered personalization'
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <benefit.icon className="w-8 h-8 text-sky-300 mb-3" />
                  <h3 className="text-white font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sky-100 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {/* Left: Stats */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-bold text-navy-900 mb-6">
              Why Professionals Choose Flyrlink
            </h3>
            <div className="space-y-6">
              {[
                { stat: '10,000+', label: 'Active Users' },
                { stat: '5,000+', label: 'Expert Sessions' },
                { stat: '98%', label: 'Satisfaction Rate' },
                { stat: '2 min', label: 'Avg. Response Time' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-sky-600 rounded-full"></div>
                  <div>
                    <div className="text-3xl font-bold text-sky-600">{item.stat}</div>
                    <div className="text-gray-600">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Features */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-bold text-navy-900 mb-6">
              What You Get
            </h3>
            <div className="space-y-4">
              {[
                'Unlimited expert searches',
                'AI-powered recommendations',
                'Secure messaging platform',
                'Video & audio consultations',
                'Session scheduling tools',
                'Expert reviews & ratings'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final Encouragement */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg">
            No credit card required • Free to join • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
