import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { AIStructuredData } from './AIOptimizedContent';
import { ArrowRight, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Flyrlink',
    description: 'AI-powered expert network connecting professionals with verified consultants for real-time knowledge sharing and business solutions.',
    url: 'https://flyrlink.com',
    logo: 'https://flyrlink.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['English']
    },
    sameAs: [
      'https://www.linkedin.com/company/flyrlink-innovations/',
      'https://twitter.com/flyrlink'
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US'
    }
  };

  return (
    <footer className="bg-navy-900" role="contentinfo" aria-label="Site footer">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                Stay Updated with Flyrlink
              </h3>
              <p className="text-gray-400">
                Get the latest news and expert insights delivered to your inbox.
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-72 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-sky-500 transition-colors"
              />
              <button className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg transition-colors flex items-center gap-2">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-2xl font-bold text-white mb-4 inline-block">
              Flyrlink
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your direct line to knowledge, support, and transformation.
              Connecting you with verified experts for real-life solutions.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-4 h-4 text-sky-500" />
                <span className="text-sm">hello@flyrlink.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-sky-500" />
                <span className="text-sm">India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/flyrlink-innovations/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 hover:text-white">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com/flyrlink"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 hover:text-white">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-5">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-sky-400 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-sky-400 transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-sky-400 transition-colors">Blog</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">Success Stories</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-semibold mb-5">Support</h4>
            <ul className="space-y-3">
              <li><Link to="/faq" className="text-gray-400 hover:text-sky-400 transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-sky-400 transition-colors">Contact Us</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-white font-semibold mb-5">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">Expert Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">API Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">Community</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm">
              © 2025 Flyrlink. All rights reserved.
            </div>
            <div className="text-gray-500 text-sm">
              Proudly supporting India's growing expert economy
            </div>
          </div>
        </div>
      </div>

      <AIStructuredData data={organizationSchema} />
    </footer>
  );
};

export default memo(Footer);
