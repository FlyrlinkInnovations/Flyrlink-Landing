
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Mail, Phone, MapPin, MessageSquare, Clock, Users } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      description: 'Send us an email anytime',
      contact: 'Contact@flyrlink.com',
      color: 'bg-blue-50 text-blue-600',
      link: 'mailto:Contact@flyrlink.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      description: 'Mon-Fri 9AM-6PM IST',
      contact: '+91 8125150893',
      color: 'bg-green-50 text-green-600',
      link: 'tel:+918125150893'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      description: 'Our headquarters',
      contact: 'Unit 407, Jain Sadguru image capital park, Hyderabad - 500081',
      color: 'bg-purple-50 text-purple-600',
      link: 'https://maps.google.com/?q=Unit+407,+Jain+Sadguru+image+capital+park,+Hyderabad+-+500081'
    }
  ];

  const faqs = [
    {
      question: 'How do I become an expert on Flyrlink?',
      answer: 'Apply through our expert onboarding process. We verify credentials and conduct background checks.'
    },
    {
      question: 'Is there a fee to use Flyrlink?',
      answer: 'Browsing and connecting is free. Experts set their own session rates, and we charge a small platform fee.'
    },
    {
      question: 'How do you verify experts?',
      answer: 'We check credentials, conduct interviews, and review past client feedback before approving experts.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Contact Us"
        description="Get in touch with Flyrlink. Contact our support team for questions about expert consultations, platform features, or partnership opportunities. We're here to help."
        keywords="contact flyrlink, customer support, expert network support, business inquiries, contact information, help center, support team, get in touch"
      />
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-sky-50 to-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-navy-900">Get in</span>
              <span className="block bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-700">
              Have questions? We're here to help. Reach out to us anytime and we'll get back to you quickly.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <a 
                  key={index} 
                  href={method.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block hover:no-underline"
                >
                  <Card className="text-center hover:shadow-lg transition-shadow h-full">
                    <CardContent className="p-8">
                      <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        {method.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-navy-900 mb-2">{method.title}</h3>
                      <p className="text-gray-600 mb-3">{method.description}</p>
                      <p className="font-medium text-sky-600 hover:underline">{method.contact}</p>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-sky-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Form */}
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl text-navy-900">Send us a Message</CardTitle>
                  <p className="text-gray-600">We'll respond within 24 hours</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-sky-500 hover:bg-sky-600">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Additional Info */}
              <div className="space-y-8">
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <MessageSquare className="w-5 h-5 text-sky-500" />
                      <h3 className="font-semibold text-navy-900">Quick Response</h3>
                    </div>
                    <p className="text-gray-600">
                      Our support team typically responds within 2-4 hours during business hours.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="w-5 h-5 text-sky-500" />
                      <h3 className="font-semibold text-navy-900">Business Hours</h3>
                    </div>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                      Saturday: 10:00 AM - 4:00 PM IST
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="w-5 h-5 text-sky-500" />
                      <h3 className="font-semibold text-navy-900">Community</h3>
                    </div>
                    <p className="text-gray-600">
                      Join our community for updates, tips, and connect with other users.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-navy-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-navy-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
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

export default Contact;
