import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User, Eye, Heart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Layout from '../../components/Layout';

// Blog post interface based on API response
interface BlogPost {
  uid: string;
  title: string;
  description: string;
  meta_title: string;
  meta_description: string;
  banner_image: string;
  view_count: number;
  like_count: number;
  comment_count: number;
  created_at: string;
  user: {
    uid: string;
    username: string;
    email: string;
    profile_image: string;
  };
}

interface BlogResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: BlogPost[];
}

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch(
          'https://api.foundershub.ai/api/blog/blogs/user_blogs/?page=1&page_size=100&user_uid=7e2e8b8dbcd98eac'
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        
        const data: BlogResponse = await response.json();
        setBlogPosts(data.results);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const extractExcerpt = (description: string, maxLength: number = 150) => {
    // Remove HTML tags and get plain text
    const plainText = description.replace(/<[^>]*>/g, '');
    return plainText.length > maxLength 
      ? plainText.substring(0, maxLength) + '...'
      : plainText;
  };

  const calculateReadTime = (description: string) => {
    const wordsPerMinute = 200;
    const wordCount = description.split(' ').length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readTime} min read`;
  };

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-blue-50 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading blog posts...</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-blue-50 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <p className="text-red-600">Error: {error}</p>
              <Button 
                onClick={() => window.location.reload()} 
                className="mt-4 bg-blue-600 hover:bg-blue-700"
              >
                Try Again
              </Button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-blue-50 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Blog Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-100 to-blue-100 border border-sky-200 rounded-full mb-6">
              <span className="text-sky-700 font-semibold">FLYRLINK INSIGHTS</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-navy-900 mb-6">
              Our <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Insights, stories, and expert advice to help you connect with professionals and grow your career.
            </p>
            <div className="mt-6 text-sm text-gray-500">
              {blogPosts.length} articles • Updated regularly
            </div>
          </div>

          {/* Featured Post */}
          {blogPosts.length > 0 && (
            <div className="mb-16">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={blogPosts[0].banner_image} 
                      alt={blogPosts[0].title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                        Featured
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(blogPosts[0].created_at)}
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4 leading-tight">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {extractExcerpt(blogPosts[0].description, 200)}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {calculateReadTime(blogPosts[0].description)}
                        </div>
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {blogPosts[0].view_count}
                        </div>
                        <div className="flex items-center">
                          <Heart className="w-4 h-4 mr-1" />
                          {blogPosts[0].like_count}
                        </div>
                      </div>
                      <Button variant="default" className="bg-blue-600 hover:bg-blue-700" asChild>
                        <a 
                          href={`https://app.foundershub.ai/user/blogs/${blogPosts[0].uid}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          Read Article <ArrowRight className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.uid} className="flex flex-col h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={post.banner_image} 
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                      Article
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    {formatDate(post.created_at)}
                  </div>
                  <CardTitle className="text-xl font-bold text-navy-900 leading-tight line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="flex-grow pb-3">
                  <p className="text-gray-600 leading-relaxed line-clamp-3">
                    {extractExcerpt(post.description)}
                  </p>
                </CardContent>
                
                <CardFooter className="flex justify-between items-center pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {calculateReadTime(post.description)}
                    </div>
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {post.view_count}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <a 
                      href={`https://app.foundershub.ai/user/blogs/${post.uid}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-700"
                    >
                      Read <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-8 md:p-12 rounded-2xl shadow-xl text-white">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
              <p className="text-sky-100 mb-8 text-lg">
                Get the latest insights, tips, and updates delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-grow px-6 py-3 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-900 placeholder-gray-500"
                />
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 font-semibold">
                  Subscribe
                </Button>
              </div>
              <p className="text-sky-200 text-sm mt-4">
                Join 1,000+ professionals already subscribed
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
