
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 border-t border-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-sky-400 mb-4">Flyrlink</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Your direct line to knowledge, support, and transformation. 
              Connecting you with verified experts for real-life solutions in real-time.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors duration-300 cursor-pointer">
                <span className="text-sm">f</span>
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors duration-300 cursor-pointer">
                <span className="text-sm">t</span>
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors duration-300 cursor-pointer">
                <span className="text-sm">in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-sky-400 transition-colors duration-300">Find Experts</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors duration-300">How It Works</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors duration-300">Pricing</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors duration-300">Success Stories</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-sky-400 transition-colors duration-300">Help Center</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors duration-300">Contact Us</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-sky-400 transition-colors duration-300">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2024 Flyrlink. All rights reserved.
          </div>
          <div className="text-gray-400 text-sm">
            Made with ❤️ for India's growing expert economy
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
