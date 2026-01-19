import React from 'react';
import { Heart, MessageCircle, Share2, Bookmark, TrendingUp, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeedFeatures = () => {
  const features = [
    { icon: Heart, title: 'Engage with Content', description: 'Like, comment, and share posts from experts.' },
    { icon: MessageCircle, title: 'Join Conversations', description: 'Participate in meaningful discussions.' },
    { icon: Share2, title: 'Share Your Knowledge', description: 'Post your expertise and experiences.' },
    { icon: Bookmark, title: 'Save for Later', description: 'Bookmark important posts and resources.' },
    { icon: TrendingUp, title: 'Trending Topics', description: 'Stay updated with latest trends.' },
    { icon: Users, title: 'Build Your Network', description: 'Connect with like-minded professionals.' }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy-900">
              Stay Connected with Your Community
            </h2>

            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Our intelligent feed keeps you engaged with personalized content, expert insights,
              and meaningful connections that matter to your growth.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-sky-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              to="/waiting-list"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg transition-all duration-300"
            >
              Explore Feed Features
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right - Feed Preview */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              {/* Feed Header */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://randomuser.me/api/portraits/women/55.jpg"
                  alt="Expert Sarah"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-navy-900">Expert Sarah</h4>
                  <p className="text-sm text-gray-500">Business Coach • 2h ago</p>
                </div>
              </div>

              {/* Feed Content */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  5 Tips for Startup Success in 2025
                </h3>
                <p className="text-gray-600 mb-4">
                  Building a successful startup requires more than just a great idea.
                  Here are my top strategies that have helped hundreds of founders...
                </p>

                {/* Featured Image */}
                <img
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=300&fit=crop"
                  alt="Startup Success Tips"
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>

              {/* Feed Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <button className="flex items-center gap-2 text-gray-600 hover:text-sky-600 transition-colors">
                  <Heart className="w-5 h-5" />
                  <span className="font-medium">324</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-sky-600 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-medium">89</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-sky-600 transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span className="font-medium">Share</span>
                </button>
                <button className="text-gray-600 hover:text-sky-600 transition-colors">
                  <Bookmark className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedFeatures;
