
import React from 'react';
import { Smartphone, Download, Star } from 'lucide-react';

const DownloadAppsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-sky-100 border border-sky-200 rounded-full mb-8">
            <span className="text-sky-700 font-semibold">📱 MOBILE ACCESS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-navy-900">
            Manage Your Funnels
            <span className="block bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
              On the Go
            </span>
          </h2>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12">
            Never miss a lead or booking with the Flyrlink mobile app. Monitor your funnels, 
            respond to prospects, and manage your calendar from anywhere.
          </p>
        </div>

        {/* App Features & Download */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mobile Features */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-navy-900 mb-6">
              Everything You Need in Your Pocket
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200">
                <div className="w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  📊
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-navy-900 mb-2">Real-Time Analytics</h4>
                  <p className="text-gray-600">Track funnel performance and lead activity instantly</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200">
                <div className="w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  💬
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-navy-900 mb-2">Quick Responses</h4>
                  <p className="text-gray-600">Reply to prospects and schedule calls on the spot</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200">
                <div className="w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  🔔
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-navy-900 mb-2">Smart Notifications</h4>
                  <p className="text-gray-600">Get alerted for new leads and upcoming calls</p>
                </div>
              </div>
            </div>
          </div>

          {/* Download Section */}
          <div className="text-center">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
              <div className="mb-8">
                <Smartphone className="w-24 h-24 mx-auto text-sky-500 mb-6" />
                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  Download the Flyrlink App
                </h3>
                <p className="text-gray-600 mb-6">
                  Available for iOS and Android devices
                </p>
              </div>

              {/* App Store Buttons */}
              <div className="space-y-4 mb-8">
                <button className="w-full bg-black text-white py-4 px-6 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors">
                  <Download className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </button>
                
                <button className="w-full bg-black text-white py-4 px-6 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors">
                  <Download className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </button>
              </div>

              {/* App Rating */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">4.9/5</span> rating from 500+ users
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Benefits */}
        <div className="mt-16 bg-sky-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-navy-900 text-center mb-8">
            Why Our Users Love the Mobile App
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl mb-4">⚡</div>
              <div className="font-semibold text-navy-900 mb-2">2x Faster Response</div>
              <div className="text-gray-600">Reply to leads instantly</div>
            </div>
            <div>
              <div className="text-3xl mb-4">📈</div>
              <div className="font-semibold text-navy-900 mb-2">30% More Bookings</div>
              <div className="text-gray-600">Never miss an opportunity</div>
            </div>
            <div>
              <div className="text-3xl mb-4">🕒</div>
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
