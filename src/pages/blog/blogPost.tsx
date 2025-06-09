import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Define the blog post type
interface BlogPostType {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  readTime: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

// Sample blog post data - replace with your actual content
const blogPosts: BlogPostType[] = [
  {
    id: '1',
    title: 'Getting Started with Flyrlink',
    excerpt: 'Learn how to make the most of Flyrlink to connect with experts in your field.',
    content: [
      'Flyrlink is revolutionizing the way professionals connect and collaborate. In this guide, we\'ll walk you through the essential steps to get started with our platform and make the most of its features.',
      'Whether you\'re looking to expand your professional network, find mentors, or connect with industry experts, Flyrlink provides the tools you need to succeed in today\'s competitive landscape.',
      'Our AI-powered matching system ensures that you connect with the right professionals who can help you achieve your goals. From personalized recommendations to seamless communication tools, we\'ve got you covered.'
    ],
    date: 'June 4, 2025',
    readTime: '5 min read',
    category: 'Tutorials',
    author: {
      name: 'Alex Johnson',
      role: 'Community Manager',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    }
  },
  {
    id: '2',
    title: 'The Future of Professional Networking',
    excerpt: 'How AI is transforming the way professionals connect and collaborate.',
    content: [
      'The professional networking landscape is undergoing a significant transformation, thanks to advancements in AI technology.',
      'In this article, we explore how Flyrlink is at the forefront of this change, creating meaningful connections that matter.'
    ],
    date: 'June 3, 2025',
    readTime: '7 min read',
    category: 'Insights',
    author: {
      name: 'Sarah Williams',
      role: 'Co-founder',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    }
  },
  {
    id: '3',
    title: 'Top Industries Using Flyrlink',
    excerpt: 'Discover which industries are benefiting the most from our platform.',
    content: [
      'Flyrlink is being adopted across various industries, from tech startups to established enterprises.',
      'Learn how different sectors are leveraging our platform to connect with experts and drive innovation.'
    ],
    date: 'June 2, 2025',
    readTime: '4 min read',
    category: 'Industry',
    author: {
      name: 'Michael Chen',
      role: 'Industry Analyst',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg'
    }
  }
];

const BlogPost: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center pt-24">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Post not found</h2>
            <Button onClick={() => navigate('/blog')} className="mt-4">
              Back to Blog
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" asChild className="mb-8 -ml-4">
            <Link to="/blog" className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
            </Link>
          </Button>
        <Button variant="ghost" asChild className="mb-8 -ml-4">
          <Link to="/blog" className="flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
          </Link>
        </Button>

        <article className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {/* Featured Image */}
          <div className="h-64 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white text-center p-8">{post.title}</h1>
          </div>

          {/* Post Meta */}
          <div className="p-8">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime}
              </div>
              <div className="flex items-center">
                <Tag className="w-4 h-4 mr-1" />
                {post.category}
              </div>
            </div>

            {/* Post Content */}
            <div className="prose max-w-none">
              {post.content.map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Author Info */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <div className="flex items-center">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-lg">{post.author.name}</h3>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-navy-900 mb-8">You might also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter(p => p.id !== post.id)
              .slice(0, 2)
              .map(relatedPost => (
                <Link 
                  key={relatedPost.id} 
                  to={`/blog/${relatedPost.id}`}
                  className="block group"
                >
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{relatedPost.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{relatedPost.date}</span>
                      <span className="mx-2">•</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;
