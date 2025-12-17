import React from 'react';
import { Smartphone, Star, Zap, Bell, BarChart3 } from 'lucide-react';

const DownloadAppsSection = () => {
  const features = [
    { icon: BarChart3, title: 'Real-Time Analytics', description: 'Track funnel performance and lead activity instantly' },
    { icon: Zap, title: 'Quick Responses', description: 'Reply to prospects and schedule calls on the spot' },
    { icon: Bell, title: 'Smart Notifications', description: 'Get alerted for new leads and upcoming calls' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy-900">
            Manage Your Funnels On the Go
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Never miss a lead or booking with the Flyrlink mobile app. Monitor your funnels,
            respond to prospects, and manage your calendar from anywhere.
          </p>
        </div>

        {/* App Features & Download */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Mobile Features */}
          <div>
            <h3 className="text-3xl font-bold text-navy-900 mb-8">
              Everything You Need in Your Pocket
            </h3>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-sky-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-navy-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Download Section */}
          <div className="text-center">
            <div className="bg-gray-50 p-10 rounded-2xl border border-gray-200">
              {/* Phone Icon */}
              <div className="w-24 h-24 mx-auto bg-sky-100 rounded-2xl flex items-center justify-center mb-8">
                <Smartphone className="w-12 h-12 text-sky-600" />
              </div>

              <h3 className="text-2xl font-bold text-navy-900 mb-2">
                Download the Flyrlink App
              </h3>
              <p className="text-gray-600 mb-8">
                Available for iOS and Android devices
              </p>

              {/* App Store Buttons */}
              <div className="space-y-4 mb-8">
                <button className="w-full bg-navy-900 hover:bg-gray-800 text-white py-4 px-6 rounded-xl flex items-center justify-center gap-4 transition-colors">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-80">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </button>

                <button className="w-full bg-navy-900 hover:bg-gray-800 text-white py-4 px-6 rounded-xl flex items-center justify-center gap-4 transition-colors">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-80">Get it on</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </button>
              </div>

              {/* App Rating */}
              <div className="flex items-center justify-center gap-2 pt-6 border-t border-gray-200">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">4.9/5</span> from 500+ users
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Benefits */}
        <div className="bg-gray-50 rounded-2xl p-10 border border-gray-200">
          <h3 className="text-2xl font-bold text-navy-900 text-center mb-10">
            Why Our Users Love the Mobile App
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-4">⚡</div>
              <div className="font-semibold text-navy-900 mb-2">2x Faster Response</div>
              <div className="text-gray-600">Reply to leads instantly</div>
            </div>
            <div>
              <div className="text-4xl mb-4">📈</div>
              <div className="font-semibold text-navy-900 mb-2">30% More Bookings</div>
              <div className="text-gray-600">Never miss an opportunity</div>
            </div>
            <div>
              <div className="text-4xl mb-4">🕒</div>
              <div className="font-semibold text-navy-900 mb-2">24/7 Access</div>
              <div className="text-gray-600">Manage your business anywhere</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppsSection;
