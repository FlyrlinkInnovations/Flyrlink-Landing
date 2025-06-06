import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Layout from '../../components/Layout';

// Sample blog post data - replace with your actual content
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Flyrlink',
    excerpt: 'Learn how to make the most of Flyrlink to connect with experts in your field.',
    date: 'June 4, 2025',
    readTime: '5 min read',
    category: 'Tutorials'
  },
  {
    id: 2,
    title: 'The Future of Professional Networking',
    excerpt: 'How AI is transforming the way professionals connect and collaborate.',
    date: 'June 3, 2025',
    readTime: '7 min read',
    category: 'Insights'
  },
  {
    id: 3,
    title: 'Top Industries Using Flyrlink',
    excerpt: 'Discover which industries are benefiting the most from our platform.',
    date: 'June 2, 2025',
    readTime: '4 min read',
    category: 'Industry'
  },
];

const BlogPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Blog Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-navy-900 mb-4">Flyrlink Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, stories, and updates about connecting with professionals and growing your network.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-blue-600">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <CardTitle className="text-2xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <Link to={`/blog/${post.id}`} className="flex items-center gap-1">
                      Read more <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Stay Updated</h2>
              <p className="text-gray-600 mb-6">Subscribe to our newsletter to get the latest blog posts and updates.</p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button className="bg-blue-600 hover:bg-blue-700">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
