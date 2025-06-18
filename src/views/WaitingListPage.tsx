import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { EnhancedWaitingListForm } from '@/components/EnhancedWaitingListForm';

const WaitingListPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-blue-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-sky-400 rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <Navbar />
      
      <div className="relative z-10 pt-20">
        <section className="min-h-screen py-20 px-6 flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Left side - Enhanced Image */}
              <div className="relative order-2 lg:order-1">
                <div className="relative z-10">
                  {/* Background decorative elements */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-sky-400/20 via-blue-400/20 to-purple-400/20 rounded-3xl blur-xl animate-pulse"></div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-sky-300/30 via-blue-300/30 to-purple-300/30 rounded-3xl blur-lg"></div>
                  
                  {/* Main image container */}
                  <div className="relative transform hover:scale-[1.02] transition-all duration-700 hover:rotate-1">
                    <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm">
                      {/* Image with enhanced styling */}
                      <img 
                        src="/wait.avif" 
                        alt="Join our waiting list - People celebrating" 
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Multi-layer overlays for depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-sky-900/20 via-transparent to-white/10"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-600/10"></div>
                      
                      {/* Animated border effect */}
                      <div className="absolute inset-0 rounded-3xl border-2 border-gradient-to-r from-sky-400/50 via-blue-400/50 to-purple-400/50 animate-pulse"></div>
                      
                      {/* Corner accent elements */}
                      <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-white/60 rounded-tl-lg"></div>
                      <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-white/60 rounded-tr-lg"></div>
                      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-white/60 rounded-bl-lg"></div>
                      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-white/60 rounded-br-lg"></div>
                    </div>
                    
                    {/* Floating decorative elements with better positioning */}
                    <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 transform rotate-45 animate-spin-slow shadow-2xl opacity-90 rounded-lg"></div>
                    <div className="absolute -top-4 -right-8 w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full animate-bounce shadow-2xl opacity-90"></div>
                    <div className="absolute -bottom-6 -left-8 w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 transform rotate-45 animate-pulse shadow-2xl opacity-90 rounded-lg"></div>
                    <div className="absolute -bottom-4 -right-6 w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full animate-bounce animation-delay-1000 shadow-2xl opacity-90"></div>
                    
                    {/* Enhanced sparkle effects */}
                    <div className="absolute top-16 left-16 animate-ping">
                      <div className="w-6 h-6 bg-yellow-400 transform rotate-45 opacity-75 shadow-lg"></div>
                    </div>
                    <div className="absolute top-24 right-20 animate-ping animation-delay-1000">
                      <div className="w-4 h-4 bg-pink-400 rounded-full opacity-75 shadow-lg"></div>
                    </div>
                    <div className="absolute bottom-20 left-20 animate-ping animation-delay-2000">
                      <div className="w-8 h-8 bg-green-400 transform rotate-45 opacity-75 shadow-lg"></div>
                    </div>
                    <div className="absolute bottom-32 right-16 animate-ping animation-delay-1500">
                      <div className="w-5 h-5 bg-blue-400 rounded-full opacity-75 shadow-lg"></div>
                    </div>
                  </div>
                  
                  {/* Additional glow effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-sky-400/10 via-blue-400/10 to-purple-400/10 blur-2xl animate-pulse -z-10"></div>
                </div>
              </div>
              
              {/* Right side - Sticky Form */}
              <div className="space-y-8 order-1 lg:order-2 lg:sticky lg:top-24">
                <div className="text-center lg:text-left">
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-sky-500/20 to-blue-500/20 rounded-full border border-sky-500/30 mb-6 animate-fade-in">
                    <span className="text-sky-700 text-sm font-medium">🚀 Early Access</span>
                  </div>
                  
                  <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-sky-800 to-blue-800 bg-clip-text text-transparent mb-6 animate-fade-in-up">
                    Join Our Early Access List
                  </h1>
                  
                  <div className="space-y-4 text-lg text-gray-600 animate-fade-in-up animation-delay-300">
                    <p className="flex items-start gap-3">
                      <span className="text-yellow-500 text-2xl animate-pulse">✨</span>
                      <span><strong className="text-gray-900">Be the First to Experience Flyrlink!</strong></span>
                    </p>
                    <p className="text-gray-600">
                      Register now to get early access, launch updates, and exclusive insider opportunities.
                    </p>
                  </div>
                </div>
                
                {/* Enhanced Form Container */}
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-sky-200 shadow-2xl p-8 transform hover:scale-105 transition-all duration-500 animate-fade-in-up animation-delay-600">
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 to-blue-500/5 rounded-3xl"></div>
                  <div className="relative z-10">
                    <EnhancedWaitingListForm />
                  </div>
                </div>
                
                {/* Enhanced Trust indicators */}
                <div className="grid grid-cols-3 gap-4 text-center animate-fade-in-up animation-delay-900">
                  <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-sky-200 hover:bg-white/80 transition-all duration-300 transform hover:scale-105">
                    <div className="text-3xl mb-3 animate-bounce">🔒</div>
                    <div className="text-sm font-medium text-gray-700">100% Secure</div>
                  </div>
                  <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-sky-200 hover:bg-white/80 transition-all duration-300 transform hover:scale-105">
                    <div className="text-3xl mb-3 animate-bounce animation-delay-300">⚡</div>
                    <div className="text-sm font-medium text-gray-700">Lightning Fast</div>
                  </div>
                  <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-sky-200 hover:bg-white/80 transition-all duration-300 transform hover:scale-105">
                    <div className="text-3xl mb-3 animate-bounce animation-delay-600">🎯</div>
                    <div className="text-sm font-medium text-gray-700">Personalized</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
      
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-blob { animation: blob 7s infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out; }
        
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-900 { animation-delay: 0.9s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-1500 { animation-delay: 1.5s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
};

export default WaitingListPage;
