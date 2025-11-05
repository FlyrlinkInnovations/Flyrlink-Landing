
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, TrendingUp, Globe, Award, Star, ArrowRight } from 'lucide-react';

const StatsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy-900">
            Trusted by Thousands of Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join a growing community of experts and clients transforming how they work
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-8 border border-sky-100 text-center">
            <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-sky-600" />
            </div>
            <div className="text-4xl font-bold text-navy-900 mb-2">10,000+</div>
            <div className="text-gray-600">Active Users</div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border border-green-100 text-center">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-4xl font-bold text-navy-900 mb-2">5,000+</div>
            <div className="text-gray-600">Expert Sessions</div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border border-purple-100 text-center">
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-purple-600" />
            </div>
            <div className="text-4xl font-bold text-navy-900 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border border-orange-100 text-center">
            <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-orange-600" />
            </div>
            <div className="text-4xl font-bold text-navy-900 mb-2">50+</div>
            <div className="text-gray-600">Countries</div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              name: 'Priya Sharma',
              role: 'Business Consultant',
              content: 'Flyrlink has transformed how I connect with clients. The AI matching is incredibly accurate.',
              rating: 5
            },
            {
              name: 'Rajesh Kumar',
              role: 'Tech Entrepreneur',
              content: 'Found the perfect mentor in under 5 minutes. The platform is intuitive and efficient.',
              rating: 5
            },
            {
              name: 'Ananya Patel',
              role: 'Fitness Coach',
              content: 'My client base has grown 3x since joining. Best decision for my consulting practice.',
              rating: 5
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.content}"</p>
              <div>
                <div className="font-semibold text-navy-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="bg-gradient-to-r from-sky-50 to-purple-50 rounded-2xl p-12 text-center border border-sky-100">
          <h3 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Ready to Join the Community?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start connecting with verified experts or grow your practice today
          </p>

          <Link
            to="/waiting-list"
            className="group inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get Started Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <p className="text-gray-600 mt-6">
            No credit card required • Setup in minutes
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
