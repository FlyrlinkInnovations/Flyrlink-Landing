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
              <a href="https://www.linkedin.com/company/flyrlink-innovations/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors duration-300 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              {/* <li><a href="#" className="hover:text-sky-400 transition-colors duration-300">Find Experts</a></li> */}
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
            &copy; 2025 Flyrlink. All rights reserved.
          </div>
          <div className="text-gray-400 text-sm">
            Proudly supporting India's growing expert economy
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
