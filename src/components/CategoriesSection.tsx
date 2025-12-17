import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Dumbbell, Briefcase, Heart, Camera, Code, Music, Palette, Star, ArrowRight } from 'lucide-react';

const CategoriesSection = () => {
  const categories = [
    { name: 'Education', description: 'Browse skilled experts', icon: GraduationCap },
    { name: 'Fitness', description: 'Browse verified experts', icon: Dumbbell },
    { name: 'Business', description: 'Browse verified experts', icon: Briefcase },
    { name: 'Connect', description: 'Schedule meeting easily', icon: Heart },
    { name: 'Beauty', description: 'Achieve your goals', icon: Camera },
    { name: 'Technology', description: 'Expert tech guidance', icon: Code },
    { name: 'Music', description: 'Learn from masters', icon: Music },
    { name: 'Design', description: 'Creative professionals', icon: Palette }
  ];

  const featuredExperts = [
    { name: 'Dr. Arya Sharma', role: 'Business Consultant', rating: 4.9, initials: 'AS' },
    { name: 'Coach Ben Carter', role: 'Fitness Expert', rating: 4.8, initials: 'BC' },
    { name: 'Sophie Chen', role: 'Design Strategist', rating: 5.0, initials: 'SC' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy-900">
            Explore Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover experts across diverse fields and interests
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-gray-50 hover:bg-sky-600 rounded-xl p-6 transition-all duration-300 cursor-pointer hover:shadow-lg"
            >
              <div className="text-center">
                {/* Icon */}
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-sky-600 group-hover:bg-sky-500 group-hover:text-white group-hover:border-sky-500 transition-all duration-300">
                  <category.icon className="w-7 h-7" />
                </div>

                {/* Category Name */}
                <h3 className="text-lg font-bold text-navy-900 mb-1 group-hover:text-white transition-colors">
                  {category.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 group-hover:text-sky-100 transition-colors">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Experts Section */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h3 className="text-3xl font-bold text-navy-900 mb-2">Featured Experts</h3>
              <p className="text-gray-600">Top-rated professionals ready to help you</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredExperts.map((expert, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 border border-gray-200 hover:border-sky-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Avatar */}
                  <div className="w-20 h-20 rounded-full bg-sky-100 flex items-center justify-center text-xl font-bold text-sky-700 mb-5">
                    {expert.initials}
                  </div>

                  {/* Name & Role */}
                  <h4 className="text-lg font-bold text-navy-900 mb-1">{expert.name}</h4>
                  <p className="text-gray-600 mb-4">{expert.role}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(expert.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="text-sm font-semibold text-gray-700 ml-2">{expert.rating}</span>
                  </div>

                  {/* Book Button */}
                  <button className="w-full bg-navy-900 hover:bg-sky-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-navy-900 rounded-2xl p-12 md:p-16 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join Flyrlink today! Sign up now to connect with experts and unlock your potential.
          </p>
          <Link
            to="/waiting-list"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg transition-all duration-300"
          >
            Sign Up Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
