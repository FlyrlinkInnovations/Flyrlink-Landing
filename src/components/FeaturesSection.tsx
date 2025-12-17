import React, { memo } from 'react';
import { Brain, Zap, CheckCircle } from 'lucide-react';

const features = [
  {
    title: 'AI-Powered Matching',
    description: 'Our advanced algorithms connect you with the perfect experts based on your specific needs and preferences.',
    icon: Brain
  },
  {
    title: 'Instant Connections',
    description: 'Get matched and start your session in minutes, not days. No more waiting for callbacks.',
    icon: Zap
  },
  {
    title: 'Verified Experts',
    description: 'Every professional on our platform is thoroughly vetted to ensure quality and expertise.',
    icon: CheckCircle
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-navy-900 mb-6">
                Why Choose Flyrlink?
              </h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                We're redefining how people connect with experts. Our platform combines cutting-edge technology with human expertise to deliver exceptional results.
              </p>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600">
                      {React.createElement(feature.icon, { size: 24 })}
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-1">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[500px] w-full overflow-hidden bg-gray-100">
              <img
                src="/1.png"
                alt="Flyrlink Platform Preview"
                className="w-full h-full object-cover object-top"
                loading="lazy"
                width="1200"
                height="800"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(FeaturesSection);
