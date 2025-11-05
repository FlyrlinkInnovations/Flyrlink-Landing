import React, { useState, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const getActiveTab = () => {
    const path = location.pathname;

    if (path === '/') return 'home';
    // if (path === '/find-experts') return 'experts';
    if (path === '/about') return 'about';
    if (path === '/contact') return 'contact';
    if (path === '/careers') return 'careers';
    if (path === '/faq') return 'faq';
    if (path === '/blog' || path.startsWith('/blog/')) return 'blog';
    if (path === '/book-call') return 'book-call';

    return 'home';
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Company Logo/Name */}
          <div className="flex items-center">
            <Link to="/" onClick={closeMobileMenu}>
              <img 
                src="/Flyrlink logo blue-blank .png" 
                alt="Flyrlink" 
                className="h-10 w-auto cursor-pointer" 
              />
            </Link>
          </div>

          {/* Desktop Navigation Tabs */}
          <Tabs value={getActiveTab()} className="hidden md:block">
            <TabsList className="bg-sky-50 border border-sky-200">
              <TabsTrigger 
                value="home" 
                className="data-[state=active]:bg-sky-500 data-[state=active]:text-white"
                asChild
              >
                <Link to="/">Home</Link>
              </TabsTrigger>
              {/* <TabsTrigger 
                value="experts" 
                className="data-[state=active]:bg-sky-500 data-[state=active]:text-white"
                asChild
              >
                <Link to="/find-experts">Find Experts</Link>
              </TabsTrigger> */}
              <TabsTrigger 
                value="about" 
                className="data-[state=active]:bg-sky-500 data-[state=active]:text-white"
                asChild
              >
                <Link to="/about">About</Link>
              </TabsTrigger>
              <TabsTrigger
                value="contact"
                asChild
                className="px-6 py-2 text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-sky-600 data-[state=active]:shadow-sm"
              >
                <Link to="/contact">Contact</Link>
              </TabsTrigger>
              <TabsTrigger
                value="careers"
                asChild
                className="px-4 py-2 text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-sky-600 data-[state=active]:shadow-sm"
              >
                <Link to="/careers">Careers</Link>
              </TabsTrigger>
              <TabsTrigger
                value="blog"
                asChild
                className="px-4 py-2 text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-sky-600 data-[state=active]:shadow-sm"
              >
                <Link to="/blog">Blog</Link>
              </TabsTrigger>
              <TabsTrigger 
                value="faq" 
                asChild
                className="px-4 py-2 text-sm font-medium data-[state=active]:bg-white data-[state=active]:text-sky-600 data-[state=active]:shadow-sm"
              >
                <Link to="/faq">FAQ's</Link>
              </TabsTrigger>
              <TabsTrigger 
                value="book-call" 
                asChild
                className="px-4 py-2 text-sm font-medium bg-sky-500 text-white hover:bg-sky-600 data-[state=active]:bg-sky-600 data-[state=active]:text-white ml-2"
              >
                <Link to="/book-call">Book a Call</Link>
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="p-2 text-navy-900 hover:text-sky-600 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2 pt-4">
              <Link 
                to="/" 
                onClick={closeMobileMenu}
                className={`px-4 py-2 rounded-md text-center font-medium transition-colors ${
                  getActiveTab() === 'home' 
                    ? 'bg-sky-500 text-white' 
                    : 'text-navy-900 hover:bg-sky-50 hover:text-sky-600'
                }`}
              >
                Home
              </Link>
              {/* <Link 
                to="/find-experts" 
                onClick={closeMobileMenu}
                className={`px-4 py-2 rounded-md text-center font-medium transition-colors ${
                  getActiveTab() === 'experts' 
                    ? 'bg-sky-500 text-white' 
                    : 'text-navy-900 hover:bg-sky-50 hover:text-sky-600'
                }`}
              >
                Find Experts
              </Link> */}
              <Link 
                to="/about" 
                onClick={closeMobileMenu}
                className={`px-4 py-2 rounded-md text-center font-medium transition-colors ${
                  getActiveTab() === 'about' 
                    ? 'bg-sky-500 text-white' 
                    : 'text-navy-900 hover:bg-sky-50 hover:text-sky-600'
                }`}
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className={`block px-4 py-3 text-sm font-medium rounded-md ${location.pathname === '/contact' ? 'bg-sky-50 text-sky-600' : 'text-gray-700 hover:bg-gray-50'}`}
              >
                Contact
              </Link>
              <Link
                to="/careers"
                className={`block px-4 py-2 text-base font-medium ${getActiveTab() === 'careers' ? 'text-sky-600' : 'text-gray-700 hover:text-sky-600'}`}
                onClick={closeMobileMenu}
              >
                Careers
              </Link>
              <Link
                to="/blog"
                className={`block px-4 py-2 text-base font-medium ${getActiveTab() === 'blog' ? 'text-sky-600' : 'text-gray-700 hover:text-sky-600'}`}
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
              <Link
                to="/faq"
                className={`block px-4 py-2 text-base font-medium ${getActiveTab() === 'faq' ? 'text-sky-600' : 'text-gray-700 hover:text-sky-600'}`}
                onClick={closeMobileMenu}
              >
                FAQ's
              </Link>
              <Link
                to="/book-call"
                className="block mx-4 mt-2 px-4 py-2 text-base font-medium text-center rounded-md bg-sky-500 text-white hover:bg-sky-600"
                onClick={closeMobileMenu}
              >
                Book a Call
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default memo(Navbar);
