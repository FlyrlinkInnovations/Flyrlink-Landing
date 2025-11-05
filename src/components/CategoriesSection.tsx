import React from 'react';
import { GraduationCap, Dumbbell, Briefcase, Heart, Camera, Code, Music, Palette } from 'lucide-react';

const CategoriesSection = () => {
  const categories = [
    {
      name: 'Education',
      description: 'Browse skilled experts',
      icon: GraduationCap
    },
    {
      name: 'Fitness',
      description: 'Browse verified experts',
      icon: Dumbbell
    },
    {
      name: 'Business',
      description: 'Browse verified experts',
      icon: Briefcase
    },
    {
      name: 'Connect',
      description: 'Schedule meeting easily',
      icon: Heart
    },
    {
      name: 'Beauty',
      description: 'Achieve your goals',
      icon: Camera
    },
    {
      name: 'Technology',
      description: 'Expert tech guidance',
      icon: Code
    },
    {
      name: 'Music',
      description: 'Learn from masters',
      icon: Music
    },
    {
      name: 'Design',
      description: 'Creative professionals',
      icon: Palette
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            Explore Categories
          </h2>
          <p className="text-gray-600 text-lg">
            Discover experts across diverse fields and interests
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 cursor-pointer hover:shadow-lg hover:border-gray-300"
            >
              <div className="text-center">
                {/* Icon */}
                <div className="w-14 h-14 mx-auto mb-4 rounded-lg bg-sky-100 flex items-center justify-center text-sky-600 transform group-hover:scale-110 transition-all duration-300">
                  <category.icon className="w-7 h-7" />
                </div>

                {/* Category Name */}
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  {category.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Experts Section */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-navy-900">
              Featured Experts
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Dr. Arya Sharma', role: 'Business Consultant', rating: 4.9, initials: 'AS' },
              { name: 'Coach Ben Carter', role: 'Fitness Expert', rating: 4.8, initials: 'BC' },
              { name: 'Sophie Chen', role: 'Design Strategist', rating: 5.0, initials: 'SC' }
            ].map((expert, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Avatar */}
                  <div className="w-24 h-24 rounded-full bg-sky-100 flex items-center justify-center text-2xl font-bold text-sky-700 mb-4 group-hover:scale-105 transition-transform duration-300">
                    {expert.initials}
                  </div>

                  {/* Name & Role */}
                  <h4 className="text-lg font-bold text-navy-900 mb-1">{expert.name}</h4>
                  <p className="text-sm text-gray-600 mb-3">{expert.role}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(expert.rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-sm font-semibold text-gray-700 ml-1">{expert.rating}</span>
                  </div>

                  {/* Book Button */}
                  <button className="w-full bg-sky-600 hover:bg-sky-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gray-50 rounded-xl p-12 border border-gray-200">
          <h3 className="text-3xl font-bold text-navy-900 mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-gray-600 text-lg mb-8">
            Join Flyrlink today! Sign up now to connect with experts and unlock your potential.
          </p>
          <button className="px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-sm hover:shadow-md">
            Sign Up Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
