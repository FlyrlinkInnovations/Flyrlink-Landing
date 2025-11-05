import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, Building2, Rocket } from 'lucide-react';

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
    <section className="py-20 bg-gray-50">
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
              className="group bg-white border border-gray-200 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:border-gray-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-lg bg-sky-100 flex items-center justify-center text-sky-600 transform group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-navy-900 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Button */}
              <Link
                to="/waiting-list"
                className="block w-full bg-navy-900 hover:bg-navy-800 text-white text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300"
              >
                {service.buttonText}
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
            to="/waiting-list"
            className="inline-flex items-center gap-2 px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Book a Call with Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowFlyrLinkHelps;
