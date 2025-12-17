import React from 'react';
import { Link } from 'react-router-dom';
import { Users, TrendingUp, Globe, Award, Star, ArrowRight } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Active Users' },
    { icon: TrendingUp, value: '5,000+', label: 'Expert Sessions' },
    { icon: Award, value: '98%', label: 'Satisfaction Rate' },
    { icon: Globe, value: '50+', label: 'Countries' }
  ];

  const testimonials = [
    { name: 'Priya Sharma', role: 'Business Consultant', content: 'Flyrlink has transformed how I connect with clients. The AI matching is incredibly accurate.', rating: 5 },
    { name: 'Rajesh Kumar', role: 'Tech Entrepreneur', content: 'Found the perfect mentor in under 5 minutes. The platform is intuitive and efficient.', rating: 5 },
    { name: 'Ananya Patel', role: 'Fitness Coach', content: 'My client base has grown 3x since joining. Best decision for my consulting practice.', rating: 5 }
  ];

  return (
    <section className="py-24 bg-gray-50">
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
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-gray-200 text-center hover:border-sky-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600">
                <stat.icon className="w-7 h-7" />
              </div>
              <div className="text-4xl font-bold text-navy-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-navy-900">What Our Users Say</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-sky-200 hover:shadow-lg transition-all duration-300"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-700 font-bold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-navy-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Box */}
        <div className="bg-navy-900 rounded-2xl p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join the Community?
          </h3>
          <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
            Start connecting with verified experts or grow your practice today
          </p>

          <Link
            to="/waiting-list"
            className="group inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
          >
            Get Started Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <p className="text-gray-400 mt-6">
            No credit card required • Setup in minutes
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
