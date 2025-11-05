import React from 'react';
import { Heart, MessageCircle, Share2, Bookmark, TrendingUp, Users } from 'lucide-react';

const FeedFeatures = () => {
  const features = [
    {
      icon: Heart,
      title: 'Engage with Content',
      description: 'Like, comment, and share posts from experts and peers in your network.'
    },
    {
      icon: MessageCircle,
      title: 'Join Conversations',
      description: 'Participate in meaningful discussions and get insights from industry leaders.'
    },
    {
      icon: Share2,
      title: 'Share Your Knowledge',
      description: 'Post your expertise, experiences, and help others in their journey.'
    },
    {
      icon: Bookmark,
      title: 'Save for Later',
      description: 'Bookmark important posts and resources to revisit anytime.'
    },
    {
      icon: TrendingUp,
      title: 'Trending Topics',
      description: 'Stay updated with the latest trends and hot discussions in your field.'
    },
    {
      icon: Users,
      title: 'Build Your Network',
      description: 'Connect with like-minded professionals and grow your influence.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy-900">
              Stay Connected with Your Community
            </h2>

            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Our intelligent feed keeps you engaged with personalized content, expert insights,
              and meaningful connections that matter to your growth.
            </p>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-sky-100 flex items-center justify-center text-sky-600">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-12">
              <button className="px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-sm hover:shadow-md">
                Explore Feed Features
              </button>
            </div>
          </div>

          {/* Right Image - Feed Preview */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              {/* Feed Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-sky-700 font-bold">
                  ES
                </div>
                <div>
                  <h4 className="font-bold text-navy-900">Expert Sarah</h4>
                  <p className="text-sm text-gray-500">Business Coach • 2h ago</p>
                </div>
              </div>

              {/* Feed Content */}
              <div className="mb-4">
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  5 Tips for Startup Success in 2025
                </h3>
                <p className="text-gray-600 mb-4">
                  Building a successful startup requires more than just a great idea.
                  Here are my top strategies that have helped hundreds of founders...
                </p>

                {/* Sample Image Placeholder */}
                <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500 font-semibold">Featured Content</p>
                  </div>
                </div>
              </div>

              {/* Feed Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <button className="flex items-center gap-2 text-gray-600 hover:text-sky-600 transition-colors">
                  <Heart className="w-5 h-5" />
                  <span className="font-semibold">324</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-sky-600 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-semibold">89</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-sky-600 transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span className="font-semibold">Share</span>
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-sky-600 transition-colors">
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
