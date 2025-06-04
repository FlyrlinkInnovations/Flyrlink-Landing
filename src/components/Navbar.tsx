
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const getActiveTab = () => {
    switch (location.pathname) {
      case '/':
        return 'home';
      case '/find-experts':
        return 'experts';
      case '/about':
        return 'about';
      case '/contact':
        return 'contact';
      default:
        return 'home';
    }
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
              <h1 className="text-2xl font-bold text-navy-900 cursor-pointer hover:text-sky-600 transition-colors">
                Flyr<span className="text-sky-500">link</span>
              </h1>
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
              <TabsTrigger 
                value="experts" 
                className="data-[state=active]:bg-sky-500 data-[state=active]:text-white"
                asChild
              >
                <Link to="/find-experts">Find Experts</Link>
              </TabsTrigger>
              <TabsTrigger 
                value="about" 
                className="data-[state=active]:bg-sky-500 data-[state=active]:text-white"
                asChild
              >
                <Link to="/about">About</Link>
              </TabsTrigger>
              <TabsTrigger 
                value="contact" 
                className="data-[state=active]:bg-sky-500 data-[state=active]:text-white"
                asChild
              >
                <Link to="/contact">Contact</Link>
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
              <Link 
                to="/find-experts" 
                onClick={closeMobileMenu}
                className={`px-4 py-2 rounded-md text-center font-medium transition-colors ${
                  getActiveTab() === 'experts' 
                    ? 'bg-sky-500 text-white' 
                    : 'text-navy-900 hover:bg-sky-50 hover:text-sky-600'
                }`}
              >
                Find Experts
              </Link>
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
                className={`px-4 py-2 rounded-md text-center font-medium transition-colors ${
                  getActiveTab() === 'contact' 
                    ? 'bg-sky-500 text-white' 
                    : 'text-navy-900 hover:bg-sky-50 hover:text-sky-600'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
