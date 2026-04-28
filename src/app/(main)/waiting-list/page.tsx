import type { Metadata } from 'next';
import { EnhancedWaitingListForm } from '@/components/EnhancedWaitingListForm';

export const metadata: Metadata = {
  title: 'Join Waiting List',
  description: 'Be among the first to book verified experts on Flyrlink. Join the waiting list for early access and launch perks.',
  keywords: 'join waiting list, early access, flyrlink launch, book experts early',
};

export default function WaitingListPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-brand-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <section className="relative z-10 min-h-screen py-20 px-6 flex items-center justify-center">
        <div className="max-w-2xl mx-auto w-full">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-brand text-xs font-semibold uppercase tracking-wider mb-8">
              <span className="w-6 h-px bg-brand/40" />
              Early access
              <span className="w-6 h-px bg-brand/40" />
            </span>

            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-navy-900">
                Be among the first
              </span>
              <br />
              <span className="text-gradient">
                to book on Flyrlink.
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
              Get early access to 500+ verified experts across 12 categories.
              Free chat, instant booking, secure video sessions, all in one app.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['Personalized Matching', 'Instant Access', '100% Secure', 'Launch Bonuses'].map((feature, index) => (
                <span key={index} className="px-6 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-sm font-medium text-gray-700">
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Form Container */}
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl border border-gray-200/80 shadow-2xl p-8 mb-12">
            <EnhancedWaitingListForm />
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { emoji: '🔒', title: 'Secure', desc: 'Encrypted chats, secure payments, and refund protection.' },
              { emoji: '⚡', title: 'First in line', desc: 'Get instant access when we open up bookings.' },
              { emoji: '🎯', title: 'Right for you', desc: 'Get matched with experts who fit your goal and budget.' },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200/80 hover:bg-white/90 transition-all duration-300">
                <div className="text-4xl mb-3">{item.emoji}</div>
                <div className="font-semibold text-navy-900 mb-2">{item.title}</div>
                <div className="text-sm text-gray-600">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
