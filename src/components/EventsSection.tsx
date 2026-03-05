'use client';

import Image from 'next/image';
import { MapPin, Calendar, Users, Clock, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const events = [
  { title: 'Wellness & Fitness', host: 'Dr. Kavya Narayan', location: 'Chennai, India', type: 'Online', date: 'Mar 15, 2026', time: '10:00 AM IST', attendees: 45, image: 'https://randomuser.me/api/portraits/women/65.jpg', coverImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=200&fit=crop' },
  { title: 'Tech/Next Startup', host: 'Ankit Verma', location: 'Online', type: 'Virtual', date: 'Mar 18, 2026', time: '3:00 PM IST', attendees: 78, image: 'https://randomuser.me/api/portraits/men/45.jpg', coverImage: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=200&fit=crop' },
  { title: 'Artistry & Design', host: 'Maya Chen', location: 'Bangalore, India', type: 'Hybrid', date: 'Mar 20, 2026', time: '2:00 PM IST', attendees: 32, image: 'https://randomuser.me/api/portraits/women/33.jpg', coverImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=200&fit=crop' },
];

export default function EventsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="events" className="py-28 bg-white">
      <div ref={ref} className={`max-w-7xl mx-auto px-6 reveal ${isVisible ? 'revealed' : ''}`}>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-brand/10 border border-brand/20 rounded-full text-brand text-xs font-semibold uppercase tracking-wider mb-4">
            Events
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 tracking-tight mb-6">
            Events You Never Want to Miss
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join live sessions, workshops, and networking events with industry experts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {events.map((event, index) => (
            <div key={index} className="group bg-white rounded-xl overflow-hidden border border-gray-200/80 card-premium hover:border-brand/30">
              <div className="relative h-44 overflow-hidden">
                <Image src={event.coverImage} alt={event.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <span className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700">{event.type}</span>
                <div className="absolute bottom-4 left-4 flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                  <Users className="w-3 h-3 text-gray-600" />
                  <span className="text-xs font-semibold text-gray-700">{event.attendees} joining</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-4">{event.title}</h3>
                <div className="flex items-center gap-3 mb-4">
                  <Image src={event.image} alt={event.host} width={32} height={32} className="w-8 h-8 rounded-full object-cover" />
                  <p className="text-sm font-medium text-gray-700">{event.host}</p>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-gray-600"><MapPin className="w-4 h-4" /><span className="text-sm">{event.location}</span></div>
                  <div className="flex items-center gap-2 text-gray-600"><Calendar className="w-4 h-4" /><span className="text-sm">{event.date}</span></div>
                  <div className="flex items-center gap-2 text-gray-600"><Clock className="w-4 h-4" /><span className="text-sm">{event.time}</span></div>
                </div>
                <a href="https://app.flyrlink.com/" className="block w-full bg-navy-900 hover:bg-brand text-white py-3 px-6 rounded-lg font-semibold transition-colors text-center">
                  Join Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <a href="https://app.flyrlink.com/" className="group inline-flex items-center gap-2 px-8 py-4 bg-brand hover:bg-brand-600 text-white font-semibold rounded-lg transition-all duration-300">
            Explore All Events
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="bg-gray-50 rounded-2xl p-12 text-center border border-gray-200/80">
          <h3 className="font-display text-3xl font-bold text-navy-900 mb-4">Want to Host an Event?</h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Share your expertise with our community. Create workshops, webinars, or networking events and connect with people who want to learn from you.
          </p>
          <a href="https://app.flyrlink.com/" className="group inline-flex items-center gap-2 px-8 py-4 bg-navy-900 hover:bg-brand text-white font-semibold rounded-lg transition-all duration-300">
            Create an Event
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
