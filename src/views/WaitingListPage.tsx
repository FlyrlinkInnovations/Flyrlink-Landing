import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { EnhancedWaitingListForm } from '@/components/EnhancedWaitingListForm';

const WaitingListPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-blue-50 relative overflow-hidden">
      <SEO 
        title="Join Waiting List"
        description="Be among the first to experience Flyrlink. Join our waiting list for early access to connect with verified experts and get exclusive launch benefits."
        keywords="join waiting list, early access, flyrlink launch, exclusive benefits, expert platform waitlist, pre-launch signup, early bird access, beta access"
      />
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
        <section className="min-h-screen py-20 px-6 flex items-center justify-center">
          <div className="max-w-2xl mx-auto w-full">
            
            {/* Centered Form Section */}
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-100 to-blue-100 border border-sky-200 rounded-full mb-8">
                <span className="text-2xl animate-bounce">🚀</span>
                <span className="text-sky-700 font-semibold">JOIN THE REVOLUTION</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-navy-900 to-sky-700 bg-clip-text text-transparent">
                  Be Among the First
                </span>
                <br />
                <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                  to Experience Flyrlink
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
                Join thousands of early adopters who are revolutionizing how they connect with experts. 
                Get exclusive early access and special launch benefits.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {['🎯 Personalized Matching', '⚡ Instant Access', '🔒 100% Secure', '🎁 Launch Bonuses'].map((feature, index) => (
                  <span 
                    key={index}
                    className="px-6 py-3 bg-white/80 backdrop-blur-sm border border-sky-200 rounded-full text-sm font-medium text-gray-700 hover:bg-white hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Enhanced Form Container */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl border border-sky-200 shadow-2xl p-8 mb-12 transform hover:scale-[1.02] transition-all duration-500 animate-fade-in-up animation-delay-600">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 to-blue-500/5 rounded-3xl"></div>
              <div className="relative z-10">
                <EnhancedWaitingListForm />
              </div>
            </div>
            
            {/* Enhanced Trust indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center animate-fade-in-up animation-delay-900">
              <div className="p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-sky-200 hover:bg-white/90 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-3 animate-bounce">🔒</div>
                <div className="font-semibold text-gray-800 mb-2">100% Secure</div>
                <div className="text-sm text-gray-600">Your data is protected with enterprise-grade security</div>
              </div>
              <div className="p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-sky-200 hover:bg-white/90 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-3 animate-bounce animation-delay-300">⚡</div>
                <div className="font-semibold text-gray-800 mb-2">Lightning Fast</div>
                <div className="text-sm text-gray-600">Get instant access when we launch</div>
              </div>
              <div className="p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-sky-200 hover:bg-white/90 transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-3 animate-bounce animation-delay-600">🎯</div>
                <div className="font-semibold text-gray-800 mb-2">Personalized</div>
                <div className="text-sm text-gray-600">Tailored experience just for you</div>
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
