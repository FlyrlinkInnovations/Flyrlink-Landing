import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';

const About = () => {
  const teamMembers = [
    {
      name: 'Rajesh Poojari',
      role: 'Founder & CEO',
      bio: 'Former healthcare consultant with a passion for democratizing expert access.',
      avatar: '👨‍💼'
    },
    {
      name: 'Sneha Gupta',
      role: 'Head of Product',
      bio: 'Ex-Google product manager focused on user experience and platform growth.',
      avatar: '👩‍💻'
    },
    {
      name: 'Rahul Singh',
      role: 'CTO',
      bio: 'Tech veteran who believes technology should simplify, not complicate.',
      avatar: '👨‍💻'
    }
  ];

  const values = [
    {
      title: 'Trust & Verification',
      description: 'Every expert is thoroughly vetted to ensure quality and credibility.',
      icon: '🔒'
    },
    {
      title: 'Accessibility',
      description: 'Making expert knowledge affordable and available to everyone.',
      icon: '🌍'
    },
    {
      title: 'Community',
      description: 'Building connections that go beyond transactions.',
      icon: '🤝'
    },
    {
      title: 'Innovation',
      description: 'Continuously improving how people find and connect with experts.',
      icon: '💡'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-sky-50 to-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-navy-900">About</span>
              <span className="block bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                Flyrlink
              </span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              We're on a mission to make expert knowledge accessible to everyone, 
              anywhere, anytime. Because growth shouldn't be limited by geography or connections.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">Get to know us</h2>
              <div className="prose prose-lg mx-auto text-gray-700">
                <p className="mb-6">
                  Flyrlink was built to bridge the gap between professionals and users, offering a seamless platform for service bookings, expert content sharing, and trusted connections. We empower individual experts and small businesses to showcase their skills, host events, and collaborate while giving users a reliable space to find services and engage with professionals across diverse fields. With Flyrlink, every interaction is intuitive, trustworthy, and rewarding -transforming how professionals and users connect and grow together.
                </p>
                <p className="mb-6">
                  Flyrlink goes beyond just connecting professionals and users — it builds a vibrant community where growth, learning, and collaboration thrive. From health consultations to creative services, educational sessions to wellness coaching, Flyrlink brings everything under one trusted platform. Our tools empower professionals to manage bookings, share updates, and monetize their expertise, while users enjoy access to reliable, high-quality services with ease. Flyrlink is where expertise meets opportunity, and every connection counts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-sky-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-4">{value.title}</h3>
                    <p className="text-gray-700">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">Meet Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="text-5xl mb-4">{member.avatar}</div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-2">{member.name}</h3>
                    <p className="text-sky-600 font-medium mb-4">{member.role}</p>
                    <p className="text-gray-700">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-gradient-to-b from-sky-50 to-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-sky-100">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="p-12">
                  <h2 className="text-4xl font-bold text-navy-900 mb-6">
                    Our <span className="text-blue-600">Mission</span>
                  </h2>
                  <div className="prose prose-lg text-gray-700">
                    <p className="mb-6">
                      At Flyrlink, our mission is to simplify connections between professionals and users by combining service bookings, content sharing, and event hosting on one platform. We aim to empower individuals and businesses while making every interaction seamless, trusted, and rewarding.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                        <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-700">Empower professionals to showcase their expertise</p>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                        <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-700">Create seamless connections between experts and users</p>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                        <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-700">Build a trusted platform for knowledge sharing</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-full min-h-[400px] bg-gradient-to-br from-blue-50 to-sky-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="relative w-full h-full max-w-md mx-auto">
                      <div className="absolute inset-0 bg-white/80 rounded-2xl transform rotate-3"></div>
                      <div className="absolute inset-0 bg-white/80 rounded-2xl transform -rotate-3"></div>
                      <div className="relative h-full bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="relative h-full w-full">
                          <div className="absolute inset-0 flex items-center justify-center bg-blue-50 rounded-2xl">
                            <div className="text-center p-4">
                              <div className="text-4xl mb-2">📷</div>
                              <p className="text-blue-600 font-medium">Mission Image</p>
                              <p className="text-sm text-gray-500 mt-1">Should appear here</p>
                            </div>
                          </div>
                          <img
                            src={`${window.location.origin}/Mission.png`}
                            alt="Our Mission - Connecting Experts with Users"
                            className="w-full h-full object-cover rounded-2xl relative z-10 border-4 border-white shadow-lg"
                            onError={(e) => {
                              console.error('Failed to load image:', e);
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              target.previousElementSibling?.classList.remove('hidden');
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vision Section */}
          <div className="max-w-4xl mx-auto px-6 mt-16">
            <div className="bg-white rounded-2xl border border-sky-200 p-12 shadow-lg text-center">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Our Vision</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                To create a world where finding and connecting with trusted professionals is effortless, empowering individuals and businesses to thrive. We envision a seamless platform that fosters collaboration, builds trust, and transforms the way services are accessed and delivered.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default About;
