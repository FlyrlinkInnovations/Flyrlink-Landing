import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';

const CategoriesSection = () => {
  const categories = [
    { name: 'Education', description: 'Browse skilled experts', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=100&h=100&fit=crop' },
    { name: 'Fitness', description: 'Browse verified experts', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=100&h=100&fit=crop' },
    { name: 'Business', description: 'Browse verified experts', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
    { name: 'Connect', description: 'Schedule meeting easily', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100&h=100&fit=crop' },
    { name: 'Beauty', description: 'Achieve your goals', image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=100&h=100&fit=crop' },
    { name: 'Technology', description: 'Expert tech guidance', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop' },
    { name: 'Music', description: 'Learn from masters', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=100&h=100&fit=crop' },
    { name: 'Design', description: 'Creative professionals', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=100&h=100&fit=crop' }
  ];

  const featuredExperts = [
    { name: 'Girish Kotte', role: 'AI GTM Advisor', rating: 5.0, initials: 'GK', link: 'https://gkotte.com', image: '/gk.jpeg' },
    { name: 'Coach Ben Carter', role: 'Fitness Expert', rating: 4.8, initials: 'BC', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { name: 'Sophie Chen', role: 'Design Strategist', rating: 5.0, initials: 'SC', image: 'https://randomuser.me/api/portraits/women/44.jpg' }
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
                {/* Image */}
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl overflow-hidden border border-gray-200 group-hover:border-sky-500 transition-all duration-300">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
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
                  {'image' in expert && expert.image ? (
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="w-20 h-20 rounded-full object-cover mb-5"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-sky-100 flex items-center justify-center text-xl font-bold text-sky-700 mb-5">
                      {expert.initials}
                    </div>
                  )}

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
                  {'link' in expert && expert.link ? (
                    <a
                      href={expert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-navy-900 hover:bg-sky-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors text-center"
                    >
                      Book Now
                    </a>
                  ) : (
                    <button className="w-full bg-navy-900 hover:bg-sky-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                      Book Now
                    </button>
                  )}
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
