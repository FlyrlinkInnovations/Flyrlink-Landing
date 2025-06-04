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
              <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">Our Story</h2>
              <div className="prose prose-lg mx-auto text-gray-700">
                <p className="mb-6">
                  Flyrlink was born from a simple frustration: finding the right expert for your specific needs 
                  was unnecessarily complicated. Whether you needed a nutritionist who understood your cultural 
                  preferences, a career coach familiar with your industry, or a fitness trainer who could work 
                  with your schedule — the process was always time-consuming and uncertain.
                </p>
                <p className="mb-6">
                  We realized that in a country as diverse as India, people needed more than generic solutions. 
                  They needed personalized expert connections that understood their context, goals, and constraints.
                </p>
                <p>
                  Today, Flyrlink is that bridge — connecting millions of people with verified experts who can 
                  provide the guidance, support, and knowledge they need to achieve their goals.
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

        {/* Mission Statement */}
        <section className="py-16 bg-gradient-to-b from-sky-50 to-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="bg-white rounded-2xl border border-sky-200 p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                To democratize access to expert knowledge and create a world where anyone, 
                anywhere can connect with the right professional to achieve their goals — 
                making growth, healing, and success accessible to all.
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
