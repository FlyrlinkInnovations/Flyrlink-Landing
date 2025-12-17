import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, Building2, Rocket, ArrowRight } from 'lucide-react';

const HowFlyrLinkHelps = () => {
  const services = [
    {
      title: 'For Learners & Clients',
      description: 'Discover verified experts across diverse fields. Achieve your goals with personalized guidance.',
      icon: Users,
      buttonText: 'Explore Services'
    },
    {
      title: 'For Verified Experts',
      description: 'Expand your reach, grow business and impact lives on our AI-powered platform.',
      icon: Award,
      buttonText: 'Join as Expert'
    },
    {
      title: 'For Businesses',
      description: 'Let your business, promote yourself, work products, bring awareness, and find your leads.',
      icon: Building2,
      buttonText: 'Explore Business Solutions'
    },
    {
      title: 'For Startups',
      description: 'Utilize the power of Flyrlink to test idea ideas, Build MVP, get guidance, and showcase product.',
      icon: Rocket,
      buttonText: 'Launch Your Startup'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy-900">
            How Can Flyrlink Help You?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you're looking to learn, share expertise, grow your business, or launch your startup,
            we have the perfect solution for you.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:border-sky-200 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-sky-50 border border-sky-100 rounded-xl flex items-center justify-center text-sky-600 mb-6 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                <service.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-navy-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>

              {/* Button */}
              <Link
                to="/waiting-list"
                className="group/btn inline-flex items-center gap-2 w-full justify-center bg-navy-900 hover:bg-sky-600 text-white text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300"
              >
                {service.buttonText}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Not sure which option is right for you?
          </p>
          <Link
            to="/book-call"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg transition-all duration-300"
          >
            Book a Call with Us
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowFlyrLinkHelps;
