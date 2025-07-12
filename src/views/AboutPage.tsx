import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { SEO } from '../components/SEO';
import { Card, CardContent } from '../components/ui/card';

const About = () => {
  const teamMembers = [
    {
      name: 'Rajesh Poojari',
      role: 'Founder & CEO',
      bio: 'Former business consultant with a passion for democratizing expert access.',
      avatar: '👨‍💼'
    },
    {
      name: 'Supriya Pudhari',
      role: 'Co-founder',
      bio: 'Ex-Google product manager focused on user experience and platform growth.',
      avatar: '👩‍💻'
    },
    {
      name: 'Rahul Poojari',
      role: 'COO',
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
      <SEO 
        title="About Flyrlink"
        description="Learn about Flyrlink's mission to make expert knowledge accessible to everyone. We bridge the gap between professionals and users through seamless connections and trusted expertise."
        keywords="about flyrlink, expert network platform, professional networking, knowledge marketplace, company mission, expert consultations, business networking, trusted professionals"
      />
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
                  Flyrlink goes beyond just connecting professionals and users — it builds a vibrant community where growth, learning, and collaboration thrive. From business consultations to creative services, educational sessions to professional coaching, Flyrlink brings everything under one trusted platform. Our tools empower professionals to manage bookings, share updates, and monetize their expertise, while users enjoy access to reliable, high-quality services with ease. Flyrlink is where expertise meets opportunity, and every connection counts.
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
          <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
            <div className="bg-white rounded-2xl border border-sky-200 p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                At Flyrlink, our mission is to simplify connections between professionals and users by combining service bookings, content sharing, and event hosting on one platform. We aim to empower individuals and businesses while making every interaction seamless, trusted, and rewarding.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-sky-200 p-8 shadow-lg mt-8">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Our Vision</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                To create a world where finding and connecting with trusted professionals is effortless, empowering individuals and businesses to thrive. At Flyrlink, we envision a seamless platform that fosters collaboration, builds trust, and transforms the way services are accessed and delivered.
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
