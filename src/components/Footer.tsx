import Link from 'next/link';
import { ArrowRight, Mail, MapPin, Shield, Lock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-950" role="contentinfo" aria-label="Site footer">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
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
                className="flex-1 md:w-72 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand transition-colors"
              />
              <button className="px-6 py-3 bg-brand hover:bg-brand-600 text-white font-semibold rounded-lg transition-colors flex items-center gap-2">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Flyrlink Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-display text-2xl font-bold text-white mb-4 inline-block">
              Flyrlink
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              Your direct line to knowledge, support, and transformation.
              Connecting you with verified experts for real-life solutions.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-4 h-4 text-brand-300 flex-shrink-0" />
                <span className="text-sm">Contact@flyrlink.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-4 h-4 text-brand-300 flex-shrink-0" />
                <span className="text-sm">support@flyrlink.com</span>
              </div>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-brand-300 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Flyrlink Innovations Pvt. Ltd., Bangalore, Karnataka, India
                </span>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/company/flyrlink-innovations/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-brand hover:border-brand transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://twitter.com/flyrlink" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-brand hover:border-brand transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.instagram.com/flyrlink/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-brand hover:border-brand transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61574439102498" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-brand hover:border-brand transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-white font-semibold mb-5">Platform</h4>
            <ul className="space-y-3">
              <li><a href="https://app.flyrlink.com/" className="text-gray-400 hover:text-white transition-colors text-sm">Find Experts</a></li>
              <li><a href="https://app.flyrlink.com/" className="text-gray-400 hover:text-white transition-colors text-sm">Become an Expert</a></li>
              <li><a href="https://app.flyrlink.com/" className="text-gray-400 hover:text-white transition-colors text-sm">Events</a></li>
              <li><a href="https://app.flyrlink.com/" className="text-gray-400 hover:text-white transition-colors text-sm">Social Feed</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-5">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link></li>
              <li><Link href="/affiliate" className="text-gray-400 hover:text-white transition-colors text-sm">Affiliate Program</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-5">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold mb-5">Connect</h4>
            <ul className="space-y-3">
              <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors text-sm">FAQ</Link></li>
              <li><Link href="/book-call" className="text-gray-400 hover:text-white transition-colors text-sm">Book a Call</Link></li>
              <li><Link href="/waiting-list" className="text-gray-400 hover:text-white transition-colors text-sm">Join Waiting List</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Trust & Compliance Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <Shield className="w-3.5 h-3.5" />
              <span>DPDP Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <Lock className="w-3.5 h-3.5" />
              <span>256-bit SSL Encryption</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <Shield className="w-3.5 h-3.5" />
              <span>Secure Payments</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm">
              &copy; 2026 Flyrlink Innovations Pvt. Ltd. All rights reserved.
            </div>
            <div className="text-gray-500 text-sm">
              Proudly supporting India&apos;s growing expert economy
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
