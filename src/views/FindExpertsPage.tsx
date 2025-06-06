
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, MapPin, Star, Clock } from 'lucide-react';

const FindExpertsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const expertCategories = [
    { name: 'Health & Wellness', count: 250, icon: '🏥' },
    { name: 'Career & Business', count: 180, icon: '💼' },
    { name: 'Fitness & Nutrition', count: 150, icon: '💪' },
    { name: 'Mental Health', count: 120, icon: '🧠' },
    { name: 'Education & Tutoring', count: 200, icon: '📚' },
    { name: 'Technology', count: 90, icon: '💻' }
  ];

  const featuredExperts = [
    {
      name: 'Dr. Priya Sharma',
      specialty: 'Nutritionist',
      rating: 4.8,
      sessions: 500,
      price: '₹800/session',
      location: 'Mumbai',
      avatar: '👩‍⚕️'
    },
    {
      name: 'Amit Kumar',
      specialty: 'Career Coach',
      rating: 4.9,
      sessions: 300,
      price: '₹1200/session',
      location: 'Delhi',
      avatar: '👨‍💼'
    },
    {
      name: 'Ravi Mehta',
      specialty: 'Fitness Trainer',
      rating: 4.7,
      sessions: 400,
      price: '₹600/session',
      location: 'Bangalore',
      avatar: '🏋️‍♂️'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-sky-50 to-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-navy-900">Find Your Perfect</span>
                <br />
                <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                  Expert Match
                </span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                Connect with verified professionals who understand your needs and can help you achieve your goals.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search for experts, specialties, or services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-6 text-lg rounded-full border-2 border-sky-200 focus:border-sky-500"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-sky-500 hover:bg-sky-600 rounded-full px-8">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
              Browse by Category
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {expertCategories.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-sky-200">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="font-semibold text-navy-900 mb-2">{category.name}</h3>
                    <p className="text-sky-600 font-medium">{category.count} experts available</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Experts */}
        <section className="py-16 bg-sky-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
              Featured Experts
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredExperts.map((expert, index) => (
                <Card key={index} className="bg-white hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center">
                    <div className="text-5xl mb-4">{expert.avatar}</div>
                    <CardTitle className="text-navy-900">{expert.name}</CardTitle>
                    <p className="text-sky-600 font-medium">{expert.specialty}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="font-medium">{expert.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{expert.sessions} sessions</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{expert.location}</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-navy-900">{expert.price}</span>
                        <Button className="bg-sky-500 hover:bg-sky-600">
                          Book Session
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default FindExpertsPage;
